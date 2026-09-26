import { execSync } from "node:child_process";
import { existsSync, cpSync, mkdirSync, writeFileSync } from "node:fs";
import { resolve, join } from "node:path";

console.log("[build:hostinger] Starting build for Hostinger deployment...");

// Run standard TanStack Start / Vite build first
execSync("npx --no-install vite build", { stdio: "inherit" });

const distDir = resolve("dist");
if (!existsSync(distDir)) {
  mkdirSync(distDir, { recursive: true });
}

// Copy static assets generated from build (.vercel/output/static or public)
const staticOutput = resolve(".vercel/output/static");
if (existsSync(staticOutput)) {
  console.log("[build:hostinger] Copying static build outputs to ./dist/ ...");
  cpSync(staticOutput, distDir, { recursive: true });
}

// Also ensure all public files (images, logos, favicon, etc.) are present
const publicDir = resolve("public");
if (existsSync(publicDir)) {
  console.log("[build:hostinger] Ensuring all public assets are in ./dist/ ...");
  cpSync(publicDir, distDir, { recursive: true });
}

// Check for index.html or generate an SPA entry point with proper fallback
const distIndex = join(distDir, "index.html");
if (!existsSync(distIndex)) {
  // If Nitro placed index or HTML files elsewhere, grab or synthesize
  console.log("[build:hostinger] Creating Hostinger-compatible index.html with SPA redirection...");
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
    <script type="module" crossorigin src="/assets/index.js"></script>
    <link rel="stylesheet" crossorigin href="/assets/styles.css">
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>`;
  writeFileSync(distIndex, htmlTemplate, "utf8");
}

// Generate .htaccess for Hostinger Apache server to support SPA / Clean URLs & Gzip/caching
const htaccessContent = `# Hostinger Apache Configuration for Omnicore Solutions SPA
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
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

console.log("[build:hostinger] Successfully prepared static deployment bundle in ./dist/");
