import { i as __toESM } from "../_runtime.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { d as whatsappUrl, i as getService, l as services, n as equipment, r as getInsight, s as nav, t as cn, u as site } from "./site-NmzgmCl5.mjs";
import { l as require_react, s as Slot } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, q as notFound, v as createFileRoute, x as useRouter, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as ChevronsRight, B as ArchiveRestore, C as Globe, D as Columns2, E as ExternalLink, F as Check, I as Building2, L as ArrowUpRight, M as ChevronRight, N as ChevronLeft, O as Clock, S as Mail, T as Eye, _ as PenLine, a as Upload, b as Maximize2, c as Trash2, d as Search, f as RotateCcw, h as Phone, i as Users, j as ChevronsLeft, k as CircleCheck, l as Sparkles, m as Plus, n as X, o as Truck, p as Recycle, s as TriangleAlert, t as ZoomIn, v as Package, w as FileText, x as MapPin, y as Menu } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-D8H3TywC.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
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
var _jsxFileName$10 = "/app/applet/src/lib/error-component.tsx";
var FALLBACK_MESSAGE = "An unexpected error occurred. Try reloading the page.";
function errorMessage(error) {
	if (error instanceof Error && error.message) return error.message;
	if (typeof error === "string" && error) return error;
	return FALLBACK_MESSAGE;
}
function AppErrorComponent({ error }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
		className: "flex min-h-screen flex-col items-center justify-center gap-3 px-6 text-center bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
				className: "text-red-500",
				"aria-hidden": "true",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TriangleAlert, {
					className: "size-10",
					strokeWidth: 2
				}, void 0, false, {
					fileName: _jsxFileName$10,
					lineNumber: 21,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$10,
				lineNumber: 20,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}, void 0, false, {
				fileName: _jsxFileName$10,
				lineNumber: 23,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			}, void 0, false, {
				fileName: _jsxFileName$10,
				lineNumber: 24,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$10,
		lineNumber: 14,
		columnNumber: 5
	}, this);
}
var _jsxFileName$9 = "/app/applet/src/components/ui/button.tsx";
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		...props
	}, void 0, false, {
		fileName: _jsxFileName$9,
		lineNumber: 43,
		columnNumber: 5
	}, this);
}
var _jsxFileName$8 = "/app/applet/src/components/not-found.tsx";
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
		className: "mx-auto flex min-h-[70vh] max-w-lg flex-col items-center justify-center px-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase",
				children: "404"
			}, void 0, false, {
				fileName: _jsxFileName$8,
				lineNumber: 7,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "mt-4 text-4xl font-semibold tracking-tight",
				children: "This page is not in the yard."
			}, void 0, false, {
				fileName: _jsxFileName$8,
				lineNumber: 10,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-3 text-muted-foreground",
				children: "The machine you are looking for may have moved. Try the catalogue, or talk to us on WhatsApp."
			}, void 0, false, {
				fileName: _jsxFileName$8,
				lineNumber: 11,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-8 flex flex-wrap items-center justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						children: "Home"
					}, void 0, false, {
						fileName: _jsxFileName$8,
						lineNumber: 16,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$8,
					lineNumber: 15,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/catalogue",
						children: "Catalogue"
					}, void 0, false, {
						fileName: _jsxFileName$8,
						lineNumber: 19,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$8,
					lineNumber: 18,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$8,
				lineNumber: 14,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$8,
		lineNumber: 6,
		columnNumber: 5
	}, this);
}
var _jsxFileName$7 = "/app/applet/src/lib/auth/provider.tsx";
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children }, void 0, false, {
		fileName: _jsxFileName$7,
		lineNumber: 14,
		columnNumber: 10
	}, this);
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
var _jsxFileName$6 = "/app/applet/src/components/ui/official-badges.tsx";
/**
* Authentic WhatsApp Icon with speech bubble and phone handset.
* Uses a refined, natural WhatsApp deep-forest tone (#128C7E / #25D366 balanced)
* avoiding harsh radioactive neon.
*/
function WhatsAppIcon({ className = "size-5" }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
		className,
		viewBox: "0 0 24 24",
		"aria-hidden": "true",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
			fill: "#25D366",
			d: "M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.82 12.04 21.82C17.5 21.82 21.95 17.37 21.95 11.91C21.95 6.45 17.5 2 12.04 2Z"
		}, void 0, false, {
			fileName: _jsxFileName$6,
			lineNumber: 18,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
			fill: "#FFFFFF",
			d: "M17.47 14.38C17.17 14.23 15.71 13.51 15.44 13.41C15.17 13.31 14.97 13.26 14.77 13.56C14.57 13.86 14 14.53 13.83 14.73C13.66 14.93 13.49 14.95 13.19 14.8C12.89 14.65 11.93 14.34 10.8 13.33C9.92 12.54 9.32 11.57 9.15 11.27C8.98 10.97 9.13 10.81 9.28 10.66C9.41 10.53 9.58 10.31 9.73 10.14C9.88 9.97 9.93 9.84 10.03 9.64C10.13 9.44 10.08 9.27 10 9.12C9.93 8.97 9.33 7.51 9.09 6.91C8.84 6.33 8.6 6.41 8.42 6.4C8.24 6.39 8.04 6.39 7.84 6.39C7.64 6.39 7.32 6.46 7.05 6.76C6.78 7.06 6.01 7.78 6.01 9.24C6.01 10.7 7.08 12.11 7.22 12.31C7.37 12.51 9.32 15.51 12.3 16.8C13.01 17.11 13.56 17.29 13.99 17.43C14.7 17.65 15.35 17.62 15.86 17.55C16.43 17.46 17.62 16.83 17.87 16.13C18.12 15.44 18.12 14.84 18.04 14.72C17.97 14.6 17.77 14.53 17.47 14.38Z"
		}, void 0, false, {
			fileName: _jsxFileName$6,
			lineNumber: 23,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$6,
		lineNumber: 16,
		columnNumber: 5
	}, this);
}
/**
* Natural, balanced WhatsApp Badge:
* Uses natural forest-emerald tones (#1f9d55 to #128C7E) with subtle shadow
* so it is clearly recognizable as WhatsApp without being harsh neon or washed out.
*/
function WhatsAppBadge({ className, label = "WhatsApp", compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: cn("inline-flex items-center gap-1.5 rounded-full font-semibold transition-all duration-200 shadow-2xs", "bg-[#1fa855] text-white hover:bg-[#1b934b] active:scale-95 border border-[#1b934b]", compact ? "px-2.5 py-1 text-xs" : "px-3.5 py-1.5 text-xs sm:text-sm", className),
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WhatsAppIcon, { className: compact ? "size-3.5 shrink-0" : "size-4 shrink-0" }, void 0, false, {
			fileName: _jsxFileName$6,
			lineNumber: 46,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "tracking-tight",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName$6,
			lineNumber: 47,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$6,
		lineNumber: 38,
		columnNumber: 5
	}, this);
}
/** Official Google Maps Badge with genuine 4-color pin and clean card pill */
function GoogleMapsBadge({ className, label = "Google Maps", compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: cn("inline-flex items-center gap-2 rounded-full font-medium transition-all duration-200 shadow-2xs", "bg-white text-[#3c4043] border border-[#dadce0] hover:bg-[#f8f9fa] hover:border-[#bdc1c6] active:scale-95", compact ? "px-3 py-1 text-xs" : "px-4 py-2 text-xs sm:text-sm", className),
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
			className: "size-4 shrink-0",
			viewBox: "0 0 24 24",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
					fill: "#4285F4",
					d: "M12 2C8.13 2 5 5.13 5 9c0 4.17 4.42 9.92 6.24 12.11.4.48 1.12.48 1.52 0C14.58 18.92 19 13.17 19 9c0-3.87-3.13-7-7-7z"
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 64,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
					fill: "#EA4335",
					d: "M12 2C8.13 2 5 5.13 5 9c0 1.74.63 3.34 1.69 4.58L12 6.5l5.31 7.08C18.37 12.34 19 10.74 19 9c0-3.87-3.13-7-7-7z"
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 68,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
					fill: "#FBBC04",
					d: "M6.69 13.58C7.94 15.05 9.77 17.58 12 20.5c2.23-2.92 4.06-5.45 5.31-6.92L12 6.5l-5.31 7.08z"
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 72,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
					cx: "12",
					cy: "9",
					r: "2.5",
					fill: "#34A853"
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 76,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$6,
			lineNumber: 63,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: label }, void 0, false, {
			fileName: _jsxFileName$6,
			lineNumber: 78,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$6,
		lineNumber: 55,
		columnNumber: 5
	}, this);
}
/** Official Gmail Badge with authentic 4-color M logo and crisp card pill */
function GmailBadge({ className, label = "Email Desk", compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: cn("inline-flex items-center gap-2 rounded-full font-medium transition-all duration-200 shadow-2xs", "bg-white text-[#3c4043] border border-[#dadce0] hover:bg-[#f8f9fa] hover:border-[#bdc1c6] active:scale-95", compact ? "px-3 py-1 text-xs" : "px-4 py-2 text-xs sm:text-sm", className),
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
			className: "size-4 shrink-0",
			viewBox: "0 0 24 24",
			"aria-hidden": "true",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
					fill: "#4285F4",
					d: "M20 18h-2V9.5L12 14 6 9.5V18H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h1.5L12 9l6.5-5H20c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2z"
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 95,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
					fill: "#EA4335",
					d: "M18.5 4H20c1.1 0 2 .9 2 2v2.5L12 14 2 8.5V6c0-1.1.9-2 2-2h1.5L12 9l6.5-5z"
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 99,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
					fill: "#FBBC04",
					d: "M2 6v2.5L12 14 22 8.5V6H2z",
					opacity: "0.1"
				}, void 0, false, {
					fileName: _jsxFileName$6,
					lineNumber: 100,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$6,
			lineNumber: 94,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: label }, void 0, false, {
			fileName: _jsxFileName$6,
			lineNumber: 102,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$6,
		lineNumber: 86,
		columnNumber: 5
	}, this);
}
/** Official Phone Calling Badge with authentic telecom blue and handset */
function PhoneBadge({ className, label = "Call Desk", compact = false }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
		className: cn("inline-flex items-center gap-2 rounded-full font-medium transition-all duration-200 shadow-2xs", "bg-white text-[#1a73e8] border border-[#dadce0] hover:bg-[#f8f9fa] hover:border-[#bdc1c6] active:scale-95", compact ? "px-3 py-1 text-xs" : "px-4 py-2 text-xs sm:text-sm", className),
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
			className: "size-4 fill-[#1a73e8] shrink-0",
			viewBox: "0 0 24 24",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", { d: "M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.28-.28.37-.68.25-1.02A11.36 11.36 0 0 1 8.56 4c0-.55-.45-1-1-1H4.01c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.62c0-.55-.45-1-1-1z" }, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 119,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$6,
			lineNumber: 118,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "text-[#3c4043]",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName$6,
			lineNumber: 121,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$6,
		lineNumber: 110,
		columnNumber: 5
	}, this);
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
var _jsxFileName$5 = "/app/applet/src/components/layout/site-footer.tsx";
function SiteFooter() {
	const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
	const copy = useSiteCopy();
	const phoneDisplay = copy.primaryPhone || site.phoneDisplay;
	const phoneTel = copy.primaryPhoneTel || site.phoneTel;
	const email = copy.email || site.email;
	const brandName = copy.name || site.name;
	const mapsUrl = copy.googleMapsUrl || site.address.maps;
	const whatsappNum = copy.whatsappNumber || site.whatsappNumber;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
		className: "border-t border-black/[0.06] bg-[#f5f5f7] text-[#86868b]",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "border-b border-black/[0.06] py-8 px-4 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs font-semibold tracking-wider text-[#1d1d1f] uppercase",
						children: ["Harare Machinery Desk · ", copy.yardAddressLine2 || "Cranborne Yard"]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 23,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-0.5 text-xs text-[#86868b]",
						children: copy.companyReg || "Direct supply, plant hire, and on-site commissioning across Zimbabwe."
					}, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 26,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 22,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: `https://wa.me/${whatsappNum}?text=${encodeURIComponent(copy.whatsappMessage || "Hello Omnicore — I need a machinery quote.")}`,
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WhatsAppBadge, { label: `WhatsApp ${phoneDisplay}` }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 32,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 31,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: mapsUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GoogleMapsBadge, { label: "View Yard on Maps" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 35,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 34,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: `mailto:${email}`,
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GmailBadge, { label: "Email Desk" }, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 38,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 37,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 30,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 21,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 20,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "md:col-span-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/",
								className: "inline-flex items-center gap-2.5 group",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
									src: "/mark.png",
									alt: `${brandName} Logo`,
									className: "size-8 object-contain transition-transform duration-200 group-hover:scale-105"
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 48,
									columnNumber: 13
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-sm font-semibold tracking-tight text-[#1d1d1f]",
									children: brandName
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 53,
									columnNumber: 13
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 47,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-3 text-xs leading-relaxed text-[#86868b]",
								children: copy.footerAbout || "Direct supply, equipment hire, and on-site plant commissioning from Cranborne, Harare — delivering to claims, farms and project sites nationwide."
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 57,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-4 flex items-center gap-3 text-xs",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
										href: copy.linkedinUrl || site.linkedin,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "text-[#6e6e73] hover:text-[#1d1d1f] transition-colors",
										children: "LinkedIn"
									}, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 62,
										columnNumber: 13
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "·" }, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 70,
										columnNumber: 13
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
										href: copy.facebookUrl || site.facebook,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "text-[#6e6e73] hover:text-[#1d1d1f] transition-colors",
										children: "Facebook"
									}, void 0, false, {
										fileName: _jsxFileName$5,
										lineNumber: 71,
										columnNumber: 13
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 61,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 46,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs font-semibold tracking-wider text-[#1d1d1f] uppercase",
						children: "Specialized Divisions"
					}, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 84,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
						className: "mt-3 space-y-2 text-xs",
						children: services.map((service) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/services/$slug",
							params: { slug: service.slug },
							className: "text-[#6e6e73] transition-colors hover:text-[#1d1d1f]",
							children: service.title
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 90,
							columnNumber: 17
						}, this) }, service.slug, false, {
							fileName: _jsxFileName$5,
							lineNumber: 89,
							columnNumber: 15
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 87,
						columnNumber: 11
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 83,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs font-semibold tracking-wider text-[#1d1d1f] uppercase",
						children: "Machinery & Fleet"
					}, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 104,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", {
						className: "mt-3 space-y-2 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/catalogue",
								className: "text-[#6e6e73] hover:text-[#1d1d1f] transition-colors",
								children: "Complete Catalogue"
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 109,
								columnNumber: 15
							}, this) }, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 108,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/services/$slug",
								params: { slug: "hire" },
								className: "text-[#6e6e73] hover:text-[#1d1d1f] transition-colors",
								children: "Excavator & Plant Hire Rates"
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 114,
								columnNumber: 15
							}, this) }, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 113,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/projects",
								className: "text-[#6e6e73] hover:text-[#1d1d1f] transition-colors",
								children: "Site Deployments"
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 123,
								columnNumber: 15
							}, this) }, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 122,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/insights",
								className: "text-[#6e6e73] hover:text-[#1d1d1f] transition-colors",
								children: "Field Economics & Guides"
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 128,
								columnNumber: 15
							}, this) }, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 127,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/quote",
								className: "text-[#6e6e73] hover:text-[#1d1d1f] transition-colors",
								children: "Request Tender Rate"
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 133,
								columnNumber: 15
							}, this) }, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 132,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 107,
						columnNumber: 11
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 103,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs font-semibold tracking-wider text-[#1d1d1f] uppercase",
						children: "Cranborne Yard"
					}, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 142,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-3 space-y-2 text-xs text-[#86868b]",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-[#1d1d1f] font-medium",
								children: [
									copy.yardAddressLine1 || site.address.line1,
									", ",
									copy.yardAddressLine2 || site.address.line2
								]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 146,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
								"Mon–Fri: ",
								copy.hoursWeekday || "08:00–17:00",
								" · Sat: ",
								copy.hoursSaturday || "08:00–13:00"
							] }, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 149,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "pt-1 flex flex-col gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: `tel:${phoneTel}`,
									className: "text-[#1d1d1f] hover:underline",
									children: phoneDisplay
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 153,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: `mailto:${email}`,
									className: "text-[#1d1d1f] hover:underline",
									children: email
								}, void 0, false, {
									fileName: _jsxFileName$5,
									lineNumber: 156,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$5,
								lineNumber: 152,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 145,
						columnNumber: 11
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 141,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$5,
				lineNumber: 44,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "border-t border-black/[0.04] py-6 text-center text-[11px] text-[#86868b]",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 sm:flex-row sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: copy.footerCopyright || `© ${currentYear} ${brandName}. All rights reserved.` }, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 166,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
						copy.shortName || site.shortName,
						" · Cranborne Yard, ",
						copy.yardCity || "Harare"
					] }, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 167,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 165,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$5,
				lineNumber: 164,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$5,
		lineNumber: 18,
		columnNumber: 5
	}, this);
}
var _jsxFileName$4 = "/app/applet/src/components/layout/site-header.tsx";
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
		className: "sticky top-0 z-50 border-b border-border bg-paper/85 backdrop-blur-2xl transition-all",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mx-auto flex h-14 sm:h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
					to: "/",
					className: "group flex items-center gap-2.5 py-1",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
						src: "/mark.png",
						alt: "Omnicore Solutions",
						className: "size-8 object-contain transition-transform duration-200 group-hover:scale-105"
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 21,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-col",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[15px] font-semibold tracking-tight text-[#1d1d1f]",
							children: site.shortName
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 27,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 26,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$4,
					lineNumber: 16,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
					className: "hidden items-center gap-1 md:flex",
					children: nav.map((item) => {
						const active = item.href === "/services" ? pathname === "/services" || pathname.startsWith("/services/") && pathname !== "/services/hire" : pathname === item.href || pathname.startsWith(`${item.href}/`);
						const className = cn("rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-150", active ? "text-[#1d1d1f] font-semibold bg-black/[0.05]" : "text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-black/[0.03]");
						if (item.href === "/services/hire") return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/services/$slug",
							params: { slug: "hire" },
							className,
							children: item.label
						}, item.href, false, {
							fileName: _jsxFileName$4,
							lineNumber: 49,
							columnNumber: 17
						}, this);
						return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: item.href,
							className,
							children: item.label
						}, item.href, false, {
							fileName: _jsxFileName$4,
							lineNumber: 60,
							columnNumber: 15
						}, this);
					})
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 34,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/admin",
							className: "inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-amber-500/10 px-3 py-1.5 text-xs font-semibold text-amber-900 hover:bg-amber-500/20 transition-all active:scale-95 shadow-2xs",
							title: "Access Technical Desk & Operations Backoffice",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-amber-600 animate-pulse" }, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 74,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Backoffice" }, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 75,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 69,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: whatsappUrl("Hello Omnicore Harare Desk — I need a quote."),
							className: "hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#1fa855] px-3.5 py-1.5 text-xs font-semibold text-white shadow-2xs transition-all hover:bg-[#1b934b] active:scale-95",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WhatsAppIcon, { className: "size-3.5 shrink-0" }, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 82,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Harare Desk" }, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 83,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 78,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/quote",
							className: "inline-flex items-center gap-1 rounded-full bg-[#1d1d1f] px-4 py-1.5 text-xs font-medium text-white shadow-xs transition-all hover:bg-[#333336] active:scale-95",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Get Quote" }, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 90,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, { className: "size-3 text-white/70" }, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 91,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$4,
							lineNumber: 86,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							className: "md:hidden flex size-9 items-center justify-center rounded-full text-[#1d1d1f] hover:bg-black/[0.05] transition-colors",
							"aria-label": open ? "Close menu" : "Open menu",
							onClick: () => setOpen((v) => !v),
							children: open ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 100,
								columnNumber: 21
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Menu, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 100,
								columnNumber: 48
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 94,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$4,
					lineNumber: 68,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$4,
			lineNumber: 14,
			columnNumber: 7
		}, this), open ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "border-t border-black/[0.06] bg-[#fbfbfd]/95 backdrop-blur-2xl px-5 py-5 md:hidden shadow-lg animate-in fade-in duration-200",
			children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("nav", {
				className: "flex flex-col space-y-1",
				children: [
					nav.map((item) => item.href === "/services/hire" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/services/$slug",
						params: { slug: "hire" },
						onClick: () => setOpen(false),
						className: "rounded-xl px-3 py-2 text-sm font-medium text-[#1d1d1f] hover:bg-black/[0.04]",
						children: item.label
					}, item.href, false, {
						fileName: _jsxFileName$4,
						lineNumber: 111,
						columnNumber: 17
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: item.href,
						onClick: () => setOpen(false),
						className: "rounded-xl px-3 py-2 text-sm font-medium text-[#1d1d1f] hover:bg-black/[0.04]",
						children: item.label
					}, item.href, false, {
						fileName: _jsxFileName$4,
						lineNumber: 121,
						columnNumber: 17
					}, this)),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "pt-3 pb-1",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "px-3 text-[11px] font-medium tracking-wider text-[#86868b] uppercase",
							children: "Specialized Divisions"
						}, void 0, false, {
							fileName: _jsxFileName$4,
							lineNumber: 133,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 132,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid grid-cols-1 gap-1",
						children: services.map((service) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/services/$slug",
							params: { slug: service.slug },
							onClick: () => setOpen(false),
							className: "flex items-center justify-between rounded-xl px-3 py-2 text-xs font-medium text-[#6e6e73] hover:bg-black/[0.04] hover:text-[#1d1d1f]",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: service.title }, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 147,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[10px] text-[#86868b]",
								children: service.eyebrow
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 148,
								columnNumber: 19
							}, this)]
						}, service.slug, true, {
							fileName: _jsxFileName$4,
							lineNumber: 140,
							columnNumber: 17
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName$4,
						lineNumber: 138,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "pt-4 flex flex-col gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/admin",
								onClick: () => setOpen(false),
								className: "flex items-center justify-center gap-2 rounded-full bg-amber-500/20 py-2.5 text-xs font-semibold text-amber-950 border border-amber-500/40",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-2 rounded-full bg-amber-600 animate-pulse" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 159,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Launch Admin Backoffice" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 160,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 154,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/quote",
								onClick: () => setOpen(false),
								className: "flex items-center justify-center rounded-full bg-[#1d1d1f] py-2.5 text-xs font-medium text-white shadow-xs",
								children: "Request a Machine Quote"
							}, void 0, false, {
								fileName: _jsxFileName$4,
								lineNumber: 162,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: whatsappUrl("Hello Omnicore Harare Desk — I need an equipment quote."),
								className: "flex items-center justify-center gap-1.5 rounded-full bg-[#25D366]/10 py-2.5 text-xs font-medium text-[#0f5132] border border-[#25D366]/20",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-[#25D366]" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 173,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Chat on WhatsApp" }, void 0, false, {
									fileName: _jsxFileName$4,
									lineNumber: 174,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$4,
								lineNumber: 169,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$4,
						lineNumber: 153,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$4,
				lineNumber: 108,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$4,
			lineNumber: 107,
			columnNumber: 9
		}, this) : null]
	}, void 0, true, {
		fileName: _jsxFileName$4,
		lineNumber: 13,
		columnNumber: 5
	}, this);
}
var _jsxFileName$3 = "/app/applet/src/components/layout/whatsapp-fab.tsx";
function WhatsappFab() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const copy = useSiteCopy();
	if (pathname === "/quote" || pathname === "/contact") return null;
	const num = copy.whatsappNumber || site.whatsappNumber;
	const msg = copy.whatsappMessage || "Hello Omnicore Harare Desk — I would like an equipment quote.";
	const url = `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("aside", {
		"aria-label": "WhatsApp quick chat",
		className: "fixed right-5 bottom-5 z-40 sm:right-7 sm:bottom-7",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
			href: url,
			"aria-label": "Chat on WhatsApp with Harare Desk",
			className: "group relative flex items-center gap-3 rounded-full bg-[#1fa855] px-4 py-2.5 text-white shadow-[0_6px_20px_rgba(31,168,85,0.35)] border border-[#1b934b] transition-all duration-300 hover:scale-105 hover:bg-[#1b934b] active:scale-95",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WhatsAppIcon, { className: "size-5 shrink-0 text-white" }, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 22,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-col text-left",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "text-[12px] font-bold text-white tracking-tight leading-none",
					children: "WhatsApp Desk"
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 24,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "text-[10px] text-emerald-100 font-medium leading-tight mt-0.5",
					children: copy.yardAddressLine2 || "Cranborne · Harare"
				}, void 0, false, {
					fileName: _jsxFileName$3,
					lineNumber: 27,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$3,
				lineNumber: 23,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$3,
			lineNumber: 17,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 16,
		columnNumber: 5
	}, this);
}
var _jsxFileName$2 = "/app/applet/src/components/layout/site-shell.tsx";
function SiteShell({ children }) {
	if (useRouterState({ select: (s) => s.location.pathname }).startsWith("/admin")) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children }, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 11,
		columnNumber: 12
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-svh flex-col bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SiteHeader, {}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 16,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex-1 pb-16",
				children
			}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 17,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SiteFooter, {}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 18,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WhatsappFab, {}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 19,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 15,
		columnNumber: 5
	}, this);
}
var styles_default = "/assets/styles-Pql7Jh86.css";
var _jsxFileName$1 = "/app/applet/src/routes/__root.tsx";
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
		lang: "en",
		className: "antialiased",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(HeadContent, {}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 43,
			columnNumber: 9
		}, this) }, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 42,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PreviewHostBridge, {}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 46,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 49,
				columnNumber: 13
			}, this) }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 48,
				columnNumber: 11
			}, this) }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 47,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 52,
				columnNumber: 9
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 45,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 41,
		columnNumber: 5
	}, this);
}
var $$splitComponentImporter$8 = () => import("./routes-jXo_9lLr.mjs");
var Route$9 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "Heavy Machinery & Plant Zimbabwe | Omnicore Solutions Harare" }, {
		name: "description",
		content: "Direct supply, plant hire, and field commissioning from Cranborne, Harare. Gold wash plants, hammer mills, excavators, and construction hardware across Zimbabwe."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var _jsxFileName = "/app/applet/src/routes/admin.tsx";
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex items-start gap-3 min-w-0",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "button",
				onClick: onBack,
				className: "mt-0.5 inline-flex h-11 shrink-0 items-center gap-1 rounded-full border border-black/[0.08] bg-white px-3.5 text-xs font-medium text-[#1D1D1F] shadow-2xs hover:bg-[#F5F5F7]",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronLeft, { className: "size-4" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 161,
					columnNumber: 11
				}, this), backLabel]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 156,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "truncate text-lg font-semibold tracking-tight text-[#1D1D1F]",
					children: title
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 165,
					columnNumber: 11
				}, this), subtitle ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "truncate text-xs text-[#86868B]",
					children: subtitle
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 166,
					columnNumber: 23
				}, this) : null]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 164,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 155,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex items-center gap-1.5 self-end sm:self-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: onPrev,
					disabled: atStart,
					className: "inline-flex h-11 items-center gap-1 rounded-full border border-black/[0.08] bg-white px-3.5 text-xs font-medium text-[#1D1D1F] shadow-2xs hover:bg-[#F5F5F7] disabled:pointer-events-none disabled:opacity-30",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronLeft, { className: "size-4" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 176,
						columnNumber: 11
					}, this), "Previous"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 170,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "min-w-16 px-2 text-center text-xs font-medium text-[#6E6E73]",
					children: index < 0 ? "—" : `${index + 1} of ${total}`
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 179,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: onNext,
					disabled: atEnd,
					className: "inline-flex h-11 items-center gap-1 rounded-full border border-black/[0.08] bg-white px-3.5 text-xs font-medium text-[#1D1D1F] shadow-2xs hover:bg-[#F5F5F7] disabled:pointer-events-none disabled:opacity-30",
					children: ["Next", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "size-4" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 189,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 182,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 169,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 154,
		columnNumber: 5
	}, this);
}
function RowCheck({ checked, indeterminate, onChange, label }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
		type: "checkbox",
		"aria-label": label,
		checked,
		ref: (el) => {
			if (el) el.indeterminate = Boolean(indeterminate && !checked);
		},
		onChange: (e) => onChange(e.target.checked),
		className: "size-4 shrink-0 cursor-pointer rounded border-black/25 accent-[#1D1D1F]"
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 208,
		columnNumber: 5
	}, this);
}
function ConfirmModal({ title, body, confirmLabel, tone = "danger", onCancel, onConfirm }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "fixed inset-0 z-[70] flex items-center justify-center bg-black/45 p-4 backdrop-blur-sm",
		onClick: onCancel,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "w-full max-w-md rounded-2xl border border-black/[0.08] bg-white p-5 shadow-2xl",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-start gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: `flex size-10 shrink-0 items-center justify-center rounded-xl ${tone === "danger" ? "bg-red-50 text-red-600" : "bg-black/[0.05] text-[#1D1D1F]"}`,
					children: tone === "danger" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TriangleAlert, { className: "size-5" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 251,
						columnNumber: 34
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Recycle, { className: "size-5" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 251,
						columnNumber: 73
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 246,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "text-base font-semibold text-[#1D1D1F]",
						children: title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 254,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-1 text-xs leading-relaxed text-[#6E6E73]",
						children: body
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 255,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 253,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 245,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-5 flex justify-end gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: onCancel,
					className: "inline-flex h-11 items-center rounded-full border border-black/[0.08] bg-white px-4 text-xs font-medium text-[#1D1D1F] hover:bg-[#F5F5F7]",
					children: "Cancel"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 259,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: onConfirm,
					className: `inline-flex h-11 items-center rounded-full px-4 text-xs font-semibold text-white ${tone === "danger" ? "bg-red-600 hover:bg-red-700" : "bg-[#1D1D1F] hover:bg-black"}`,
					children: confirmLabel
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 266,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 258,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 241,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 237,
		columnNumber: 5
	}, this);
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
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "min-h-screen bg-[#F5F5F7] text-[#1D1D1F] font-sans antialiased selection:bg-[#1D1D1F] selection:text-white",
		children: [
			toastMessage && /* @__PURE__ */ (void 0)("div", {
				className: "fixed top-5 inset-x-0 mx-auto z-50 flex w-fit items-center gap-2 rounded-full border border-black/[0.06] bg-white px-5 py-2.5 text-xs font-semibold text-[#1D1D1F] shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-md animate-in fade-in slide-in-from-top-3",
				children: [/* @__PURE__ */ (void 0)("span", { className: "size-2 rounded-full bg-[#34C759]" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 948,
					columnNumber: 11
				}, this), /* @__PURE__ */ (void 0)("span", { children: toastMessage }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 949,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 947,
				columnNumber: 9
			}, this),
			zoomedPhoto && /* @__PURE__ */ (void 0)("div", {
				className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in",
				onClick: () => setZoomedPhoto(null),
				children: /* @__PURE__ */ (void 0)("div", {
					className: "relative max-w-4xl w-full rounded-3xl overflow-hidden bg-black border border-white/10 shadow-2xl",
					onClick: (e) => e.stopPropagation(),
					children: [/* @__PURE__ */ (void 0)("div", {
						className: "relative max-h-[80vh] flex items-center justify-center bg-black/90",
						children: [/* @__PURE__ */ (void 0)("img", {
							src: zoomedPhoto.src,
							alt: zoomedPhoto.title,
							className: "max-h-[75vh] w-auto max-w-full object-contain mx-auto",
							onError: (e) => {
								e.target.src = "/images/hero.jpg";
							}
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 964,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("button", {
							type: "button",
							onClick: () => setZoomedPhoto(null),
							className: "absolute top-4 right-4 flex size-9 items-center justify-center rounded-full bg-black/60 text-white hover:bg-white hover:text-black transition-all",
							title: "Close",
							children: /* @__PURE__ */ (void 0)(X, { className: "size-5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 978,
								columnNumber: 17
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 972,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 963,
						columnNumber: 13
					}, this), /* @__PURE__ */ (void 0)("div", {
						className: "flex items-center justify-between p-4 bg-[#1D1D1F] text-white border-t border-white/10",
						children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("p", {
							className: "font-semibold text-sm",
							children: zoomedPhoto.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 983,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)("p", {
							className: "text-xs text-white/60 font-mono mt-0.5",
							children: zoomedPhoto.src
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 984,
							columnNumber: 17
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 982,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("button", {
							type: "button",
							onClick: () => setZoomedPhoto(null),
							className: "rounded-full bg-white/15 px-4 py-1.5 text-xs font-medium text-white hover:bg-white/25 transition-all",
							children: "Close View"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 986,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 981,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 959,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 955,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
				className: "sticky top-0 z-40 border-b border-black/[0.06] bg-white/85 backdrop-blur-xl",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mx-auto flex h-16 max-w-[1720px] w-full items-center justify-between px-4 sm:px-6 lg:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/admin",
							className: "flex items-center gap-2.5 group",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex size-8 items-center justify-center rounded-xl bg-[#1D1D1F] text-white text-xs font-bold shadow-xs",
								children: "O"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1003,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-sm font-semibold tracking-tight text-[#1D1D1F]",
									children: "Omnicore Backoffice"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1008,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "rounded-full bg-black/[0.05] px-2 py-0.5 text-[10px] font-medium text-[#6E6E73]",
									children: "Harare Operations"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1011,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1007,
								columnNumber: 17
							}, this) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1006,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 1002,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 1001,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/",
							className: "inline-flex items-center gap-1.5 rounded-full border border-black/[0.08] bg-white px-4 py-1.5 text-xs font-medium text-[#1D1D1F] shadow-2xs hover:bg-[#F5F5F7] transition-all active:scale-95",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "View Public Website" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1024,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExternalLink, { className: "size-3 text-[#86868B]" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1025,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 1020,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 1019,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 1e3,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mx-auto max-w-[1720px] w-full px-4 sm:px-6 lg:px-8 pb-3",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
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
							return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
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
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Icon, { className: "size-3.5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1062,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: tab.label }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1063,
										columnNumber: 19
									}, this),
									tab.count !== void 0 && /* @__PURE__ */ (void 0)("span", {
										className: `rounded-full px-1.5 py-0.2 text-[10px] ${isActive ? "bg-black/[0.06] text-[#1D1D1F]" : "bg-black/[0.04] text-[#86868B]"}`,
										children: tab.count
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1065,
										columnNumber: 21
									}, this)
								]
							}, tab.id, true, {
								fileName: _jsxFileName,
								lineNumber: 1043,
								columnNumber: 17
							}, this);
						})
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 1032,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 1031,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 999,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
				className: "mx-auto max-w-[1720px] w-full px-4 py-6 sm:px-6 lg:px-8",
				children: [
					activeTab === "crm" && /* @__PURE__ */ (void 0)("div", {
						className: "space-y-6",
						children: [
							profileClientId && clientDraft ? /* @__PURE__ */ (void 0)("form", {
								onSubmit: handleSaveClient,
								className: "space-y-5",
								children: [/* @__PURE__ */ (void 0)(RecordPager, {
									index: clientNavIndex,
									total: filteredClients.length,
									title: clientDraft.name,
									subtitle: `${clientDraft.organization} · ${clientDraft.id}`,
									onBack: closeClientProfile,
									backLabel: "All clients",
									onPrev: () => stepClient(-1),
									onNext: () => stepClient(1)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1091,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "grid grid-cols-1 gap-5 lg:grid-cols-12",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "space-y-4 lg:col-span-7",
										children: /* @__PURE__ */ (void 0)("div", {
											className: "rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.03)]",
											children: [
												/* @__PURE__ */ (void 0)("div", {
													className: "mb-4 flex flex-wrap items-center gap-2",
													children: [
														/* @__PURE__ */ (void 0)("span", {
															className: `rounded-full px-2.5 py-1 text-[11px] font-semibold ${stageChipClass(clientDraft.stage)}`,
															children: clientDraft.stage
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1106,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("span", {
															className: `rounded-full px-2.5 py-1 text-[11px] font-medium ${clientDraft.priority === "High" ? "bg-red-50 text-red-600" : clientDraft.priority === "Medium" ? "bg-amber-50 text-amber-700" : "bg-black/[0.04] text-[#86868B]"}`,
															children: [clientDraft.priority, " priority"]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1109,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("span", {
															className: "text-sm font-semibold text-[#1D1D1F]",
															children: clientDraft.dealValueDisplay
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1120,
															columnNumber: 25
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1105,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "grid grid-cols-1 gap-3 sm:grid-cols-2 text-xs",
													children: [
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Client name"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1125,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															required: true,
															value: clientDraft.name,
															onChange: (e) => setClientDraft({
																...clientDraft,
																name: e.target.value
															}),
															className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1126,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1124,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Organization"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1135,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: clientDraft.organization,
															onChange: (e) => setClientDraft({
																...clientDraft,
																organization: e.target.value
															}),
															className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1136,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1134,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Phone / WhatsApp"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1144,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: clientDraft.phone,
															onChange: (e) => setClientDraft({
																...clientDraft,
																phone: e.target.value
															}),
															className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1145,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1143,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Email"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1153,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "email",
															value: clientDraft.email,
															onChange: (e) => setClientDraft({
																...clientDraft,
																email: e.target.value
															}),
															className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1154,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1152,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Site location"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1162,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: clientDraft.location,
															onChange: (e) => setClientDraft({
																...clientDraft,
																location: e.target.value
															}),
															className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1163,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1161,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Province"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1171,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("select", {
															value: clientDraft.province,
															onChange: (e) => setClientDraft({
																...clientDraft,
																province: e.target.value
															}),
															className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none",
															children: PROVINCES.filter((p) => p !== "All Zimbabwe").map((p) => /* @__PURE__ */ (void 0)("option", {
																value: p,
																children: p
															}, p, false, {
																fileName: _jsxFileName,
																lineNumber: 1178,
																columnNumber: 31
															}, this))
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1172,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1170,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Division"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1185,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("select", {
															value: clientDraft.service,
															onChange: (e) => setClientDraft({
																...clientDraft,
																service: e.target.value
															}),
															className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none",
															children: [
																/* @__PURE__ */ (void 0)("option", {
																	value: "Mining Equipment",
																	children: "Mining Equipment"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1191,
																	columnNumber: 29
																}, this),
																/* @__PURE__ */ (void 0)("option", {
																	value: "Construction Machinery Hire",
																	children: "Machinery Hire"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1192,
																	columnNumber: 29
																}, this),
																/* @__PURE__ */ (void 0)("option", {
																	value: "Hardware & Construction",
																	children: "Hardware & Fence"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1193,
																	columnNumber: 29
																}, this),
																/* @__PURE__ */ (void 0)("option", {
																	value: "Farming Machinery",
																	children: "Farming Plant"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1194,
																	columnNumber: 29
																}, this),
																/* @__PURE__ */ (void 0)("option", {
																	value: "Industry & Manufacturing",
																	children: "Industrial Plant"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1195,
																	columnNumber: 29
																}, this)
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1186,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1184,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Deal type"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1199,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("select", {
															value: clientDraft.intent,
															onChange: (e) => setClientDraft({
																...clientDraft,
																intent: e.target.value
															}),
															className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none",
															children: [
																/* @__PURE__ */ (void 0)("option", {
																	value: "Buy",
																	children: "Outright Purchase"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1207,
																	columnNumber: 29
																}, this),
																/* @__PURE__ */ (void 0)("option", {
																	value: "Hire",
																	children: "Plant Hire"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1208,
																	columnNumber: 29
																}, this),
																/* @__PURE__ */ (void 0)("option", {
																	value: "Both",
																	children: "Both"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1209,
																	columnNumber: 29
																}, this),
																/* @__PURE__ */ (void 0)("option", {
																	value: "Consultation",
																	children: "Technical Consult"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1210,
																	columnNumber: 29
																}, this)
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1200,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1198,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Stage"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1214,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("select", {
															value: clientDraft.stage,
															onChange: (e) => updateClientStage(clientDraft.id, e.target.value),
															className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none",
															children: STAGES.map((st) => /* @__PURE__ */ (void 0)("option", {
																value: st,
																children: st
															}, st, false, {
																fileName: _jsxFileName,
																lineNumber: 1223,
																columnNumber: 31
															}, this))
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1215,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1213,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Priority"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1230,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("select", {
															value: clientDraft.priority,
															onChange: (e) => setClientDraft({
																...clientDraft,
																priority: e.target.value
															}),
															className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none",
															children: [
																/* @__PURE__ */ (void 0)("option", {
																	value: "High",
																	children: "High"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1241,
																	columnNumber: 29
																}, this),
																/* @__PURE__ */ (void 0)("option", {
																	value: "Medium",
																	children: "Medium"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1242,
																	columnNumber: 29
																}, this),
																/* @__PURE__ */ (void 0)("option", {
																	value: "Normal",
																	children: "Normal"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1243,
																	columnNumber: 29
																}, this)
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1231,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1229,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", {
															className: "sm:col-span-2",
															children: [/* @__PURE__ */ (void 0)("label", {
																className: "mb-1 block font-medium text-[#1D1D1F]",
																children: "Estimated value ($)"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1247,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("input", {
																type: "text",
																value: String(clientDraft.dealValue),
																onChange: (e) => setClientDraft({
																	...clientDraft,
																	dealValue: Number(e.target.value.replace(/[^0-9.]/g, "")) || 0
																}),
																className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1248,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1246,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", {
															className: "sm:col-span-2",
															children: [/* @__PURE__ */ (void 0)("label", {
																className: "mb-1 block font-medium text-[#1D1D1F]",
																children: "Equipment required"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1261,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("input", {
																type: "text",
																value: clientDraft.equipmentInterest,
																onChange: (e) => setClientDraft({
																	...clientDraft,
																	equipmentInterest: e.target.value
																}),
																className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1262,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1260,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", {
															className: "sm:col-span-2",
															children: [/* @__PURE__ */ (void 0)("label", {
																className: "mb-1 block font-medium text-[#1D1D1F]",
																children: "Internal notes"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1272,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("textarea", {
																rows: 3,
																value: clientDraft.notes,
																onChange: (e) => setClientDraft({
																	...clientDraft,
																	notes: e.target.value
																}),
																className: "w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] p-3 leading-relaxed text-[#1D1D1F] focus:bg-white focus:outline-none"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1273,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1271,
															columnNumber: 25
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1123,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "mt-4 flex justify-end gap-2 border-t border-black/[0.06] pt-3",
													children: [/* @__PURE__ */ (void 0)("button", {
														type: "button",
														onClick: () => setPendingAction({
															type: "delete-clients",
															ids: [clientDraft.id]
														}),
														className: "inline-flex h-11 items-center gap-1.5 rounded-full border border-red-200 bg-white px-4 text-xs font-semibold text-red-600 hover:bg-red-50",
														children: [/* @__PURE__ */ (void 0)(Trash2, { className: "size-3.5" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1290,
															columnNumber: 27
														}, this), "Move to bin"]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1283,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("button", {
														type: "submit",
														className: "inline-flex h-11 items-center rounded-full bg-[#1D1D1F] px-5 text-xs font-semibold text-white hover:bg-black",
														children: "Save profile"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1293,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1282,
													columnNumber: 23
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1104,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1103,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "space-y-4 lg:col-span-5",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.03)]",
											children: [
												/* @__PURE__ */ (void 0)("span", {
													className: "mb-2 block text-[10px] font-semibold uppercase tracking-wider text-[#86868B]",
													children: "Fast technical response (WhatsApp)"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1305,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ (void 0)("div", {
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
													].map((tmpl, idx) => /* @__PURE__ */ (void 0)("a", {
														href: whatsappUrl(tmpl.text),
														target: "_blank",
														rel: "noopener noreferrer",
														className: "flex items-center justify-between rounded-lg border border-black/[0.06] bg-white p-2.5 text-left text-[11px] font-medium text-[#1D1D1F] hover:border-[#1fa855] hover:bg-emerald-50/30",
														children: [/* @__PURE__ */ (void 0)("span", { children: tmpl.label }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1334,
															columnNumber: 29
														}, this), /* @__PURE__ */ (void 0)(WhatsAppIcon, { className: "ml-1 size-3 shrink-0 text-[#1fa855]" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1335,
															columnNumber: 29
														}, this)]
													}, idx, true, {
														fileName: _jsxFileName,
														lineNumber: 1327,
														columnNumber: 27
													}, this))
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1308,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "mt-3 flex gap-2",
													children: [/* @__PURE__ */ (void 0)("a", {
														href: `tel:${clientDraft.phone}`,
														className: "inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-full border border-black/[0.08] bg-[#F5F5F7] text-xs font-medium text-[#1D1D1F]",
														children: [/* @__PURE__ */ (void 0)(Phone, { className: "size-3.5" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1344,
															columnNumber: 27
														}, this), "Call"]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1340,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("a", {
														href: `mailto:${clientDraft.email}`,
														className: "inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-full border border-black/[0.08] bg-[#F5F5F7] text-xs font-medium text-[#1D1D1F]",
														children: [/* @__PURE__ */ (void 0)(Mail, { className: "size-3.5" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1351,
															columnNumber: 27
														}, this), "Email"]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1347,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1339,
													columnNumber: 23
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1304,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.03)]",
											children: [
												/* @__PURE__ */ (void 0)("span", {
													className: "mb-2 block text-[10px] font-semibold uppercase tracking-wider text-[#86868B]",
													children: [
														"Activity log (",
														clientDraft.timeline.length,
														")"
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1358,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "max-h-56 space-y-1.5 overflow-y-auto pr-1",
													children: clientDraft.timeline.map((item, i) => /* @__PURE__ */ (void 0)("div", {
														className: "rounded-lg bg-[#F5F5F7] p-2 text-[11px] text-[#6E6E73]",
														children: [/* @__PURE__ */ (void 0)("div", {
															className: "flex justify-between font-medium text-[#1D1D1F]",
															children: [/* @__PURE__ */ (void 0)("span", { children: item.author }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1365,
																columnNumber: 31
															}, this), /* @__PURE__ */ (void 0)("span", {
																className: "text-[#86868B]",
																children: item.date
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1366,
																columnNumber: 31
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1364,
															columnNumber: 29
														}, this), /* @__PURE__ */ (void 0)("p", {
															className: "mt-0.5",
															children: item.note
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1368,
															columnNumber: 29
														}, this)]
													}, i, true, {
														fileName: _jsxFileName,
														lineNumber: 1363,
														columnNumber: 27
													}, this))
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1361,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "flex gap-1.5 pt-3",
													children: [/* @__PURE__ */ (void 0)("input", {
														type: "text",
														value: newTimelineNote,
														onChange: (e) => setNewTimelineNote(e.target.value),
														placeholder: "Log phone call, site inspection, deposit...",
														className: "h-11 flex-1 rounded-lg border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs text-[#1D1D1F] placeholder-[#86868B] focus:bg-white focus:outline-none"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1373,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("button", {
														type: "button",
														onClick: handleAddTimelineNote,
														className: "h-11 rounded-lg bg-[#1D1D1F] px-4 text-xs font-medium text-white hover:bg-black",
														children: "Add"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1380,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1372,
													columnNumber: 23
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1357,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1303,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1102,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1090,
								columnNumber: 15
							}, this) : /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [
								/* @__PURE__ */ (void 0)("div", {
									className: "grid grid-cols-2 gap-3 sm:grid-cols-4",
									children: [
										/* @__PURE__ */ (void 0)("div", {
											className: "rounded-2xl border border-black/[0.04] bg-white p-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)]",
											children: [/* @__PURE__ */ (void 0)("span", {
												className: "text-[11px] font-medium text-[#86868B] uppercase tracking-wider",
												children: "Active Tender Pipeline"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1397,
												columnNumber: 17
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "mt-1.5 flex items-baseline gap-2",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F]",
													children: ["$", pipelineMetrics.totalPipelineValue.toLocaleString()]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1401,
													columnNumber: 19
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "text-xs text-[#34C759] font-medium",
													children: [pipelineMetrics.activeDeals, " deals"]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1404,
													columnNumber: 19
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1400,
												columnNumber: 17
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1396,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "rounded-2xl border border-black/[0.04] bg-white p-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)]",
											children: [/* @__PURE__ */ (void 0)("span", {
												className: "text-[11px] font-medium text-[#86868B] uppercase tracking-wider",
												children: "Closed / Won Revenue"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1411,
												columnNumber: 17
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "mt-1.5 flex items-baseline gap-2",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F]",
													children: ["$", pipelineMetrics.wonValue.toLocaleString()]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1415,
													columnNumber: 19
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "text-xs text-[#34C759] font-medium",
													children: [pipelineMetrics.wonDeals, " orders"]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1418,
													columnNumber: 19
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1414,
												columnNumber: 17
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1410,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "rounded-2xl border border-black/[0.04] bg-white p-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)]",
											children: [/* @__PURE__ */ (void 0)("span", {
												className: "text-[11px] font-medium text-[#86868B] uppercase tracking-wider",
												children: "High Priority Tenders"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1425,
												columnNumber: 17
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "mt-1.5 flex items-baseline gap-2",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F]",
													children: pipelineMetrics.highPriorityCount
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1429,
													columnNumber: 19
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "text-xs text-[#FF9500] font-medium",
													children: "urgent"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1432,
													columnNumber: 19
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1428,
												columnNumber: 17
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1424,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "rounded-2xl border border-black/[0.04] bg-white p-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)]",
											children: [/* @__PURE__ */ (void 0)("span", {
												className: "text-[11px] font-medium text-[#86868B] uppercase tracking-wider",
												children: "Client Base in Zimbabwe"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1437,
												columnNumber: 17
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "mt-1.5 flex items-baseline gap-2",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F]",
													children: clients.length
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1441,
													columnNumber: 19
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "text-xs text-[#86868B]",
													children: "accounts"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1444,
													columnNumber: 19
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1440,
												columnNumber: 17
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1436,
											columnNumber: 15
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1395,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1",
										children: ["All", ...STAGES].map((st) => {
											const count = st === "All" ? clients.length : clients.filter((c) => c.stage === st).length;
											const isCurrent = crmStageFilter === st;
											return /* @__PURE__ */ (void 0)("button", {
												onClick: () => setCrmStageFilter(st),
												className: `inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all ${isCurrent ? "bg-[#1D1D1F] text-white shadow-xs" : "bg-white text-[#6E6E73] hover:text-[#1D1D1F] border border-black/[0.06]"}`,
												children: [/* @__PURE__ */ (void 0)("span", { children: st }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1467,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: `text-[10px] ${isCurrent ? "text-white/80" : "text-[#86868B]"}`,
													children: count
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1468,
													columnNumber: 23
												}, this)]
											}, st, true, {
												fileName: _jsxFileName,
												lineNumber: 1458,
												columnNumber: 21
											}, this);
										})
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1452,
										columnNumber: 15
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "flex flex-wrap items-center gap-2",
										children: [
											/* @__PURE__ */ (void 0)("div", {
												className: "relative",
												children: [/* @__PURE__ */ (void 0)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-[#86868B]" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1479,
													columnNumber: 19
												}, this), /* @__PURE__ */ (void 0)("input", {
													type: "text",
													value: crmSearch,
													onChange: (e) => setCrmSearch(e.target.value),
													placeholder: "Search client, syndicate, plant...",
													className: "h-9 w-44 sm:w-60 rounded-full border border-black/[0.08] bg-white pl-9 pr-3 text-xs text-[#1D1D1F] placeholder-[#86868B] shadow-2xs focus:outline-none focus:ring-1 focus:ring-black/20"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1480,
													columnNumber: 19
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1478,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (void 0)("select", {
												value: crmProvinceFilter,
												onChange: (e) => setCrmProvinceFilter(e.target.value),
												className: "h-9 rounded-full border border-black/[0.08] bg-white px-3 text-xs text-[#1D1D1F] shadow-2xs focus:outline-none focus:ring-1 focus:ring-black/20",
												children: PROVINCES.map((prov) => /* @__PURE__ */ (void 0)("option", {
													value: prov,
													children: prov
												}, prov, false, {
													fileName: _jsxFileName,
													lineNumber: 1495,
													columnNumber: 21
												}, this))
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1489,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (void 0)("button", {
												onClick: () => setShowAddClientModal(true),
												className: "inline-flex items-center gap-1.5 rounded-full bg-[#1D1D1F] px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-black transition-all active:scale-95",
												children: [/* @__PURE__ */ (void 0)(Plus, { className: "size-3.5" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1505,
													columnNumber: 19
												}, this), /* @__PURE__ */ (void 0)("span", { children: "New Client" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1506,
													columnNumber: 19
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1501,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (void 0)("button", {
												onClick: () => setActiveTab("recycle"),
												className: "inline-flex items-center gap-1.5 rounded-full border border-black/[0.08] bg-white px-3 py-2 text-xs font-medium text-[#1D1D1F] shadow-2xs hover:bg-[#F5F5F7]",
												title: "Open recycle bin",
												children: [
													/* @__PURE__ */ (void 0)(Recycle, { className: "size-3.5 text-[#6E6E73]" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1513,
														columnNumber: 19
													}, this),
													/* @__PURE__ */ (void 0)("span", {
														className: "hidden sm:inline",
														children: "Bin"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1514,
														columnNumber: 19
													}, this),
													recycleBin.filter((i) => i.kind === "client").length > 0 && /* @__PURE__ */ (void 0)("span", {
														className: "rounded-full bg-black/[0.06] px-1.5 text-[10px] font-semibold",
														children: recycleBin.filter((i) => i.kind === "client").length
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1516,
														columnNumber: 21
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1508,
												columnNumber: 17
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1477,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1450,
									columnNumber: 13
								}, this),
								selectedClientIds.length > 0 && /* @__PURE__ */ (void 0)("div", {
									className: "flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-[#1D1D1F]/10 bg-[#1D1D1F] px-4 py-2.5 text-white shadow-xs",
									children: [/* @__PURE__ */ (void 0)("span", {
										className: "text-xs font-semibold",
										children: [
											selectedClientIds.length,
											" client",
											selectedClientIds.length === 1 ? "" : "s",
											" selected"
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1526,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: () => setSelectedClientIds([]),
											className: "rounded-full px-3 py-1.5 text-xs font-medium text-white/80 hover:bg-white/10",
											children: "Clear"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1530,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: () => setPendingAction({
												type: "delete-clients",
												ids: selectedClientIds
											}),
											className: "inline-flex items-center gap-1.5 rounded-full bg-red-500 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-red-400",
											children: [/* @__PURE__ */ (void 0)(Trash2, { className: "size-3.5" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1542,
												columnNumber: 21
											}, this), "Move to recycle bin"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1537,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1529,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1525,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_2px_16px_rgba(0,0,0,0.03)]",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "overflow-x-auto",
										children: /* @__PURE__ */ (void 0)("table", {
											className: "w-full text-left text-xs",
											children: [/* @__PURE__ */ (void 0)("thead", { children: /* @__PURE__ */ (void 0)("tr", {
												className: "border-b border-black/[0.06] bg-[#FBFBFC] text-[11px] font-semibold text-[#86868B] uppercase tracking-wider",
												children: [
													/* @__PURE__ */ (void 0)("th", {
														className: "w-10 py-3 pl-4 pr-1",
														children: /* @__PURE__ */ (void 0)(RowCheck, {
															label: "Select all clients on this page",
															checked: paginatedClients.length > 0 && paginatedClients.every((c) => selectedClientIds.includes(c.id)),
															indeterminate: paginatedClients.some((c) => selectedClientIds.includes(c.id)) && !paginatedClients.every((c) => selectedClientIds.includes(c.id)),
															onChange: (next) => {
																const pageIds = paginatedClients.map((c) => c.id);
																setSelectedClientIds((prev) => next ? [.../* @__PURE__ */ new Set([...prev, ...pageIds])] : prev.filter((id) => !pageIds.includes(id)));
															}
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1556,
															columnNumber: 27
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1555,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ (void 0)("th", {
														className: "py-3 px-4",
														children: "Client / Organization"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1576,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ (void 0)("th", {
														className: "py-3 px-3",
														children: "Location"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1577,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ (void 0)("th", {
														className: "py-3 px-3",
														children: "Equipment Required"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1578,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ (void 0)("th", {
														className: "py-3 px-3",
														children: "Stage"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1579,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ (void 0)("th", {
														className: "py-3 px-3 text-right",
														children: "Deal Value"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1580,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ (void 0)("th", {
														className: "py-3 px-3 text-center",
														children: "Priority"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1581,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ (void 0)("th", {
														className: "py-3 px-3 text-right",
														children: "Actions"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1582,
														columnNumber: 25
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1554,
												columnNumber: 23
											}, this) }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1553,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("tbody", {
												className: "divide-y divide-black/[0.04]",
												children: filteredClients.length === 0 ? /* @__PURE__ */ (void 0)("tr", { children: /* @__PURE__ */ (void 0)("td", {
													colSpan: 8,
													className: "py-12 text-center text-[#86868B]",
													children: "No client records match the current filters."
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1588,
													columnNumber: 27
												}, this) }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1587,
													columnNumber: 25
												}, this) : paginatedClients.map((client) => {
													const isSelected = peekClientId === client.id;
													const isChecked = selectedClientIds.includes(client.id);
													return /* @__PURE__ */ (void 0)("tr", {
														onClick: () => setPeekClientId(client.id),
														className: `transition-colors cursor-pointer ${isChecked ? "bg-[#F3F8FF]" : isSelected ? "bg-[#F5F5F7] font-medium" : "hover:bg-black/[0.015]"}`,
														children: [
															/* @__PURE__ */ (void 0)("td", {
																className: "w-10 py-3 pl-4 pr-1",
																onClick: (e) => e.stopPropagation(),
																children: /* @__PURE__ */ (void 0)(RowCheck, {
																	label: `Select ${client.name}`,
																	checked: isChecked,
																	onChange: (next) => setSelectedClientIds((prev) => next ? [...prev, client.id] : prev.filter((id) => id !== client.id))
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1612,
																	columnNumber: 33
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1608,
																columnNumber: 31
															}, this),
															/* @__PURE__ */ (void 0)("td", {
																className: "py-3 px-4",
																children: [/* @__PURE__ */ (void 0)("span", {
																	className: "font-semibold text-[#1D1D1F] block",
																	children: client.name
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1623,
																	columnNumber: 33
																}, this), /* @__PURE__ */ (void 0)("span", {
																	className: "text-[11px] text-[#6E6E73] block truncate max-w-[160px]",
																	children: client.organization
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1626,
																	columnNumber: 33
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 1622,
																columnNumber: 31
															}, this),
															/* @__PURE__ */ (void 0)("td", {
																className: "py-3 px-3 text-[#6E6E73]",
																children: [/* @__PURE__ */ (void 0)("span", {
																	className: "block text-[#1D1D1F]",
																	children: client.location
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1632,
																	columnNumber: 33
																}, this), /* @__PURE__ */ (void 0)("span", {
																	className: "text-[10px] text-[#86868B]",
																	children: client.province
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1633,
																	columnNumber: 33
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 1631,
																columnNumber: 31
															}, this),
															/* @__PURE__ */ (void 0)("td", {
																className: "py-3 px-3",
																children: [/* @__PURE__ */ (void 0)("span", {
																	className: "text-[#1D1D1F] font-medium block truncate max-w-[180px]",
																	children: client.equipmentInterest
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1637,
																	columnNumber: 33
																}, this), /* @__PURE__ */ (void 0)("span", {
																	className: "rounded bg-black/[0.04] px-1.5 py-0.2 text-[10px] text-[#6E6E73]",
																	children: client.intent
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1640,
																	columnNumber: 33
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 1636,
																columnNumber: 31
															}, this),
															/* @__PURE__ */ (void 0)("td", {
																className: "py-3 px-3",
																onClick: (e) => e.stopPropagation(),
																children: /* @__PURE__ */ (void 0)("select", {
																	value: client.stage,
																	onChange: (e) => updateClientStage(client.id, e.target.value),
																	className: `rounded-full px-2.5 py-1 text-[11px] font-semibold border-0 focus:ring-1 focus:ring-black/20 ${client.stage === "Won" ? "bg-[#E8F8EE] text-[#1B833E]" : client.stage === "Tender Quoted" ? "bg-[#FFF4E5] text-[#B25E00]" : client.stage === "Negotiation" ? "bg-purple-50 text-purple-700" : client.stage === "Lead" ? "bg-blue-50 text-blue-700" : client.stage === "Lost" ? "bg-red-50 text-red-700" : "bg-black/[0.05] text-[#1D1D1F]"}`,
																	children: STAGES.map((st) => /* @__PURE__ */ (void 0)("option", {
																		value: st,
																		children: st
																	}, st, false, {
																		fileName: _jsxFileName,
																		lineNumber: 1666,
																		columnNumber: 37
																	}, this))
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1646,
																	columnNumber: 33
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1645,
																columnNumber: 31
															}, this),
															/* @__PURE__ */ (void 0)("td", {
																className: "py-3 px-3 text-right font-semibold text-[#1D1D1F]",
																children: client.dealValueDisplay
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1673,
																columnNumber: 31
															}, this),
															/* @__PURE__ */ (void 0)("td", {
																className: "py-3 px-3 text-center",
																children: /* @__PURE__ */ (void 0)("span", {
																	className: `inline-block rounded-full px-2 py-0.5 text-[10px] font-medium ${client.priority === "High" ? "bg-red-50 text-red-600" : client.priority === "Medium" ? "bg-amber-50 text-amber-700" : "bg-black/[0.04] text-[#86868B]"}`,
																	children: client.priority
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1678,
																	columnNumber: 33
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1677,
																columnNumber: 31
															}, this),
															/* @__PURE__ */ (void 0)("td", {
																className: "py-3 px-3 text-right",
																onClick: (e) => e.stopPropagation(),
																children: /* @__PURE__ */ (void 0)("div", {
																	className: "flex items-center justify-end gap-1",
																	children: [
																		/* @__PURE__ */ (void 0)("a", {
																			href: whatsappUrl(`Hello ${client.name}, following up from Omnicore Harare regarding your inquiry for ${client.equipmentInterest}.`),
																			target: "_blank",
																			rel: "noopener noreferrer",
																			className: "flex size-7 items-center justify-center rounded-lg text-[#1fa855] hover:bg-[#1fa855]/10",
																			title: "WhatsApp Client",
																			children: /* @__PURE__ */ (void 0)(WhatsAppIcon, { className: "size-3.5" }, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 1702,
																				columnNumber: 37
																			}, this)
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 1693,
																			columnNumber: 35
																		}, this),
																		/* @__PURE__ */ (void 0)("a", {
																			href: `tel:${client.phone}`,
																			className: "flex size-7 items-center justify-center rounded-lg text-[#1D1D1F] hover:bg-black/[0.05]",
																			title: "Call",
																			children: /* @__PURE__ */ (void 0)(Phone, { className: "size-3.5 text-[#6E6E73]" }, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 1709,
																				columnNumber: 37
																			}, this)
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 1704,
																			columnNumber: 35
																		}, this),
																		/* @__PURE__ */ (void 0)("button", {
																			type: "button",
																			onClick: () => setPendingAction({
																				type: "delete-clients",
																				ids: [client.id]
																			}),
																			className: "flex size-7 items-center justify-center rounded-lg text-red-600 hover:bg-red-50",
																			title: "Move to recycle bin",
																			children: /* @__PURE__ */ (void 0)(Trash2, { className: "size-3.5" }, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 1719,
																				columnNumber: 37
																			}, this)
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 1711,
																			columnNumber: 35
																		}, this)
																	]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 1692,
																	columnNumber: 33
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1691,
																columnNumber: 31
															}, this)
														]
													}, client.id, true, {
														fileName: _jsxFileName,
														lineNumber: 1597,
														columnNumber: 29
													}, this);
												})
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1585,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1552,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1551,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-black/[0.06] bg-[#FBFBFC] px-4 py-3 text-xs text-[#6E6E73]",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex flex-wrap items-center gap-2",
											children: [
												/* @__PURE__ */ (void 0)("span", { children: "Showing" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1734,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("span", {
													className: "font-semibold text-[#1D1D1F]",
													children: filteredClients.length === 0 ? 0 : (crmPage - 1) * crmPageSize + 1
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1735,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("span", { children: "to" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1738,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("span", {
													className: "font-semibold text-[#1D1D1F]",
													children: Math.min(crmPage * crmPageSize, filteredClients.length)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1739,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("span", { children: "of" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1742,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("span", {
													className: "font-semibold text-[#1D1D1F]",
													children: filteredClients.length
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1743,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("span", { children: "clients" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1744,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("span", {
													className: "mx-1 text-black/20",
													children: "|"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1746,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "flex items-center gap-1.5",
													children: [/* @__PURE__ */ (void 0)("span", { children: "Per page:" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1749,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("select", {
														value: crmPageSize,
														onChange: (e) => {
															setCrmPageSize(Number(e.target.value));
															setCrmPage(1);
														},
														className: "rounded-lg border border-black/[0.08] bg-white px-2 py-0.5 text-xs text-[#1D1D1F] focus:outline-none",
														children: [
															/* @__PURE__ */ (void 0)("option", {
																value: 5,
																children: "5"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1758,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: 10,
																children: "10"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1759,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: 20,
																children: "20"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1760,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: 50,
																children: "50"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1761,
																columnNumber: 25
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1750,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1748,
													columnNumber: 21
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1733,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-1 self-end sm:self-auto",
											children: [
												/* @__PURE__ */ (void 0)("button", {
													onClick: () => setCrmPage(1),
													disabled: crmPage <= 1,
													className: "rounded-lg p-1 text-[#6E6E73] hover:bg-black/[0.05] hover:text-[#1D1D1F] disabled:opacity-30 disabled:pointer-events-none transition-colors",
													title: "First page",
													children: /* @__PURE__ */ (void 0)(ChevronsLeft, { className: "size-4" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1773,
														columnNumber: 23
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1767,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("button", {
													onClick: () => setCrmPage((p) => Math.max(1, p - 1)),
													disabled: crmPage <= 1,
													className: "rounded-lg p-1 text-[#6E6E73] hover:bg-black/[0.05] hover:text-[#1D1D1F] disabled:opacity-30 disabled:pointer-events-none transition-colors",
													title: "Previous page",
													children: /* @__PURE__ */ (void 0)(ChevronLeft, { className: "size-4" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1781,
														columnNumber: 23
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1775,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "flex items-center gap-1 px-1",
													children: Array.from({ length: crmTotalPages }, (_, i) => i + 1).map((pageNum) => /* @__PURE__ */ (void 0)("button", {
														onClick: () => setCrmPage(pageNum),
														className: `min-w-6 h-6 rounded-md px-1.5 text-xs font-medium transition-all ${crmPage === pageNum ? "bg-[#1D1D1F] text-white font-semibold shadow-xs" : "text-[#6E6E73] hover:bg-black/[0.05] hover:text-[#1D1D1F]"}`,
														children: pageNum
													}, pageNum, false, {
														fileName: _jsxFileName,
														lineNumber: 1786,
														columnNumber: 25
													}, this))
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1784,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("button", {
													onClick: () => setCrmPage((p) => Math.min(crmTotalPages, p + 1)),
													disabled: crmPage >= crmTotalPages,
													className: "rounded-lg p-1 text-[#6E6E73] hover:bg-black/[0.05] hover:text-[#1D1D1F] disabled:opacity-30 disabled:pointer-events-none transition-colors",
													title: "Next page",
													children: /* @__PURE__ */ (void 0)(ChevronRight, { className: "size-4" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1806,
														columnNumber: 23
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1800,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("button", {
													onClick: () => setCrmPage(crmTotalPages),
													disabled: crmPage >= crmTotalPages,
													className: "rounded-lg p-1 text-[#6E6E73] hover:bg-black/[0.05] hover:text-[#1D1D1F] disabled:opacity-30 disabled:pointer-events-none transition-colors",
													title: "Last page",
													children: /* @__PURE__ */ (void 0)(ChevronsRight, { className: "size-4" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1814,
														columnNumber: 23
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1808,
													columnNumber: 21
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1766,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1732,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1550,
									columnNumber: 13
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1393,
								columnNumber: 15
							}, this),
							peekClient && !profileClientId && /* @__PURE__ */ (void 0)("div", {
								className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm",
								onClick: () => setPeekClientId(null),
								children: /* @__PURE__ */ (void 0)("div", {
									className: "w-full max-w-md rounded-2xl border border-black/[0.08] bg-white p-5 shadow-2xl",
									onClick: (e) => e.stopPropagation(),
									children: [
										/* @__PURE__ */ (void 0)("div", {
											className: "flex items-start justify-between gap-3",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "min-w-0",
												children: [
													/* @__PURE__ */ (void 0)("div", {
														className: "flex flex-wrap items-center gap-1.5",
														children: [
															/* @__PURE__ */ (void 0)("span", {
																className: "font-mono text-[11px] text-[#86868B]",
																children: peekClient.id
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1835,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("span", {
																className: `rounded-full px-2 py-0.5 text-[10px] font-semibold ${stageChipClass(peekClient.stage)}`,
																children: peekClient.stage
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1836,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("span", {
																className: `rounded-full px-2 py-0.5 text-[10px] font-medium ${peekClient.priority === "High" ? "bg-red-50 text-red-600" : peekClient.priority === "Medium" ? "bg-amber-50 text-amber-700" : "bg-black/[0.04] text-[#86868B]"}`,
																children: peekClient.priority
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1839,
																columnNumber: 25
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1834,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("h3", {
														className: "mt-1 text-base font-semibold text-[#1D1D1F]",
														children: peekClient.name
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1851,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("p", {
														className: "text-xs text-[#6E6E73]",
														children: peekClient.organization
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1852,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1833,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("button", {
												type: "button",
												onClick: () => setPeekClientId(null),
												className: "rounded-full p-2 text-[#86868B] hover:bg-[#F5F5F7] hover:text-[#1D1D1F]",
												children: /* @__PURE__ */ (void 0)(X, { className: "size-4" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1859,
													columnNumber: 23
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1854,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1832,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "mt-4 grid grid-cols-2 gap-2 text-xs",
											children: [
												/* @__PURE__ */ (void 0)("div", {
													className: "rounded-xl bg-[#F5F5F7] p-2.5",
													children: [/* @__PURE__ */ (void 0)("span", {
														className: "block text-[10px] uppercase text-[#86868B]",
														children: "Deal value"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1865,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "font-semibold text-[#1D1D1F]",
														children: peekClient.dealValueDisplay
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1866,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1864,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "rounded-xl bg-[#F5F5F7] p-2.5",
													children: [/* @__PURE__ */ (void 0)("span", {
														className: "block text-[10px] uppercase text-[#86868B]",
														children: "Location"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1869,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "block truncate font-semibold text-[#1D1D1F]",
														children: peekClient.location
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1870,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1868,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "col-span-2 rounded-xl bg-[#F5F5F7] p-2.5",
													children: [/* @__PURE__ */ (void 0)("span", {
														className: "block text-[10px] uppercase text-[#86868B]",
														children: "Requirement"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1875,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "font-medium text-[#1D1D1F]",
														children: peekClient.equipmentInterest
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1876,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1874,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "rounded-xl bg-[#F5F5F7] p-2.5",
													children: [/* @__PURE__ */ (void 0)("span", {
														className: "block text-[10px] uppercase text-[#86868B]",
														children: "Phone"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1879,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "font-semibold text-[#1D1D1F]",
														children: peekClient.phone
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1880,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1878,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "rounded-xl bg-[#F5F5F7] p-2.5",
													children: [/* @__PURE__ */ (void 0)("span", {
														className: "block text-[10px] uppercase text-[#86868B]",
														children: "Intent"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1883,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "font-semibold text-[#1D1D1F]",
														children: peekClient.intent
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1884,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1882,
													columnNumber: 21
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1863,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "mt-4 flex gap-2",
											children: [
												/* @__PURE__ */ (void 0)("button", {
													type: "button",
													onClick: () => openClientProfile(peekClient.id),
													className: "inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-full bg-[#1D1D1F] text-xs font-semibold text-white hover:bg-black",
													children: [/* @__PURE__ */ (void 0)(PenLine, { className: "size-3.5" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1894,
														columnNumber: 23
													}, this), "Edit profile"]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1889,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("a", {
													href: whatsappUrl(`Hello ${peekClient.name}, following up from Omnicore Harare regarding your inquiry for ${peekClient.equipmentInterest}.`),
													target: "_blank",
													rel: "noopener noreferrer",
													className: "inline-flex h-11 items-center justify-center rounded-full border border-black/[0.08] px-4 text-[#1fa855] hover:bg-emerald-50",
													children: /* @__PURE__ */ (void 0)(WhatsAppIcon, { className: "size-4" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1905,
														columnNumber: 23
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1897,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("button", {
													type: "button",
													onClick: () => setPendingAction({
														type: "delete-clients",
														ids: [peekClient.id]
													}),
													className: "inline-flex h-11 items-center justify-center rounded-full border border-red-200 px-4 text-red-600 hover:bg-red-50",
													title: "Move to recycle bin",
													children: /* @__PURE__ */ (void 0)(Trash2, { className: "size-4" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 1915,
														columnNumber: 23
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1907,
													columnNumber: 21
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1888,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1828,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1824,
								columnNumber: 15
							}, this),
							showAddClientModal && /* @__PURE__ */ (void 0)("div", {
								className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-150",
								children: /* @__PURE__ */ (void 0)("div", {
									className: "w-full max-w-xl rounded-2xl border border-black/[0.08] bg-white p-6 shadow-2xl",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center justify-between border-b border-black/[0.06] pb-3",
										children: [/* @__PURE__ */ (void 0)("h3", {
											className: "text-sm font-semibold text-[#1D1D1F]",
											children: "Create New Client / Tender Lead"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1927,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("button", {
											onClick: () => setShowAddClientModal(false),
											className: "rounded-full p-1 text-[#86868B] hover:bg-[#F5F5F7]",
											children: /* @__PURE__ */ (void 0)(X, { className: "size-4" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1934,
												columnNumber: 23
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1930,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1926,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("form", {
										onSubmit: handleCreateClient,
										className: "mt-4 space-y-3.5 text-xs",
										children: [
											/* @__PURE__ */ (void 0)("div", {
												className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
												children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
													className: "font-medium text-[#1D1D1F] block mb-1",
													children: "Client Full Name *"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1941,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("input", {
													type: "text",
													required: true,
													value: newClientName,
													onChange: (e) => setNewClientName(e.target.value),
													placeholder: "e.g. Tendai Mashingaidze",
													className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1942,
													columnNumber: 25
												}, this)] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1940,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
													className: "font-medium text-[#1D1D1F] block mb-1",
													children: "Company / Mining Syndicate"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1952,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("input", {
													type: "text",
													value: newClientOrg,
													onChange: (e) => setNewClientOrg(e.target.value),
													placeholder: "e.g. Mberengwa Chrome JV",
													className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1953,
													columnNumber: 25
												}, this)] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1951,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1939,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
												children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
													className: "font-medium text-[#1D1D1F] block mb-1",
													children: "WhatsApp / Phone *"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1965,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("input", {
													type: "text",
													required: true,
													value: newClientPhone,
													onChange: (e) => setNewClientPhone(e.target.value),
													placeholder: "+263 77...",
													className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1966,
													columnNumber: 25
												}, this)] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1964,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
													className: "font-medium text-[#1D1D1F] block mb-1",
													children: "Email Address"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1976,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("input", {
													type: "email",
													value: newClientEmail,
													onChange: (e) => setNewClientEmail(e.target.value),
													placeholder: "client@syndicate.co.zw",
													className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1977,
													columnNumber: 25
												}, this)] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1975,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1963,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
												children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
													className: "font-medium text-[#1D1D1F] block mb-1",
													children: "Site Location"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1989,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("input", {
													type: "text",
													value: newClientLocation,
													onChange: (e) => setNewClientLocation(e.target.value),
													placeholder: "e.g. Kadoma / Golden Valley",
													className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1990,
													columnNumber: 25
												}, this)] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1988,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
													className: "font-medium text-[#1D1D1F] block mb-1",
													children: "Province in Zimbabwe"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 1999,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("select", {
													value: newClientProvince,
													onChange: (e) => setNewClientProvince(e.target.value),
													className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none",
													children: PROVINCES.filter((p) => p !== "All Zimbabwe").map((p) => /* @__PURE__ */ (void 0)("option", {
														value: p,
														children: p
													}, p, false, {
														fileName: _jsxFileName,
														lineNumber: 2006,
														columnNumber: 29
													}, this))
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2e3,
													columnNumber: 25
												}, this)] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1998,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 1987,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "grid grid-cols-1 sm:grid-cols-4 gap-3",
												children: [
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-medium text-[#1D1D1F] block mb-1",
														children: "Division"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2016,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("select", {
														value: newClientService,
														onChange: (e) => setNewClientService(e.target.value),
														className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-2.5 focus:bg-white focus:outline-none",
														children: [
															/* @__PURE__ */ (void 0)("option", {
																value: "Mining Equipment",
																children: "Mining Equipment"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2022,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: "Construction Machinery Hire",
																children: "Machinery Hire"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2023,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: "Hardware & Construction",
																children: "Hardware & Fence"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2024,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: "Farming Machinery",
																children: "Farming Plant"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2025,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: "Industry & Manufacturing",
																children: "Industrial Plant"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2026,
																columnNumber: 27
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2017,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2015,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-medium text-[#1D1D1F] block mb-1",
														children: "Deal Type"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2030,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("select", {
														value: newClientIntent,
														onChange: (e) => setNewClientIntent(e.target.value),
														className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-2.5 focus:bg-white focus:outline-none",
														children: [
															/* @__PURE__ */ (void 0)("option", {
																value: "Buy",
																children: "Outright Purchase"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2036,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: "Hire",
																children: "Plant Hire"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2037,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: "Both",
																children: "Both"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2038,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: "Consultation",
																children: "Technical Consult"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2039,
																columnNumber: 27
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2031,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2029,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-medium text-[#1D1D1F] block mb-1",
														children: "Priority"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2043,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("select", {
														value: newClientPriority,
														onChange: (e) => setNewClientPriority(e.target.value),
														className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-2.5 focus:bg-white focus:outline-none",
														children: [
															/* @__PURE__ */ (void 0)("option", {
																value: "High",
																children: "High"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2049,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: "Medium",
																children: "Medium"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2050,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: "Normal",
																children: "Normal"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2051,
																columnNumber: 27
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2044,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2042,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-medium text-[#1D1D1F] block mb-1",
														children: "Estimated Value ($)"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2055,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("input", {
														type: "text",
														value: newClientDealValue,
														onChange: (e) => setNewClientDealValue(e.target.value),
														placeholder: "e.g. 15000",
														className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2056,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2054,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 2014,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
												className: "font-medium text-[#1D1D1F] block mb-1",
												children: "Equipment Specification Required"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 2067,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("input", {
												type: "text",
												value: newClientInterest,
												onChange: (e) => setNewClientInterest(e.target.value),
												placeholder: "e.g. 200x300 Jaw crusher with diesel motor option",
												className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 2068,
												columnNumber: 23
											}, this)] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 2066,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
												className: "font-medium text-[#1D1D1F] block mb-1",
												children: "Initial Notes"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 2078,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("textarea", {
												rows: 2,
												value: newClientNotes,
												onChange: (e) => setNewClientNotes(e.target.value),
												placeholder: "Project timelines, access constraints, payment structure...",
												className: "w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] p-2.5 focus:bg-white focus:outline-none"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 2079,
												columnNumber: 23
											}, this)] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 2077,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "flex justify-end gap-2 pt-2 border-t border-black/[0.06]",
												children: [/* @__PURE__ */ (void 0)("button", {
													type: "button",
													onClick: () => setShowAddClientModal(false),
													className: "rounded-full bg-[#F5F5F7] px-4 py-1.5 text-xs font-medium text-[#6E6E73] hover:text-[#1D1D1F]",
													children: "Cancel"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2089,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("button", {
													type: "submit",
													className: "rounded-full bg-[#1D1D1F] px-4 py-1.5 text-xs font-semibold text-white hover:bg-black",
													children: "Save Client Record"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2096,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 2088,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1938,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1925,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1924,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 1088,
						columnNumber: 11
					}, this),
					activeTab === "products" && /* @__PURE__ */ (void 0)("div", {
						className: "space-y-6",
						children: [
							productProfileOpen && editingProduct ? /* @__PURE__ */ (void 0)("form", {
								onSubmit: handleSaveProduct,
								className: "space-y-5",
								children: [/* @__PURE__ */ (void 0)(RecordPager, {
									index: productNavIndex,
									total: filteredProducts.length,
									title: editingProduct.name,
									subtitle: editingProduct.sku || editingProduct.id,
									onBack: closeProductProfile,
									backLabel: "All machines",
									onPrev: () => stepProduct(-1),
									onNext: () => stepProduct(1)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 2117,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "grid grid-cols-1 gap-5 lg:grid-cols-12",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "space-y-6 lg:col-span-8",
										children: [
											/* @__PURE__ */ (void 0)("div", {
												className: "rounded-3xl border border-black/[0.06] bg-white p-5 sm:p-7 shadow-xs space-y-6",
												children: [
													/* @__PURE__ */ (void 0)("div", {
														className: "flex flex-col sm:flex-row sm:items-center justify-between border-b border-black/[0.06] pb-4 gap-3",
														children: [/* @__PURE__ */ (void 0)("div", { children: /* @__PURE__ */ (void 0)("div", {
															className: "flex items-center gap-2",
															children: [/* @__PURE__ */ (void 0)("div", {
																className: "flex size-8 items-center justify-center rounded-xl bg-black/[0.05] text-[#1D1D1F]",
																children: /* @__PURE__ */ (void 0)(Eye, { className: "size-4.5" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 2137,
																	columnNumber: 31
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2136,
																columnNumber: 29
															}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
																className: "font-semibold text-[#1D1D1F] text-base",
																children: "Equipment Visual & Yard Photo Studio"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2140,
																columnNumber: 31
															}, this), /* @__PURE__ */ (void 0)("p", {
																className: "text-xs text-[#86868B] mt-0.5",
																children: "High-resolution photography shown across public catalogue, division pages, client WhatsApp spec sheets, and tender documents."
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2143,
																columnNumber: 31
															}, this)] }, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 2139,
																columnNumber: 29
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 2135,
															columnNumber: 27
														}, this) }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2134,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", {
															className: "flex items-center gap-2 self-start sm:self-auto",
															children: /* @__PURE__ */ (void 0)("span", {
																className: `rounded-full px-3 py-1 text-xs font-semibold ${editingProduct.stockStatus === "In Yard Cranborne" ? "bg-[#E8F8EE] text-[#1B833E]" : editingProduct.stockStatus === "In Transit (Beitbridge)" ? "bg-[#FFF4E5] text-[#B25E00]" : "bg-black/[0.04] text-[#6E6E73]"}`,
																children: editingProduct.stockStatus || "In Yard Cranborne"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2150,
																columnNumber: 27
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2149,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2133,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "grid grid-cols-1 lg:grid-cols-12 gap-5 items-start",
														children: [/* @__PURE__ */ (void 0)("div", {
															className: "lg:col-span-7 space-y-3",
															children: [/* @__PURE__ */ (void 0)("div", {
																className: "relative w-full h-64 sm:h-76 md:h-84 rounded-2xl overflow-hidden bg-black/[0.05] border border-black/[0.08] shadow-sm group",
																children: [
																	/* @__PURE__ */ (void 0)("img", {
																		src: editingProduct.image || "/images/jaw-crusher.jpg",
																		alt: editingProduct.name,
																		className: "size-full object-cover object-center transition-transform duration-500 group-hover:scale-105",
																		onError: (e) => {
																			e.target.src = "/images/hero.jpg";
																		}
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 2169,
																		columnNumber: 29
																	}, this),
																	/* @__PURE__ */ (void 0)("div", {
																		className: "absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none",
																		children: [/* @__PURE__ */ (void 0)("span", {
																			className: "rounded-full bg-black/75 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md flex items-center gap-2 shadow-md",
																			children: [/* @__PURE__ */ (void 0)("span", { className: "size-2 rounded-full bg-[#1FA855] animate-pulse" }, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 2180,
																				columnNumber: 33
																			}, this), /* @__PURE__ */ (void 0)("span", { children: "Active Listing Photo" }, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 2181,
																				columnNumber: 33
																			}, this)]
																		}, void 0, true, {
																			fileName: _jsxFileName,
																			lineNumber: 2179,
																			columnNumber: 31
																		}, this), /* @__PURE__ */ (void 0)("button", {
																			type: "button",
																			onClick: () => setZoomedPhoto({
																				src: editingProduct.image || "/images/jaw-crusher.jpg",
																				title: editingProduct.name
																			}),
																			className: "pointer-events-auto rounded-full bg-black/60 hover:bg-black p-2 text-white shadow-md backdrop-blur-md transition-all active:scale-90",
																			title: "Zoom & Inspect HD Image",
																			children: /* @__PURE__ */ (void 0)(ZoomIn, { className: "size-4" }, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 2194,
																				columnNumber: 33
																			}, this)
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 2183,
																			columnNumber: 31
																		}, this)]
																	}, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 2178,
																		columnNumber: 29
																	}, this),
																	/* @__PURE__ */ (void 0)("div", {
																		className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 pt-10 text-white",
																		children: [/* @__PURE__ */ (void 0)("p", {
																			className: "text-sm font-semibold truncate leading-tight",
																			children: editingProduct.name
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 2200,
																			columnNumber: 31
																		}, this), /* @__PURE__ */ (void 0)("div", {
																			className: "flex items-center gap-2 mt-1 text-xs text-white/80",
																			children: [
																				/* @__PURE__ */ (void 0)("span", {
																					className: "capitalize font-medium",
																					children: [editingProduct.category, " Division"]
																				}, void 0, true, {
																					fileName: _jsxFileName,
																					lineNumber: 2202,
																					columnNumber: 33
																				}, this),
																				/* @__PURE__ */ (void 0)("span", { children: "•" }, void 0, false, {
																					fileName: _jsxFileName,
																					lineNumber: 2203,
																					columnNumber: 33
																				}, this),
																				/* @__PURE__ */ (void 0)("span", {
																					className: "font-mono text-[11px]",
																					children: editingProduct.sku || editingProduct.id
																				}, void 0, false, {
																					fileName: _jsxFileName,
																					lineNumber: 2204,
																					columnNumber: 33
																				}, this)
																			]
																		}, void 0, true, {
																			fileName: _jsxFileName,
																			lineNumber: 2201,
																			columnNumber: 31
																		}, this)]
																	}, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 2199,
																		columnNumber: 29
																	}, this)
																]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 2168,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("div", {
																className: "flex flex-wrap items-center justify-between gap-2 text-xs text-[#86868B]",
																children: [/* @__PURE__ */ (void 0)("span", {
																	className: "flex items-center gap-1.5",
																	children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "size-3.5 text-[#1B833E]" }, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 2211,
																		columnNumber: 31
																	}, this), /* @__PURE__ */ (void 0)("span", { children: "Live high-resolution preview connected" }, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 2212,
																		columnNumber: 31
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 2210,
																	columnNumber: 29
																}, this), /* @__PURE__ */ (void 0)("button", {
																	type: "button",
																	onClick: () => setZoomedPhoto({
																		src: editingProduct.image || "/images/jaw-crusher.jpg",
																		title: editingProduct.name
																	}),
																	className: "font-medium text-[#1D1D1F] hover:underline inline-flex items-center gap-1",
																	children: [/* @__PURE__ */ (void 0)(ZoomIn, { className: "size-3" }, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 2224,
																		columnNumber: 31
																	}, this), /* @__PURE__ */ (void 0)("span", { children: "Inspect HD Fullscreen" }, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 2225,
																		columnNumber: 31
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 2214,
																	columnNumber: 29
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 2209,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 2167,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", {
															className: "lg:col-span-5 space-y-4 rounded-2xl bg-[#F9F9FA] p-4.5 border border-black/[0.06]",
															children: [
																/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
																	className: "text-xs font-semibold text-[#1D1D1F] block",
																	children: "Photo Source & Upload"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 2233,
																	columnNumber: 29
																}, this), /* @__PURE__ */ (void 0)("p", {
																	className: "text-[11px] text-[#86868B] mt-0.5",
																	children: "Upload a machine image from your computer or specify an image asset path."
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 2236,
																	columnNumber: 29
																}, this)] }, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 2232,
																	columnNumber: 27
																}, this),
																/* @__PURE__ */ (void 0)("div", { children: /* @__PURE__ */ (void 0)("label", {
																	className: "flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-black/[0.15] bg-white p-4 hover:border-black/30 hover:bg-[#F5F5F7] cursor-pointer transition-all",
																	children: [
																		/* @__PURE__ */ (void 0)("div", {
																			className: "flex size-9 items-center justify-center rounded-full bg-black/[0.05] text-[#1D1D1F]",
																			children: /* @__PURE__ */ (void 0)(Upload, { className: "size-4" }, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 2245,
																				columnNumber: 33
																			}, this)
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 2244,
																			columnNumber: 31
																		}, this),
																		/* @__PURE__ */ (void 0)("div", {
																			className: "text-center",
																			children: [/* @__PURE__ */ (void 0)("span", {
																				className: "text-xs font-semibold text-[#1D1D1F] block",
																				children: "Upload Machine Photo"
																			}, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 2248,
																				columnNumber: 33
																			}, this), /* @__PURE__ */ (void 0)("span", {
																				className: "text-[10px] text-[#86868B] block mt-0.5",
																				children: "PNG, JPG, WEBP up to 8MB"
																			}, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 2251,
																				columnNumber: 33
																			}, this)]
																		}, void 0, true, {
																			fileName: _jsxFileName,
																			lineNumber: 2247,
																			columnNumber: 31
																		}, this),
																		/* @__PURE__ */ (void 0)("input", {
																			type: "file",
																			accept: "image/*",
																			onChange: (e) => handleImageUpload(e, true),
																			className: "hidden"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 2255,
																			columnNumber: 31
																		}, this)
																	]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 2243,
																	columnNumber: 29
																}, this) }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 2242,
																	columnNumber: 27
																}, this),
																/* @__PURE__ */ (void 0)("div", {
																	className: "space-y-1.5",
																	children: [/* @__PURE__ */ (void 0)("label", {
																		className: "text-xs font-medium text-[#1D1D1F] flex items-center justify-between",
																		children: [/* @__PURE__ */ (void 0)("span", { children: "Asset Path or URL:" }, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 2267,
																			columnNumber: 31
																		}, this), /* @__PURE__ */ (void 0)("span", {
																			className: "text-[10px] text-[#86868B] font-mono",
																			children: "/images/..."
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 2268,
																			columnNumber: 31
																		}, this)]
																	}, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 2266,
																		columnNumber: 29
																	}, this), /* @__PURE__ */ (void 0)("input", {
																		type: "text",
																		value: editingProduct.image,
																		onChange: (e) => setEditingProduct({
																			...editingProduct,
																			image: e.target.value
																		}),
																		placeholder: "/images/... or https://...",
																		className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-white px-3 text-xs text-[#1D1D1F] focus:outline-none focus:ring-1 focus:ring-black/20 font-mono text-[11px]"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 2270,
																		columnNumber: 29
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 2265,
																	columnNumber: 27
																}, this),
																/* @__PURE__ */ (void 0)("div", {
																	className: "border-t border-black/[0.06] pt-3 space-y-1.5 text-[11px] text-[#6E6E73]",
																	children: [
																		/* @__PURE__ */ (void 0)("span", {
																			className: "font-semibold text-[#1D1D1F] text-[10px] uppercase tracking-wider block",
																			children: "Active Photo Distribution"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 2281,
																			columnNumber: 29
																		}, this),
																		/* @__PURE__ */ (void 0)("div", {
																			className: "flex items-center gap-1.5 text-xs",
																			children: [/* @__PURE__ */ (void 0)("span", { className: "size-1.5 rounded-full bg-[#1FA855]" }, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 2285,
																				columnNumber: 31
																			}, this), /* @__PURE__ */ (void 0)("span", { children: "Public Catalogue card" }, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 2286,
																				columnNumber: 31
																			}, this)]
																		}, void 0, true, {
																			fileName: _jsxFileName,
																			lineNumber: 2284,
																			columnNumber: 29
																		}, this),
																		/* @__PURE__ */ (void 0)("div", {
																			className: "flex items-center gap-1.5 text-xs",
																			children: [/* @__PURE__ */ (void 0)("span", { className: "size-1.5 rounded-full bg-[#1FA855]" }, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 2289,
																				columnNumber: 31
																			}, this), /* @__PURE__ */ (void 0)("span", { children: "WhatsApp client quote spec sheet" }, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 2290,
																				columnNumber: 31
																			}, this)]
																		}, void 0, true, {
																			fileName: _jsxFileName,
																			lineNumber: 2288,
																			columnNumber: 29
																		}, this),
																		/* @__PURE__ */ (void 0)("div", {
																			className: "flex items-center gap-1.5 text-xs",
																			children: [/* @__PURE__ */ (void 0)("span", { className: "size-1.5 rounded-full bg-[#1FA855]" }, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 2293,
																				columnNumber: 31
																			}, this), /* @__PURE__ */ (void 0)("span", { children: "Cranborne yard inventory record" }, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 2294,
																				columnNumber: 31
																			}, this)]
																		}, void 0, true, {
																			fileName: _jsxFileName,
																			lineNumber: 2292,
																			columnNumber: 29
																		}, this)
																	]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 2280,
																	columnNumber: 27
																}, this)
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 2231,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2165,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "border-t border-black/[0.06] pt-5 space-y-4",
														children: [
															/* @__PURE__ */ (void 0)("div", {
																className: "flex flex-col sm:flex-row sm:items-center justify-between gap-3",
																children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("div", {
																	className: "flex items-center gap-2",
																	children: [/* @__PURE__ */ (void 0)(Package, { className: "size-4 text-[#1D1D1F]" }, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 2305,
																		columnNumber: 31
																	}, this), /* @__PURE__ */ (void 0)("h4", {
																		className: "text-sm font-semibold text-[#1D1D1F]",
																		children: "Harare Yard Fleet Photography Library"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 2306,
																		columnNumber: 31
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 2304,
																	columnNumber: 29
																}, this), /* @__PURE__ */ (void 0)("p", {
																	className: "text-xs text-[#86868B] mt-0.5",
																	children: "Click any verified machine card below to instantly set as the primary photo."
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 2310,
																	columnNumber: 29
																}, this)] }, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 2303,
																	columnNumber: 27
																}, this), /* @__PURE__ */ (void 0)("div", {
																	className: "relative min-w-[220px]",
																	children: [
																		/* @__PURE__ */ (void 0)(Search, { className: "absolute left-3 top-2.5 size-3.5 text-[#86868B]" }, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 2317,
																			columnNumber: 29
																		}, this),
																		/* @__PURE__ */ (void 0)("input", {
																			type: "text",
																			value: photoPresetSearch,
																			onChange: (e) => setPhotoPresetSearch(e.target.value),
																			placeholder: "Search machine models...",
																			className: "w-full h-8.5 rounded-full border border-black/[0.08] bg-[#F5F5F7] pl-8.5 pr-3 text-xs text-[#1D1D1F] focus:bg-white focus:outline-none transition-colors"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 2318,
																			columnNumber: 29
																		}, this),
																		photoPresetSearch && /* @__PURE__ */ (void 0)("button", {
																			type: "button",
																			onClick: () => setPhotoPresetSearch(""),
																			className: "absolute right-2.5 top-2.5 text-[#86868B] hover:text-[#1D1D1F]",
																			children: /* @__PURE__ */ (void 0)(X, { className: "size-3.5" }, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 2331,
																				columnNumber: 33
																			}, this)
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 2326,
																			columnNumber: 31
																		}, this)
																	]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 2316,
																	columnNumber: 27
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 2302,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("div", {
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
																	return /* @__PURE__ */ (void 0)("button", {
																		type: "button",
																		onClick: () => setPresetCategoryFilter(f.id),
																		className: `inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-medium transition-all ${active ? "bg-[#1D1D1F] text-white shadow-2xs font-semibold" : "bg-[#F5F5F7] text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-black/[0.06]"}`,
																		children: [/* @__PURE__ */ (void 0)("span", { children: f.label }, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 2359,
																			columnNumber: 33
																		}, this), /* @__PURE__ */ (void 0)("span", {
																			className: `rounded-full px-1.5 py-0.2 text-[10px] ${active ? "bg-white/20 text-white" : "bg-black/[0.05] text-[#86868B]"}`,
																			children: f.count
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 2360,
																			columnNumber: 33
																		}, this)]
																	}, f.id, true, {
																		fileName: _jsxFileName,
																		lineNumber: 2349,
																		columnNumber: 31
																	}, this);
																})
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2338,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("div", {
																className: "grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3.5 max-h-[440px] overflow-y-auto p-2 rounded-2xl bg-[#F9F9FA] border border-black/[0.06]",
																children: YARD_PHOTO_PRESETS.filter((p) => {
																	const matchesCat = presetCategoryFilter === "all" || p.category === presetCategoryFilter;
																	const matchesSearch = !photoPresetSearch || p.label.toLowerCase().includes(photoPresetSearch.toLowerCase()) || p.spec.toLowerCase().includes(photoPresetSearch.toLowerCase()) || p.badge.toLowerCase().includes(photoPresetSearch.toLowerCase());
																	return matchesCat && matchesSearch;
																}).map((preset) => {
																	const isSelected = editingProduct.image === preset.src;
																	return /* @__PURE__ */ (void 0)("button", {
																		type: "button",
																		onClick: () => {
																			setEditingProduct({
																				...editingProduct,
																				image: preset.src
																			});
																			triggerToast(`Applied ${preset.label} yard photo`);
																		},
																		className: `group relative flex flex-col text-left rounded-2xl p-2.5 border transition-all ${isSelected ? "border-[#1D1D1F] bg-white ring-2 ring-[#1D1D1F] shadow-sm" : "border-black/[0.08] bg-white hover:border-black/[0.2] hover:shadow-xs"}`,
																		children: [/* @__PURE__ */ (void 0)("div", {
																			className: "relative h-28 sm:h-32 w-full rounded-xl overflow-hidden bg-black/[0.04] mb-2.5",
																			children: [
																				/* @__PURE__ */ (void 0)("img", {
																					src: preset.src,
																					alt: preset.label,
																					className: "size-full object-cover transition-transform duration-300 group-hover:scale-105",
																					onError: (e) => {
																						e.target.src = "/images/hero.jpg";
																					}
																				}, void 0, false, {
																					fileName: _jsxFileName,
																					lineNumber: 2399,
																					columnNumber: 35
																				}, this),
																				/* @__PURE__ */ (void 0)("span", {
																					className: "absolute top-1.5 left-1.5 rounded-md bg-black/70 px-2 py-0.5 text-[9px] font-semibold text-white uppercase tracking-wider backdrop-blur-xs",
																					children: preset.category
																				}, void 0, false, {
																					fileName: _jsxFileName,
																					lineNumber: 2408,
																					columnNumber: 35
																				}, this),
																				isSelected && /* @__PURE__ */ (void 0)("div", {
																					className: "absolute top-1.5 right-1.5 size-6 rounded-full bg-[#1FA855] text-white flex items-center justify-center shadow-xs",
																					children: /* @__PURE__ */ (void 0)(Check, { className: "size-3.5 stroke-[2.5]" }, void 0, false, {
																						fileName: _jsxFileName,
																						lineNumber: 2415,
																						columnNumber: 39
																					}, this)
																				}, void 0, false, {
																					fileName: _jsxFileName,
																					lineNumber: 2414,
																					columnNumber: 37
																				}, this)
																			]
																		}, void 0, true, {
																			fileName: _jsxFileName,
																			lineNumber: 2398,
																			columnNumber: 33
																		}, this), /* @__PURE__ */ (void 0)("div", {
																			className: "space-y-0.5 min-w-0 flex-1",
																			children: [
																				/* @__PURE__ */ (void 0)("p", {
																					className: "text-xs font-semibold text-[#1D1D1F] truncate group-hover:text-black leading-tight",
																					children: preset.label
																				}, void 0, false, {
																					fileName: _jsxFileName,
																					lineNumber: 2421,
																					columnNumber: 35
																				}, this),
																				/* @__PURE__ */ (void 0)("p", {
																					className: "text-[11px] text-[#6E6E73] truncate",
																					children: preset.spec
																				}, void 0, false, {
																					fileName: _jsxFileName,
																					lineNumber: 2424,
																					columnNumber: 35
																				}, this),
																				/* @__PURE__ */ (void 0)("span", {
																					className: "inline-block text-[10px] font-medium text-[#86868B] bg-black/[0.03] px-1.5 py-0.5 rounded mt-1",
																					children: preset.badge
																				}, void 0, false, {
																					fileName: _jsxFileName,
																					lineNumber: 2427,
																					columnNumber: 35
																				}, this)
																			]
																		}, void 0, true, {
																			fileName: _jsxFileName,
																			lineNumber: 2420,
																			columnNumber: 33
																		}, this)]
																	}, preset.src, true, {
																		fileName: _jsxFileName,
																		lineNumber: 2385,
																		columnNumber: 31
																	}, this);
																})
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2373,
																columnNumber: 25
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2301,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 2132,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.03)] space-y-4",
												children: [/* @__PURE__ */ (void 0)("h3", {
													className: "font-semibold text-[#1D1D1F] text-sm border-b border-black/[0.06] pb-3",
													children: "Model & Commercial Identity"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2440,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("div", {
													className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs",
													children: [
														/* @__PURE__ */ (void 0)("div", {
															className: "sm:col-span-2",
															children: [/* @__PURE__ */ (void 0)("label", {
																className: "mb-1 block font-medium text-[#1D1D1F]",
																children: "Equipment Model / Name *"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2446,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("input", {
																type: "text",
																required: true,
																value: editingProduct.name,
																onChange: (e) => setEditingProduct({
																	...editingProduct,
																	name: e.target.value
																}),
																placeholder: "e.g. 250x400 Jaw Crusher or Cat 320D Excavator",
																className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2449,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 2445,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Division"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2460,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("select", {
															value: editingProduct.category,
															onChange: (e) => setEditingProduct({
																...editingProduct,
																category: e.target.value
															}),
															className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none",
															children: [
																/* @__PURE__ */ (void 0)("option", {
																	value: "mining",
																	children: "Mining Equipment"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 2473,
																	columnNumber: 29
																}, this),
																/* @__PURE__ */ (void 0)("option", {
																	value: "hire",
																	children: "Construction Machinery Hire"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 2474,
																	columnNumber: 29
																}, this),
																/* @__PURE__ */ (void 0)("option", {
																	value: "hardware",
																	children: "Hardware & Construction"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 2475,
																	columnNumber: 29
																}, this),
																/* @__PURE__ */ (void 0)("option", {
																	value: "farming",
																	children: "Farming Machinery"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 2476,
																	columnNumber: 29
																}, this),
																/* @__PURE__ */ (void 0)("option", {
																	value: "industry",
																	children: "Industry & Manufacturing"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 2477,
																	columnNumber: 29
																}, this)
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 2463,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 2459,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Commercial Deal Type"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2482,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("select", {
															value: editingProduct.intent,
															onChange: (e) => setEditingProduct({
																...editingProduct,
																intent: e.target.value
															}),
															className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none",
															children: [/* @__PURE__ */ (void 0)("option", {
																value: "sale",
																children: "Outright Sale"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2495,
																columnNumber: 29
															}, this), /* @__PURE__ */ (void 0)("option", {
																value: "hire",
																children: "Plant Hire / Rental"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2496,
																columnNumber: 29
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 2485,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 2481,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Indicative Rate / Price USD"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2501,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: editingProduct.priceUSD || editingProduct.price || "",
															onChange: (e) => setEditingProduct({
																...editingProduct,
																priceUSD: e.target.value,
																price: e.target.value
															}),
															placeholder: "e.g. $4,800 USD or $180/hr dry",
															className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2504,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 2500,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Price Note / Terms"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2520,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: editingProduct.priceNote || "",
															onChange: (e) => setEditingProduct({
																...editingProduct,
																priceNote: e.target.value
															}),
															placeholder: "e.g. FOB Cranborne Yard or Wet / Dry Options",
															className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2523,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 2519,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Cranborne Yard Stock Status"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2533,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("select", {
															value: editingProduct.stockStatus || "In Yard Cranborne",
															onChange: (e) => setEditingProduct({
																...editingProduct,
																stockStatus: e.target.value
															}),
															className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none font-medium",
															children: [
																/* @__PURE__ */ (void 0)("option", {
																	value: "In Yard Cranborne",
																	children: "In Yard Cranborne"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 2546,
																	columnNumber: 29
																}, this),
																/* @__PURE__ */ (void 0)("option", {
																	value: "In Transit (Beitbridge)",
																	children: "In Transit (Beitbridge)"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 2547,
																	columnNumber: 29
																}, this),
																/* @__PURE__ */ (void 0)("option", {
																	value: "Active on Site",
																	children: "Active on Site"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 2548,
																	columnNumber: 29
																}, this),
																/* @__PURE__ */ (void 0)("option", {
																	value: "Special Order",
																	children: "Special Order"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 2549,
																	columnNumber: 29
																}, this)
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 2536,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 2532,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "SKU / Model Identifier"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2554,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: editingProduct.sku || editingProduct.id,
															onChange: (e) => setEditingProduct({
																...editingProduct,
																sku: e.target.value
															}),
															placeholder: "e.g. OMNI-MIN-402",
															className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none font-mono"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2557,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 2553,
															columnNumber: 25
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 2444,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 2439,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.03)] space-y-4",
												children: [/* @__PURE__ */ (void 0)("h3", {
													className: "font-semibold text-[#1D1D1F] text-sm border-b border-black/[0.06] pb-3",
													children: "Technical Specifications & Power Engineering"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2570,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("div", {
													className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs",
													children: [
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Hourly Throughput / Operating Capacity"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2576,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: editingProduct.throughput || "",
															onChange: (e) => setEditingProduct({
																...editingProduct,
																throughput: e.target.value
															}),
															placeholder: "e.g. 5–8 Tonnes / Hour or 37m Boom Reach",
															className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2579,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 2575,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Power Drive / Motor Configuration"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2589,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: editingProduct.powerOption || "",
															onChange: (e) => setEditingProduct({
																...editingProduct,
																powerOption: e.target.value
															}),
															placeholder: "e.g. 15kW 3-Phase Electric or 22HP Diesel Kit",
															className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2592,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 2588,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", {
															className: "sm:col-span-2",
															children: [/* @__PURE__ */ (void 0)("label", {
																className: "mb-1 block font-medium text-[#1D1D1F]",
																children: "Quick Specification Tagline"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2602,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("input", {
																type: "text",
																value: editingProduct.spec || "",
																onChange: (e) => setEditingProduct({
																	...editingProduct,
																	spec: e.target.value
																}),
																placeholder: "e.g. Primary crush · gold & chrome circuits",
																className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2605,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 2601,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Equipment Condition"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2615,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("select", {
															value: editingProduct.condition || "New",
															onChange: (e) => setEditingProduct({
																...editingProduct,
																condition: e.target.value
															}),
															className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none",
															children: [/* @__PURE__ */ (void 0)("option", {
																value: "New",
																children: "Brand New (Factory Direct)"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2628,
																columnNumber: 29
															}, this), /* @__PURE__ */ (void 0)("option", {
																value: "Refurbished / Certified",
																children: "Refurbished / Harare Certified"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2629,
																columnNumber: 29
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 2618,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 2614,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Warranty Period (Months)"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2634,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "number",
															min: 0,
															max: 60,
															value: editingProduct.warrantyMonths ?? 12,
															onChange: (e) => setEditingProduct({
																...editingProduct,
																warrantyMonths: Number(e.target.value) || 0
															}),
															className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2637,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 2633,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", {
															className: "sm:col-span-2",
															children: [/* @__PURE__ */ (void 0)("label", {
																className: "mb-1 block font-medium text-[#1D1D1F]",
																children: "Catalogue Badge / Highlight Tag"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2653,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("input", {
																type: "text",
																value: editingProduct.badge || "",
																onChange: (e) => setEditingProduct({
																	...editingProduct,
																	badge: e.target.value
																}),
																placeholder: "e.g. Processing, In Stock, Immediate Delivery, Heavy Fleet",
																className: "h-9 w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-[#1D1D1F] focus:bg-white focus:outline-none"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2656,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 2652,
															columnNumber: 25
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 2574,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 2569,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.03)] space-y-4",
												children: [
													/* @__PURE__ */ (void 0)("h3", {
														className: "font-semibold text-[#1D1D1F] text-sm border-b border-black/[0.06] pb-3",
														children: "Catalogue Copy & Field Engineering Notes"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2669,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "space-y-3 text-xs",
														children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Catalogue Overview & Application Summary *"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2675,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("textarea", {
															rows: 3,
															required: true,
															value: editingProduct.blurb,
															onChange: (e) => setEditingProduct({
																...editingProduct,
																blurb: e.target.value
															}),
															placeholder: "Clear, punchy operational overview for miners, farmers, or contractors.",
															className: "w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] p-3 leading-relaxed text-[#1D1D1F] focus:bg-white focus:outline-none"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2678,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 2674,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Detailed Technical Notes & Commissioning Details"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2689,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("textarea", {
															rows: 4,
															value: editingProduct.detailedNotes || "",
															onChange: (e) => setEditingProduct({
																...editingProduct,
																detailedNotes: e.target.value
															}),
															placeholder: "Liner manganese rating, discharge mesh settings, electrical starter box type, recommended generator kVA, and field commissioning protocol.",
															className: "w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] p-3 leading-relaxed text-[#1D1D1F] focus:bg-white focus:outline-none"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2692,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 2688,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2673,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-black/[0.06] pt-4",
														children: [/* @__PURE__ */ (void 0)("button", {
															type: "button",
															onClick: closeProductProfile,
															className: "inline-flex h-11 items-center rounded-full border border-black/[0.08] bg-[#F5F5F7] px-5 text-xs font-medium text-[#1D1D1F] hover:bg-black/[0.06] transition-colors",
															children: "Cancel"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2703,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("button", {
															type: "submit",
															className: "inline-flex h-11 items-center gap-2 rounded-full bg-[#1D1D1F] px-6 text-xs font-semibold text-white hover:bg-black transition-all active:scale-95 shadow-xs",
															children: [/* @__PURE__ */ (void 0)(Check, { className: "size-4" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2715,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("span", { children: "Save Specifications" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2716,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 2711,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2702,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 2668,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 2130,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "space-y-5 lg:col-span-4",
										children: [
											/* @__PURE__ */ (void 0)("div", {
												className: "rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.03)] space-y-3",
												children: [
													/* @__PURE__ */ (void 0)("div", {
														className: "flex items-center justify-between",
														children: [/* @__PURE__ */ (void 0)("span", {
															className: "block text-[10px] font-semibold uppercase tracking-wider text-[#86868B]",
															children: "Client WhatsApp Quotation"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2727,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "rounded-full bg-[#E8F8EE] px-2 py-0.5 text-[9px] font-bold text-[#1B833E]",
															children: "Live Spec Card"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2730,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2726,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("p", {
														className: "text-xs text-[#6E6E73] leading-relaxed",
														children: "Share these verified machinery specs and photo directly with clients inquiring on WhatsApp."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2734,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "rounded-xl border border-black/[0.06] bg-[#F9F9FA] p-3 text-[11px] space-y-2 font-mono text-[#1D1D1F]",
														children: [
															/* @__PURE__ */ (void 0)("div", {
																className: "relative h-36 w-full rounded-lg overflow-hidden bg-black/[0.05] border border-black/[0.05]",
																children: [/* @__PURE__ */ (void 0)("img", {
																	src: editingProduct.image || "/images/jaw-crusher.jpg",
																	alt: editingProduct.name,
																	className: "size-full object-cover",
																	onError: (e) => {
																		e.target.src = "/images/hero.jpg";
																	}
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 2741,
																	columnNumber: 27
																}, this), /* @__PURE__ */ (void 0)("span", {
																	className: "absolute top-1.5 left-1.5 rounded bg-black/70 px-1.5 py-0.5 text-[9px] font-medium text-white backdrop-blur-xs font-sans capitalize",
																	children: editingProduct.category
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 2749,
																	columnNumber: 27
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 2740,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("p", {
																className: "font-semibold text-xs font-sans text-[#1D1D1F]",
																children: editingProduct.name
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2755,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("p", {
																className: "text-[#6E6E73] text-[10px]",
																children: ["SKU: ", editingProduct.sku || editingProduct.id]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 2756,
																columnNumber: 27
															}, this)] }, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 2754,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("div", {
																className: "border-t border-black/[0.06] pt-1.5 space-y-1 text-[11px]",
																children: [
																	/* @__PURE__ */ (void 0)("div", { children: [
																		"• ",
																		/* @__PURE__ */ (void 0)("span", {
																			className: "text-[#86868B]",
																			children: "Throughput:"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 2759,
																			columnNumber: 34
																		}, this),
																		" ",
																		editingProduct.throughput || editingProduct.spec || "Site Rated"
																	] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 2759,
																		columnNumber: 27
																	}, this),
																	/* @__PURE__ */ (void 0)("div", { children: [
																		"• ",
																		/* @__PURE__ */ (void 0)("span", {
																			className: "text-[#86868B]",
																			children: "Drive:"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 2760,
																			columnNumber: 34
																		}, this),
																		" ",
																		editingProduct.powerOption || "Electric / Diesel"
																	] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 2760,
																		columnNumber: 27
																	}, this),
																	/* @__PURE__ */ (void 0)("div", { children: [
																		"• ",
																		/* @__PURE__ */ (void 0)("span", {
																			className: "text-[#86868B]",
																			children: "Yard:"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 2761,
																			columnNumber: 34
																		}, this),
																		" ",
																		editingProduct.stockStatus || "In Yard Cranborne"
																	] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 2761,
																		columnNumber: 27
																	}, this),
																	/* @__PURE__ */ (void 0)("div", { children: [
																		"• ",
																		/* @__PURE__ */ (void 0)("span", {
																			className: "text-[#86868B]",
																			children: "Rate:"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 2762,
																			columnNumber: 34
																		}, this),
																		" ",
																		editingProduct.priceUSD || editingProduct.price || "Tender on Request"
																	] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 2762,
																		columnNumber: 27
																	}, this)
																]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 2758,
																columnNumber: 25
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2738,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("a", {
														href: whatsappUrl(`Hello from Omnicore Solutions Harare. Regarding ${editingProduct.name} (${editingProduct.sku || editingProduct.id}):\n• Capacity: ${editingProduct.throughput || editingProduct.spec || "Site Rated"}\n• Power: ${editingProduct.powerOption || "Electric 3-Phase / Diesel"}\n• Availability: ${editingProduct.stockStatus || "In Yard Cranborne"}\n• Rate: ${editingProduct.priceUSD || editingProduct.price || "Tender on Request"}\n\nInspections welcome at 115 Chiremba Rd, Cranborne, Harare.`),
														target: "_blank",
														rel: "noopener noreferrer",
														className: "inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#1fa855] text-xs font-semibold text-white shadow-xs hover:bg-[#1b934b] transition-all",
														children: [/* @__PURE__ */ (void 0)(WhatsAppIcon, { className: "size-4" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2774,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("span", { children: "Send Client Spec Sheet" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2775,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2766,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 2725,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.03)] space-y-3",
												children: [
													/* @__PURE__ */ (void 0)("span", {
														className: "block text-[10px] font-semibold uppercase tracking-wider text-[#86868B]",
														children: "Yard Management & Quick Actions"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2781,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("button", {
														type: "button",
														onClick: () => handleToggleStockStatus(editingProduct.id),
														className: "inline-flex h-10 w-full items-center justify-between rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3.5 text-xs font-medium text-[#1D1D1F] hover:bg-black/[0.06] transition-colors",
														children: [/* @__PURE__ */ (void 0)("span", { children: "Rotate Stock Status" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2790,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "rounded-md bg-white px-2 py-0.5 text-[10px] font-semibold text-[#1D1D1F] shadow-2xs border border-black/[0.04]",
															children: editingProduct.stockStatus || "In Yard Cranborne"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2791,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2785,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "flex flex-col gap-2 pt-1 text-xs",
														children: [/* @__PURE__ */ (void 0)(Link, {
															to: "/catalogue",
															className: "inline-flex h-10 items-center justify-between rounded-xl border border-black/[0.08] bg-white px-3.5 font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] transition-colors",
															children: [/* @__PURE__ */ (void 0)("span", { children: "Open Public Catalogue" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2801,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)(ExternalLink, { className: "size-3.5 text-[#86868B]" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2802,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 2797,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)(Link, {
															to: "/services/$slug",
															params: { slug: editingProduct.category },
															className: "inline-flex h-10 items-center justify-between rounded-xl border border-black/[0.08] bg-white px-3.5 font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] transition-colors",
															children: [/* @__PURE__ */ (void 0)("span", {
																className: "capitalize",
																children: [
																	"View ",
																	editingProduct.category,
																	" Division"
																]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 2810,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)(ExternalLink, { className: "size-3.5 text-[#86868B]" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2811,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 2805,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2796,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 2780,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "rounded-2xl border border-red-200 bg-red-50/40 p-5 shadow-xs space-y-3",
												children: [
													/* @__PURE__ */ (void 0)("span", {
														className: "block text-[10px] font-semibold uppercase tracking-wider text-red-700",
														children: "Catalogue Decommissioning"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2818,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("p", {
														className: "text-xs text-red-600/90 leading-relaxed",
														children: "Move this machinery listing to the recycle bin. It will disappear from Cranborne inventory and the public catalogue until restored."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2821,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("button", {
														type: "button",
														onClick: () => handleDeleteProduct(editingProduct.id),
														className: "inline-flex h-10 w-full items-center justify-center gap-1.5 rounded-full border border-red-200 bg-white text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors",
														children: [/* @__PURE__ */ (void 0)(Trash2, { className: "size-3.5" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2829,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("span", { children: "Move to Recycle Bin" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2830,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2824,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 2817,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 2723,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 2128,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 2116,
								columnNumber: 15
							}, this) : /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [
								/* @__PURE__ */ (void 0)("div", {
									className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3",
									children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h2", {
										className: "text-xl font-semibold tracking-tight text-[#1D1D1F]",
										children: "Machinery & Catalogue Inventory"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 2840,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("p", {
										className: "text-xs text-[#86868B] mt-0.5",
										children: "Manage technical specifications, throughput, power drives, and stock status across Cranborne yard."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 2843,
										columnNumber: 17
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 2839,
										columnNumber: 15
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-2",
										children: [
											/* @__PURE__ */ (void 0)("div", {
												className: "relative",
												children: [/* @__PURE__ */ (void 0)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-[#86868B]" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2850,
													columnNumber: 19
												}, this), /* @__PURE__ */ (void 0)("input", {
													type: "text",
													value: productSearch,
													onChange: (e) => setProductSearch(e.target.value),
													placeholder: "Search model, throughput, SKU...",
													className: "h-9 w-48 sm:w-64 rounded-full border border-black/[0.08] bg-white pl-9 pr-3 text-xs text-[#1D1D1F] placeholder-[#86868B] shadow-2xs focus:outline-none"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2851,
													columnNumber: 19
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 2849,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (void 0)("select", {
												value: productCategoryFilter,
												onChange: (e) => setProductCategoryFilter(e.target.value),
												className: "h-9 rounded-full border border-black/[0.08] bg-white px-3 text-xs text-[#1D1D1F] shadow-2xs focus:outline-none",
												children: [
													/* @__PURE__ */ (void 0)("option", {
														value: "all",
														children: "All Divisions"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2865,
														columnNumber: 19
													}, this),
													/* @__PURE__ */ (void 0)("option", {
														value: "mining",
														children: "Mining"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2866,
														columnNumber: 19
													}, this),
													/* @__PURE__ */ (void 0)("option", {
														value: "hire",
														children: "Hire Plant"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2867,
														columnNumber: 19
													}, this),
													/* @__PURE__ */ (void 0)("option", {
														value: "hardware",
														children: "Hardware & Fence"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2868,
														columnNumber: 19
													}, this),
													/* @__PURE__ */ (void 0)("option", {
														value: "farming",
														children: "Farming"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2869,
														columnNumber: 19
													}, this),
													/* @__PURE__ */ (void 0)("option", {
														value: "industry",
														children: "Industrial"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2870,
														columnNumber: 19
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 2860,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (void 0)("button", {
												onClick: () => setShowAddProductModal(true),
												className: "inline-flex items-center gap-1.5 rounded-full bg-[#1D1D1F] px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-black transition-all active:scale-95",
												children: [/* @__PURE__ */ (void 0)(Plus, { className: "size-3.5" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2877,
													columnNumber: 19
												}, this), /* @__PURE__ */ (void 0)("span", { children: "Add Machine" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2878,
													columnNumber: 19
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 2873,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (void 0)("button", {
												onClick: () => setActiveTab("recycle"),
												className: "inline-flex items-center gap-1.5 rounded-full border border-black/[0.08] bg-white px-3 py-2 text-xs font-medium text-[#1D1D1F] shadow-2xs hover:bg-[#F5F5F7]",
												title: "Open recycle bin",
												children: [
													/* @__PURE__ */ (void 0)(Recycle, { className: "size-3.5 text-[#6E6E73]" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2885,
														columnNumber: 19
													}, this),
													/* @__PURE__ */ (void 0)("span", {
														className: "hidden sm:inline",
														children: "Bin"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2886,
														columnNumber: 19
													}, this),
													recycleBin.filter((i) => i.kind === "product").length > 0 && /* @__PURE__ */ (void 0)("span", {
														className: "rounded-full bg-black/[0.06] px-1.5 text-[10px] font-semibold",
														children: recycleBin.filter((i) => i.kind === "product").length
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2888,
														columnNumber: 21
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 2880,
												columnNumber: 17
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 2848,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 2838,
									columnNumber: 13
								}, this),
								selectedProductIds.length > 0 && /* @__PURE__ */ (void 0)("div", {
									className: "flex flex-wrap items-center justify-between gap-2 rounded-2xl border border-[#1D1D1F]/10 bg-[#1D1D1F] px-4 py-2.5 text-white shadow-xs",
									children: [/* @__PURE__ */ (void 0)("span", {
										className: "text-xs font-semibold",
										children: [
											selectedProductIds.length,
											" machine",
											selectedProductIds.length === 1 ? "" : "s",
											" selected"
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 2898,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: () => setSelectedProductIds([]),
											className: "rounded-full px-3 py-1.5 text-xs font-medium text-white/80 hover:bg-white/10",
											children: "Clear"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 2902,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: () => setPendingAction({
												type: "delete-products",
												ids: selectedProductIds
											}),
											className: "inline-flex items-center gap-1.5 rounded-full bg-red-500 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-red-400",
											children: [/* @__PURE__ */ (void 0)(Trash2, { className: "size-3.5" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 2914,
												columnNumber: 21
											}, this), "Move to recycle bin"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 2909,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 2901,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 2897,
									columnNumber: 15
								}, this),
								/* @__PURE__ */ (void 0)("div", {
									className: "overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_2px_16px_rgba(0,0,0,0.03)]",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "overflow-x-auto",
										children: /* @__PURE__ */ (void 0)("table", {
											className: "w-full text-left text-xs",
											children: [/* @__PURE__ */ (void 0)("thead", { children: /* @__PURE__ */ (void 0)("tr", {
												className: "border-b border-black/[0.06] bg-[#FBFBFC] text-[11px] font-semibold text-[#86868B] uppercase tracking-wider",
												children: [
													/* @__PURE__ */ (void 0)("th", {
														className: "w-10 py-3 pl-4 pr-1",
														children: /* @__PURE__ */ (void 0)(RowCheck, {
															label: "Select all machines on this page",
															checked: paginatedProducts.length > 0 && paginatedProducts.every((p) => selectedProductIds.includes(p.id)),
															indeterminate: paginatedProducts.some((p) => selectedProductIds.includes(p.id)) && !paginatedProducts.every((p) => selectedProductIds.includes(p.id)),
															onChange: (next) => {
																const pageIds = paginatedProducts.map((p) => p.id);
																setSelectedProductIds((prev) => next ? [.../* @__PURE__ */ new Set([...prev, ...pageIds])] : prev.filter((id) => !pageIds.includes(id)));
															}
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2928,
															columnNumber: 25
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2927,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("th", {
														className: "py-3 px-4",
														children: "SKU / Equipment Name"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2948,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("th", {
														className: "py-3 px-3",
														children: "Division"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2949,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("th", {
														className: "py-3 px-3",
														children: "Throughput & Drive"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2950,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("th", {
														className: "py-3 px-3",
														children: "Yard Stock Status"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2951,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("th", {
														className: "py-3 px-3",
														children: "Indicative Rate"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2952,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("th", {
														className: "py-3 px-3 text-right",
														children: "Actions"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2953,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 2926,
												columnNumber: 21
											}, this) }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 2925,
												columnNumber: 19
											}, this), /* @__PURE__ */ (void 0)("tbody", {
												className: "divide-y divide-black/[0.04]",
												children: filteredProducts.length === 0 ? /* @__PURE__ */ (void 0)("tr", { children: /* @__PURE__ */ (void 0)("td", {
													colSpan: 7,
													className: "py-12 text-center text-[#86868B]",
													children: "No machinery records match the current filter."
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2959,
													columnNumber: 25
												}, this) }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2958,
													columnNumber: 23
												}, this) : paginatedProducts.map((item) => /* @__PURE__ */ (void 0)("tr", {
													onClick: () => setPeekProductId(item.id),
													className: `cursor-pointer transition-colors ${selectedProductIds.includes(item.id) ? "bg-[#F3F8FF]" : peekProductId === item.id ? "bg-[#F5F5F7]" : "hover:bg-black/[0.015]"}`,
													children: [
														/* @__PURE__ */ (void 0)("td", {
															className: "w-10 py-3 pl-4 pr-1",
															onClick: (e) => e.stopPropagation(),
															children: /* @__PURE__ */ (void 0)(RowCheck, {
																label: `Select ${item.name}`,
																checked: selectedProductIds.includes(item.id),
																onChange: (next) => setSelectedProductIds((prev) => next ? [...prev, item.id] : prev.filter((id) => id !== item.id))
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2980,
																columnNumber: 29
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2976,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (void 0)("td", {
															className: "py-3 px-4",
															children: /* @__PURE__ */ (void 0)("div", {
																className: "flex items-center gap-3",
																children: [/* @__PURE__ */ (void 0)("div", {
																	className: "size-11 rounded-xl overflow-hidden bg-black/[0.04] border border-black/[0.06] shrink-0 shadow-2xs",
																	children: /* @__PURE__ */ (void 0)("img", {
																		src: item.image || "/images/hero.jpg",
																		alt: item.name,
																		className: "size-full object-cover",
																		onError: (e) => {
																			e.target.src = "/images/hero.jpg";
																		}
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 2993,
																		columnNumber: 33
																	}, this)
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 2992,
																	columnNumber: 31
																}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
																	className: "font-semibold text-[#1D1D1F] block",
																	children: item.name
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 3003,
																	columnNumber: 33
																}, this), /* @__PURE__ */ (void 0)("span", {
																	className: "text-[10px] font-mono text-[#86868B]",
																	children: item.sku || item.id
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 3004,
																	columnNumber: 33
																}, this)] }, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 3002,
																	columnNumber: 31
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 2991,
																columnNumber: 29
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2990,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (void 0)("td", {
															className: "py-3 px-3",
															children: /* @__PURE__ */ (void 0)("span", {
																className: "rounded-full bg-black/[0.04] px-2 py-0.5 text-[10px] font-medium text-[#6E6E73] uppercase tracking-wide",
																children: item.category
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3010,
																columnNumber: 29
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3009,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (void 0)("td", {
															className: "py-3 px-3 text-[#6E6E73]",
															children: [/* @__PURE__ */ (void 0)("span", {
																className: "text-[#1D1D1F] font-medium block",
																children: item.throughput || item.spec
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3016,
																columnNumber: 29
															}, this), /* @__PURE__ */ (void 0)("span", {
																className: "text-[10px] text-[#86868B] block truncate max-w-[200px]",
																children: item.powerOption || "Electric 380V / Diesel"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3019,
																columnNumber: 29
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 3015,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (void 0)("td", {
															className: "py-3 px-3",
															onClick: (e) => e.stopPropagation(),
															children: /* @__PURE__ */ (void 0)("button", {
																onClick: () => handleToggleStockStatus(item.id),
																className: `rounded-full px-2.5 py-0.5 text-[10px] font-medium transition-all ${item.stockStatus === "In Yard Cranborne" ? "bg-[#E8F8EE] text-[#1B833E]" : item.stockStatus === "In Transit (Beitbridge)" ? "bg-[#FFF4E5] text-[#B25E00]" : "bg-black/[0.04] text-[#6E6E73]"}`,
																children: item.stockStatus || "In Yard Cranborne"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3025,
																columnNumber: 29
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3024,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (void 0)("td", {
															className: "py-3 px-3 font-semibold text-[#1D1D1F]",
															children: item.priceUSD || item.price || "Tender on Req"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3039,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (void 0)("td", {
															className: "py-3 px-3 text-right",
															onClick: (e) => e.stopPropagation(),
															children: /* @__PURE__ */ (void 0)("div", {
																className: "flex items-center justify-end gap-1",
																children: [/* @__PURE__ */ (void 0)("button", {
																	onClick: () => openProductProfile(item),
																	className: "inline-flex h-11 items-center gap-1 rounded-full border border-black/[0.08] bg-white px-3 text-xs font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] transition-all",
																	children: [/* @__PURE__ */ (void 0)(PenLine, { className: "size-3 text-[#6E6E73]" }, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 3049,
																		columnNumber: 33
																	}, this), /* @__PURE__ */ (void 0)("span", { children: "Edit Specs" }, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 3050,
																		columnNumber: 33
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 3045,
																	columnNumber: 31
																}, this), /* @__PURE__ */ (void 0)("button", {
																	type: "button",
																	onClick: () => setPendingAction({
																		type: "delete-products",
																		ids: [item.id]
																	}),
																	className: "inline-flex size-11 items-center justify-center rounded-full border border-red-200 bg-white text-red-600 hover:bg-red-50",
																	title: "Move to recycle bin",
																	children: /* @__PURE__ */ (void 0)(Trash2, { className: "size-3.5" }, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 3060,
																		columnNumber: 33
																	}, this)
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 3052,
																	columnNumber: 31
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 3044,
																columnNumber: 29
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3043,
															columnNumber: 27
														}, this)
													]
												}, item.id, true, {
													fileName: _jsxFileName,
													lineNumber: 2965,
													columnNumber: 25
												}, this))
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 2956,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 2924,
											columnNumber: 17
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 2923,
										columnNumber: 15
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-black/[0.06] bg-[#FBFBFC] px-4 py-3 text-xs text-[#6E6E73]",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex flex-wrap items-center gap-2",
											children: [
												/* @__PURE__ */ (void 0)("span", { children: "Showing" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3074,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (void 0)("span", {
													className: "font-semibold text-[#1D1D1F]",
													children: filteredProducts.length === 0 ? 0 : (productPage - 1) * productPageSize + 1
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3075,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (void 0)("span", { children: "to" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3078,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (void 0)("span", {
													className: "font-semibold text-[#1D1D1F]",
													children: Math.min(productPage * productPageSize, filteredProducts.length)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3079,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (void 0)("span", { children: "of" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3082,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (void 0)("span", {
													className: "font-semibold text-[#1D1D1F]",
													children: filteredProducts.length
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3083,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (void 0)("span", { children: "machinery models" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3084,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (void 0)("span", {
													className: "mx-1 text-black/20",
													children: "|"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3086,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "flex items-center gap-1.5",
													children: [/* @__PURE__ */ (void 0)("span", { children: "Per page:" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3089,
														columnNumber: 21
													}, this), /* @__PURE__ */ (void 0)("select", {
														value: productPageSize,
														onChange: (e) => {
															setProductPageSize(Number(e.target.value));
															setProductPage(1);
														},
														className: "rounded-lg border border-black/[0.08] bg-white px-2 py-0.5 text-xs text-[#1D1D1F] focus:outline-none",
														children: [
															/* @__PURE__ */ (void 0)("option", {
																value: 6,
																children: "6"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3098,
																columnNumber: 23
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: 12,
																children: "12"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3099,
																columnNumber: 23
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: 24,
																children: "24"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3100,
																columnNumber: 23
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: 50,
																children: "50"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3101,
																columnNumber: 23
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 3090,
														columnNumber: 21
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 3088,
													columnNumber: 19
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 3073,
											columnNumber: 17
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-1 self-end sm:self-auto",
											children: [
												/* @__PURE__ */ (void 0)("button", {
													onClick: () => setProductPage(1),
													disabled: productPage <= 1,
													className: "rounded-lg p-1 text-[#6E6E73] hover:bg-black/[0.05] hover:text-[#1D1D1F] disabled:opacity-30 disabled:pointer-events-none transition-colors",
													title: "First page",
													children: /* @__PURE__ */ (void 0)(ChevronsLeft, { className: "size-4" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3113,
														columnNumber: 21
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3107,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (void 0)("button", {
													onClick: () => setProductPage((p) => Math.max(1, p - 1)),
													disabled: productPage <= 1,
													className: "rounded-lg p-1 text-[#6E6E73] hover:bg-black/[0.05] hover:text-[#1D1D1F] disabled:opacity-30 disabled:pointer-events-none transition-colors",
													title: "Previous page",
													children: /* @__PURE__ */ (void 0)(ChevronLeft, { className: "size-4" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3121,
														columnNumber: 21
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3115,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "flex items-center gap-1 px-1",
													children: Array.from({ length: productTotalPages }, (_, i) => i + 1).map((pageNum) => /* @__PURE__ */ (void 0)("button", {
														onClick: () => setProductPage(pageNum),
														className: `min-w-6 h-6 rounded-md px-1.5 text-xs font-medium transition-all ${productPage === pageNum ? "bg-[#1D1D1F] text-white font-semibold shadow-xs" : "text-[#6E6E73] hover:bg-black/[0.05] hover:text-[#1D1D1F]"}`,
														children: pageNum
													}, pageNum, false, {
														fileName: _jsxFileName,
														lineNumber: 3126,
														columnNumber: 23
													}, this))
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3124,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (void 0)("button", {
													onClick: () => setProductPage((p) => Math.min(productTotalPages, p + 1)),
													disabled: productPage >= productTotalPages,
													className: "rounded-lg p-1 text-[#6E6E73] hover:bg-black/[0.05] hover:text-[#1D1D1F] disabled:opacity-30 disabled:pointer-events-none transition-colors",
													title: "Next page",
													children: /* @__PURE__ */ (void 0)(ChevronRight, { className: "size-4" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3146,
														columnNumber: 21
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3140,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (void 0)("button", {
													onClick: () => setProductPage(productTotalPages),
													disabled: productPage >= productTotalPages,
													className: "rounded-lg p-1 text-[#6E6E73] hover:bg-black/[0.05] hover:text-[#1D1D1F] disabled:opacity-30 disabled:pointer-events-none transition-colors",
													title: "Last page",
													children: /* @__PURE__ */ (void 0)(ChevronsRight, { className: "size-4" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3154,
														columnNumber: 21
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3148,
													columnNumber: 19
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 3106,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 3072,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 2922,
									columnNumber: 13
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 2837,
								columnNumber: 15
							}, this),
							peekProduct && !productProfileOpen && /* @__PURE__ */ (void 0)("div", {
								className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm",
								onClick: () => setPeekProductId(null),
								children: /* @__PURE__ */ (void 0)("div", {
									className: "w-full max-w-md rounded-2xl border border-black/[0.08] bg-white p-5 shadow-2xl",
									onClick: (e) => e.stopPropagation(),
									children: [
										/* @__PURE__ */ (void 0)("div", {
											className: "flex items-start justify-between gap-3",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "flex min-w-0 items-start gap-3",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "size-16 shrink-0 overflow-hidden rounded-xl border border-black/[0.06] bg-black/[0.04]",
													children: /* @__PURE__ */ (void 0)("img", {
														src: peekProduct.image || "/images/hero.jpg",
														alt: peekProduct.name,
														className: "size-full object-cover",
														onError: (e) => {
															e.target.src = "/images/hero.jpg";
														}
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3175,
														columnNumber: 25
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3174,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("div", {
													className: "min-w-0",
													children: [
														/* @__PURE__ */ (void 0)("p", {
															className: "font-mono text-[11px] text-[#86868B]",
															children: peekProduct.sku || peekProduct.id
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3185,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("h3", {
															className: "text-base font-semibold text-[#1D1D1F]",
															children: peekProduct.name
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3186,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("p", {
															className: "text-xs uppercase tracking-wide text-[#6E6E73]",
															children: peekProduct.category
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3187,
															columnNumber: 25
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 3184,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 3173,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("button", {
												type: "button",
												onClick: () => setPeekProductId(null),
												className: "rounded-full p-2 text-[#86868B] hover:bg-[#F5F5F7] hover:text-[#1D1D1F]",
												children: /* @__PURE__ */ (void 0)(X, { className: "size-4" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3195,
													columnNumber: 23
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 3190,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 3172,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "mt-4 grid grid-cols-2 gap-2 text-xs",
											children: [
												/* @__PURE__ */ (void 0)("div", {
													className: "rounded-xl bg-[#F5F5F7] p-2.5",
													children: [/* @__PURE__ */ (void 0)("span", {
														className: "block text-[10px] uppercase text-[#86868B]",
														children: "Stock"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3201,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "font-semibold text-[#1D1D1F]",
														children: peekProduct.stockStatus || "In Yard Cranborne"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3202,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 3200,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "rounded-xl bg-[#F5F5F7] p-2.5",
													children: [/* @__PURE__ */ (void 0)("span", {
														className: "block text-[10px] uppercase text-[#86868B]",
														children: "Rate"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3205,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "font-semibold text-[#1D1D1F]",
														children: peekProduct.priceUSD || peekProduct.price || "Tender on Req"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3206,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 3204,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "col-span-2 rounded-xl bg-[#F5F5F7] p-2.5",
													children: [/* @__PURE__ */ (void 0)("span", {
														className: "block text-[10px] uppercase text-[#86868B]",
														children: "Throughput / drive"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3209,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "font-medium text-[#1D1D1F]",
														children: [
															peekProduct.throughput || peekProduct.spec,
															" · ",
															peekProduct.powerOption || "Electric / Diesel"
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 3210,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 3208,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "col-span-2 rounded-xl bg-[#F5F5F7] p-2.5",
													children: [/* @__PURE__ */ (void 0)("span", {
														className: "block text-[10px] uppercase text-[#86868B]",
														children: "Overview"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3215,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "text-[#1D1D1F]",
														children: peekProduct.blurb
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3216,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 3214,
													columnNumber: 21
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 3199,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "mt-4 flex gap-2",
											children: [/* @__PURE__ */ (void 0)("button", {
												type: "button",
												onClick: () => openProductProfile(peekProduct),
												className: "inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-full bg-[#1D1D1F] text-xs font-semibold text-white hover:bg-black",
												children: [/* @__PURE__ */ (void 0)(PenLine, { className: "size-3.5" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3226,
													columnNumber: 23
												}, this), "Edit specifications"]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 3221,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("button", {
												type: "button",
												onClick: () => setPendingAction({
													type: "delete-products",
													ids: [peekProduct.id]
												}),
												className: "inline-flex h-11 items-center justify-center rounded-full border border-red-200 px-4 text-red-600 hover:bg-red-50",
												title: "Move to recycle bin",
												children: /* @__PURE__ */ (void 0)(Trash2, { className: "size-4" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3237,
													columnNumber: 23
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 3229,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 3220,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 3168,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 3164,
								columnNumber: 15
							}, this),
							showAddProductModal && /* @__PURE__ */ (void 0)("div", {
								className: "fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 animate-in fade-in duration-150",
								children: /* @__PURE__ */ (void 0)("div", {
									className: "w-full max-w-xl rounded-2xl border border-black/[0.08] bg-white p-6 shadow-2xl max-h-[90vh] overflow-y-auto",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center justify-between border-b border-black/[0.06] pb-3",
										children: [/* @__PURE__ */ (void 0)("h3", {
											className: "text-sm font-semibold text-[#1D1D1F]",
											children: "Add Machinery to Cranborne Catalogue"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 3249,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("button", {
											onClick: () => setShowAddProductModal(false),
											className: "rounded-full p-1 text-[#86868B] hover:bg-[#F5F5F7]",
											children: /* @__PURE__ */ (void 0)(X, { className: "size-4" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 3256,
												columnNumber: 23
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 3252,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 3248,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("form", {
										onSubmit: handleCreateProduct,
										className: "mt-4 space-y-3.5 text-xs",
										children: [
											/* @__PURE__ */ (void 0)("div", {
												className: "rounded-xl border border-black/[0.08] bg-[#FBFBFC] p-3.5 space-y-3",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "flex items-center justify-between",
													children: /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
														className: "font-semibold text-[#1D1D1F] block text-xs",
														children: "Equipment Photo & Live Preview"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3265,
														columnNumber: 27
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "text-[11px] text-[#86868B]",
														children: "Upload a photo from your device or select from Harare yard photo library."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3268,
														columnNumber: 27
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 3264,
														columnNumber: 25
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3263,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("div", {
													className: "flex flex-col sm:flex-row gap-4 items-start",
													children: [/* @__PURE__ */ (void 0)("div", {
														className: "relative size-28 sm:size-32 rounded-xl overflow-hidden bg-black/[0.05] border border-black/[0.08] shrink-0 shadow-xs group",
														children: [
															/* @__PURE__ */ (void 0)("img", {
																src: newProdImage || "/images/jaw-crusher.jpg",
																alt: "Preview",
																className: "size-full object-cover object-center",
																onError: (e) => {
																	e.target.src = "/images/hero.jpg";
																}
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3277,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (void 0)("div", {
																className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",
																children: /* @__PURE__ */ (void 0)("label", {
																	className: "cursor-pointer text-white text-[10px] font-semibold bg-black/70 px-2 py-1 rounded-md hover:bg-black",
																	children: ["Change", /* @__PURE__ */ (void 0)("input", {
																		type: "file",
																		accept: "image/*",
																		onChange: (e) => handleImageUpload(e, false),
																		className: "hidden"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 3288,
																		columnNumber: 31
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 3286,
																	columnNumber: 29
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3285,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (void 0)("span", {
																className: "absolute bottom-1 right-1 rounded bg-black/60 px-1.5 py-0.5 text-[9px] font-medium text-white backdrop-blur-xs",
																children: "Live Preview"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3296,
																columnNumber: 27
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 3276,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("div", {
														className: "flex-1 space-y-3 w-full",
														children: [
															/* @__PURE__ */ (void 0)("div", {
																className: "flex flex-wrap items-center justify-between gap-2",
																children: [/* @__PURE__ */ (void 0)("label", {
																	className: "inline-flex items-center gap-1.5 rounded-full border border-black/[0.1] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#1D1D1F] shadow-2xs hover:bg-[#F5F5F7] cursor-pointer transition-all active:scale-95",
																	children: [
																		/* @__PURE__ */ (void 0)(Upload, { className: "size-3.5 text-[#1D1D1F]" }, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 3305,
																			columnNumber: 31
																		}, this),
																		/* @__PURE__ */ (void 0)("span", { children: "Upload Machine Image" }, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 3306,
																			columnNumber: 31
																		}, this),
																		/* @__PURE__ */ (void 0)("input", {
																			type: "file",
																			accept: "image/*",
																			onChange: (e) => handleImageUpload(e, false),
																			className: "hidden"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 3307,
																			columnNumber: 31
																		}, this)
																	]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 3304,
																	columnNumber: 29
																}, this), /* @__PURE__ */ (void 0)("div", {
																	className: "relative min-w-[180px]",
																	children: [
																		/* @__PURE__ */ (void 0)(Search, { className: "absolute left-2.5 top-2 size-3 text-[#86868B]" }, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 3317,
																			columnNumber: 31
																		}, this),
																		/* @__PURE__ */ (void 0)("input", {
																			type: "text",
																			value: newPhotoPresetSearch,
																			onChange: (e) => setNewPhotoPresetSearch(e.target.value),
																			placeholder: "Search presets...",
																			className: "w-full h-7 rounded-full border border-black/[0.08] bg-[#F5F5F7] pl-7 pr-2.5 text-[11px] text-[#1D1D1F] focus:bg-white focus:outline-none"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 3318,
																			columnNumber: 31
																		}, this),
																		newPhotoPresetSearch && /* @__PURE__ */ (void 0)("button", {
																			type: "button",
																			onClick: () => setNewPhotoPresetSearch(""),
																			className: "absolute right-2 top-2 text-[#86868B] hover:text-[#1D1D1F]",
																			children: /* @__PURE__ */ (void 0)(X, { className: "size-3" }, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 3331,
																				columnNumber: 35
																			}, this)
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 3326,
																			columnNumber: 33
																		}, this)
																	]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 3316,
																	columnNumber: 29
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 3303,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (void 0)("div", {
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
																].map((f) => /* @__PURE__ */ (void 0)("button", {
																	type: "button",
																	onClick: () => setNewPresetCategoryFilter(f.id),
																	className: `rounded-lg px-2.5 py-1 text-[11px] font-medium transition-all ${newPresetCategoryFilter === f.id ? "bg-[#1D1D1F] text-white font-semibold shadow-2xs" : "bg-black/[0.04] text-[#6E6E73] hover:text-[#1D1D1F]"}`,
																	children: f.label
																}, f.id, false, {
																	fileName: _jsxFileName,
																	lineNumber: 3347,
																	columnNumber: 31
																}, this))
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3338,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (void 0)("div", {
																className: "grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-56 overflow-y-auto p-2 rounded-xl bg-[#F9F9FA] border border-black/[0.06]",
																children: YARD_PHOTO_PRESETS.filter((p) => {
																	const matchesCat = newPresetCategoryFilter === "all" || p.category === newPresetCategoryFilter;
																	const matchesSearch = !newPhotoPresetSearch || p.label.toLowerCase().includes(newPhotoPresetSearch.toLowerCase()) || p.spec.toLowerCase().includes(newPhotoPresetSearch.toLowerCase());
																	return matchesCat && matchesSearch;
																}).map((preset) => {
																	const isSelected = newProdImage === preset.src;
																	return /* @__PURE__ */ (void 0)("button", {
																		type: "button",
																		onClick: () => setNewProdImage(preset.src),
																		className: `group relative flex flex-col text-left rounded-xl p-2 border transition-all ${isSelected ? "border-[#1D1D1F] bg-white ring-2 ring-[#1D1D1F] shadow-xs" : "border-black/[0.08] bg-white hover:border-black/[0.2]"}`,
																		children: [/* @__PURE__ */ (void 0)("div", {
																			className: "relative h-20 w-full rounded-lg overflow-hidden bg-black/[0.04] mb-1.5",
																			children: [
																				/* @__PURE__ */ (void 0)("img", {
																					src: preset.src,
																					alt: preset.label,
																					className: "size-full object-cover transition-transform duration-300 group-hover:scale-105",
																					onError: (e) => {
																						e.target.src = "/images/hero.jpg";
																					}
																				}, void 0, false, {
																					fileName: _jsxFileName,
																					lineNumber: 3385,
																					columnNumber: 37
																				}, this),
																				/* @__PURE__ */ (void 0)("span", {
																					className: "absolute top-1 left-1 rounded bg-black/70 px-1.5 py-0.5 text-[8px] font-semibold text-white uppercase tracking-wider backdrop-blur-xs",
																					children: preset.category
																				}, void 0, false, {
																					fileName: _jsxFileName,
																					lineNumber: 3393,
																					columnNumber: 37
																				}, this),
																				isSelected && /* @__PURE__ */ (void 0)("div", {
																					className: "absolute top-1 right-1 size-5 rounded-full bg-[#1FA855] text-white flex items-center justify-center shadow-xs",
																					children: /* @__PURE__ */ (void 0)(Check, { className: "size-3 stroke-[2.5]" }, void 0, false, {
																						fileName: _jsxFileName,
																						lineNumber: 3398,
																						columnNumber: 41
																					}, this)
																				}, void 0, false, {
																					fileName: _jsxFileName,
																					lineNumber: 3397,
																					columnNumber: 39
																				}, this)
																			]
																		}, void 0, true, {
																			fileName: _jsxFileName,
																			lineNumber: 3384,
																			columnNumber: 35
																		}, this), /* @__PURE__ */ (void 0)("div", {
																			className: "min-w-0",
																			children: [/* @__PURE__ */ (void 0)("p", {
																				className: "text-[11px] font-semibold text-[#1D1D1F] truncate group-hover:text-black",
																				children: preset.label
																			}, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 3404,
																				columnNumber: 37
																			}, this), /* @__PURE__ */ (void 0)("p", {
																				className: "text-[10px] text-[#6E6E73] truncate",
																				children: preset.spec
																			}, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 3407,
																				columnNumber: 37
																			}, this)]
																		}, void 0, true, {
																			fileName: _jsxFileName,
																			lineNumber: 3403,
																			columnNumber: 35
																		}, this)]
																	}, preset.src, true, {
																		fileName: _jsxFileName,
																		lineNumber: 3374,
																		columnNumber: 33
																	}, this);
																})
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3363,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (void 0)("div", {
																className: "flex items-center gap-2 pt-1",
																children: [/* @__PURE__ */ (void 0)("span", {
																	className: "text-[11px] font-medium text-[#1D1D1F] shrink-0",
																	children: "Custom URL / Path:"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 3417,
																	columnNumber: 29
																}, this), /* @__PURE__ */ (void 0)("input", {
																	type: "text",
																	value: newProdImage,
																	onChange: (e) => setNewProdImage(e.target.value),
																	placeholder: "/images/... or https://...",
																	className: "w-full h-8 rounded-xl border border-black/[0.08] bg-white px-3 text-xs text-[#1D1D1F] focus:outline-none font-mono text-[11px]"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 3418,
																	columnNumber: 29
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 3416,
																columnNumber: 27
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 3302,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 3274,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 3262,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
												children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
													className: "font-medium text-[#1D1D1F] block mb-1",
													children: "Equipment Model / Name *"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3432,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("input", {
													type: "text",
													required: true,
													value: newProdName,
													onChange: (e) => setNewProdName(e.target.value),
													placeholder: "e.g. 250x400 Jaw Crusher or Cat 320D",
													className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3433,
													columnNumber: 25
												}, this)] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 3431,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
													className: "font-medium text-[#1D1D1F] block mb-1",
													children: "Division"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3443,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("select", {
													value: newProdCategory,
													onChange: (e) => setNewProdCategory(e.target.value),
													className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none",
													children: [
														/* @__PURE__ */ (void 0)("option", {
															value: "mining",
															children: "Mining Equipment"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3451,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (void 0)("option", {
															value: "hire",
															children: "Construction Machinery Hire"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3452,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (void 0)("option", {
															value: "hardware",
															children: "Hardware & Construction"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3453,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (void 0)("option", {
															value: "farming",
															children: "Farming Machinery"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3454,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (void 0)("option", {
															value: "industry",
															children: "Industry & Manufacturing"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3455,
															columnNumber: 27
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 3444,
													columnNumber: 25
												}, this)] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 3442,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 3430,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "grid grid-cols-1 sm:grid-cols-3 gap-3",
												children: [
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-medium text-[#1D1D1F] block mb-1",
														children: "Hourly Throughput"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3462,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("input", {
														type: "text",
														value: newProdThroughput,
														onChange: (e) => setNewProdThroughput(e.target.value),
														placeholder: "e.g. 5–15 TPH or 35m boom",
														className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3463,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 3461,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-medium text-[#1D1D1F] block mb-1",
														children: "Power / Motor Drive"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3472,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("input", {
														type: "text",
														value: newProdPower,
														onChange: (e) => setNewProdPower(e.target.value),
														placeholder: "e.g. 15kW 380V or 35HP diesel",
														className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3473,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 3471,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-medium text-[#1D1D1F] block mb-1",
														children: "Indicative Price / Rate"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3482,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("input", {
														type: "text",
														value: newProdPrice,
														onChange: (e) => setNewProdPrice(e.target.value),
														placeholder: "e.g. $18,500 FOB Harare",
														className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3483,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 3481,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 3460,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
												className: "font-medium text-[#1D1D1F] block mb-1",
												children: "Technical Overview / Tagline"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 3494,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("input", {
												type: "text",
												value: newProdBlurb,
												onChange: (e) => setNewProdBlurb(e.target.value),
												placeholder: "Primary crushing for gold ore circuits. Heavy cast-steel eccentric shaft.",
												className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 3495,
												columnNumber: 23
											}, this)] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 3493,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "flex justify-end gap-2 pt-2 border-t border-black/[0.06]",
												children: [/* @__PURE__ */ (void 0)("button", {
													type: "button",
													onClick: () => setShowAddProductModal(false),
													className: "rounded-full bg-[#F5F5F7] px-4 py-1.5 text-xs font-medium text-[#6E6E73] hover:text-[#1D1D1F]",
													children: "Cancel"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3505,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("button", {
													type: "submit",
													className: "rounded-full bg-[#1D1D1F] px-4 py-1.5 text-xs font-semibold text-white hover:bg-black",
													children: "Add to Inventory"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3512,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 3504,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 3260,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 3247,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 3246,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 2114,
						columnNumber: 11
					}, this),
					activeTab === "cms" && /* @__PURE__ */ (void 0)("div", {
						className: "w-full space-y-6",
						children: [
							/* @__PURE__ */ (void 0)("div", {
								className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 rounded-3xl bg-white p-5 sm:p-6 border border-black/[0.06] shadow-xs",
								children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "flex size-7 items-center justify-center rounded-lg bg-black/[0.05] text-[#1D1D1F]",
										children: /* @__PURE__ */ (void 0)(Sparkles, { className: "size-4 text-amber-500" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 3536,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 3535,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("h2", {
										className: "text-xl font-semibold tracking-tight text-[#1D1D1F]",
										children: "Website Copy, Brand & Content Management"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 3538,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 3534,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("p", {
									className: "text-xs text-[#86868B] mt-1 max-w-2xl",
									children: "Manage live headlines, Harare yard details, official contact channels, operating hours, and divisional messaging across Omnicore Solutions. Changes update in real-time nationwide."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 3542,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 3533,
									columnNumber: 15
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "flex flex-wrap items-center gap-2.5",
									children: [
										/* @__PURE__ */ (void 0)("div", {
											className: "relative min-w-[200px] sm:min-w-[240px]",
											children: [
												/* @__PURE__ */ (void 0)(Search, { className: "absolute left-3 top-2.5 size-3.5 text-[#86868B]" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3549,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (void 0)("input", {
													type: "text",
													placeholder: "Search any copy or field...",
													value: cmsSearch,
													onChange: (e) => setCmsSearch(e.target.value),
													className: "w-full h-8.5 rounded-full border border-black/[0.08] bg-[#F5F5F7] pl-8.5 pr-3 text-xs focus:bg-white focus:outline-none transition-colors"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3550,
													columnNumber: 19
												}, this),
												cmsSearch && /* @__PURE__ */ (void 0)("button", {
													type: "button",
													onClick: () => setCmsSearch(""),
													className: "absolute right-2.5 top-2.5 text-[#86868B] hover:text-[#1D1D1F]",
													children: /* @__PURE__ */ (void 0)(X, { className: "size-3.5" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3563,
														columnNumber: 23
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3558,
													columnNumber: 21
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 3548,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: handleResetSiteCopy,
											className: "inline-flex h-8.5 items-center gap-1.5 rounded-full border border-black/[0.08] bg-white px-3.5 text-xs font-medium text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7] transition-all active:scale-95",
											children: [/* @__PURE__ */ (void 0)(RotateCcw, { className: "size-3.5 text-[#86868B]" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 3573,
												columnNumber: 19
											}, this), /* @__PURE__ */ (void 0)("span", { children: "Reset Defaults" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 3574,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 3568,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "inline-flex rounded-full bg-[#F5F5F7] p-0.5 border border-black/[0.08] text-xs",
											children: [/* @__PURE__ */ (void 0)("button", {
												type: "button",
												onClick: () => setCmsLayoutMode("full"),
												className: `inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all ${cmsLayoutMode === "full" ? "bg-white text-[#1D1D1F] shadow-2xs font-semibold" : "text-[#6E6E73] hover:text-[#1D1D1F]"}`,
												title: "Expand across 100% of screen real estate with multi-column layouts",
												children: [/* @__PURE__ */ (void 0)(Maximize2, { className: "size-3.5" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3589,
													columnNumber: 21
												}, this), /* @__PURE__ */ (void 0)("span", { children: "Full-Width Studio" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3590,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 3579,
												columnNumber: 19
											}, this), /* @__PURE__ */ (void 0)("button", {
												type: "button",
												onClick: () => setCmsLayoutMode("split"),
												className: `inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all ${cmsLayoutMode === "split" ? "bg-white text-[#1D1D1F] shadow-2xs font-semibold" : "text-[#6E6E73] hover:text-[#1D1D1F]"}`,
												title: "View side-by-side interactive live preview",
												children: [/* @__PURE__ */ (void 0)(Columns2, { className: "size-3.5" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3602,
													columnNumber: 21
												}, this), /* @__PURE__ */ (void 0)("span", { children: "Split Live Preview" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3603,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 3592,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 3578,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (void 0)("a", {
											href: "/",
											target: "_blank",
											rel: "noopener noreferrer",
											className: "inline-flex h-8.5 items-center gap-1.5 rounded-full border border-black/[0.08] bg-white px-3.5 text-xs font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] transition-all active:scale-95",
											children: [/* @__PURE__ */ (void 0)(ExternalLink, { className: "size-3.5 text-[#86868B]" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 3613,
												columnNumber: 19
											}, this), /* @__PURE__ */ (void 0)("span", { children: "View Public Site" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 3614,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 3607,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: () => handleSaveSiteCopy(),
											className: `inline-flex h-8.5 items-center gap-1.5 rounded-full px-5 text-xs font-semibold text-white shadow-xs transition-all active:scale-95 ${hasUnsavedChanges ? "bg-[#1FA855] hover:bg-[#1B934B] animate-pulse" : "bg-[#1D1D1F] hover:bg-black"}`,
											children: [/* @__PURE__ */ (void 0)(Check, { className: "size-3.5" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 3626,
												columnNumber: 19
											}, this), /* @__PURE__ */ (void 0)("span", { children: hasUnsavedChanges ? "Publish Changes Live *" : "Published Live" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 3627,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 3617,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 3547,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 3532,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (void 0)("div", {
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
									return /* @__PURE__ */ (void 0)("button", {
										type: "button",
										onClick: () => setCmsCategory(cat.id),
										className: `inline-flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-medium transition-all ${isActive ? "bg-[#1D1D1F] text-white shadow-2xs font-semibold" : "text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]"}`,
										children: [/* @__PURE__ */ (void 0)("span", { children: cat.label }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 3656,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: `rounded-full px-1.5 py-0.2 text-[10px] font-semibold ${isActive ? "bg-white/20 text-white" : "bg-black/[0.05] text-[#86868B]"}`,
											children: cat.count
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 3657,
											columnNumber: 21
										}, this)]
									}, cat.id, true, {
										fileName: _jsxFileName,
										lineNumber: 3646,
										columnNumber: 19
									}, this);
								})
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 3633,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: cmsLayoutMode === "split" ? "grid grid-cols-1 lg:grid-cols-12 gap-6 items-start" : "w-full",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: cmsLayoutMode === "split" ? "lg:col-span-8 xl:col-span-8 space-y-6" : "w-full space-y-6",
									children: /* @__PURE__ */ (void 0)("form", {
										onSubmit: handleSaveSiteCopy,
										className: "space-y-6",
										children: [
											(cmsCategory === "hero" || cmsCategory === "all" || cmsSearch) && /* @__PURE__ */ (void 0)("div", {
												className: "rounded-3xl border border-black/[0.06] bg-white p-5 sm:p-7 shadow-xs space-y-5",
												children: [
													/* @__PURE__ */ (void 0)("div", {
														className: "flex items-center justify-between pb-3.5 border-b border-black/[0.05]",
														children: [/* @__PURE__ */ (void 0)("div", {
															className: "flex items-center gap-2.5",
															children: [/* @__PURE__ */ (void 0)("div", {
																className: "flex size-8 items-center justify-center rounded-xl bg-amber-50 text-amber-700",
																children: /* @__PURE__ */ (void 0)(Sparkles, { className: "size-4.5" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 3680,
																	columnNumber: 29
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3679,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
																className: "text-base font-semibold text-[#1D1D1F]",
																children: "Hero Banner & Brand Identity Messaging"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3683,
																columnNumber: 29
															}, this), /* @__PURE__ */ (void 0)("p", {
																className: "text-xs text-[#86868B] mt-0.5",
																children: "Controls the primary landing headlines, yard announcement banner, call-to-actions, and key stats."
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3686,
																columnNumber: 29
															}, this)] }, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 3682,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 3678,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "rounded-full bg-amber-100/70 px-3 py-1 text-xs font-semibold text-amber-800",
															children: "Above The Fold"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3691,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 3677,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5",
														children: [
															/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
																className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
																children: "Company Legal Name"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3699,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("input", {
																type: "text",
																value: cmsForm.name,
																onChange: (e) => updateCmsField("name", e.target.value),
																className: "w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
																placeholder: "Omnicore Solutions"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3702,
																columnNumber: 27
															}, this)] }, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 3698,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
																className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
																children: "Brand Short Name"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3711,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("input", {
																type: "text",
																value: cmsForm.shortName,
																onChange: (e) => updateCmsField("shortName", e.target.value),
																className: "w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
																placeholder: "Omnicore"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3714,
																columnNumber: 27
															}, this)] }, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 3710,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("div", {
																className: "xl:col-span-2",
																children: [/* @__PURE__ */ (void 0)("label", {
																	className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
																	children: "Company Tagline"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 3723,
																	columnNumber: 27
																}, this), /* @__PURE__ */ (void 0)("input", {
																	type: "text",
																	value: cmsForm.tagline,
																	onChange: (e) => updateCmsField("tagline", e.target.value),
																	className: "w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
																	placeholder: "Machinery for Zimbabwe's farms, mines and sites."
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 3726,
																	columnNumber: 27
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 3722,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
																className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
																children: "Founded Year"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3735,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("input", {
																type: "text",
																value: cmsForm.foundedYear,
																onChange: (e) => updateCmsField("foundedYear", e.target.value),
																className: "w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
																placeholder: "2024"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3738,
																columnNumber: 27
															}, this)] }, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 3734,
																columnNumber: 25
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 3697,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "grid grid-cols-1 lg:grid-cols-2 gap-3.5",
														children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Top Yard & Operational Announcement Banner"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3751,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.heroBannerAnnouncement || "",
															onChange: (e) => updateCmsField("heroBannerAnnouncement", e.target.value),
															className: "w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "Cranborne Yard Open Mon–Sat · Lowbed Deliveries Nationwide"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3754,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 3750,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Cranborne Yard Badge Text (Top of Hero)"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3763,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.heroBadge,
															onChange: (e) => updateCmsField("heroBadge", e.target.value),
															className: "w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "Cranborne yard · 115 Chiremba Road, Harare"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3766,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 3762,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 3749,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-start",
														children: [/* @__PURE__ */ (void 0)("div", {
															className: "lg:col-span-6 space-y-1",
															children: [/* @__PURE__ */ (void 0)("label", {
																className: "font-semibold text-[#1D1D1F] text-xs block",
																children: "Homepage Hero Headline"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3779,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("input", {
																type: "text",
																value: cmsForm.heroHeadline,
																onChange: (e) => updateCmsField("heroHeadline", e.target.value),
																className: "w-full h-11 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3.5 text-sm font-semibold text-[#1D1D1F] focus:bg-white focus:outline-none",
																placeholder: "Plant for Zimbabwe’s mines, farms and pours."
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3782,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 3778,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", {
															className: "lg:col-span-6 space-y-1",
															children: [/* @__PURE__ */ (void 0)("div", {
																className: "flex items-center justify-between",
																children: [/* @__PURE__ */ (void 0)("label", {
																	className: "font-semibold text-[#1D1D1F] text-xs",
																	children: "Hero Narrative Subheadline"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 3793,
																	columnNumber: 29
																}, this), /* @__PURE__ */ (void 0)("span", {
																	className: "text-[10px] text-[#86868B]",
																	children: [cmsForm.heroSubheadline.length, " chars"]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 3796,
																	columnNumber: 29
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 3792,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("textarea", {
																rows: 3,
																value: cmsForm.heroSubheadline,
																onChange: (e) => updateCmsField("heroSubheadline", e.target.value),
																className: "w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] p-3 text-xs leading-relaxed focus:bg-white focus:outline-none",
																placeholder: "Gold circuits, fence plant, self-loading mixers..."
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3800,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 3791,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 3777,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "grid grid-cols-1 sm:grid-cols-3 gap-3.5",
														children: [
															/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
																className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
																children: "Primary CTA Button (WhatsApp Direct)"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3813,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("input", {
																type: "text",
																value: cmsForm.heroCtaPrimary,
																onChange: (e) => updateCmsField("heroCtaPrimary", e.target.value),
																className: "w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none font-medium",
																placeholder: "Chat on WhatsApp"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3816,
																columnNumber: 27
															}, this)] }, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 3812,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
																className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
																children: "Secondary CTA Button (Tender Quote)"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3825,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("input", {
																type: "text",
																value: cmsForm.heroCtaSecondary,
																onChange: (e) => updateCmsField("heroCtaSecondary", e.target.value),
																className: "w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none font-medium",
																placeholder: "Request a firm quote"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3828,
																columnNumber: 27
															}, this)] }, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 3824,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
																className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
																children: "Tertiary CTA Button (Catalogue Browse)"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3837,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("input", {
																type: "text",
																value: cmsForm.heroCtaTertiary,
																onChange: (e) => updateCmsField("heroCtaTertiary", e.target.value),
																className: "w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none font-medium",
																placeholder: "Open the catalogue"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3840,
																columnNumber: 27
															}, this)] }, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 3836,
																columnNumber: 25
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 3811,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "pt-3 border-t border-black/[0.05]",
														children: [/* @__PURE__ */ (void 0)("p", {
															className: "font-semibold text-[#1D1D1F] text-xs mb-2.5",
															children: "Homepage 4 Statistics Highlights"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3852,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", {
															className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",
															children: [
																/* @__PURE__ */ (void 0)("div", {
																	className: "rounded-2xl border border-black/[0.06] bg-[#F9F9FA] p-3 space-y-2",
																	children: [/* @__PURE__ */ (void 0)("span", {
																		className: "text-[10px] font-bold text-[#86868B] uppercase tracking-wider",
																		children: "Stat 1"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 3857,
																		columnNumber: 29
																	}, this), /* @__PURE__ */ (void 0)("div", {
																		className: "space-y-1.5",
																		children: [/* @__PURE__ */ (void 0)("input", {
																			type: "text",
																			placeholder: "Label (e.g. Harare hub)",
																			value: cmsForm.stat1Label,
																			onChange: (e) => updateCmsField("stat1Label", e.target.value),
																			className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-semibold"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 3859,
																			columnNumber: 31
																		}, this), /* @__PURE__ */ (void 0)("input", {
																			type: "text",
																			placeholder: "Detail (e.g. Cranborne yard)",
																			value: cmsForm.stat1Detail,
																			onChange: (e) => updateCmsField("stat1Detail", e.target.value),
																			className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs text-[#6E6E73]"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 3866,
																			columnNumber: 31
																		}, this)]
																	}, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 3858,
																		columnNumber: 29
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 3856,
																	columnNumber: 27
																}, this),
																/* @__PURE__ */ (void 0)("div", {
																	className: "rounded-2xl border border-black/[0.06] bg-[#F9F9FA] p-3 space-y-2",
																	children: [/* @__PURE__ */ (void 0)("span", {
																		className: "text-[10px] font-bold text-[#86868B] uppercase tracking-wider",
																		children: "Stat 2"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 3877,
																		columnNumber: 29
																	}, this), /* @__PURE__ */ (void 0)("div", {
																		className: "space-y-1.5",
																		children: [/* @__PURE__ */ (void 0)("input", {
																			type: "text",
																			placeholder: "Label (e.g. 1–25 TPH)",
																			value: cmsForm.stat2Label,
																			onChange: (e) => updateCmsField("stat2Label", e.target.value),
																			className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-semibold"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 3879,
																			columnNumber: 31
																		}, this), /* @__PURE__ */ (void 0)("input", {
																			type: "text",
																			placeholder: "Detail (e.g. Gold circuits)",
																			value: cmsForm.stat2Detail,
																			onChange: (e) => updateCmsField("stat2Detail", e.target.value),
																			className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs text-[#6E6E73]"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 3886,
																			columnNumber: 31
																		}, this)]
																	}, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 3878,
																		columnNumber: 29
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 3876,
																	columnNumber: 27
																}, this),
																/* @__PURE__ */ (void 0)("div", {
																	className: "rounded-2xl border border-black/[0.06] bg-[#F9F9FA] p-3 space-y-2",
																	children: [/* @__PURE__ */ (void 0)("span", {
																		className: "text-[10px] font-bold text-[#86868B] uppercase tracking-wider",
																		children: "Stat 3"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 3897,
																		columnNumber: 29
																	}, this), /* @__PURE__ */ (void 0)("div", {
																		className: "space-y-1.5",
																		children: [/* @__PURE__ */ (void 0)("input", {
																			type: "text",
																			placeholder: "Label (e.g. Wet & dry)",
																			value: cmsForm.stat3Label,
																			onChange: (e) => updateCmsField("stat3Label", e.target.value),
																			className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-semibold"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 3899,
																			columnNumber: 31
																		}, this), /* @__PURE__ */ (void 0)("input", {
																			type: "text",
																			placeholder: "Detail (e.g. Plant hire)",
																			value: cmsForm.stat3Detail,
																			onChange: (e) => updateCmsField("stat3Detail", e.target.value),
																			className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs text-[#6E6E73]"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 3906,
																			columnNumber: 31
																		}, this)]
																	}, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 3898,
																		columnNumber: 29
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 3896,
																	columnNumber: 27
																}, this),
																/* @__PURE__ */ (void 0)("div", {
																	className: "rounded-2xl border border-black/[0.06] bg-[#F9F9FA] p-3 space-y-2",
																	children: [/* @__PURE__ */ (void 0)("span", {
																		className: "text-[10px] font-bold text-[#86868B] uppercase tracking-wider",
																		children: "Stat 4"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 3917,
																		columnNumber: 29
																	}, this), /* @__PURE__ */ (void 0)("div", {
																		className: "space-y-1.5",
																		children: [/* @__PURE__ */ (void 0)("input", {
																			type: "text",
																			placeholder: "Label (e.g. 10 provinces)",
																			value: cmsForm.stat4Label,
																			onChange: (e) => updateCmsField("stat4Label", e.target.value),
																			className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-semibold"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 3919,
																			columnNumber: 31
																		}, this), /* @__PURE__ */ (void 0)("input", {
																			type: "text",
																			placeholder: "Detail (e.g. Lowbed delivery)",
																			value: cmsForm.stat4Detail,
																			onChange: (e) => updateCmsField("stat4Detail", e.target.value),
																			className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs text-[#6E6E73]"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 3926,
																			columnNumber: 31
																		}, this)]
																	}, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 3918,
																		columnNumber: 29
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 3916,
																	columnNumber: 27
																}, this)
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 3855,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 3851,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 3676,
												columnNumber: 21
											}, this),
											(cmsCategory === "yard" || cmsCategory === "all" || cmsSearch) && /* @__PURE__ */ (void 0)("div", {
												className: "rounded-3xl border border-black/[0.06] bg-white p-5 sm:p-6 shadow-xs space-y-4",
												children: [
													/* @__PURE__ */ (void 0)("div", {
														className: "flex items-center justify-between pb-3 border-b border-black/[0.05]",
														children: [/* @__PURE__ */ (void 0)("div", {
															className: "flex items-center gap-2",
															children: [/* @__PURE__ */ (void 0)("div", {
																className: "flex size-7 items-center justify-center rounded-lg bg-blue-50 text-blue-700",
																children: /* @__PURE__ */ (void 0)(MapPin, { className: "size-4" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 3946,
																	columnNumber: 29
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3945,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
																className: "text-sm font-semibold text-[#1D1D1F]",
																children: "Yard Location & Physical Presence"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3949,
																columnNumber: 29
															}, this), /* @__PURE__ */ (void 0)("p", {
																className: "text-[11px] text-[#86868B]",
																children: "Physical demonstration yard, lowbed loading access, and Google Maps pin coordinates."
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3952,
																columnNumber: 29
															}, this)] }, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 3948,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 3944,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "rounded-full bg-blue-100/60 px-2 py-0.5 text-[10px] font-semibold text-blue-800",
															children: "Harare Hub"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3957,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 3943,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
														children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Street Address Line 1"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3964,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.yardAddressLine1,
															onChange: (e) => updateCmsField("yardAddressLine1", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "115 Chiremba Road"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3967,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 3963,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Suburb & Industrial Belt Line 2"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3976,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.yardAddressLine2,
															onChange: (e) => updateCmsField("yardAddressLine2", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "Cranborne, Harare"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3979,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 3975,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 3962,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
														children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "City / Metro"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3991,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.yardCity,
															onChange: (e) => updateCmsField("yardCity", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "Harare"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3994,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 3990,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Country"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4003,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.yardCountry,
															onChange: (e) => updateCmsField("yardCountry", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "Zimbabwe"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4006,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4002,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 3989,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
														children: "Google Maps Pin URL"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4017,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("input", {
														type: "url",
														value: cmsForm.googleMapsUrl,
														onChange: (e) => updateCmsField("googleMapsUrl", e.target.value),
														className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none font-mono text-[11px]",
														placeholder: "https://www.google.com/maps/search/?api=1&query=..."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4020,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4016,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
														children: "Directions & Heavy Machinery Loading Guidance"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4030,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("textarea", {
														rows: 2,
														value: cmsForm.yardDirectionsNote,
														onChange: (e) => updateCmsField("yardDirectionsNote", e.target.value),
														className: "w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] p-3 text-xs leading-relaxed focus:bg-white focus:outline-none",
														placeholder: "Along Chiremba Road, close to major Harare arterial routes..."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4033,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4029,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
														children: "Yard Inspection & Testing Policy"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4043,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("input", {
														type: "text",
														value: cmsForm.inspectionNotice,
														onChange: (e) => updateCmsField("inspectionNotice", e.target.value),
														className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
														placeholder: "Physical yard mechanical inspections welcome Monday–Saturday at 115 Chiremba Rd, Cranborne."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4046,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4042,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 3942,
												columnNumber: 21
											}, this),
											(cmsCategory === "contact" || cmsCategory === "all" || cmsSearch) && /* @__PURE__ */ (void 0)("div", {
												className: "rounded-3xl border border-black/[0.06] bg-white p-5 sm:p-6 shadow-xs space-y-4",
												children: [
													/* @__PURE__ */ (void 0)("div", {
														className: "flex items-center justify-between pb-3 border-b border-black/[0.05]",
														children: [/* @__PURE__ */ (void 0)("div", {
															className: "flex items-center gap-2",
															children: [/* @__PURE__ */ (void 0)("div", {
																className: "flex size-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700",
																children: /* @__PURE__ */ (void 0)(Phone, { className: "size-4" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 4063,
																	columnNumber: 29
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4062,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
																className: "text-sm font-semibold text-[#1D1D1F]",
																children: "Contact Channels, Emergency Hotlines & WhatsApp Desk"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4066,
																columnNumber: 29
															}, this), /* @__PURE__ */ (void 0)("p", {
																className: "text-[11px] text-[#86868B]",
																children: "Direct voice lines, 24/7 site breakdown hotlines, WhatsApp numbers, and official email inboxes."
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4069,
																columnNumber: 29
															}, this)] }, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 4065,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4061,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "rounded-full bg-emerald-100/60 px-2 py-0.5 text-[10px] font-semibold text-emerald-800",
															children: "Direct Lines"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4074,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4060,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
														children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Primary Phone (Display)"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4081,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.primaryPhone,
															onChange: (e) => updateCmsField("primaryPhone", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "+263 77 733 4569"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4084,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4080,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Primary Phone (Dialable URL)"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4093,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.primaryPhoneTel,
															onChange: (e) => updateCmsField("primaryPhoneTel", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none font-mono text-[11px]",
															placeholder: "+263777334569"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4096,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4092,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4079,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
														children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Secondary Alternate Phone (Display)"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4108,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.secondaryPhone,
															onChange: (e) => updateCmsField("secondaryPhone", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "+263 78 871 6082"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4111,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4107,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Secondary Phone (Dialable URL)"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4120,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.secondaryPhoneTel,
															onChange: (e) => updateCmsField("secondaryPhoneTel", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none font-mono text-[11px]",
															placeholder: "+263788716082"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4123,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4119,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4106,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
														children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Emergency 24/7 Breakdown Hotline (Display)"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4135,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.emergencyHotline,
															onChange: (e) => updateCmsField("emergencyHotline", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "+263 77 733 4569"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4138,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4134,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Emergency Hotline (Dialable URL)"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4147,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.emergencyHotlineTel,
															onChange: (e) => updateCmsField("emergencyHotlineTel", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none font-mono text-[11px]",
															placeholder: "+263777334569"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4150,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4146,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4133,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
														children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "WhatsApp Business Number (digits only)"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4162,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.whatsappNumber,
															onChange: (e) => updateCmsField("whatsappNumber", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none font-mono text-[11px]",
															placeholder: "263777334569"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4165,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4161,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Technical Desk Email"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4174,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "email",
															value: cmsForm.email,
															onChange: (e) => updateCmsField("email", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "omnicore-solutions@outlook.com"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4177,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4173,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4160,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
														children: "Sales & Tenders Email"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4188,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("input", {
														type: "email",
														value: cmsForm.salesEmail,
														onChange: (e) => updateCmsField("salesEmail", e.target.value),
														className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
														placeholder: "sales@omnicoresolutions.co.zw"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4191,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4187,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
														children: "Default WhatsApp Inbound Message Preset"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4201,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("input", {
														type: "text",
														value: cmsForm.whatsappMessage,
														onChange: (e) => updateCmsField("whatsappMessage", e.target.value),
														className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
														placeholder: "Hello Omnicore Harare Desk — I would like an equipment quote."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4204,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4200,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 4059,
												columnNumber: 21
											}, this),
											(cmsCategory === "hours" || cmsCategory === "all" || cmsSearch) && /* @__PURE__ */ (void 0)("div", {
												className: "rounded-3xl border border-black/[0.06] bg-white p-5 sm:p-6 shadow-xs space-y-4",
												children: [
													/* @__PURE__ */ (void 0)("div", {
														className: "flex items-center justify-between pb-3 border-b border-black/[0.05]",
														children: [/* @__PURE__ */ (void 0)("div", {
															className: "flex items-center gap-2",
															children: [/* @__PURE__ */ (void 0)("div", {
																className: "flex size-7 items-center justify-center rounded-lg bg-purple-50 text-purple-700",
																children: /* @__PURE__ */ (void 0)(Clock, { className: "size-4" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 4221,
																	columnNumber: 29
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4220,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
																className: "text-sm font-semibold text-[#1D1D1F]",
																children: "Operating Hours, Dispatch Turnaround & SLAs"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4224,
																columnNumber: 29
															}, this), /* @__PURE__ */ (void 0)("p", {
																className: "text-[11px] text-[#86868B]",
																children: "Demonstration times, loading schedules, after-hours hotlines, delivery turnarounds, and terms."
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4227,
																columnNumber: 29
															}, this)] }, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 4223,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4219,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "rounded-full bg-purple-100/60 px-2 py-0.5 text-[10px] font-semibold text-purple-800",
															children: "SLA & Yard Times"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4232,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4218,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
														children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Monday – Friday Hours"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4239,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.hoursWeekday,
															onChange: (e) => updateCmsField("hoursWeekday", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "08:00 – 17:00"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4242,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4238,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Saturday Hours"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4251,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.hoursSaturday,
															onChange: (e) => updateCmsField("hoursSaturday", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "08:00 – 13:00"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4254,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4250,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4237,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
														children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Sunday & Public Holiday Policy"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4266,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.hoursSunday,
															onChange: (e) => updateCmsField("hoursSunday", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "Closed · WhatsApp desk monitored"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4269,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4265,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Quotation & Price SLA Statement"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4278,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.responseSLA,
															onChange: (e) => updateCmsField("responseSLA", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "Average tender & pricing turnaround under 15 minutes during yard hours."
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4281,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4277,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4264,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
														children: "Nationwide Dispatch & Delivery Lead Time"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4292,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("input", {
														type: "text",
														value: cmsForm.dispatchTurnaround,
														onChange: (e) => updateCmsField("dispatchTurnaround", e.target.value),
														className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
														placeholder: "Same-day lowbed loading for in-stock plant; 24–48h nationwide delivery."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4295,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4291,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
														children: "After-Hours & Breakdown Emergency Notice"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4305,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("input", {
														type: "text",
														value: cmsForm.afterHoursNotice,
														onChange: (e) => updateCmsField("afterHoursNotice", e.target.value),
														className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
														placeholder: "Urgent site breakdown & pump dispatch hotline active 24/7 on WhatsApp."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4308,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4304,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
														children: "Standard Factory Parts Warranty Statement"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4318,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("input", {
														type: "text",
														value: cmsForm.warrantyNotice,
														onChange: (e) => updateCmsField("warrantyNotice", e.target.value),
														className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
														placeholder: "12-month factory parts warranty & Harare commissioning included."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4321,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4317,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
														children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Accepted Payment Currencies & Terms"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4332,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.termsNotice,
															onChange: (e) => updateCmsField("termsNotice", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "All quotes issued in USD payable via Nostro, RTGS, or cash on collection."
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4335,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4331,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Payment Channels Accepted"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4344,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.paymentMethods,
															onChange: (e) => updateCmsField("paymentMethods", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "Bank Transfer, Nostro, USD Cash, EcoCash, ZIPIT"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4347,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4343,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4330,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
														children: "Formal Tenders & PRAZ Procurement Notice"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4358,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("input", {
														type: "text",
														value: cmsForm.tendersNotice || "",
														onChange: (e) => updateCmsField("tendersNotice", e.target.value),
														className: "w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
														placeholder: "PRAZ Registered Supplier · Formal tenders, municipal quotes & mine procurement packs issued within 24h."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4361,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4357,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 4217,
												columnNumber: 21
											}, this),
											(cmsCategory === "divisions" || cmsCategory === "all" || cmsSearch) && /* @__PURE__ */ (void 0)("div", {
												className: "rounded-3xl border border-black/[0.06] bg-white p-5 sm:p-7 shadow-xs space-y-5",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "flex items-center justify-between pb-3.5 border-b border-black/[0.05]",
													children: [/* @__PURE__ */ (void 0)("div", {
														className: "flex items-center gap-2.5",
														children: [/* @__PURE__ */ (void 0)("div", {
															className: "flex size-8 items-center justify-center rounded-xl bg-orange-50 text-orange-700",
															children: /* @__PURE__ */ (void 0)(Package, { className: "size-4.5" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4378,
																columnNumber: 29
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4377,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
															className: "text-base font-semibold text-[#1D1D1F]",
															children: "Specialized Division Headlines, Eyebrows & Narrative Copy"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4381,
															columnNumber: 29
														}, this), /* @__PURE__ */ (void 0)("p", {
															className: "text-xs text-[#86868B] mt-0.5",
															children: "Custom positioning headlines, sector eyebrows, and sub-narratives across the 5 industrial division sections."
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4384,
															columnNumber: 29
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4380,
															columnNumber: 27
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4376,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "rounded-full bg-orange-100/70 px-3 py-1 text-xs font-semibold text-orange-800",
														children: "5 Sectors"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4389,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 4375,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("div", {
													className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4.5",
													children: [
														/* @__PURE__ */ (void 0)("div", {
															className: "p-4 rounded-2xl bg-[#F9F9FA] border border-black/[0.05] space-y-2.5",
															children: [/* @__PURE__ */ (void 0)("div", {
																className: "flex items-center justify-between",
																children: [/* @__PURE__ */ (void 0)("span", {
																	className: "text-xs font-bold text-amber-800 uppercase tracking-wider",
																	children: "1. Mining Equipment"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 4399,
																	columnNumber: 29
																}, this), /* @__PURE__ */ (void 0)("span", {
																	className: "text-[10px] font-medium text-[#86868B]",
																	children: "Gold & Chrome"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 4402,
																	columnNumber: 29
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 4398,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("div", {
																className: "space-y-2",
																children: [
																	/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Eyebrow"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4406,
																		columnNumber: 31
																	}, this), /* @__PURE__ */ (void 0)("input", {
																		type: "text",
																		value: cmsForm.miningEyebrow,
																		onChange: (e) => updateCmsField("miningEyebrow", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-medium"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4407,
																		columnNumber: 31
																	}, this)] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 4405,
																		columnNumber: 29
																	}, this),
																	/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Headline"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4415,
																		columnNumber: 31
																	}, this), /* @__PURE__ */ (void 0)("input", {
																		type: "text",
																		value: cmsForm.miningHeadline,
																		onChange: (e) => updateCmsField("miningHeadline", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-semibold text-[#1D1D1F]"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4416,
																		columnNumber: 31
																	}, this)] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 4414,
																		columnNumber: 29
																	}, this),
																	/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Narrative Subheadline"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4424,
																		columnNumber: 31
																	}, this), /* @__PURE__ */ (void 0)("textarea", {
																		rows: 2,
																		value: cmsForm.miningSubheadline || "",
																		onChange: (e) => updateCmsField("miningSubheadline", e.target.value),
																		className: "w-full rounded-lg border border-black/[0.08] bg-white p-2 text-xs leading-relaxed",
																		placeholder: "Complete gravity and milling circuits engineered for small-scale and commercial miners..."
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4425,
																		columnNumber: 31
																	}, this)] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 4423,
																		columnNumber: 29
																	}, this)
																]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 4404,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4397,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", {
															className: "p-4 rounded-2xl bg-[#F9F9FA] border border-black/[0.05] space-y-2.5",
															children: [/* @__PURE__ */ (void 0)("div", {
																className: "flex items-center justify-between",
																children: [/* @__PURE__ */ (void 0)("span", {
																	className: "text-xs font-bold text-blue-800 uppercase tracking-wider",
																	children: "2. Plant Hire Fleet"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 4439,
																	columnNumber: 29
																}, this), /* @__PURE__ */ (void 0)("span", {
																	className: "text-[10px] font-medium text-[#86868B]",
																	children: "Yellow Metal"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 4442,
																	columnNumber: 29
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 4438,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("div", {
																className: "space-y-2",
																children: [
																	/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Eyebrow"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4446,
																		columnNumber: 31
																	}, this), /* @__PURE__ */ (void 0)("input", {
																		type: "text",
																		value: cmsForm.hireEyebrow,
																		onChange: (e) => updateCmsField("hireEyebrow", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-medium"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4447,
																		columnNumber: 31
																	}, this)] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 4445,
																		columnNumber: 29
																	}, this),
																	/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Headline"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4455,
																		columnNumber: 31
																	}, this), /* @__PURE__ */ (void 0)("input", {
																		type: "text",
																		value: cmsForm.hireHeadline,
																		onChange: (e) => updateCmsField("hireHeadline", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-semibold text-[#1D1D1F]"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4456,
																		columnNumber: 31
																	}, this)] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 4454,
																		columnNumber: 29
																	}, this),
																	/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Narrative Subheadline"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4464,
																		columnNumber: 31
																	}, this), /* @__PURE__ */ (void 0)("textarea", {
																		rows: 2,
																		value: cmsForm.hireSubheadline || "",
																		onChange: (e) => updateCmsField("hireSubheadline", e.target.value),
																		className: "w-full rounded-lg border border-black/[0.08] bg-white p-2 text-xs leading-relaxed",
																		placeholder: "Late-model CAT diggers, 37m concrete boom pumps..."
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4465,
																		columnNumber: 31
																	}, this)] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 4463,
																		columnNumber: 29
																	}, this)
																]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 4444,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4437,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", {
															className: "p-4 rounded-2xl bg-[#F9F9FA] border border-black/[0.05] space-y-2.5",
															children: [/* @__PURE__ */ (void 0)("div", {
																className: "flex items-center justify-between",
																children: [/* @__PURE__ */ (void 0)("span", {
																	className: "text-xs font-bold text-emerald-800 uppercase tracking-wider",
																	children: "3. Farming Machinery"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 4479,
																	columnNumber: 29
																}, this), /* @__PURE__ */ (void 0)("span", {
																	className: "text-[10px] font-medium text-[#86868B]",
																	children: "Agro-Processing"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 4482,
																	columnNumber: 29
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 4478,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("div", {
																className: "space-y-2",
																children: [
																	/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Eyebrow"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4486,
																		columnNumber: 31
																	}, this), /* @__PURE__ */ (void 0)("input", {
																		type: "text",
																		value: cmsForm.farmingEyebrow,
																		onChange: (e) => updateCmsField("farmingEyebrow", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-medium"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4487,
																		columnNumber: 31
																	}, this)] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 4485,
																		columnNumber: 29
																	}, this),
																	/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Headline"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4495,
																		columnNumber: 31
																	}, this), /* @__PURE__ */ (void 0)("input", {
																		type: "text",
																		value: cmsForm.farmingHeadline,
																		onChange: (e) => updateCmsField("farmingHeadline", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-semibold text-[#1D1D1F]"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4496,
																		columnNumber: 31
																	}, this)] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 4494,
																		columnNumber: 29
																	}, this),
																	/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Narrative Subheadline"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4504,
																		columnNumber: 31
																	}, this), /* @__PURE__ */ (void 0)("textarea", {
																		rows: 2,
																		value: cmsForm.farmingSubheadline || "",
																		onChange: (e) => updateCmsField("farmingSubheadline", e.target.value),
																		className: "w-full rounded-lg border border-black/[0.08] bg-white p-2 text-xs leading-relaxed",
																		placeholder: "Hammer mills, vertical feed mixers, and oil presses..."
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4505,
																		columnNumber: 31
																	}, this)] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 4503,
																		columnNumber: 29
																	}, this)
																]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 4484,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4477,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", {
															className: "p-4 rounded-2xl bg-[#F9F9FA] border border-black/[0.05] space-y-2.5",
															children: [/* @__PURE__ */ (void 0)("div", {
																className: "flex items-center justify-between",
																children: [/* @__PURE__ */ (void 0)("span", {
																	className: "text-xs font-bold text-stone-800 uppercase tracking-wider",
																	children: "4. Hardware & Construction"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 4519,
																	columnNumber: 29
																}, this), /* @__PURE__ */ (void 0)("span", {
																	className: "text-[10px] font-medium text-[#86868B]",
																	children: "Fencing & Civils"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 4522,
																	columnNumber: 29
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 4518,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("div", {
																className: "space-y-2",
																children: [
																	/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Eyebrow"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4526,
																		columnNumber: 31
																	}, this), /* @__PURE__ */ (void 0)("input", {
																		type: "text",
																		value: cmsForm.hardwareEyebrow,
																		onChange: (e) => updateCmsField("hardwareEyebrow", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-medium"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4527,
																		columnNumber: 31
																	}, this)] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 4525,
																		columnNumber: 29
																	}, this),
																	/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Headline"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4535,
																		columnNumber: 31
																	}, this), /* @__PURE__ */ (void 0)("input", {
																		type: "text",
																		value: cmsForm.hardwareHeadline,
																		onChange: (e) => updateCmsField("hardwareHeadline", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-semibold text-[#1D1D1F]"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4536,
																		columnNumber: 31
																	}, this)] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 4534,
																		columnNumber: 29
																	}, this),
																	/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Narrative Subheadline"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4544,
																		columnNumber: 31
																	}, this), /* @__PURE__ */ (void 0)("textarea", {
																		rows: 2,
																		value: cmsForm.hardwareSubheadline || "",
																		onChange: (e) => updateCmsField("hardwareSubheadline", e.target.value),
																		className: "w-full rounded-lg border border-black/[0.08] bg-white p-2 text-xs leading-relaxed",
																		placeholder: "Diamond mesh, razor wire, block machines..."
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4545,
																		columnNumber: 31
																	}, this)] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 4543,
																		columnNumber: 29
																	}, this)
																]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 4524,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4517,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", {
															className: "p-4 rounded-2xl bg-[#F9F9FA] border border-black/[0.05] space-y-2.5",
															children: [/* @__PURE__ */ (void 0)("div", {
																className: "flex items-center justify-between",
																children: [/* @__PURE__ */ (void 0)("span", {
																	className: "text-xs font-bold text-purple-800 uppercase tracking-wider",
																	children: "5. Industry & Manufacturing"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 4559,
																	columnNumber: 29
																}, this), /* @__PURE__ */ (void 0)("span", {
																	className: "text-[10px] font-medium text-[#86868B]",
																	children: "Power & Motors"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 4562,
																	columnNumber: 29
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 4558,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("div", {
																className: "space-y-2",
																children: [
																	/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Eyebrow"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4566,
																		columnNumber: 31
																	}, this), /* @__PURE__ */ (void 0)("input", {
																		type: "text",
																		value: cmsForm.industryEyebrow,
																		onChange: (e) => updateCmsField("industryEyebrow", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-medium"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4567,
																		columnNumber: 31
																	}, this)] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 4565,
																		columnNumber: 29
																	}, this),
																	/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Headline"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4575,
																		columnNumber: 31
																	}, this), /* @__PURE__ */ (void 0)("input", {
																		type: "text",
																		value: cmsForm.industryHeadline,
																		onChange: (e) => updateCmsField("industryHeadline", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-semibold text-[#1D1D1F]"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4576,
																		columnNumber: 31
																	}, this)] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 4574,
																		columnNumber: 29
																	}, this),
																	/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Narrative Subheadline"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4584,
																		columnNumber: 31
																	}, this), /* @__PURE__ */ (void 0)("textarea", {
																		rows: 2,
																		value: cmsForm.industrySubheadline || "",
																		onChange: (e) => updateCmsField("industrySubheadline", e.target.value),
																		className: "w-full rounded-lg border border-black/[0.08] bg-white p-2 text-xs leading-relaxed",
																		placeholder: "Heavy-duty electric motors, screw compressors..."
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4585,
																		columnNumber: 31
																	}, this)] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 4583,
																		columnNumber: 29
																	}, this)
																]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 4564,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4557,
															columnNumber: 25
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 4395,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 4374,
												columnNumber: 21
											}, this),
											(cmsCategory === "about" || cmsCategory === "all" || cmsSearch) && /* @__PURE__ */ (void 0)("div", {
												className: "rounded-3xl border border-black/[0.06] bg-white p-5 sm:p-7 shadow-xs space-y-5",
												children: [
													/* @__PURE__ */ (void 0)("div", {
														className: "flex items-center justify-between pb-3.5 border-b border-black/[0.05]",
														children: [/* @__PURE__ */ (void 0)("div", {
															className: "flex items-center gap-2.5",
															children: [/* @__PURE__ */ (void 0)("div", {
																className: "flex size-8 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700",
																children: /* @__PURE__ */ (void 0)(Building2, { className: "size-4.5" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 4605,
																	columnNumber: 29
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4604,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
																className: "text-base font-semibold text-[#1D1D1F]",
																children: "Corporate Narrative, Mission & 4 Guarantees"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4608,
																columnNumber: 29
															}, this), /* @__PURE__ */ (void 0)("p", {
																className: "text-xs text-[#86868B] mt-0.5",
																children: "Harare yard presence story, nationwide mission, and core operational guarantees across Zimbabwe."
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4611,
																columnNumber: 29
															}, this)] }, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 4607,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4603,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "rounded-full bg-indigo-100/70 px-3 py-1 text-xs font-semibold text-indigo-800",
															children: "About & Mission"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4616,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4602,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "grid grid-cols-1 lg:grid-cols-2 gap-3.5",
														children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "About Section Headline"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4623,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.aboutHeadline,
															onChange: (e) => updateCmsField("aboutHeadline", e.target.value),
															className: "w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "Direct Importers & Stockists of Heavy Industrial Equipment"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4626,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4622,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Company Mission Statement"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4636,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("textarea", {
															rows: 2,
															value: cmsForm.aboutMission,
															onChange: (e) => updateCmsField("aboutMission", e.target.value),
															className: "w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] p-2.5 text-xs leading-relaxed focus:bg-white focus:outline-none",
															placeholder: "Supplying verified commercial machinery with local parts, field commissioning..."
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4639,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4635,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4621,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
														children: "Company Origin & Harare Physical Stock Narrative"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4650,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("textarea", {
														rows: 2,
														value: cmsForm.aboutStory || "",
														onChange: (e) => updateCmsField("aboutStory", e.target.value),
														className: "w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] p-3 text-xs leading-relaxed focus:bg-white focus:outline-none",
														placeholder: "Founded to bridge the equipment gap for Zimbabwean miners, contractors, and farmers, Omnicore Solutions maintains a fully-stocked Cranborne yard..."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4653,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4649,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "space-y-3 pt-2 border-t border-black/[0.05]",
														children: [/* @__PURE__ */ (void 0)("span", {
															className: "font-semibold text-xs text-[#1D1D1F] block",
															children: "4 Core Operational Guarantees"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4663,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", {
															className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",
															children: [
																/* @__PURE__ */ (void 0)("div", {
																	className: "rounded-xl border border-black/[0.05] bg-[#F9F9FA] p-3 space-y-1",
																	children: [/* @__PURE__ */ (void 0)("label", {
																		className: "text-[10px] font-bold text-[#86868B] block uppercase tracking-wider",
																		children: "Pillar 1 · Yard Stock"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4668,
																		columnNumber: 29
																	}, this), /* @__PURE__ */ (void 0)("input", {
																		type: "text",
																		value: cmsForm.aboutPillar1,
																		onChange: (e) => updateCmsField("aboutPillar1", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs focus:bg-white focus:outline-none font-medium"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4669,
																		columnNumber: 29
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 4667,
																	columnNumber: 27
																}, this),
																/* @__PURE__ */ (void 0)("div", {
																	className: "rounded-xl border border-black/[0.05] bg-[#F9F9FA] p-3 space-y-1",
																	children: [/* @__PURE__ */ (void 0)("label", {
																		className: "text-[10px] font-bold text-[#86868B] block uppercase tracking-wider",
																		children: "Pillar 2 · Field Proven"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4677,
																		columnNumber: 29
																	}, this), /* @__PURE__ */ (void 0)("input", {
																		type: "text",
																		value: cmsForm.aboutPillar2,
																		onChange: (e) => updateCmsField("aboutPillar2", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs focus:bg-white focus:outline-none font-medium"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4678,
																		columnNumber: 29
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 4676,
																	columnNumber: 27
																}, this),
																/* @__PURE__ */ (void 0)("div", {
																	className: "rounded-xl border border-black/[0.05] bg-[#F9F9FA] p-3 space-y-1",
																	children: [/* @__PURE__ */ (void 0)("label", {
																		className: "text-[10px] font-bold text-[#86868B] block uppercase tracking-wider",
																		children: "Pillar 3 · Spares Back-up"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4686,
																		columnNumber: 29
																	}, this), /* @__PURE__ */ (void 0)("input", {
																		type: "text",
																		value: cmsForm.aboutPillar3,
																		onChange: (e) => updateCmsField("aboutPillar3", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs focus:bg-white focus:outline-none font-medium"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4687,
																		columnNumber: 29
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 4685,
																	columnNumber: 27
																}, this),
																/* @__PURE__ */ (void 0)("div", {
																	className: "rounded-xl border border-black/[0.05] bg-[#F9F9FA] p-3 space-y-1",
																	children: [/* @__PURE__ */ (void 0)("label", {
																		className: "text-[10px] font-bold text-[#86868B] block uppercase tracking-wider",
																		children: "Pillar 4 · Logistics"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4695,
																		columnNumber: 29
																	}, this), /* @__PURE__ */ (void 0)("input", {
																		type: "text",
																		value: cmsForm.aboutPillar4,
																		onChange: (e) => updateCmsField("aboutPillar4", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs focus:bg-white focus:outline-none font-medium"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4696,
																		columnNumber: 29
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 4694,
																	columnNumber: 27
																}, this)
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4666,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4662,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 4601,
												columnNumber: 21
											}, this),
											(cmsCategory === "social" || cmsCategory === "all" || cmsSearch) && /* @__PURE__ */ (void 0)("div", {
												className: "rounded-3xl border border-black/[0.06] bg-white p-5 sm:p-6 shadow-xs space-y-4",
												children: [
													/* @__PURE__ */ (void 0)("div", {
														className: "flex items-center justify-between pb-3 border-b border-black/[0.05]",
														children: [/* @__PURE__ */ (void 0)("div", {
															className: "flex items-center gap-2",
															children: [/* @__PURE__ */ (void 0)("div", {
																className: "flex size-7 items-center justify-center rounded-lg bg-teal-50 text-teal-700",
																children: /* @__PURE__ */ (void 0)(Globe, { className: "size-4" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 4714,
																	columnNumber: 29
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4713,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
																className: "text-sm font-semibold text-[#1D1D1F]",
																children: "Social Profiles & Footer Compliance"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4717,
																columnNumber: 29
															}, this), /* @__PURE__ */ (void 0)("p", {
																className: "text-[11px] text-[#86868B]",
																children: "Official social channels, company overview, and bottom copyright statement."
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4720,
																columnNumber: 29
															}, this)] }, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 4716,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4712,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "rounded-full bg-teal-100/60 px-2 py-0.5 text-[10px] font-semibold text-teal-800",
															children: "Channels"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4725,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4711,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
														children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "LinkedIn Company Profile URL"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4732,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "url",
															value: cmsForm.linkedinUrl,
															onChange: (e) => updateCmsField("linkedinUrl", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none font-mono text-[11px]",
															placeholder: "https://www.linkedin.com/company/..."
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4735,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4731,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Facebook Page URL"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4744,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "url",
															value: cmsForm.facebookUrl,
															onChange: (e) => updateCmsField("facebookUrl", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none font-mono text-[11px]",
															placeholder: "https://www.facebook.com/..."
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4747,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4743,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4730,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
														children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Founded Year"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4759,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.foundedYear,
															onChange: (e) => updateCmsField("foundedYear", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "2024"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4762,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4758,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Registration & Scope Subtitle"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4771,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.companyReg,
															onChange: (e) => updateCmsField("companyReg", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "Harare Industrial & Mining Machinery Supplier"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4774,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4770,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4757,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
														children: "Footer Brand & Mission Summary"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4785,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("textarea", {
														rows: 2,
														value: cmsForm.footerAbout,
														onChange: (e) => updateCmsField("footerAbout", e.target.value),
														className: "w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] p-3 text-xs leading-relaxed focus:bg-white focus:outline-none",
														placeholder: "Direct supply, equipment hire, and on-site plant commissioning..."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4788,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4784,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
														children: "Footer Copyright Notice"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4798,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("input", {
														type: "text",
														value: cmsForm.footerCopyright,
														onChange: (e) => updateCmsField("footerCopyright", e.target.value),
														className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
														placeholder: "© 2026 Omnicore Solutions. All rights reserved..."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4801,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4797,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 4710,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "rounded-2xl border border-black/[0.06] bg-white p-4 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "flex items-center gap-2 text-xs text-[#86868B]",
													children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "size-4 text-emerald-600" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4815,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("span", { children: "Updates propagate instantaneously to all visitors and components across the site." }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4816,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 4814,
													columnNumber: 21
												}, this), /* @__PURE__ */ (void 0)("div", {
													className: "flex items-center gap-2.5",
													children: [/* @__PURE__ */ (void 0)("button", {
														type: "button",
														onClick: handleResetSiteCopy,
														className: "rounded-full border border-black/[0.08] bg-[#F5F5F7] px-4 py-2 text-xs font-medium text-[#6E6E73] hover:text-[#1D1D1F] transition-all",
														children: "Reset"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4820,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("button", {
														type: "submit",
														className: "rounded-full bg-[#1D1D1F] px-6 py-2 text-xs font-semibold text-white shadow-xs hover:bg-black transition-all active:scale-95 flex items-center gap-1.5",
														children: [/* @__PURE__ */ (void 0)(Check, { className: "size-3.5" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4831,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("span", { children: "Publish All Changes Live" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4832,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4827,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 4819,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 4813,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 3673,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 3672,
									columnNumber: 15
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "lg:col-span-5 xl:col-span-5 sticky top-20 space-y-4",
									children: /* @__PURE__ */ (void 0)("div", {
										className: "rounded-3xl border border-black/[0.06] bg-white p-5 shadow-xs space-y-4",
										children: [
											/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center justify-between",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (void 0)("div", {
														className: "flex size-7 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700",
														children: /* @__PURE__ */ (void 0)(Eye, { className: "size-4" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4845,
															columnNumber: 25
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4844,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
														className: "text-sm font-semibold text-[#1D1D1F]",
														children: "Live Interactive Visual Preview"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4848,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("p", {
														className: "text-[10px] text-[#86868B]",
														children: "Simulates real-time rendering as you type"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4851,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4847,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 4843,
													columnNumber: 21
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "flex items-center gap-1 rounded-full bg-emerald-100/70 px-2 py-0.5 text-[10px] font-semibold text-emerald-800",
													children: [/* @__PURE__ */ (void 0)("span", { className: "size-1.5 rounded-full bg-emerald-600 animate-ping" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4858,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("span", { children: "Live Sync" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4859,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 4857,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 4842,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (void 0)("div", {
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
												].map((mode) => /* @__PURE__ */ (void 0)("button", {
													type: "button",
													onClick: () => setCmsPreviewTab(mode.id),
													className: `rounded-lg py-1 font-medium transition-all text-center ${cmsPreviewTab === mode.id ? "bg-white text-[#1D1D1F] font-semibold shadow-2xs" : "text-[#6E6E73] hover:text-[#1D1D1F]"}`,
													children: mode.label
												}, mode.id, false, {
													fileName: _jsxFileName,
													lineNumber: 4873,
													columnNumber: 23
												}, this))
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 4864,
												columnNumber: 19
											}, this),
											cmsPreviewTab === "hero" && /* @__PURE__ */ (void 0)("div", {
												className: "rounded-2xl bg-[#14110E] p-4 text-[#F3EFE6] border border-black/20 space-y-3 relative overflow-hidden shadow-inner",
												children: [
													/* @__PURE__ */ (void 0)("div", {
														className: "flex items-center gap-1.5",
														children: /* @__PURE__ */ (void 0)("div", {
															className: "inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] text-white/90",
															children: [/* @__PURE__ */ (void 0)("span", { className: "size-1.5 rounded-full bg-[#1FA855]" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4893,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("span", {
																className: "truncate max-w-[200px]",
																children: cmsForm.heroBadge || "Cranborne yard"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4894,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4892,
															columnNumber: 25
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4891,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("h4", {
														className: "text-base sm:text-lg font-semibold tracking-tight text-white leading-tight",
														children: cmsForm.heroHeadline || "Plant for Zimbabwe’s mines, farms and pours."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4898,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("p", {
														className: "text-[11px] leading-relaxed text-white/75 line-clamp-3",
														children: cmsForm.heroSubheadline || "Gold circuits, fence plant, self-loading mixers..."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4902,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "flex flex-wrap gap-1.5 pt-1",
														children: [
															/* @__PURE__ */ (void 0)("span", {
																className: "inline-flex items-center gap-1 rounded-full bg-[#1FA855] px-3 py-1 text-[10px] font-semibold text-white",
																children: [/* @__PURE__ */ (void 0)(WhatsAppIcon, { className: "size-3" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 4908,
																	columnNumber: 27
																}, this), cmsForm.heroCtaPrimary || "WhatsApp"]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 4907,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("span", {
																className: "rounded-full bg-white px-3 py-1 text-[10px] font-semibold text-[#14110E]",
																children: cmsForm.heroCtaSecondary || "Request Quote"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4911,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("span", {
																className: "rounded-full border border-white/20 px-2.5 py-1 text-[10px] text-white/80",
																children: cmsForm.heroCtaTertiary || "Catalogue"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4914,
																columnNumber: 25
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4906,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "grid grid-cols-2 gap-1.5 pt-2 border-t border-white/10 text-[10px]",
														children: [
															/* @__PURE__ */ (void 0)("div", {
																className: "bg-white/5 rounded-lg p-1.5",
																children: [/* @__PURE__ */ (void 0)("p", {
																	className: "font-semibold text-white truncate",
																	children: cmsForm.stat1Label || "Harare hub"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 4922,
																	columnNumber: 27
																}, this), /* @__PURE__ */ (void 0)("p", {
																	className: "text-white/60 truncate",
																	children: cmsForm.stat1Detail || "Cranborne yard"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 4923,
																	columnNumber: 27
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 4921,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("div", {
																className: "bg-white/5 rounded-lg p-1.5",
																children: [/* @__PURE__ */ (void 0)("p", {
																	className: "font-semibold text-white truncate",
																	children: cmsForm.stat2Label || "1–25 TPH"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 4926,
																	columnNumber: 27
																}, this), /* @__PURE__ */ (void 0)("p", {
																	className: "text-white/60 truncate",
																	children: cmsForm.stat2Detail || "Gold circuits"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 4927,
																	columnNumber: 27
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 4925,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("div", {
																className: "bg-white/5 rounded-lg p-1.5",
																children: [/* @__PURE__ */ (void 0)("p", {
																	className: "font-semibold text-white truncate",
																	children: cmsForm.stat3Label || "Wet & dry"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 4930,
																	columnNumber: 27
																}, this), /* @__PURE__ */ (void 0)("p", {
																	className: "text-white/60 truncate",
																	children: cmsForm.stat3Detail || "Plant hire"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 4931,
																	columnNumber: 27
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 4929,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("div", {
																className: "bg-white/5 rounded-lg p-1.5",
																children: [/* @__PURE__ */ (void 0)("p", {
																	className: "font-semibold text-white truncate",
																	children: cmsForm.stat4Label || "10 provinces"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 4934,
																	columnNumber: 27
																}, this), /* @__PURE__ */ (void 0)("p", {
																	className: "text-white/60 truncate",
																	children: cmsForm.stat4Detail || "Lowbed delivery"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 4935,
																	columnNumber: 27
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 4933,
																columnNumber: 25
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4920,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 4890,
												columnNumber: 21
											}, this),
											cmsPreviewTab === "yard" && /* @__PURE__ */ (void 0)("div", {
												className: "rounded-2xl bg-[#F5F5F7] p-4 border border-black/[0.06] space-y-3",
												children: [
													/* @__PURE__ */ (void 0)("div", {
														className: "flex items-center justify-between",
														children: [/* @__PURE__ */ (void 0)("span", {
															className: "inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-0.5 text-[10px] font-semibold text-[#1D1D1F] border border-black/[0.05]",
															children: [
																/* @__PURE__ */ (void 0)(MapPin, { className: "size-3 text-[#0071E3]" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 4946,
																	columnNumber: 27
																}, this),
																cmsForm.yardCity || "Harare",
																" Yard Pin"
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4945,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "text-[10px] text-[#86868B]",
															children: cmsForm.yardCountry || "Zimbabwe"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4949,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4944,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h4", {
														className: "text-sm font-semibold text-[#1D1D1F]",
														children: cmsForm.yardAddressLine1 || "115 Chiremba Road"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4953,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("p", {
														className: "text-xs text-[#6E6E73]",
														children: cmsForm.yardAddressLine2 || "Cranborne, Harare"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4956,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4952,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("p", {
														className: "text-[11px] leading-relaxed text-[#86868B] bg-white rounded-xl p-2.5 border border-black/[0.04]",
														children: cmsForm.yardDirectionsNote || "Heavy machinery can be inspected, demonstrated, and loaded onto lowbeds directly from our yard."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4959,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "space-y-1 text-[11px]",
														children: [
															/* @__PURE__ */ (void 0)("div", {
																className: "flex items-center justify-between",
																children: [/* @__PURE__ */ (void 0)("span", {
																	className: "text-[#86868B]",
																	children: "Mon – Fri:"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 4965,
																	columnNumber: 27
																}, this), /* @__PURE__ */ (void 0)("span", {
																	className: "font-medium text-[#1D1D1F]",
																	children: cmsForm.hoursWeekday || "08:00 – 17:00"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 4966,
																	columnNumber: 27
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 4964,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("div", {
																className: "flex items-center justify-between",
																children: [/* @__PURE__ */ (void 0)("span", {
																	className: "text-[#86868B]",
																	children: "Saturday:"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 4969,
																	columnNumber: 27
																}, this), /* @__PURE__ */ (void 0)("span", {
																	className: "font-medium text-[#1D1D1F]",
																	children: cmsForm.hoursSaturday || "08:00 – 13:00"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 4970,
																	columnNumber: 27
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 4968,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("div", {
																className: "flex items-center justify-between",
																children: [/* @__PURE__ */ (void 0)("span", {
																	className: "text-[#86868B]",
																	children: "Sunday:"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 4973,
																	columnNumber: 27
																}, this), /* @__PURE__ */ (void 0)("span", {
																	className: "font-medium text-[#1D1D1F]",
																	children: cmsForm.hoursSunday || "Closed"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 4974,
																	columnNumber: 27
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 4972,
																columnNumber: 25
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4963,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "flex gap-2 pt-1",
														children: [/* @__PURE__ */ (void 0)("a", {
															href: cmsForm.googleMapsUrl,
															target: "_blank",
															rel: "noopener noreferrer",
															className: "flex-1 rounded-xl bg-white border border-black/[0.08] py-1.5 text-center text-[10px] font-semibold text-[#1D1D1F] hover:bg-black/[0.02]",
															children: "Google Maps Pin ↗"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4979,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("a", {
															href: `tel:${cmsForm.primaryPhoneTel}`,
															className: "flex-1 rounded-xl bg-[#1D1D1F] py-1.5 text-center text-[10px] font-semibold text-white hover:bg-black",
															children: "Call Yard Desk"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4987,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4978,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 4943,
												columnNumber: 21
											}, this),
											cmsPreviewTab === "whatsapp" && /* @__PURE__ */ (void 0)("div", {
												className: "rounded-2xl bg-[#E8F5E9] p-4 border border-[#A5D6A7] space-y-3",
												children: [
													/* @__PURE__ */ (void 0)("div", {
														className: "flex items-center justify-between",
														children: [/* @__PURE__ */ (void 0)("div", {
															className: "flex items-center gap-1.5",
															children: [/* @__PURE__ */ (void 0)(WhatsAppIcon, { className: "size-4 text-[#1FA855]" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 5002,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("span", {
																className: "text-xs font-bold text-[#1B5E20]",
																children: "Harare WhatsApp Desk"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 5003,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5001,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "text-[10px] font-medium text-[#2E7D32]",
															children: ["Active · +", cmsForm.whatsappNumber]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5005,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5e3,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "rounded-xl bg-white p-3 border border-[#C8E6C9] shadow-2xs space-y-1.5",
														children: [
															/* @__PURE__ */ (void 0)("span", {
																className: "text-[9px] font-bold text-[#6E6E73] uppercase tracking-wide",
																children: "Pre-Filled User Message:"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 5011,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("div", {
																className: "rounded-lg bg-[#F1F8E9] p-2 text-xs text-[#1B5E20] italic border-l-2 border-[#1FA855]",
																children: [
																	"\"",
																	cmsForm.whatsappMessage || "Hello Omnicore Harare Desk — I would like an equipment quote.",
																	"\""
																]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 5014,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("p", {
																className: "text-[10px] text-[#6E6E73]",
																children: ["SLA: ", cmsForm.responseSLA || "Average response < 15 mins"]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 5017,
																columnNumber: 25
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5010,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "flex items-center justify-between pt-1",
														children: [/* @__PURE__ */ (void 0)("span", {
															className: "text-[10px] text-[#6E6E73]",
															children: "Website Floating FAB:"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5024,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", {
															className: "inline-flex items-center gap-2 rounded-full bg-[#1FA855] px-3 py-1.5 text-white shadow-xs",
															children: [/* @__PURE__ */ (void 0)(WhatsAppIcon, { className: "size-3.5" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 5026,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("div", {
																className: "text-left",
																children: [/* @__PURE__ */ (void 0)("span", {
																	className: "text-[10px] font-bold block leading-tight",
																	children: "WhatsApp Desk"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 5028,
																	columnNumber: 29
																}, this), /* @__PURE__ */ (void 0)("span", {
																	className: "text-[8px] text-emerald-100 block leading-tight",
																	children: cmsForm.yardAddressLine2 || "Cranborne · Harare"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 5029,
																	columnNumber: 29
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 5027,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5025,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5023,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("a", {
														href: `https://wa.me/${cmsForm.whatsappNumber}?text=${encodeURIComponent(cmsForm.whatsappMessage)}`,
														target: "_blank",
														rel: "noopener noreferrer",
														className: "block w-full text-center rounded-xl bg-[#1FA855] py-2 text-xs font-semibold text-white shadow-xs hover:bg-[#1B934B] transition-all",
														children: "Test WhatsApp Link ↗"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5034,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 4999,
												columnNumber: 21
											}, this),
											cmsPreviewTab === "about" && /* @__PURE__ */ (void 0)("div", {
												className: "rounded-2xl bg-[#F5F5F7] p-4 border border-black/[0.06] space-y-3",
												children: [
													/* @__PURE__ */ (void 0)("div", {
														className: "flex items-center justify-between",
														children: [/* @__PURE__ */ (void 0)("span", {
															className: "inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-0.5 text-[10px] font-semibold text-[#1D1D1F] border border-black/[0.05]",
															children: [/* @__PURE__ */ (void 0)(Building2, { className: "size-3 text-indigo-600" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 5050,
																columnNumber: 27
															}, this), "Company Value Proposition"]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5049,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "text-[10px] text-[#86868B]",
															children: "Harare Operations"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5053,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5048,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h4", {
														className: "text-sm font-semibold text-[#1D1D1F]",
														children: cmsForm.aboutHeadline || "Direct Importers & Stockists of Heavy Industrial Equipment"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5057,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("p", {
														className: "text-xs text-[#6E6E73] mt-1 leading-relaxed",
														children: cmsForm.aboutMission || "Supplying verified commercial machinery with local parts, field commissioning, and technical back-up across all 10 provinces of Zimbabwe."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5060,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5056,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "pt-2 border-t border-black/[0.06] space-y-2",
														children: [/* @__PURE__ */ (void 0)("span", {
															className: "text-[10px] font-bold text-[#86868B] uppercase tracking-wider block",
															children: "4 Core Guarantees:"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5066,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", {
															className: "space-y-1.5 text-[11px]",
															children: [
																/* @__PURE__ */ (void 0)("div", {
																	className: "flex items-start gap-1.5 bg-white p-2 rounded-xl border border-black/[0.04]",
																	children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "size-3.5 text-emerald-600 shrink-0 mt-0.5" }, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5071,
																		columnNumber: 29
																	}, this), /* @__PURE__ */ (void 0)("span", {
																		className: "font-medium text-[#1D1D1F]",
																		children: cmsForm.aboutPillar1
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5072,
																		columnNumber: 29
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 5070,
																	columnNumber: 27
																}, this),
																/* @__PURE__ */ (void 0)("div", {
																	className: "flex items-start gap-1.5 bg-white p-2 rounded-xl border border-black/[0.04]",
																	children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "size-3.5 text-emerald-600 shrink-0 mt-0.5" }, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5075,
																		columnNumber: 29
																	}, this), /* @__PURE__ */ (void 0)("span", {
																		className: "font-medium text-[#1D1D1F]",
																		children: cmsForm.aboutPillar2
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5076,
																		columnNumber: 29
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 5074,
																	columnNumber: 27
																}, this),
																/* @__PURE__ */ (void 0)("div", {
																	className: "flex items-start gap-1.5 bg-white p-2 rounded-xl border border-black/[0.04]",
																	children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "size-3.5 text-emerald-600 shrink-0 mt-0.5" }, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5079,
																		columnNumber: 29
																	}, this), /* @__PURE__ */ (void 0)("span", {
																		className: "font-medium text-[#1D1D1F]",
																		children: cmsForm.aboutPillar3
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5080,
																		columnNumber: 29
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 5078,
																	columnNumber: 27
																}, this),
																/* @__PURE__ */ (void 0)("div", {
																	className: "flex items-start gap-1.5 bg-white p-2 rounded-xl border border-black/[0.04]",
																	children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "size-3.5 text-emerald-600 shrink-0 mt-0.5" }, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5083,
																		columnNumber: 29
																	}, this), /* @__PURE__ */ (void 0)("span", {
																		className: "font-medium text-[#1D1D1F]",
																		children: cmsForm.aboutPillar4
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5084,
																		columnNumber: 29
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 5082,
																	columnNumber: 27
																}, this)
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5069,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5065,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 5047,
												columnNumber: 21
											}, this),
											cmsPreviewTab === "divisions" && /* @__PURE__ */ (void 0)("div", {
												className: "rounded-2xl bg-[#F5F5F7] p-4 border border-black/[0.06] space-y-3",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (void 0)("span", {
														className: "inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-0.5 text-[10px] font-semibold text-[#1D1D1F] border border-black/[0.05]",
														children: [/* @__PURE__ */ (void 0)(Package, { className: "size-3 text-orange-600" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5096,
															columnNumber: 27
														}, this), "5 Industrial Sectors"]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5095,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "text-[10px] text-[#86868B]",
														children: "Live Headlines"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5099,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 5094,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("div", {
													className: "space-y-2 text-xs",
													children: [
														/* @__PURE__ */ (void 0)("div", {
															className: "bg-white p-2.5 rounded-xl border border-black/[0.04]",
															children: [/* @__PURE__ */ (void 0)("span", {
																className: "text-[10px] font-bold text-amber-700 uppercase tracking-wide block",
																children: cmsForm.miningEyebrow || "Mining"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 5104,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("p", {
																className: "font-semibold text-[#1D1D1F] mt-0.5",
																children: cmsForm.miningHeadline
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 5107,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5103,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", {
															className: "bg-white p-2.5 rounded-xl border border-black/[0.04]",
															children: [/* @__PURE__ */ (void 0)("span", {
																className: "text-[10px] font-bold text-blue-700 uppercase tracking-wide block",
																children: cmsForm.hireEyebrow || "Hire Fleet"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 5112,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("p", {
																className: "font-semibold text-[#1D1D1F] mt-0.5",
																children: cmsForm.hireHeadline
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 5115,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5111,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", {
															className: "bg-white p-2.5 rounded-xl border border-black/[0.04]",
															children: [/* @__PURE__ */ (void 0)("span", {
																className: "text-[10px] font-bold text-emerald-700 uppercase tracking-wide block",
																children: cmsForm.farmingEyebrow || "Farming"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 5120,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("p", {
																className: "font-semibold text-[#1D1D1F] mt-0.5",
																children: cmsForm.farmingHeadline
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 5123,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5119,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", {
															className: "bg-white p-2.5 rounded-xl border border-black/[0.04]",
															children: [/* @__PURE__ */ (void 0)("span", {
																className: "text-[10px] font-bold text-zinc-700 uppercase tracking-wide block",
																children: cmsForm.hardwareEyebrow || "Hardware"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 5128,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("p", {
																className: "font-semibold text-[#1D1D1F] mt-0.5",
																children: cmsForm.hardwareHeadline
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 5131,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5127,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", {
															className: "bg-white p-2.5 rounded-xl border border-black/[0.04]",
															children: [/* @__PURE__ */ (void 0)("span", {
																className: "text-[10px] font-bold text-purple-700 uppercase tracking-wide block",
																children: cmsForm.industryEyebrow || "Industry"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 5136,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("p", {
																className: "font-semibold text-[#1D1D1F] mt-0.5",
																children: cmsForm.industryHeadline
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 5139,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5135,
															columnNumber: 25
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 5102,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 5093,
												columnNumber: 21
											}, this),
											cmsPreviewTab === "footer" && /* @__PURE__ */ (void 0)("div", {
												className: "rounded-2xl bg-[#F5F5F7] p-4 border border-black/[0.06] space-y-3",
												children: [
													/* @__PURE__ */ (void 0)("div", {
														className: "flex items-center gap-2",
														children: [/* @__PURE__ */ (void 0)("img", {
															src: "/mark.png",
															alt: "Logo",
															className: "size-6 object-contain"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5151,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "text-xs font-bold text-[#1D1D1F]",
															children: cmsForm.name || "Omnicore Solutions"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5152,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5150,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("p", {
														className: "text-[11px] leading-relaxed text-[#6E6E73]",
														children: cmsForm.footerAbout || "Direct supply, equipment hire, and on-site plant commissioning from Cranborne, Harare."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5155,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "pt-2 border-t border-black/[0.06] space-y-1",
														children: [/* @__PURE__ */ (void 0)("p", {
															className: "text-[10px] text-[#86868B] font-mono",
															children: cmsForm.footerCopyright || `© 2026 Omnicore Solutions.`
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5160,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", {
															className: "flex gap-2 text-[10px] text-[#0071E3]",
															children: [
																/* @__PURE__ */ (void 0)("span", { children: "LinkedIn" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 5164,
																	columnNumber: 27
																}, this),
																/* @__PURE__ */ (void 0)("span", { children: "·" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 5165,
																	columnNumber: 27
																}, this),
																/* @__PURE__ */ (void 0)("span", { children: "Facebook" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 5166,
																	columnNumber: 27
																}, this),
																/* @__PURE__ */ (void 0)("span", { children: "·" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 5167,
																	columnNumber: 27
																}, this),
																/* @__PURE__ */ (void 0)("span", { children: cmsForm.email }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 5168,
																	columnNumber: 27
																}, this)
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5163,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5159,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 5149,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "rounded-xl bg-[#F5F5F7] p-3 text-[11px] text-[#6E6E73] space-y-1",
												children: [
													/* @__PURE__ */ (void 0)("div", {
														className: "flex items-center justify-between text-[#1D1D1F] font-semibold text-xs",
														children: [/* @__PURE__ */ (void 0)("span", { children: "Sync Engine" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5177,
															columnNumber: 23
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "text-emerald-600 font-mono text-[10px]",
															children: "Real-Time Event Broadcast"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5178,
															columnNumber: 23
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5176,
														columnNumber: 21
													}, this),
													/* @__PURE__ */ (void 0)("p", {
														className: "text-[10px]",
														children: ["Storage Key: ", /* @__PURE__ */ (void 0)("code", {
															className: "font-mono text-[9px] bg-black/[0.04] px-1 py-0.5 rounded",
															children: "omnicore_site_copy_v2"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5181,
															columnNumber: 36
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5180,
														columnNumber: 21
													}, this),
													/* @__PURE__ */ (void 0)("p", {
														className: "text-[10px]",
														children: ["Connected components: ", /* @__PURE__ */ (void 0)("span", {
															className: "font-medium text-[#1D1D1F]",
															children: "Homepage Hero, Yard Badges, Contact Channels, FAB Widget, Site Footer"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5184,
															columnNumber: 45
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5183,
														columnNumber: 21
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 5175,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 4841,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 4840,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 3670,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 3530,
						columnNumber: 11
					}, this),
					activeTab === "hire" && /* @__PURE__ */ (void 0)("div", {
						className: "space-y-6",
						children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h2", {
							className: "text-xl font-semibold tracking-tight text-[#1D1D1F]",
							children: "Active Plant Hire Deployments"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 5199,
							columnNumber: 15
						}, this), /* @__PURE__ */ (void 0)("p", {
							className: "text-xs text-[#86868B] mt-0.5",
							children: "Heavy machinery operating on contract across Zimbabwe infrastructure, mines, and farms."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 5202,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 5198,
							columnNumber: 13
						}, this), /* @__PURE__ */ (void 0)("div", {
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
							].map((dep) => /* @__PURE__ */ (void 0)("div", {
								className: "rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)] space-y-3",
								children: [
									/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center justify-between",
										children: [/* @__PURE__ */ (void 0)("span", {
											className: "font-mono text-[11px] text-[#86868B]",
											children: dep.id
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 5255,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "rounded-full bg-[#E8F8EE] px-2.5 py-0.5 text-[10px] font-semibold text-[#1B833E]",
											children: dep.status
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 5256,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 5254,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)("div", { children: [
										/* @__PURE__ */ (void 0)("h3", {
											className: "text-base font-semibold text-[#1D1D1F]",
											children: dep.plant
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 5262,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (void 0)("p", {
											className: "text-xs text-[#6E6E73] mt-0.5",
											children: ["Client: ", /* @__PURE__ */ (void 0)("strong", {
												className: "text-[#1D1D1F]",
												children: dep.client
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 5264,
												columnNumber: 31
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 5263,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (void 0)("p", {
											className: "text-xs text-[#86868B] mt-0.5",
											children: ["📍 ", dep.site]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 5266,
											columnNumber: 21
										}, this)
									] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 5261,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "grid grid-cols-2 gap-2 rounded-xl bg-[#F5F5F7] p-3 text-xs",
										children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
											className: "text-[10px] text-[#86868B] block uppercase",
											children: "Billing Rate"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 5271,
											columnNumber: 23
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "font-semibold text-[#1D1D1F]",
											children: dep.rate
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 5272,
											columnNumber: 23
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 5270,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
											className: "text-[10px] text-[#86868B] block uppercase",
											children: "Operator"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 5275,
											columnNumber: 23
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: "text-[#1D1D1F] truncate block",
											children: dep.operator
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 5276,
											columnNumber: 23
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 5274,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 5269,
										columnNumber: 19
									}, this)
								]
							}, dep.id, true, {
								fileName: _jsxFileName,
								lineNumber: 5250,
								columnNumber: 17
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 5207,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 5197,
						columnNumber: 11
					}, this),
					activeTab === "recycle" && /* @__PURE__ */ (void 0)("div", {
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (void 0)("div", {
								className: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
								children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h2", {
									className: "text-xl font-semibold tracking-tight text-[#1D1D1F]",
									children: "Recycle Bin"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 5292,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("p", {
									className: "mt-0.5 text-xs text-[#86868B]",
									children: "Clients and machines removed from the backoffice. Restore them, or delete forever."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 5293,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 5291,
									columnNumber: 15
								}, this), /* @__PURE__ */ (void 0)("button", {
									type: "button",
									disabled: recycleBin.length === 0,
									onClick: () => setPendingAction({ type: "empty-bin" }),
									className: "inline-flex h-11 items-center gap-1.5 rounded-full border border-red-200 bg-white px-4 text-xs font-semibold text-red-600 hover:bg-red-50 disabled:pointer-events-none disabled:opacity-40",
									children: [/* @__PURE__ */ (void 0)(Trash2, { className: "size-3.5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 5303,
										columnNumber: 17
									}, this), "Empty recycle bin"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 5297,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 5290,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between",
								children: [/* @__PURE__ */ (void 0)("div", {
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
										return /* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: () => setRecycleFilter(f.id),
											className: `inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all ${active ? "bg-[#1D1D1F] text-white shadow-xs" : "border border-black/[0.06] bg-white text-[#6E6E73] hover:text-[#1D1D1F]"}`,
											children: [/* @__PURE__ */ (void 0)("span", { children: f.label }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 5337,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("span", {
												className: `text-[10px] ${active ? "text-white/80" : "text-[#86868B]"}`,
												children: f.count
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 5338,
												columnNumber: 23
											}, this)]
										}, f.id, true, {
											fileName: _jsxFileName,
											lineNumber: 5327,
											columnNumber: 21
										}, this);
									})
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 5309,
									columnNumber: 15
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (void 0)(Search, { className: "absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-[#86868B]" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 5346,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("input", {
										type: "text",
										value: recycleSearch,
										onChange: (e) => setRecycleSearch(e.target.value),
										placeholder: "Search recycle bin...",
										className: "h-9 w-full rounded-full border border-black/[0.08] bg-white pl-9 pr-3 text-xs text-[#1D1D1F] placeholder-[#86868B] shadow-2xs focus:outline-none sm:w-64"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 5347,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 5345,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 5308,
								columnNumber: 13
							}, this),
							selectedBinIds.length > 0 && /* @__PURE__ */ (void 0)("div", {
								className: "flex flex-wrap items-center justify-between gap-2 rounded-2xl bg-[#1D1D1F] px-4 py-2.5 text-white shadow-xs",
								children: [/* @__PURE__ */ (void 0)("span", {
									className: "text-xs font-semibold",
									children: [
										selectedBinIds.length,
										" record",
										selectedBinIds.length === 1 ? "" : "s",
										" selected"
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 5359,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "flex flex-wrap items-center gap-2",
									children: [
										/* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: () => setSelectedBinIds([]),
											className: "rounded-full px-3 py-1.5 text-xs font-medium text-white/80 hover:bg-white/10",
											children: "Clear"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 5363,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: () => setPendingAction({
												type: "restore",
												binIds: selectedBinIds
											}),
											className: "inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-[#1D1D1F]",
											children: [/* @__PURE__ */ (void 0)(ArchiveRestore, { className: "size-3.5" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 5375,
												columnNumber: 21
											}, this), "Restore"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 5370,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: () => setPendingAction({
												type: "destroy",
												binIds: selectedBinIds
											}),
											className: "inline-flex items-center gap-1.5 rounded-full bg-red-500 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-red-400",
											children: [/* @__PURE__ */ (void 0)(Trash2, { className: "size-3.5" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 5383,
												columnNumber: 21
											}, this), "Delete forever"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 5378,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 5362,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 5358,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_2px_16px_rgba(0,0,0,0.03)]",
								children: /* @__PURE__ */ (void 0)("div", {
									className: "overflow-x-auto",
									children: /* @__PURE__ */ (void 0)("table", {
										className: "w-full text-left text-xs",
										children: [/* @__PURE__ */ (void 0)("thead", { children: /* @__PURE__ */ (void 0)("tr", {
											className: "border-b border-black/[0.06] bg-[#FBFBFC] text-[11px] font-semibold uppercase tracking-wider text-[#86868B]",
											children: [
												/* @__PURE__ */ (void 0)("th", {
													className: "w-10 py-3 pl-4 pr-1",
													children: /* @__PURE__ */ (void 0)(RowCheck, {
														label: "Select all visible recycle bin records",
														checked: filteredRecycleItems.length > 0 && filteredRecycleItems.every((i) => selectedBinIds.includes(i.binId)),
														indeterminate: filteredRecycleItems.some((i) => selectedBinIds.includes(i.binId)) && !filteredRecycleItems.every((i) => selectedBinIds.includes(i.binId)),
														onChange: (next) => {
															const ids = filteredRecycleItems.map((i) => i.binId);
															setSelectedBinIds((prev) => next ? [.../* @__PURE__ */ new Set([...prev, ...ids])] : prev.filter((id) => !ids.includes(id)));
														}
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5396,
														columnNumber: 25
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 5395,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ (void 0)("th", {
													className: "px-4 py-3",
													children: "Record"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 5414,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ (void 0)("th", {
													className: "px-3 py-3",
													children: "Type"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 5415,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ (void 0)("th", {
													className: "px-3 py-3",
													children: "Deleted"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 5416,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ (void 0)("th", {
													className: "px-3 py-3 text-right",
													children: "Actions"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 5417,
													columnNumber: 23
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 5394,
											columnNumber: 21
										}, this) }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 5393,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("tbody", {
											className: "divide-y divide-black/[0.04]",
											children: filteredRecycleItems.length === 0 ? /* @__PURE__ */ (void 0)("tr", { children: /* @__PURE__ */ (void 0)("td", {
												colSpan: 5,
												className: "py-16 text-center",
												children: /* @__PURE__ */ (void 0)("div", {
													className: "mx-auto flex max-w-sm flex-col items-center gap-2",
													children: [
														/* @__PURE__ */ (void 0)("div", {
															className: "flex size-12 items-center justify-center rounded-2xl bg-black/[0.04] text-[#86868B]",
															children: /* @__PURE__ */ (void 0)(Recycle, { className: "size-5" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 5426,
																columnNumber: 31
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5425,
															columnNumber: 29
														}, this),
														/* @__PURE__ */ (void 0)("p", {
															className: "text-sm font-semibold text-[#1D1D1F]",
															children: "Recycle bin is empty"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5428,
															columnNumber: 29
														}, this),
														/* @__PURE__ */ (void 0)("p", {
															className: "text-xs text-[#86868B]",
															children: "Deleted clients and machines will appear here so you can restore them."
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5429,
															columnNumber: 29
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 5424,
													columnNumber: 27
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 5423,
												columnNumber: 25
											}, this) }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 5422,
												columnNumber: 23
											}, this) : filteredRecycleItems.map((item) => /* @__PURE__ */ (void 0)("tr", {
												className: "hover:bg-black/[0.015]",
												children: [
													/* @__PURE__ */ (void 0)("td", {
														className: "w-10 py-3 pl-4 pr-1",
														children: /* @__PURE__ */ (void 0)(RowCheck, {
															label: `Select ${item.title}`,
															checked: selectedBinIds.includes(item.binId),
															onChange: (next) => setSelectedBinIds((prev) => next ? [...prev, item.binId] : prev.filter((id) => id !== item.binId))
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5439,
															columnNumber: 29
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5438,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ (void 0)("td", {
														className: "px-4 py-3",
														children: [/* @__PURE__ */ (void 0)("span", {
															className: "block font-semibold text-[#1D1D1F]",
															children: item.title
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5450,
															columnNumber: 29
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "block truncate text-[11px] text-[#6E6E73]",
															children: item.subtitle
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5451,
															columnNumber: 29
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5449,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ (void 0)("td", {
														className: "px-3 py-3",
														children: /* @__PURE__ */ (void 0)("span", {
															className: "rounded-full bg-black/[0.04] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[#6E6E73]",
															children: item.kind === "client" ? "Client" : "Machine"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5454,
															columnNumber: 29
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5453,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ (void 0)("td", {
														className: "px-3 py-3 text-[#6E6E73]",
														children: formatBinDate(item.deletedAt)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5458,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ (void 0)("td", {
														className: "px-3 py-3 text-right",
														children: /* @__PURE__ */ (void 0)("div", {
															className: "flex items-center justify-end gap-1",
															children: [/* @__PURE__ */ (void 0)("button", {
																type: "button",
																onClick: () => setPendingAction({
																	type: "restore",
																	binIds: [item.binId]
																}),
																className: "inline-flex h-11 items-center gap-1 rounded-full border border-black/[0.08] bg-white px-3 text-xs font-medium text-[#1D1D1F] hover:bg-[#F5F5F7]",
																children: [/* @__PURE__ */ (void 0)(ArchiveRestore, { className: "size-3.5 text-[#6E6E73]" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 5466,
																	columnNumber: 33
																}, this), "Restore"]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 5461,
																columnNumber: 31
															}, this), /* @__PURE__ */ (void 0)("button", {
																type: "button",
																onClick: () => setPendingAction({
																	type: "destroy",
																	binIds: [item.binId]
																}),
																className: "inline-flex size-11 items-center justify-center rounded-full border border-red-200 bg-white text-red-600 hover:bg-red-50",
																title: "Delete forever",
																children: /* @__PURE__ */ (void 0)(Trash2, { className: "size-3.5" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 5475,
																	columnNumber: 33
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 5469,
																columnNumber: 31
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5460,
															columnNumber: 29
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5459,
														columnNumber: 27
													}, this)
												]
											}, item.binId, true, {
												fileName: _jsxFileName,
												lineNumber: 5437,
												columnNumber: 25
											}, this))
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 5420,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 5392,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 5391,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 5390,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 5289,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 1083,
				columnNumber: 7
			}, this),
			pendingConfirm && pendingAction && /* @__PURE__ */ (void 0)(ConfirmModal, {
				title: pendingConfirm.title,
				body: pendingConfirm.body,
				confirmLabel: pendingConfirm.confirmLabel,
				tone: pendingConfirm.tone,
				onCancel: () => setPendingAction(null),
				onConfirm: runPendingAction
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 5491,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 944,
		columnNumber: 5
	}, this);
}
var $$splitComponentImporter$7 = () => import("./catalogue-CUAZs2Bk.mjs");
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
var $$splitComponentImporter$6 = () => import("./contact-D405dZ0C.mjs");
var Route$6 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact Harare Machinery Desk | Omnicore Solutions" }, {
		name: "description",
		content: "Visit Omnicore Solutions at 115 Chiremba Road, Cranborne, Harare. Direct WhatsApp quoting +263 77 733 4569. Machinery sales and plant hire nationwide."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./projects-tt48_gFB.mjs");
var Route$5 = createFileRoute("/projects")({
	head: () => ({ meta: [{ title: "Site Deployments & Case Studies | Omnicore Solutions Zimbabwe" }, {
		name: "description",
		content: "Gold circuits, concrete pours, on-farm feed lines and fence manufacturing — Omnicore machinery operational across Zimbabwe."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./quote-BJOxnIql.mjs");
var Route$4 = createFileRoute("/quote")({
	head: () => ({ meta: [{ title: "Get a Machinery Quote | Omnicore Solutions Harare" }, {
		name: "description",
		content: "Request a machinery quote from Omnicore Solutions. Direct quoting for heavy plant, mining circuits, concrete pump hire and agricultural mills across Zimbabwe."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./insights-jmoMyykA.mjs");
var Route$3 = createFileRoute("/insights/")({
	head: () => ({ meta: [{ title: "Technical Insights & Machinery Economics | Omnicore Solutions Zimbabwe" }, {
		name: "description",
		content: "Practical engineering notes on wet vs dry plant hire, commercial hammer mills, gold circuit payback and rainy-season site planning in Zimbabwe."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("../_slug-BAlhs3IX.mjs");
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
var $$splitComponentImporter$1 = () => import("./services-HcdbVnas.mjs");
var Route$1 = createFileRoute("/services/")({
	head: () => ({ meta: [{ title: "Specialized Machinery Lines | Omnicore Solutions Zimbabwe" }, {
		name: "description",
		content: "Five specialized machinery lines from Harare: mining equipment, hardware & construction, machinery hire, farming plant, and industrial manufacturing."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("../_slug-DQ8cg06i.mjs");
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
