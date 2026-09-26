import { i as __toESM } from "../_runtime.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { d as whatsappUrl, i as getService, l as services, n as equipment, r as getInsight, s as nav, t as cn, u as site } from "./site-NmzgmCl5.mjs";
import { c as require_jsx_runtime, l as require_react, s as Slot } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, q as notFound, v as createFileRoute, x as useRouter, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ChevronsRight, B as ArchiveRestore, C as Globe, D as Columns2, E as ExternalLink, F as Check, I as Building2, L as ArrowUpRight, M as ChevronRight, N as ChevronLeft, O as Clock, S as Mail, T as Eye, _ as PenLine, a as Upload, b as Maximize2, c as Trash2, d as Search, f as RotateCcw, h as Phone, i as Users, j as ChevronsLeft, k as CircleCheck, l as Sparkles, m as Plus, n as X, o as Truck, p as Recycle, s as TriangleAlert, t as ZoomIn, v as Package, w as FileText, x as MapPin, y as Menu } from "../_libs/lucide-react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-fxs5xZaR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			})
		]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-[color,background-color,box-shadow,transform,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow-sm hover:opacity-90",
			secondary: "bg-secondary text-secondary-foreground hover:bg-border",
			outline: "bg-card text-foreground shadow-[0_0_0_1px_rgba(0,0,0,0.08)] hover:shadow-[0_0_0_1px_rgba(0,0,0,0.14)]",
			ghost: "text-foreground hover:bg-secondary",
			link: "rounded-none text-accent underline-offset-4 hover:underline",
			whatsapp: "bg-whatsapp text-whatsapp-foreground shadow-sm hover:opacity-90"
		},
		size: {
			default: "h-11 px-5",
			sm: "h-9 px-3.5 text-xs",
			lg: "h-12 px-6 text-base",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	});
}
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto flex min-h-[70vh] max-w-lg flex-col items-center justify-center px-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase",
				children: "404"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-4 text-4xl font-semibold tracking-tight",
				children: "This page is not in the yard."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-muted-foreground",
				children: "The machine you are looking for may have moved. Try the catalogue, or talk to us on WhatsApp."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex flex-wrap items-center justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						children: "Home"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/catalogue",
						children: "Catalogue"
					})
				})]
			})
		]
	});
}
/**
* App-wide client provider mounted once near the root (in `src/routes/__root.tsx`):
*
*   <AuthProvider><Outlet /></AuthProvider>
*
* Better Auth's React client (`@/lib/auth/client`) needs NO context provider —
* its `useSession()` works standalone — so this is a passthrough today. It's
* kept as the single, stable mount point for any future client-side providers
* (e.g. a toast or theme provider) without churning the root shell.
*/
function AuthProvider({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var CONNECTOR_TOKEN_READY_EVENT = "grok:connector-token-ready";
function isGrokEmbedderOrigin(origin) {
	try {
		const url = new URL(origin);
		if (url.protocol !== "https:" && url.protocol !== "http:") return false;
		const host = url.hostname.toLowerCase();
		if (host === "grok.com" || host.endsWith(".grok.com")) return true;
		if (host === "localhost" || host === "127.0.0.1" || host === "[::1]") return true;
		return false;
	} catch {
		return false;
	}
}
function isSandboxPreviewGuestHost(hostname) {
	const host = hostname.toLowerCase();
	return host === "grok-sandbox.com" || host.endsWith(".grok-sandbox.com");
}
function isRemintPreviewPair(guestHost, parentHost) {
	const guest = guestHost.toLowerCase();
	const parent = parentHost.toLowerCase();
	const i = guest.indexOf(".preview.");
	if (i <= 0) return false;
	const label = guest.slice(0, i);
	const rest = guest.slice(i + 9);
	if (label.includes(".") || !rest.includes(".")) return false;
	return parent === rest || parent === `grok.${rest}`;
}
function resolveParentEmbedderOrigin(parentIsSelf, referrer, ancestorOrigin, guestHostname = "") {
	if (parentIsSelf) return null;
	for (const candidate of [referrer, ancestorOrigin ?? ""].filter(Boolean)) try {
		const url = new URL(candidate.includes("://") ? candidate : `https://${candidate}`);
		if (url.protocol !== "https:" && url.protocol !== "http:") continue;
		if (isGrokEmbedderOrigin(url.origin)) return url.origin;
		if (isSandboxPreviewGuestHost(guestHostname) || isRemintPreviewPair(guestHostname, url.hostname)) return url.origin;
	} catch {}
	return null;
}
/**
* Guest side of the grok-web ↔ sandbox preview postMessage bridge.
*
* Activates only when this page is framed by an allowlisted Grok embedder.
* Top-level runs (download/export, local `npm run dev`, deployed sites) noop.
*/
var PREVIEW_BRIDGE_CHANNEL = "grok-preview-bridge";
var EnvelopeSchema = object({
	channel: literal(PREVIEW_BRIDGE_CHANNEL),
	version: number().int().positive(),
	type: string().min(1)
});
var HelloSchema = EnvelopeSchema.extend({ type: literal("hello") });
var NavigateSchema = EnvelopeSchema.extend({
	type: literal("navigate"),
	path: string().min(1)
});
var HistorySchema = EnvelopeSchema.extend({
	type: literal("history"),
	delta: union([literal(-1), literal(1)])
});
var ConnectorTokenReadySchema = EnvelopeSchema.extend({ type: literal("connector-token-ready") });
function isSafeBridgePath(path) {
	if (!path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return false;
	try {
		return new URL(path, "https://preview.invalid").origin === "https://preview.invalid";
	} catch {
		return false;
	}
}
/**
* Origin of the Grok embedder framing this page, or null when the page runs
* top-level (download/export, local `npm run dev`, deployed sites) or under a
* non-Grok parent. Client-only; null during SSR.
*/
function resolveCurrentEmbedderOrigin() {
	if (typeof window === "undefined") return null;
	const ancestorOrigin = typeof location.ancestorOrigins !== "undefined" && location.ancestorOrigins.length > 0 ? location.ancestorOrigins[0] : null;
	return resolveParentEmbedderOrigin(window.parent === window, document.referrer, ancestorOrigin, window.location.hostname);
}
/**
* Install host↔guest messaging. Returns a dispose function.
* Noops (returns a no-op dispose) when not embedded under a Grok parent.
*/
function installPreviewHostBridge(options = {}) {
	const parentOrigin = resolveCurrentEmbedderOrigin();
	if (parentOrigin === null) return () => {};
	const ROOT_STATE_KEY = "__grokPreviewBridgeRoot";
	const originalPushState = window.history.pushState.bind(window.history);
	const originalReplaceState = window.history.replaceState.bind(window.history);
	const isAtHistoryRoot = () => {
		const state = window.history.state;
		return Boolean(state && typeof state === "object" && state[ROOT_STATE_KEY] === true);
	};
	try {
		const current = window.history.state;
		if (!(current !== null && typeof current === "object" && Object.prototype.hasOwnProperty.call(current, ROOT_STATE_KEY))) {
			const isRoot = window.history.length <= 1;
			originalReplaceState(current && typeof current === "object" ? {
				...current,
				[ROOT_STATE_KEY]: isRoot
			} : { [ROOT_STATE_KEY]: isRoot }, "", window.location.href);
		}
	} catch {}
	const post = (message) => {
		window.parent.postMessage(message, parentOrigin);
	};
	const reportLocation = () => {
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "location",
			path: window.location.pathname || "/",
			search: window.location.search,
			hash: window.location.hash
		});
	};
	const reportRoutes = () => {
		const paths = options.getRoutePaths?.() ?? [];
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "routes",
			paths
		});
	};
	const defaultNavigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		try {
			const url = new URL(path, window.location.origin);
			if (url.origin !== window.location.origin) return;
			const next = `${url.pathname}${url.search}${url.hash}`;
			window.history.pushState(window.history.state, "", next);
			window.dispatchEvent(new PopStateEvent("popstate", { state: window.history.state }));
		} catch {}
	};
	const navigate = (path) => {
		if (!isSafeBridgePath(path)) return;
		if (options.navigate) {
			options.navigate(path);
			return;
		}
		defaultNavigate(path);
	};
	const announce = () => {
		reportLocation();
		reportRoutes();
		post({
			channel: PREVIEW_BRIDGE_CHANNEL,
			version: 1,
			type: "ready"
		});
	};
	const onHello = (data) => {
		if (!HelloSchema.safeParse(data).success) return;
		announce();
	};
	const onNavigate = (data) => {
		const parsed = NavigateSchema.safeParse(data);
		if (!parsed.success) return;
		navigate(parsed.data.path);
		queueMicrotask(reportLocation);
	};
	const onHistory = (data) => {
		const parsed = HistorySchema.safeParse(data);
		if (!parsed.success) return;
		if (parsed.data.delta === -1 && isAtHistoryRoot()) return;
		window.history.go(parsed.data.delta);
	};
	const onConnectorTokenReady = (data) => {
		if (!ConnectorTokenReadySchema.safeParse(data).success) return;
		window.dispatchEvent(new Event(CONNECTOR_TOKEN_READY_EVENT));
	};
	const hostMessageHandlers = /* @__PURE__ */ new Map([
		["hello", onHello],
		["navigate", onNavigate],
		["history", onHistory],
		["connector-token-ready", onConnectorTokenReady]
	]);
	const onMessage = (event) => {
		if (event.source !== window.parent) return;
		if (event.origin !== parentOrigin) return;
		const envelope = EnvelopeSchema.safeParse(event.data);
		if (!envelope.success || envelope.data.version !== 1) return;
		hostMessageHandlers.get(envelope.data.type)?.(event.data);
	};
	const onPopState = () => {
		reportLocation();
	};
	const onHashChange = () => {
		reportLocation();
	};
	window.history.pushState = (data, unused, url) => {
		const next = data && typeof data === "object" ? {
			...data,
			[ROOT_STATE_KEY]: false
		} : data;
		originalPushState(next, unused, url);
		reportLocation();
	};
	window.history.replaceState = (data, unused, url) => {
		const next = isAtHistoryRoot() ? {
			...data && typeof data === "object" ? data : {},
			[ROOT_STATE_KEY]: true
		} : data;
		originalReplaceState(next, unused, url);
		reportLocation();
	};
	window.addEventListener("message", onMessage);
	window.addEventListener("popstate", onPopState);
	window.addEventListener("hashchange", onHashChange);
	announce();
	return () => {
		window.removeEventListener("message", onMessage);
		window.removeEventListener("popstate", onPopState);
		window.removeEventListener("hashchange", onHashChange);
		window.history.pushState = originalPushState;
		window.history.replaceState = originalReplaceState;
	};
}
/** Collect static path patterns from a TanStack route tree (best-effort). */
function collectRoutePathsFromTree(routeTree) {
	const paths = /* @__PURE__ */ new Set();
	const walk = (node) => {
		if (!node || typeof node !== "object") return;
		const record = node;
		const full = typeof record.fullPath === "string" ? record.fullPath : typeof record.path === "string" ? record.path : null;
		if (full !== null && full !== "") paths.add(full.startsWith("/") ? full : `/${full}`);
		else if (full === "") paths.add("/");
		const children = record.children;
		if (Array.isArray(children)) for (const child of children) walk(child);
		else if (children && typeof children === "object") for (const child of Object.values(children)) walk(child);
	};
	walk(routeTree);
	return [...paths];
}
/**
* Mount once in `__root.tsx` so the Grok preview chrome can drive navigation
* (and later receive registered routes). Noops when the app is not embedded.
*/
function PreviewHostBridge() {
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		return installPreviewHostBridge({
			navigate: (path) => {
				router.history.push(path);
			},
			getRoutePaths: () => collectRoutePathsFromTree(router.routeTree)
		});
	}, [router]);
	return null;
}
/**
* Authentic WhatsApp Icon with speech bubble and phone handset.
* Uses a refined, natural WhatsApp deep-forest tone (#128C7E / #25D366 balanced)
* avoiding harsh radioactive neon.
*/
function WhatsAppIcon({ className = "size-5" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		className,
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "#25D366",
			d: "M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2Z"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
			fill: "#FFFFFF",
			d: "M17.47 14.38C17.17 14.23 15.71 13.51 15.44 13.41C15.17 13.31 14.97 13.26 14.77 13.56C14.57 13.86 14 14.53 13.83 14.73C13.66 14.93 13.49 14.95 13.19 14.8C12.89 14.65 11.93 14.34 10.8 13.33C9.92 12.54 9.32 11.57 9.15 11.27C8.98 10.97 9.13 10.81 9.28 10.66C9.41 10.53 9.58 10.31 9.73 10.14C9.88 9.97 9.93 9.84 10.03 9.64C10.13 9.44 10.08 9.27 10 9.12C9.93 8.97 9.33 7.51 9.09 6.91C8.84 6.33 8.6 6.41 8.42 6.4C8.24 6.39 8.04 6.39 7.84 6.39C7.64 6.39 7.32 6.46 7.05 6.76C6.78 7.06 6.01 7.78 6.01 9.24C6.01 10.7 7.08 12.11 7.22 12.31C7.37 12.51 9.32 15.51 12.3 16.8C13.01 17.11 13.56 17.29 13.99 17.43C14.7 17.65 15.35 17.62 15.86 17.55C16.43 17.46 17.62 16.83 17.87 16.13C18.12 15.44 18.12 14.84 18.04 14.72C17.97 14.6 17.77 14.53 17.47 14.38Z"
		})]
	});
}
/**
* Natural, balanced WhatsApp Badge:
* Uses natural forest-emerald tones (#1f9d55 to #128C7E) with subtle shadow
* so it is clearly recognizable as WhatsApp without being harsh neon or washed out.
*/
function WhatsAppBadge({ className, label = "WhatsApp", compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-1.5 rounded-full font-semibold transition-all duration-200 shadow-2xs", "bg-[#1fa855] text-white hover:bg-[#1b934b] active:scale-95 border border-[#1b934b]", compact ? "px-2.5 py-1 text-xs" : "px-3.5 py-1.5 text-xs sm:text-sm", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: compact ? "size-3.5 shrink-0" : "size-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "tracking-tight",
			children: label
		})]
	});
}
/** Official Google Maps Badge with genuine 4-color pin and clean card pill */
function GoogleMapsBadge({ className, label = "Google Maps", compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-2 rounded-full font-medium transition-all duration-200 shadow-2xs", "bg-white text-[#3c4043] border border-[#dadce0] hover:bg-[#f8f9fa] hover:border-[#bdc1c6] active:scale-95", compact ? "px-3 py-1 text-xs" : "px-4 py-2 text-xs sm:text-sm", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			className: "size-4 shrink-0",
			viewBox: "0 0 24 24",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "#4285F4",
					d: "M12 2C8.13 2 5 5.13 5 9c0 4.17 4.42 9.92 6.24 12.11.4.48 1.12.48 1.52 0C14.58 18.92 19 13.17 19 9c0-3.87-3.13-7-7-7z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "#EA4335",
					d: "M12 2C8.13 2 5 5.13 5 9c0 1.74.63 3.34 1.69 4.58L12 6.5l5.31 7.08C18.37 12.34 19 10.74 19 9c0-3.87-3.13-7-7-7z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "#FBBC04",
					d: "M6.69 13.58C7.94 15.05 9.77 17.58 12 20.5c2.23-2.92 4.06-5.45 5.31-6.92L12 6.5l-5.31 7.08z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "12",
					cy: "9",
					r: "2.5",
					fill: "#34A853"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
	});
}
/** Official Gmail Badge with authentic 4-color M logo and crisp card pill */
function GmailBadge({ className, label = "Email Desk", compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-2 rounded-full font-medium transition-all duration-200 shadow-2xs", "bg-white text-[#3c4043] border border-[#dadce0] hover:bg-[#f8f9fa] hover:border-[#bdc1c6] active:scale-95", compact ? "px-3 py-1 text-xs" : "px-4 py-2 text-xs sm:text-sm", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			className: "size-4 shrink-0",
			viewBox: "0 0 24 24",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "#4285F4",
					d: "M20 18h-2V9.5L12 14 6 9.5V18H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h1.5L12 9l6.5-5H20c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "#EA4335",
					d: "M18.5 4H20c1.1 0 2 .9 2 2v2.5L12 14 2 8.5V6c0-1.1.9-2 2-2h1.5L12 9l6.5-5z"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					fill: "#FBBC04",
					d: "M2 6v2.5L12 14 22 8.5V6H2z",
					opacity: "0.1"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
	});
}
/** Official Phone Calling Badge with authentic telecom blue and handset */
function PhoneBadge({ className, label = "Call Desk", compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-2 rounded-full font-medium transition-all duration-200 shadow-2xs", "bg-white text-[#1a73e8] border border-[#dadce0] hover:bg-[#f8f9fa] hover:border-[#bdc1c6] active:scale-95", compact ? "px-3 py-1 text-xs" : "px-4 py-2 text-xs sm:text-sm", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			className: "size-4 fill-[#1a73e8] shrink-0",
			viewBox: "0 0 24 24",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.28-.28.37-.68.25-1.02A11.36 11.36 0 0 1 8.56 4c0-.55-.45-1-1-1H4.01c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.62c0-.55-.45-1-1-1z" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[#3c4043]",
			children: label
		})]
	});
}
var defaultSiteCopy = {
	name: site.name,
	shortName: site.shortName,
	tagline: site.tagline,
	foundedYear: "2024",
	companyReg: "Harare Industrial & Mining Machinery Supplier",
	heroBadge: "Cranborne yard · 115 Chiremba Road, Harare",
	heroHeadline: "Plant for Zimbabwe’s mines, farms and pours.",
	heroSubheadline: "Gold circuits, fence plant, self-loading mixers, excavators and farm mills — specified in Harare, delivered nationwide, commissioned on the ground.",
	heroBannerAnnouncement: "Cranborne Yard Open Mon–Sat · Lowbed Deliveries to Midlands, Matabeleland, Manicaland & Mashonaland",
	heroCtaPrimary: "Chat on WhatsApp",
	heroCtaSecondary: "Request a firm quote",
	heroCtaTertiary: "Open the catalogue",
	stat1Label: "Harare hub",
	stat1Detail: "Cranborne yard",
	stat2Label: "1–25 TPH",
	stat2Detail: "Gold circuits",
	stat3Label: "Wet & dry",
	stat3Detail: "Plant hire",
	stat4Label: "10 provinces",
	stat4Detail: "Lowbed delivery",
	yardAddressLine1: site.address.line1,
	yardAddressLine2: site.address.line2,
	yardCity: "Harare",
	yardCountry: "Zimbabwe",
	googleMapsUrl: site.address.maps,
	yardDirectionsNote: "5 minutes from Harare CBD along Chiremba Rd, Cranborne Industrial Belt. Lowbed and heavy truck access.",
	primaryPhone: site.phoneDisplay,
	primaryPhoneTel: site.phoneTel,
	secondaryPhone: site.phoneAltDisplay,
	secondaryPhoneTel: site.phoneAltTel,
	whatsappNumber: site.whatsappNumber,
	whatsappMessage: "Hello Omnicore Harare Desk — I would like an equipment quote.",
	email: site.email,
	salesEmail: "sales@omnicoresolutions.co.zw",
	hoursWeekday: "08:00 – 17:00",
	hoursSaturday: "08:00 – 13:00",
	hoursSunday: "Closed · WhatsApp desk monitored",
	afterHoursNotice: "Urgent site breakdown & pump dispatch hotline active 24/7 on WhatsApp.",
	responseSLA: "Average tender & pricing turnaround under 15 minutes during yard hours.",
	emergencyHotline: "+263 77 733 4569",
	emergencyHotlineTel: "+263777334569",
	dispatchTurnaround: "Same-day lowbed loading for in-stock plant; 24–48h nationwide delivery.",
	warrantyNotice: "12-month factory parts warranty & Harare commissioning included.",
	termsNotice: "All quotes issued in USD payable via Nostro, RTGS at official bank rate, or cash on collection.",
	paymentMethods: "Bank Transfer, Nostro, USD Cash, EcoCash, ZIPIT",
	inspectionNotice: "Physical yard mechanical inspections welcome Monday–Saturday at 115 Chiremba Rd, Cranborne.",
	tendersNotice: "PRAZ Registered Supplier · Formal tenders, municipal quotes & mine procurement packs issued within 24h.",
	linkedinUrl: site.linkedin,
	facebookUrl: site.facebook,
	miningEyebrow: "Gold · Chrome · Lithium",
	miningHeadline: "Plant that turns ore into cashflow.",
	miningSubheadline: "Complete gravity and milling circuits engineered for small-scale and commercial miners across Kadoma, Kwekwe, Gwanda, and Shamva.",
	hardwareEyebrow: "Build · Fence · Supply",
	hardwareHeadline: "The hardware that keeps a site moving.",
	hardwareSubheadline: "Diamond mesh, razor wire, block machines, and farm fencing hardware built to withstand rigorous Zimbabwean field conditions.",
	hireEyebrow: "Heavy Fleet · Harare Yard",
	hireHeadline: "Yellow plant on wet or dry rate without the downtime.",
	hireSubheadline: "Late-model CAT diggers, 37m concrete boom pumps, and self-loading mixers with certified operators ready for rapid mobilization.",
	farmingEyebrow: "Feed · Grind · Value Add",
	farmingHeadline: "Agro-processing machinery for commercial and smallholder farms.",
	farmingSubheadline: "Hammer mills, vertical feed mixers, and oil presses designed for commercial poultry, cattle pen-fattening, and crop processing.",
	industryEyebrow: "Power · Motors · Compressors",
	industryHeadline: "Industrial gear that doesn't buckle under load shedding.",
	industrySubheadline: "Heavy-duty electric motors, screw compressors, and diesel backup sets calibrated for uninterrupted industrial operation.",
	aboutHeadline: "Direct Importers & Stockists of Heavy Industrial Equipment",
	aboutMission: "Supplying verified commercial machinery with local parts, field commissioning, and technical back-up across all 10 provinces of Zimbabwe.",
	aboutStory: "Founded to bridge the equipment gap for Zimbabwean miners, contractors, and farmers, Omnicore Solutions maintains a fully-stocked Cranborne yard with experienced mechanical engineers on site.",
	aboutPillar1: "Physical Harare Yard Stock — inspect before purchase at Cranborne",
	aboutPillar2: "Zimbabwe-Field Proven — built for local ore grades and rural power grids",
	aboutPillar3: "Spares & Technical Backup — OEM wear parts stocked in Harare",
	aboutPillar4: "Nationwide Logistics — lowbed and crane-truck delivery to your site",
	footerAbout: "Direct supply, equipment hire, and on-site plant commissioning from Cranborne, Harare — delivering to claims, farms and project sites nationwide.",
	footerCopyright: `© ${(/* @__PURE__ */ new Date()).getFullYear()} Omnicore Solutions. All rights reserved. Machinery & Plant Zimbabwe · Cranborne, Harare`
};
var defaultCRMClients = [
	{
		id: "CRM-1001",
		name: "Tafadzwa Moyo",
		organization: "Golden Valley Gold Syndicate",
		phone: "+263 77 234 5678",
		email: "tmoyo@kadomamining.co.zw",
		location: "Kadoma / Golden Valley",
		province: "Mashonaland West",
		service: "Mining Equipment",
		equipmentInterest: "200x300 Jaw Crusher & 1200x2400 Ball Mill circuit",
		intent: "Buy",
		stage: "Tender Quoted",
		priority: "High",
		dealValue: 18500,
		dealValueDisplay: "$18,500",
		lastContact: "Today, 08:35",
		nextFollowUp: "Tomorrow, 10:00",
		notes: "Requires diesel engine drive configuration due to local grid instability. Ready for Cranborne yard mechanical inspection on Friday.",
		timeline: [{
			date: "26 Sep 2026",
			note: "Formal FOB Harare tender quotation issued with 35HP diesel option.",
			author: "Farai M. (Technical Desk)"
		}, {
			date: "25 Sep 2026",
			note: "Inbound quote received through online site form.",
			author: "System"
		}]
	},
	{
		id: "CRM-1002",
		name: "Farai Chitepo",
		organization: "Chitepo Infrastructure Civils",
		phone: "+263 71 890 1234",
		email: "farai@chitepoconstruction.co.zw",
		location: "Borrowdale West, Harare",
		province: "Harare",
		service: "Construction Machinery Hire",
		equipmentInterest: "37m Concrete Boom Pump + 2 Operators",
		intent: "Hire",
		stage: "Discovery",
		priority: "High",
		dealValue: 3600,
		dealValueDisplay: "$3,600",
		lastContact: "Yesterday, 16:15",
		nextFollowUp: "28 Sep, 09:00",
		notes: "Two-day raft foundation pour. Requires wet rate with certified operator and 80m pipeline extensions.",
		timeline: [{
			date: "25 Sep 2026",
			note: "Confirmed pump availability from Cranborne yard for next Tuesday.",
			author: "Blessing T."
		}]
	},
	{
		id: "CRM-1003",
		name: "Blessing Hove",
		organization: "Mazowe Citrus & Cattle Estates",
		phone: "+263 78 456 7890",
		email: "blessing@mazowefarms.zw",
		location: "Mazowe Farming Belt",
		province: "Mashonaland Central",
		service: "Farming Machinery",
		equipmentInterest: "3-Tonne Vertical Feed Mixer + 15kW Motor",
		intent: "Buy",
		stage: "Negotiation",
		priority: "Medium",
		dealValue: 7200,
		dealValueDisplay: "$7,200",
		lastContact: "25 Sep, 11:20",
		nextFollowUp: "29 Sep, 14:00",
		notes: "Negotiating inclusion of magnetic trap and extra screen sets for maize and soy grinding.",
		timeline: [{
			date: "25 Sep 2026",
			note: "Client visited Cranborne yard to inspect mixer auger thickness.",
			author: "Farai M."
		}]
	},
	{
		id: "CRM-1004",
		name: "Kudzai Ndlovu",
		organization: "Great Dyke Metals Ltd",
		phone: "+263 77 567 8901",
		email: "kudzai@greatdykemetals.zw",
		location: "Zvishavane Overburden Claims",
		province: "Midlands",
		service: "Construction Machinery Hire",
		equipmentInterest: "CAT 320D 20-Tonne Excavator (30 Days)",
		intent: "Hire",
		stage: "Won",
		priority: "High",
		dealValue: 14400,
		dealValueDisplay: "$14,400",
		lastContact: "24 Sep, 14:40",
		nextFollowUp: "15 Oct, 12:00",
		notes: "Contract signed, deposit cleared. Lowbed mobilized to Midlands site with dedicated operator.",
		timeline: [{
			date: "24 Sep 2026",
			note: "Signed hire agreement returned and lowbed dispatch scheduled.",
			author: "Logistics Desk"
		}]
	},
	{
		id: "CRM-1005",
		name: "Sekai Matarise",
		organization: "Harare Perimeter Security Co.",
		phone: "+263 73 345 6789",
		email: "smatarise@securefencing.co.zw",
		location: "Msasa Industrial, Harare",
		province: "Harare",
		service: "Hardware & Construction",
		equipmentInterest: "Double-Twist Barbed Wire Manufacturing Plant",
		intent: "Buy",
		stage: "Tender Quoted",
		priority: "Medium",
		dealValue: 9500,
		dealValueDisplay: "$9,500",
		lastContact: "23 Sep, 09:15",
		nextFollowUp: "30 Sep, 11:00",
		notes: "Requires machine commissioning and coil wire supplier introductions in Harare.",
		timeline: [{
			date: "23 Sep 2026",
			note: "Sent equipment layout drawing and power specification (5.5kW).",
			author: "Technical Desk"
		}]
	},
	{
		id: "CRM-1006",
		name: "Edmore Chinyanga",
		organization: "Shamva River Gold Claim",
		phone: "+263 77 654 3210",
		email: "edmore@shamvaalluvial.zw",
		location: "Shamva District",
		province: "Mashonaland Central",
		service: "Mining Equipment",
		equipmentInterest: "10 TPH Gold Wash Plant Trommel & Shaking Table",
		intent: "Buy",
		stage: "Lead",
		priority: "High",
		dealValue: 22e3,
		dealValueDisplay: "$22,000",
		lastContact: "22 Sep, 15:30",
		nextFollowUp: "28 Sep, 10:00",
		notes: "Alluvial deposit along riverbank. Inquiring about water pump volume and sluice box sizing.",
		timeline: [{
			date: "22 Sep 2026",
			note: "Inbound WhatsApp inquiry logged.",
			author: "Farai M."
		}]
	},
	{
		id: "CRM-1007",
		name: "Rutendo Mutasa",
		organization: "Mutasa Feedlot & Agro Services",
		phone: "+263 78 123 9876",
		email: "rmutasa@mutasafeedlot.co.zw",
		location: "Marondera Agro Corridor",
		province: "Mashonaland East",
		service: "Farming Machinery",
		equipmentInterest: "Farm Hammer Mill with 7.5kW Motor & Cyclone",
		intent: "Buy",
		stage: "Won",
		priority: "Normal",
		dealValue: 3850,
		dealValueDisplay: "$3,850",
		lastContact: "21 Sep, 13:00",
		nextFollowUp: "05 Oct, 09:00",
		notes: "Machine collected from Cranborne yard. Customer reported successful test milling.",
		timeline: [{
			date: "21 Sep 2026",
			note: "Full payment received and yard gate pass issued.",
			author: "Finance Desk"
		}]
	},
	{
		id: "CRM-1008",
		name: "Munyaradzi Gumbo",
		organization: "Bulawayo Aggregates & Paving",
		phone: "+263 71 334 8899",
		email: "mgumbo@byoaggregates.zw",
		location: "Khami Road, Bulawayo",
		province: "Matabeleland North",
		service: "Construction Machinery Hire",
		equipmentInterest: "Self-Loading Concrete Mixer (4.0m³)",
		intent: "Hire",
		stage: "Discovery",
		priority: "Medium",
		dealValue: 5800,
		dealValueDisplay: "$5,800",
		lastContact: "20 Sep, 10:45",
		nextFollowUp: "29 Sep, 15:00",
		notes: "Evaluating freight cost from Cranborne Harare yard down to Bulawayo job site.",
		timeline: [{
			date: "20 Sep 2026",
			note: "Provided national lowbed mobilization rate schedule.",
			author: "Logistics Desk"
		}]
	}
];
var defaultExtendedEquipment = equipment.map((item, idx) => ({
	...item,
	sku: `OMNI-${item.category.toUpperCase().slice(0, 3)}-${100 + idx}`,
	stockStatus: "In Yard Cranborne",
	throughput: item.category === "mining" ? "5 – 15 TPH" : item.category === "farming" ? "1.5 – 3 TPH" : "Site Rated",
	powerOption: "Electric 3-Phase / Diesel Engine Option",
	priceUSD: item.category === "hire" ? "Daily Rate on Tender" : "Direct Yard Quote",
	condition: "New",
	warrantyMonths: 12,
	detailedNotes: `Heavy-duty specification engineered for continuous African field operation. Supported by Cranborne yard spare parts and Harare field commissioning team.`
}));
var STORAGE_KEY_CRM = "omnicore_crm_clients_v2";
var STORAGE_KEY_EQUIPMENT = "omnicore_equipment_inventory_v2";
var STORAGE_KEY_SITE_COPY = "omnicore_site_copy_v2";
var STORAGE_KEY_RECYCLE = "omnicore_recycle_bin_v1";
function getStoredCRMClients() {
	if (typeof window === "undefined") return defaultCRMClients;
	try {
		const raw = localStorage.getItem(STORAGE_KEY_CRM);
		if (!raw) return defaultCRMClients;
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : defaultCRMClients;
	} catch {
		return defaultCRMClients;
	}
}
function saveStoredCRMClients(clients) {
	if (typeof window === "undefined") return;
	try {
		localStorage.setItem(STORAGE_KEY_CRM, JSON.stringify(clients));
		window.dispatchEvent(new CustomEvent("omnicore-crm-updated"));
	} catch {}
}
function getStoredEquipment() {
	if (typeof window === "undefined") return defaultExtendedEquipment;
	try {
		const raw = localStorage.getItem(STORAGE_KEY_EQUIPMENT);
		if (!raw) return defaultExtendedEquipment;
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : defaultExtendedEquipment;
	} catch {
		return defaultExtendedEquipment;
	}
}
function saveStoredEquipment(items) {
	if (typeof window === "undefined") return;
	try {
		localStorage.setItem(STORAGE_KEY_EQUIPMENT, JSON.stringify(items));
		window.dispatchEvent(new CustomEvent("omnicore-equipment-updated"));
	} catch {}
}
function getStoredSiteCopy() {
	if (typeof window === "undefined") return defaultSiteCopy;
	try {
		const raw = localStorage.getItem(STORAGE_KEY_SITE_COPY);
		if (!raw) return defaultSiteCopy;
		const parsed = JSON.parse(raw);
		return parsed && typeof parsed === "object" ? {
			...defaultSiteCopy,
			...parsed
		} : defaultSiteCopy;
	} catch {
		return defaultSiteCopy;
	}
}
function saveStoredSiteCopy(copy) {
	if (typeof window === "undefined") return;
	try {
		localStorage.setItem(STORAGE_KEY_SITE_COPY, JSON.stringify(copy));
		window.dispatchEvent(new CustomEvent("omnicore-copy-updated"));
	} catch {}
}
function resetStoredSiteCopy() {
	if (typeof window === "undefined") return defaultSiteCopy;
	try {
		localStorage.setItem(STORAGE_KEY_SITE_COPY, JSON.stringify(defaultSiteCopy));
		window.dispatchEvent(new CustomEvent("omnicore-copy-updated"));
		return defaultSiteCopy;
	} catch {
		return defaultSiteCopy;
	}
}
function useSiteCopy() {
	const [copy, setCopy] = (0, import_react.useState)(getStoredSiteCopy);
	(0, import_react.useEffect)(() => {
		function onUpdate() {
			setCopy(getStoredSiteCopy());
		}
		window.addEventListener("omnicore-copy-updated", onUpdate);
		return () => {
			window.removeEventListener("omnicore-copy-updated", onUpdate);
		};
	}, []);
	return copy;
}
function makeBinId(kind, sourceId) {
	return `bin-${kind}-${sourceId}-${Date.now()}-${Math.floor(Math.random() * 1e3)}`;
}
function toRecycleClient(client) {
	return {
		binId: makeBinId("client", client.id),
		kind: "client",
		deletedAt: (/* @__PURE__ */ new Date()).toISOString(),
		title: client.name,
		subtitle: `${client.organization} · ${client.id}`,
		snapshot: client
	};
}
function toRecycleProduct(item) {
	return {
		binId: makeBinId("product", item.id),
		kind: "product",
		deletedAt: (/* @__PURE__ */ new Date()).toISOString(),
		title: item.name,
		subtitle: `${item.sku || item.id} · ${item.category}`,
		snapshot: item
	};
}
function getStoredRecycleBin() {
	if (typeof window === "undefined") return [];
	try {
		const raw = localStorage.getItem(STORAGE_KEY_RECYCLE);
		if (!raw) return [];
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) ? parsed : [];
	} catch {
		return [];
	}
}
function saveStoredRecycleBin(items) {
	if (typeof window === "undefined") return;
	try {
		localStorage.setItem(STORAGE_KEY_RECYCLE, JSON.stringify(items));
		window.dispatchEvent(new CustomEvent("omnicore-recycle-updated"));
	} catch {}
}
function SiteFooter() {
	const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
	const copy = useSiteCopy();
	const phoneDisplay = copy.primaryPhone || site.phoneDisplay;
	const phoneTel = copy.primaryPhoneTel || site.phoneTel;
	const email = copy.email || site.email;
	const brandName = copy.name || site.name;
	const mapsUrl = copy.googleMapsUrl || site.address.maps;
	const whatsappNum = copy.whatsappNumber || site.whatsappNumber;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-black/[0.06] bg-[#f5f5f7] text-[#86868b]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-b border-black/[0.06] py-8 px-4 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-semibold tracking-wider text-[#1d1d1f] uppercase",
						children: ["Harare Machinery Desk · ", copy.yardAddressLine2 || "Cranborne Yard"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-0.5 text-xs text-[#86868b]",
						children: copy.companyReg || "Direct supply, plant hire, and on-site commissioning across Zimbabwe."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `https://wa.me/${whatsappNum}?text=${encodeURIComponent(copy.whatsappMessage || "Hello Omnicore — I need a machinery quote.")}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppBadge, { label: `WhatsApp ${phoneDisplay}` })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: mapsUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GoogleMapsBadge, { label: "View Yard on Maps" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${email}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GmailBadge, { label: "Email Desk" })
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/",
								className: "inline-flex items-center gap-2.5 group",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/mark.png",
									alt: `${brandName} Logo`,
									className: "size-8 object-contain transition-transform duration-200 group-hover:scale-105"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold tracking-tight text-[#1d1d1f]",
									children: brandName
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs leading-relaxed text-[#86868b]",
								children: copy.footerAbout || "Direct supply, equipment hire, and on-site plant commissioning from Cranborne, Harare — delivering to claims, farms and project sites nationwide."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex items-center gap-3 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: copy.linkedinUrl || site.linkedin,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "text-[#6e6e73] hover:text-[#1d1d1f] transition-colors",
										children: "LinkedIn"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: copy.facebookUrl || site.facebook,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "text-[#6e6e73] hover:text-[#1d1d1f] transition-colors",
										children: "Facebook"
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-wider text-[#1d1d1f] uppercase",
						children: "Specialized Divisions"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-2 text-xs",
						children: services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services/$slug",
							params: { slug: service.slug },
							className: "text-[#6e6e73] transition-colors hover:text-[#1d1d1f]",
							children: service.title
						}) }, service.slug))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-wider text-[#1d1d1f] uppercase",
						children: "Machinery & Fleet"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-3 space-y-2 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/catalogue",
								className: "text-[#6e6e73] hover:text-[#1d1d1f] transition-colors",
								children: "Complete Catalogue"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/services/$slug",
								params: { slug: "hire" },
								className: "text-[#6e6e73] hover:text-[#1d1d1f] transition-colors",
								children: "Excavator & Plant Hire Rates"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/projects",
								className: "text-[#6e6e73] hover:text-[#1d1d1f] transition-colors",
								children: "Site Deployments"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/insights",
								className: "text-[#6e6e73] hover:text-[#1d1d1f] transition-colors",
								children: "Field Economics & Guides"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/quote",
								className: "text-[#6e6e73] hover:text-[#1d1d1f] transition-colors",
								children: "Request Tender Rate"
							}) })
						]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-wider text-[#1d1d1f] uppercase",
						children: "Cranborne Yard"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 space-y-2 text-xs text-[#86868b]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[#1d1d1f] font-medium",
								children: [
									copy.yardAddressLine1 || site.address.line1,
									", ",
									copy.yardAddressLine2 || site.address.line2
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Mon–Fri: ",
								copy.hoursWeekday || "08:00–17:00",
								" · Sat: ",
								copy.hoursSaturday || "08:00–13:00"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-1 flex flex-col gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `tel:${phoneTel}`,
									className: "text-[#1d1d1f] hover:underline",
									children: phoneDisplay
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: `mailto:${email}`,
									className: "text-[#1d1d1f] hover:underline",
									children: email
								})]
							})
						]
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-black/[0.04] py-6 text-center text-[11px] text-[#86868b]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 sm:flex-row sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: copy.footerCopyright || `© ${currentYear} ${brandName}. All rights reserved.` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						copy.shortName || site.shortName,
						" · Cranborne Yard, ",
						copy.yardCity || "Harare"
					] })]
				})
			})
		]
	});
}
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-50 border-b border-border bg-paper/85 backdrop-blur-2xl transition-all",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-14 sm:h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "group flex items-center gap-2.5 py-1",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/mark.png",
						alt: "Omnicore Solutions",
						className: "size-8 object-contain transition-transform duration-200 group-hover:scale-105"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[15px] font-semibold tracking-tight text-[#1d1d1f]",
							children: site.shortName
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 md:flex",
					children: nav.map((item) => {
						const active = item.href === "/services" ? pathname === "/services" || pathname.startsWith("/services/") && pathname !== "/services/hire" : pathname === item.href || pathname.startsWith(`${item.href}/`);
						const className = cn("rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-150", active ? "text-[#1d1d1f] font-semibold bg-black/[0.05]" : "text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-black/[0.03]");
						if (item.href === "/services/hire") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/services/$slug",
							params: { slug: "hire" },
							className,
							children: item.label
						}, item.href);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.href,
							className,
							children: item.label
						}, item.href);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/admin",
							className: "inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-amber-500/10 px-3 py-1.5 text-xs font-semibold text-amber-900 hover:bg-amber-500/20 transition-all active:scale-95 shadow-2xs",
							title: "Access Technical Desk & Operations Backoffice",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-amber-600 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Backoffice" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: whatsappUrl("Hello Omnicore Harare Desk — I need a quote."),
							className: "hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#1fa855] px-3.5 py-1.5 text-xs font-semibold text-white shadow-2xs transition-all hover:bg-[#1b934b] active:scale-95",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Harare Desk" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/quote",
							className: "inline-flex items-center gap-1 rounded-full bg-[#1d1d1f] px-4 py-1.5 text-xs font-medium text-white shadow-xs transition-all hover:bg-[#333336] active:scale-95",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Get Quote" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3 text-white/70" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "md:hidden flex size-9 items-center justify-center rounded-full text-[#1d1d1f] hover:bg-black/[0.05] transition-colors",
							"aria-label": open ? "Close menu" : "Open menu",
							onClick: () => setOpen((v) => !v),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4" })
						})
					]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-black/[0.06] bg-[#fbfbfd]/95 backdrop-blur-2xl px-5 py-5 md:hidden shadow-lg animate-in fade-in duration-200",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col space-y-1",
				children: [
					nav.map((item) => item.href === "/services/hire" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/services/$slug",
						params: { slug: "hire" },
						onClick: () => setOpen(false),
						className: "rounded-xl px-3 py-2 text-sm font-medium text-[#1d1d1f] hover:bg-black/[0.04]",
						children: item.label
					}, item.href) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.href,
						onClick: () => setOpen(false),
						className: "rounded-xl px-3 py-2 text-sm font-medium text-[#1d1d1f] hover:bg-black/[0.04]",
						children: item.label
					}, item.href)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pt-3 pb-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "px-3 text-[11px] font-medium tracking-wider text-[#86868b] uppercase",
							children: "Specialized Divisions"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 gap-1",
						children: services.map((service) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/services/$slug",
							params: { slug: service.slug },
							onClick: () => setOpen(false),
							className: "flex items-center justify-between rounded-xl px-3 py-2 text-xs font-medium text-[#6e6e73] hover:bg-black/[0.04] hover:text-[#1d1d1f]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: service.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-[#86868b]",
								children: service.eyebrow
							})]
						}, service.slug))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-4 flex flex-col gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/admin",
								onClick: () => setOpen(false),
								className: "flex items-center justify-center gap-2 rounded-full bg-amber-500/20 py-2.5 text-xs font-semibold text-amber-950 border border-amber-500/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-amber-600 animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Launch Admin Backoffice" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/quote",
								onClick: () => setOpen(false),
								className: "flex items-center justify-center rounded-full bg-[#1d1d1f] py-2.5 text-xs font-medium text-white shadow-xs",
								children: "Request a Machine Quote"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: whatsappUrl("Hello Omnicore Harare Desk — I need an equipment quote."),
								className: "flex items-center justify-center gap-1.5 rounded-full bg-[#25D366]/10 py-2.5 text-xs font-medium text-[#0f5132] border border-[#25D366]/20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-[#25D366]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Chat on WhatsApp" })]
							})
						]
					})
				]
			})
		}) : null]
	});
}
function WhatsappFab() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const copy = useSiteCopy();
	if (pathname === "/quote" || pathname === "/contact") return null;
	const num = copy.whatsappNumber || site.whatsappNumber;
	const msg = copy.whatsappMessage || "Hello Omnicore Harare Desk — I would like an equipment quote.";
	const url = `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
		"aria-label": "WhatsApp quick chat",
		className: "fixed right-5 bottom-5 z-40 sm:right-7 sm:bottom-7",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: url,
			"aria-label": "Chat on WhatsApp with Harare Desk",
			className: "group relative flex items-center gap-3 rounded-full bg-[#1fa855] px-4 py-2.5 text-white shadow-[0_6px_20px_rgba(31,168,85,0.35)] border border-[#1b934b] transition-all duration-300 hover:scale-105 hover:bg-[#1b934b] active:scale-95",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-5 shrink-0 text-white" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[12px] font-bold text-white tracking-tight leading-none",
					children: "WhatsApp Desk"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] text-emerald-100 font-medium leading-tight mt-0.5",
					children: copy.yardAddressLine2 || "Cranborne · Harare"
				})]
			})]
		})
	});
}
function SiteShell({ children }) {
	if (useRouterState({ select: (s) => s.location.pathname }).startsWith("/admin")) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-svh flex-col bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 pb-16",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappFab, {})
		]
	});
}
var styles_default = "/assets/styles-Pql7Jh86.css";
var APP_NAME = site.name;
var Route$10 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: APP_NAME },
			{
				name: "theme-color",
				content: "#14110e"
			},
			{
				name: "description",
				content: site.description
			},
			{
				property: "og:title",
				content: APP_NAME
			},
			{
				property: "og:description",
				content: site.description
			},
			{
				name: "application-name",
				content: APP_NAME
			}
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "icon",
				type: "image/png",
				href: "/mark.png"
			},
			{
				rel: "apple-touch-icon",
				href: "/__grok/icon-180.png"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "manifest",
				href: "/__grok/manifest.webmanifest"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
			}
		]
	}),
	component: RootDocument
});
function RootDocument() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewHostBridge, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})
		] })]
	});
}
var $$splitComponentImporter$8 = () => import("./routes-CN7E8f22.mjs");
var Route$9 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "Heavy Machinery & Plant Zimbabwe | Omnicore Solutions Harare" }, {
		name: "description",
		content: "Direct supply, plant hire, and field commissioning from Cranborne, Harare. Gold wash plants, hammer mills, excavators, and construction hardware across Zimbabwe."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var Route$8 = createFileRoute("/admin")({
	head: () => ({ meta: [
		{ title: "Operations & CRM Backoffice · Omnicore Harare" },
		{
			name: "description",
			content: "Client CRM, machinery inventory, and site content management."
		},
		{
			property: "og:title",
			content: "Backoffice · Omnicore Harare"
		}
	] }),
	component: AdminBackoffice
});
var STAGES = [
	"Lead",
	"Discovery",
	"Tender Quoted",
	"Negotiation",
	"Won",
	"Lost"
];
var PROVINCES = [
	"All Zimbabwe",
	"Harare",
	"Mashonaland West",
	"Mashonaland Central",
	"Mashonaland East",
	"Midlands",
	"Matabeleland North",
	"Matabeleland South",
	"Manicaland",
	"Masvingo"
];
var YARD_PHOTO_PRESETS = [
	{
		label: "Jaw Crusher",
		src: "/images/jaw-crusher.jpg",
		category: "mining",
		spec: "5–15 TPH Primary Crush",
		badge: "Gold Ore Circuit"
	},
	{
		label: "Ball Mill",
		src: "/images/ball-mill.jpg",
		category: "mining",
		spec: "Continuous Wet Grinding",
		badge: "Milling Circuit"
	},
	{
		label: "Mining Hammer Mill",
		src: "/images/hammer-mill.jpg",
		category: "mining",
		spec: "1.5–3.0 TPH High Speed",
		badge: "Fine Reduction"
	},
	{
		label: "Gold Separator",
		src: "/images/gold-separator.jpg",
		category: "mining",
		spec: "Centrifugal Concentrator",
		badge: "Free Gold"
	},
	{
		label: "Trommel Wash Plant",
		src: "/images/trommel.jpg",
		category: "mining",
		spec: "15–30 TPH Scrub & Screen",
		badge: "Alluvial Gold"
	},
	{
		label: "Shaking Table",
		src: "/images/shaking-table.jpg",
		category: "mining",
		spec: "6-S Deck Gravity Separator",
		badge: "Concentrate Clean"
	},
	{
		label: "Slurry Pump",
		src: "/images/slurry-pump.jpg",
		category: "mining",
		spec: "High-Head Heavy Slurry",
		badge: "Tailings / Circuit"
	},
	{
		label: "CAT 320D Excavator",
		src: "/images/excavator.jpg",
		category: "hire",
		spec: "20-Tonne Digger · 1.0m³ Bucket",
		badge: "Wet / Dry Fleet"
	},
	{
		label: "37m Concrete Boom Pump",
		src: "/images/concrete-pump.jpg",
		category: "hire",
		spec: "37m Vertical · 125m³/h",
		badge: "Boom Pump Fleet"
	},
	{
		label: "Self-Loading Mixer",
		src: "/images/self-loading-mixer.jpg",
		category: "hire",
		spec: "4.0m³ Batch · 4x4 Off-Road",
		badge: "Mobile Batching"
	},
	{
		label: "TLB Backhoe",
		src: "/images/tlb.jpg",
		category: "hire",
		spec: "4x4 Turbo Heavy Backhoe",
		badge: "Trench & Civils"
	},
	{
		label: "Motor Grader",
		src: "/images/grader.jpg",
		category: "hire",
		spec: "140hp · 12ft Heavy Blade",
		badge: "Haul Roads"
	},
	{
		label: "Farm Hammer Mill",
		src: "/images/farm-hammer-mill.jpg",
		category: "farming",
		spec: "Maize & Grain 1–2 TPH",
		badge: "Stockfeed Milling"
	},
	{
		label: "Feed Mixer (Vertical)",
		src: "/images/feed-mixer.jpg",
		category: "farming",
		spec: "500kg – 1-Tonne Batch",
		badge: "Poultry & Dairy"
	},
	{
		label: "Feed Mixer 3-Tonne",
		src: "/images/feed-mixer-3t.jpg",
		category: "farming",
		spec: "3-Tonne Commercial Batch",
		badge: "Commercial Feedlot"
	},
	{
		label: "Ice Block Plant",
		src: "/images/ice-block.jpg",
		category: "farming",
		spec: "1–5 Tonne / 24h Blocks",
		badge: "Cold Chain Storage"
	},
	{
		label: "Electric Fence Machine",
		src: "/images/electric-fence.jpg",
		category: "hardware",
		spec: "Automated Diamond Mesh",
		badge: "Wire Weaving"
	},
	{
		label: "Barbed Wire Machine",
		src: "/images/barbed-wire.jpg",
		category: "hardware",
		spec: "High-Speed Dual Strand",
		badge: "Perimeter Security"
	},
	{
		label: "Diesel Fence Machine",
		src: "/images/diesel-fence.jpg",
		category: "hardware",
		spec: "Independent Generator Drive",
		badge: "Off-Grid Production"
	},
	{
		label: "Double-Twist Fence",
		src: "/images/double-fence.jpg",
		category: "hardware",
		spec: "Heavy Hexagonal Mesh",
		badge: "Mining & Game Fence"
	},
	{
		label: "3-Phase Electric Motor",
		src: "/images/electric-motor.jpg",
		category: "industry",
		spec: "7.5kW to 55kW 380V",
		badge: "Heavy Duty Drive"
	},
	{
		label: "Diesel Generator Kit",
		src: "/images/generator.jpg",
		category: "industry",
		spec: "15kVA to 150kVA Silent",
		badge: "Standby Power"
	},
	{
		label: "Industrial Air Compressor",
		src: "/images/compressor.jpg",
		category: "industry",
		spec: "8–12 Bar Heavy Duty",
		badge: "Pneumatic Power"
	}
];
function RecordPager({ index, total, title, subtitle, onBack, backLabel, onPrev, onNext }) {
	const atStart = index <= 0;
	const atEnd = index < 0 || index >= total - 1;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start gap-3 min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onBack,
				className: "mt-0.5 inline-flex h-11 shrink-0 items-center gap-1 rounded-full border border-black/[0.08] bg-white px-3.5 text-xs font-medium text-[#1D1D1F] shadow-2xs hover:bg-[#F5F5F7]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }), backLabel]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "truncate text-lg font-semibold tracking-tight text-[#1D1D1F]",
					children: title
				}), subtitle ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate text-xs text-[#86868B]",
					children: subtitle
				}) : null]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-1.5 self-end sm:self-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onPrev,
					disabled: atStart,
					className: "inline-flex h-11 items-center gap-1 rounded-full border border-black/[0.08] bg-white px-3.5 text-xs font-medium text-[#1D1D1F] shadow-2xs hover:bg-[#F5F5F7] disabled:pointer-events-none disabled:opacity-30",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }), "Previous"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "min-w-16 px-2 text-center text-xs font-medium text-[#6E6E73]",
					children: index < 0 ? "—" : `${index + 1} of ${total}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: onNext,
					disabled: atEnd,
					className: "inline-flex h-11 items-center gap-1 rounded-full border border-black/[0.08] bg-white px-3.5 text-xs font-medium text-[#1D1D1F] shadow-2xs hover:bg-[#F5F5F7] disabled:pointer-events-none disabled:opacity-30",
					children: ["Next", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })]
				})
			]
		})]
	});
}
function RowCheck({ checked, indeterminate, onChange, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type: "checkbox",
		"aria-label": label,
		checked,
		ref: (el) => {
			if (el) el.indeterminate = Boolean(indeterminate && !checked);
		},
		onChange: (e) => onChange(e.target.checked),
		className: "size-4 shrink-0 cursor-pointer rounded border-black/25 accent-[#1D1D1F]"
	});
}
function ConfirmModal({ title, body, confirmLabel, tone = "danger", onCancel, onConfirm }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[70] flex items-center justify-center bg-black/45 p-4 backdrop-blur-sm",
		onClick: onCancel,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md rounded-2xl border border-black/[0.08] bg-white p-5 shadow-2xl",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `flex size-10 shrink-0 items-center justify-center rounded-xl ${tone === "danger" ? "bg-red-50 text-red-600" : "bg-black/[0.05] text-[#1D1D1F]"}`,
					children: tone === "danger" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Recycle, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-base font-semibold text-[#1D1D1F]",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs leading-relaxed text-[#6E6E73]",
						children: body
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 flex justify-end gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onCancel,
					className: "inline-flex h-11 items-center rounded-full border border-black/[0.08] bg-white px-4 text-xs font-medium text-[#1D1D1F] hover:bg-[#F5F5F7]",
					children: "Cancel"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onConfirm,
					className: `inline-flex h-11 items-center rounded-full px-4 text-xs font-semibold text-white ${tone === "danger" ? "bg-red-600 hover:bg-red-700" : "bg-[#1D1D1F] hover:bg-black"}`,
					children: confirmLabel
				})]
			})]
		})
	});
}
function formatBinDate(iso) {
	const d = new Date(iso);
	if (Number.isNaN(d.getTime())) return iso;
	return d.toLocaleString("en-GB", {
		day: "2-digit",
		month: "short",
		year: "numeric",
		hour: "2-digit",
		minute: "2-digit"
	});
}
function stageChipClass(stage) {
	if (stage === "Won") return "bg-[#E8F8EE] text-[#1B833E]";
	if (stage === "Tender Quoted") return "bg-[#FFF4E5] text-[#B25E00]";
	if (stage === "Negotiation") return "bg-purple-50 text-purple-700";
	if (stage === "Lead") return "bg-blue-50 text-blue-700";
	if (stage === "Lost") return "bg-red-50 text-red-700";
	return "bg-black/[0.05] text-[#1D1D1F]";
}
function AdminBackoffice() {
	const [activeTab, setActiveTab] = (0, import_react.useState)("crm");
	const [clients, setClients] = (0, import_react.useState)(getStoredCRMClients);
	const [equipmentList, setEquipmentList] = (0, import_react.useState)(getStoredEquipment);
	const [siteCopy, setSiteCopy] = (0, import_react.useState)(getStoredSiteCopy);
	const [crmSearch, setCrmSearch] = (0, import_react.useState)("");
	const [crmStageFilter, setCrmStageFilter] = (0, import_react.useState)("All");
	const [crmProvinceFilter, setCrmProvinceFilter] = (0, import_react.useState)("All Zimbabwe");
	const [peekClientId, setPeekClientId] = (0, import_react.useState)(null);
	const [profileClientId, setProfileClientId] = (0, import_react.useState)(null);
	const [clientDraft, setClientDraft] = (0, import_react.useState)(null);
	const [showAddClientModal, setShowAddClientModal] = (0, import_react.useState)(false);
	const [newClientName, setNewClientName] = (0, import_react.useState)("");
	const [newClientOrg, setNewClientOrg] = (0, import_react.useState)("");
	const [newClientPhone, setNewClientPhone] = (0, import_react.useState)("+263 ");
	const [newClientEmail, setNewClientEmail] = (0, import_react.useState)("");
	const [newClientLocation, setNewClientLocation] = (0, import_react.useState)("Harare");
	const [newClientProvince, setNewClientProvince] = (0, import_react.useState)("Harare");
	const [newClientService, setNewClientService] = (0, import_react.useState)("Mining Equipment");
	const [newClientInterest, setNewClientInterest] = (0, import_react.useState)("");
	const [newClientIntent, setNewClientIntent] = (0, import_react.useState)("Buy");
	const [newClientDealValue, setNewClientDealValue] = (0, import_react.useState)("12000");
	const [newClientPriority, setNewClientPriority] = (0, import_react.useState)("High");
	const [newClientNotes, setNewClientNotes] = (0, import_react.useState)("");
	const [newTimelineNote, setNewTimelineNote] = (0, import_react.useState)("");
	const [productSearch, setProductSearch] = (0, import_react.useState)("");
	const [productCategoryFilter, setProductCategoryFilter] = (0, import_react.useState)("all");
	const [peekProductId, setPeekProductId] = (0, import_react.useState)(null);
	const [productProfileOpen, setProductProfileOpen] = (0, import_react.useState)(false);
	const [editingProduct, setEditingProduct] = (0, import_react.useState)(null);
	const [showAddProductModal, setShowAddProductModal] = (0, import_react.useState)(false);
	const [newProdName, setNewProdName] = (0, import_react.useState)("");
	const [newProdCategory, setNewProdCategory] = (0, import_react.useState)("mining");
	const [newProdThroughput, setNewProdThroughput] = (0, import_react.useState)("");
	const [newProdPower, setNewProdPower] = (0, import_react.useState)("");
	const [newProdPrice, setNewProdPrice] = (0, import_react.useState)("");
	const [newProdBlurb, setNewProdBlurb] = (0, import_react.useState)("");
	const [newProdImage, setNewProdImage] = (0, import_react.useState)("/images/jaw-crusher.jpg");
	function handleImageUpload(e, isEditing = false) {
		const file = e.target.files?.[0];
		if (!file) return;
		if (file.size > 8388608) {
			triggerToast("Please choose an image under 8MB");
			return;
		}
		const reader = new FileReader();
		reader.onload = (event) => {
			const result = event.target?.result;
			if (isEditing && editingProduct) setEditingProduct({
				...editingProduct,
				image: result
			});
			else setNewProdImage(result);
			triggerToast("Photo uploaded successfully!");
		};
		reader.readAsDataURL(file);
	}
	function handleCreateProduct(e) {
		e.preventDefault();
		if (!newProdName.trim()) return;
		const newEquip = {
			id: newProdName.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
			name: newProdName.trim(),
			category: newProdCategory,
			intent: newProdCategory === "hire" ? "hire" : "sale",
			blurb: newProdBlurb.trim() || "Heavy machinery engineered for Zimbabwean site conditions.",
			image: newProdImage || "/images/jaw-crusher.jpg",
			imageAlt: newProdName,
			spec: newProdThroughput.trim() || "Heavy-duty specification",
			sku: `OMNI-${newProdCategory.toUpperCase().slice(0, 3)}-${Math.floor(100 + Math.random() * 900)}`,
			stockStatus: "In Yard Cranborne",
			throughput: newProdThroughput.trim() || "Site Rated",
			powerOption: newProdPower.trim() || "Electric 3-Phase / Diesel",
			priceUSD: newProdPrice.trim() || "Tender on Request",
			condition: "New",
			warrantyMonths: 12,
			detailedNotes: "Full parts backup and field commissioning from Cranborne yard."
		};
		const updated = [newEquip, ...equipmentList];
		setEquipmentList(updated);
		saveStoredEquipment(updated);
		setShowAddProductModal(false);
		triggerToast(`Added ${newEquip.name} to catalogue`);
		setNewProdName("");
		setNewProdThroughput("");
		setNewProdPower("");
		setNewProdPrice("");
		setNewProdBlurb("");
		setNewProdImage("/images/jaw-crusher.jpg");
	}
	const [crmPage, setCrmPage] = (0, import_react.useState)(1);
	const [crmPageSize, setCrmPageSize] = (0, import_react.useState)(5);
	const [productPage, setProductPage] = (0, import_react.useState)(1);
	const [productPageSize, setProductPageSize] = (0, import_react.useState)(6);
	const [cmsForm, setCmsForm] = (0, import_react.useState)(siteCopy);
	const [cmsCategory, setCmsCategory] = (0, import_react.useState)("hero");
	const [cmsSearch, setCmsSearch] = (0, import_react.useState)("");
	const [cmsPreviewTab, setCmsPreviewTab] = (0, import_react.useState)("hero");
	const [cmsLayoutMode, setCmsLayoutMode] = (0, import_react.useState)("full");
	const [hasUnsavedChanges, setHasUnsavedChanges] = (0, import_react.useState)(false);
	const [presetCategoryFilter, setPresetCategoryFilter] = (0, import_react.useState)("all");
	const [newPresetCategoryFilter, setNewPresetCategoryFilter] = (0, import_react.useState)("all");
	const [photoPresetSearch, setPhotoPresetSearch] = (0, import_react.useState)("");
	const [newPhotoPresetSearch, setNewPhotoPresetSearch] = (0, import_react.useState)("");
	const [zoomedPhoto, setZoomedPhoto] = (0, import_react.useState)(null);
	const [toastMessage, setToastMessage] = (0, import_react.useState)(null);
	const [recycleBin, setRecycleBin] = (0, import_react.useState)(getStoredRecycleBin);
	const [selectedClientIds, setSelectedClientIds] = (0, import_react.useState)([]);
	const [selectedProductIds, setSelectedProductIds] = (0, import_react.useState)([]);
	const [selectedBinIds, setSelectedBinIds] = (0, import_react.useState)([]);
	const [recycleFilter, setRecycleFilter] = (0, import_react.useState)("all");
	const [recycleSearch, setRecycleSearch] = (0, import_react.useState)("");
	const [pendingAction, setPendingAction] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		function handleStorageSync() {
			setClients(getStoredCRMClients());
			setEquipmentList(getStoredEquipment());
			setSiteCopy(getStoredSiteCopy());
			setCmsForm(getStoredSiteCopy());
			setRecycleBin(getStoredRecycleBin());
		}
		window.addEventListener("omnicore-crm-updated", handleStorageSync);
		window.addEventListener("omnicore-equipment-updated", handleStorageSync);
		window.addEventListener("omnicore-copy-updated", handleStorageSync);
		window.addEventListener("omnicore-recycle-updated", handleStorageSync);
		return () => {
			window.removeEventListener("omnicore-crm-updated", handleStorageSync);
			window.removeEventListener("omnicore-equipment-updated", handleStorageSync);
			window.removeEventListener("omnicore-copy-updated", handleStorageSync);
			window.removeEventListener("omnicore-recycle-updated", handleStorageSync);
		};
	}, []);
	function triggerToast(msg) {
		setToastMessage(msg);
		setTimeout(() => setToastMessage(null), 3200);
	}
	function updateClientStage(id, stage) {
		const updated = clients.map((c) => {
			if (c.id === id) {
				const newTimeline = [{
					date: "Today",
					note: `Deal stage updated to "${stage}"`,
					author: "Technical Desk"
				}, ...c.timeline];
				return {
					...c,
					stage,
					timeline: newTimeline
				};
			}
			return c;
		});
		setClients(updated);
		saveStoredCRMClients(updated);
		if (clientDraft?.id === id) {
			const next = updated.find((c) => c.id === id);
			if (next) setClientDraft(next);
		}
		triggerToast(`Stage updated to ${stage}`);
	}
	function handleAddTimelineNote() {
		if (!newTimelineNote.trim() || !clientDraft) return;
		const noteEntry = {
			date: "Today",
			note: newTimelineNote.trim(),
			author: "Technical Desk"
		};
		const updated = clients.map((c) => c.id === clientDraft.id ? {
			...c,
			timeline: [noteEntry, ...c.timeline]
		} : c);
		setClients(updated);
		saveStoredCRMClients(updated);
		setClientDraft((prev) => prev ? {
			...prev,
			timeline: [noteEntry, ...prev.timeline]
		} : null);
		setNewTimelineNote("");
		triggerToast("Activity note logged");
	}
	function handleCreateClient(e) {
		e.preventDefault();
		if (!newClientName.trim()) return;
		const valNum = parseFloat(newClientDealValue.replace(/[^0-9.]/g, "")) || 0;
		const newRecord = {
			id: `CRM-${Math.floor(1e3 + Math.random() * 9e3)}`,
			name: newClientName.trim(),
			organization: newClientOrg.trim() || "Private Syndicate / Farm",
			phone: newClientPhone.trim(),
			email: newClientEmail.trim() || "client@omnicore.zw",
			location: newClientLocation.trim() || "Harare",
			province: newClientProvince,
			service: newClientService,
			equipmentInterest: newClientInterest.trim() || "Heavy machinery requirement",
			intent: newClientIntent,
			stage: "Lead",
			priority: newClientPriority,
			dealValue: valNum,
			dealValueDisplay: `$${valNum.toLocaleString()}`,
			lastContact: "Just now",
			nextFollowUp: "Tomorrow",
			notes: newClientNotes.trim() || "New inquiry logged directly into Harare backoffice.",
			timeline: [{
				date: "Today",
				note: "Client record created in Omnicore CRM.",
				author: "Technical Desk"
			}]
		};
		const updated = [newRecord, ...clients];
		setClients(updated);
		saveStoredCRMClients(updated);
		setShowAddClientModal(false);
		setPeekClientId(null);
		setProfileClientId(newRecord.id);
		setClientDraft(newRecord);
		triggerToast(`Client ${newRecord.name} added to pipeline`);
		setNewClientName("");
		setNewClientOrg("");
		setNewClientInterest("");
		setNewClientNotes("");
	}
	function handleSaveClient(e) {
		e.preventDefault();
		if (!clientDraft) return;
		const valNum = Number(clientDraft.dealValue) || 0;
		const next = {
			...clientDraft,
			dealValue: valNum,
			dealValueDisplay: `$${valNum.toLocaleString()}`
		};
		const updated = clients.map((c) => c.id === next.id ? next : c);
		setClients(updated);
		saveStoredCRMClients(updated);
		setClientDraft(next);
		triggerToast(`Saved ${next.name}`);
	}
	function handleSaveProduct(e) {
		e.preventDefault();
		if (!editingProduct) return;
		const updated = equipmentList.map((item) => item.id === editingProduct.id ? editingProduct : item);
		setEquipmentList(updated);
		saveStoredEquipment(updated);
		triggerToast(`Updated ${editingProduct.name}`);
	}
	function handleDeleteProduct(id) {
		setPendingAction({
			type: "delete-products",
			ids: [id]
		});
	}
	function moveClientsToBin(ids) {
		if (ids.length === 0) return;
		const idSet = new Set(ids);
		const toBin = clients.filter((c) => idSet.has(c.id));
		const remaining = clients.filter((c) => !idSet.has(c.id));
		const nextBin = [...toBin.map(toRecycleClient), ...recycleBin];
		setRecycleBin(nextBin);
		saveStoredRecycleBin(nextBin);
		setClients(remaining);
		saveStoredCRMClients(remaining);
		setSelectedClientIds((prev) => prev.filter((id) => !idSet.has(id)));
		if (profileClientId && idSet.has(profileClientId)) {
			setProfileClientId(null);
			setClientDraft(null);
		}
		if (peekClientId && idSet.has(peekClientId)) setPeekClientId(null);
		triggerToast(toBin.length === 1 ? `${toBin[0].name} moved to recycle bin` : `${toBin.length} clients moved to recycle bin`);
	}
	function moveProductsToBin(ids) {
		if (ids.length === 0) return;
		const idSet = new Set(ids);
		const toBin = equipmentList.filter((item) => idSet.has(item.id));
		const remaining = equipmentList.filter((item) => !idSet.has(item.id));
		const nextBin = [...toBin.map(toRecycleProduct), ...recycleBin];
		setRecycleBin(nextBin);
		saveStoredRecycleBin(nextBin);
		setEquipmentList(remaining);
		saveStoredEquipment(remaining);
		setSelectedProductIds((prev) => prev.filter((id) => !idSet.has(id)));
		if (editingProduct && idSet.has(editingProduct.id)) {
			setProductProfileOpen(false);
			setEditingProduct(null);
		}
		if (peekProductId && idSet.has(peekProductId)) setPeekProductId(null);
		triggerToast(toBin.length === 1 ? `${toBin[0].name} moved to recycle bin` : `${toBin.length} machines moved to recycle bin`);
	}
	function restoreBinItems(binIds) {
		if (binIds.length === 0) return;
		const idSet = new Set(binIds);
		const toRestore = recycleBin.filter((item) => idSet.has(item.binId));
		const remainingBin = recycleBin.filter((item) => !idSet.has(item.binId));
		let nextClients = clients;
		let nextEquip = equipmentList;
		for (const item of toRestore) if (item.kind === "client") {
			const snap = item.snapshot;
			const exists = nextClients.some((c) => c.id === snap.id);
			nextClients = [{
				...snap,
				id: exists ? `${snap.id}-R` : snap.id
			}, ...nextClients];
		} else {
			const snap = item.snapshot;
			const exists = nextEquip.some((p) => p.id === snap.id);
			nextEquip = [{
				...snap,
				id: exists ? `${snap.id}-restored` : snap.id
			}, ...nextEquip];
		}
		setRecycleBin(remainingBin);
		saveStoredRecycleBin(remainingBin);
		setClients(nextClients);
		saveStoredCRMClients(nextClients);
		setEquipmentList(nextEquip);
		saveStoredEquipment(nextEquip);
		setSelectedBinIds((prev) => prev.filter((id) => !idSet.has(id)));
		triggerToast(toRestore.length === 1 ? `Restored ${toRestore[0].title}` : `Restored ${toRestore.length} records`);
	}
	function destroyBinItems(binIds) {
		if (binIds.length === 0) return;
		const idSet = new Set(binIds);
		const remainingBin = recycleBin.filter((item) => !idSet.has(item.binId));
		const removed = recycleBin.length - remainingBin.length;
		setRecycleBin(remainingBin);
		saveStoredRecycleBin(remainingBin);
		setSelectedBinIds((prev) => prev.filter((id) => !idSet.has(id)));
		triggerToast(removed === 1 ? "Record permanently deleted" : `${removed} records permanently deleted`);
	}
	function emptyRecycleBin() {
		const count = recycleBin.length;
		setRecycleBin([]);
		saveStoredRecycleBin([]);
		setSelectedBinIds([]);
		triggerToast(count === 0 ? "Recycle bin already empty" : `Emptied recycle bin (${count} records)`);
	}
	function runPendingAction() {
		if (!pendingAction) return;
		if (pendingAction.type === "delete-clients") moveClientsToBin(pendingAction.ids);
		else if (pendingAction.type === "delete-products") moveProductsToBin(pendingAction.ids);
		else if (pendingAction.type === "restore") restoreBinItems(pendingAction.binIds);
		else if (pendingAction.type === "destroy") destroyBinItems(pendingAction.binIds);
		else if (pendingAction.type === "empty-bin") emptyRecycleBin();
		setPendingAction(null);
	}
	function handleToggleStockStatus(id) {
		const updated = equipmentList.map((item) => {
			if (item.id === id) {
				const nextStatus = item.stockStatus === "In Yard Cranborne" ? "In Transit (Beitbridge)" : item.stockStatus === "In Transit (Beitbridge)" ? "Active on Site" : "In Yard Cranborne";
				return {
					...item,
					stockStatus: nextStatus
				};
			}
			return item;
		});
		setEquipmentList(updated);
		saveStoredEquipment(updated);
		triggerToast("Stock status updated");
	}
	function handleSaveSiteCopy(e) {
		if (e) e.preventDefault();
		setSiteCopy(cmsForm);
		saveStoredSiteCopy(cmsForm);
		setHasUnsavedChanges(false);
		triggerToast("Website content published live!");
	}
	function handleResetSiteCopy() {
		if (typeof window !== "undefined" && window.confirm("Reset all website copy and details to original defaults?")) {
			const def = resetStoredSiteCopy();
			setSiteCopy(def);
			setCmsForm(def);
			setHasUnsavedChanges(false);
			triggerToast("Website copy reset to factory defaults!");
		}
	}
	function updateCmsField(field, value) {
		setCmsForm((prev) => ({
			...prev,
			[field]: value
		}));
		setHasUnsavedChanges(true);
	}
	const filteredClients = (0, import_react.useMemo)(() => {
		const q = crmSearch.toLowerCase().trim();
		return clients.filter((c) => {
			const matchSearch = !q || c.name.toLowerCase().includes(q) || c.organization.toLowerCase().includes(q) || c.phone.includes(q) || c.location.toLowerCase().includes(q) || c.equipmentInterest.toLowerCase().includes(q) || c.id.toLowerCase().includes(q);
			const matchStage = crmStageFilter === "All" || c.stage === crmStageFilter;
			const matchProvince = crmProvinceFilter === "All Zimbabwe" || c.province === crmProvinceFilter;
			return matchSearch && matchStage && matchProvince;
		});
	}, [
		clients,
		crmSearch,
		crmStageFilter,
		crmProvinceFilter
	]);
	const pipelineMetrics = (0, import_react.useMemo)(() => {
		return {
			totalPipelineValue: clients.filter((c) => c.stage !== "Lost").reduce((sum, c) => sum + c.dealValue, 0),
			wonValue: clients.filter((c) => c.stage === "Won").reduce((sum, c) => sum + c.dealValue, 0),
			activeDeals: clients.filter((c) => c.stage === "Lead" || c.stage === "Discovery" || c.stage === "Tender Quoted" || c.stage === "Negotiation").length,
			wonDeals: clients.filter((c) => c.stage === "Won").length,
			highPriorityCount: clients.filter((c) => c.priority === "High" && c.stage !== "Lost").length
		};
	}, [clients]);
	const filteredProducts = (0, import_react.useMemo)(() => {
		const q = productSearch.toLowerCase().trim();
		return equipmentList.filter((item) => {
			const matchCat = productCategoryFilter === "all" || item.category === productCategoryFilter;
			const matchQuery = !q || item.name.toLowerCase().includes(q) || (item.spec?.toLowerCase().includes(q) ?? false) || item.sku && item.sku.toLowerCase().includes(q) || item.throughput && item.throughput.toLowerCase().includes(q);
			return matchCat && matchQuery;
		});
	}, [
		equipmentList,
		productSearch,
		productCategoryFilter
	]);
	const filteredRecycleItems = (0, import_react.useMemo)(() => {
		const q = recycleSearch.toLowerCase().trim();
		return recycleBin.filter((item) => {
			const matchKind = recycleFilter === "all" || item.kind === recycleFilter;
			const matchQuery = !q || item.title.toLowerCase().includes(q) || item.subtitle.toLowerCase().includes(q) || item.binId.toLowerCase().includes(q);
			return matchKind && matchQuery;
		});
	}, [
		recycleBin,
		recycleFilter,
		recycleSearch
	]);
	const pendingConfirm = (0, import_react.useMemo)(() => {
		if (!pendingAction) return null;
		if (pendingAction.type === "delete-clients") {
			const n = pendingAction.ids.length;
			return {
				title: n === 1 ? "Move client to recycle bin?" : `Move ${n} clients to recycle bin?`,
				body: "They will leave the CRM pipeline and can be restored from Recycle Bin. Public records stay hidden until restored.",
				confirmLabel: "Move to recycle bin",
				tone: "danger"
			};
		}
		if (pendingAction.type === "delete-products") {
			const n = pendingAction.ids.length;
			return {
				title: n === 1 ? "Move machine to recycle bin?" : `Move ${n} machines to recycle bin?`,
				body: "They will be removed from Cranborne inventory and the public catalogue until restored.",
				confirmLabel: "Move to recycle bin",
				tone: "danger"
			};
		}
		if (pendingAction.type === "restore") {
			const n = pendingAction.binIds.length;
			return {
				title: n === 1 ? "Restore this record?" : `Restore ${n} records?`,
				body: "Restored clients return to the CRM pipeline. Restored machines reappear in inventory and the public catalogue.",
				confirmLabel: "Restore",
				tone: "neutral"
			};
		}
		if (pendingAction.type === "destroy") {
			const n = pendingAction.binIds.length;
			return {
				title: n === 1 ? "Permanently delete this record?" : `Permanently delete ${n} records?`,
				body: "This cannot be undone. The snapshot will be removed from the recycle bin forever.",
				confirmLabel: "Delete forever",
				tone: "danger"
			};
		}
		return {
			title: "Empty recycle bin?",
			body: `Permanently delete all ${recycleBin.length} records. This cannot be undone.`,
			confirmLabel: "Empty bin",
			tone: "danger"
		};
	}, [pendingAction, recycleBin.length]);
	const crmTotalPages = Math.max(1, Math.ceil(filteredClients.length / crmPageSize));
	const paginatedClients = (0, import_react.useMemo)(() => {
		const start = (crmPage - 1) * crmPageSize;
		return filteredClients.slice(start, start + crmPageSize);
	}, [
		filteredClients,
		crmPage,
		crmPageSize
	]);
	(0, import_react.useEffect)(() => {
		setCrmPage(1);
	}, [
		crmSearch,
		crmStageFilter,
		crmProvinceFilter,
		crmPageSize
	]);
	const productTotalPages = Math.max(1, Math.ceil(filteredProducts.length / productPageSize));
	const paginatedProducts = (0, import_react.useMemo)(() => {
		const start = (productPage - 1) * productPageSize;
		return filteredProducts.slice(start, start + productPageSize);
	}, [
		filteredProducts,
		productPage,
		productPageSize
	]);
	(0, import_react.useEffect)(() => {
		setProductPage(1);
	}, [
		productSearch,
		productCategoryFilter,
		productPageSize
	]);
	const peekClient = peekClientId ? clients.find((c) => c.id === peekClientId) ?? null : null;
	const peekProduct = peekProductId ? equipmentList.find((p) => p.id === peekProductId) ?? null : null;
	const clientNavIndex = profileClientId ? filteredClients.findIndex((c) => c.id === profileClientId) : -1;
	const productNavIndex = editingProduct ? filteredProducts.findIndex((p) => p.id === editingProduct.id) : -1;
	(0, import_react.useEffect)(() => {
		if (!profileClientId) {
			setClientDraft(null);
			return;
		}
		const live = clients.find((c) => c.id === profileClientId);
		setClientDraft(live ?? null);
	}, [profileClientId]);
	function stepClient(delta) {
		if (clientNavIndex < 0) return;
		const next = filteredClients[clientNavIndex + delta];
		if (next) setProfileClientId(next.id);
	}
	function stepProduct(delta) {
		if (productNavIndex < 0 || !editingProduct) return;
		const next = filteredProducts[productNavIndex + delta];
		if (next) setEditingProduct(next);
	}
	function openClientProfile(id) {
		setPeekClientId(null);
		setProfileClientId(id);
	}
	function openProductProfile(item) {
		setPeekProductId(null);
		setEditingProduct(item);
		setProductProfileOpen(true);
	}
	function closeClientProfile() {
		setProfileClientId(null);
		setClientDraft(null);
	}
	function closeProductProfile() {
		setProductProfileOpen(false);
		setEditingProduct(null);
	}
	(0, import_react.useEffect)(() => {
		function onKey(e) {
			const typing = e.target?.closest("input, textarea, select");
			if (e.key === "Escape") {
				setPeekClientId(null);
				setPeekProductId(null);
				return;
			}
			if (typing) return;
			if (e.key === "ArrowLeft") {
				if (profileClientId) stepClient(-1);
				else if (productProfileOpen) stepProduct(-1);
			}
			if (e.key === "ArrowRight") {
				if (profileClientId) stepClient(1);
				else if (productProfileOpen) stepProduct(1);
			}
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-[#F5F5F7] text-[#1D1D1F] font-sans antialiased selection:bg-[#1D1D1F] selection:text-white",
		children: [
			toastMessage && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed top-5 inset-x-0 mx-auto z-50 flex w-fit items-center gap-2 rounded-full border border-black/[0.06] bg-white px-5 py-2.5 text-xs font-semibold text-[#1D1D1F] shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-md animate-in fade-in slide-in-from-top-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-[#34C759]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: toastMessage })]
			}),
			zoomedPhoto && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in",
				onClick: () => setZoomedPhoto(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative max-w-4xl w-full rounded-3xl overflow-hidden bg-black border border-white/10 shadow-2xl",
					onClick: (e) => e.stopPropagation(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative max-h-[80vh] flex items-center justify-center bg-black/90",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: zoomedPhoto.src,
							alt: zoomedPhoto.title,
							className: "max-h-[75vh] w-auto max-w-full object-contain mx-auto",
							onError: (e) => {
								e.target.src = "/images/hero.jpg";
							}
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setZoomedPhoto(null),
							className: "absolute top-4 right-4 flex size-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-white hover:text-black transition-all",
							title: "Close",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between p-4 bg-[#1D1D1F] text-white border-t border-white/10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-semibold text-sm",
							children: zoomedPhoto.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-white/60 font-mono mt-0.5",
							children: zoomedPhoto.src
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setZoomedPhoto(null),
							className: "rounded-full bg-white/15 px-4 py-1.5 text-xs font-medium text-white hover:bg-white/25 transition-all",
							children: "Close View"
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-40 border-b border-black/[0.06] bg-white/85 backdrop-blur-xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-16 max-w-[1720px] w-full items-center justify-between px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/admin",
							className: "flex items-center gap-2.5 group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex size-8 items-center justify-center rounded-xl bg-[#1D1D1F] text-white text-xs font-bold shadow-xs",
								children: "O"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold tracking-tight text-[#1D1D1F]",
									children: "Omnicore Backoffice"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-black/[0.05] px-2 py-0.5 text-[10px] font-medium text-[#6E6E73]",
									children: "Harare Operations"
								})]
							}) })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "inline-flex items-center gap-1.5 rounded-full border border-black/[0.08] bg-white px-4 py-1.5 text-xs font-medium text-[#1D1D1F] shadow-2xs hover:bg-[#F5F5F7] transition-all active:scale-95",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View Public Website" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3 text-[#86868B]" })]
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-[1720px] w-full px-4 sm:px-6 lg:px-8 pb-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "inline-flex w-full sm:w-auto items-center overflow-x-auto rounded-xl bg-black/[0.05] p-1 text-xs",
						children: [
							{
								id: "crm",
								label: "Clients & CRM Pipeline",
								icon: Users,
								count: filteredClients.length
							},
							{
								id: "products",
								label: "Machinery Inventory",
								icon: Package,
								count: equipmentList.length
							},
							{
								id: "cms",
								label: "Site Content & Copy",
								icon: FileText
							},
							{
								id: "hire",
								label: "Field Deployments",
								icon: Truck
							},
							{
								id: "recycle",
								label: "Recycle Bin",
								icon: Recycle,
								count: recycleBin.length
							}
						].map((tab) => {
							const Icon = tab.icon;
							const isActive = activeTab === tab.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								onClick: () => {
									setActiveTab(tab.id);
									setPeekClientId(null);
									setProfileClientId(null);
									setPeekProductId(null);
									setProductProfileOpen(false);
									setEditingProduct(null);
									setSelectedClientIds([]);
									setSelectedProductIds([]);
									setSelectedBinIds([]);
								},
								className: `flex flex-1 sm:flex-initial items-center justify-center gap-2 rounded-lg px-4 py-1.5 font-medium transition-all ${isActive ? "bg-white text-[#1D1D1F] shadow-xs font-semibold" : "text-[#6E6E73] hover:text-[#1D1D1F]"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-3.5" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tab.label }),
									tab.count !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `rounded-full px-1.5 py-0.2 text-[10px] ${isActive ? "bg-black/[0.06] text-[#1D1D1F]" : "bg-black/[0.04] text-[#86868B]"}`,
										children: tab.count
									})
								]
							}, tab.id);
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-[1720px] w-full px-4 py-6 sm:px-6 lg:px-8",
				children: [
					activeTab === "crm" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [
							profileClientId && clientDraft ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handleSaveClient,
								className: "space-y-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecordPager, {
									index: clientNavIndex,
									total: filteredClients.length,
									title: clientDraft.name,
									subtitle: `${clientDraft.organization} · ${clientDraft.id}`,
									onBack: closeClientProfile,
									backLabel: "All clients",
									onPrev: () => stepClient(-1),
									onNext: () => stepClient(1)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 gap-5 lg:grid-cols-12",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "space-y-4 lg:col-span-7",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.03)]",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mb-4 flex flex-wrap items-center gap-2",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: `rounded-full px-2.5 py-1 text-[11px] font-semibold ${stageChipClass(clientDraft.stage)}`,
															children: clientDraft.stage
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: `rounded-full px-2.5 py-1 text-[11px] font-medium ${clientDraft.priority === "High" ? "bg-red-50 text-red-600" : clientDraft.priority === "Medium" ? "bg-amber-50 text-amber-700" : "bg-black/[0.04] text-[#86868B]"}`,
															children: [clientDraft.priority, " priority"]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-sm font-semibold text-[#1D1D1F]",
															children: clientDraft.dealValueDisplay
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "grid grid-cols-1 gap-3 sm:grid-cols-2 text-xs",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Client name"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "text",
															required: true,
															value: clientDraft.name,
															onChange: (e) => setClientDraft({
																...clientDraft,
																name: e.target.value
															}),
															className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
														})] }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Organization"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "text",
															value: clientDraft.organization,
															onChange: (e) => setClientDraft({
																...clientDraft,
																organization: e.target.value
															}),
															className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
														})] }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Phone / WhatsApp"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "text",
															value: clientDraft.phone,
															onChange: (e) => setClientDraft({
																...clientDraft,
																phone: e.target.value
															}),
															className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
														})] }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Email"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "email",
															value: clientDraft.email,
															onChange: (e) => setClientDraft({
																...clientDraft,
																email: e.target.value
															}),
															className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
														})] }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Site location"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "text",
															value: clientDraft.location,
															onChange: (e) => setClientDraft({
																...clientDraft,
																location: e.target.value
															}),
															className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
														})] }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Province"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
															value: clientDraft.province,
															onChange: (e) => setClientDraft({
																...clientDraft,
																province: e.target.value
															}),
															className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none",
															children: PROVINCES.filter((p) => p !== "All Zimbabwe").map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																value: p,
																children: p
															}, p))
														})] }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Division"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
															value: clientDraft.service,
															onChange: (e) => setClientDraft({
																...clientDraft,
																service: e.target.value
															}),
															className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																	value: "Mining Equipment",
																	children: "Mining Equipment"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																	value: "Construction Machinery Hire",
																	children: "Machinery Hire"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																	value: "Hardware & Construction",
																	children: "Hardware & Fence"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																	value: "Farming Machinery",
																	children: "Farming Plant"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																	value: "Industry & Manufacturing",
																	children: "Industrial Plant"
																})
															]
														})] }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Deal type"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
															value: clientDraft.intent,
															onChange: (e) => setClientDraft({
																...clientDraft,
																intent: e.target.value
															}),
															className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																	value: "Buy",
																	children: "Outright Purchase"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																	value: "Hire",
																	children: "Plant Hire"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																	value: "Both",
																	children: "Both"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																	value: "Consultation",
																	children: "Technical Consult"
																})
															]
														})] }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Stage"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
															value: clientDraft.stage,
															onChange: (e) => updateClientStage(clientDraft.id, e.target.value),
															className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none",
															children: STAGES.map((st) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																value: st,
																children: st
															}, st))
														})] }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Priority"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
															value: clientDraft.priority,
															onChange: (e) => setClientDraft({
																...clientDraft,
																priority: e.target.value
															}),
															className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																	value: "High",
																	children: "High"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																	value: "Medium",
																	children: "Medium"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																	value: "Normal",
																	children: "Normal"
																})
															]
														})] }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "sm:col-span-2",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																className: "mb-1 block font-medium text-[#1D1D1F]",
																children: "Estimated value ($)"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																type: "text",
																value: String(clientDraft.dealValue),
																onChange: (e) => setClientDraft({
																	...clientDraft,
																	dealValue: Number(e.target.value.replace(/[^0-9.]/g, "")) || 0
																}),
																className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "sm:col-span-2",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																className: "mb-1 block font-medium text-[#1D1D1F]",
																children: "Equipment required"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																type: "text",
																value: clientDraft.equipmentInterest,
																onChange: (e) => setClientDraft({
																	...clientDraft,
																	equipmentInterest: e.target.value
																}),
																className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "sm:col-span-2",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																className: "mb-1 block font-medium text-[#1D1D1F]",
																children: "Internal notes"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																rows: 3,
																value: clientDraft.notes,
																onChange: (e) => setClientDraft({
																	...clientDraft,
																	notes: e.target.value
																}),
																className: "w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] p-3 leading-relaxed text-[#1D1D1F] focus:bg-white focus:outline-none"
															})]
														})
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-4 flex justify-end gap-2 border-t border-black/[0.06] pt-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														type: "button",
														onClick: () => setPendingAction({
															type: "delete-clients",
															ids: [clientDraft.id]
														}),
														className: "inline-flex h-11 items-center gap-1.5 rounded-full border border-red-200 bg-white px-4 text-xs font-semibold text-red-600 hover:bg-red-50",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" }), "Move to bin"]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "submit",
														className: "inline-flex h-11 items-center rounded-full bg-[#1D1D1F] px-5 text-xs font-semibold text-white hover:bg-black",
														children: "Save profile"
													})]
												})
											]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-4 lg:col-span-5",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.03)]",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "mb-2 block text-[10px] font-semibold uppercase tracking-wider text-[#86868B]",
													children: "Fast technical response (WhatsApp)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "grid grid-cols-1 gap-1.5 text-xs",
													children: [
														{
															label: "Formal tender rate ready",
															text: `Good day ${clientDraft.name}. Following up from Omnicore Solutions Harare regarding ${clientDraft.equipmentInterest}. We have prepared the indicative FOB Harare quotation and specifications for your review.`
														},
														{
															label: "Cranborne yard inspection",
															text: `Hello ${clientDraft.name}, your requested machinery (${clientDraft.equipmentInterest}) is available for physical inspection at our Cranborne yard (115 Chiremba Rd, Harare). What time works best for you?`
														},
														{
															label: "Freight & delivery schedule",
															text: `Good day ${clientDraft.name}. We can arrange direct lowbed delivery to your site in ${clientDraft.location}. Please confirm site access for heavy plant haulage.`
														},
														{
															label: "Commissioning & warranty",
															text: `Hello ${clientDraft.name}, all Omnicore plant includes on-site field commissioning and 12-month parts backup from Cranborne. Let us finalize the mobilization date.`
														}
													].map((tmpl, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
														href: whatsappUrl(tmpl.text),
														target: "_blank",
														rel: "noopener noreferrer",
														className: "flex items-center justify-between rounded-lg border border-black/[0.06] bg-white p-2.5 text-left text-[11px] font-medium text-[#1D1D1F] hover:border-[#1fa855] hover:bg-emerald-50/30",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: tmpl.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "ml-1 size-3 shrink-0 text-[#1fa855]" })]
													}, idx))
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mt-3 flex gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
														href: `tel:${clientDraft.phone}`,
														className: "inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-full border border-black/[0.08] bg-[#F5F5F7] text-xs font-medium text-[#1D1D1F]",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3.5" }), "Call"]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
														href: `mailto:${clientDraft.email}`,
														className: "inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-full border border-black/[0.08] bg-[#F5F5F7] text-xs font-medium text-[#1D1D1F]",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-3.5" }), "Email"]
													})]
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.03)]",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "mb-2 block text-[10px] font-semibold uppercase tracking-wider text-[#86868B]",
													children: [
														"Activity log (",
														clientDraft.timeline.length,
														")"
													]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "max-h-56 space-y-1.5 overflow-y-auto pr-1",
													children: clientDraft.timeline.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "rounded-lg bg-[#F5F5F7] p-2 text-[11px] text-[#6E6E73]",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex justify-between font-medium text-[#1D1D1F]",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.author }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-[#86868B]",
																children: item.date
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "mt-0.5",
															children: item.note
														})]
													}, i))
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex gap-1.5 pt-3",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "text",
														value: newTimelineNote,
														onChange: (e) => setNewTimelineNote(e.target.value),
														placeholder: "Log phone call, site inspection, deposit...",
														className: "h-11 flex-1 rounded-lg border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs text-[#1D1D1F] placeholder-[#86868B] focus:bg-white focus:outline-none"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: handleAddTimelineNote,
														className: "h-11 rounded-lg bg-[#1D1D1F] px-4 text-xs font-medium text-white hover:bg-black",
														children: "Add"
													})]
												})
											]
										})]
									})]
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl border border-black/[0.04] bg-white p-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] font-medium text-[#86868B] uppercase tracking-wider",
												children: "Active Tender Pipeline"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-1.5 flex items-baseline gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F]",
													children: ["$", pipelineMetrics.totalPipelineValue.toLocaleString()]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-xs text-[#34C759] font-medium",
													children: [pipelineMetrics.activeDeals, " deals"]
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl border border-black/[0.04] bg-white p-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] font-medium text-[#86868B] uppercase tracking-wider",
												children: "Closed / Won Revenue"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-1.5 flex items-baseline gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F]",
													children: ["$", pipelineMetrics.wonValue.toLocaleString()]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "text-xs text-[#34C759] font-medium",
													children: [pipelineMetrics.wonDeals, " orders"]
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl border border-black/[0.04] bg-white p-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] font-medium text-[#86868B] uppercase tracking-wider",
												children: "High Priority Tenders"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-1.5 flex items-baseline gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F]",
													children: pipelineMetrics.highPriorityCount
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs text-[#FF9500] font-medium",
													children: "urgent"
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "rounded-2xl border border-black/[0.04] bg-white p-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[11px] font-medium text-[#86868B] uppercase tracking-wider",
												children: "Client Base in Zimbabwe"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "mt-1.5 flex items-baseline gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F]",
													children: clients.length
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xs text-[#86868B]",
													children: "accounts"
												})]
											})]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1",
										children: ["All", ...STAGES].map((st) => {
											const count = st === "All" ? clients.length : clients.filter((c) => c.stage === st).length;
											const isCurrent = crmStageFilter === st;
											return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: () => setCrmStageFilter(st),
												className: `inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all ${isCurrent ? "bg-[#1D1D1F] text-white shadow-xs" : "bg-white text-[#6E6E73] hover:text-[#1D1D1F] border border-black/[0.06]"}`,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: st }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: `text-[10px] ${isCurrent ? "text-white/80" : "text-[#86868B]"}`,
													children: count
												})]
											}, st);
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-wrap items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-[#86868B]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													value: crmSearch,
													onChange: (e) => setCrmSearch(e.target.value),
													placeholder: "Search client, syndicate, plant...",
													className: "h-9 w-44 sm:w-60 rounded-full border border-black/[0.08] bg-white pl-9 pr-3 text-xs text-[#1D1D1F] placeholder-[#86868B] shadow-2xs focus:outline-none focus:ring-1 focus:ring-black/20"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
												value: crmProvinceFilter,
												onChange: (e) => setCrmProvinceFilter(e.target.value),
												className: "h-9 rounded-full border border-black/[0.08] bg-white px-3 text-xs text-[#1D1D1F] shadow-2xs focus:outline-none focus:ring-1 focus:ring-black/20",
												children: PROVINCES.map((prov) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
													value: prov,
													children: prov
												}, prov))
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: () => setShowAddClientModal(true),
												className: "inline-flex items-center gap-1.5 rounded-full bg-[#1D1D1F] px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-black transition-all active:scale-95",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "New Client" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: () => setActiveTab("recycle"),
												className: "inline-flex items-center gap-1.5 rounded-full border border-black/[0.08] bg-white px-3 py-2 text-xs font-medium text-[#1D1D1F] shadow-2xs hover:bg-[#F5F5F7]",
												title: "Open recycle bin",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Recycle, { className: "size-3.5 text-[#6E6E73]" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "hidden sm:inline",
														children: "Bin"
													}),
													recycleBin.filter((i) => i.kind === "client").length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "rounded-full bg-black/[0.06] px-1.5 text-[10px] font-semibold",
														children: recycleBin.filter((i) => i.kind === "client").length
													})
												]
											})
										]
									})]
								}),
								selectedClientIds.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-[#1D1D1F]/10 bg-[#1D1D1F] px-4 py-2.5 text-white shadow-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs font-semibold",
										children: [
											selectedClientIds.length,
											" client",
											selectedClientIds.length === 1 ? "" : "s",
											" selected"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setSelectedClientIds([]),
											className: "rounded-full px-3 py-1.5 text-xs font-medium text-white/80 hover:bg-white/10",
											children: "Clear"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setPendingAction({
												type: "delete-clients",
												ids: selectedClientIds
											}),
											className: "inline-flex items-center gap-1.5 rounded-full bg-red-500 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-red-400",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" }), "Move to recycle bin"]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_2px_16px_rgba(0,0,0,0.03)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "overflow-x-auto",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
											className: "w-full text-left text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
												className: "border-b border-black/[0.06] bg-[#FBFBFC] text-[11px] font-semibold text-[#86868B] uppercase tracking-wider",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "w-10 py-3 pl-4 pr-1",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowCheck, {
															label: "Select all clients on this page",
															checked: paginatedClients.length > 0 && paginatedClients.every((c) => selectedClientIds.includes(c.id)),
															indeterminate: paginatedClients.some((c) => selectedClientIds.includes(c.id)) && !paginatedClients.every((c) => selectedClientIds.includes(c.id)),
															onChange: (next) => {
																const pageIds = paginatedClients.map((c) => c.id);
																setSelectedClientIds((prev) => next ? [.../* @__PURE__ */ new Set([...prev, ...pageIds])] : prev.filter((id) => !pageIds.includes(id)));
															}
														})
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "py-3 px-4",
														children: "Client / Organization"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "py-3 px-3",
														children: "Location"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "py-3 px-3",
														children: "Equipment Required"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "py-3 px-3",
														children: "Stage"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "py-3 px-3 text-right",
														children: "Deal Value"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "py-3 px-3 text-center",
														children: "Priority"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "py-3 px-3 text-right",
														children: "Actions"
													})
												]
											}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
												className: "divide-y divide-black/[0.04]",
												children: filteredClients.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													colSpan: 8,
													className: "py-12 text-center text-[#86868B]",
													children: "No client records match the current filters."
												}) }) : paginatedClients.map((client) => {
													const isSelected = peekClientId === client.id;
													const isChecked = selectedClientIds.includes(client.id);
													return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
														onClick: () => setPeekClientId(client.id),
														className: `transition-colors cursor-pointer ${isChecked ? "bg-[#F3F8FF]" : isSelected ? "bg-[#F5F5F7] font-medium" : "hover:bg-black/[0.015]"}`,
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
																className: "w-10 py-3 pl-4 pr-1",
																onClick: (e) => e.stopPropagation(),
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowCheck, {
																	label: `Select ${client.name}`,
																	checked: isChecked,
																	onChange: (next) => setSelectedClientIds((prev) => next ? [...prev, client.id] : prev.filter((id) => id !== client.id))
																})
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
																className: "py-3 px-4",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "font-semibold text-[#1D1D1F] block",
																	children: client.name
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-[11px] text-[#6E6E73] block truncate max-w-[160px]",
																	children: client.organization
																})]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
																className: "py-3 px-3 text-[#6E6E73]",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "block text-[#1D1D1F]",
																	children: client.location
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-[10px] text-[#86868B]",
																	children: client.province
																})]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
																className: "py-3 px-3",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-[#1D1D1F] font-medium block truncate max-w-[180px]",
																	children: client.equipmentInterest
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "rounded bg-black/[0.04] px-1.5 py-0.2 text-[10px] text-[#6E6E73]",
																	children: client.intent
																})]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
																className: "py-3 px-3",
																onClick: (e) => e.stopPropagation(),
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
																	value: client.stage,
																	onChange: (e) => updateClientStage(client.id, e.target.value),
																	className: `rounded-full px-2.5 py-1 text-[11px] font-semibold border-0 focus:ring-1 focus:ring-black/20 ${client.stage === "Won" ? "bg-[#E8F8EE] text-[#1B833E]" : client.stage === "Tender Quoted" ? "bg-[#FFF4E5] text-[#B25E00]" : client.stage === "Negotiation" ? "bg-purple-50 text-purple-700" : client.stage === "Lead" ? "bg-blue-50 text-blue-700" : client.stage === "Lost" ? "bg-red-50 text-red-700" : "bg-black/[0.05] text-[#1D1D1F]"}`,
																	children: STAGES.map((st) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																		value: st,
																		children: st
																	}, st))
																})
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
																className: "py-3 px-3 text-right font-semibold text-[#1D1D1F]",
																children: client.dealValueDisplay
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
																className: "py-3 px-3 text-center",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: `inline-block rounded-full px-2 py-0.5 text-[10px] font-medium ${client.priority === "High" ? "bg-red-50 text-red-600" : client.priority === "Medium" ? "bg-amber-50 text-amber-700" : "bg-black/[0.04] text-[#86868B]"}`,
																	children: client.priority
																})
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
																className: "py-3 px-3 text-right",
																onClick: (e) => e.stopPropagation(),
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "flex items-center justify-end gap-1",
																	children: [
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
																			href: whatsappUrl(`Hello ${client.name}, following up from Omnicore Harare regarding your inquiry for ${client.equipmentInterest}.`),
																			target: "_blank",
																			rel: "noopener noreferrer",
																			className: "flex size-7 items-center justify-center rounded-lg text-[#1fa855] hover:bg-[#1fa855]/10",
																			title: "WhatsApp Client",
																			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-3.5" })
																		}),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
																			href: `tel:${client.phone}`,
																			className: "flex size-7 items-center justify-center rounded-lg text-[#1D1D1F] hover:bg-black/[0.05]",
																			title: "Call",
																			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3.5 text-[#6E6E73]" })
																		}),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																			type: "button",
																			onClick: () => setPendingAction({
																				type: "delete-clients",
																				ids: [client.id]
																			}),
																			className: "flex size-7 items-center justify-center rounded-lg text-red-600 hover:bg-red-50",
																			title: "Move to recycle bin",
																			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
																		})
																	]
																})
															})
														]
													}, client.id);
												})
											})]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-black/[0.06] bg-[#FBFBFC] px-4 py-3 text-xs text-[#6E6E73]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Showing" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-[#1D1D1F]",
													children: filteredClients.length === 0 ? 0 : (crmPage - 1) * crmPageSize + 1
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "to" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-[#1D1D1F]",
													children: Math.min(crmPage * crmPageSize, filteredClients.length)
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "of" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-[#1D1D1F]",
													children: filteredClients.length
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "clients" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "mx-1 text-black/20",
													children: "|"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Per page:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
														value: crmPageSize,
														onChange: (e) => {
															setCrmPageSize(Number(e.target.value));
															setCrmPage(1);
														},
														className: "rounded-lg border border-black/[0.08] bg-white px-2 py-0.5 text-xs text-[#1D1D1F] focus:outline-none",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																value: 5,
																children: "5"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																value: 10,
																children: "10"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																value: 20,
																children: "20"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																value: 50,
																children: "50"
															})
														]
													})]
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1 self-end sm:self-auto",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => setCrmPage(1),
													disabled: crmPage <= 1,
													className: "rounded-lg p-1 text-[#6E6E73] hover:bg-black/[0.05] hover:text-[#1D1D1F] disabled:opacity-30 disabled:pointer-events-none transition-colors",
													title: "First page",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronsLeft, { className: "size-4" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => setCrmPage((p) => Math.max(1, p - 1)),
													disabled: crmPage <= 1,
													className: "rounded-lg p-1 text-[#6E6E73] hover:bg-black/[0.05] hover:text-[#1D1D1F] disabled:opacity-30 disabled:pointer-events-none transition-colors",
													title: "Previous page",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex items-center gap-1 px-1",
													children: Array.from({ length: crmTotalPages }, (_, i) => i + 1).map((pageNum) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: () => setCrmPage(pageNum),
														className: `min-w-6 h-6 rounded-md px-1.5 text-xs font-medium transition-all ${crmPage === pageNum ? "bg-[#1D1D1F] text-white font-semibold shadow-xs" : "text-[#6E6E73] hover:bg-black/[0.05] hover:text-[#1D1D1F]"}`,
														children: pageNum
													}, pageNum))
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => setCrmPage((p) => Math.min(crmTotalPages, p + 1)),
													disabled: crmPage >= crmTotalPages,
													className: "rounded-lg p-1 text-[#6E6E73] hover:bg-black/[0.05] hover:text-[#1D1D1F] disabled:opacity-30 disabled:pointer-events-none transition-colors",
													title: "Next page",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => setCrmPage(crmTotalPages),
													disabled: crmPage >= crmTotalPages,
													className: "rounded-lg p-1 text-[#6E6E73] hover:bg-black/[0.05] hover:text-[#1D1D1F] disabled:opacity-30 disabled:pointer-events-none transition-colors",
													title: "Last page",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronsRight, { className: "size-4" })
												})
											]
										})]
									})]
								})
							] }),
							peekClient && !profileClientId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm",
								onClick: () => setPeekClientId(null),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "w-full max-w-md rounded-2xl border border-black/[0.08] bg-white p-5 shadow-2xl",
									onClick: (e) => e.stopPropagation(),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start justify-between gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex flex-wrap items-center gap-1.5",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "font-mono text-[11px] text-[#86868B]",
																children: peekClient.id
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: `rounded-full px-2 py-0.5 text-[10px] font-semibold ${stageChipClass(peekClient.stage)}`,
																children: peekClient.stage
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: `rounded-full px-2 py-0.5 text-[10px] font-medium ${peekClient.priority === "High" ? "bg-red-50 text-red-600" : peekClient.priority === "Medium" ? "bg-amber-50 text-amber-700" : "bg-black/[0.04] text-[#86868B]"}`,
																children: peekClient.priority
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
														className: "mt-1 text-base font-semibold text-[#1D1D1F]",
														children: peekClient.name
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs text-[#6E6E73]",
														children: peekClient.organization
													})
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setPeekClientId(null),
												className: "rounded-full p-2 text-[#86868B] hover:bg-[#F5F5F7] hover:text-[#1D1D1F]",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 grid grid-cols-2 gap-2 text-xs",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "rounded-xl bg-[#F5F5F7] p-2.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "block text-[10px] uppercase text-[#86868B]",
														children: "Deal value"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-semibold text-[#1D1D1F]",
														children: peekClient.dealValueDisplay
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "rounded-xl bg-[#F5F5F7] p-2.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "block text-[10px] uppercase text-[#86868B]",
														children: "Location"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "block truncate font-semibold text-[#1D1D1F]",
														children: peekClient.location
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "col-span-2 rounded-xl bg-[#F5F5F7] p-2.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "block text-[10px] uppercase text-[#86868B]",
														children: "Requirement"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-medium text-[#1D1D1F]",
														children: peekClient.equipmentInterest
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "rounded-xl bg-[#F5F5F7] p-2.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "block text-[10px] uppercase text-[#86868B]",
														children: "Phone"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-semibold text-[#1D1D1F]",
														children: peekClient.phone
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "rounded-xl bg-[#F5F5F7] p-2.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "block text-[10px] uppercase text-[#86868B]",
														children: "Intent"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-semibold text-[#1D1D1F]",
														children: peekClient.intent
													})]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 flex gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
													type: "button",
													onClick: () => openClientProfile(peekClient.id),
													className: "inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-full bg-[#1D1D1F] text-xs font-semibold text-white hover:bg-black",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "size-3.5" }), "Edit profile"]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
													href: whatsappUrl(`Hello ${peekClient.name}, following up from Omnicore Harare regarding your inquiry for ${peekClient.equipmentInterest}.`),
													target: "_blank",
													rel: "noopener noreferrer",
													className: "inline-flex h-11 items-center justify-center rounded-full border border-black/[0.08] px-4 text-[#1fa855] hover:bg-emerald-50",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-4" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => setPendingAction({
														type: "delete-clients",
														ids: [peekClient.id]
													}),
													className: "inline-flex h-11 items-center justify-center rounded-full border border-red-200 px-4 text-red-600 hover:bg-red-50",
													title: "Move to recycle bin",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
												})
											]
										})
									]
								})
							}),
							showAddClientModal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-150",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "w-full max-w-xl rounded-2xl border border-black/[0.08] bg-white p-6 shadow-2xl",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between border-b border-black/[0.06] pb-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-sm font-semibold text-[#1D1D1F]",
											children: "Create New Client / Tender Lead"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setShowAddClientModal(false),
											className: "rounded-full p-1 text-[#86868B] hover:bg-[#F5F5F7]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
										onSubmit: handleCreateClient,
										className: "mt-4 space-y-3.5 text-xs",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "font-medium text-[#1D1D1F] block mb-1",
													children: "Client Full Name *"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													required: true,
													value: newClientName,
													onChange: (e) => setNewClientName(e.target.value),
													placeholder: "e.g. Tendai Mashingaidze",
													className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "font-medium text-[#1D1D1F] block mb-1",
													children: "Company / Mining Syndicate"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													value: newClientOrg,
													onChange: (e) => setNewClientOrg(e.target.value),
													placeholder: "e.g. Mberengwa Chrome JV",
													className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
												})] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "font-medium text-[#1D1D1F] block mb-1",
													children: "WhatsApp / Phone *"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													required: true,
													value: newClientPhone,
													onChange: (e) => setNewClientPhone(e.target.value),
													placeholder: "+263 77...",
													className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "font-medium text-[#1D1D1F] block mb-1",
													children: "Email Address"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "email",
													value: newClientEmail,
													onChange: (e) => setNewClientEmail(e.target.value),
													placeholder: "client@syndicate.co.zw",
													className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
												})] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "font-medium text-[#1D1D1F] block mb-1",
													children: "Site Location"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													value: newClientLocation,
													onChange: (e) => setNewClientLocation(e.target.value),
													placeholder: "e.g. Kadoma / Golden Valley",
													className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "font-medium text-[#1D1D1F] block mb-1",
													children: "Province in Zimbabwe"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
													value: newClientProvince,
													onChange: (e) => setNewClientProvince(e.target.value),
													className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none",
													children: PROVINCES.filter((p) => p !== "All Zimbabwe").map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: p,
														children: p
													}, p))
												})] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid grid-cols-1 sm:grid-cols-4 gap-3",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "font-medium text-[#1D1D1F] block mb-1",
														children: "Division"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
														value: newClientService,
														onChange: (e) => setNewClientService(e.target.value),
														className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-2.5 focus:bg-white focus:outline-none",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																value: "Mining Equipment",
																children: "Mining Equipment"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																value: "Construction Machinery Hire",
																children: "Machinery Hire"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																value: "Hardware & Construction",
																children: "Hardware & Fence"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																value: "Farming Machinery",
																children: "Farming Plant"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																value: "Industry & Manufacturing",
																children: "Industrial Plant"
															})
														]
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "font-medium text-[#1D1D1F] block mb-1",
														children: "Deal Type"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
														value: newClientIntent,
														onChange: (e) => setNewClientIntent(e.target.value),
														className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-2.5 focus:bg-white focus:outline-none",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																value: "Buy",
																children: "Outright Purchase"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																value: "Hire",
																children: "Plant Hire"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																value: "Both",
																children: "Both"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																value: "Consultation",
																children: "Technical Consult"
															})
														]
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "font-medium text-[#1D1D1F] block mb-1",
														children: "Priority"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
														value: newClientPriority,
														onChange: (e) => setNewClientPriority(e.target.value),
														className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-2.5 focus:bg-white focus:outline-none",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																value: "High",
																children: "High"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																value: "Medium",
																children: "Medium"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																value: "Normal",
																children: "Normal"
															})
														]
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "font-medium text-[#1D1D1F] block mb-1",
														children: "Estimated Value ($)"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "text",
														value: newClientDealValue,
														onChange: (e) => setNewClientDealValue(e.target.value),
														placeholder: "e.g. 15000",
														className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
													})] })
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "font-medium text-[#1D1D1F] block mb-1",
												children: "Equipment Specification Required"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												value: newClientInterest,
												onChange: (e) => setNewClientInterest(e.target.value),
												placeholder: "e.g. 200x300 Jaw crusher with diesel motor option",
												className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "font-medium text-[#1D1D1F] block mb-1",
												children: "Initial Notes"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												rows: 2,
												value: newClientNotes,
												onChange: (e) => setNewClientNotes(e.target.value),
												placeholder: "Project timelines, access constraints, payment structure...",
												className: "w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] p-2.5 focus:bg-white focus:outline-none"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-end gap-2 pt-2 border-t border-black/[0.06]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => setShowAddClientModal(false),
													className: "rounded-full bg-[#F5F5F7] px-4 py-1.5 text-xs font-medium text-[#6E6E73] hover:text-[#1D1D1F]",
													children: "Cancel"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "submit",
													className: "rounded-full bg-[#1D1D1F] px-4 py-1.5 text-xs font-semibold text-white hover:bg-black",
													children: "Save Client Record"
												})]
											})
										]
									})]
								})
							})
						]
					}),
					activeTab === "products" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [
							productProfileOpen && editingProduct ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit: handleSaveProduct,
								className: "space-y-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecordPager, {
									index: productNavIndex,
									total: filteredProducts.length,
									title: editingProduct.name,
									subtitle: editingProduct.sku || editingProduct.id,
									onBack: closeProductProfile,
									backLabel: "All machines",
									onPrev: () => stepProduct(-1),
									onNext: () => stepProduct(1)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 gap-5 lg:grid-cols-12",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-6 lg:col-span-8",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-3xl border border-black/[0.06] bg-white p-5 sm:p-7 shadow-xs space-y-6",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex flex-col sm:flex-row sm:items-center justify-between border-b border-black/[0.06] pb-4 gap-3",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center gap-2",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "flex size-8 items-center justify-center rounded-xl bg-black/[0.05] text-[#1D1D1F]",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4.5" })
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
																className: "font-semibold text-[#1D1D1F] text-base",
																children: "Equipment Visual & Yard Photo Studio"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-xs text-[#86868B] mt-0.5",
																children: "High-resolution photography shown across public catalogue, division pages, client WhatsApp spec sheets, and tender documents."
															})] })]
														}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "flex items-center gap-2 self-start sm:self-auto",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: `rounded-full px-3 py-1 text-xs font-semibold ${editingProduct.stockStatus === "In Yard Cranborne" ? "bg-[#E8F8EE] text-[#1B833E]" : editingProduct.stockStatus === "In Transit (Beitbridge)" ? "bg-[#FFF4E5] text-[#B25E00]" : "bg-black/[0.04] text-[#6E6E73]"}`,
																children: editingProduct.stockStatus || "In Yard Cranborne"
															})
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "grid grid-cols-1 lg:grid-cols-12 gap-5 items-start",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "lg:col-span-7 space-y-3",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "relative w-full h-64 sm:h-76 md:h-84 rounded-2xl overflow-hidden bg-black/[0.05] border border-black/[0.08] shadow-sm group",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																		src: editingProduct.image || "/images/jaw-crusher.jpg",
																		alt: editingProduct.name,
																		className: "size-full object-cover object-center transition-transform duration-500 group-hover:scale-105",
																		onError: (e) => {
																			e.target.src = "/images/hero.jpg";
																		}
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																			className: "rounded-full bg-black/75 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md flex items-center gap-2 shadow-md",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-[#1FA855] animate-pulse" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Active Listing Photo" })]
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																			type: "button",
																			onClick: () => setZoomedPhoto({
																				src: editingProduct.image || "/images/jaw-crusher.jpg",
																				title: editingProduct.name
																			}),
																			className: "pointer-events-auto rounded-full bg-black/60 hover:bg-black p-2 text-white shadow-md backdrop-blur-md transition-all active:scale-90",
																			title: "Zoom & Inspect HD Image",
																			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomIn, { className: "size-4" })
																		})]
																	}),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 pt-10 text-white",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																			className: "text-sm font-semibold truncate leading-tight",
																			children: editingProduct.name
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "flex items-center gap-2 mt-1 text-xs text-white/80",
																			children: [
																				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																					className: "capitalize font-medium",
																					children: [editingProduct.category, " Division"]
																				}),
																				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "•" }),
																				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																					className: "font-mono text-[11px]",
																					children: editingProduct.sku || editingProduct.id
																				})
																			]
																		})]
																	})
																]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex flex-wrap items-center justify-between gap-2 text-xs text-[#86868B]",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																	className: "flex items-center gap-1.5",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5 text-[#1B833E]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Live high-resolution preview connected" })]
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
																	type: "button",
																	onClick: () => setZoomedPhoto({
																		src: editingProduct.image || "/images/jaw-crusher.jpg",
																		title: editingProduct.name
																	}),
																	className: "font-medium text-[#1D1D1F] hover:underline inline-flex items-center gap-1",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomIn, { className: "size-3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Inspect HD Fullscreen" })]
																})]
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "lg:col-span-5 space-y-4 rounded-2xl bg-[#F9F9FA] p-4.5 border border-black/[0.06]",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-xs font-semibold text-[#1D1D1F] block",
																	children: "Photo Source & Upload"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-[11px] text-[#86868B] mt-0.5",
																	children: "Upload a machine image from your computer or specify an image asset path."
																})] }),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
																	className: "flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-black/[0.15] bg-white p-4 hover:border-black/30 hover:bg-[#F5F5F7] cursor-pointer transition-all",
																	children: [
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																			className: "flex size-9 items-center justify-center rounded-full bg-black/[0.05] text-[#1D1D1F]",
																			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-4" })
																		}),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "text-center",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																				className: "text-xs font-semibold text-[#1D1D1F] block",
																				children: "Upload Machine Photo"
																			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																				className: "text-[10px] text-[#86868B] block mt-0.5",
																				children: "PNG, JPG, WEBP up to 8MB"
																			})]
																		}),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																			type: "file",
																			accept: "image/*",
																			onChange: (e) => handleImageUpload(e, true),
																			className: "hidden"
																		})
																	]
																}) }),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "space-y-1.5",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
																		className: "text-xs font-medium text-[#1D1D1F] flex items-center justify-between",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Asset Path or URL:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																			className: "text-[10px] text-[#86868B] font-mono",
																			children: "/images/..."
																		})]
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																		type: "text",
																		value: editingProduct.image,
																		onChange: (e) => setEditingProduct({
																			...editingProduct,
																			image: e.target.value
																		}),
																		placeholder: "/images/... or https://...",
																		className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-white px-3 text-xs text-[#1D1D1F] focus:outline-none focus:ring-1 focus:ring-black/20 font-mono text-[11px]"
																	})]
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "border-t border-black/[0.06] pt-3 space-y-1.5 text-[11px] text-[#6E6E73]",
																	children: [
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																			className: "font-semibold text-[#1D1D1F] text-[10px] uppercase tracking-wider block",
																			children: "Active Photo Distribution"
																		}),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "flex items-center gap-1.5 text-xs",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-[#1FA855]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Public Catalogue card" })]
																		}),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "flex items-center gap-1.5 text-xs",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-[#1FA855]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "WhatsApp client quote spec sheet" })]
																		}),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "flex items-center gap-1.5 text-xs",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-[#1FA855]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Cranborne yard inventory record" })]
																		})
																	]
																})
															]
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "border-t border-black/[0.06] pt-5 space-y-4",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "flex items-center gap-2",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "size-4 text-[#1D1D1F]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
																		className: "text-sm font-semibold text-[#1D1D1F]",
																		children: "Harare Yard Fleet Photography Library"
																	})]
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-xs text-[#86868B] mt-0.5",
																	children: "Click any verified machine card below to instantly set as the primary photo."
																})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "relative min-w-[220px]",
																	children: [
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-2.5 size-3.5 text-[#86868B]" }),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																			type: "text",
																			value: photoPresetSearch,
																			onChange: (e) => setPhotoPresetSearch(e.target.value),
																			placeholder: "Search machine models...",
																			className: "w-full h-8.5 rounded-full border border-black/[0.08] bg-[#F5F5F7] pl-8.5 pr-3 text-xs text-[#1D1D1F] focus:bg-white focus:outline-none transition-colors"
																		}),
																		photoPresetSearch && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																			type: "button",
																			onClick: () => setPhotoPresetSearch(""),
																			className: "absolute right-2.5 top-2.5 text-[#86868B] hover:text-[#1D1D1F]",
																			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
																		})
																	]
																})]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "flex flex-wrap items-center gap-1.5",
																children: [
																	{
																		id: "all",
																		label: "All Fleet",
																		count: 23
																	},
																	{
																		id: "mining",
																		label: "Mining Circuits",
																		count: 7
																	},
																	{
																		id: "hire",
																		label: "Plant Hire Fleet",
																		count: 5
																	},
																	{
																		id: "farming",
																		label: "Farming & Feed",
																		count: 4
																	},
																	{
																		id: "hardware",
																		label: "Hardware & Fence",
																		count: 4
																	},
																	{
																		id: "industry",
																		label: "Industrial Power",
																		count: 3
																	}
																].map((f) => {
																	const active = presetCategoryFilter === f.id;
																	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
																		type: "button",
																		onClick: () => setPresetCategoryFilter(f.id),
																		className: `inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-medium transition-all ${active ? "bg-[#1D1D1F] text-white shadow-2xs font-semibold" : "bg-[#F5F5F7] text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-black/[0.06]"}`,
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																			className: `rounded-full px-1.5 py-0.2 text-[10px] ${active ? "bg-white/20 text-white" : "bg-black/[0.05] text-[#86868B]"}`,
																			children: f.count
																		})]
																	}, f.id);
																})
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3.5 max-h-[440px] overflow-y-auto p-2 rounded-2xl bg-[#F9F9FA] border border-black/[0.06]",
																children: YARD_PHOTO_PRESETS.filter((p) => {
																	const matchesCat = presetCategoryFilter === "all" || p.category === presetCategoryFilter;
																	const matchesSearch = !photoPresetSearch || p.label.toLowerCase().includes(photoPresetSearch.toLowerCase()) || p.spec.toLowerCase().includes(photoPresetSearch.toLowerCase()) || p.badge.toLowerCase().includes(photoPresetSearch.toLowerCase());
																	return matchesCat && matchesSearch;
																}).map((preset) => {
																	const isSelected = editingProduct.image === preset.src;
																	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
																		type: "button",
																		onClick: () => {
																			setEditingProduct({
																				...editingProduct,
																				image: preset.src
																			});
																			triggerToast(`Applied ${preset.label} yard photo`);
																		},
																		className: `group relative flex flex-col text-left rounded-2xl p-2.5 border transition-all ${isSelected ? "border-[#1D1D1F] bg-white ring-2 ring-[#1D1D1F] shadow-sm" : "border-black/[0.08] bg-white hover:border-black/[0.2] hover:shadow-xs"}`,
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "relative h-28 sm:h-32 w-full rounded-xl overflow-hidden bg-black/[0.04] mb-2.5",
																			children: [
																				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																					src: preset.src,
																					alt: preset.label,
																					className: "size-full object-cover transition-transform duration-300 group-hover:scale-105",
																					onError: (e) => {
																						e.target.src = "/images/hero.jpg";
																					}
																				}),
																				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																					className: "absolute top-1.5 left-1.5 rounded-md bg-black/70 px-2 py-0.5 text-[9px] font-semibold text-white uppercase tracking-wider backdrop-blur-xs",
																					children: preset.category
																				}),
																				isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																					className: "absolute top-1.5 right-1.5 size-6 rounded-full bg-[#1FA855] text-white flex items-center justify-center shadow-xs",
																					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5 stroke-[2.5]" })
																				})
																			]
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "space-y-0.5 min-w-0 flex-1",
																			children: [
																				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																					className: "text-xs font-semibold text-[#1D1D1F] truncate group-hover:text-black leading-tight",
																					children: preset.label
																				}),
																				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																					className: "text-[11px] text-[#6E6E73] truncate",
																					children: preset.spec
																				}),
																				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																					className: "inline-block text-[10px] font-medium text-[#86868B] bg-black/[0.03] px-1.5 py-0.5 rounded mt-1",
																					children: preset.badge
																				})
																			]
																		})]
																	}, preset.src);
																})
															})
														]
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.03)] space-y-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-semibold text-[#1D1D1F] text-sm border-b border-black/[0.06] pb-3",
													children: "Model & Commercial Identity"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "sm:col-span-2",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																className: "mb-1 block font-medium text-[#1D1D1F]",
																children: "Equipment Model / Name *"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																type: "text",
																required: true,
																value: editingProduct.name,
																onChange: (e) => setEditingProduct({
																	...editingProduct,
																	name: e.target.value
																}),
																placeholder: "e.g. 250x400 Jaw Crusher or Cat 320D Excavator",
																className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Division"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
															value: editingProduct.category,
															onChange: (e) => setEditingProduct({
																...editingProduct,
																category: e.target.value
															}),
															className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																	value: "mining",
																	children: "Mining Equipment"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																	value: "hire",
																	children: "Construction Machinery Hire"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																	value: "hardware",
																	children: "Hardware & Construction"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																	value: "farming",
																	children: "Farming Machinery"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																	value: "industry",
																	children: "Industry & Manufacturing"
																})
															]
														})] }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Commercial Deal Type"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
															value: editingProduct.intent,
															onChange: (e) => setEditingProduct({
																...editingProduct,
																intent: e.target.value
															}),
															className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																value: "sale",
																children: "Outright Sale"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																value: "hire",
																children: "Plant Hire / Rental"
															})]
														})] }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Indicative Rate / Price USD"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "text",
															value: editingProduct.priceUSD || editingProduct.price || "",
															onChange: (e) => setEditingProduct({
																...editingProduct,
																priceUSD: e.target.value,
																price: e.target.value
															}),
															placeholder: "e.g. $4,800 USD or $180/hr dry",
															className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
														})] }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Price Note / Terms"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "text",
															value: editingProduct.priceNote || "",
															onChange: (e) => setEditingProduct({
																...editingProduct,
																priceNote: e.target.value
															}),
															placeholder: "e.g. FOB Cranborne Yard or Wet / Dry Options",
															className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
														})] }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Cranborne Yard Stock Status"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
															value: editingProduct.stockStatus || "In Yard Cranborne",
															onChange: (e) => setEditingProduct({
																...editingProduct,
																stockStatus: e.target.value
															}),
															className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none font-medium",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																	value: "In Yard Cranborne",
																	children: "In Yard Cranborne"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																	value: "In Transit (Beitbridge)",
																	children: "In Transit (Beitbridge)"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																	value: "Active on Site",
																	children: "Active on Site"
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																	value: "Special Order",
																	children: "Special Order"
																})
															]
														})] }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "SKU / Model Identifier"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "text",
															value: editingProduct.sku || editingProduct.id,
															onChange: (e) => setEditingProduct({
																...editingProduct,
																sku: e.target.value
															}),
															placeholder: "e.g. OMNI-MIN-402",
															className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none font-mono"
														})] })
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.03)] space-y-4",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
													className: "font-semibold text-[#1D1D1F] text-sm border-b border-black/[0.06] pb-3",
													children: "Technical Specifications & Power Engineering"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Hourly Throughput / Operating Capacity"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "text",
															value: editingProduct.throughput || "",
															onChange: (e) => setEditingProduct({
																...editingProduct,
																throughput: e.target.value
															}),
															placeholder: "e.g. 5–8 Tonnes / Hour or 37m Boom Reach",
															className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
														})] }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Power Drive / Motor Configuration"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "text",
															value: editingProduct.powerOption || "",
															onChange: (e) => setEditingProduct({
																...editingProduct,
																powerOption: e.target.value
															}),
															placeholder: "e.g. 15kW 3-Phase Electric or 22HP Diesel Kit",
															className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
														})] }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "sm:col-span-2",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																className: "mb-1 block font-medium text-[#1D1D1F]",
																children: "Quick Specification Tagline"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																type: "text",
																value: editingProduct.spec || "",
																onChange: (e) => setEditingProduct({
																	...editingProduct,
																	spec: e.target.value
																}),
																placeholder: "e.g. Primary crush · gold & chrome circuits",
																className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Equipment Condition"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
															value: editingProduct.condition || "New",
															onChange: (e) => setEditingProduct({
																...editingProduct,
																condition: e.target.value
															}),
															className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																value: "New",
																children: "Brand New (Factory Direct)"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																value: "Refurbished / Certified",
																children: "Refurbished / Harare Certified"
															})]
														})] }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Warranty Period (Months)"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "number",
															min: 0,
															max: 60,
															value: editingProduct.warrantyMonths ?? 12,
															onChange: (e) => setEditingProduct({
																...editingProduct,
																warrantyMonths: Number(e.target.value) || 0
															}),
															className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
														})] }),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "sm:col-span-2",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																className: "mb-1 block font-medium text-[#1D1D1F]",
																children: "Catalogue Badge / Highlight Tag"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																type: "text",
																value: editingProduct.badge || "",
																onChange: (e) => setEditingProduct({
																	...editingProduct,
																	badge: e.target.value
																}),
																placeholder: "e.g. Processing, In Stock, Immediate Delivery, Heavy Fleet",
																className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
															})]
														})
													]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.03)] space-y-4",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
														className: "font-semibold text-[#1D1D1F] text-sm border-b border-black/[0.06] pb-3",
														children: "Catalogue Copy & Field Engineering Notes"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "space-y-3 text-xs",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Catalogue Overview & Application Summary *"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
															rows: 3,
															required: true,
															value: editingProduct.blurb,
															onChange: (e) => setEditingProduct({
																...editingProduct,
																blurb: e.target.value
															}),
															placeholder: "Clear, punchy operational overview for miners, farmers, or contractors.",
															className: "w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] p-3 leading-relaxed text-[#1D1D1F] focus:bg-white focus:outline-none"
														})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Detailed Technical Notes & Commissioning Details"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
															rows: 4,
															value: editingProduct.detailedNotes || "",
															onChange: (e) => setEditingProduct({
																...editingProduct,
																detailedNotes: e.target.value
															}),
															placeholder: "Liner manganese rating, discharge mesh settings, electrical starter box type, recommended generator kVA, and field commissioning protocol.",
															className: "w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] p-3 leading-relaxed text-[#1D1D1F] focus:bg-white focus:outline-none"
														})] })]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-black/[0.06] pt-4",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
															type: "button",
															onClick: closeProductProfile,
															className: "inline-flex h-11 items-center rounded-full border border-black/[0.08] bg-[#F5F5F7] px-5 text-xs font-medium text-[#1D1D1F] hover:bg-black/[0.06] transition-colors",
															children: "Cancel"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
															type: "submit",
															className: "inline-flex h-11 items-center gap-2 rounded-full bg-[#1D1D1F] px-6 text-xs font-semibold text-white hover:bg-black transition-all active:scale-95 shadow-xs",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Save Specifications" })]
														})]
													})
												]
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-5 lg:col-span-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.03)] space-y-3",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "block text-[10px] font-semibold uppercase tracking-wider text-[#86868B]",
															children: "Client WhatsApp Quotation"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "rounded-full bg-[#E8F8EE] px-2 py-0.5 text-[9px] font-bold text-[#1B833E]",
															children: "Live Spec Card"
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs text-[#6E6E73] leading-relaxed",
														children: "Share these verified machinery specs and photo directly with clients inquiring on WhatsApp."
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "rounded-xl border border-black/[0.06] bg-[#F9F9FA] p-3 text-[11px] space-y-2 font-mono text-[#1D1D1F]",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "relative h-36 w-full rounded-lg overflow-hidden bg-black/[0.05] border border-black/[0.05]",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																	src: editingProduct.image || "/images/jaw-crusher.jpg",
																	alt: editingProduct.name,
																	className: "size-full object-cover",
																	onError: (e) => {
																		e.target.src = "/images/hero.jpg";
																	}
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "absolute top-1.5 left-1.5 rounded bg-black/70 px-1.5 py-0.5 text-[9px] font-medium text-white backdrop-blur-xs font-sans capitalize",
																	children: editingProduct.category
																})]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "font-semibold text-xs font-sans text-[#1D1D1F]",
																children: editingProduct.name
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																className: "text-[#6E6E73] text-[10px]",
																children: ["SKU: ", editingProduct.sku || editingProduct.id]
															})] }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "border-t border-black/[0.06] pt-1.5 space-y-1 text-[11px]",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
																		"• ",
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																			className: "text-[#86868B]",
																			children: "Throughput:"
																		}),
																		" ",
																		editingProduct.throughput || editingProduct.spec || "Site Rated"
																	] }),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
																		"• ",
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																			className: "text-[#86868B]",
																			children: "Drive:"
																		}),
																		" ",
																		editingProduct.powerOption || "Electric / Diesel"
																	] }),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
																		"• ",
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																			className: "text-[#86868B]",
																			children: "Yard:"
																		}),
																		" ",
																		editingProduct.stockStatus || "In Yard Cranborne"
																	] }),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
																		"• ",
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																			className: "text-[#86868B]",
																			children: "Rate:"
																		}),
																		" ",
																		editingProduct.priceUSD || editingProduct.price || "Tender on Request"
																	] })
																]
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
														href: whatsappUrl(`Hello from Omnicore Solutions Harare. Regarding ${editingProduct.name} (${editingProduct.sku || editingProduct.id}):\n• Capacity: ${editingProduct.throughput || editingProduct.spec || "Site Rated"}\n• Power: ${editingProduct.powerOption || "Electric 3-Phase / Diesel"}\n• Availability: ${editingProduct.stockStatus || "In Yard Cranborne"}\n• Rate: ${editingProduct.priceUSD || editingProduct.price || "Tender on Request"}\n\nInspections welcome at 115 Chiremba Rd, Cranborne, Harare.`),
														target: "_blank",
														rel: "noopener noreferrer",
														className: "inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#1fa855] text-xs font-semibold text-white shadow-xs hover:bg-[#1b934b] transition-all",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Send Client Spec Sheet" })]
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.03)] space-y-3",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "block text-[10px] font-semibold uppercase tracking-wider text-[#86868B]",
														children: "Yard Management & Quick Actions"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														type: "button",
														onClick: () => handleToggleStockStatus(editingProduct.id),
														className: "inline-flex h-10 w-full items-center justify-between rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3.5 text-xs font-medium text-[#1D1D1F] hover:bg-black/[0.06] transition-colors",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Rotate Stock Status" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "rounded-md bg-white px-2 py-0.5 text-[10px] font-semibold text-[#1D1D1F] shadow-2xs border border-black/[0.04]",
															children: editingProduct.stockStatus || "In Yard Cranborne"
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex flex-col gap-2 pt-1 text-xs",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
															to: "/catalogue",
															className: "inline-flex h-10 items-center justify-between rounded-xl border border-black/[0.08] bg-white px-3.5 font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] transition-colors",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Open Public Catalogue" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5 text-[#86868B]" })]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
															to: "/services/$slug",
															params: { slug: editingProduct.category },
															className: "inline-flex h-10 items-center justify-between rounded-xl border border-black/[0.08] bg-white px-3.5 font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] transition-colors",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: "capitalize",
																children: [
																	"View ",
																	editingProduct.category,
																	" Division"
																]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5 text-[#86868B]" })]
														})]
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-2xl border border-red-200 bg-red-50/40 p-5 shadow-xs space-y-3",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "block text-[10px] font-semibold uppercase tracking-wider text-red-700",
														children: "Catalogue Decommissioning"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs text-red-600/90 leading-relaxed",
														children: "Move this machinery listing to the recycle bin. It will disappear from Cranborne inventory and the public catalogue until restored."
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														type: "button",
														onClick: () => handleDeleteProduct(editingProduct.id),
														className: "inline-flex h-10 w-full items-center justify-center gap-1.5 rounded-full border border-red-200 bg-white text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Move to Recycle Bin" })]
													})
												]
											})
										]
									})]
								})]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-xl font-semibold tracking-tight text-[#1D1D1F]",
										children: "Machinery & Catalogue Inventory"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-[#86868B] mt-0.5",
										children: "Manage technical specifications, throughput, power drives, and stock status across Cranborne yard."
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "relative",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-[#86868B]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													value: productSearch,
													onChange: (e) => setProductSearch(e.target.value),
													placeholder: "Search model, throughput, SKU...",
													className: "h-9 w-48 sm:w-64 rounded-full border border-black/[0.08] bg-white pl-9 pr-3 text-xs text-[#1D1D1F] placeholder-[#86868B] shadow-2xs focus:outline-none"
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
												value: productCategoryFilter,
												onChange: (e) => setProductCategoryFilter(e.target.value),
												className: "h-9 rounded-full border border-black/[0.08] bg-white px-3 text-xs text-[#1D1D1F] shadow-2xs focus:outline-none",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "all",
														children: "All Divisions"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "mining",
														children: "Mining"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "hire",
														children: "Hire Plant"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "hardware",
														children: "Hardware & Fence"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "farming",
														children: "Farming"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
														value: "industry",
														children: "Industrial"
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: () => setShowAddProductModal(true),
												className: "inline-flex items-center gap-1.5 rounded-full bg-[#1D1D1F] px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-black transition-all active:scale-95",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Add Machine" })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												onClick: () => setActiveTab("recycle"),
												className: "inline-flex items-center gap-1.5 rounded-full border border-black/[0.08] bg-white px-3 py-2 text-xs font-medium text-[#1D1D1F] shadow-2xs hover:bg-[#F5F5F7]",
												title: "Open recycle bin",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Recycle, { className: "size-3.5 text-[#6E6E73]" }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "hidden sm:inline",
														children: "Bin"
													}),
													recycleBin.filter((i) => i.kind === "product").length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "rounded-full bg-black/[0.06] px-1.5 text-[10px] font-semibold",
														children: recycleBin.filter((i) => i.kind === "product").length
													})
												]
											})
										]
									})]
								}),
								selectedProductIds.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-[#1D1D1F]/10 bg-[#1D1D1F] px-4 py-2.5 text-white shadow-xs",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs font-semibold",
										children: [
											selectedProductIds.length,
											" machine",
											selectedProductIds.length === 1 ? "" : "s",
											" selected"
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setSelectedProductIds([]),
											className: "rounded-full px-3 py-1.5 text-xs font-medium text-white/80 hover:bg-white/10",
											children: "Clear"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setPendingAction({
												type: "delete-products",
												ids: selectedProductIds
											}),
											className: "inline-flex items-center gap-1.5 rounded-full bg-red-500 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-red-400",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" }), "Move to recycle bin"]
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_2px_16px_rgba(0,0,0,0.03)]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "overflow-x-auto",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
											className: "w-full text-left text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
												className: "border-b border-black/[0.06] bg-[#FBFBFC] text-[11px] font-semibold text-[#86868B] uppercase tracking-wider",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "w-10 py-3 pl-4 pr-1",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowCheck, {
															label: "Select all machines on this page",
															checked: paginatedProducts.length > 0 && paginatedProducts.every((p) => selectedProductIds.includes(p.id)),
															indeterminate: paginatedProducts.some((p) => selectedProductIds.includes(p.id)) && !paginatedProducts.every((p) => selectedProductIds.includes(p.id)),
															onChange: (next) => {
																const pageIds = paginatedProducts.map((p) => p.id);
																setSelectedProductIds((prev) => next ? [.../* @__PURE__ */ new Set([...prev, ...pageIds])] : prev.filter((id) => !pageIds.includes(id)));
															}
														})
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "py-3 px-4",
														children: "SKU / Equipment Name"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "py-3 px-3",
														children: "Division"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "py-3 px-3",
														children: "Throughput & Drive"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "py-3 px-3",
														children: "Yard Stock Status"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "py-3 px-3",
														children: "Indicative Rate"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
														className: "py-3 px-3 text-right",
														children: "Actions"
													})
												]
											}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
												className: "divide-y divide-black/[0.04]",
												children: filteredProducts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													colSpan: 7,
													className: "py-12 text-center text-[#86868B]",
													children: "No machinery records match the current filter."
												}) }) : paginatedProducts.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
													onClick: () => setPeekProductId(item.id),
													className: `cursor-pointer transition-colors ${selectedProductIds.includes(item.id) ? "bg-[#F3F8FF]" : peekProductId === item.id ? "bg-[#F5F5F7]" : "hover:bg-black/[0.015]"}`,
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
															className: "w-10 py-3 pl-4 pr-1",
															onClick: (e) => e.stopPropagation(),
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowCheck, {
																label: `Select ${item.name}`,
																checked: selectedProductIds.includes(item.id),
																onChange: (next) => setSelectedProductIds((prev) => next ? [...prev, item.id] : prev.filter((id) => id !== item.id))
															})
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
															className: "py-3 px-4",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-center gap-3",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																	className: "size-11 rounded-xl overflow-hidden bg-black/[0.04] border border-black/[0.06] shrink-0 shadow-2xs",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																		src: item.image || "/images/hero.jpg",
																		alt: item.name,
																		className: "size-full object-cover",
																		onError: (e) => {
																			e.target.src = "/images/hero.jpg";
																		}
																	})
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "font-semibold text-[#1D1D1F] block",
																	children: item.name
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-[10px] font-mono text-[#86868B]",
																	children: item.sku || item.id
																})] })]
															})
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
															className: "py-3 px-3",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "rounded-full bg-black/[0.04] px-2 py-0.5 text-[10px] font-medium text-[#6E6E73] uppercase tracking-wide",
																children: item.category
															})
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
															className: "py-3 px-3 text-[#6E6E73]",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-[#1D1D1F] font-medium block",
																children: item.throughput || item.spec
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-[10px] text-[#86868B] block truncate max-w-[200px]",
																children: item.powerOption || "Electric 380V / Diesel"
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
															className: "py-3 px-3",
															onClick: (e) => e.stopPropagation(),
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																onClick: () => handleToggleStockStatus(item.id),
																className: `rounded-full px-2.5 py-0.5 text-[10px] font-medium transition-all ${item.stockStatus === "In Yard Cranborne" ? "bg-[#E8F8EE] text-[#1B833E]" : item.stockStatus === "In Transit (Beitbridge)" ? "bg-[#FFF4E5] text-[#B25E00]" : "bg-black/[0.04] text-[#6E6E73]"}`,
																children: item.stockStatus || "In Yard Cranborne"
															})
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
															className: "py-3 px-3 font-semibold text-[#1D1D1F]",
															children: item.priceUSD || item.price || "Tender on Req"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
															className: "py-3 px-3 text-right",
															onClick: (e) => e.stopPropagation(),
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-center justify-end gap-1",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
																	onClick: () => openProductProfile(item),
																	className: "inline-flex h-11 items-center gap-1 rounded-full border border-black/[0.08] bg-white px-3 text-xs font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] transition-all",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "size-3 text-[#6E6E73]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Edit Specs" })]
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																	type: "button",
																	onClick: () => setPendingAction({
																		type: "delete-products",
																		ids: [item.id]
																	}),
																	className: "inline-flex size-11 items-center justify-center rounded-full border border-red-200 bg-white text-red-600 hover:bg-red-50",
																	title: "Move to recycle bin",
																	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
																})]
															})
														})
													]
												}, item.id))
											})]
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-black/[0.06] bg-[#FBFBFC] px-4 py-3 text-xs text-[#6E6E73]",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap items-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Showing" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-[#1D1D1F]",
													children: filteredProducts.length === 0 ? 0 : (productPage - 1) * productPageSize + 1
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "to" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-[#1D1D1F]",
													children: Math.min(productPage * productPageSize, filteredProducts.length)
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "of" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "font-semibold text-[#1D1D1F]",
													children: filteredProducts.length
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "machinery models" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "mx-1 text-black/20",
													children: "|"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-1.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Per page:" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
														value: productPageSize,
														onChange: (e) => {
															setProductPageSize(Number(e.target.value));
															setProductPage(1);
														},
														className: "rounded-lg border border-black/[0.08] bg-white px-2 py-0.5 text-xs text-[#1D1D1F] focus:outline-none",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																value: 6,
																children: "6"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																value: 12,
																children: "12"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																value: 24,
																children: "24"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
																value: 50,
																children: "50"
															})
														]
													})]
												})
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-1 self-end sm:self-auto",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => setProductPage(1),
													disabled: productPage <= 1,
													className: "rounded-lg p-1 text-[#6E6E73] hover:bg-black/[0.05] hover:text-[#1D1D1F] disabled:opacity-30 disabled:pointer-events-none transition-colors",
													title: "First page",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronsLeft, { className: "size-4" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => setProductPage((p) => Math.max(1, p - 1)),
													disabled: productPage <= 1,
													className: "rounded-lg p-1 text-[#6E6E73] hover:bg-black/[0.05] hover:text-[#1D1D1F] disabled:opacity-30 disabled:pointer-events-none transition-colors",
													title: "Previous page",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex items-center gap-1 px-1",
													children: Array.from({ length: productTotalPages }, (_, i) => i + 1).map((pageNum) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														onClick: () => setProductPage(pageNum),
														className: `min-w-6 h-6 rounded-md px-1.5 text-xs font-medium transition-all ${productPage === pageNum ? "bg-[#1D1D1F] text-white font-semibold shadow-xs" : "text-[#6E6E73] hover:bg-black/[0.05] hover:text-[#1D1D1F]"}`,
														children: pageNum
													}, pageNum))
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => setProductPage((p) => Math.min(productTotalPages, p + 1)),
													disabled: productPage >= productTotalPages,
													className: "rounded-lg p-1 text-[#6E6E73] hover:bg-black/[0.05] hover:text-[#1D1D1F] disabled:opacity-30 disabled:pointer-events-none transition-colors",
													title: "Next page",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => setProductPage(productTotalPages),
													disabled: productPage >= productTotalPages,
													className: "rounded-lg p-1 text-[#6E6E73] hover:bg-black/[0.05] hover:text-[#1D1D1F] disabled:opacity-30 disabled:pointer-events-none transition-colors",
													title: "Last page",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronsRight, { className: "size-4" })
												})
											]
										})]
									})]
								})
							] }),
							peekProduct && !productProfileOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm",
								onClick: () => setPeekProductId(null),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "w-full max-w-md rounded-2xl border border-black/[0.08] bg-white p-5 shadow-2xl",
									onClick: (e) => e.stopPropagation(),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-start justify-between gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex min-w-0 items-start gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "size-16 shrink-0 overflow-hidden rounded-xl border border-black/[0.06] bg-black/[0.04]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: peekProduct.image || "/images/hero.jpg",
														alt: peekProduct.name,
														className: "size-full object-cover",
														onError: (e) => {
															e.target.src = "/images/hero.jpg";
														}
													})
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "min-w-0",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "font-mono text-[11px] text-[#86868B]",
															children: peekProduct.sku || peekProduct.id
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
															className: "text-base font-semibold text-[#1D1D1F]",
															children: peekProduct.name
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-xs uppercase tracking-wide text-[#6E6E73]",
															children: peekProduct.category
														})
													]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setPeekProductId(null),
												className: "rounded-full p-2 text-[#86868B] hover:bg-[#F5F5F7] hover:text-[#1D1D1F]",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 grid grid-cols-2 gap-2 text-xs",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "rounded-xl bg-[#F5F5F7] p-2.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "block text-[10px] uppercase text-[#86868B]",
														children: "Stock"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-semibold text-[#1D1D1F]",
														children: peekProduct.stockStatus || "In Yard Cranborne"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "rounded-xl bg-[#F5F5F7] p-2.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "block text-[10px] uppercase text-[#86868B]",
														children: "Rate"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-semibold text-[#1D1D1F]",
														children: peekProduct.priceUSD || peekProduct.price || "Tender on Req"
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "col-span-2 rounded-xl bg-[#F5F5F7] p-2.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "block text-[10px] uppercase text-[#86868B]",
														children: "Throughput / drive"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "font-medium text-[#1D1D1F]",
														children: [
															peekProduct.throughput || peekProduct.spec,
															" · ",
															peekProduct.powerOption || "Electric / Diesel"
														]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "col-span-2 rounded-xl bg-[#F5F5F7] p-2.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "block text-[10px] uppercase text-[#86868B]",
														children: "Overview"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[#1D1D1F]",
														children: peekProduct.blurb
													})]
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "mt-4 flex gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => openProductProfile(peekProduct),
												className: "inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-full bg-[#1D1D1F] text-xs font-semibold text-white hover:bg-black",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PenLine, { className: "size-3.5" }), "Edit specifications"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												onClick: () => setPendingAction({
													type: "delete-products",
													ids: [peekProduct.id]
												}),
												className: "inline-flex h-11 items-center justify-center rounded-full border border-red-200 px-4 text-red-600 hover:bg-red-50",
												title: "Move to recycle bin",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
											})]
										})
									]
								})
							}),
							showAddProductModal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-150",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "w-full max-w-xl rounded-2xl border border-black/[0.08] bg-white p-6 shadow-2xl max-h-[90vh] overflow-y-auto",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between border-b border-black/[0.06] pb-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-sm font-semibold text-[#1D1D1F]",
											children: "Add Machinery to Cranborne Catalogue"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											onClick: () => setShowAddProductModal(false),
											className: "rounded-full p-1 text-[#86868B] hover:bg-[#F5F5F7]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
										onSubmit: handleCreateProduct,
										className: "mt-4 space-y-3.5 text-xs",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-xl border border-black/[0.08] bg-[#FBFBFC] p-3.5 space-y-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "flex items-center justify-between",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "font-semibold text-[#1D1D1F] block text-xs",
														children: "Equipment Photo & Live Preview"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[11px] text-[#86868B]",
														children: "Upload a photo from your device or select from Harare yard photo library."
													})] })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex flex-col sm:flex-row gap-4 items-start",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "relative size-28 sm:size-32 rounded-xl overflow-hidden bg-black/[0.05] border border-black/[0.08] shrink-0 shadow-xs group",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																src: newProdImage || "/images/jaw-crusher.jpg",
																alt: "Preview",
																className: "size-full object-cover object-center",
																onError: (e) => {
																	e.target.src = "/images/hero.jpg";
																}
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
																	className: "cursor-pointer text-white text-[10px] font-semibold bg-black/70 px-2 py-1 rounded-md hover:bg-black",
																	children: ["Change", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																		type: "file",
																		accept: "image/*",
																		onChange: (e) => handleImageUpload(e, false),
																		className: "hidden"
																	})]
																})
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "absolute bottom-1 right-1 rounded bg-black/60 px-1.5 py-0.5 text-[9px] font-medium text-white backdrop-blur-xs",
																children: "Live Preview"
															})
														]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex-1 space-y-3 w-full",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex flex-wrap items-center justify-between gap-2",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
																	className: "inline-flex items-center gap-1.5 rounded-full border border-black/[0.1] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#1D1D1F] shadow-2xs hover:bg-[#F5F5F7] cursor-pointer transition-all active:scale-95",
																	children: [
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-3.5 text-[#1D1D1F]" }),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Upload Machine Image" }),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																			type: "file",
																			accept: "image/*",
																			onChange: (e) => handleImageUpload(e, false),
																			className: "hidden"
																		})
																	]
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "relative min-w-[180px]",
																	children: [
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-2.5 top-2 size-3 text-[#86868B]" }),
																		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																			type: "text",
																			value: newPhotoPresetSearch,
																			onChange: (e) => setNewPhotoPresetSearch(e.target.value),
																			placeholder: "Search presets...",
																			className: "w-full h-7 rounded-full border border-black/[0.08] bg-[#F5F5F7] pl-7 pr-2.5 text-[11px] text-[#1D1D1F] focus:bg-white focus:outline-none"
																		}),
																		newPhotoPresetSearch && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																			type: "button",
																			onClick: () => setNewPhotoPresetSearch(""),
																			className: "absolute right-2 top-2 text-[#86868B] hover:text-[#1D1D1F]",
																			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3" })
																		})
																	]
																})]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "flex flex-wrap items-center gap-1",
																children: [
																	{
																		id: "all",
																		label: "All Fleet"
																	},
																	{
																		id: "mining",
																		label: "Mining"
																	},
																	{
																		id: "hire",
																		label: "Hire"
																	},
																	{
																		id: "farming",
																		label: "Farming"
																	},
																	{
																		id: "hardware",
																		label: "Hardware"
																	},
																	{
																		id: "industry",
																		label: "Industry"
																	}
																].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																	type: "button",
																	onClick: () => setNewPresetCategoryFilter(f.id),
																	className: `rounded-lg px-2.5 py-1 text-[11px] font-medium transition-all ${newPresetCategoryFilter === f.id ? "bg-[#1D1D1F] text-white font-semibold shadow-2xs" : "bg-black/[0.04] text-[#6E6E73] hover:text-[#1D1D1F]"}`,
																	children: f.label
																}, f.id))
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-56 overflow-y-auto p-2 rounded-xl bg-[#F9F9FA] border border-black/[0.06]",
																children: YARD_PHOTO_PRESETS.filter((p) => {
																	const matchesCat = newPresetCategoryFilter === "all" || p.category === newPresetCategoryFilter;
																	const matchesSearch = !newPhotoPresetSearch || p.label.toLowerCase().includes(newPhotoPresetSearch.toLowerCase()) || p.spec.toLowerCase().includes(newPhotoPresetSearch.toLowerCase());
																	return matchesCat && matchesSearch;
																}).map((preset) => {
																	const isSelected = newProdImage === preset.src;
																	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
																		type: "button",
																		onClick: () => setNewProdImage(preset.src),
																		className: `group relative flex flex-col text-left rounded-xl p-2 border transition-all ${isSelected ? "border-[#1D1D1F] bg-white ring-2 ring-[#1D1D1F] shadow-xs" : "border-black/[0.08] bg-white hover:border-black/[0.2]"}`,
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "relative h-20 w-full rounded-lg overflow-hidden bg-black/[0.04] mb-1.5",
																			children: [
																				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																					src: preset.src,
																					alt: preset.label,
																					className: "size-full object-cover transition-transform duration-300 group-hover:scale-105",
																					onError: (e) => {
																						e.target.src = "/images/hero.jpg";
																					}
																				}),
																				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																					className: "absolute top-1 left-1 rounded bg-black/70 px-1.5 py-0.5 text-[8px] font-semibold text-white uppercase tracking-wider backdrop-blur-xs",
																					children: preset.category
																				}),
																				isSelected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																					className: "absolute top-1 right-1 size-5 rounded-full bg-[#1FA855] text-white flex items-center justify-center shadow-xs",
																					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3 stroke-[2.5]" })
																				})
																			]
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																			className: "min-w-0",
																			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																				className: "text-[11px] font-semibold text-[#1D1D1F] truncate group-hover:text-black",
																				children: preset.label
																			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																				className: "text-[10px] text-[#6E6E73] truncate",
																				children: preset.spec
																			})]
																		})]
																	}, preset.src);
																})
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-center gap-2 pt-1",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-[11px] font-medium text-[#1D1D1F] shrink-0",
																	children: "Custom URL / Path:"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																	type: "text",
																	value: newProdImage,
																	onChange: (e) => setNewProdImage(e.target.value),
																	placeholder: "/images/... or https://...",
																	className: "w-full h-8 rounded-xl border border-black/[0.08] bg-white px-3 text-xs text-[#1D1D1F] focus:outline-none font-mono text-[11px]"
																})]
															})
														]
													})]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "font-medium text-[#1D1D1F] block mb-1",
													children: "Equipment Model / Name *"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													required: true,
													value: newProdName,
													onChange: (e) => setNewProdName(e.target.value),
													placeholder: "e.g. 250x400 Jaw Crusher or Cat 320D",
													className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
												})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
													className: "font-medium text-[#1D1D1F] block mb-1",
													children: "Division"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
													value: newProdCategory,
													onChange: (e) => setNewProdCategory(e.target.value),
													className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "mining",
															children: "Mining Equipment"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "hire",
															children: "Construction Machinery Hire"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "hardware",
															children: "Hardware & Construction"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "farming",
															children: "Farming Machinery"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
															value: "industry",
															children: "Industry & Manufacturing"
														})
													]
												})] })]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "font-medium text-[#1D1D1F] block mb-1",
														children: "Hourly Throughput"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "text",
														value: newProdThroughput,
														onChange: (e) => setNewProdThroughput(e.target.value),
														placeholder: "e.g. 5–15 TPH or 35m boom",
														className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "font-medium text-[#1D1D1F] block mb-1",
														children: "Power / Motor Drive"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "text",
														value: newProdPower,
														onChange: (e) => setNewProdPower(e.target.value),
														placeholder: "e.g. 15kW 380V or 35HP diesel",
														className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "font-medium text-[#1D1D1F] block mb-1",
														children: "Indicative Price / Rate"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "text",
														value: newProdPrice,
														onChange: (e) => setNewProdPrice(e.target.value),
														placeholder: "e.g. $18,500 FOB Harare",
														className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
													})] })
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "font-medium text-[#1D1D1F] block mb-1",
												children: "Technical Overview / Tagline"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "text",
												value: newProdBlurb,
												onChange: (e) => setNewProdBlurb(e.target.value),
												placeholder: "Primary crushing for gold ore circuits. Heavy cast-steel eccentric shaft.",
												className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-end gap-2 pt-2 border-t border-black/[0.06]",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => setShowAddProductModal(false),
													className: "rounded-full bg-[#F5F5F7] px-4 py-1.5 text-xs font-medium text-[#6E6E73] hover:text-[#1D1D1F]",
													children: "Cancel"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "submit",
													className: "rounded-full bg-[#1D1D1F] px-4 py-1.5 text-xs font-semibold text-white hover:bg-black",
													children: "Add to Inventory"
												})]
											})
										]
									})]
								})
							})
						]
					}),
					activeTab === "cms" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "w-full space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 rounded-3xl bg-white p-5 sm:p-6 border border-black/[0.06] shadow-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex size-7 items-center justify-center rounded-lg bg-black/[0.05] text-[#1D1D1F]",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-amber-500" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
										className: "text-xl font-semibold tracking-tight text-[#1D1D1F]",
										children: "Website Copy, Brand & Content Management"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-[#86868B] mt-1 max-w-2xl",
									children: "Manage live headlines, Harare yard details, official contact channels, operating hours, and divisional messaging across Omnicore Solutions. Changes update in real-time nationwide."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative min-w-[200px] sm:min-w-[240px]",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-2.5 size-3.5 text-[#86868B]" }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
													type: "text",
													placeholder: "Search any copy or field...",
													value: cmsSearch,
													onChange: (e) => setCmsSearch(e.target.value),
													className: "w-full h-8.5 rounded-full border border-black/[0.08] bg-[#F5F5F7] pl-8.5 pr-3 text-xs focus:bg-white focus:outline-none transition-colors"
												}),
												cmsSearch && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => setCmsSearch(""),
													className: "absolute right-2.5 top-2.5 text-[#86868B] hover:text-[#1D1D1F]",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-3.5" })
												})
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: handleResetSiteCopy,
											className: "inline-flex h-8.5 items-center gap-1.5 rounded-full border border-black/[0.08] bg-white px-3.5 text-xs font-medium text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7] transition-all active:scale-95",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-3.5 text-[#86868B]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Reset Defaults" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "inline-flex rounded-full bg-[#F5F5F7] p-0.5 border border-black/[0.08] text-xs",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => setCmsLayoutMode("full"),
												className: `inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all ${cmsLayoutMode === "full" ? "bg-white text-[#1D1D1F] shadow-2xs font-semibold" : "text-[#6E6E73] hover:text-[#1D1D1F]"}`,
												title: "Expand across 100% of screen real estate with multi-column layouts",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Full-Width Studio" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
												type: "button",
												onClick: () => setCmsLayoutMode("split"),
												className: `inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all ${cmsLayoutMode === "split" ? "bg-white text-[#1D1D1F] shadow-2xs font-semibold" : "text-[#6E6E73] hover:text-[#1D1D1F]"}`,
												title: "View side-by-side interactive live preview",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Columns2, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Split Live Preview" })]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
											href: "/",
											target: "_blank",
											rel: "noopener noreferrer",
											className: "inline-flex h-8.5 items-center gap-1.5 rounded-full border border-black/[0.08] bg-white px-3.5 text-xs font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] transition-all active:scale-95",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5 text-[#86868B]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "View Public Site" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => handleSaveSiteCopy(),
											className: `inline-flex h-8.5 items-center gap-1.5 rounded-full px-5 text-xs font-semibold text-white shadow-xs transition-all active:scale-95 ${hasUnsavedChanges ? "bg-[#1FA855] hover:bg-[#1B934B] animate-pulse" : "bg-[#1D1D1F] hover:bg-black"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: hasUnsavedChanges ? "Publish Changes Live *" : "Published Live" })]
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex flex-wrap items-center gap-1.5 rounded-2xl bg-white p-2 border border-black/[0.06] shadow-2xs",
								children: [
									{
										id: "hero",
										label: "🌟 Hero & Brand",
										count: 12
									},
									{
										id: "yard",
										label: "📍 Yard, Facility & Delivery",
										count: 8
									},
									{
										id: "contact",
										label: "📞 Contact Channels & Hotlines",
										count: 10
									},
									{
										id: "hours",
										label: "⏰ Hours, Warranties & Terms",
										count: 10
									},
									{
										id: "divisions",
										label: "🚜 Division Copy (5 Sectors)",
										count: 15
									},
									{
										id: "about",
										label: "🏢 About & Corporate Pillars",
										count: 8
									},
									{
										id: "social",
										label: "⚖️ Social, Legal & Footer",
										count: 8
									},
									{
										id: "all",
										label: "📋 All Sections",
										count: 71
									}
								].map((cat) => {
									const isActive = cmsCategory === cat.id;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => setCmsCategory(cat.id),
										className: `inline-flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-medium transition-all ${isActive ? "bg-[#1D1D1F] text-white shadow-2xs font-semibold" : "text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]"}`,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: cat.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: `rounded-full px-1.5 py-0.2 text-[10px] font-semibold ${isActive ? "bg-white/20 text-white" : "bg-black/[0.05] text-[#86868B]"}`,
											children: cat.count
										})]
									}, cat.id);
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: cmsLayoutMode === "split" ? "grid grid-cols-1 lg:grid-cols-12 gap-6 items-start" : "w-full",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: cmsLayoutMode === "split" ? "lg:col-span-8 xl:col-span-8 space-y-6" : "w-full space-y-6",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
										onSubmit: handleSaveSiteCopy,
										className: "space-y-6",
										children: [
											(cmsCategory === "hero" || cmsCategory === "all" || cmsSearch) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-3xl border border-black/[0.06] bg-white p-5 sm:p-7 shadow-xs space-y-5",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between pb-3.5 border-b border-black/[0.05]",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center gap-2.5",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "flex size-8 items-center justify-center rounded-xl bg-amber-50 text-amber-700",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4.5" })
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
																className: "text-base font-semibold text-[#1D1D1F]",
																children: "Hero Banner & Brand Identity Messaging"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-xs text-[#86868B] mt-0.5",
																children: "Controls the primary landing headlines, yard announcement banner, call-to-actions, and key stats."
															})] })]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "rounded-full bg-amber-100/70 px-3 py-1 text-xs font-semibold text-amber-800",
															children: "Above The Fold"
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
																children: "Company Legal Name"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																type: "text",
																value: cmsForm.name,
																onChange: (e) => updateCmsField("name", e.target.value),
																className: "w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
																placeholder: "Omnicore Solutions"
															})] }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
																children: "Brand Short Name"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																type: "text",
																value: cmsForm.shortName,
																onChange: (e) => updateCmsField("shortName", e.target.value),
																className: "w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
																placeholder: "Omnicore"
															})] }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "xl:col-span-2",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																	className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
																	children: "Company Tagline"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																	type: "text",
																	value: cmsForm.tagline,
																	onChange: (e) => updateCmsField("tagline", e.target.value),
																	className: "w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
																	placeholder: "Machinery for Zimbabwe's farms, mines and sites."
																})]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
																children: "Founded Year"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																type: "text",
																value: cmsForm.foundedYear,
																onChange: (e) => updateCmsField("foundedYear", e.target.value),
																className: "w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
																placeholder: "2024"
															})] })
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "grid grid-cols-1 lg:grid-cols-2 gap-3.5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Top Yard & Operational Announcement Banner"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "text",
															value: cmsForm.heroBannerAnnouncement || "",
															onChange: (e) => updateCmsField("heroBannerAnnouncement", e.target.value),
															className: "w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "Cranborne Yard Open Mon–Sat · Lowbed Deliveries Nationwide"
														})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Cranborne Yard Badge Text (Top of Hero)"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "text",
															value: cmsForm.heroBadge,
															onChange: (e) => updateCmsField("heroBadge", e.target.value),
															className: "w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "Cranborne yard · 115 Chiremba Road, Harare"
														})] })]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-start",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "lg:col-span-6 space-y-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																className: "font-semibold text-[#1D1D1F] text-xs block",
																children: "Homepage Hero Headline"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																type: "text",
																value: cmsForm.heroHeadline,
																onChange: (e) => updateCmsField("heroHeadline", e.target.value),
																className: "w-full h-11 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3.5 text-sm font-semibold text-[#1D1D1F] focus:bg-white focus:outline-none",
																placeholder: "Plant for Zimbabwe’s mines, farms and pours."
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "lg:col-span-6 space-y-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-center justify-between",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																	className: "font-semibold text-[#1D1D1F] text-xs",
																	children: "Hero Narrative Subheadline"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																	className: "text-[10px] text-[#86868B]",
																	children: [cmsForm.heroSubheadline.length, " chars"]
																})]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																rows: 3,
																value: cmsForm.heroSubheadline,
																onChange: (e) => updateCmsField("heroSubheadline", e.target.value),
																className: "w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] p-3 text-xs leading-relaxed focus:bg-white focus:outline-none",
																placeholder: "Gold circuits, fence plant, self-loading mixers..."
															})]
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "grid grid-cols-1 sm:grid-cols-3 gap-3.5",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
																children: "Primary CTA Button (WhatsApp Direct)"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																type: "text",
																value: cmsForm.heroCtaPrimary,
																onChange: (e) => updateCmsField("heroCtaPrimary", e.target.value),
																className: "w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none font-medium",
																placeholder: "Chat on WhatsApp"
															})] }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
																children: "Secondary CTA Button (Tender Quote)"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																type: "text",
																value: cmsForm.heroCtaSecondary,
																onChange: (e) => updateCmsField("heroCtaSecondary", e.target.value),
																className: "w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none font-medium",
																placeholder: "Request a firm quote"
															})] }),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
																children: "Tertiary CTA Button (Catalogue Browse)"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																type: "text",
																value: cmsForm.heroCtaTertiary,
																onChange: (e) => updateCmsField("heroCtaTertiary", e.target.value),
																className: "w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none font-medium",
																placeholder: "Open the catalogue"
															})] })
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "pt-3 border-t border-black/[0.05]",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "font-semibold text-[#1D1D1F] text-xs mb-2.5",
															children: "Homepage 4 Statistics Highlights"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "rounded-2xl border border-black/[0.06] bg-[#F9F9FA] p-3 space-y-2",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "text-[10px] font-bold text-[#86868B] uppercase tracking-wider",
																		children: "Stat 1"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "space-y-1.5",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																			type: "text",
																			placeholder: "Label (e.g. Harare hub)",
																			value: cmsForm.stat1Label,
																			onChange: (e) => updateCmsField("stat1Label", e.target.value),
																			className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-semibold"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																			type: "text",
																			placeholder: "Detail (e.g. Cranborne yard)",
																			value: cmsForm.stat1Detail,
																			onChange: (e) => updateCmsField("stat1Detail", e.target.value),
																			className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs text-[#6E6E73]"
																		})]
																	})]
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "rounded-2xl border border-black/[0.06] bg-[#F9F9FA] p-3 space-y-2",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "text-[10px] font-bold text-[#86868B] uppercase tracking-wider",
																		children: "Stat 2"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "space-y-1.5",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																			type: "text",
																			placeholder: "Label (e.g. 1–25 TPH)",
																			value: cmsForm.stat2Label,
																			onChange: (e) => updateCmsField("stat2Label", e.target.value),
																			className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-semibold"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																			type: "text",
																			placeholder: "Detail (e.g. Gold circuits)",
																			value: cmsForm.stat2Detail,
																			onChange: (e) => updateCmsField("stat2Detail", e.target.value),
																			className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs text-[#6E6E73]"
																		})]
																	})]
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "rounded-2xl border border-black/[0.06] bg-[#F9F9FA] p-3 space-y-2",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "text-[10px] font-bold text-[#86868B] uppercase tracking-wider",
																		children: "Stat 3"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "space-y-1.5",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																			type: "text",
																			placeholder: "Label (e.g. Wet & dry)",
																			value: cmsForm.stat3Label,
																			onChange: (e) => updateCmsField("stat3Label", e.target.value),
																			className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-semibold"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																			type: "text",
																			placeholder: "Detail (e.g. Plant hire)",
																			value: cmsForm.stat3Detail,
																			onChange: (e) => updateCmsField("stat3Detail", e.target.value),
																			className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs text-[#6E6E73]"
																		})]
																	})]
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "rounded-2xl border border-black/[0.06] bg-[#F9F9FA] p-3 space-y-2",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "text-[10px] font-bold text-[#86868B] uppercase tracking-wider",
																		children: "Stat 4"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																		className: "space-y-1.5",
																		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																			type: "text",
																			placeholder: "Label (e.g. 10 provinces)",
																			value: cmsForm.stat4Label,
																			onChange: (e) => updateCmsField("stat4Label", e.target.value),
																			className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-semibold"
																		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																			type: "text",
																			placeholder: "Detail (e.g. Lowbed delivery)",
																			value: cmsForm.stat4Detail,
																			onChange: (e) => updateCmsField("stat4Detail", e.target.value),
																			className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs text-[#6E6E73]"
																		})]
																	})]
																})
															]
														})]
													})
												]
											}),
											(cmsCategory === "yard" || cmsCategory === "all" || cmsSearch) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-3xl border border-black/[0.06] bg-white p-5 sm:p-6 shadow-xs space-y-4",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between pb-3 border-b border-black/[0.05]",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center gap-2",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "flex size-7 items-center justify-center rounded-lg bg-blue-50 text-blue-700",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4" })
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
																className: "text-sm font-semibold text-[#1D1D1F]",
																children: "Yard Location & Physical Presence"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-[11px] text-[#86868B]",
																children: "Physical demonstration yard, lowbed loading access, and Google Maps pin coordinates."
															})] })]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "rounded-full bg-blue-100/60 px-2 py-0.5 text-[10px] font-semibold text-blue-800",
															children: "Harare Hub"
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Street Address Line 1"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "text",
															value: cmsForm.yardAddressLine1,
															onChange: (e) => updateCmsField("yardAddressLine1", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "115 Chiremba Road"
														})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Suburb & Industrial Belt Line 2"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "text",
															value: cmsForm.yardAddressLine2,
															onChange: (e) => updateCmsField("yardAddressLine2", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "Cranborne, Harare"
														})] })]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "City / Metro"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "text",
															value: cmsForm.yardCity,
															onChange: (e) => updateCmsField("yardCity", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "Harare"
														})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Country"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "text",
															value: cmsForm.yardCountry,
															onChange: (e) => updateCmsField("yardCountry", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "Zimbabwe"
														})] })]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
														children: "Google Maps Pin URL"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "url",
														value: cmsForm.googleMapsUrl,
														onChange: (e) => updateCmsField("googleMapsUrl", e.target.value),
														className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none font-mono text-[11px]",
														placeholder: "https://www.google.com/maps/search/?api=1&query=..."
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
														children: "Directions & Heavy Machinery Loading Guidance"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
														rows: 2,
														value: cmsForm.yardDirectionsNote,
														onChange: (e) => updateCmsField("yardDirectionsNote", e.target.value),
														className: "w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] p-3 text-xs leading-relaxed focus:bg-white focus:outline-none",
														placeholder: "Along Chiremba Road, close to major Harare arterial routes..."
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
														children: "Yard Inspection & Testing Policy"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "text",
														value: cmsForm.inspectionNotice,
														onChange: (e) => updateCmsField("inspectionNotice", e.target.value),
														className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
														placeholder: "Physical yard mechanical inspections welcome Monday–Saturday at 115 Chiremba Rd, Cranborne."
													})] })
												]
											}),
											(cmsCategory === "contact" || cmsCategory === "all" || cmsSearch) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-3xl border border-black/[0.06] bg-white p-5 sm:p-6 shadow-xs space-y-4",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between pb-3 border-b border-black/[0.05]",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center gap-2",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "flex size-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" })
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
																className: "text-sm font-semibold text-[#1D1D1F]",
																children: "Contact Channels, Emergency Hotlines & WhatsApp Desk"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-[11px] text-[#86868B]",
																children: "Direct voice lines, 24/7 site breakdown hotlines, WhatsApp numbers, and official email inboxes."
															})] })]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "rounded-full bg-emerald-100/60 px-2 py-0.5 text-[10px] font-semibold text-emerald-800",
															children: "Direct Lines"
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Primary Phone (Display)"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "text",
															value: cmsForm.primaryPhone,
															onChange: (e) => updateCmsField("primaryPhone", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "+263 77 733 4569"
														})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Primary Phone (Dialable URL)"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "text",
															value: cmsForm.primaryPhoneTel,
															onChange: (e) => updateCmsField("primaryPhoneTel", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none font-mono text-[11px]",
															placeholder: "+263777334569"
														})] })]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Secondary Alternate Phone (Display)"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "text",
															value: cmsForm.secondaryPhone,
															onChange: (e) => updateCmsField("secondaryPhone", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "+263 78 871 6082"
														})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Secondary Phone (Dialable URL)"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "text",
															value: cmsForm.secondaryPhoneTel,
															onChange: (e) => updateCmsField("secondaryPhoneTel", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none font-mono text-[11px]",
															placeholder: "+263788716082"
														})] })]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Emergency 24/7 Breakdown Hotline (Display)"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "text",
															value: cmsForm.emergencyHotline,
															onChange: (e) => updateCmsField("emergencyHotline", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "+263 77 733 4569"
														})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Emergency Hotline (Dialable URL)"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "text",
															value: cmsForm.emergencyHotlineTel,
															onChange: (e) => updateCmsField("emergencyHotlineTel", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none font-mono text-[11px]",
															placeholder: "+263777334569"
														})] })]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "WhatsApp Business Number (digits only)"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "text",
															value: cmsForm.whatsappNumber,
															onChange: (e) => updateCmsField("whatsappNumber", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none font-mono text-[11px]",
															placeholder: "263777334569"
														})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Technical Desk Email"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "email",
															value: cmsForm.email,
															onChange: (e) => updateCmsField("email", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "omnicore-solutions@outlook.com"
														})] })]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
														children: "Sales & Tenders Email"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "email",
														value: cmsForm.salesEmail,
														onChange: (e) => updateCmsField("salesEmail", e.target.value),
														className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
														placeholder: "sales@omnicoresolutions.co.zw"
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
														children: "Default WhatsApp Inbound Message Preset"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "text",
														value: cmsForm.whatsappMessage,
														onChange: (e) => updateCmsField("whatsappMessage", e.target.value),
														className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
														placeholder: "Hello Omnicore Harare Desk — I would like an equipment quote."
													})] })
												]
											}),
											(cmsCategory === "hours" || cmsCategory === "all" || cmsSearch) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-3xl border border-black/[0.06] bg-white p-5 sm:p-6 shadow-xs space-y-4",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between pb-3 border-b border-black/[0.05]",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center gap-2",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "flex size-7 items-center justify-center rounded-lg bg-purple-50 text-purple-700",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4" })
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
																className: "text-sm font-semibold text-[#1D1D1F]",
																children: "Operating Hours, Dispatch Turnaround & SLAs"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-[11px] text-[#86868B]",
																children: "Demonstration times, loading schedules, after-hours hotlines, delivery turnarounds, and terms."
															})] })]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "rounded-full bg-purple-100/60 px-2 py-0.5 text-[10px] font-semibold text-purple-800",
															children: "SLA & Yard Times"
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Monday – Friday Hours"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "text",
															value: cmsForm.hoursWeekday,
															onChange: (e) => updateCmsField("hoursWeekday", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "08:00 – 17:00"
														})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Saturday Hours"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "text",
															value: cmsForm.hoursSaturday,
															onChange: (e) => updateCmsField("hoursSaturday", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "08:00 – 13:00"
														})] })]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Sunday & Public Holiday Policy"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "text",
															value: cmsForm.hoursSunday,
															onChange: (e) => updateCmsField("hoursSunday", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "Closed · WhatsApp desk monitored"
														})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Quotation & Price SLA Statement"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "text",
															value: cmsForm.responseSLA,
															onChange: (e) => updateCmsField("responseSLA", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "Average tender & pricing turnaround under 15 minutes during yard hours."
														})] })]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
														children: "Nationwide Dispatch & Delivery Lead Time"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "text",
														value: cmsForm.dispatchTurnaround,
														onChange: (e) => updateCmsField("dispatchTurnaround", e.target.value),
														className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
														placeholder: "Same-day lowbed loading for in-stock plant; 24–48h nationwide delivery."
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
														children: "After-Hours & Breakdown Emergency Notice"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "text",
														value: cmsForm.afterHoursNotice,
														onChange: (e) => updateCmsField("afterHoursNotice", e.target.value),
														className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
														placeholder: "Urgent site breakdown & pump dispatch hotline active 24/7 on WhatsApp."
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
														children: "Standard Factory Parts Warranty Statement"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "text",
														value: cmsForm.warrantyNotice,
														onChange: (e) => updateCmsField("warrantyNotice", e.target.value),
														className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
														placeholder: "12-month factory parts warranty & Harare commissioning included."
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Accepted Payment Currencies & Terms"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "text",
															value: cmsForm.termsNotice,
															onChange: (e) => updateCmsField("termsNotice", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "All quotes issued in USD payable via Nostro, RTGS, or cash on collection."
														})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Payment Channels Accepted"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "text",
															value: cmsForm.paymentMethods,
															onChange: (e) => updateCmsField("paymentMethods", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "Bank Transfer, Nostro, USD Cash, EcoCash, ZIPIT"
														})] })]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
														children: "Formal Tenders & PRAZ Procurement Notice"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "text",
														value: cmsForm.tendersNotice || "",
														onChange: (e) => updateCmsField("tendersNotice", e.target.value),
														className: "w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
														placeholder: "PRAZ Registered Supplier · Formal tenders, municipal quotes & mine procurement packs issued within 24h."
													})] })
												]
											}),
											(cmsCategory === "divisions" || cmsCategory === "all" || cmsSearch) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-3xl border border-black/[0.06] bg-white p-5 sm:p-7 shadow-xs space-y-5",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between pb-3.5 border-b border-black/[0.05]",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-2.5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "flex size-8 items-center justify-center rounded-xl bg-orange-50 text-orange-700",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "size-4.5" })
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
															className: "text-base font-semibold text-[#1D1D1F]",
															children: "Specialized Division Headlines, Eyebrows & Narrative Copy"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-xs text-[#86868B] mt-0.5",
															children: "Custom positioning headlines, sector eyebrows, and sub-narratives across the 5 industrial division sections."
														})] })]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "rounded-full bg-orange-100/70 px-3 py-1 text-xs font-semibold text-orange-800",
														children: "5 Sectors"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4.5",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "p-4 rounded-2xl bg-[#F9F9FA] border border-black/[0.05] space-y-2.5",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-center justify-between",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-xs font-bold text-amber-800 uppercase tracking-wider",
																	children: "1. Mining Equipment"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-[10px] font-medium text-[#86868B]",
																	children: "Gold & Chrome"
																})]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "space-y-2",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Eyebrow"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																		type: "text",
																		value: cmsForm.miningEyebrow,
																		onChange: (e) => updateCmsField("miningEyebrow", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-medium"
																	})] }),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Headline"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																		type: "text",
																		value: cmsForm.miningHeadline,
																		onChange: (e) => updateCmsField("miningHeadline", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-semibold text-[#1D1D1F]"
																	})] }),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Narrative Subheadline"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																		rows: 2,
																		value: cmsForm.miningSubheadline || "",
																		onChange: (e) => updateCmsField("miningSubheadline", e.target.value),
																		className: "w-full rounded-lg border border-black/[0.08] bg-white p-2 text-xs leading-relaxed",
																		placeholder: "Complete gravity and milling circuits engineered for small-scale and commercial miners..."
																	})] })
																]
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "p-4 rounded-2xl bg-[#F9F9FA] border border-black/[0.05] space-y-2.5",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-center justify-between",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-xs font-bold text-blue-800 uppercase tracking-wider",
																	children: "2. Plant Hire Fleet"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-[10px] font-medium text-[#86868B]",
																	children: "Yellow Metal"
																})]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "space-y-2",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Eyebrow"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																		type: "text",
																		value: cmsForm.hireEyebrow,
																		onChange: (e) => updateCmsField("hireEyebrow", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-medium"
																	})] }),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Headline"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																		type: "text",
																		value: cmsForm.hireHeadline,
																		onChange: (e) => updateCmsField("hireHeadline", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-semibold text-[#1D1D1F]"
																	})] }),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Narrative Subheadline"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																		rows: 2,
																		value: cmsForm.hireSubheadline || "",
																		onChange: (e) => updateCmsField("hireSubheadline", e.target.value),
																		className: "w-full rounded-lg border border-black/[0.08] bg-white p-2 text-xs leading-relaxed",
																		placeholder: "Late-model CAT diggers, 37m concrete boom pumps..."
																	})] })
																]
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "p-4 rounded-2xl bg-[#F9F9FA] border border-black/[0.05] space-y-2.5",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-center justify-between",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-xs font-bold text-emerald-800 uppercase tracking-wider",
																	children: "3. Farming Machinery"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-[10px] font-medium text-[#86868B]",
																	children: "Agro-Processing"
																})]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "space-y-2",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Eyebrow"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																		type: "text",
																		value: cmsForm.farmingEyebrow,
																		onChange: (e) => updateCmsField("farmingEyebrow", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-medium"
																	})] }),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Headline"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																		type: "text",
																		value: cmsForm.farmingHeadline,
																		onChange: (e) => updateCmsField("farmingHeadline", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-semibold text-[#1D1D1F]"
																	})] }),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Narrative Subheadline"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																		rows: 2,
																		value: cmsForm.farmingSubheadline || "",
																		onChange: (e) => updateCmsField("farmingSubheadline", e.target.value),
																		className: "w-full rounded-lg border border-black/[0.08] bg-white p-2 text-xs leading-relaxed",
																		placeholder: "Hammer mills, vertical feed mixers, and oil presses..."
																	})] })
																]
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "p-4 rounded-2xl bg-[#F9F9FA] border border-black/[0.05] space-y-2.5",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-center justify-between",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-xs font-bold text-stone-800 uppercase tracking-wider",
																	children: "4. Hardware & Construction"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-[10px] font-medium text-[#86868B]",
																	children: "Fencing & Civils"
																})]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "space-y-2",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Eyebrow"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																		type: "text",
																		value: cmsForm.hardwareEyebrow,
																		onChange: (e) => updateCmsField("hardwareEyebrow", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-medium"
																	})] }),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Headline"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																		type: "text",
																		value: cmsForm.hardwareHeadline,
																		onChange: (e) => updateCmsField("hardwareHeadline", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-semibold text-[#1D1D1F]"
																	})] }),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Narrative Subheadline"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																		rows: 2,
																		value: cmsForm.hardwareSubheadline || "",
																		onChange: (e) => updateCmsField("hardwareSubheadline", e.target.value),
																		className: "w-full rounded-lg border border-black/[0.08] bg-white p-2 text-xs leading-relaxed",
																		placeholder: "Diamond mesh, razor wire, block machines..."
																	})] })
																]
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "p-4 rounded-2xl bg-[#F9F9FA] border border-black/[0.05] space-y-2.5",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-center justify-between",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-xs font-bold text-purple-800 uppercase tracking-wider",
																	children: "5. Industry & Manufacturing"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-[10px] font-medium text-[#86868B]",
																	children: "Power & Motors"
																})]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "space-y-2",
																children: [
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Eyebrow"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																		type: "text",
																		value: cmsForm.industryEyebrow,
																		onChange: (e) => updateCmsField("industryEyebrow", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-medium"
																	})] }),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Headline"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																		type: "text",
																		value: cmsForm.industryHeadline,
																		onChange: (e) => updateCmsField("industryHeadline", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-semibold text-[#1D1D1F]"
																	})] }),
																	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Narrative Subheadline"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
																		rows: 2,
																		value: cmsForm.industrySubheadline || "",
																		onChange: (e) => updateCmsField("industrySubheadline", e.target.value),
																		className: "w-full rounded-lg border border-black/[0.08] bg-white p-2 text-xs leading-relaxed",
																		placeholder: "Heavy-duty electric motors, screw compressors..."
																	})] })
																]
															})]
														})
													]
												})]
											}),
											(cmsCategory === "about" || cmsCategory === "all" || cmsSearch) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-3xl border border-black/[0.06] bg-white p-5 sm:p-7 shadow-xs space-y-5",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between pb-3.5 border-b border-black/[0.05]",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center gap-2.5",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "flex size-8 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "size-4.5" })
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
																className: "text-base font-semibold text-[#1D1D1F]",
																children: "Corporate Narrative, Mission & 4 Guarantees"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-xs text-[#86868B] mt-0.5",
																children: "Harare yard presence story, nationwide mission, and core operational guarantees across Zimbabwe."
															})] })]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "rounded-full bg-indigo-100/70 px-3 py-1 text-xs font-semibold text-indigo-800",
															children: "About & Mission"
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "grid grid-cols-1 lg:grid-cols-2 gap-3.5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "About Section Headline"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "text",
															value: cmsForm.aboutHeadline,
															onChange: (e) => updateCmsField("aboutHeadline", e.target.value),
															className: "w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "Direct Importers & Stockists of Heavy Industrial Equipment"
														})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Company Mission Statement"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
															rows: 2,
															value: cmsForm.aboutMission,
															onChange: (e) => updateCmsField("aboutMission", e.target.value),
															className: "w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] p-2.5 text-xs leading-relaxed focus:bg-white focus:outline-none",
															placeholder: "Supplying verified commercial machinery with local parts, field commissioning..."
														})] })]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
														children: "Company Origin & Harare Physical Stock Narrative"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
														rows: 2,
														value: cmsForm.aboutStory || "",
														onChange: (e) => updateCmsField("aboutStory", e.target.value),
														className: "w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] p-3 text-xs leading-relaxed focus:bg-white focus:outline-none",
														placeholder: "Founded to bridge the equipment gap for Zimbabwean miners, contractors, and farmers, Omnicore Solutions maintains a fully-stocked Cranborne yard..."
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "space-y-3 pt-2 border-t border-black/[0.05]",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-semibold text-xs text-[#1D1D1F] block",
															children: "4 Core Operational Guarantees"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "rounded-xl border border-black/[0.05] bg-[#F9F9FA] p-3 space-y-1",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																		className: "text-[10px] font-bold text-[#86868B] block uppercase tracking-wider",
																		children: "Pillar 1 · Yard Stock"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																		type: "text",
																		value: cmsForm.aboutPillar1,
																		onChange: (e) => updateCmsField("aboutPillar1", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs focus:bg-white focus:outline-none font-medium"
																	})]
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "rounded-xl border border-black/[0.05] bg-[#F9F9FA] p-3 space-y-1",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																		className: "text-[10px] font-bold text-[#86868B] block uppercase tracking-wider",
																		children: "Pillar 2 · Field Proven"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																		type: "text",
																		value: cmsForm.aboutPillar2,
																		onChange: (e) => updateCmsField("aboutPillar2", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs focus:bg-white focus:outline-none font-medium"
																	})]
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "rounded-xl border border-black/[0.05] bg-[#F9F9FA] p-3 space-y-1",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																		className: "text-[10px] font-bold text-[#86868B] block uppercase tracking-wider",
																		children: "Pillar 3 · Spares Back-up"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																		type: "text",
																		value: cmsForm.aboutPillar3,
																		onChange: (e) => updateCmsField("aboutPillar3", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs focus:bg-white focus:outline-none font-medium"
																	})]
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "rounded-xl border border-black/[0.05] bg-[#F9F9FA] p-3 space-y-1",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
																		className: "text-[10px] font-bold text-[#86868B] block uppercase tracking-wider",
																		children: "Pillar 4 · Logistics"
																	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
																		type: "text",
																		value: cmsForm.aboutPillar4,
																		onChange: (e) => updateCmsField("aboutPillar4", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs focus:bg-white focus:outline-none font-medium"
																	})]
																})
															]
														})]
													})
												]
											}),
											(cmsCategory === "social" || cmsCategory === "all" || cmsSearch) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-3xl border border-black/[0.06] bg-white p-5 sm:p-6 shadow-xs space-y-4",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between pb-3 border-b border-black/[0.05]",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center gap-2",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
																className: "flex size-7 items-center justify-center rounded-lg bg-teal-50 text-teal-700",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-4" })
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
																className: "text-sm font-semibold text-[#1D1D1F]",
																children: "Social Profiles & Footer Compliance"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "text-[11px] text-[#86868B]",
																children: "Official social channels, company overview, and bottom copyright statement."
															})] })]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "rounded-full bg-teal-100/60 px-2 py-0.5 text-[10px] font-semibold text-teal-800",
															children: "Channels"
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "LinkedIn Company Profile URL"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "url",
															value: cmsForm.linkedinUrl,
															onChange: (e) => updateCmsField("linkedinUrl", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none font-mono text-[11px]",
															placeholder: "https://www.linkedin.com/company/..."
														})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Facebook Page URL"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "url",
															value: cmsForm.facebookUrl,
															onChange: (e) => updateCmsField("facebookUrl", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none font-mono text-[11px]",
															placeholder: "https://www.facebook.com/..."
														})] })]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Founded Year"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "text",
															value: cmsForm.foundedYear,
															onChange: (e) => updateCmsField("foundedYear", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "2024"
														})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Registration & Scope Subtitle"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
															type: "text",
															value: cmsForm.companyReg,
															onChange: (e) => updateCmsField("companyReg", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "Harare Industrial & Mining Machinery Supplier"
														})] })]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
														children: "Footer Brand & Mission Summary"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
														rows: 2,
														value: cmsForm.footerAbout,
														onChange: (e) => updateCmsField("footerAbout", e.target.value),
														className: "w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] p-3 text-xs leading-relaxed focus:bg-white focus:outline-none",
														placeholder: "Direct supply, equipment hire, and on-site plant commissioning..."
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
														className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
														children: "Footer Copyright Notice"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
														type: "text",
														value: cmsForm.footerCopyright,
														onChange: (e) => updateCmsField("footerCopyright", e.target.value),
														className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
														placeholder: "© 2026 Omnicore Solutions. All rights reserved..."
													})] })
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-2xl border border-black/[0.06] bg-white p-4 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2 text-xs text-[#86868B]",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-emerald-600" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Updates propagate instantaneously to all visitors and components across the site." })]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2.5",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
														type: "button",
														onClick: handleResetSiteCopy,
														className: "rounded-full border border-black/[0.08] bg-[#F5F5F7] px-4 py-2 text-xs font-medium text-[#6E6E73] hover:text-[#1D1D1F] transition-all",
														children: "Reset"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														type: "submit",
														className: "rounded-full bg-[#1D1D1F] px-6 py-2 text-xs font-semibold text-white shadow-xs hover:bg-black transition-all active:scale-95 flex items-center gap-1.5",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Publish All Changes Live" })]
													})]
												})]
											})
										]
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "lg:col-span-5 xl:col-span-5 sticky top-20 space-y-4",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "rounded-3xl border border-black/[0.06] bg-white p-5 shadow-xs space-y-4",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "flex size-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" })
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
														className: "text-sm font-semibold text-[#1D1D1F]",
														children: "Live Interactive Visual Preview"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[10px] text-[#86868B]",
														children: "Simulates real-time rendering as you type"
													})] })]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "flex items-center gap-1 rounded-full bg-emerald-100/70 px-2 py-0.5 text-[10px] font-semibold text-emerald-800",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-emerald-600 animate-ping" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Live Sync" })]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "grid grid-cols-3 sm:grid-cols-6 gap-1 rounded-xl bg-black/[0.04] p-1 text-[11px]",
												children: [
													{
														id: "hero",
														label: "Hero"
													},
													{
														id: "yard",
														label: "Yard"
													},
													{
														id: "whatsapp",
														label: "WhatsApp"
													},
													{
														id: "about",
														label: "About"
													},
													{
														id: "divisions",
														label: "Divisions"
													},
													{
														id: "footer",
														label: "Footer"
													}
												].map((mode) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													type: "button",
													onClick: () => setCmsPreviewTab(mode.id),
													className: `rounded-lg py-1 font-medium transition-all text-center ${cmsPreviewTab === mode.id ? "bg-white text-[#1D1D1F] font-semibold shadow-2xs" : "text-[#6E6E73] hover:text-[#1D1D1F]"}`,
													children: mode.label
												}, mode.id))
											}),
											cmsPreviewTab === "hero" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-2xl bg-[#14110E] p-4 text-[#F3EFE6] border border-black/20 space-y-3 relative overflow-hidden shadow-inner",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "flex items-center gap-1.5",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] text-white/90",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-[#1FA855]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "truncate max-w-[200px]",
																children: cmsForm.heroBadge || "Cranborne yard"
															})]
														})
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
														className: "text-base sm:text-lg font-semibold tracking-tight text-white leading-tight",
														children: cmsForm.heroHeadline || "Plant for Zimbabwe’s mines, farms and pours."
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[11px] leading-relaxed text-white/75 line-clamp-3",
														children: cmsForm.heroSubheadline || "Gold circuits, fence plant, self-loading mixers..."
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex flex-wrap gap-1.5 pt-1",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
																className: "inline-flex items-center gap-1 rounded-full bg-[#1FA855] px-3 py-1 text-[10px] font-semibold text-white",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-3" }), cmsForm.heroCtaPrimary || "WhatsApp"]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "rounded-full bg-white px-3 py-1 text-[10px] font-semibold text-[#14110E]",
																children: cmsForm.heroCtaSecondary || "Request Quote"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "rounded-full border border-white/20 px-2.5 py-1 text-[10px] text-white/80",
																children: cmsForm.heroCtaTertiary || "Catalogue"
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "grid grid-cols-2 gap-1.5 pt-2 border-t border-white/10 text-[10px]",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "bg-white/5 rounded-lg p-1.5",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "font-semibold text-white truncate",
																	children: cmsForm.stat1Label || "Harare hub"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-white/60 truncate",
																	children: cmsForm.stat1Detail || "Cranborne yard"
																})]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "bg-white/5 rounded-lg p-1.5",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "font-semibold text-white truncate",
																	children: cmsForm.stat2Label || "1–25 TPH"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-white/60 truncate",
																	children: cmsForm.stat2Detail || "Gold circuits"
																})]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "bg-white/5 rounded-lg p-1.5",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "font-semibold text-white truncate",
																	children: cmsForm.stat3Label || "Wet & dry"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-white/60 truncate",
																	children: cmsForm.stat3Detail || "Plant hire"
																})]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "bg-white/5 rounded-lg p-1.5",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "font-semibold text-white truncate",
																	children: cmsForm.stat4Label || "10 provinces"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																	className: "text-white/60 truncate",
																	children: cmsForm.stat4Detail || "Lowbed delivery"
																})]
															})
														]
													})
												]
											}),
											cmsPreviewTab === "yard" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-2xl bg-[#F5F5F7] p-4 border border-black/[0.06] space-y-3",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-0.5 text-[10px] font-semibold text-[#1D1D1F] border border-black/[0.05]",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3 text-[#0071E3]" }),
																cmsForm.yardCity || "Harare",
																" Yard Pin"
															]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[10px] text-[#86868B]",
															children: cmsForm.yardCountry || "Zimbabwe"
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
														className: "text-sm font-semibold text-[#1D1D1F]",
														children: cmsForm.yardAddressLine1 || "115 Chiremba Road"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs text-[#6E6E73]",
														children: cmsForm.yardAddressLine2 || "Cranborne, Harare"
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[11px] leading-relaxed text-[#86868B] bg-white rounded-xl p-2.5 border border-black/[0.04]",
														children: cmsForm.yardDirectionsNote || "Heavy machinery can be inspected, demonstrated, and loaded onto lowbeds directly from our yard."
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "space-y-1 text-[11px]",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-center justify-between",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-[#86868B]",
																	children: "Mon – Fri:"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "font-medium text-[#1D1D1F]",
																	children: cmsForm.hoursWeekday || "08:00 – 17:00"
																})]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-center justify-between",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-[#86868B]",
																	children: "Saturday:"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "font-medium text-[#1D1D1F]",
																	children: cmsForm.hoursSaturday || "08:00 – 13:00"
																})]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "flex items-center justify-between",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-[#86868B]",
																	children: "Sunday:"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "font-medium text-[#1D1D1F]",
																	children: cmsForm.hoursSunday || "Closed"
																})]
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex gap-2 pt-1",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
															href: cmsForm.googleMapsUrl,
															target: "_blank",
															rel: "noopener noreferrer",
															className: "flex-1 rounded-xl bg-white border border-black/[0.08] py-1.5 text-center text-[10px] font-semibold text-[#1D1D1F] hover:bg-black/[0.02]",
															children: "Google Maps Pin ↗"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
															href: `tel:${cmsForm.primaryPhoneTel}`,
															className: "flex-1 rounded-xl bg-[#1D1D1F] py-1.5 text-center text-[10px] font-semibold text-white hover:bg-black",
															children: "Call Yard Desk"
														})]
													})
												]
											}),
											cmsPreviewTab === "whatsapp" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-2xl bg-[#E8F5E9] p-4 border border-[#A5D6A7] space-y-3",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center gap-1.5",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-4 text-[#1FA855]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-xs font-bold text-[#1B5E20]",
																children: "Harare WhatsApp Desk"
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "text-[10px] font-medium text-[#2E7D32]",
															children: ["Active · +", cmsForm.whatsappNumber]
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "rounded-xl bg-white p-3 border border-[#C8E6C9] shadow-2xs space-y-1.5",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-[9px] font-bold text-[#6E6E73] uppercase tracking-wide",
																children: "Pre-Filled User Message:"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "rounded-lg bg-[#F1F8E9] p-2 text-xs text-[#1B5E20] italic border-l-2 border-[#1FA855]",
																children: [
																	"\"",
																	cmsForm.whatsappMessage || "Hello Omnicore Harare Desk — I would like an equipment quote.",
																	"\""
																]
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
																className: "text-[10px] text-[#6E6E73]",
																children: ["SLA: ", cmsForm.responseSLA || "Average response < 15 mins"]
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between pt-1",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[10px] text-[#6E6E73]",
															children: "Website Floating FAB:"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "inline-flex items-center gap-2 rounded-full bg-[#1FA855] px-3 py-1.5 text-white shadow-xs",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																className: "text-left",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-[10px] font-bold block leading-tight",
																	children: "WhatsApp Desk"
																}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																	className: "text-[8px] text-emerald-100 block leading-tight",
																	children: cmsForm.yardAddressLine2 || "Cranborne · Harare"
																})]
															})]
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
														href: `https://wa.me/${cmsForm.whatsappNumber}?text=${encodeURIComponent(cmsForm.whatsappMessage)}`,
														target: "_blank",
														rel: "noopener noreferrer",
														className: "block w-full text-center rounded-xl bg-[#1FA855] py-2 text-xs font-semibold text-white shadow-xs hover:bg-[#1B934B] transition-all",
														children: "Test WhatsApp Link ↗"
													})
												]
											}),
											cmsPreviewTab === "about" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-2xl bg-[#F5F5F7] p-4 border border-black/[0.06] space-y-3",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
															className: "inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-0.5 text-[10px] font-semibold text-[#1D1D1F] border border-black/[0.05]",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "size-3 text-indigo-600" }), "Company Value Proposition"]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[10px] text-[#86868B]",
															children: "Harare Operations"
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
														className: "text-sm font-semibold text-[#1D1D1F]",
														children: cmsForm.aboutHeadline || "Direct Importers & Stockists of Heavy Industrial Equipment"
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs text-[#6E6E73] mt-1 leading-relaxed",
														children: cmsForm.aboutMission || "Supplying verified commercial machinery with local parts, field commissioning, and technical back-up across all 10 provinces of Zimbabwe."
													})] }),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "pt-2 border-t border-black/[0.06] space-y-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[10px] font-bold text-[#86868B] uppercase tracking-wider block",
															children: "4 Core Guarantees:"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "space-y-1.5 text-[11px]",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "flex items-start gap-1.5 bg-white p-2 rounded-xl border border-black/[0.04]",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5 text-emerald-600 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "font-medium text-[#1D1D1F]",
																		children: cmsForm.aboutPillar1
																	})]
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "flex items-start gap-1.5 bg-white p-2 rounded-xl border border-black/[0.04]",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5 text-emerald-600 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "font-medium text-[#1D1D1F]",
																		children: cmsForm.aboutPillar2
																	})]
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "flex items-start gap-1.5 bg-white p-2 rounded-xl border border-black/[0.04]",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5 text-emerald-600 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "font-medium text-[#1D1D1F]",
																		children: cmsForm.aboutPillar3
																	})]
																}),
																/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
																	className: "flex items-start gap-1.5 bg-white p-2 rounded-xl border border-black/[0.04]",
																	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5 text-emerald-600 shrink-0 mt-0.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																		className: "font-medium text-[#1D1D1F]",
																		children: cmsForm.aboutPillar4
																	})]
																})
															]
														})]
													})
												]
											}),
											cmsPreviewTab === "divisions" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-2xl bg-[#F5F5F7] p-4 border border-black/[0.06] space-y-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-0.5 text-[10px] font-semibold text-[#1D1D1F] border border-black/[0.05]",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "size-3 text-orange-600" }), "5 Industrial Sectors"]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-[10px] text-[#86868B]",
														children: "Live Headlines"
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "space-y-2 text-xs",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "bg-white p-2.5 rounded-xl border border-black/[0.04]",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-[10px] font-bold text-amber-700 uppercase tracking-wide block",
																children: cmsForm.miningEyebrow || "Mining"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "font-semibold text-[#1D1D1F] mt-0.5",
																children: cmsForm.miningHeadline
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "bg-white p-2.5 rounded-xl border border-black/[0.04]",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-[10px] font-bold text-blue-700 uppercase tracking-wide block",
																children: cmsForm.hireEyebrow || "Hire Fleet"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "font-semibold text-[#1D1D1F] mt-0.5",
																children: cmsForm.hireHeadline
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "bg-white p-2.5 rounded-xl border border-black/[0.04]",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-[10px] font-bold text-emerald-700 uppercase tracking-wide block",
																children: cmsForm.farmingEyebrow || "Farming"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "font-semibold text-[#1D1D1F] mt-0.5",
																children: cmsForm.farmingHeadline
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "bg-white p-2.5 rounded-xl border border-black/[0.04]",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-[10px] font-bold text-zinc-700 uppercase tracking-wide block",
																children: cmsForm.hardwareEyebrow || "Hardware"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "font-semibold text-[#1D1D1F] mt-0.5",
																children: cmsForm.hardwareHeadline
															})]
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "bg-white p-2.5 rounded-xl border border-black/[0.04]",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-[10px] font-bold text-purple-700 uppercase tracking-wide block",
																children: cmsForm.industryEyebrow || "Industry"
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
																className: "font-semibold text-[#1D1D1F] mt-0.5",
																children: cmsForm.industryHeadline
															})]
														})
													]
												})]
											}),
											cmsPreviewTab === "footer" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-2xl bg-[#F5F5F7] p-4 border border-black/[0.06] space-y-3",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center gap-2",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
															src: "/mark.png",
															alt: "Logo",
															className: "size-6 object-contain"
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-xs font-bold text-[#1D1D1F]",
															children: cmsForm.name || "Omnicore Solutions"
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-[11px] leading-relaxed text-[#6E6E73]",
														children: cmsForm.footerAbout || "Direct supply, equipment hire, and on-site plant commissioning from Cranborne, Harare."
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "pt-2 border-t border-black/[0.06] space-y-1",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-[10px] text-[#86868B] font-mono",
															children: cmsForm.footerCopyright || `© 2026 Omnicore Solutions.`
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex gap-2 text-[10px] text-[#0071E3]",
															children: [
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "LinkedIn" }),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Facebook" }),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
																/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: cmsForm.email })
															]
														})]
													})
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "rounded-xl bg-[#F5F5F7] p-3 text-[11px] text-[#6E6E73] space-y-1",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "flex items-center justify-between text-[#1D1D1F] font-semibold text-xs",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Sync Engine" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-emerald-600 font-mono text-[10px]",
															children: "Real-Time Event Broadcast"
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "text-[10px]",
														children: ["Storage Key: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
															className: "font-mono text-[9px] bg-black/[0.04] px-1 py-0.5 rounded",
															children: "omnicore_site_copy_v2"
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "text-[10px]",
														children: ["Connected components: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "font-medium text-[#1D1D1F]",
															children: "Homepage Hero, Yard Badges, Contact Channels, FAB Widget, Site Footer"
														})]
													})
												]
											})
										]
									})
								})]
							})
						]
					}),
					activeTab === "hire" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-semibold tracking-tight text-[#1D1D1F]",
							children: "Active Plant Hire Deployments"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-[#86868B] mt-0.5",
							children: "Heavy machinery operating on contract across Zimbabwe infrastructure, mines, and farms."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid grid-cols-1 md:grid-cols-2 gap-4",
							children: [
								{
									id: "DEP-01",
									plant: "20-Tonne CAT 320D Excavator",
									client: "Great Dyke Quarries Ltd",
									site: "Shamva Gold Claims, Mash Central",
									operator: "Wet Rate (With Certified Operator)",
									rate: "$480 / day",
									status: "Active on Site",
									scheduledReturn: "15 Oct 2026"
								},
								{
									id: "DEP-02",
									plant: "37m Concrete Boom Pump",
									client: "Terracotta Projects",
									site: "Highland Park Ext, Harare",
									operator: "Wet Rate (With Certified Operator)",
									rate: "$1,800 / pour",
									status: "Active on Site",
									scheduledReturn: "27 Sep 2026"
								},
								{
									id: "DEP-03",
									plant: "TLB Backhoe Loader (4x4 Turbo)",
									client: "Zim-Agro Holdings",
									site: "Chinhoyi Farm Block 4",
									operator: "Dry Rate (Machine Only)",
									rate: "$240 / day",
									status: "Active on Site",
									scheduledReturn: "30 Sep 2026"
								},
								{
									id: "DEP-04",
									plant: "Motor Grader (Shantui 160HP)",
									client: "Norton Municipality Subcontractor",
									site: "Norton Ring Road Phase 2",
									operator: "Wet Rate (With Certified Operator)",
									rate: "$520 / day",
									status: "Scheduled Mobilization",
									scheduledReturn: "05 Oct 2026"
								}
							].map((dep) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[11px] text-[#86868B]",
											children: dep.id
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "rounded-full bg-[#E8F8EE] px-2.5 py-0.5 text-[10px] font-semibold text-[#1B833E]",
											children: dep.status
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-base font-semibold text-[#1D1D1F]",
											children: dep.plant
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-[#6E6E73] mt-0.5",
											children: ["Client: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
												className: "text-[#1D1D1F]",
												children: dep.client
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-[#86868B] mt-0.5",
											children: ["📍 ", dep.site]
										})
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "grid grid-cols-2 gap-2 rounded-xl bg-[#F5F5F7] p-3 text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] text-[#86868B] block uppercase",
											children: "Billing Rate"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-[#1D1D1F]",
											children: dep.rate
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[10px] text-[#86868B] block uppercase",
											children: "Operator"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[#1D1D1F] truncate block",
											children: dep.operator
										})] })]
									})
								]
							}, dep.id))
						})]
					}),
					activeTab === "recycle" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-xl font-semibold tracking-tight text-[#1D1D1F]",
									children: "Recycle Bin"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 text-xs text-[#86868B]",
									children: "Clients and machines removed from the backoffice. Restore them, or delete forever."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									disabled: recycleBin.length === 0,
									onClick: () => setPendingAction({ type: "empty-bin" }),
									className: "inline-flex h-11 items-center gap-1.5 rounded-full border border-red-200 bg-white px-4 text-xs font-semibold text-red-600 hover:bg-red-50 disabled:pointer-events-none disabled:opacity-40",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" }), "Empty recycle bin"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex flex-wrap items-center gap-1.5",
									children: [
										{
											id: "all",
											label: "All",
											count: recycleBin.length
										},
										{
											id: "client",
											label: "Clients",
											count: recycleBin.filter((i) => i.kind === "client").length
										},
										{
											id: "product",
											label: "Machines",
											count: recycleBin.filter((i) => i.kind === "product").length
										}
									].map((f) => {
										const active = recycleFilter === f.id;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setRecycleFilter(f.id),
											className: `inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all ${active ? "bg-[#1D1D1F] text-white shadow-xs" : "border border-black/[0.06] bg-white text-[#6E6E73] hover:text-[#1D1D1F]"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `text-[10px] ${active ? "text-white/80" : "text-[#86868B]"}`,
												children: f.count
											})]
										}, f.id);
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-[#86868B]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "text",
										value: recycleSearch,
										onChange: (e) => setRecycleSearch(e.target.value),
										placeholder: "Search recycle bin...",
										className: "h-9 w-full rounded-full border border-black/[0.08] bg-white pl-9 pr-3 text-xs text-[#1D1D1F] placeholder-[#86868B] shadow-2xs focus:outline-none sm:w-64"
									})]
								})]
							}),
							selectedBinIds.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center justify-between gap-2 rounded-2xl bg-[#1D1D1F] px-4 py-2.5 text-white shadow-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-xs font-semibold",
									children: [
										selectedBinIds.length,
										" record",
										selectedBinIds.length === 1 ? "" : "s",
										" selected"
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setSelectedBinIds([]),
											className: "rounded-full px-3 py-1.5 text-xs font-medium text-white/80 hover:bg-white/10",
											children: "Clear"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setPendingAction({
												type: "restore",
												binIds: selectedBinIds
											}),
											className: "inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-[#1D1D1F]",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchiveRestore, { className: "size-3.5" }), "Restore"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setPendingAction({
												type: "destroy",
												binIds: selectedBinIds
											}),
											className: "inline-flex items-center gap-1.5 rounded-full bg-red-500 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-red-400",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" }), "Delete forever"]
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_2px_16px_rgba(0,0,0,0.03)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "overflow-x-auto",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
										className: "w-full text-left text-xs",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
											className: "border-b border-black/[0.06] bg-[#FBFBFC] text-[11px] font-semibold uppercase tracking-wider text-[#86868B]",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "w-10 py-3 pl-4 pr-1",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowCheck, {
														label: "Select all visible recycle bin records",
														checked: filteredRecycleItems.length > 0 && filteredRecycleItems.every((i) => selectedBinIds.includes(i.binId)),
														indeterminate: filteredRecycleItems.some((i) => selectedBinIds.includes(i.binId)) && !filteredRecycleItems.every((i) => selectedBinIds.includes(i.binId)),
														onChange: (next) => {
															const ids = filteredRecycleItems.map((i) => i.binId);
															setSelectedBinIds((prev) => next ? [.../* @__PURE__ */ new Set([...prev, ...ids])] : prev.filter((id) => !ids.includes(id)));
														}
													})
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "px-4 py-3",
													children: "Record"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "px-3 py-3",
													children: "Type"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "px-3 py-3",
													children: "Deleted"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													className: "px-3 py-3 text-right",
													children: "Actions"
												})
											]
										}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
											className: "divide-y divide-black/[0.04]",
											children: filteredRecycleItems.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
												colSpan: 5,
												className: "py-16 text-center",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "mx-auto flex max-w-sm flex-col items-center gap-2",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
															className: "flex size-12 items-center justify-center rounded-2xl bg-black/[0.04] text-[#86868B]",
															children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Recycle, { className: "size-5" })
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-sm font-semibold text-[#1D1D1F]",
															children: "Recycle bin is empty"
														}),
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
															className: "text-xs text-[#86868B]",
															children: "Deleted clients and machines will appear here so you can restore them."
														})
													]
												})
											}) }) : filteredRecycleItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
												className: "hover:bg-black/[0.015]",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "w-10 py-3 pl-4 pr-1",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowCheck, {
															label: `Select ${item.title}`,
															checked: selectedBinIds.includes(item.binId),
															onChange: (next) => setSelectedBinIds((prev) => next ? [...prev, item.binId] : prev.filter((id) => id !== item.binId))
														})
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
														className: "px-4 py-3",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "block font-semibold text-[#1D1D1F]",
															children: item.title
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "block truncate text-[11px] text-[#6E6E73]",
															children: item.subtitle
														})]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "px-3 py-3",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "rounded-full bg-black/[0.04] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[#6E6E73]",
															children: item.kind === "client" ? "Client" : "Machine"
														})
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "px-3 py-3 text-[#6E6E73]",
														children: formatBinDate(item.deletedAt)
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
														className: "px-3 py-3 text-right",
														children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center justify-end gap-1",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
																type: "button",
																onClick: () => setPendingAction({
																	type: "restore",
																	binIds: [item.binId]
																}),
																className: "inline-flex h-11 items-center gap-1 rounded-full border border-black/[0.08] bg-white px-3 text-xs font-medium text-[#1D1D1F] hover:bg-[#F5F5F7]",
																children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArchiveRestore, { className: "size-3.5 text-[#6E6E73]" }), "Restore"]
															}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
																type: "button",
																onClick: () => setPendingAction({
																	type: "destroy",
																	binIds: [item.binId]
																}),
																className: "inline-flex size-11 items-center justify-center rounded-full border border-red-200 bg-white text-red-600 hover:bg-red-50",
																title: "Delete forever",
																children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
															})]
														})
													})
												]
											}, item.binId))
										})]
									})
								})
							})
						]
					})
				]
			}),
			pendingConfirm && pendingAction && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmModal, {
				title: pendingConfirm.title,
				body: pendingConfirm.body,
				confirmLabel: pendingConfirm.confirmLabel,
				tone: pendingConfirm.tone,
				onCancel: () => setPendingAction(null),
				onConfirm: runPendingAction
			})
		]
	});
}
var $$splitComponentImporter$7 = () => import("./catalogue-D3ofJ8nG.mjs");
var Route$7 = createFileRoute("/catalogue")({
	validateSearch: (search) => ({
		category: isCategory(search.category) ? search.category : void 0,
		intent: search.intent === "sale" || search.intent === "hire" ? search.intent : void 0,
		q: typeof search.q === "string" && search.q.length > 0 ? search.q : void 0
	}),
	head: () => ({ meta: [{ title: "Equipment Catalogue | Sale & Hire Zimbabwe | Omnicore Solutions" }, {
		name: "description",
		content: "Searchable catalogue of mining, construction, farming and industrial machinery for sale and hire in Zimbabwe. Real stock at Cranborne yard, Harare."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
function isCategory(value) {
	return services.some((service) => service.slug === value);
}
var $$splitComponentImporter$6 = () => import("./contact-DM1TJgxL.mjs");
var Route$6 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact Harare Machinery Desk | Omnicore Solutions" }, {
		name: "description",
		content: "Visit Omnicore Solutions at 115 Chiremba Road, Cranborne, Harare. Direct WhatsApp quoting +263 77 733 4569. Machinery sales and plant hire nationwide."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./projects-CgWU73oa.mjs");
var Route$5 = createFileRoute("/projects")({
	head: () => ({ meta: [{ title: "Site Deployments & Case Studies | Omnicore Solutions Zimbabwe" }, {
		name: "description",
		content: "Gold circuits, concrete pours, on-farm feed lines and fence manufacturing — Omnicore machinery operational across Zimbabwe."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./quote-DGuWEBDS.mjs");
var Route$4 = createFileRoute("/quote")({
	head: () => ({ meta: [{ title: "Get a Machinery Quote | Omnicore Solutions Harare" }, {
		name: "description",
		content: "Request a machinery quote from Omnicore Solutions. Direct quoting for heavy plant, mining circuits, concrete pump hire and agricultural mills across Zimbabwe."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./insights-CR5glJMs.mjs");
var Route$3 = createFileRoute("/insights/")({
	head: () => ({ meta: [{ title: "Technical Insights & Machinery Economics | Omnicore Solutions Zimbabwe" }, {
		name: "description",
		content: "Practical engineering notes on wet vs dry plant hire, commercial hammer mills, gold circuit payback and rainy-season site planning in Zimbabwe."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("../_slug-h1ba-nfo.mjs");
var Route$2 = createFileRoute("/insights/$slug")({
	loader: ({ params }) => {
		const post = getInsight(params.slug);
		if (!post) throw notFound();
		return { post };
	},
	head: ({ loaderData }) => ({ meta: [{ title: loaderData?.post.seoTitle ?? "Insights | Omnicore Solutions" }, {
		name: "description",
		content: loaderData?.post.description ?? ""
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./services-CgqhaaE_.mjs");
var Route$1 = createFileRoute("/services/")({
	head: () => ({ meta: [{ title: "Specialized Machinery Lines | Omnicore Solutions Zimbabwe" }, {
		name: "description",
		content: "Five specialized machinery lines from Harare: mining equipment, hardware & construction, machinery hire, farming plant, and industrial manufacturing."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("../_slug-DlCMh6vX.mjs");
var Route = createFileRoute("/services/$slug")({
	loader: ({ params }) => {
		const service = getService(params.slug);
		if (!service) throw notFound();
		return { service };
	},
	head: ({ loaderData }) => ({ meta: [{ title: loaderData?.service.seoTitle ?? "Omnicore Solutions" }, {
		name: "description",
		content: loaderData?.service.seoDescription ?? ""
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$9.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$10
});
var AdminRoute = Route$8.update({
	id: "/admin",
	path: "/admin",
	getParentRoute: () => Route$10
});
var CatalogueRoute = Route$7.update({
	id: "/catalogue",
	path: "/catalogue",
	getParentRoute: () => Route$10
});
var ContactRoute = Route$6.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$10
});
var ProjectsRoute = Route$5.update({
	id: "/projects",
	path: "/projects",
	getParentRoute: () => Route$10
});
var QuoteRoute = Route$4.update({
	id: "/quote",
	path: "/quote",
	getParentRoute: () => Route$10
});
var InsightsIndexRoute = Route$3.update({
	id: "/insights/",
	path: "/insights/",
	getParentRoute: () => Route$10
});
var InsightsSlugRoute = Route$2.update({
	id: "/insights/$slug",
	path: "/insights/$slug",
	getParentRoute: () => Route$10
});
var ServicesIndexRoute = Route$1.update({
	id: "/services/",
	path: "/services/",
	getParentRoute: () => Route$10
});
var rootRouteChildren = {
	IndexRoute,
	AdminRoute,
	CatalogueRoute,
	ContactRoute,
	ProjectsRoute,
	QuoteRoute,
	InsightsSlugRoute,
	ServicesSlugRoute: Route.update({
		id: "/services/$slug",
		path: "/services/$slug",
		getParentRoute: () => Route$10
	}),
	InsightsIndexRoute,
	ServicesIndexRoute
};
var routeTree = Route$10._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		defaultErrorComponent: AppErrorComponent,
		defaultNotFoundComponent: NotFound
	});
}
//#endregion
export { getStoredEquipment as a, GmailBadge as c, WhatsAppBadge as d, WhatsAppIcon as f, Route$7 as i, GoogleMapsBadge as l, Route as n, getStoredSiteCopy as o, Route$2 as r, useSiteCopy as s, router_exports as t, PhoneBadge as u };
