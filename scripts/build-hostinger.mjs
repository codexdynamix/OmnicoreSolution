import { execSync } from "node:child_process";
import { existsSync, cpSync, mkdirSync, writeFileSync, readdirSync } from "node:fs";
import { resolve, join } from "node:path";

console.log("[build:hostinger] Starting build for Hostinger deployment...");

// Run Vite build using npm wrapper
execSync("node scripts/with-app-env.mjs vite build", { stdio: "inherit" });

const distDir = resolve("dist");
if (!existsSync(distDir)) {
  mkdirSync(distDir, { recursive: true });
}

// Copy static assets generated from build (.vercel/output/static)
const staticOutput = resolve(".vercel/output/static");
if (existsSync(staticOutput)) {
  console.log("[build:hostinger] Copying static build outputs to ./dist/ ...");
  cpSync(staticOutput, distDir, { recursive: true });
}

// Ensure all public files (images, logos, favicon, api, etc.) are present
const publicDir = resolve("public");
if (existsSync(publicDir)) {
  console.log("[build:hostinger] Ensuring all public assets & PHP API files are in ./dist/ ...");
  cpSync(publicDir, distDir, { recursive: true });
}

// Find generated JS and CSS bundles in dist/assets
const assetsDir = join(distDir, "assets");
let mainJsFile = "index.js";
let mainCssFile = "styles.css";

if (existsSync(assetsDir)) {
  const assetFiles = readdirSync(assetsDir);
  const foundJs = assetFiles.find((f) => f.startsWith("index-") && f.endsWith(".js")) ||
                  assetFiles.find((f) => f.endsWith(".js") && !f.includes("chunk"));
  const foundCss = assetFiles.find((f) => f.endsWith(".css"));
  if (foundJs) mainJsFile = foundJs;
  if (foundCss) mainCssFile = foundCss;
  console.log(`[build:hostinger] Detected bundle assets: JS=${mainJsFile}, CSS=${mainCssFile}`);
}

// Generate Hostinger-compatible index.html with SPA entry point and correct asset links
const distIndex = join(distDir, "index.html");
const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Omnicore Solutions | Machinery for Zimbabwe's Farms, Mines and Sites</title>
    <meta name="description" content="Harare-based supplier of mining equipment, construction machinery hire, hardware, farming plant and industrial machines." />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="icon" type="image/png" href="/mark.png" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap" />
    <script type="module" crossorigin src="/assets/${mainJsFile}"></script>
    <link rel="stylesheet" crossorigin href="/assets/${mainCssFile}">
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`;
writeFileSync(distIndex, htmlTemplate, "utf8");

// Generate .htaccess for Hostinger Apache/LiteSpeed server
// Supports SPA routing, PHP API pass-through, and compression
const htaccessContent = `# ========================================================
# Hostinger Apache / LiteSpeed Configuration
# Omnicore Solutions - React SPA + PHP/MySQL Backend
# ========================================================

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Allow direct access to PHP backend in /api/
  RewriteCond %{REQUEST_URI} ^/api/ [NC]
  RewriteRule ^ - [L]

  # Don't rewrite real existing files or directories
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  # Redirect all other routes to React SPA index.html
  RewriteRule . /index.html [L]
</IfModule>

# Caching & Compression for Fast Loading
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json image/svg+xml
</IfModule>

<IfModule mod_headers.c>
  <FilesMatch "\\.(jpg|jpeg|png|gif|svg|webp|ico|css|js|woff2)$">
    Header set Cache-Control "max-age=2592000, public"
  </FilesMatch>
</IfModule>
`;

writeFileSync(join(distDir, ".htaccess"), htaccessContent, "utf8");

console.log("[build:hostinger] Successfully prepared static deployment bundle with PHP API in ./dist/");
