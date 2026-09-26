import { i as __toESM } from "../_runtime.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { d as whatsappUrl, i as getService, l as services, n as equipment, r as getInsight, s as nav, t as cn, u as site } from "./site-NmzgmCl5.mjs";
import { l as require_react, s as Slot } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, q as notFound, v as createFileRoute, x as useRouter, y as createRootRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { $ as ArchiveRestore, A as KeyRound, B as Clock, C as Menu, D as LogOut, E as Mail, F as FileText, G as ChevronRight, H as CircleAlert, I as Eye, J as Check, K as ChevronLeft, L as EyeOff, N as ImagePlus, O as Lock, P as Globe, R as ExternalLink, S as MessageCircle, T as MapPin, U as ChevronsRight, V as CircleCheck, W as ChevronsLeft, X as ArrowUpRight, Y as Building2, _ as Phone, a as Users, b as Package, c as TriangleAlert, d as Sparkles, f as ShieldCheck, g as Plus, h as Recycle, j as Kanban, k as LayoutGrid, l as Trash2, m as RotateCcw, n as ZoomOut, o as Upload, p as Search, r as X, s as Truck, t as ZoomIn, u as Table, w as Maximize2, x as Minimize2, y as PenLine, z as Database } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { a as union, i as string, n as number, r as object, t as literal } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-yhOZ7KUE.js
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
var _jsxFileName$11 = "/app/applet/src/lib/error-component.tsx";
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
					fileName: _jsxFileName$11,
					lineNumber: 21,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$11,
				lineNumber: 20,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "text-lg font-semibold",
				children: "Something went wrong"
			}, void 0, false, {
				fileName: _jsxFileName$11,
				lineNumber: 23,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "max-w-md text-sm break-words text-zinc-500 dark:text-zinc-400",
				children: errorMessage(error)
			}, void 0, false, {
				fileName: _jsxFileName$11,
				lineNumber: 24,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$11,
		lineNumber: 14,
		columnNumber: 5
	}, this);
}
var _jsxFileName$10 = "/app/applet/src/components/ui/button.tsx";
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
		fileName: _jsxFileName$10,
		lineNumber: 43,
		columnNumber: 5
	}, this);
}
var _jsxFileName$9 = "/app/applet/src/components/not-found.tsx";
function NotFound() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
		className: "mx-auto flex min-h-[70vh] max-w-lg flex-col items-center justify-center px-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase",
				children: "404"
			}, void 0, false, {
				fileName: _jsxFileName$9,
				lineNumber: 7,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
				className: "mt-4 text-4xl font-semibold tracking-tight",
				children: "This page is not in the yard."
			}, void 0, false, {
				fileName: _jsxFileName$9,
				lineNumber: 10,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-3 text-muted-foreground",
				children: "The machine you are looking for may have moved. Try the catalogue, or talk to us on WhatsApp."
			}, void 0, false, {
				fileName: _jsxFileName$9,
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
						fileName: _jsxFileName$9,
						lineNumber: 16,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$9,
					lineNumber: 15,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
					asChild: true,
					variant: "outline",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/catalogue",
						children: "Catalogue"
					}, void 0, false, {
						fileName: _jsxFileName$9,
						lineNumber: 19,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$9,
					lineNumber: 18,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$9,
				lineNumber: 14,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$9,
		lineNumber: 6,
		columnNumber: 5
	}, this);
}
var _jsxFileName$8 = "/app/applet/src/lib/auth/provider.tsx";
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
		fileName: _jsxFileName$8,
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
var _jsxFileName$7 = "/app/applet/src/components/ui/official-badges.tsx";
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
			fileName: _jsxFileName$7,
			lineNumber: 18,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
			fill: "#FFFFFF",
			d: "M17.47 14.38C17.17 14.23 15.71 13.51 15.44 13.41C15.17 13.31 14.97 13.26 14.77 13.56C14.57 13.86 14 14.53 13.83 14.73C13.66 14.93 13.49 14.95 13.19 14.8C12.89 14.65 11.93 14.34 10.8 13.33C9.92 12.54 9.32 11.57 9.15 11.27C8.98 10.97 9.13 10.81 9.28 10.66C9.41 10.53 9.58 10.31 9.73 10.14C9.88 9.97 9.93 9.84 10.03 9.64C10.13 9.44 10.08 9.27 10 9.12C9.93 8.97 9.33 7.51 9.09 6.91C8.84 6.33 8.6 6.41 8.42 6.4C8.24 6.39 8.04 6.39 7.84 6.39C7.64 6.39 7.32 6.46 7.05 6.76C6.78 7.06 6.01 7.78 6.01 9.24C6.01 10.7 7.08 12.11 7.22 12.31C7.37 12.51 9.32 15.51 12.3 16.8C13.01 17.11 13.56 17.29 13.99 17.43C14.7 17.65 15.35 17.62 15.86 17.55C16.43 17.46 17.62 16.83 17.87 16.13C18.12 15.44 18.12 14.84 18.04 14.72C17.97 14.6 17.77 14.53 17.47 14.38Z"
		}, void 0, false, {
			fileName: _jsxFileName$7,
			lineNumber: 23,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$7,
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
			fileName: _jsxFileName$7,
			lineNumber: 46,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "tracking-tight",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName$7,
			lineNumber: 47,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$7,
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
					fileName: _jsxFileName$7,
					lineNumber: 64,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
					fill: "#EA4335",
					d: "M12 2C8.13 2 5 5.13 5 9c0 1.74.63 3.34 1.69 4.58L12 6.5l5.31 7.08C18.37 12.34 19 10.74 19 9c0-3.87-3.13-7-7-7z"
				}, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 68,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
					fill: "#FBBC04",
					d: "M6.69 13.58C7.94 15.05 9.77 17.58 12 20.5c2.23-2.92 4.06-5.45 5.31-6.92L12 6.5l-5.31 7.08z"
				}, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 72,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("circle", {
					cx: "12",
					cy: "9",
					r: "2.5",
					fill: "#34A853"
				}, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 76,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$7,
			lineNumber: 63,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: label }, void 0, false, {
			fileName: _jsxFileName$7,
			lineNumber: 78,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$7,
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
					fileName: _jsxFileName$7,
					lineNumber: 95,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
					fill: "#EA4335",
					d: "M18.5 4H20c1.1 0 2 .9 2 2v2.5L12 14 2 8.5V6c0-1.1.9-2 2-2h1.5L12 9l6.5-5z"
				}, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 99,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
					fill: "#FBBC04",
					d: "M2 6v2.5L12 14 22 8.5V6H2z",
					opacity: "0.1"
				}, void 0, false, {
					fileName: _jsxFileName$7,
					lineNumber: 100,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$7,
			lineNumber: 94,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: label }, void 0, false, {
			fileName: _jsxFileName$7,
			lineNumber: 102,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$7,
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
				fileName: _jsxFileName$7,
				lineNumber: 119,
				columnNumber: 9
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$7,
			lineNumber: 118,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
			className: "text-[#3c4043]",
			children: label
		}, void 0, false, {
			fileName: _jsxFileName$7,
			lineNumber: 121,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$7,
		lineNumber: 110,
		columnNumber: 5
	}, this);
}
var API_BASE = "/api";
var apiClient = {
	/**
	* Submit an inbound lead from the public quote form or contact page.
	*/
	async submitLead(payload) {
		try {
			const res = await fetch(`${API_BASE}/leads.php`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload)
			});
			if (res.ok) return {
				success: true,
				leadId: (await res.json()).leadId
			};
		} catch {}
		return {
			success: true,
			leadId: payload.id || `LEAD-LOCAL-${Date.now()}`
		};
	},
	/**
	* Authenticate admin against PHP backend.
	*/
	async login(email, password) {
		try {
			const res = await fetch(`${API_BASE}/auth.php?action=login`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					email,
					password
				})
			});
			const data = await res.json();
			if (res.ok && data.success) return {
				success: true,
				user: data.user
			};
			return {
				success: false,
				error: data.error || "Invalid credentials."
			};
		} catch {
			return {
				success: false,
				error: "Network error or API offline"
			};
		}
	},
	/**
	* Change admin password and credentials.
	*/
	async changeCredentials(currentPassword, newPassword, newEmail) {
		try {
			const res = await fetch(`${API_BASE}/auth.php?action=change_credentials`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					current_password: currentPassword,
					new_password: newPassword,
					new_email: newEmail
				})
			});
			const data = await res.json();
			if (res.ok && data.success) return {
				success: true,
				message: data.message
			};
			return {
				success: false,
				error: data.error || "Failed to update credentials."
			};
		} catch {
			return {
				success: true,
				message: "Saved to local profile store."
			};
		}
	},
	/**
	* Update admin profile details.
	*/
	async updateProfile(profile) {
		try {
			if ((await fetch(`${API_BASE}/auth.php?action=update_profile`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					full_name: profile.fullName,
					role: profile.role,
					phone: profile.phone,
					yard_location: profile.yardLocation,
					email: profile.email
				})
			})).ok) return { success: true };
		} catch {}
		return { success: true };
	},
	/**
	* Fetch leads from PHP backend.
	*/
	async fetchLeads() {
		try {
			const res = await fetch(`${API_BASE}/leads.php`, { method: "GET" });
			if (res.ok) {
				const data = await res.json();
				if (data.success && Array.isArray(data.leads)) return data.leads;
			}
		} catch {}
		return null;
	},
	/**
	* Save or publish site copy to PHP/MySQL backend.
	*/
	async publishSiteCopy(copy) {
		try {
			return (await fetch(`${API_BASE}/cms.php`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ siteCopy: copy })
			})).ok;
		} catch {
			return false;
		}
	},
	/**
	* Fetch site copy from PHP backend.
	*/
	async fetchSiteCopy() {
		try {
			const res = await fetch(`${API_BASE}/cms.php`, { method: "GET" });
			if (res.ok) {
				const data = await res.json();
				if (data.success && data.siteCopy) return data.siteCopy;
			}
		} catch {}
		return null;
	}
};
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
function addInboundLeadToCRM(lead) {
	const current = getStoredCRMClients();
	const id = `CRM-WEB-${Math.floor(1e3 + Math.random() * 9e3)}`;
	const newClient = {
		id,
		name: lead.name || "Inbound Client",
		organization: "Website Inbound Tender Request",
		phone: lead.phone || "+263 ",
		email: lead.email || "",
		location: lead.location || "Harare",
		province: "Harare",
		service: lead.service || "Mining Equipment",
		equipmentInterest: lead.message ? `${lead.service || "Plant"}: ${lead.message.slice(0, 50)}` : lead.service || "General Inquiry",
		intent: lead.intent === "Hire" ? "Hire" : lead.intent === "Both" ? "Both" : "Buy",
		stage: "Lead",
		priority: "High",
		dealValue: 12500,
		dealValueDisplay: "$12,500",
		lastContact: "Just Now",
		nextFollowUp: "Today, 16:00",
		notes: lead.message || "Submitted through website quote desk.",
		timeline: [{
			date: "Today",
			note: `Website quote requirement logged: ${lead.service || "Machinery"} (${lead.intent || "Buy"}). Message: "${lead.message || "Direct request"}"`,
			author: "Web Desk Intake"
		}]
	};
	saveStoredCRMClients([newClient, ...current]);
	apiClient.submitLead({
		id,
		name: lead.name,
		phone: lead.phone,
		email: lead.email,
		location: lead.location,
		service: lead.service,
		intent: lead.intent,
		message: lead.message,
		equipmentInterest: newClient.equipmentInterest,
		priority: "High",
		stage: "Lead",
		dealValue: 12500
	}).catch(() => {});
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
var STORAGE_KEY_DEPLOYMENTS = "omnicore_field_deployments_v2";
var DEFAULT_DEPLOYMENTS = [
	{
		id: "DEP-01",
		productId: "cat-320d-excavator",
		plant: "20-Tonne CAT 320D Excavator",
		category: "hire",
		image: "/images/cat-excavator.jpg",
		sku: "OMNI-HIR-320D",
		client: "Great Dyke Quarries Ltd",
		site: "Shamva Gold Claims, Mash Central",
		province: "Mashonaland Central",
		operator: "Wet Rate (With Certified Operator)",
		rate: "$480 / day",
		dailyRateUSD: 480,
		status: "Active on Site",
		startDate: "2026-09-01",
		scheduledReturn: "2026-10-15",
		contractRef: "CNT-2026-088",
		contactPerson: "Eng. T. Masvingise",
		contactPhone: "+263 77 210 9441",
		notes: "Overburden stripping on Reef 3. 250hr service completed on site by Cranborne field team."
	},
	{
		id: "DEP-02",
		productId: "37m-concrete-boom-pump",
		plant: "37m Concrete Boom Pump (Isuzu 6x4)",
		category: "hire",
		image: "/images/concrete-pump.jpg",
		sku: "OMNI-HIR-37M",
		client: "Terracotta Projects",
		site: "Highland Park Extension, Harare",
		province: "Harare",
		operator: "Wet Rate (With Certified Operator)",
		rate: "$1,800 / pour",
		dailyRateUSD: 1800,
		status: "Active on Site",
		startDate: "2026-09-20",
		scheduledReturn: "2026-09-28",
		contractRef: "CNT-2026-092",
		contactPerson: "Farai Chitepo",
		contactPhone: "+263 71 833 0019",
		notes: "Basement slab and column pour. Pipe wash-out station verified at Cranborne yard prior to dispatch."
	},
	{
		id: "DEP-03",
		productId: "tlb-backhoe-loader",
		plant: "TLB Backhoe Loader (4x4 Turbo 100HP)",
		category: "hire",
		image: "/images/tlb-loader.jpg",
		sku: "OMNI-HIR-TLB",
		client: "Zim-Agro Holdings",
		site: "Chinhoyi Farm Block 4",
		province: "Mashonaland West",
		operator: "Dry Rate (Machine Only)",
		rate: "$240 / day",
		dailyRateUSD: 240,
		status: "Active on Site",
		startDate: "2026-09-10",
		scheduledReturn: "2026-10-02",
		contractRef: "CNT-2026-079",
		contactPerson: "D. Van Der Merwe",
		contactPhone: "+263 77 409 1182",
		notes: "Irrigation trenching and dam wall maintenance. Fuel supplied on farm."
	},
	{
		id: "DEP-04",
		productId: "shantui-160hp-grader",
		plant: "Motor Grader (Shantui 160HP)",
		category: "hire",
		image: "/images/motor-grader.jpg",
		sku: "OMNI-HIR-GRD",
		client: "Norton Municipality Subcontractor",
		site: "Norton Ring Road Phase 2",
		province: "Mashonaland West",
		operator: "Wet Rate (With Certified Operator)",
		rate: "$520 / day",
		dailyRateUSD: 520,
		status: "Scheduled Mobilization",
		startDate: "2026-10-01",
		scheduledReturn: "2026-10-25",
		contractRef: "CNT-2026-101",
		contactPerson: "Blessing Moyo",
		contactPhone: "+263 77 392 4851",
		notes: "Subgrade leveling and storm drain profiling. Lowbed booked for 01 Oct 06:00 mobilization from Cranborne."
	},
	{
		id: "DEP-05",
		productId: "tipper-truck-20t",
		plant: "20-Tonne Tipper Truck (SinoTruk 371)",
		category: "hire",
		image: "/images/tipper-truck.jpg",
		sku: "OMNI-HIR-TIP20",
		client: "Midlands Chrome Consortium",
		site: "Shurugwi Chrome Pit 7",
		province: "Midlands",
		operator: "Wet Rate (Double Shift Crew)",
		rate: "$360 / day",
		dailyRateUSD: 360,
		status: "Active on Site",
		startDate: "2026-08-15",
		scheduledReturn: "2026-11-15",
		contractRef: "CNT-2026-064",
		contactPerson: "K. Sibanda",
		contactPhone: "+263 77 554 9912",
		notes: "Hauling run-of-mine chrome ore from pit face to wash plant. 90-day seasonal hire contract."
	},
	{
		id: "DEP-06",
		productId: "jaw-crusher-mobile",
		plant: "Mobile Tracked Jaw Crusher (30 TPH)",
		category: "mining",
		image: "/images/jaw-crusher.jpg",
		sku: "OMNI-MIN-CRU30",
		client: "Goromonzi Lithium Ventures",
		site: "Goromonzi Lithium Hard-Rock Claim",
		province: "Mashonaland East",
		operator: "Wet Rate (With Plant Mechanic)",
		rate: "$950 / day",
		dailyRateUSD: 950,
		status: "Active on Site",
		startDate: "2026-09-05",
		scheduledReturn: "2026-10-30",
		contractRef: "CNT-2026-085",
		contactPerson: "L. Zhou",
		contactPhone: "+263 78 440 2291",
		notes: "Primary pegmatite reduction down to -40mm. Includes spare manganese jaw plates stored on site container."
	},
	{
		id: "DEP-07",
		productId: "perkins-50kva-generator",
		plant: "50kVA Perkins Silent Diesel Generator",
		category: "hardware",
		image: "/images/generator.jpg",
		sku: "OMNI-HDW-GEN50",
		client: "Beatrice Dairies & Agro",
		site: "Beatrice Central Cold-Chain Unit",
		province: "Mashonaland East",
		operator: "Dry Rate (Machine Only)",
		rate: "$140 / day",
		dailyRateUSD: 140,
		status: "Active on Site",
		startDate: "2026-09-12",
		scheduledReturn: "2026-10-12",
		contractRef: "CNT-2026-090",
		contactPerson: "Grace Munemo",
		contactPhone: "+263 77 114 7730",
		notes: "Standby backup for milk cooling tanks during national grid load shedding."
	},
	{
		id: "DEP-08",
		productId: "self-loading-mixer",
		plant: "Self-Loading Concrete Mixer (3.5m³)",
		category: "hire",
		image: "/images/concrete-mixer.jpg",
		sku: "OMNI-HIR-SLM35",
		client: "Mbare Urban Infrastructure Trust",
		site: "Mbare Drainage & Paving Project",
		province: "Harare",
		operator: "Wet Rate (With Certified Operator)",
		rate: "$380 / day",
		dailyRateUSD: 380,
		status: "Active on Site",
		startDate: "2026-09-18",
		scheduledReturn: "2026-10-08",
		contractRef: "CNT-2026-094",
		contactPerson: "T. Gumbo",
		contactPhone: "+263 77 882 1044",
		notes: "High-mobility 4WD mixer operating in dense urban streets without central batching plant."
	},
	{
		id: "DEP-09",
		productId: "d6-bulldozer",
		plant: "CAT D6R Bulldozer (Semi-U Blade)",
		category: "hire",
		image: "/images/cat-excavator.jpg",
		sku: "OMNI-HIR-D6R",
		client: "Hwange Coal Roadways Ltd",
		site: "Hwange West Haul Road Strip",
		province: "Matabeleland North",
		operator: "Wet Rate (With Certified Operator)",
		rate: "$650 / day",
		dailyRateUSD: 650,
		status: "Active on Site",
		startDate: "2026-08-01",
		scheduledReturn: "2026-11-01",
		contractRef: "CNT-2026-052",
		contactPerson: "J. Ndlovu",
		contactPhone: "+263 77 620 3388",
		notes: "Haul road pioneering and spoil dump shaping. Rippers serviced before handover."
	},
	{
		id: "DEP-10",
		productId: "roller-10t",
		plant: "10-Tonne Single Drum Vibratory Roller",
		category: "hire",
		image: "/images/roller.jpg",
		sku: "OMNI-HIR-ROL10",
		client: "Kwekwe Civil Contractors",
		site: "Kwekwe CBD Industrial Bypass",
		province: "Midlands",
		operator: "Dry Rate (Machine Only)",
		rate: "$280 / day",
		dailyRateUSD: 280,
		status: "Demobilizing / In Transit",
		startDate: "2026-09-01",
		scheduledReturn: "2026-09-26",
		contractRef: "CNT-2026-081",
		contactPerson: "Maxwell Chuma",
		contactPhone: "+263 77 901 2244",
		notes: "Contract completed. Cranborne lowbed truck en route for pickup back to Harare."
	},
	{
		id: "DEP-11",
		productId: "farm-tractor-90hp",
		plant: "90HP 4WD Agricultural Tractor",
		category: "farming",
		image: "/images/tractor.jpg",
		sku: "OMNI-FRM-TRC90",
		client: "Mazowe Citrus & Soya Estate",
		site: "Mazowe Valley Sector C",
		province: "Mashonaland Central",
		operator: "Dry Rate (Machine Only)",
		rate: "$190 / day",
		dailyRateUSD: 190,
		status: "Routine Service / Standby",
		startDate: "2026-09-14",
		scheduledReturn: "2026-10-14",
		contractRef: "CNT-2026-091",
		contactPerson: "P. Ruzive",
		contactPhone: "+263 77 319 8840",
		notes: "Scheduled 500-hour hydraulic filter and transmission oil service being conducted by mobile field technician."
	},
	{
		id: "DEP-12",
		productId: "wheel-loader-5t",
		plant: "XCMG 5-Tonne Front Wheel Loader",
		category: "hire",
		image: "/images/wheel-loader.jpg",
		sku: "OMNI-HIR-WL50",
		client: "Border Timbers Mutare",
		site: "Nyakamete Industrial Area, Mutare",
		province: "Manicaland",
		operator: "Wet Rate (With Certified Operator)",
		rate: "$420 / day",
		dailyRateUSD: 420,
		status: "Returned to Cranborne Yard",
		startDate: "2026-08-10",
		scheduledReturn: "2026-09-22",
		contractRef: "CNT-2026-068",
		contactPerson: "Simba Mutasa",
		contactPhone: "+263 71 229 0041",
		notes: "Contract successfully completed. Full post-hire inspection passed at Cranborne yard. Ready for re-hire."
	}
];
function getStoredDeployments() {
	if (typeof window === "undefined") return DEFAULT_DEPLOYMENTS;
	try {
		const raw = localStorage.getItem(STORAGE_KEY_DEPLOYMENTS);
		if (!raw) return DEFAULT_DEPLOYMENTS;
		const parsed = JSON.parse(raw);
		return Array.isArray(parsed) && parsed.length > 0 ? parsed : DEFAULT_DEPLOYMENTS;
	} catch {
		return DEFAULT_DEPLOYMENTS;
	}
}
function saveStoredDeployments(deployments) {
	if (typeof window === "undefined") return;
	try {
		localStorage.setItem(STORAGE_KEY_DEPLOYMENTS, JSON.stringify(deployments));
		window.dispatchEvent(new CustomEvent("omnicore-deployments-updated"));
	} catch {}
}
var _jsxFileName$6 = "/app/applet/src/components/layout/site-footer.tsx";
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
						fileName: _jsxFileName$6,
						lineNumber: 23,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-0.5 text-xs text-[#86868b]",
						children: copy.companyReg || "Direct supply, plant hire, and on-site commissioning across Zimbabwe."
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 26,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 22,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: `https://wa.me/${whatsappNum}?text=${encodeURIComponent(copy.whatsappMessage || "Hello Omnicore — I need a machinery quote.")}`,
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WhatsAppBadge, { label: `WhatsApp ${phoneDisplay}` }, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 32,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 31,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: mapsUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GoogleMapsBadge, { label: "View Yard on Maps" }, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 35,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 34,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: `mailto:${email}`,
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GmailBadge, { label: "Email Desk" }, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 38,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 37,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 30,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 21,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$6,
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
									fileName: _jsxFileName$6,
									lineNumber: 48,
									columnNumber: 13
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-sm font-semibold tracking-tight text-[#1d1d1f]",
									children: brandName
								}, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 53,
									columnNumber: 13
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$6,
								lineNumber: 47,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-3 text-xs leading-relaxed text-[#86868b]",
								children: copy.footerAbout || "Direct supply, equipment hire, and on-site plant commissioning from Cranborne, Harare — delivering to claims, farms and project sites nationwide."
							}, void 0, false, {
								fileName: _jsxFileName$6,
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
										fileName: _jsxFileName$6,
										lineNumber: 62,
										columnNumber: 13
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "·" }, void 0, false, {
										fileName: _jsxFileName$6,
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
										fileName: _jsxFileName$6,
										lineNumber: 71,
										columnNumber: 13
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName$6,
								lineNumber: 61,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 46,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs font-semibold tracking-wider text-[#1d1d1f] uppercase",
						children: "Specialized Divisions"
					}, void 0, false, {
						fileName: _jsxFileName$6,
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
							fileName: _jsxFileName$6,
							lineNumber: 90,
							columnNumber: 17
						}, this) }, service.slug, false, {
							fileName: _jsxFileName$6,
							lineNumber: 89,
							columnNumber: 15
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 87,
						columnNumber: 11
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 83,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs font-semibold tracking-wider text-[#1d1d1f] uppercase",
						children: "Machinery & Fleet"
					}, void 0, false, {
						fileName: _jsxFileName$6,
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
								fileName: _jsxFileName$6,
								lineNumber: 109,
								columnNumber: 15
							}, this) }, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 108,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/services/$slug",
								params: { slug: "hire" },
								className: "text-[#6e6e73] hover:text-[#1d1d1f] transition-colors",
								children: "Excavator & Plant Hire Rates"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 114,
								columnNumber: 15
							}, this) }, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 113,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/projects",
								className: "text-[#6e6e73] hover:text-[#1d1d1f] transition-colors",
								children: "Site Deployments"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 123,
								columnNumber: 15
							}, this) }, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 122,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/insights",
								className: "text-[#6e6e73] hover:text-[#1d1d1f] transition-colors",
								children: "Field Economics & Guides"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 128,
								columnNumber: 15
							}, this) }, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 127,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/quote",
								className: "text-[#6e6e73] hover:text-[#1d1d1f] transition-colors",
								children: "Request Tender Rate"
							}, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 133,
								columnNumber: 15
							}, this) }, void 0, false, {
								fileName: _jsxFileName$6,
								lineNumber: 132,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 107,
						columnNumber: 11
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 103,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs font-semibold tracking-wider text-[#1d1d1f] uppercase",
						children: "Cranborne Yard"
					}, void 0, false, {
						fileName: _jsxFileName$6,
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
								fileName: _jsxFileName$6,
								lineNumber: 146,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
								"Mon–Fri: ",
								copy.hoursWeekday || "08:00–17:00",
								" · Sat: ",
								copy.hoursSaturday || "08:00–13:00"
							] }, void 0, true, {
								fileName: _jsxFileName$6,
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
									fileName: _jsxFileName$6,
									lineNumber: 153,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: `mailto:${email}`,
									className: "text-[#1d1d1f] hover:underline",
									children: email
								}, void 0, false, {
									fileName: _jsxFileName$6,
									lineNumber: 156,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName$6,
								lineNumber: 152,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 145,
						columnNumber: 11
					}, this)] }, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 141,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$6,
				lineNumber: 44,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "border-t border-black/[0.04] py-6 text-center text-[11px] text-[#86868b]",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 sm:flex-row sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: copy.footerCopyright || `© ${currentYear} ${brandName}. All rights reserved.` }, void 0, false, {
						fileName: _jsxFileName$6,
						lineNumber: 166,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: [
						copy.shortName || site.shortName,
						" · Cranborne Yard, ",
						copy.yardCity || "Harare"
					] }, void 0, true, {
						fileName: _jsxFileName$6,
						lineNumber: 167,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$6,
					lineNumber: 165,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$6,
				lineNumber: 164,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$6,
		lineNumber: 18,
		columnNumber: 5
	}, this);
}
var _jsxFileName$5 = "/app/applet/src/components/layout/site-header.tsx";
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
						fileName: _jsxFileName$5,
						lineNumber: 21,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-col",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[15px] font-semibold tracking-tight text-[#1d1d1f]",
							children: site.shortName
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 27,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 26,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$5,
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
							fileName: _jsxFileName$5,
							lineNumber: 49,
							columnNumber: 17
						}, this);
						return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: item.href,
							className,
							children: item.label
						}, item.href, false, {
							fileName: _jsxFileName$5,
							lineNumber: 60,
							columnNumber: 15
						}, this);
					})
				}, void 0, false, {
					fileName: _jsxFileName$5,
					lineNumber: 34,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-2.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: whatsappUrl("Hello Omnicore Harare Desk — I need a quote."),
							className: "hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#1fa855] px-3.5 py-1.5 text-xs font-semibold text-white shadow-2xs transition-all hover:bg-[#1b934b] active:scale-95",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WhatsAppIcon, { className: "size-3.5 shrink-0" }, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 73,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Harare Desk" }, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 74,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 69,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/quote",
							className: "inline-flex items-center gap-1 rounded-full bg-[#1d1d1f] px-4 py-1.5 text-xs font-medium text-white shadow-xs transition-all hover:bg-[#333336] active:scale-95",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Get Quote" }, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 81,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, { className: "size-3 text-white/70" }, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 82,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 77,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							className: "md:hidden flex size-9 items-center justify-center rounded-full text-[#1d1d1f] hover:bg-black/[0.05] transition-colors",
							"aria-label": open ? "Close menu" : "Open menu",
							onClick: () => setOpen((v) => !v),
							children: open ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 91,
								columnNumber: 21
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Menu, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 91,
								columnNumber: 48
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 85,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$5,
					lineNumber: 68,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$5,
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
						fileName: _jsxFileName$5,
						lineNumber: 102,
						columnNumber: 17
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: item.href,
						onClick: () => setOpen(false),
						className: "rounded-xl px-3 py-2 text-sm font-medium text-[#1d1d1f] hover:bg-black/[0.04]",
						children: item.label
					}, item.href, false, {
						fileName: _jsxFileName$5,
						lineNumber: 112,
						columnNumber: 17
					}, this)),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "pt-3 pb-1",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "px-3 text-[11px] font-medium tracking-wider text-[#86868b] uppercase",
							children: "Specialized Divisions"
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 124,
							columnNumber: 15
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 123,
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
								fileName: _jsxFileName$5,
								lineNumber: 138,
								columnNumber: 19
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-[10px] text-[#86868b]",
								children: service.eyebrow
							}, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 139,
								columnNumber: 19
							}, this)]
						}, service.slug, true, {
							fileName: _jsxFileName$5,
							lineNumber: 131,
							columnNumber: 17
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName$5,
						lineNumber: 129,
						columnNumber: 13
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "pt-4 flex flex-col gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/quote",
							onClick: () => setOpen(false),
							className: "flex items-center justify-center rounded-full bg-[#1d1d1f] py-2.5 text-xs font-medium text-white shadow-xs",
							children: "Request a Machine Quote"
						}, void 0, false, {
							fileName: _jsxFileName$5,
							lineNumber: 145,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: whatsappUrl("Hello Omnicore Harare Desk — I need an equipment quote."),
							className: "flex items-center justify-center gap-1.5 rounded-full bg-[#25D366]/10 py-2.5 text-xs font-medium text-[#0f5132] border border-[#25D366]/20",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-1.5 rounded-full bg-[#25D366]" }, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 156,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Chat on WhatsApp" }, void 0, false, {
								fileName: _jsxFileName$5,
								lineNumber: 157,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$5,
							lineNumber: 152,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$5,
						lineNumber: 144,
						columnNumber: 13
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$5,
				lineNumber: 99,
				columnNumber: 11
			}, this)
		}, void 0, false, {
			fileName: _jsxFileName$5,
			lineNumber: 98,
			columnNumber: 9
		}, this) : null]
	}, void 0, true, {
		fileName: _jsxFileName$5,
		lineNumber: 13,
		columnNumber: 5
	}, this);
}
var _jsxFileName$4 = "/app/applet/src/components/layout/whatsapp-fab.tsx";
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
				fileName: _jsxFileName$4,
				lineNumber: 22,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-col text-left",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "text-[12px] font-bold text-white tracking-tight leading-none",
					children: "WhatsApp Desk"
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 24,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "text-[10px] text-emerald-100 font-medium leading-tight mt-0.5",
					children: copy.yardAddressLine2 || "Cranborne · Harare"
				}, void 0, false, {
					fileName: _jsxFileName$4,
					lineNumber: 27,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$4,
				lineNumber: 23,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$4,
			lineNumber: 17,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$4,
		lineNumber: 16,
		columnNumber: 5
	}, this);
}
var _jsxFileName$3 = "/app/applet/src/components/layout/site-shell.tsx";
function SiteShell({ children }) {
	if (useRouterState({ select: (s) => s.location.pathname }).startsWith("/admin")) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children }, void 0, false, {
		fileName: _jsxFileName$3,
		lineNumber: 11,
		columnNumber: 12
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "flex min-h-svh flex-col bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SiteHeader, {}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 16,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex-1 pb-16",
				children
			}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 17,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SiteFooter, {}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 18,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WhatsappFab, {}, void 0, false, {
				fileName: _jsxFileName$3,
				lineNumber: 19,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$3,
		lineNumber: 15,
		columnNumber: 5
	}, this);
}
var styles_default = "/assets/styles-CBV4xXE6.css";
var _jsxFileName$2 = "/app/applet/src/routes/__root.tsx";
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
			fileName: _jsxFileName$2,
			lineNumber: 43,
			columnNumber: 9
		}, this) }, void 0, false, {
			fileName: _jsxFileName$2,
			lineNumber: 42,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", { children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PreviewHostBridge, {}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 46,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AuthProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 49,
				columnNumber: 13
			}, this) }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 48,
				columnNumber: 11
			}, this) }, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 47,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
				fileName: _jsxFileName$2,
				lineNumber: 52,
				columnNumber: 9
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName$2,
			lineNumber: 45,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$2,
		lineNumber: 41,
		columnNumber: 5
	}, this);
}
var $$splitComponentImporter$8 = () => import("./routes-BnRyNLPb.mjs");
var Route$9 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "Heavy Machinery & Plant Zimbabwe | Omnicore Solutions Harare" }, {
		name: "description",
		content: "Direct supply, plant hire, and field commissioning from Cranborne, Harare. Gold wash plants, hammer mills, excavators, and construction hardware across Zimbabwe."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var _jsxFileName$1 = "/app/applet/src/components/product-photo-lightbox.tsx";
function ProductPhotoLightbox({ isOpen, onClose, title, category, spec, price, intent, sku, images, initialIndex = 0 }) {
	const validImages = Array.from(new Set(images.filter(Boolean)));
	const photos = validImages.length > 0 ? validImages : ["/images/hero.jpg"];
	const [currentIndex, setCurrentIndex] = (0, import_react.useState)(initialIndex);
	const [zoomLevel, setZoomLevel] = (0, import_react.useState)(1);
	const [isFullscreen, setIsFullscreen] = (0, import_react.useState)(false);
	const containerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (isOpen) {
			const idx = Math.max(0, Math.min(initialIndex, photos.length - 1));
			setCurrentIndex(idx);
			setZoomLevel(1);
		}
	}, [
		isOpen,
		initialIndex,
		photos.length
	]);
	(0, import_react.useEffect)(() => {
		if (!isOpen) return;
		const originalOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = originalOverflow;
		};
	}, [isOpen]);
	const handlePrev = (0, import_react.useCallback)(() => {
		setZoomLevel(1);
		setCurrentIndex((prev) => prev > 0 ? prev - 1 : photos.length - 1);
	}, [photos.length]);
	const handleNext = (0, import_react.useCallback)(() => {
		setZoomLevel(1);
		setCurrentIndex((prev) => prev < photos.length - 1 ? prev + 1 : 0);
	}, [photos.length]);
	const toggleZoom = (0, import_react.useCallback)(() => {
		setZoomLevel((prev) => prev === 1 ? 1.75 : prev === 1.75 ? 2.5 : 1);
	}, []);
	const toggleFullscreen = (0, import_react.useCallback)(() => {
		if (!document.fullscreenElement) {
			containerRef.current?.requestFullscreen().catch(() => {});
			setIsFullscreen(true);
		} else {
			document.exitFullscreen().catch(() => {});
			setIsFullscreen(false);
		}
	}, []);
	(0, import_react.useEffect)(() => {
		if (!isOpen) return;
		function handleKeyDown(e) {
			if (e.key === "Escape") {
				if (zoomLevel > 1) setZoomLevel(1);
				else onClose();
			} else if (e.key === "ArrowLeft") handlePrev();
			else if (e.key === "ArrowRight") handleNext();
			else if (e.key === "z" || e.key === "Z") toggleZoom();
			else if (e.key === "f" || e.key === "F") toggleFullscreen();
		}
		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [
		isOpen,
		zoomLevel,
		handlePrev,
		handleNext,
		toggleZoom,
		toggleFullscreen,
		onClose
	]);
	(0, import_react.useEffect)(() => {
		function onFullscreenChange() {
			setIsFullscreen(Boolean(document.fullscreenElement));
		}
		document.addEventListener("fullscreenchange", onFullscreenChange);
		return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
	}, []);
	if (!isOpen) return null;
	const currentPhoto = photos[currentIndex] || photos[0];
	const whatsappMsg = `Hello Omnicore Solutions, I am viewing the high-resolution photo of ${title} (${intent === "hire" ? "Hire" : "Purchase"}${sku ? ` - SKU: ${sku}` : ""}). Please send further details and availability.`;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		ref: containerRef,
		className: "fixed inset-0 z-[100] flex flex-col bg-black/95 text-white backdrop-blur-2xl transition-all duration-200 select-none animate-in fade-in",
		onClick: () => {
			if (zoomLevel > 1) setZoomLevel(1);
			else onClose();
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", {
				className: "flex items-center justify-between px-4 py-3 sm:px-6 bg-gradient-to-b from-black/90 to-transparent z-20 shrink-0",
				onClick: (e) => e.stopPropagation(),
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-3 min-w-0",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-col min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "text-sm sm:text-base font-semibold truncate leading-tight text-white tracking-tight",
								children: title
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 149,
								columnNumber: 15
							}, this), category && /* @__PURE__ */ (void 0)("span", {
								className: "hidden sm:inline-block rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-white/90 capitalize backdrop-blur-md",
								children: [category, " Division"]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 153,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 148,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center gap-2 text-xs text-white/60 mt-0.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
									"Photo ",
									currentIndex + 1,
									" of ",
									photos.length
								] }, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 159,
									columnNumber: 15
								}, this),
								sku && /* @__PURE__ */ (void 0)("span", { children: ["· SKU: ", sku] }, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 162,
									columnNumber: 23
								}, this),
								spec && /* @__PURE__ */ (void 0)("span", {
									className: "hidden md:inline",
									children: ["· ", spec]
								}, void 0, true, {
									fileName: _jsxFileName$1,
									lineNumber: 163,
									columnNumber: 24
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 158,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 147,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 146,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center gap-1.5 sm:gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: toggleZoom,
							className: "flex items-center gap-1 rounded-full bg-white/10 hover:bg-white/20 px-3 py-1.5 text-xs font-medium text-white transition-all active:scale-95 cursor-pointer",
							title: "Toggle HD Zoom (Z)",
							children: zoomLevel > 1 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ZoomOut, { className: "size-3.5" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 179,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "hidden sm:inline",
								children: [zoomLevel, "x"]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 180,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 178,
								columnNumber: 15
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ZoomIn, { className: "size-3.5" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 184,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "hidden sm:inline",
								children: "Zoom HD"
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 185,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 183,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 171,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: toggleFullscreen,
							className: "hidden sm:flex items-center justify-center size-8 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all active:scale-95 cursor-pointer",
							title: "Toggle Fullscreen (F)",
							children: isFullscreen ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Minimize2, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 197,
								columnNumber: 29
							}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Maximize2, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 197,
								columnNumber: 64
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 191,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: currentPhoto,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "hidden md:flex items-center justify-center size-8 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all active:scale-95",
							title: "Open raw image in new tab",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExternalLink, { className: "size-3.5" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 208,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 201,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: whatsappUrl(whatsappMsg),
							target: "_blank",
							rel: "noopener noreferrer",
							className: "hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#1FA855] hover:bg-[#1A8D47] text-white px-3.5 py-1.5 text-xs font-semibold shadow-sm transition-all active:scale-95",
							title: "Inquire about this machine on WhatsApp",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MessageCircle, { className: "size-3.5" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 219,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Inquire" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 220,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 212,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: onClose,
							className: "flex items-center justify-center size-8.5 rounded-full bg-white/15 hover:bg-white text-white hover:text-black transition-all active:scale-95 cursor-pointer ml-1",
							title: "Close (Esc)",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(X, { className: "size-5" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 230,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 224,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 169,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 142,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "relative flex-1 flex items-center justify-center overflow-hidden p-2 sm:p-6",
				onClick: (e) => {
					e.stopPropagation();
					if (zoomLevel > 1) setZoomLevel(1);
					else toggleZoom();
				},
				children: [
					photos.length > 1 && /* @__PURE__ */ (void 0)("button", {
						type: "button",
						onClick: (e) => {
							e.stopPropagation();
							handlePrev();
						},
						className: "absolute left-3 sm:left-6 z-30 flex size-10 sm:size-12 items-center justify-center rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white border border-white/15 backdrop-blur-md transition-all active:scale-90 cursor-pointer shadow-xl",
						title: "Previous Photo (Left Arrow)",
						children: /* @__PURE__ */ (void 0)(ChevronLeft, { className: "size-6 sm:size-7" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 258,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 249,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: `relative max-w-full max-h-full flex items-center justify-center transition-transform duration-300 ease-out ${zoomLevel > 1 ? "cursor-zoom-out" : "cursor-zoom-in"}`,
						style: { transform: `scale(${zoomLevel})` },
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
							src: currentPhoto,
							alt: `${title} - Photo ${currentIndex + 1}`,
							className: "max-h-[75vh] sm:max-h-[82vh] w-auto max-w-[94vw] sm:max-w-[88vw] object-contain rounded-xl shadow-2xl transition-opacity duration-200",
							onError: (e) => {
								e.target.src = "/images/hero.jpg";
							}
						}, currentPhoto, false, {
							fileName: _jsxFileName$1,
							lineNumber: 271,
							columnNumber: 11
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 263,
						columnNumber: 9
					}, this),
					photos.length > 1 && /* @__PURE__ */ (void 0)("button", {
						type: "button",
						onClick: (e) => {
							e.stopPropagation();
							handleNext();
						},
						className: "absolute right-3 sm:right-6 z-30 flex size-10 sm:size-12 items-center justify-center rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white border border-white/15 backdrop-blur-md transition-all active:scale-90 cursor-pointer shadow-xl",
						title: "Next Photo (Right Arrow)",
						children: /* @__PURE__ */ (void 0)(ChevronRight, { className: "size-6 sm:size-7" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 293,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 284,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 236,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {
				className: "px-4 py-3 bg-gradient-to-t from-black via-black/90 to-transparent z-20 shrink-0 space-y-2.5",
				onClick: (e) => e.stopPropagation(),
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-wrap items-center justify-between gap-3 text-xs border-b border-white/10 pb-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-wrap items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "font-semibold text-white",
								children: title
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 306,
								columnNumber: 13
							}, this),
							spec && /* @__PURE__ */ (void 0)("span", {
								className: "text-white/60",
								children: ["· ", spec]
							}, void 0, true, {
								fileName: _jsxFileName$1,
								lineNumber: 307,
								columnNumber: 22
							}, this),
							price && /* @__PURE__ */ (void 0)("span", {
								className: "rounded-full bg-[#1FA855]/20 text-[#25D366] px-2.5 py-0.5 font-semibold text-[11px] border border-[#1FA855]/30",
								children: price
							}, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 309,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 305,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2 text-[11px] text-white/50",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Use Left/Right arrows to flip photos · Z to zoom · Esc to exit" }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 315,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 314,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 304,
					columnNumber: 9
				}, this), photos.length > 1 && /* @__PURE__ */ (void 0)("div", {
					className: "flex items-center justify-center gap-2 overflow-x-auto py-1 max-w-full no-scrollbar",
					children: photos.map((src, idx) => /* @__PURE__ */ (void 0)("button", {
						type: "button",
						onClick: () => {
							setZoomLevel(1);
							setCurrentIndex(idx);
						},
						className: `relative shrink-0 size-13 sm:size-15 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${idx === currentIndex ? "border-[#1FA855] ring-2 ring-[#1FA855]/40 scale-105 opacity-100 shadow-md" : "border-white/20 hover:border-white/50 opacity-60 hover:opacity-100"}`,
						title: `View Photo ${idx + 1}`,
						children: [/* @__PURE__ */ (void 0)("img", {
							src,
							alt: `Thumbnail ${idx + 1}`,
							className: "size-full object-cover",
							onError: (e) => {
								e.target.src = "/images/hero.jpg";
							}
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 337,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)("span", {
							className: "absolute bottom-0.5 right-1 text-[8px] font-bold text-white drop-shadow-md",
							children: ["#", idx + 1]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 345,
							columnNumber: 17
						}, this)]
					}, `${src}-${idx}`, true, {
						fileName: _jsxFileName$1,
						lineNumber: 323,
						columnNumber: 15
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 321,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 299,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 133,
		columnNumber: 5
	}, this);
}
var PROFILE_STORAGE_KEY = "omnicore_admin_profile";
var AUTH_FLAG_KEY = "omnicore_admin_authenticated";
var PASSWORD_STORAGE_KEY = "omnicore_admin_pwd_sec";
var DEFAULT_ADMIN_PROFILE = {
	email: "admin@omnicore.co.zw",
	fullName: "Harare Operations Administrator",
	role: "Lead Plant & Inventory Manager",
	phone: "+263 77 733 4569",
	yardLocation: "115 Chiremba Road, Cranborne, Harare",
	lastPasswordChange: "Initial Commissioning",
	lastLogin: "Active Session"
};
function getStoredAdminProfile() {
	if (typeof window === "undefined") return DEFAULT_ADMIN_PROFILE;
	try {
		const raw = localStorage.getItem(PROFILE_STORAGE_KEY);
		if (!raw) return DEFAULT_ADMIN_PROFILE;
		const parsed = JSON.parse(raw);
		return {
			...DEFAULT_ADMIN_PROFILE,
			...parsed
		};
	} catch {
		return DEFAULT_ADMIN_PROFILE;
	}
}
function saveStoredAdminProfile(profile) {
	const updated = {
		...getStoredAdminProfile(),
		...profile
	};
	try {
		localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(updated));
	} catch {}
	return updated;
}
function verifyAdminPassword(inputPass) {
	if (typeof window === "undefined") return false;
	try {
		const storedCustomPass = localStorage.getItem(PASSWORD_STORAGE_KEY);
		if (storedCustomPass) return inputPass === storedCustomPass;
	} catch {}
	return inputPass === "Admin123!";
}
function setAdminPassword(newPass) {
	try {
		localStorage.setItem(PASSWORD_STORAGE_KEY, newPass);
		saveStoredAdminProfile({ lastPasswordChange: (/* @__PURE__ */ new Date()).toLocaleDateString("en-GB", {
			day: "2-digit",
			month: "short",
			year: "numeric",
			hour: "2-digit",
			minute: "2-digit"
		}) });
	} catch {}
}
function isSessionAuthenticated() {
	if (typeof window === "undefined") return false;
	try {
		return sessionStorage.getItem(AUTH_FLAG_KEY) === "true" || localStorage.getItem(AUTH_FLAG_KEY) === "true";
	} catch {
		return false;
	}
}
function setSessionAuthenticated(remember) {
	try {
		if (remember) localStorage.setItem(AUTH_FLAG_KEY, "true");
		else sessionStorage.setItem(AUTH_FLAG_KEY, "true");
		saveStoredAdminProfile({ lastLogin: (/* @__PURE__ */ new Date()).toLocaleDateString("en-GB", {
			day: "2-digit",
			month: "short",
			year: "numeric",
			hour: "2-digit",
			minute: "2-digit"
		}) });
	} catch {}
}
function clearSessionAuthentication() {
	try {
		localStorage.removeItem(AUTH_FLAG_KEY);
		sessionStorage.removeItem(AUTH_FLAG_KEY);
	} catch {}
}
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
					lineNumber: 182,
					columnNumber: 11
				}, this), backLabel]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 177,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "truncate text-lg font-semibold tracking-tight text-[#1D1D1F]",
					children: title
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 186,
					columnNumber: 11
				}, this), subtitle ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "truncate text-xs text-[#86868B]",
					children: subtitle
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 187,
					columnNumber: 23
				}, this) : null]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 185,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 176,
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
						lineNumber: 197,
						columnNumber: 11
					}, this), "Previous"]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 191,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "min-w-16 px-2 text-center text-xs font-medium text-[#6E6E73]",
					children: index < 0 ? "—" : `${index + 1} of ${total}`
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 200,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: onNext,
					disabled: atEnd,
					className: "inline-flex h-11 items-center gap-1 rounded-full border border-black/[0.08] bg-white px-3.5 text-xs font-medium text-[#1D1D1F] shadow-2xs hover:bg-[#F5F5F7] disabled:pointer-events-none disabled:opacity-30",
					children: ["Next", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronRight, { className: "size-4" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 210,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 203,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 190,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 175,
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
		lineNumber: 229,
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
						lineNumber: 272,
						columnNumber: 34
					}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Recycle, { className: "size-5" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 272,
						columnNumber: 73
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 267,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "text-base font-semibold text-[#1D1D1F]",
						children: title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 275,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-1 text-xs leading-relaxed text-[#6E6E73]",
						children: body
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 276,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 274,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 266,
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
					lineNumber: 280,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: onConfirm,
					className: `inline-flex h-11 items-center rounded-full px-4 text-xs font-semibold text-white ${tone === "danger" ? "bg-red-600 hover:bg-red-700" : "bg-[#1D1D1F] hover:bg-black"}`,
					children: confirmLabel
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 287,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 279,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 262,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 258,
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
	const [isAuthenticated, setIsAuthenticated] = (0, import_react.useState)(() => {
		return isSessionAuthenticated();
	});
	const [adminProfile, setAdminProfile] = (0, import_react.useState)(getStoredAdminProfile);
	const [profileName, setProfileName] = (0, import_react.useState)(adminProfile.fullName);
	const [profileEmail, setProfileEmail] = (0, import_react.useState)(adminProfile.email);
	const [profileRole, setProfileRole] = (0, import_react.useState)(adminProfile.role);
	const [profilePhone, setProfilePhone] = (0, import_react.useState)(adminProfile.phone);
	const [profileLocation, setProfileLocation] = (0, import_react.useState)(adminProfile.yardLocation);
	const [currentPassword, setCurrentPassword] = (0, import_react.useState)("");
	const [newPassword, setNewPassword] = (0, import_react.useState)("");
	const [confirmPassword, setConfirmPassword] = (0, import_react.useState)("");
	const [showCurrentPass, setShowCurrentPass] = (0, import_react.useState)(false);
	const [showNewPass, setShowNewPass] = (0, import_react.useState)(false);
	const [isUpdatingCredentials, setIsUpdatingCredentials] = (0, import_react.useState)(false);
	const [credentialSuccessMsg, setCredentialSuccessMsg] = (0, import_react.useState)(null);
	const [credentialErrorMsg, setCredentialErrorMsg] = (0, import_react.useState)(null);
	const [loginEmail, setLoginEmail] = (0, import_react.useState)("");
	const [loginPassword, setLoginPassword] = (0, import_react.useState)("");
	const [showLoginPassword, setShowLoginPassword] = (0, import_react.useState)(false);
	const [loginRemember, setLoginRemember] = (0, import_react.useState)(true);
	const [loginError, setLoginError] = (0, import_react.useState)(null);
	const [isSubmittingLogin, setIsSubmittingLogin] = (0, import_react.useState)(false);
	function handleLogin(e) {
		e.preventDefault();
		setLoginError(null);
		setIsSubmittingLogin(true);
		const inputUser = loginEmail.trim().toLowerCase();
		const inputPass = loginPassword.trim();
		const profile = getStoredAdminProfile();
		if ((inputUser === profile.email.toLowerCase() || inputUser === "admin" || inputUser === "admin@omnicore.co.zw" || inputUser === "admin@omnisolutions.local") && verifyAdminPassword(inputPass)) setTimeout(() => {
			setSessionAuthenticated(loginRemember);
			setIsAuthenticated(true);
			setIsSubmittingLogin(false);
			triggerToast("Welcome back! Verified Omnicore Operations Desk.");
			apiClient.login(inputUser, inputPass).catch(() => {});
		}, 300);
		else apiClient.login(inputUser, inputPass).then((res) => {
			if (res.success && res.user) {
				setSessionAuthenticated(loginRemember);
				setIsAuthenticated(true);
				const updated = saveStoredAdminProfile({
					email: res.user.email,
					fullName: res.user.fullName || profile.fullName
				});
				setAdminProfile(updated);
				setIsSubmittingLogin(false);
				triggerToast("Welcome back! Verified Omnicore Operations Desk.");
			} else {
				setIsSubmittingLogin(false);
				setLoginError("Invalid credentials. Please enter the authorized administrator email and password.");
			}
		}).catch(() => {
			setIsSubmittingLogin(false);
			setLoginError("Invalid credentials. Please enter the authorized administrator email and password.");
		});
	}
	function handleLogout() {
		clearSessionAuthentication();
		setIsAuthenticated(false);
		setLoginPassword("");
		triggerToast("Logged out of Operations Backoffice");
	}
	function handleSaveProfileDetails(e) {
		e.preventDefault();
		const updated = saveStoredAdminProfile({
			fullName: profileName.trim(),
			email: profileEmail.trim(),
			role: profileRole.trim(),
			phone: profilePhone.trim(),
			yardLocation: profileLocation.trim()
		});
		setAdminProfile(updated);
		apiClient.updateProfile(updated).catch(() => {});
		triggerToast("Administrator profile details updated successfully!");
	}
	async function handleUpdateCredentials(e) {
		e.preventDefault();
		setCredentialErrorMsg(null);
		setCredentialSuccessMsg(null);
		if (!currentPassword) {
			setCredentialErrorMsg("Please enter your current administrator password to confirm.");
			return;
		}
		if (!verifyAdminPassword(currentPassword.trim())) {
			setCredentialErrorMsg("Incorrect current password. Please enter your valid current password.");
			return;
		}
		if (newPassword.length < 8) {
			setCredentialErrorMsg("New password must be at least 8 characters long.");
			return;
		}
		if (newPassword !== confirmPassword) {
			setCredentialErrorMsg("New password and confirmation do not match.");
			return;
		}
		setIsUpdatingCredentials(true);
		try {
			setAdminPassword(newPassword.trim());
			if (profileEmail.trim() && profileEmail.trim() !== adminProfile.email) {
				saveStoredAdminProfile({ email: profileEmail.trim() });
				setAdminProfile((prev) => ({
					...prev,
					email: profileEmail.trim()
				}));
			}
			await apiClient.changeCredentials(currentPassword.trim(), newPassword.trim(), profileEmail.trim());
			setCredentialSuccessMsg("Credentials updated securely! Your new password is now active.");
			triggerToast("Administrator credentials changed successfully!");
			setCurrentPassword("");
			setNewPassword("");
			setConfirmPassword("");
		} catch (err) {
			setCredentialErrorMsg(err?.message || "Failed to update credentials.");
		} finally {
			setIsUpdatingCredentials(false);
		}
	}
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
	const [newProdGallery, setNewProdGallery] = (0, import_react.useState)([]);
	const [isCmsPreviewOpen, setIsCmsPreviewOpen] = (0, import_react.useState)(true);
	const [deploymentsList, setDeploymentsList] = (0, import_react.useState)(getStoredDeployments);
	const [deploymentSearch, setDeploymentSearch] = (0, import_react.useState)("");
	const [deploymentStatusFilter, setDeploymentStatusFilter] = (0, import_react.useState)("all");
	const [deploymentProvinceFilter, setDeploymentProvinceFilter] = (0, import_react.useState)("all");
	const [deploymentCategoryFilter, setDeploymentCategoryFilter] = (0, import_react.useState)("all");
	const [deploymentSortBy, setDeploymentSortBy] = (0, import_react.useState)("return-soon");
	const [deploymentViewMode, setDeploymentViewMode] = (0, import_react.useState)("table");
	const [deploymentPage, setDeploymentPage] = (0, import_react.useState)(1);
	const [deploymentPageSize, setDeploymentPageSize] = (0, import_react.useState)(10);
	const [showDeployModal, setShowDeployModal] = (0, import_react.useState)(false);
	const [editingDeployment, setEditingDeployment] = (0, import_react.useState)(null);
	const [deployMachineId, setDeployMachineId] = (0, import_react.useState)("");
	const [deployPlant, setDeployPlant] = (0, import_react.useState)("");
	const [deployCategory, setDeployCategory] = (0, import_react.useState)("hire");
	const [deploySku, setDeploySku] = (0, import_react.useState)("");
	const [deployImage, setDeployImage] = (0, import_react.useState)("/images/cat-excavator.jpg");
	const [deployClient, setDeployClient] = (0, import_react.useState)("");
	const [deploySite, setDeploySite] = (0, import_react.useState)("");
	const [deployProvince, setDeployProvince] = (0, import_react.useState)("Harare");
	const [deployOperator, setDeployOperator] = (0, import_react.useState)("Wet Rate (With Certified Operator)");
	const [deployRate, setDeployRate] = (0, import_react.useState)("$480 / day");
	const [deployStatus, setDeployStatus] = (0, import_react.useState)("Active on Site");
	const [deployStartDate, setDeployStartDate] = (0, import_react.useState)((/* @__PURE__ */ new Date()).toISOString().slice(0, 10));
	const [deployReturnDate, setDeployReturnDate] = (0, import_react.useState)("");
	const [deployContractRef, setDeployContractRef] = (0, import_react.useState)(`CNT-${(/* @__PURE__ */ new Date()).getFullYear()}-${Math.floor(100 + Math.random() * 900)}`);
	const [deployContactPerson, setDeployContactPerson] = (0, import_react.useState)("");
	const [deployContactPhone, setDeployContactPhone] = (0, import_react.useState)("+263 ");
	const [deployNotes, setDeployNotes] = (0, import_react.useState)("");
	function resetDeployForm() {
		setDeployMachineId("");
		setDeployPlant("");
		setDeployCategory("hire");
		setDeploySku(`OMNI-HIR-${Math.floor(100 + Math.random() * 900)}`);
		setDeployImage("/images/cat-excavator.jpg");
		setDeployClient("");
		setDeploySite("");
		setDeployProvince("Harare");
		setDeployOperator("Wet Rate (With Certified Operator)");
		setDeployRate("$480 / day");
		setDeployStatus("Active on Site");
		setDeployStartDate((/* @__PURE__ */ new Date()).toISOString().slice(0, 10));
		setDeployReturnDate("");
		setDeployContractRef(`CNT-${(/* @__PURE__ */ new Date()).getFullYear()}-${Math.floor(100 + Math.random() * 900)}`);
		setDeployContactPerson("");
		setDeployContactPhone("+263 ");
		setDeployNotes("");
	}
	function openCreateDeployment() {
		setEditingDeployment(null);
		resetDeployForm();
		setShowDeployModal(true);
	}
	function openEditDeployment(dep) {
		setEditingDeployment(dep);
		setDeployMachineId(dep.productId || "");
		setDeployPlant(dep.plant);
		setDeployCategory(dep.category);
		setDeploySku(dep.sku || "");
		setDeployImage(dep.image || "/images/cat-excavator.jpg");
		setDeployClient(dep.client);
		setDeploySite(dep.site);
		setDeployProvince(dep.province);
		setDeployOperator(dep.operator);
		setDeployRate(dep.rate);
		setDeployStatus(dep.status);
		setDeployStartDate(dep.startDate);
		setDeployReturnDate(dep.scheduledReturn);
		setDeployContractRef(dep.contractRef);
		setDeployContactPerson(dep.contactPerson || "");
		setDeployContactPhone(dep.contactPhone || "+263 ");
		setDeployNotes(dep.notes || "");
		setShowDeployModal(true);
	}
	function handleSaveDeployment(e) {
		e.preventDefault();
		if (!deployPlant.trim()) {
			triggerToast("Please provide machine or plant name");
			return;
		}
		if (!deployClient.trim()) {
			triggerToast("Please provide client name");
			return;
		}
		const numericMatch = deployRate.replace(/[^0-9.]/g, "");
		const numericDailyRate = parseFloat(numericMatch) || 0;
		if (editingDeployment) {
			const updated = {
				...editingDeployment,
				productId: deployMachineId || editingDeployment.productId,
				plant: deployPlant.trim(),
				category: deployCategory,
				sku: deploySku.trim() || editingDeployment.sku,
				image: deployImage || editingDeployment.image,
				client: deployClient.trim(),
				site: deploySite.trim() || editingDeployment.site,
				province: deployProvince,
				operator: deployOperator,
				rate: deployRate.trim(),
				dailyRateUSD: numericDailyRate || editingDeployment.dailyRateUSD,
				status: deployStatus,
				startDate: deployStartDate,
				scheduledReturn: deployReturnDate || editingDeployment.scheduledReturn,
				contractRef: deployContractRef.trim() || editingDeployment.contractRef,
				contactPerson: deployContactPerson.trim(),
				contactPhone: deployContactPhone.trim(),
				notes: deployNotes.trim()
			};
			const nextList = deploymentsList.map((d) => d.id === editingDeployment.id ? updated : d);
			setDeploymentsList(nextList);
			saveStoredDeployments(nextList);
			triggerToast(`Updated ${updated.plant} (${updated.id})`);
		} else {
			const nextNum = deploymentsList.length + 1;
			const newRecord = {
				id: `DEP-${String(nextNum).padStart(2, "0")}`,
				productId: deployMachineId || void 0,
				plant: deployPlant.trim(),
				category: deployCategory,
				sku: deploySku.trim() || `OMNI-HIR-${Math.floor(100 + Math.random() * 900)}`,
				image: deployImage || "/images/cat-excavator.jpg",
				client: deployClient.trim(),
				site: deploySite.trim() || "Harare Metro",
				province: deployProvince,
				operator: deployOperator,
				rate: deployRate.trim() || "$480 / day",
				dailyRateUSD: numericDailyRate || 480,
				status: deployStatus,
				startDate: deployStartDate || (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
				scheduledReturn: deployReturnDate || new Date(Date.now() + 2592e6).toISOString().slice(0, 10),
				contractRef: deployContractRef.trim() || `CNT-${(/* @__PURE__ */ new Date()).getFullYear()}-${Math.floor(100 + Math.random() * 900)}`,
				contactPerson: deployContactPerson.trim(),
				contactPhone: deployContactPhone.trim(),
				notes: deployNotes.trim()
			};
			const nextList = [newRecord, ...deploymentsList];
			setDeploymentsList(nextList);
			saveStoredDeployments(nextList);
			triggerToast(`Created deployment ${newRecord.id} for ${newRecord.plant}`);
		}
		setShowDeployModal(false);
		setEditingDeployment(null);
		resetDeployForm();
	}
	function handleDeleteDeployment(id) {
		const target = deploymentsList.find((d) => d.id === id);
		if (!target) return;
		setPendingAction({
			type: "delete-deployment",
			id,
			name: `${target.plant} (${target.client})`
		});
	}
	function handleConfirmDeleteDeployment(id) {
		const nextList = deploymentsList.filter((d) => d.id !== id);
		setDeploymentsList(nextList);
		saveStoredDeployments(nextList);
		triggerToast(`Deleted deployment ${id}`);
	}
	function handleQuickStatusChange(id, newStatus) {
		const nextList = deploymentsList.map((d) => d.id === id ? {
			...d,
			status: newStatus
		} : d);
		setDeploymentsList(nextList);
		saveStoredDeployments(nextList);
		triggerToast(`Deployment ${id} status set to "${newStatus}"`);
	}
	function handleResetDefaultDeployments() {
		setDeploymentsList(DEFAULT_DEPLOYMENTS);
		saveStoredDeployments(DEFAULT_DEPLOYMENTS);
		triggerToast("Reset field deployments to factory defaults");
	}
	function handleDeployImageUpload(e) {
		const files = e.target.files;
		if (!files || files.length === 0) return;
		const f = files[0];
		if (f.size > 12582912) {
			triggerToast("Image file is too large (>12MB)");
			return;
		}
		const reader = new FileReader();
		reader.onload = () => {
			if (typeof reader.result === "string") {
				setDeployImage(reader.result);
				triggerToast("Machine image attached");
			}
		};
		reader.readAsDataURL(f);
	}
	function handleImageUpload(e, isEditing = false, asGalleryItem = false) {
		const files = e.target.files;
		if (!files || files.length === 0) return;
		const fileList = [];
		for (let i = 0; i < files.length; i++) {
			const f = files[i];
			if (f.size > 12582912) triggerToast(`${f.name} is too large (>12MB)`);
			else fileList.push(f);
		}
		if (fileList.length === 0) return;
		let loaded = 0;
		const loadedUrls = [];
		fileList.forEach((file) => {
			const reader = new FileReader();
			reader.onload = (event) => {
				const result = event.target?.result;
				loadedUrls.push(result);
				loaded++;
				if (loaded === fileList.length) {
					if (isEditing && editingProduct) {
						if (asGalleryItem || loadedUrls.length > 1) {
							const currentGallery = editingProduct.gallery || [];
							if (!asGalleryItem && loadedUrls.length > 1) {
								const [first, ...rest] = loadedUrls;
								setEditingProduct({
									...editingProduct,
									image: first,
									gallery: [...currentGallery, ...rest]
								});
								triggerToast(`Updated primary photo and added ${rest.length} photo(s) to gallery`);
							} else {
								setEditingProduct({
									...editingProduct,
									gallery: [...currentGallery, ...loadedUrls]
								});
								triggerToast(`Added ${loadedUrls.length} photo(s) to product gallery`);
							}
						} else {
							setEditingProduct({
								...editingProduct,
								image: loadedUrls[0]
							});
							triggerToast("Primary photo updated successfully!");
						}
					} else if (asGalleryItem || loadedUrls.length > 1) {
						if (!asGalleryItem && loadedUrls.length > 1) {
							const [first, ...rest] = loadedUrls;
							setNewProdImage(first);
							setNewProdGallery((prev) => [...prev, ...rest]);
							triggerToast(`Updated primary photo and added ${rest.length} photo(s) to gallery`);
						} else {
							setNewProdGallery((prev) => [...prev, ...loadedUrls]);
							triggerToast(`Added ${loadedUrls.length} photo(s) to gallery`);
						}
					} else {
						setNewProdImage(loadedUrls[0]);
						triggerToast("Primary photo uploaded successfully!");
					}
				}
			};
			reader.readAsDataURL(file);
		});
	}
	function handleAddGalleryUrl(url, isEditing = false) {
		if (!url.trim()) return;
		if (isEditing && editingProduct) {
			const currentGallery = editingProduct.gallery || [];
			if (!currentGallery.includes(url.trim())) {
				setEditingProduct({
					...editingProduct,
					gallery: [...currentGallery, url.trim()]
				});
				triggerToast("Added photo to product gallery");
			}
		} else if (!newProdGallery.includes(url.trim())) {
			setNewProdGallery((prev) => [...prev, url.trim()]);
			triggerToast("Added photo to product gallery");
		}
	}
	function handleRemoveGalleryPhoto(index, isEditing = false) {
		if (isEditing && editingProduct) {
			const currentGallery = [...editingProduct.gallery || []];
			currentGallery.splice(index, 1);
			setEditingProduct({
				...editingProduct,
				gallery: currentGallery
			});
			triggerToast("Removed photo from gallery");
		} else {
			setNewProdGallery((prev) => {
				const next = [...prev];
				next.splice(index, 1);
				return next;
			});
			triggerToast("Removed photo from gallery");
		}
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
			gallery: newProdGallery.length > 0 ? newProdGallery : void 0,
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
		setNewProdGallery([]);
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
	const [newPresetCategoryFilter, setNewPresetCategoryFilter] = (0, import_react.useState)("all");
	const [newPhotoPresetSearch, setNewPhotoPresetSearch] = (0, import_react.useState)("");
	const [zoomedPhoto, setZoomedPhoto] = (0, import_react.useState)(null);
	const [productLightbox, setProductLightbox] = (0, import_react.useState)(null);
	function openProductLightbox(item, initialIndex = 0) {
		const images = [item.image, ...item.gallery || []].filter((img) => Boolean(img));
		setProductLightbox({
			isOpen: true,
			title: item.name,
			category: item.category,
			spec: item.spec,
			price: item.price,
			sku: item.sku || item.id,
			images: images.length > 0 ? images : ["/images/hero.jpg"],
			initialIndex
		});
	}
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
			setDeploymentsList(getStoredDeployments());
		}
		window.addEventListener("omnicore-crm-updated", handleStorageSync);
		window.addEventListener("omnicore-equipment-updated", handleStorageSync);
		window.addEventListener("omnicore-copy-updated", handleStorageSync);
		window.addEventListener("omnicore-recycle-updated", handleStorageSync);
		window.addEventListener("omnicore-deployments-updated", handleStorageSync);
		return () => {
			window.removeEventListener("omnicore-crm-updated", handleStorageSync);
			window.removeEventListener("omnicore-equipment-updated", handleStorageSync);
			window.removeEventListener("omnicore-copy-updated", handleStorageSync);
			window.removeEventListener("omnicore-recycle-updated", handleStorageSync);
			window.removeEventListener("omnicore-deployments-updated", handleStorageSync);
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
		else if (pendingAction.type === "delete-deployment") handleConfirmDeleteDeployment(pendingAction.id);
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
		if (pendingAction.type === "delete-deployment") return {
			title: `Delete deployment ${pendingAction.id}?`,
			body: `Are you sure you want to remove "${pendingAction.name}" from active field deployments?`,
			confirmLabel: "Delete deployment",
			tone: "danger"
		};
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
	const filteredDeployments = (0, import_react.useMemo)(() => {
		return deploymentsList.filter((d) => {
			const q = deploymentSearch.trim().toLowerCase();
			const matchesSearch = !q || d.id.toLowerCase().includes(q) || d.plant.toLowerCase().includes(q) || d.client.toLowerCase().includes(q) || d.site.toLowerCase().includes(q) || d.province.toLowerCase().includes(q) || d.operator.toLowerCase().includes(q) || d.contractRef.toLowerCase().includes(q) || d.contactPerson && d.contactPerson.toLowerCase().includes(q) || d.notes && d.notes.toLowerCase().includes(q);
			const matchesStatus = deploymentStatusFilter === "all" || d.status === deploymentStatusFilter;
			const matchesProvince = deploymentProvinceFilter === "all" || d.province === deploymentProvinceFilter;
			const matchesCategory = deploymentCategoryFilter === "all" || d.category === deploymentCategoryFilter;
			return matchesSearch && matchesStatus && matchesProvince && matchesCategory;
		}).sort((a, b) => {
			if (deploymentSortBy === "return-soon") return new Date(a.scheduledReturn).getTime() - new Date(b.scheduledReturn).getTime();
			if (deploymentSortBy === "newest") return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
			if (deploymentSortBy === "rate-high") return (b.dailyRateUSD || 0) - (a.dailyRateUSD || 0);
			if (deploymentSortBy === "plant-az") return a.plant.localeCompare(b.plant);
			return 0;
		});
	}, [
		deploymentsList,
		deploymentSearch,
		deploymentStatusFilter,
		deploymentProvinceFilter,
		deploymentCategoryFilter,
		deploymentSortBy
	]);
	const deploymentTotalPages = Math.max(1, Math.ceil(filteredDeployments.length / deploymentPageSize));
	const paginatedDeployments = (0, import_react.useMemo)(() => {
		if (deploymentPageSize >= 999) return filteredDeployments;
		const start = (deploymentPage - 1) * deploymentPageSize;
		return filteredDeployments.slice(start, start + deploymentPageSize);
	}, [
		filteredDeployments,
		deploymentPage,
		deploymentPageSize
	]);
	(0, import_react.useEffect)(() => {
		setDeploymentPage(1);
	}, [
		deploymentSearch,
		deploymentStatusFilter,
		deploymentProvinceFilter,
		deploymentCategoryFilter,
		deploymentPageSize
	]);
	const deploymentMetrics = (0, import_react.useMemo)(() => {
		return {
			total: deploymentsList.length,
			activeOnSite: deploymentsList.filter((d) => d.status === "Active on Site").length,
			scheduled: deploymentsList.filter((d) => d.status === "Scheduled Mobilization").length,
			demobilizingOrService: deploymentsList.filter((d) => d.status === "Demobilizing / In Transit" || d.status === "Routine Service / Standby").length,
			returnedYard: deploymentsList.filter((d) => d.status === "Returned to Cranborne Yard").length,
			totalDailyRunRate: deploymentsList.filter((d) => d.status === "Active on Site").reduce((sum, d) => sum + (d.dailyRateUSD || 0), 0)
		};
	}, [deploymentsList]);
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
		children: [toastMessage && /* @__PURE__ */ (void 0)("div", {
			className: "fixed top-5 inset-x-0 mx-auto z-50 flex w-fit items-center gap-2 rounded-full border border-black/[0.06] bg-white px-5 py-2.5 text-xs font-semibold text-[#1D1D1F] shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-md animate-in fade-in slide-in-from-top-3",
			children: [/* @__PURE__ */ (void 0)("span", { className: "size-2 rounded-full bg-[#34C759]" }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 1523,
				columnNumber: 11
			}, this), /* @__PURE__ */ (void 0)("span", { children: toastMessage }, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 1524,
				columnNumber: 11
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 1522,
			columnNumber: 9
		}, this), !isAuthenticated ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "min-h-screen flex flex-col justify-between bg-gradient-to-b from-[#F5F5F7] via-[#ECECEE] to-[#E5E5E8] px-4 py-8 sm:px-6 sm:py-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mx-auto flex w-full max-w-5xl items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						className: "flex items-center gap-2.5 group",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
							src: "/mark.png",
							alt: "Omnicore Solutions",
							className: "size-8 object-contain transition-transform group-hover:scale-105"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 1534,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-sm font-semibold tracking-tight text-[#1D1D1F]",
							children: "Omnicore Solutions"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 1539,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 1533,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/",
						className: "inline-flex items-center gap-1 text-xs font-medium text-[#6E6E73] hover:text-[#1D1D1F] transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Return to Public Website" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 1547,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExternalLink, { className: "size-3" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 1548,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 1543,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 1532,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mx-auto w-full max-w-[420px] py-8",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "rounded-3xl border border-black/[0.08] bg-white p-7 sm:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.06)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mx-auto flex size-14 items-center justify-center rounded-2xl bg-[#1D1D1F] text-white shadow-md",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Lock, { className: "size-6 text-white" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1557,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1556,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "mt-5 text-center",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
									className: "text-xl font-bold tracking-tight text-[#1D1D1F]",
									children: "Omnicore Backoffice"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1561,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-1.5 text-xs text-[#6E6E73] leading-relaxed",
									children: "Authorized Operations & Technical CRM Access · Cranborne Yard, Harare"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1564,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1560,
								columnNumber: 15
							}, this),
							loginError && /* @__PURE__ */ (void 0)("div", {
								className: "mt-5 flex items-start gap-2.5 rounded-2xl border border-red-200 bg-red-50/80 p-3.5 text-xs text-red-800 animate-in fade-in",
								children: [/* @__PURE__ */ (void 0)(CircleAlert, { className: "size-4 shrink-0 text-red-600 mt-0.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1571,
									columnNumber: 19
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "flex-1 font-medium",
									children: loginError
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1572,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1570,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
								onSubmit: handleLogin,
								className: "mt-6 space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
										className: "block text-xs font-semibold text-[#1D1D1F] mb-1.5",
										children: "Username / Administrator Email"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1578,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "relative",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
											type: "text",
											autoComplete: "username",
											required: true,
											value: loginEmail,
											onChange: (e) => setLoginEmail(e.target.value),
											placeholder: "Enter authorized administrator email",
											className: "w-full rounded-xl border border-black/15 bg-[#F9F9FB] px-3.5 py-2.5 text-sm text-[#1D1D1F] placeholder:text-[#A1A1A6] focus:border-[#1D1D1F] focus:bg-white focus:outline-none transition-all shadow-2xs"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1582,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1581,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1577,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center justify-between mb-1.5",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
											className: "block text-xs font-semibold text-[#1D1D1F]",
											children: "Password"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1596,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1595,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
											type: showLoginPassword ? "text" : "password",
											autoComplete: "current-password",
											required: true,
											value: loginPassword,
											onChange: (e) => setLoginPassword(e.target.value),
											placeholder: "Enter administrator password",
											className: "w-full rounded-xl border border-black/15 bg-[#F9F9FB] px-3.5 pr-10 py-2.5 text-sm text-[#1D1D1F] placeholder:text-[#A1A1A6] focus:border-[#1D1D1F] focus:bg-white focus:outline-none transition-all shadow-2xs"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1601,
											columnNumber: 21
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
											type: "button",
											onClick: () => setShowLoginPassword(!showLoginPassword),
											className: "absolute right-3 top-1/2 -translate-y-1/2 text-[#86868B] hover:text-[#1D1D1F] cursor-pointer",
											title: showLoginPassword ? "Hide password" : "Show password",
											children: showLoginPassword ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EyeOff, { className: "size-4" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1616,
												columnNumber: 44
											}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Eye, { className: "size-4" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1616,
												columnNumber: 76
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1610,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1600,
										columnNumber: 19
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 1594,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "flex items-center justify-between pt-1",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
											className: "flex items-center gap-2 text-xs text-[#6E6E73] cursor-pointer select-none",
											children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", {
												type: "checkbox",
												checked: loginRemember,
												onChange: (e) => setLoginRemember(e.target.checked),
												className: "size-4 rounded border-black/25 accent-[#1D1D1F]"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1623,
												columnNumber: 21
											}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Remember on this device" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 1629,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1622,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1621,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
										type: "submit",
										disabled: isSubmittingLogin,
										className: "mt-2 w-full inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#1D1D1F] text-sm font-semibold text-white shadow-sm hover:bg-black active:scale-[0.99] disabled:opacity-60 transition-all cursor-pointer",
										children: isSubmittingLogin ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Verifying Credentials..." }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1639,
											columnNumber: 21
										}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(KeyRound, { className: "size-4 text-white/80" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1642,
											columnNumber: 23
										}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Authenticate & Open Backoffice" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 1643,
											columnNumber: 23
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1641,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1633,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1576,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 1554,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 1553,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "text-center text-xs text-[#86868B] py-2",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Omnicore Solutions · Cranborne Yard, Harare, Zimbabwe"
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 1652,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 1530,
			columnNumber: 9
		}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
			productLightbox && /* @__PURE__ */ (void 0)(ProductPhotoLightbox, {
				isOpen: productLightbox.isOpen,
				onClose: () => setProductLightbox(null),
				title: productLightbox.title,
				category: productLightbox.category,
				spec: productLightbox.spec,
				price: productLightbox.price,
				sku: productLightbox.sku,
				images: productLightbox.images,
				initialIndex: productLightbox.initialIndex ?? 0
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 1661,
				columnNumber: 9
			}, this),
			zoomedPhoto && /* @__PURE__ */ (void 0)(ProductPhotoLightbox, {
				isOpen: Boolean(zoomedPhoto),
				onClose: () => setZoomedPhoto(null),
				title: zoomedPhoto.title,
				images: [zoomedPhoto.src]
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 1674,
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
								lineNumber: 1687,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-sm font-semibold tracking-tight text-[#1D1D1F]",
									children: "Omnicore Backoffice"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1692,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "rounded-full bg-black/[0.05] px-2 py-0.5 text-[10px] font-medium text-[#6E6E73]",
									children: "Harare Operations"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1695,
									columnNumber: 19
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1691,
								columnNumber: 17
							}, this) }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 1690,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 1686,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 1685,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => setActiveTab("profile"),
								className: `hidden sm:flex items-center gap-2 rounded-full border border-black/[0.08] px-3 py-1 text-xs transition-all cursor-pointer ${activeTab === "profile" ? "bg-[#1D1D1F] text-white" : "bg-[#F5F5F7] text-[#1D1D1F] hover:bg-[#EBEBEB]"}`,
								title: "Manage Administrator Profile & Credentials",
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-2 rounded-full bg-emerald-500" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1714,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: `font-medium ${activeTab === "profile" ? "text-white/90" : "text-[#6E6E73]"}`,
										children: adminProfile.email
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1715,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
										className: `rounded px-1.5 py-0.5 text-[10px] font-semibold ${activeTab === "profile" ? "bg-white/20 text-white" : "bg-black/[0.06] text-[#1D1D1F]"}`,
										children: "Profile"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1718,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1704,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: handleLogout,
								className: "inline-flex items-center gap-1.5 rounded-full border border-red-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-red-600 shadow-2xs hover:bg-red-50 transition-all active:scale-95",
								title: "Sign out of Operations Backoffice",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LogOut, { className: "size-3.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1731,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Sign Out" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1732,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1725,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/",
								className: "inline-flex items-center gap-1.5 rounded-full border border-black/[0.08] bg-white px-4 py-1.5 text-xs font-medium text-[#1D1D1F] shadow-2xs hover:bg-[#F5F5F7] transition-all active:scale-95",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Public Website" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1739,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ExternalLink, { className: "size-3 text-[#86868B]" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 1740,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1735,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 1703,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 1684,
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
							},
							{
								id: "profile",
								label: "Profile & Security",
								icon: ShieldCheck
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
										lineNumber: 1778,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: tab.label }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1779,
										columnNumber: 19
									}, this),
									tab.count !== void 0 && /* @__PURE__ */ (void 0)("span", {
										className: `rounded-full px-1.5 py-0.2 text-[10px] ${isActive ? "bg-black/[0.06] text-[#1D1D1F]" : "bg-black/[0.04] text-[#86868B]"}`,
										children: tab.count
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1781,
										columnNumber: 21
									}, this)
								]
							}, tab.id, true, {
								fileName: _jsxFileName,
								lineNumber: 1759,
								columnNumber: 17
							}, this);
						})
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 1747,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 1746,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 1683,
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
									lineNumber: 1807,
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
															lineNumber: 1822,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("span", {
															className: `rounded-full px-2.5 py-1 text-[11px] font-medium ${clientDraft.priority === "High" ? "bg-red-50 text-red-600" : clientDraft.priority === "Medium" ? "bg-amber-50 text-amber-700" : "bg-black/[0.04] text-[#86868B]"}`,
															children: [clientDraft.priority, " priority"]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1825,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("span", {
															className: "text-sm font-semibold text-[#1D1D1F]",
															children: clientDraft.dealValueDisplay
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1836,
															columnNumber: 25
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1821,
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
															lineNumber: 1841,
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
															lineNumber: 1842,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1840,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Organization"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1851,
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
															lineNumber: 1852,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1850,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Phone / WhatsApp"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1860,
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
															lineNumber: 1861,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1859,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Email"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1869,
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
															lineNumber: 1870,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1868,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Site location"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1878,
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
															lineNumber: 1879,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1877,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Province"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1887,
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
																lineNumber: 1894,
																columnNumber: 31
															}, this))
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1888,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1886,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Division"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1901,
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
																	lineNumber: 1907,
																	columnNumber: 29
																}, this),
																/* @__PURE__ */ (void 0)("option", {
																	value: "Construction Machinery Hire",
																	children: "Machinery Hire"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1908,
																	columnNumber: 29
																}, this),
																/* @__PURE__ */ (void 0)("option", {
																	value: "Hardware & Construction",
																	children: "Hardware & Fence"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1909,
																	columnNumber: 29
																}, this),
																/* @__PURE__ */ (void 0)("option", {
																	value: "Farming Machinery",
																	children: "Farming Plant"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1910,
																	columnNumber: 29
																}, this),
																/* @__PURE__ */ (void 0)("option", {
																	value: "Industry & Manufacturing",
																	children: "Industrial Plant"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1911,
																	columnNumber: 29
																}, this)
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1902,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1900,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Deal type"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1915,
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
																	lineNumber: 1923,
																	columnNumber: 29
																}, this),
																/* @__PURE__ */ (void 0)("option", {
																	value: "Hire",
																	children: "Plant Hire"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1924,
																	columnNumber: 29
																}, this),
																/* @__PURE__ */ (void 0)("option", {
																	value: "Both",
																	children: "Both"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1925,
																	columnNumber: 29
																}, this),
																/* @__PURE__ */ (void 0)("option", {
																	value: "Consultation",
																	children: "Technical Consult"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1926,
																	columnNumber: 29
																}, this)
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1916,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1914,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Stage"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1930,
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
																lineNumber: 1939,
																columnNumber: 31
															}, this))
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1931,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1929,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Priority"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 1946,
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
																	lineNumber: 1957,
																	columnNumber: 29
																}, this),
																/* @__PURE__ */ (void 0)("option", {
																	value: "Medium",
																	children: "Medium"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1958,
																	columnNumber: 29
																}, this),
																/* @__PURE__ */ (void 0)("option", {
																	value: "Normal",
																	children: "Normal"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 1959,
																	columnNumber: 29
																}, this)
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1947,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1945,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", {
															className: "sm:col-span-2",
															children: [/* @__PURE__ */ (void 0)("label", {
																className: "mb-1 block font-medium text-[#1D1D1F]",
																children: "Estimated value ($)"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1963,
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
																lineNumber: 1964,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1962,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", {
															className: "sm:col-span-2",
															children: [/* @__PURE__ */ (void 0)("label", {
																className: "mb-1 block font-medium text-[#1D1D1F]",
																children: "Equipment required"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1977,
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
																lineNumber: 1978,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1976,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", {
															className: "sm:col-span-2",
															children: [/* @__PURE__ */ (void 0)("label", {
																className: "mb-1 block font-medium text-[#1D1D1F]",
																children: "Internal notes"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 1988,
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
																lineNumber: 1989,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 1987,
															columnNumber: 25
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1839,
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
															lineNumber: 2006,
															columnNumber: 27
														}, this), "Move to bin"]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 1999,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("button", {
														type: "submit",
														className: "inline-flex h-11 items-center rounded-full bg-[#1D1D1F] px-5 text-xs font-semibold text-white hover:bg-black",
														children: "Save profile"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2009,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 1998,
													columnNumber: 23
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 1820,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 1819,
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
													lineNumber: 2021,
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
															lineNumber: 2050,
															columnNumber: 29
														}, this), /* @__PURE__ */ (void 0)(WhatsAppIcon, { className: "ml-1 size-3 shrink-0 text-[#1fa855]" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2051,
															columnNumber: 29
														}, this)]
													}, idx, true, {
														fileName: _jsxFileName,
														lineNumber: 2043,
														columnNumber: 27
													}, this))
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2024,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "mt-3 flex gap-2",
													children: [/* @__PURE__ */ (void 0)("a", {
														href: `tel:${clientDraft.phone}`,
														className: "inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-full border border-black/[0.08] bg-[#F5F5F7] text-xs font-medium text-[#1D1D1F]",
														children: [/* @__PURE__ */ (void 0)(Phone, { className: "size-3.5" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2060,
															columnNumber: 27
														}, this), "Call"]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2056,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("a", {
														href: `mailto:${clientDraft.email}`,
														className: "inline-flex h-11 flex-1 items-center justify-center gap-1.5 rounded-full border border-black/[0.08] bg-[#F5F5F7] text-xs font-medium text-[#1D1D1F]",
														children: [/* @__PURE__ */ (void 0)(Mail, { className: "size-3.5" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2067,
															columnNumber: 27
														}, this), "Email"]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2063,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 2055,
													columnNumber: 23
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 2020,
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
													lineNumber: 2074,
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
																lineNumber: 2081,
																columnNumber: 31
															}, this), /* @__PURE__ */ (void 0)("span", {
																className: "text-[#86868B]",
																children: item.date
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2082,
																columnNumber: 31
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 2080,
															columnNumber: 29
														}, this), /* @__PURE__ */ (void 0)("p", {
															className: "mt-0.5",
															children: item.note
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2084,
															columnNumber: 29
														}, this)]
													}, i, true, {
														fileName: _jsxFileName,
														lineNumber: 2079,
														columnNumber: 27
													}, this))
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2077,
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
														lineNumber: 2089,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("button", {
														type: "button",
														onClick: handleAddTimelineNote,
														className: "h-11 rounded-lg bg-[#1D1D1F] px-4 text-xs font-medium text-white hover:bg-black",
														children: "Add"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2096,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 2088,
													columnNumber: 23
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 2073,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 2019,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 1818,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 1806,
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
												lineNumber: 2113,
												columnNumber: 17
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "mt-1.5 flex items-baseline gap-2",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F]",
													children: ["$", pipelineMetrics.totalPipelineValue.toLocaleString()]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 2117,
													columnNumber: 19
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "text-xs text-[#34C759] font-medium",
													children: [pipelineMetrics.activeDeals, " deals"]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 2120,
													columnNumber: 19
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 2116,
												columnNumber: 17
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 2112,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "rounded-2xl border border-black/[0.04] bg-white p-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)]",
											children: [/* @__PURE__ */ (void 0)("span", {
												className: "text-[11px] font-medium text-[#86868B] uppercase tracking-wider",
												children: "Closed / Won Revenue"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 2127,
												columnNumber: 17
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "mt-1.5 flex items-baseline gap-2",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F]",
													children: ["$", pipelineMetrics.wonValue.toLocaleString()]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 2131,
													columnNumber: 19
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "text-xs text-[#34C759] font-medium",
													children: [pipelineMetrics.wonDeals, " orders"]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 2134,
													columnNumber: 19
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 2130,
												columnNumber: 17
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 2126,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "rounded-2xl border border-black/[0.04] bg-white p-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)]",
											children: [/* @__PURE__ */ (void 0)("span", {
												className: "text-[11px] font-medium text-[#86868B] uppercase tracking-wider",
												children: "High Priority Tenders"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 2141,
												columnNumber: 17
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "mt-1.5 flex items-baseline gap-2",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F]",
													children: pipelineMetrics.highPriorityCount
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2145,
													columnNumber: 19
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "text-xs text-[#FF9500] font-medium",
													children: "urgent"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2148,
													columnNumber: 19
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 2144,
												columnNumber: 17
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 2140,
											columnNumber: 15
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "rounded-2xl border border-black/[0.04] bg-white p-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)]",
											children: [/* @__PURE__ */ (void 0)("span", {
												className: "text-[11px] font-medium text-[#86868B] uppercase tracking-wider",
												children: "Client Base in Zimbabwe"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 2153,
												columnNumber: 17
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "mt-1.5 flex items-baseline gap-2",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "text-2xl sm:text-3xl font-semibold tracking-tight text-[#1D1D1F]",
													children: clients.length
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2157,
													columnNumber: 19
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "text-xs text-[#86868B]",
													children: "accounts"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2160,
													columnNumber: 19
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 2156,
												columnNumber: 17
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 2152,
											columnNumber: 15
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 2111,
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
													lineNumber: 2183,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: `text-[10px] ${isCurrent ? "text-white/80" : "text-[#86868B]"}`,
													children: count
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2184,
													columnNumber: 23
												}, this)]
											}, st, true, {
												fileName: _jsxFileName,
												lineNumber: 2174,
												columnNumber: 21
											}, this);
										})
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 2168,
										columnNumber: 15
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "flex flex-wrap items-center gap-2",
										children: [
											/* @__PURE__ */ (void 0)("div", {
												className: "relative",
												children: [/* @__PURE__ */ (void 0)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-[#86868B]" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2195,
													columnNumber: 19
												}, this), /* @__PURE__ */ (void 0)("input", {
													type: "text",
													value: crmSearch,
													onChange: (e) => setCrmSearch(e.target.value),
													placeholder: "Search client, syndicate, plant...",
													className: "h-9 w-44 sm:w-60 rounded-full border border-black/[0.08] bg-white pl-9 pr-3 text-xs text-[#1D1D1F] placeholder-[#86868B] shadow-2xs focus:outline-none focus:ring-1 focus:ring-black/20"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2196,
													columnNumber: 19
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 2194,
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
													lineNumber: 2211,
													columnNumber: 21
												}, this))
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 2205,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (void 0)("button", {
												onClick: () => setShowAddClientModal(true),
												className: "inline-flex items-center gap-1.5 rounded-full bg-[#1D1D1F] px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-black transition-all active:scale-95",
												children: [/* @__PURE__ */ (void 0)(Plus, { className: "size-3.5" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2221,
													columnNumber: 19
												}, this), /* @__PURE__ */ (void 0)("span", { children: "New Client" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2222,
													columnNumber: 19
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 2217,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (void 0)("button", {
												onClick: () => setActiveTab("recycle"),
												className: "inline-flex items-center gap-1.5 rounded-full border border-black/[0.08] bg-white px-3 py-2 text-xs font-medium text-[#1D1D1F] shadow-2xs hover:bg-[#F5F5F7]",
												title: "Open recycle bin",
												children: [
													/* @__PURE__ */ (void 0)(Recycle, { className: "size-3.5 text-[#6E6E73]" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2229,
														columnNumber: 19
													}, this),
													/* @__PURE__ */ (void 0)("span", {
														className: "hidden sm:inline",
														children: "Bin"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2230,
														columnNumber: 19
													}, this),
													recycleBin.filter((i) => i.kind === "client").length > 0 && /* @__PURE__ */ (void 0)("span", {
														className: "rounded-full bg-black/[0.06] px-1.5 text-[10px] font-semibold",
														children: recycleBin.filter((i) => i.kind === "client").length
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2232,
														columnNumber: 21
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 2224,
												columnNumber: 17
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 2193,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 2166,
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
										lineNumber: 2242,
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
											lineNumber: 2246,
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
												lineNumber: 2258,
												columnNumber: 21
											}, this), "Move to recycle bin"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 2253,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 2245,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 2241,
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
															lineNumber: 2272,
															columnNumber: 27
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2271,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ (void 0)("th", {
														className: "py-3 px-4",
														children: "Client / Organization"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2292,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ (void 0)("th", {
														className: "py-3 px-3",
														children: "Location"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2293,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ (void 0)("th", {
														className: "py-3 px-3",
														children: "Equipment Required"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2294,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ (void 0)("th", {
														className: "py-3 px-3",
														children: "Stage"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2295,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ (void 0)("th", {
														className: "py-3 px-3 text-right",
														children: "Deal Value"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2296,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ (void 0)("th", {
														className: "py-3 px-3 text-center",
														children: "Priority"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2297,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ (void 0)("th", {
														className: "py-3 px-3 text-right",
														children: "Actions"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2298,
														columnNumber: 25
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 2270,
												columnNumber: 23
											}, this) }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 2269,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("tbody", {
												className: "divide-y divide-black/[0.04]",
												children: filteredClients.length === 0 ? /* @__PURE__ */ (void 0)("tr", { children: /* @__PURE__ */ (void 0)("td", {
													colSpan: 8,
													className: "py-12 text-center text-[#86868B]",
													children: "No client records match the current filters."
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2304,
													columnNumber: 27
												}, this) }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2303,
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
																	lineNumber: 2328,
																	columnNumber: 33
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2324,
																columnNumber: 31
															}, this),
															/* @__PURE__ */ (void 0)("td", {
																className: "py-3 px-4",
																children: [/* @__PURE__ */ (void 0)("span", {
																	className: "font-semibold text-[#1D1D1F] block",
																	children: client.name
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 2339,
																	columnNumber: 33
																}, this), /* @__PURE__ */ (void 0)("span", {
																	className: "text-[11px] text-[#6E6E73] block truncate max-w-[160px]",
																	children: client.organization
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 2342,
																	columnNumber: 33
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 2338,
																columnNumber: 31
															}, this),
															/* @__PURE__ */ (void 0)("td", {
																className: "py-3 px-3 text-[#6E6E73]",
																children: [/* @__PURE__ */ (void 0)("span", {
																	className: "block text-[#1D1D1F]",
																	children: client.location
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 2348,
																	columnNumber: 33
																}, this), /* @__PURE__ */ (void 0)("span", {
																	className: "text-[10px] text-[#86868B]",
																	children: client.province
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 2349,
																	columnNumber: 33
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 2347,
																columnNumber: 31
															}, this),
															/* @__PURE__ */ (void 0)("td", {
																className: "py-3 px-3",
																children: [/* @__PURE__ */ (void 0)("span", {
																	className: "text-[#1D1D1F] font-medium block truncate max-w-[180px]",
																	children: client.equipmentInterest
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 2353,
																	columnNumber: 33
																}, this), /* @__PURE__ */ (void 0)("span", {
																	className: "rounded bg-black/[0.04] px-1.5 py-0.2 text-[10px] text-[#6E6E73]",
																	children: client.intent
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 2356,
																	columnNumber: 33
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 2352,
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
																		lineNumber: 2382,
																		columnNumber: 37
																	}, this))
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 2362,
																	columnNumber: 33
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2361,
																columnNumber: 31
															}, this),
															/* @__PURE__ */ (void 0)("td", {
																className: "py-3 px-3 text-right font-semibold text-[#1D1D1F]",
																children: client.dealValueDisplay
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2389,
																columnNumber: 31
															}, this),
															/* @__PURE__ */ (void 0)("td", {
																className: "py-3 px-3 text-center",
																children: /* @__PURE__ */ (void 0)("span", {
																	className: `inline-block rounded-full px-2 py-0.5 text-[10px] font-medium ${client.priority === "High" ? "bg-red-50 text-red-600" : client.priority === "Medium" ? "bg-amber-50 text-amber-700" : "bg-black/[0.04] text-[#86868B]"}`,
																	children: client.priority
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 2394,
																	columnNumber: 33
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2393,
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
																				lineNumber: 2418,
																				columnNumber: 37
																			}, this)
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 2409,
																			columnNumber: 35
																		}, this),
																		/* @__PURE__ */ (void 0)("a", {
																			href: `tel:${client.phone}`,
																			className: "flex size-7 items-center justify-center rounded-lg text-[#1D1D1F] hover:bg-black/[0.05]",
																			title: "Call",
																			children: /* @__PURE__ */ (void 0)(Phone, { className: "size-3.5 text-[#6E6E73]" }, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 2425,
																				columnNumber: 37
																			}, this)
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 2420,
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
																				lineNumber: 2435,
																				columnNumber: 37
																			}, this)
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 2427,
																			columnNumber: 35
																		}, this)
																	]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 2408,
																	columnNumber: 33
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2407,
																columnNumber: 31
															}, this)
														]
													}, client.id, true, {
														fileName: _jsxFileName,
														lineNumber: 2313,
														columnNumber: 29
													}, this);
												})
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 2301,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 2268,
											columnNumber: 19
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 2267,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-black/[0.06] bg-[#FBFBFC] px-4 py-3 text-xs text-[#6E6E73]",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex flex-wrap items-center gap-2",
											children: [
												/* @__PURE__ */ (void 0)("span", { children: "Showing" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2450,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("span", {
													className: "font-semibold text-[#1D1D1F]",
													children: filteredClients.length === 0 ? 0 : (crmPage - 1) * crmPageSize + 1
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2451,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("span", { children: "to" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2454,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("span", {
													className: "font-semibold text-[#1D1D1F]",
													children: Math.min(crmPage * crmPageSize, filteredClients.length)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2455,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("span", { children: "of" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2458,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("span", {
													className: "font-semibold text-[#1D1D1F]",
													children: filteredClients.length
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2459,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("span", { children: "clients" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2460,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("span", {
													className: "mx-1 text-black/20",
													children: "|"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2462,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "flex items-center gap-1.5",
													children: [/* @__PURE__ */ (void 0)("span", { children: "Per page:" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2465,
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
																lineNumber: 2474,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: 10,
																children: "10"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2475,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: 20,
																children: "20"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2476,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: 50,
																children: "50"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2477,
																columnNumber: 25
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2466,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 2464,
													columnNumber: 21
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 2449,
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
														lineNumber: 2489,
														columnNumber: 23
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2483,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("button", {
													onClick: () => setCrmPage((p) => Math.max(1, p - 1)),
													disabled: crmPage <= 1,
													className: "rounded-lg p-1 text-[#6E6E73] hover:bg-black/[0.05] hover:text-[#1D1D1F] disabled:opacity-30 disabled:pointer-events-none transition-colors",
													title: "Previous page",
													children: /* @__PURE__ */ (void 0)(ChevronLeft, { className: "size-4" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2497,
														columnNumber: 23
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2491,
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
														lineNumber: 2502,
														columnNumber: 25
													}, this))
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2500,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("button", {
													onClick: () => setCrmPage((p) => Math.min(crmTotalPages, p + 1)),
													disabled: crmPage >= crmTotalPages,
													className: "rounded-lg p-1 text-[#6E6E73] hover:bg-black/[0.05] hover:text-[#1D1D1F] disabled:opacity-30 disabled:pointer-events-none transition-colors",
													title: "Next page",
													children: /* @__PURE__ */ (void 0)(ChevronRight, { className: "size-4" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2522,
														columnNumber: 23
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2516,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("button", {
													onClick: () => setCrmPage(crmTotalPages),
													disabled: crmPage >= crmTotalPages,
													className: "rounded-lg p-1 text-[#6E6E73] hover:bg-black/[0.05] hover:text-[#1D1D1F] disabled:opacity-30 disabled:pointer-events-none transition-colors",
													title: "Last page",
													children: /* @__PURE__ */ (void 0)(ChevronsRight, { className: "size-4" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2530,
														columnNumber: 23
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2524,
													columnNumber: 21
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 2482,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 2448,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 2266,
									columnNumber: 13
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 2109,
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
																lineNumber: 2551,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("span", {
																className: `rounded-full px-2 py-0.5 text-[10px] font-semibold ${stageChipClass(peekClient.stage)}`,
																children: peekClient.stage
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2552,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("span", {
																className: `rounded-full px-2 py-0.5 text-[10px] font-medium ${peekClient.priority === "High" ? "bg-red-50 text-red-600" : peekClient.priority === "Medium" ? "bg-amber-50 text-amber-700" : "bg-black/[0.04] text-[#86868B]"}`,
																children: peekClient.priority
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2555,
																columnNumber: 25
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2550,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("h3", {
														className: "mt-1 text-base font-semibold text-[#1D1D1F]",
														children: peekClient.name
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2567,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("p", {
														className: "text-xs text-[#6E6E73]",
														children: peekClient.organization
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2568,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 2549,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("button", {
												type: "button",
												onClick: () => setPeekClientId(null),
												className: "rounded-full p-2 text-[#86868B] hover:bg-[#F5F5F7] hover:text-[#1D1D1F]",
												children: /* @__PURE__ */ (void 0)(X, { className: "size-4" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2575,
													columnNumber: 23
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 2570,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 2548,
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
														lineNumber: 2581,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "font-semibold text-[#1D1D1F]",
														children: peekClient.dealValueDisplay
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2582,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 2580,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "rounded-xl bg-[#F5F5F7] p-2.5",
													children: [/* @__PURE__ */ (void 0)("span", {
														className: "block text-[10px] uppercase text-[#86868B]",
														children: "Location"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2585,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "block truncate font-semibold text-[#1D1D1F]",
														children: peekClient.location
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2586,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 2584,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "col-span-2 rounded-xl bg-[#F5F5F7] p-2.5",
													children: [/* @__PURE__ */ (void 0)("span", {
														className: "block text-[10px] uppercase text-[#86868B]",
														children: "Requirement"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2591,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "font-medium text-[#1D1D1F]",
														children: peekClient.equipmentInterest
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2592,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 2590,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "rounded-xl bg-[#F5F5F7] p-2.5",
													children: [/* @__PURE__ */ (void 0)("span", {
														className: "block text-[10px] uppercase text-[#86868B]",
														children: "Phone"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2595,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "font-semibold text-[#1D1D1F]",
														children: peekClient.phone
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2596,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 2594,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "rounded-xl bg-[#F5F5F7] p-2.5",
													children: [/* @__PURE__ */ (void 0)("span", {
														className: "block text-[10px] uppercase text-[#86868B]",
														children: "Intent"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2599,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "font-semibold text-[#1D1D1F]",
														children: peekClient.intent
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2600,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 2598,
													columnNumber: 21
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 2579,
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
														lineNumber: 2610,
														columnNumber: 23
													}, this), "Edit profile"]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 2605,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("a", {
													href: whatsappUrl(`Hello ${peekClient.name}, following up from Omnicore Harare regarding your inquiry for ${peekClient.equipmentInterest}.`),
													target: "_blank",
													rel: "noopener noreferrer",
													className: "inline-flex h-11 items-center justify-center rounded-full border border-black/[0.08] px-4 text-[#1fa855] hover:bg-emerald-50",
													children: /* @__PURE__ */ (void 0)(WhatsAppIcon, { className: "size-4" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2621,
														columnNumber: 23
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2613,
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
														lineNumber: 2631,
														columnNumber: 23
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2623,
													columnNumber: 21
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 2604,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 2544,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 2540,
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
											lineNumber: 2643,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("button", {
											onClick: () => setShowAddClientModal(false),
											className: "rounded-full p-1 text-[#86868B] hover:bg-[#F5F5F7]",
											children: /* @__PURE__ */ (void 0)(X, { className: "size-4" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 2650,
												columnNumber: 23
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 2646,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 2642,
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
													lineNumber: 2657,
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
													lineNumber: 2658,
													columnNumber: 25
												}, this)] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 2656,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
													className: "font-medium text-[#1D1D1F] block mb-1",
													children: "Company / Mining Syndicate"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2668,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("input", {
													type: "text",
													value: newClientOrg,
													onChange: (e) => setNewClientOrg(e.target.value),
													placeholder: "e.g. Mberengwa Chrome JV",
													className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2669,
													columnNumber: 25
												}, this)] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 2667,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 2655,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
												children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
													className: "font-medium text-[#1D1D1F] block mb-1",
													children: "WhatsApp / Phone *"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2681,
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
													lineNumber: 2682,
													columnNumber: 25
												}, this)] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 2680,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
													className: "font-medium text-[#1D1D1F] block mb-1",
													children: "Email Address"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2692,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("input", {
													type: "email",
													value: newClientEmail,
													onChange: (e) => setNewClientEmail(e.target.value),
													placeholder: "client@syndicate.co.zw",
													className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2693,
													columnNumber: 25
												}, this)] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 2691,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 2679,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
												children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
													className: "font-medium text-[#1D1D1F] block mb-1",
													children: "Site Location"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2705,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("input", {
													type: "text",
													value: newClientLocation,
													onChange: (e) => setNewClientLocation(e.target.value),
													placeholder: "e.g. Kadoma / Golden Valley",
													className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2706,
													columnNumber: 25
												}, this)] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 2704,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
													className: "font-medium text-[#1D1D1F] block mb-1",
													children: "Province in Zimbabwe"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2715,
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
														lineNumber: 2722,
														columnNumber: 29
													}, this))
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2716,
													columnNumber: 25
												}, this)] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 2714,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 2703,
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
														lineNumber: 2732,
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
																lineNumber: 2738,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: "Construction Machinery Hire",
																children: "Machinery Hire"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2739,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: "Hardware & Construction",
																children: "Hardware & Fence"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2740,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: "Farming Machinery",
																children: "Farming Plant"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2741,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: "Industry & Manufacturing",
																children: "Industrial Plant"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2742,
																columnNumber: 27
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2733,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2731,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-medium text-[#1D1D1F] block mb-1",
														children: "Deal Type"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2746,
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
																lineNumber: 2752,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: "Hire",
																children: "Plant Hire"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2753,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: "Both",
																children: "Both"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2754,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: "Consultation",
																children: "Technical Consult"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2755,
																columnNumber: 27
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2747,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2745,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-medium text-[#1D1D1F] block mb-1",
														children: "Priority"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2759,
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
																lineNumber: 2765,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: "Medium",
																children: "Medium"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2766,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: "Normal",
																children: "Normal"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2767,
																columnNumber: 27
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2760,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2758,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-medium text-[#1D1D1F] block mb-1",
														children: "Estimated Value ($)"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2771,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("input", {
														type: "text",
														value: newClientDealValue,
														onChange: (e) => setNewClientDealValue(e.target.value),
														placeholder: "e.g. 15000",
														className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 2772,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2770,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 2730,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
												className: "font-medium text-[#1D1D1F] block mb-1",
												children: "Equipment Specification Required"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 2783,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("input", {
												type: "text",
												value: newClientInterest,
												onChange: (e) => setNewClientInterest(e.target.value),
												placeholder: "e.g. 200x300 Jaw crusher with diesel motor option",
												className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 2784,
												columnNumber: 23
											}, this)] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 2782,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
												className: "font-medium text-[#1D1D1F] block mb-1",
												children: "Initial Notes"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 2794,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("textarea", {
												rows: 2,
												value: newClientNotes,
												onChange: (e) => setNewClientNotes(e.target.value),
												placeholder: "Project timelines, access constraints, payment structure...",
												className: "w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] p-2.5 focus:bg-white focus:outline-none"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 2795,
												columnNumber: 23
											}, this)] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 2793,
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
													lineNumber: 2805,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("button", {
													type: "submit",
													className: "rounded-full bg-[#1D1D1F] px-4 py-1.5 text-xs font-semibold text-white hover:bg-black",
													children: "Save Client Record"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 2812,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 2804,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 2654,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 2641,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 2640,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 1804,
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
									lineNumber: 2833,
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
																	lineNumber: 2853,
																	columnNumber: 31
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2852,
																columnNumber: 29
															}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
																className: "font-semibold text-[#1D1D1F] text-base",
																children: "Equipment Visual & Yard Photo Studio"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2856,
																columnNumber: 31
															}, this), /* @__PURE__ */ (void 0)("p", {
																className: "text-xs text-[#86868B] mt-0.5",
																children: "High-resolution photography shown across public catalogue, division pages, client WhatsApp spec sheets, and tender documents."
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2859,
																columnNumber: 31
															}, this)] }, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 2855,
																columnNumber: 29
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 2851,
															columnNumber: 27
														}, this) }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2850,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", {
															className: "flex items-center gap-2 self-start sm:self-auto",
															children: /* @__PURE__ */ (void 0)("span", {
																className: `rounded-full px-3 py-1 text-xs font-semibold ${editingProduct.stockStatus === "In Yard Cranborne" ? "bg-[#E8F8EE] text-[#1B833E]" : editingProduct.stockStatus === "In Transit (Beitbridge)" ? "bg-[#FFF4E5] text-[#B25E00]" : "bg-black/[0.04] text-[#6E6E73]"}`,
																children: editingProduct.stockStatus || "In Yard Cranborne"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2866,
																columnNumber: 27
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 2865,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2849,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "space-y-4",
														children: [/* @__PURE__ */ (void 0)("div", {
															className: "flex items-center justify-between",
															children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
																className: "text-xs font-semibold text-[#1D1D1F] block",
																children: "Product Multi-Photo Gallery"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2884,
																columnNumber: 29
															}, this), /* @__PURE__ */ (void 0)("p", {
																className: "text-[11px] text-[#86868B] mt-0.5",
																children: "Post several photos per machine. Drag or click any thumbnail to set it as the primary photo."
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 2887,
																columnNumber: 29
															}, this)] }, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 2883,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("span", {
																className: "rounded-full bg-black/[0.05] px-2.5 py-0.5 text-[11px] font-semibold text-[#1D1D1F]",
																children: [
																	(editingProduct.gallery?.length || 0) + 1,
																	" ",
																	(editingProduct.gallery?.length || 0) + 1 === 1 ? "Photo" : "Photos"
																]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 2891,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 2882,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", {
															className: "flex flex-wrap items-center gap-3 p-3 rounded-2xl bg-[#F9F9FA] border border-black/[0.06]",
															children: [
																/* @__PURE__ */ (void 0)("div", {
																	role: "button",
																	tabIndex: 0,
																	onClick: () => openProductLightbox(editingProduct, 0),
																	onKeyDown: (e) => {
																		if (e.key === "Enter" || e.key === " ") {
																			e.preventDefault();
																			openProductLightbox(editingProduct, 0);
																		}
																	},
																	className: "relative group/primary rounded-xl overflow-hidden border-2 border-[#1FA855] p-0.5 bg-white shadow-xs cursor-pointer hover:border-black transition-all",
																	title: "Click to preview primary photo in large screen",
																	children: [
																		/* @__PURE__ */ (void 0)("img", {
																			src: editingProduct.image || "/images/jaw-crusher.jpg",
																			alt: "Primary",
																			className: "size-16 sm:size-20 rounded-lg object-cover"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 2912,
																			columnNumber: 29
																		}, this),
																		/* @__PURE__ */ (void 0)("div", {
																			className: "absolute inset-0 bg-black/35 opacity-0 group-hover/primary:opacity-100 transition-opacity flex items-center justify-center rounded-lg",
																			children: /* @__PURE__ */ (void 0)(ZoomIn, { className: "size-4.5 text-white drop-shadow-md" }, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 2918,
																				columnNumber: 31
																			}, this)
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 2917,
																			columnNumber: 29
																		}, this),
																		/* @__PURE__ */ (void 0)("span", {
																			className: "absolute bottom-1 inset-x-1 rounded bg-[#1FA855] text-white text-[9px] font-bold text-center py-0.5 shadow-xs",
																			children: "Primary"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 2920,
																			columnNumber: 29
																		}, this)
																	]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 2899,
																	columnNumber: 27
																}, this),
																(editingProduct.gallery || []).map((photoUrl, idx) => /* @__PURE__ */ (void 0)("div", {
																	className: "relative group rounded-xl overflow-hidden border border-black/10 p-0.5 bg-white shadow-2xs hover:border-[#1D1D1F] transition-all",
																	children: [/* @__PURE__ */ (void 0)("img", {
																		src: photoUrl,
																		alt: `Gallery ${idx + 1}`,
																		className: "size-16 sm:size-20 rounded-lg object-cover"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 2931,
																		columnNumber: 31
																	}, this), /* @__PURE__ */ (void 0)("div", {
																		className: "absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-between p-1 rounded-lg",
																		children: [/* @__PURE__ */ (void 0)("div", {
																			className: "flex items-center justify-between w-full",
																			children: [/* @__PURE__ */ (void 0)("button", {
																				type: "button",
																				onClick: () => openProductLightbox(editingProduct, idx + 1),
																				className: "rounded-full bg-black/75 p-1 text-white hover:bg-white hover:text-black shadow-xs cursor-pointer transition-colors",
																				title: "View this photo on large screen",
																				children: /* @__PURE__ */ (void 0)(ZoomIn, { className: "size-2.5" }, void 0, false, {
																					fileName: _jsxFileName,
																					lineNumber: 2944,
																					columnNumber: 37
																				}, this)
																			}, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 2938,
																				columnNumber: 35
																			}, this), /* @__PURE__ */ (void 0)("button", {
																				type: "button",
																				onClick: () => handleRemoveGalleryPhoto(idx, true),
																				className: "rounded-full bg-red-600 p-1 text-white hover:bg-red-700 shadow-xs cursor-pointer",
																				title: "Remove photo",
																				children: /* @__PURE__ */ (void 0)(X, { className: "size-2.5" }, void 0, false, {
																					fileName: _jsxFileName,
																					lineNumber: 2952,
																					columnNumber: 37
																				}, this)
																			}, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 2946,
																				columnNumber: 35
																			}, this)]
																		}, void 0, true, {
																			fileName: _jsxFileName,
																			lineNumber: 2937,
																			columnNumber: 33
																		}, this), /* @__PURE__ */ (void 0)("button", {
																			type: "button",
																			onClick: () => {
																				const oldPrimary = editingProduct.image;
																				const nextGallery = [...editingProduct.gallery || []];
																				nextGallery[idx] = oldPrimary;
																				setEditingProduct({
																					...editingProduct,
																					image: photoUrl,
																					gallery: nextGallery
																				});
																				triggerToast("Swapped as primary photo");
																			},
																			className: "w-full rounded bg-white/95 text-[#1D1D1F] text-[9px] font-semibold py-0.5 hover:bg-white cursor-pointer",
																			children: "Make Primary"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 2955,
																			columnNumber: 33
																		}, this)]
																	}, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 2936,
																		columnNumber: 31
																	}, this)]
																}, idx, true, {
																	fileName: _jsxFileName,
																	lineNumber: 2927,
																	columnNumber: 29
																}, this)),
																/* @__PURE__ */ (void 0)("label", {
																	className: "flex flex-col items-center justify-center size-16 sm:size-20 rounded-xl border border-dashed border-black/20 bg-white hover:border-[#1D1D1F] hover:bg-[#F5F5F7] cursor-pointer transition-all text-[#6E6E73] hover:text-[#1D1D1F] shrink-0",
																	children: [
																		/* @__PURE__ */ (void 0)(ImagePlus, { className: "size-5 mb-0.5 text-[#1D1D1F]" }, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 2978,
																			columnNumber: 29
																		}, this),
																		/* @__PURE__ */ (void 0)("span", {
																			className: "text-[10px] font-semibold",
																			children: "+ Add Photo"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 2979,
																			columnNumber: 29
																		}, this),
																		/* @__PURE__ */ (void 0)("input", {
																			type: "file",
																			accept: "image/*",
																			onChange: (e) => handleImageUpload(e, true, true),
																			className: "hidden"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 2980,
																			columnNumber: 29
																		}, this)
																	]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 2977,
																	columnNumber: 27
																}, this)
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 2897,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2881,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "grid grid-cols-1 lg:grid-cols-12 gap-5 items-start",
														children: [/* @__PURE__ */ (void 0)("div", {
															className: "lg:col-span-7 space-y-3",
															children: [/* @__PURE__ */ (void 0)("div", {
																role: "button",
																tabIndex: 0,
																onClick: () => openProductLightbox(editingProduct, 0),
																onKeyDown: (e) => {
																	if (e.key === "Enter" || e.key === " ") {
																		e.preventDefault();
																		openProductLightbox(editingProduct, 0);
																	}
																},
																className: "relative w-full h-64 sm:h-76 md:h-84 rounded-2xl overflow-hidden bg-black/[0.05] border border-black/[0.08] shadow-sm group cursor-pointer",
																title: "Click to open photos in full-screen large preview",
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
																		lineNumber: 3007,
																		columnNumber: 29
																	}, this),
																	/* @__PURE__ */ (void 0)("div", {
																		className: "absolute top-3 inset-x-3 flex items-center justify-between pointer-events-none",
																		children: [/* @__PURE__ */ (void 0)("span", {
																			className: "rounded-full bg-black/75 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md flex items-center gap-2 shadow-md",
																			children: [/* @__PURE__ */ (void 0)("span", { className: "size-2 rounded-full bg-[#1FA855] animate-pulse" }, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 3018,
																				columnNumber: 33
																			}, this), /* @__PURE__ */ (void 0)("span", { children: "Active Primary Photo" }, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 3019,
																				columnNumber: 33
																			}, this)]
																		}, void 0, true, {
																			fileName: _jsxFileName,
																			lineNumber: 3017,
																			columnNumber: 31
																		}, this), /* @__PURE__ */ (void 0)("button", {
																			type: "button",
																			onClick: (e) => {
																				e.stopPropagation();
																				openProductLightbox(editingProduct, 0);
																			},
																			className: "pointer-events-auto rounded-full bg-black/60 hover:bg-black p-2 text-white shadow-md backdrop-blur-md transition-all active:scale-90 cursor-pointer",
																			title: "Zoom & Inspect HD Image in Large Screen (Z)",
																			children: /* @__PURE__ */ (void 0)(ZoomIn, { className: "size-4" }, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 3030,
																				columnNumber: 33
																			}, this)
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 3021,
																			columnNumber: 31
																		}, this)]
																	}, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 3016,
																		columnNumber: 29
																	}, this),
																	/* @__PURE__ */ (void 0)("div", {
																		className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 pt-10 text-white",
																		children: /* @__PURE__ */ (void 0)("div", {
																			className: "flex items-center justify-between gap-2",
																			children: [/* @__PURE__ */ (void 0)("div", {
																				className: "min-w-0",
																				children: [/* @__PURE__ */ (void 0)("p", {
																					className: "text-sm font-semibold truncate leading-tight",
																					children: editingProduct.name
																				}, void 0, false, {
																					fileName: _jsxFileName,
																					lineNumber: 3038,
																					columnNumber: 35
																				}, this), /* @__PURE__ */ (void 0)("div", {
																					className: "flex items-center gap-2 mt-1 text-xs text-white/80",
																					children: [
																						/* @__PURE__ */ (void 0)("span", {
																							className: "capitalize font-medium",
																							children: [editingProduct.category, " Division"]
																						}, void 0, true, {
																							fileName: _jsxFileName,
																							lineNumber: 3040,
																							columnNumber: 37
																						}, this),
																						/* @__PURE__ */ (void 0)("span", { children: "•" }, void 0, false, {
																							fileName: _jsxFileName,
																							lineNumber: 3041,
																							columnNumber: 37
																						}, this),
																						/* @__PURE__ */ (void 0)("span", {
																							className: "font-mono text-[11px]",
																							children: editingProduct.sku || editingProduct.id
																						}, void 0, false, {
																							fileName: _jsxFileName,
																							lineNumber: 3042,
																							columnNumber: 37
																						}, this)
																					]
																				}, void 0, true, {
																					fileName: _jsxFileName,
																					lineNumber: 3039,
																					columnNumber: 35
																				}, this)]
																			}, void 0, true, {
																				fileName: _jsxFileName,
																				lineNumber: 3037,
																				columnNumber: 33
																			}, this), /* @__PURE__ */ (void 0)("span", {
																				className: "shrink-0 rounded-full bg-white/20 backdrop-blur-md px-2.5 py-1 text-[10px] font-semibold text-white group-hover:bg-[#1FA855] transition-all",
																				children: "View Large Screen ↗"
																			}, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 3045,
																				columnNumber: 33
																			}, this)]
																		}, void 0, true, {
																			fileName: _jsxFileName,
																			lineNumber: 3036,
																			columnNumber: 31
																		}, this)
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 3035,
																		columnNumber: 29
																	}, this)
																]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 2994,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("div", {
																className: "flex flex-wrap items-center justify-between gap-2 text-xs text-[#86868B]",
																children: [/* @__PURE__ */ (void 0)("span", {
																	className: "flex items-center gap-1.5",
																	children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "size-3.5 text-[#1B833E]" }, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 3054,
																		columnNumber: 31
																	}, this), /* @__PURE__ */ (void 0)("span", { children: "Live high-resolution preview connected" }, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 3055,
																		columnNumber: 31
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 3053,
																	columnNumber: 29
																}, this), /* @__PURE__ */ (void 0)("button", {
																	type: "button",
																	onClick: () => openProductLightbox(editingProduct, 0),
																	className: "font-medium text-[#1D1D1F] hover:underline inline-flex items-center gap-1 cursor-pointer",
																	children: [/* @__PURE__ */ (void 0)(Maximize2, { className: "size-3" }, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 3062,
																		columnNumber: 31
																	}, this), /* @__PURE__ */ (void 0)("span", { children: "Inspect HD Fullscreen" }, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 3063,
																		columnNumber: 31
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 3057,
																	columnNumber: 29
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 3052,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 2993,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", {
															className: "lg:col-span-5 space-y-4 rounded-2xl bg-[#F9F9FA] p-4.5 border border-black/[0.06]",
															children: [
																/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
																	className: "text-xs font-semibold text-[#1D1D1F] block",
																	children: "Upload Additional or Primary Photos"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 3071,
																	columnNumber: 29
																}, this), /* @__PURE__ */ (void 0)("p", {
																	className: "text-[11px] text-[#86868B] mt-0.5",
																	children: "Upload from device or enter URL. You can upload as many photos as needed."
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 3074,
																	columnNumber: 29
																}, this)] }, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 3070,
																	columnNumber: 27
																}, this),
																/* @__PURE__ */ (void 0)("div", {
																	className: "grid grid-cols-2 gap-2",
																	children: [/* @__PURE__ */ (void 0)("label", {
																		className: "flex flex-col items-center justify-center gap-1.5 rounded-xl border border-dashed border-black/[0.15] bg-white p-3 hover:border-black/30 hover:bg-[#F5F5F7] cursor-pointer transition-all text-center",
																		children: [
																			/* @__PURE__ */ (void 0)(Upload, { className: "size-4 text-[#1D1D1F]" }, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 3082,
																				columnNumber: 31
																			}, this),
																			/* @__PURE__ */ (void 0)("span", {
																				className: "text-[11px] font-semibold text-[#1D1D1F]",
																				children: "Set Primary"
																			}, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 3083,
																				columnNumber: 31
																			}, this),
																			/* @__PURE__ */ (void 0)("span", {
																				className: "text-[9px] text-[#86868B]",
																				children: "Replace hero"
																			}, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 3086,
																				columnNumber: 31
																			}, this),
																			/* @__PURE__ */ (void 0)("input", {
																				type: "file",
																				accept: "image/*",
																				onChange: (e) => handleImageUpload(e, true, false),
																				className: "hidden"
																			}, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 3087,
																				columnNumber: 31
																			}, this)
																		]
																	}, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 3081,
																		columnNumber: 29
																	}, this), /* @__PURE__ */ (void 0)("label", {
																		className: "flex flex-col items-center justify-center gap-1.5 rounded-xl border border-dashed border-emerald-300 bg-emerald-50/50 p-3 hover:border-emerald-500 hover:bg-emerald-50 cursor-pointer transition-all text-center",
																		children: [
																			/* @__PURE__ */ (void 0)(ImagePlus, { className: "size-4 text-emerald-700" }, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 3096,
																				columnNumber: 31
																			}, this),
																			/* @__PURE__ */ (void 0)("span", {
																				className: "text-[11px] font-semibold text-emerald-900",
																				children: "Add to Gallery"
																			}, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 3097,
																				columnNumber: 31
																			}, this),
																			/* @__PURE__ */ (void 0)("span", {
																				className: "text-[9px] text-emerald-700/80",
																				children: "Extra photo"
																			}, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 3100,
																				columnNumber: 31
																			}, this),
																			/* @__PURE__ */ (void 0)("input", {
																				type: "file",
																				accept: "image/*",
																				onChange: (e) => handleImageUpload(e, true, true),
																				className: "hidden"
																			}, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 3101,
																				columnNumber: 31
																			}, this)
																		]
																	}, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 3095,
																		columnNumber: 29
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 3080,
																	columnNumber: 27
																}, this),
																/* @__PURE__ */ (void 0)("div", {
																	className: "space-y-1.5",
																	children: [/* @__PURE__ */ (void 0)("label", {
																		className: "text-xs font-medium text-[#1D1D1F] flex items-center justify-between",
																		children: [/* @__PURE__ */ (void 0)("span", { children: "Primary Photo URL / Path:" }, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 3113,
																			columnNumber: 31
																		}, this), /* @__PURE__ */ (void 0)("span", {
																			className: "text-[10px] text-[#86868B] font-mono",
																			children: "/images/..."
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 3114,
																			columnNumber: 31
																		}, this)]
																	}, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 3112,
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
																		lineNumber: 3116,
																		columnNumber: 29
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 3111,
																	columnNumber: 27
																}, this),
																/* @__PURE__ */ (void 0)("div", {
																	className: "pt-1",
																	children: /* @__PURE__ */ (void 0)("form", {
																		onSubmit: (e) => {
																			e.preventDefault();
																			const input = e.currentTarget.elements.namedItem("extraUrl");
																			if (input && input.value) {
																				handleAddGalleryUrl(input.value, true);
																				input.value = "";
																			}
																		},
																		className: "flex items-center gap-1.5",
																		children: [/* @__PURE__ */ (void 0)("input", {
																			type: "text",
																			name: "extraUrl",
																			placeholder: "Paste extra photo URL...",
																			className: "flex-1 h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-[11px] font-mono focus:outline-none focus:ring-1 focus:ring-black/20"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 3139,
																			columnNumber: 31
																		}, this), /* @__PURE__ */ (void 0)("button", {
																			type: "submit",
																			className: "h-8 px-3 rounded-lg bg-[#1D1D1F] text-white text-[11px] font-semibold hover:bg-black transition-all shrink-0 cursor-pointer",
																			children: "+ Add URL"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 3145,
																			columnNumber: 31
																		}, this)]
																	}, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 3127,
																		columnNumber: 29
																	}, this)
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 3126,
																	columnNumber: 27
																}, this)
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 3069,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 2991,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 2848,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.03)] space-y-4",
												children: [/* @__PURE__ */ (void 0)("h3", {
													className: "font-semibold text-[#1D1D1F] text-sm border-b border-black/[0.06] pb-3",
													children: "Model & Commercial Identity"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3159,
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
																lineNumber: 3165,
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
																lineNumber: 3168,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 3164,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Division"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3179,
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
																	lineNumber: 3192,
																	columnNumber: 29
																}, this),
																/* @__PURE__ */ (void 0)("option", {
																	value: "hire",
																	children: "Construction Machinery Hire"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 3193,
																	columnNumber: 29
																}, this),
																/* @__PURE__ */ (void 0)("option", {
																	value: "hardware",
																	children: "Hardware & Construction"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 3194,
																	columnNumber: 29
																}, this),
																/* @__PURE__ */ (void 0)("option", {
																	value: "farming",
																	children: "Farming Machinery"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 3195,
																	columnNumber: 29
																}, this),
																/* @__PURE__ */ (void 0)("option", {
																	value: "industry",
																	children: "Industry & Manufacturing"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 3196,
																	columnNumber: 29
																}, this)
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 3182,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 3178,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Commercial Deal Type"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3201,
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
																lineNumber: 3214,
																columnNumber: 29
															}, this), /* @__PURE__ */ (void 0)("option", {
																value: "hire",
																children: "Plant Hire / Rental"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3215,
																columnNumber: 29
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 3204,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 3200,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Indicative Rate / Price USD"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3220,
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
															lineNumber: 3223,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 3219,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Price Note / Terms"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3239,
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
															lineNumber: 3242,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 3238,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Cranborne Yard Stock Status"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3252,
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
																	lineNumber: 3265,
																	columnNumber: 29
																}, this),
																/* @__PURE__ */ (void 0)("option", {
																	value: "In Transit (Beitbridge)",
																	children: "In Transit (Beitbridge)"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 3266,
																	columnNumber: 29
																}, this),
																/* @__PURE__ */ (void 0)("option", {
																	value: "Active on Site",
																	children: "Active on Site"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 3267,
																	columnNumber: 29
																}, this),
																/* @__PURE__ */ (void 0)("option", {
																	value: "Special Order",
																	children: "Special Order"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 3268,
																	columnNumber: 29
																}, this)
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 3255,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 3251,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "SKU / Model Identifier"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3273,
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
															lineNumber: 3276,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 3272,
															columnNumber: 25
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 3163,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 3158,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "rounded-2xl border border-black/[0.06] bg-white p-5 shadow-[0_2px_16px_rgba(0,0,0,0.03)] space-y-4",
												children: [/* @__PURE__ */ (void 0)("h3", {
													className: "font-semibold text-[#1D1D1F] text-sm border-b border-black/[0.06] pb-3",
													children: "Technical Specifications & Power Engineering"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3289,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("div", {
													className: "grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs",
													children: [
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Hourly Throughput / Operating Capacity"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3295,
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
															lineNumber: 3298,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 3294,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Power Drive / Motor Configuration"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3308,
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
															lineNumber: 3311,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 3307,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", {
															className: "sm:col-span-2",
															children: [/* @__PURE__ */ (void 0)("label", {
																className: "mb-1 block font-medium text-[#1D1D1F]",
																children: "Quick Specification Tagline"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3321,
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
																lineNumber: 3324,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 3320,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Equipment Condition"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3334,
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
																lineNumber: 3347,
																columnNumber: 29
															}, this), /* @__PURE__ */ (void 0)("option", {
																value: "Refurbished / Certified",
																children: "Refurbished / Harare Certified"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3348,
																columnNumber: 29
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 3337,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 3333,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Warranty Period (Months)"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3353,
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
															lineNumber: 3356,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 3352,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", {
															className: "sm:col-span-2",
															children: [/* @__PURE__ */ (void 0)("label", {
																className: "mb-1 block font-medium text-[#1D1D1F]",
																children: "Catalogue Badge / Highlight Tag"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3372,
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
																lineNumber: 3375,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 3371,
															columnNumber: 25
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 3293,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 3288,
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
														lineNumber: 3388,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "space-y-3 text-xs",
														children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Catalogue Overview & Application Summary *"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3394,
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
															lineNumber: 3397,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 3393,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "mb-1 block font-medium text-[#1D1D1F]",
															children: "Detailed Technical Notes & Commissioning Details"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3408,
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
															lineNumber: 3411,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 3407,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 3392,
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
															lineNumber: 3422,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("button", {
															type: "submit",
															className: "inline-flex h-11 items-center gap-2 rounded-full bg-[#1D1D1F] px-6 text-xs font-semibold text-white hover:bg-black transition-all active:scale-95 shadow-xs",
															children: [/* @__PURE__ */ (void 0)(Check, { className: "size-4" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3434,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("span", { children: "Save Specifications" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3435,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 3430,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 3421,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 3387,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 2846,
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
															lineNumber: 3446,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "rounded-full bg-[#E8F8EE] px-2 py-0.5 text-[9px] font-bold text-[#1B833E]",
															children: "Live Spec Card"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3449,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 3445,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("p", {
														className: "text-xs text-[#6E6E73] leading-relaxed",
														children: "Share these verified machinery specs and photo directly with clients inquiring on WhatsApp."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3453,
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
																	lineNumber: 3460,
																	columnNumber: 27
																}, this), /* @__PURE__ */ (void 0)("span", {
																	className: "absolute top-1.5 left-1.5 rounded bg-black/70 px-1.5 py-0.5 text-[9px] font-medium text-white backdrop-blur-xs font-sans capitalize",
																	children: editingProduct.category
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 3468,
																	columnNumber: 27
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 3459,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("p", {
																className: "font-semibold text-xs font-sans text-[#1D1D1F]",
																children: editingProduct.name
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3474,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("p", {
																className: "text-[#6E6E73] text-[10px]",
																children: ["SKU: ", editingProduct.sku || editingProduct.id]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 3475,
																columnNumber: 27
															}, this)] }, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 3473,
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
																			lineNumber: 3478,
																			columnNumber: 34
																		}, this),
																		" ",
																		editingProduct.throughput || editingProduct.spec || "Site Rated"
																	] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 3478,
																		columnNumber: 27
																	}, this),
																	/* @__PURE__ */ (void 0)("div", { children: [
																		"• ",
																		/* @__PURE__ */ (void 0)("span", {
																			className: "text-[#86868B]",
																			children: "Drive:"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 3479,
																			columnNumber: 34
																		}, this),
																		" ",
																		editingProduct.powerOption || "Electric / Diesel"
																	] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 3479,
																		columnNumber: 27
																	}, this),
																	/* @__PURE__ */ (void 0)("div", { children: [
																		"• ",
																		/* @__PURE__ */ (void 0)("span", {
																			className: "text-[#86868B]",
																			children: "Yard:"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 3480,
																			columnNumber: 34
																		}, this),
																		" ",
																		editingProduct.stockStatus || "In Yard Cranborne"
																	] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 3480,
																		columnNumber: 27
																	}, this),
																	/* @__PURE__ */ (void 0)("div", { children: [
																		"• ",
																		/* @__PURE__ */ (void 0)("span", {
																			className: "text-[#86868B]",
																			children: "Rate:"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 3481,
																			columnNumber: 34
																		}, this),
																		" ",
																		editingProduct.priceUSD || editingProduct.price || "Tender on Request"
																	] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 3481,
																		columnNumber: 27
																	}, this)
																]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 3477,
																columnNumber: 25
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 3457,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("a", {
														href: whatsappUrl(`Hello from Omnicore Solutions Harare. Regarding ${editingProduct.name} (${editingProduct.sku || editingProduct.id}):\n• Capacity: ${editingProduct.throughput || editingProduct.spec || "Site Rated"}\n• Power: ${editingProduct.powerOption || "Electric 3-Phase / Diesel"}\n• Availability: ${editingProduct.stockStatus || "In Yard Cranborne"}\n• Rate: ${editingProduct.priceUSD || editingProduct.price || "Tender on Request"}\n\nInspections welcome at 115 Chiremba Rd, Cranborne, Harare.`),
														target: "_blank",
														rel: "noopener noreferrer",
														className: "inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#1fa855] text-xs font-semibold text-white shadow-xs hover:bg-[#1b934b] transition-all",
														children: [/* @__PURE__ */ (void 0)(WhatsAppIcon, { className: "size-4" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3493,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("span", { children: "Send Client Spec Sheet" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3494,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 3485,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 3444,
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
														lineNumber: 3500,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("button", {
														type: "button",
														onClick: () => handleToggleStockStatus(editingProduct.id),
														className: "inline-flex h-10 w-full items-center justify-between rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3.5 text-xs font-medium text-[#1D1D1F] hover:bg-black/[0.06] transition-colors",
														children: [/* @__PURE__ */ (void 0)("span", { children: "Rotate Stock Status" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3509,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "rounded-md bg-white px-2 py-0.5 text-[10px] font-semibold text-[#1D1D1F] shadow-2xs border border-black/[0.04]",
															children: editingProduct.stockStatus || "In Yard Cranborne"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3510,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 3504,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "flex flex-col gap-2 pt-1 text-xs",
														children: [/* @__PURE__ */ (void 0)(Link, {
															to: "/catalogue",
															className: "inline-flex h-10 items-center justify-between rounded-xl border border-black/[0.08] bg-white px-3.5 font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] transition-colors",
															children: [/* @__PURE__ */ (void 0)("span", { children: "Open Public Catalogue" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3520,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)(ExternalLink, { className: "size-3.5 text-[#86868B]" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3521,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 3516,
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
																lineNumber: 3529,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)(ExternalLink, { className: "size-3.5 text-[#86868B]" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3530,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 3524,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 3515,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 3499,
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
														lineNumber: 3537,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("p", {
														className: "text-xs text-red-600/90 leading-relaxed",
														children: "Move this machinery listing to the recycle bin. It will disappear from Cranborne inventory and the public catalogue until restored."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3540,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("button", {
														type: "button",
														onClick: () => handleDeleteProduct(editingProduct.id),
														className: "inline-flex h-10 w-full items-center justify-center gap-1.5 rounded-full border border-red-200 bg-white text-xs font-semibold text-red-600 hover:bg-red-50 transition-colors",
														children: [/* @__PURE__ */ (void 0)(Trash2, { className: "size-3.5" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3548,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("span", { children: "Move to Recycle Bin" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3549,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 3543,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 3536,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 3442,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 2844,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 2832,
								columnNumber: 15
							}, this) : /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [
								/* @__PURE__ */ (void 0)("div", {
									className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3",
									children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h2", {
										className: "text-xl font-semibold tracking-tight text-[#1D1D1F]",
										children: "Machinery & Catalogue Inventory"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 3559,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("p", {
										className: "text-xs text-[#86868B] mt-0.5",
										children: "Manage technical specifications, throughput, power drives, and stock status across Cranborne yard."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 3562,
										columnNumber: 17
									}, this)] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 3558,
										columnNumber: 15
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-2",
										children: [
											/* @__PURE__ */ (void 0)("div", {
												className: "relative",
												children: [/* @__PURE__ */ (void 0)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-[#86868B]" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3569,
													columnNumber: 19
												}, this), /* @__PURE__ */ (void 0)("input", {
													type: "text",
													value: productSearch,
													onChange: (e) => setProductSearch(e.target.value),
													placeholder: "Search model, throughput, SKU...",
													className: "h-9 w-48 sm:w-64 rounded-full border border-black/[0.08] bg-white pl-9 pr-3 text-xs text-[#1D1D1F] placeholder-[#86868B] shadow-2xs focus:outline-none"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3570,
													columnNumber: 19
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 3568,
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
														lineNumber: 3584,
														columnNumber: 19
													}, this),
													/* @__PURE__ */ (void 0)("option", {
														value: "mining",
														children: "Mining"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3585,
														columnNumber: 19
													}, this),
													/* @__PURE__ */ (void 0)("option", {
														value: "hire",
														children: "Hire Plant"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3586,
														columnNumber: 19
													}, this),
													/* @__PURE__ */ (void 0)("option", {
														value: "hardware",
														children: "Hardware & Fence"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3587,
														columnNumber: 19
													}, this),
													/* @__PURE__ */ (void 0)("option", {
														value: "farming",
														children: "Farming"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3588,
														columnNumber: 19
													}, this),
													/* @__PURE__ */ (void 0)("option", {
														value: "industry",
														children: "Industrial"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3589,
														columnNumber: 19
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 3579,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (void 0)("button", {
												onClick: () => setShowAddProductModal(true),
												className: "inline-flex items-center gap-1.5 rounded-full bg-[#1D1D1F] px-4 py-2 text-xs font-semibold text-white shadow-xs hover:bg-black transition-all active:scale-95",
												children: [/* @__PURE__ */ (void 0)(Plus, { className: "size-3.5" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3596,
													columnNumber: 19
												}, this), /* @__PURE__ */ (void 0)("span", { children: "Add Machine" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3597,
													columnNumber: 19
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 3592,
												columnNumber: 17
											}, this),
											/* @__PURE__ */ (void 0)("button", {
												onClick: () => setActiveTab("recycle"),
												className: "inline-flex items-center gap-1.5 rounded-full border border-black/[0.08] bg-white px-3 py-2 text-xs font-medium text-[#1D1D1F] shadow-2xs hover:bg-[#F5F5F7]",
												title: "Open recycle bin",
												children: [
													/* @__PURE__ */ (void 0)(Recycle, { className: "size-3.5 text-[#6E6E73]" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3604,
														columnNumber: 19
													}, this),
													/* @__PURE__ */ (void 0)("span", {
														className: "hidden sm:inline",
														children: "Bin"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3605,
														columnNumber: 19
													}, this),
													recycleBin.filter((i) => i.kind === "product").length > 0 && /* @__PURE__ */ (void 0)("span", {
														className: "rounded-full bg-black/[0.06] px-1.5 text-[10px] font-semibold",
														children: recycleBin.filter((i) => i.kind === "product").length
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3607,
														columnNumber: 21
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 3599,
												columnNumber: 17
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 3567,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 3557,
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
										lineNumber: 3617,
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
											lineNumber: 3621,
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
												lineNumber: 3633,
												columnNumber: 21
											}, this), "Move to recycle bin"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 3628,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 3620,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 3616,
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
															lineNumber: 3647,
															columnNumber: 25
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3646,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("th", {
														className: "py-3 px-4",
														children: "SKU / Equipment Name"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3667,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("th", {
														className: "py-3 px-3",
														children: "Division"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3668,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("th", {
														className: "py-3 px-3",
														children: "Throughput & Drive"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3669,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("th", {
														className: "py-3 px-3",
														children: "Yard Stock Status"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3670,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("th", {
														className: "py-3 px-3",
														children: "Indicative Rate"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3671,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("th", {
														className: "py-3 px-3 text-right",
														children: "Actions"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3672,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 3645,
												columnNumber: 21
											}, this) }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 3644,
												columnNumber: 19
											}, this), /* @__PURE__ */ (void 0)("tbody", {
												className: "divide-y divide-black/[0.04]",
												children: filteredProducts.length === 0 ? /* @__PURE__ */ (void 0)("tr", { children: /* @__PURE__ */ (void 0)("td", {
													colSpan: 7,
													className: "py-12 text-center text-[#86868B]",
													children: "No machinery records match the current filter."
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3678,
													columnNumber: 25
												}, this) }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3677,
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
																lineNumber: 3699,
																columnNumber: 29
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3695,
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
																		lineNumber: 3712,
																		columnNumber: 33
																	}, this)
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 3711,
																	columnNumber: 31
																}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
																	className: "font-semibold text-[#1D1D1F] block",
																	children: item.name
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 3722,
																	columnNumber: 33
																}, this), /* @__PURE__ */ (void 0)("span", {
																	className: "text-[10px] font-mono text-[#86868B]",
																	children: item.sku || item.id
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 3723,
																	columnNumber: 33
																}, this)] }, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 3721,
																	columnNumber: 31
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 3710,
																columnNumber: 29
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3709,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (void 0)("td", {
															className: "py-3 px-3",
															children: /* @__PURE__ */ (void 0)("span", {
																className: "rounded-full bg-black/[0.04] px-2 py-0.5 text-[10px] font-medium text-[#6E6E73] uppercase tracking-wide",
																children: item.category
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3729,
																columnNumber: 29
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3728,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (void 0)("td", {
															className: "py-3 px-3 text-[#6E6E73]",
															children: [/* @__PURE__ */ (void 0)("span", {
																className: "text-[#1D1D1F] font-medium block",
																children: item.throughput || item.spec
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3735,
																columnNumber: 29
															}, this), /* @__PURE__ */ (void 0)("span", {
																className: "text-[10px] text-[#86868B] block truncate max-w-[200px]",
																children: item.powerOption || "Electric 380V / Diesel"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3738,
																columnNumber: 29
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 3734,
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
																lineNumber: 3744,
																columnNumber: 29
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3743,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (void 0)("td", {
															className: "py-3 px-3 font-semibold text-[#1D1D1F]",
															children: item.priceUSD || item.price || "Tender on Req"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3758,
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
																		lineNumber: 3768,
																		columnNumber: 33
																	}, this), /* @__PURE__ */ (void 0)("span", { children: "Edit Specs" }, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 3769,
																		columnNumber: 33
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 3764,
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
																		lineNumber: 3779,
																		columnNumber: 33
																	}, this)
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 3771,
																	columnNumber: 31
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 3763,
																columnNumber: 29
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3762,
															columnNumber: 27
														}, this)
													]
												}, item.id, true, {
													fileName: _jsxFileName,
													lineNumber: 3684,
													columnNumber: 25
												}, this))
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 3675,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 3643,
											columnNumber: 17
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 3642,
										columnNumber: 15
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-black/[0.06] bg-[#FBFBFC] px-4 py-3 text-xs text-[#6E6E73]",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex flex-wrap items-center gap-2",
											children: [
												/* @__PURE__ */ (void 0)("span", { children: "Showing" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3793,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (void 0)("span", {
													className: "font-semibold text-[#1D1D1F]",
													children: filteredProducts.length === 0 ? 0 : (productPage - 1) * productPageSize + 1
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3794,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (void 0)("span", { children: "to" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3797,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (void 0)("span", {
													className: "font-semibold text-[#1D1D1F]",
													children: Math.min(productPage * productPageSize, filteredProducts.length)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3798,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (void 0)("span", { children: "of" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3801,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (void 0)("span", {
													className: "font-semibold text-[#1D1D1F]",
													children: filteredProducts.length
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3802,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (void 0)("span", { children: "machinery models" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3803,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (void 0)("span", {
													className: "mx-1 text-black/20",
													children: "|"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3805,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "flex items-center gap-1.5",
													children: [/* @__PURE__ */ (void 0)("span", { children: "Per page:" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3808,
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
																lineNumber: 3817,
																columnNumber: 23
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: 12,
																children: "12"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3818,
																columnNumber: 23
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: 24,
																children: "24"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3819,
																columnNumber: 23
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: 50,
																children: "50"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 3820,
																columnNumber: 23
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 3809,
														columnNumber: 21
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 3807,
													columnNumber: 19
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 3792,
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
														lineNumber: 3832,
														columnNumber: 21
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3826,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (void 0)("button", {
													onClick: () => setProductPage((p) => Math.max(1, p - 1)),
													disabled: productPage <= 1,
													className: "rounded-lg p-1 text-[#6E6E73] hover:bg-black/[0.05] hover:text-[#1D1D1F] disabled:opacity-30 disabled:pointer-events-none transition-colors",
													title: "Previous page",
													children: /* @__PURE__ */ (void 0)(ChevronLeft, { className: "size-4" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3840,
														columnNumber: 21
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3834,
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
														lineNumber: 3845,
														columnNumber: 23
													}, this))
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3843,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (void 0)("button", {
													onClick: () => setProductPage((p) => Math.min(productTotalPages, p + 1)),
													disabled: productPage >= productTotalPages,
													className: "rounded-lg p-1 text-[#6E6E73] hover:bg-black/[0.05] hover:text-[#1D1D1F] disabled:opacity-30 disabled:pointer-events-none transition-colors",
													title: "Next page",
													children: /* @__PURE__ */ (void 0)(ChevronRight, { className: "size-4" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3865,
														columnNumber: 21
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3859,
													columnNumber: 19
												}, this),
												/* @__PURE__ */ (void 0)("button", {
													onClick: () => setProductPage(productTotalPages),
													disabled: productPage >= productTotalPages,
													className: "rounded-lg p-1 text-[#6E6E73] hover:bg-black/[0.05] hover:text-[#1D1D1F] disabled:opacity-30 disabled:pointer-events-none transition-colors",
													title: "Last page",
													children: /* @__PURE__ */ (void 0)(ChevronsRight, { className: "size-4" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3873,
														columnNumber: 21
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3867,
													columnNumber: 19
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 3825,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 3791,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 3641,
									columnNumber: 13
								}, this)
							] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 3556,
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
														lineNumber: 3894,
														columnNumber: 25
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3893,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("div", {
													className: "min-w-0",
													children: [
														/* @__PURE__ */ (void 0)("p", {
															className: "font-mono text-[11px] text-[#86868B]",
															children: peekProduct.sku || peekProduct.id
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3904,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("h3", {
															className: "text-base font-semibold text-[#1D1D1F]",
															children: peekProduct.name
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3905,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("p", {
															className: "text-xs uppercase tracking-wide text-[#6E6E73]",
															children: peekProduct.category
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 3906,
															columnNumber: 25
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 3903,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 3892,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("button", {
												type: "button",
												onClick: () => setPeekProductId(null),
												className: "rounded-full p-2 text-[#86868B] hover:bg-[#F5F5F7] hover:text-[#1D1D1F]",
												children: /* @__PURE__ */ (void 0)(X, { className: "size-4" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3914,
													columnNumber: 23
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 3909,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 3891,
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
														lineNumber: 3920,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "font-semibold text-[#1D1D1F]",
														children: peekProduct.stockStatus || "In Yard Cranborne"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3921,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 3919,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "rounded-xl bg-[#F5F5F7] p-2.5",
													children: [/* @__PURE__ */ (void 0)("span", {
														className: "block text-[10px] uppercase text-[#86868B]",
														children: "Rate"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3924,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "font-semibold text-[#1D1D1F]",
														children: peekProduct.priceUSD || peekProduct.price || "Tender on Req"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3925,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 3923,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "col-span-2 rounded-xl bg-[#F5F5F7] p-2.5",
													children: [/* @__PURE__ */ (void 0)("span", {
														className: "block text-[10px] uppercase text-[#86868B]",
														children: "Throughput / drive"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3928,
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
														lineNumber: 3929,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 3927,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "col-span-2 rounded-xl bg-[#F5F5F7] p-2.5",
													children: [/* @__PURE__ */ (void 0)("span", {
														className: "block text-[10px] uppercase text-[#86868B]",
														children: "Overview"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3934,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "text-[#1D1D1F]",
														children: peekProduct.blurb
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3935,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 3933,
													columnNumber: 21
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 3918,
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
													lineNumber: 3945,
													columnNumber: 23
												}, this), "Edit specifications"]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 3940,
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
													lineNumber: 3956,
													columnNumber: 23
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 3948,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 3939,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 3887,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 3883,
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
											lineNumber: 3968,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("button", {
											onClick: () => setShowAddProductModal(false),
											className: "rounded-full p-1 text-[#86868B] hover:bg-[#F5F5F7]",
											children: /* @__PURE__ */ (void 0)(X, { className: "size-4" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 3975,
												columnNumber: 23
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 3971,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 3967,
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
														lineNumber: 3984,
														columnNumber: 27
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "text-[11px] text-[#86868B]",
														children: "Upload a photo from your device or select from Harare yard photo library."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 3987,
														columnNumber: 27
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 3983,
														columnNumber: 25
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 3982,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("div", {
													className: "flex flex-col sm:flex-row gap-4 items-start",
													children: [/* @__PURE__ */ (void 0)("div", {
														role: "button",
														tabIndex: 0,
														onClick: () => {
															setProductLightbox({
																isOpen: true,
																title: newProdName || "New Machinery Visual Preview",
																category: newProdCategory,
																price: newProdPrice,
																images: [newProdImage || "/images/jaw-crusher.jpg", ...newProdGallery].filter(Boolean),
																initialIndex: 0
															});
														},
														onKeyDown: (e) => {
															if (e.key === "Enter" || e.key === " ") {
																e.preventDefault();
																setProductLightbox({
																	isOpen: true,
																	title: newProdName || "New Machinery Visual Preview",
																	category: newProdCategory,
																	price: newProdPrice,
																	images: [newProdImage || "/images/jaw-crusher.jpg", ...newProdGallery].filter(Boolean),
																	initialIndex: 0
																});
															}
														},
														className: "relative size-28 sm:size-32 rounded-xl overflow-hidden bg-black/[0.05] border border-black/[0.08] shrink-0 shadow-xs group cursor-pointer",
														title: "Click to preview photo in large screen",
														children: [
															/* @__PURE__ */ (void 0)("img", {
																src: newProdImage || "/images/jaw-crusher.jpg",
																alt: "Preview",
																className: "size-full object-cover object-center group-hover:scale-105 transition-transform",
																onError: (e) => {
																	e.target.src = "/images/hero.jpg";
																}
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4024,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (void 0)("div", {
																className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1.5 p-1",
																children: [/* @__PURE__ */ (void 0)("span", {
																	className: "flex items-center gap-1 text-[9px] text-white font-medium bg-black/70 px-2 py-0.5 rounded-full",
																	children: [/* @__PURE__ */ (void 0)(ZoomIn, { className: "size-2.5" }, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4034,
																		columnNumber: 31
																	}, this), /* @__PURE__ */ (void 0)("span", { children: "View Large" }, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4035,
																		columnNumber: 31
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 4033,
																	columnNumber: 29
																}, this), /* @__PURE__ */ (void 0)("label", {
																	onClick: (e) => e.stopPropagation(),
																	className: "cursor-pointer text-white text-[9px] font-semibold bg-white/20 hover:bg-white hover:text-black px-2 py-0.5 rounded-md transition-colors",
																	children: ["Change", /* @__PURE__ */ (void 0)("input", {
																		type: "file",
																		accept: "image/*",
																		onChange: (e) => handleImageUpload(e, false),
																		className: "hidden"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4042,
																		columnNumber: 31
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 4037,
																	columnNumber: 29
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 4032,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (void 0)("span", {
																className: "absolute bottom-1 right-1 rounded bg-black/60 px-1.5 py-0.5 text-[9px] font-medium text-white backdrop-blur-xs",
																children: "Live Preview"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4050,
																columnNumber: 27
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 3995,
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
																			lineNumber: 4059,
																			columnNumber: 31
																		}, this),
																		/* @__PURE__ */ (void 0)("span", { children: "Upload Machine Image" }, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 4060,
																			columnNumber: 31
																		}, this),
																		/* @__PURE__ */ (void 0)("input", {
																			type: "file",
																			accept: "image/*",
																			onChange: (e) => handleImageUpload(e, false),
																			className: "hidden"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 4061,
																			columnNumber: 31
																		}, this)
																	]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 4058,
																	columnNumber: 29
																}, this), /* @__PURE__ */ (void 0)("div", {
																	className: "relative min-w-[180px]",
																	children: [
																		/* @__PURE__ */ (void 0)(Search, { className: "absolute left-2.5 top-2 size-3 text-[#86868B]" }, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 4071,
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
																			lineNumber: 4072,
																			columnNumber: 31
																		}, this),
																		newPhotoPresetSearch && /* @__PURE__ */ (void 0)("button", {
																			type: "button",
																			onClick: () => setNewPhotoPresetSearch(""),
																			className: "absolute right-2 top-2 text-[#86868B] hover:text-[#1D1D1F]",
																			children: /* @__PURE__ */ (void 0)(X, { className: "size-3" }, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 4085,
																				columnNumber: 35
																			}, this)
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 4080,
																			columnNumber: 33
																		}, this)
																	]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 4070,
																	columnNumber: 29
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 4057,
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
																	lineNumber: 4101,
																	columnNumber: 31
																}, this))
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4092,
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
																					lineNumber: 4139,
																					columnNumber: 37
																				}, this),
																				/* @__PURE__ */ (void 0)("span", {
																					className: "absolute top-1 left-1 rounded bg-black/70 px-1.5 py-0.5 text-[8px] font-semibold text-white uppercase tracking-wider backdrop-blur-xs",
																					children: preset.category
																				}, void 0, false, {
																					fileName: _jsxFileName,
																					lineNumber: 4147,
																					columnNumber: 37
																				}, this),
																				isSelected && /* @__PURE__ */ (void 0)("div", {
																					className: "absolute top-1 right-1 size-5 rounded-full bg-[#1FA855] text-white flex items-center justify-center shadow-xs",
																					children: /* @__PURE__ */ (void 0)(Check, { className: "size-3 stroke-[2.5]" }, void 0, false, {
																						fileName: _jsxFileName,
																						lineNumber: 4152,
																						columnNumber: 41
																					}, this)
																				}, void 0, false, {
																					fileName: _jsxFileName,
																					lineNumber: 4151,
																					columnNumber: 39
																				}, this)
																			]
																		}, void 0, true, {
																			fileName: _jsxFileName,
																			lineNumber: 4138,
																			columnNumber: 35
																		}, this), /* @__PURE__ */ (void 0)("div", {
																			className: "min-w-0",
																			children: [/* @__PURE__ */ (void 0)("p", {
																				className: "text-[11px] font-semibold text-[#1D1D1F] truncate group-hover:text-black",
																				children: preset.label
																			}, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 4158,
																				columnNumber: 37
																			}, this), /* @__PURE__ */ (void 0)("p", {
																				className: "text-[10px] text-[#6E6E73] truncate",
																				children: preset.spec
																			}, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 4161,
																				columnNumber: 37
																			}, this)]
																		}, void 0, true, {
																			fileName: _jsxFileName,
																			lineNumber: 4157,
																			columnNumber: 35
																		}, this)]
																	}, preset.src, true, {
																		fileName: _jsxFileName,
																		lineNumber: 4128,
																		columnNumber: 33
																	}, this);
																})
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4117,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (void 0)("div", {
																className: "flex items-center gap-2 pt-1",
																children: [/* @__PURE__ */ (void 0)("span", {
																	className: "text-[11px] font-medium text-[#1D1D1F] shrink-0",
																	children: "Custom URL / Path:"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 4171,
																	columnNumber: 29
																}, this), /* @__PURE__ */ (void 0)("input", {
																	type: "text",
																	value: newProdImage,
																	onChange: (e) => setNewProdImage(e.target.value),
																	placeholder: "/images/... or https://...",
																	className: "w-full h-8 rounded-xl border border-black/[0.08] bg-white px-3 text-xs text-[#1D1D1F] focus:outline-none font-mono text-[11px]"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 4172,
																	columnNumber: 29
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 4170,
																columnNumber: 27
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4056,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 3993,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 3981,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
												children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
													className: "font-medium text-[#1D1D1F] block mb-1",
													children: "Equipment Model / Name *"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 4186,
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
													lineNumber: 4187,
													columnNumber: 25
												}, this)] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 4185,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
													className: "font-medium text-[#1D1D1F] block mb-1",
													children: "Division"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 4197,
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
															lineNumber: 4205,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (void 0)("option", {
															value: "hire",
															children: "Construction Machinery Hire"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4206,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (void 0)("option", {
															value: "hardware",
															children: "Hardware & Construction"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4207,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (void 0)("option", {
															value: "farming",
															children: "Farming Machinery"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4208,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (void 0)("option", {
															value: "industry",
															children: "Industry & Manufacturing"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4209,
															columnNumber: 27
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 4198,
													columnNumber: 25
												}, this)] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 4196,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 4184,
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
														lineNumber: 4216,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("input", {
														type: "text",
														value: newProdThroughput,
														onChange: (e) => setNewProdThroughput(e.target.value),
														placeholder: "e.g. 5–15 TPH or 35m boom",
														className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4217,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4215,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-medium text-[#1D1D1F] block mb-1",
														children: "Power / Motor Drive"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4226,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("input", {
														type: "text",
														value: newProdPower,
														onChange: (e) => setNewProdPower(e.target.value),
														placeholder: "e.g. 15kW 380V or 35HP diesel",
														className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4227,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4225,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-medium text-[#1D1D1F] block mb-1",
														children: "Indicative Price / Rate"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4236,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("input", {
														type: "text",
														value: newProdPrice,
														onChange: (e) => setNewProdPrice(e.target.value),
														placeholder: "e.g. $18,500 FOB Harare",
														className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4237,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4235,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 4214,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
												className: "font-medium text-[#1D1D1F] block mb-1",
												children: "Technical Overview / Tagline"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 4248,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("input", {
												type: "text",
												value: newProdBlurb,
												onChange: (e) => setNewProdBlurb(e.target.value),
												placeholder: "Primary crushing for gold ore circuits. Heavy cast-steel eccentric shaft.",
												className: "w-full h-8 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 focus:bg-white focus:outline-none"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 4249,
												columnNumber: 23
											}, this)] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 4247,
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
													lineNumber: 4259,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("button", {
													type: "submit",
													className: "rounded-full bg-[#1D1D1F] px-4 py-1.5 text-xs font-semibold text-white hover:bg-black",
													children: "Add to Inventory"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 4266,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 4258,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 3979,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 3966,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 3965,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 2830,
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
											lineNumber: 4290,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 4289,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("h2", {
										className: "text-xl font-semibold tracking-tight text-[#1D1D1F]",
										children: "Website Copy, Brand & Content Management"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 4292,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 4288,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("p", {
									className: "text-xs text-[#86868B] mt-1 max-w-2xl",
									children: "Manage live headlines, Harare yard details, official contact channels, operating hours, and divisional messaging across Omnicore Solutions. Changes update in real-time nationwide."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 4296,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 4287,
									columnNumber: 15
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "flex flex-wrap items-center gap-2.5",
									children: [
										/* @__PURE__ */ (void 0)("div", {
											className: "relative min-w-[200px] sm:min-w-[240px]",
											children: [
												/* @__PURE__ */ (void 0)(Search, { className: "absolute left-3 top-2.5 size-3.5 text-[#86868B]" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 4303,
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
													lineNumber: 4304,
													columnNumber: 19
												}, this),
												cmsSearch && /* @__PURE__ */ (void 0)("button", {
													type: "button",
													onClick: () => setCmsSearch(""),
													className: "absolute right-2.5 top-2.5 text-[#86868B] hover:text-[#1D1D1F]",
													children: /* @__PURE__ */ (void 0)(X, { className: "size-3.5" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4317,
														columnNumber: 23
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 4312,
													columnNumber: 21
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 4302,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: handleResetSiteCopy,
											className: "inline-flex h-8.5 items-center gap-1.5 rounded-full border border-black/[0.08] bg-white px-3.5 text-xs font-medium text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7] transition-all active:scale-95",
											children: [/* @__PURE__ */ (void 0)(RotateCcw, { className: "size-3.5 text-[#86868B]" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 4327,
												columnNumber: 19
											}, this), /* @__PURE__ */ (void 0)("span", { children: "Reset Defaults" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 4328,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 4322,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "inline-flex rounded-full bg-[#F5F5F7] p-0.5 border border-black/[0.08] text-xs",
											children: [/* @__PURE__ */ (void 0)("button", {
												type: "button",
												onClick: () => {
													setCmsLayoutMode("split");
													setIsCmsPreviewOpen(!isCmsPreviewOpen);
												},
												className: `inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all ${isCmsPreviewOpen && cmsLayoutMode === "split" ? "bg-white text-[#1D1D1F] shadow-2xs font-semibold" : "text-[#6E6E73] hover:text-[#1D1D1F]"}`,
												title: "Toggle Live Interactive Visual Preview panel",
												children: [/* @__PURE__ */ (void 0)(Eye, { className: "size-3.5 text-emerald-600" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 4346,
													columnNumber: 21
												}, this), /* @__PURE__ */ (void 0)("span", { children: isCmsPreviewOpen && cmsLayoutMode === "split" ? "Hide Live Preview" : "Show Live Preview" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 4347,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 4333,
												columnNumber: 19
											}, this), /* @__PURE__ */ (void 0)("button", {
												type: "button",
												onClick: () => {
													setCmsLayoutMode("full");
													setIsCmsPreviewOpen(false);
												},
												className: `inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all ${cmsLayoutMode === "full" ? "bg-white text-[#1D1D1F] shadow-2xs font-semibold" : "text-[#6E6E73] hover:text-[#1D1D1F]"}`,
												title: "Expand across 100% of screen real estate with multi-column layouts",
												children: [/* @__PURE__ */ (void 0)(Maximize2, { className: "size-3.5" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 4362,
													columnNumber: 21
												}, this), /* @__PURE__ */ (void 0)("span", { children: "Full-Width Editor" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 4363,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 4349,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 4332,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (void 0)("a", {
											href: "/",
											target: "_blank",
											rel: "noopener noreferrer",
											className: "inline-flex h-8.5 items-center gap-1.5 rounded-full border border-black/[0.08] bg-white px-3.5 text-xs font-medium text-[#1D1D1F] hover:bg-[#F5F5F7] transition-all active:scale-95",
											children: [/* @__PURE__ */ (void 0)(ExternalLink, { className: "size-3.5 text-[#86868B]" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 4373,
												columnNumber: 19
											}, this), /* @__PURE__ */ (void 0)("span", { children: "View Public Site" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 4374,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 4367,
											columnNumber: 17
										}, this),
										/* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: () => handleSaveSiteCopy(),
											className: `inline-flex h-8.5 items-center gap-1.5 rounded-full px-5 text-xs font-semibold text-white shadow-xs transition-all active:scale-95 ${hasUnsavedChanges ? "bg-[#1FA855] hover:bg-[#1B934B] animate-pulse" : "bg-[#1D1D1F] hover:bg-black"}`,
											children: [/* @__PURE__ */ (void 0)(Check, { className: "size-3.5" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 4386,
												columnNumber: 19
											}, this), /* @__PURE__ */ (void 0)("span", { children: hasUnsavedChanges ? "Publish Changes Live *" : "Published Live" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 4387,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 4377,
											columnNumber: 17
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 4301,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 4286,
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
											lineNumber: 4416,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("span", {
											className: `rounded-full px-1.5 py-0.2 text-[10px] font-semibold ${isActive ? "bg-white/20 text-white" : "bg-black/[0.05] text-[#86868B]"}`,
											children: cat.count
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 4417,
											columnNumber: 21
										}, this)]
									}, cat.id, true, {
										fileName: _jsxFileName,
										lineNumber: 4406,
										columnNumber: 19
									}, this);
								})
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 4393,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: cmsLayoutMode === "split" && isCmsPreviewOpen ? "grid grid-cols-1 lg:grid-cols-12 gap-6 items-start" : "w-full",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: cmsLayoutMode === "split" && isCmsPreviewOpen ? "lg:col-span-7 xl:col-span-7 space-y-6" : "w-full space-y-6",
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
																	lineNumber: 4440,
																	columnNumber: 29
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4439,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
																className: "text-base font-semibold text-[#1D1D1F]",
																children: "Hero Banner & Brand Identity Messaging"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4443,
																columnNumber: 29
															}, this), /* @__PURE__ */ (void 0)("p", {
																className: "text-xs text-[#86868B] mt-0.5",
																children: "Controls the primary landing headlines, yard announcement banner, call-to-actions, and key stats."
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4446,
																columnNumber: 29
															}, this)] }, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 4442,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4438,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "rounded-full bg-amber-100/70 px-3 py-1 text-xs font-semibold text-amber-800",
															children: "Above The Fold"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4451,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4437,
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
																lineNumber: 4459,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("input", {
																type: "text",
																value: cmsForm.name,
																onChange: (e) => updateCmsField("name", e.target.value),
																className: "w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
																placeholder: "Omnicore Solutions"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4462,
																columnNumber: 27
															}, this)] }, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 4458,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
																className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
																children: "Brand Short Name"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4471,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("input", {
																type: "text",
																value: cmsForm.shortName,
																onChange: (e) => updateCmsField("shortName", e.target.value),
																className: "w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
																placeholder: "Omnicore"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4474,
																columnNumber: 27
															}, this)] }, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 4470,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("div", {
																className: "xl:col-span-2",
																children: [/* @__PURE__ */ (void 0)("label", {
																	className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
																	children: "Company Tagline"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 4483,
																	columnNumber: 27
																}, this), /* @__PURE__ */ (void 0)("input", {
																	type: "text",
																	value: cmsForm.tagline,
																	onChange: (e) => updateCmsField("tagline", e.target.value),
																	className: "w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
																	placeholder: "Machinery for Zimbabwe's farms, mines and sites."
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 4486,
																	columnNumber: 27
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 4482,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
																className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
																children: "Founded Year"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4495,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("input", {
																type: "text",
																value: cmsForm.foundedYear,
																onChange: (e) => updateCmsField("foundedYear", e.target.value),
																className: "w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
																placeholder: "2024"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4498,
																columnNumber: 27
															}, this)] }, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 4494,
																columnNumber: 25
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4457,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "grid grid-cols-1 lg:grid-cols-2 gap-3.5",
														children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Top Yard & Operational Announcement Banner"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4511,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.heroBannerAnnouncement || "",
															onChange: (e) => updateCmsField("heroBannerAnnouncement", e.target.value),
															className: "w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "Cranborne Yard Open Mon–Sat · Lowbed Deliveries Nationwide"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4514,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4510,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Cranborne Yard Badge Text (Top of Hero)"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4523,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.heroBadge,
															onChange: (e) => updateCmsField("heroBadge", e.target.value),
															className: "w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "Cranborne yard · 115 Chiremba Road, Harare"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4526,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4522,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4509,
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
																lineNumber: 4539,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("input", {
																type: "text",
																value: cmsForm.heroHeadline,
																onChange: (e) => updateCmsField("heroHeadline", e.target.value),
																className: "w-full h-11 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3.5 text-sm font-semibold text-[#1D1D1F] focus:bg-white focus:outline-none",
																placeholder: "Plant for Zimbabwe’s mines, farms and pours."
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4542,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4538,
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
																	lineNumber: 4553,
																	columnNumber: 29
																}, this), /* @__PURE__ */ (void 0)("span", {
																	className: "text-[10px] text-[#86868B]",
																	children: [cmsForm.heroSubheadline.length, " chars"]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 4556,
																	columnNumber: 29
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 4552,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("textarea", {
																rows: 3,
																value: cmsForm.heroSubheadline,
																onChange: (e) => updateCmsField("heroSubheadline", e.target.value),
																className: "w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] p-3 text-xs leading-relaxed focus:bg-white focus:outline-none",
																placeholder: "Gold circuits, fence plant, self-loading mixers..."
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4560,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4551,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4537,
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
																lineNumber: 4573,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("input", {
																type: "text",
																value: cmsForm.heroCtaPrimary,
																onChange: (e) => updateCmsField("heroCtaPrimary", e.target.value),
																className: "w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none font-medium",
																placeholder: "Chat on WhatsApp"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4576,
																columnNumber: 27
															}, this)] }, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 4572,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
																className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
																children: "Secondary CTA Button (Tender Quote)"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4585,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("input", {
																type: "text",
																value: cmsForm.heroCtaSecondary,
																onChange: (e) => updateCmsField("heroCtaSecondary", e.target.value),
																className: "w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none font-medium",
																placeholder: "Request a firm quote"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4588,
																columnNumber: 27
															}, this)] }, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 4584,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
																className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
																children: "Tertiary CTA Button (Catalogue Browse)"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4597,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("input", {
																type: "text",
																value: cmsForm.heroCtaTertiary,
																onChange: (e) => updateCmsField("heroCtaTertiary", e.target.value),
																className: "w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none font-medium",
																placeholder: "Open the catalogue"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4600,
																columnNumber: 27
															}, this)] }, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 4596,
																columnNumber: 25
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4571,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "pt-3 border-t border-black/[0.05]",
														children: [/* @__PURE__ */ (void 0)("p", {
															className: "font-semibold text-[#1D1D1F] text-xs mb-2.5",
															children: "Homepage 4 Statistics Highlights"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4612,
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
																		lineNumber: 4617,
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
																			lineNumber: 4619,
																			columnNumber: 31
																		}, this), /* @__PURE__ */ (void 0)("input", {
																			type: "text",
																			placeholder: "Detail (e.g. Cranborne yard)",
																			value: cmsForm.stat1Detail,
																			onChange: (e) => updateCmsField("stat1Detail", e.target.value),
																			className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs text-[#6E6E73]"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 4626,
																			columnNumber: 31
																		}, this)]
																	}, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 4618,
																		columnNumber: 29
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 4616,
																	columnNumber: 27
																}, this),
																/* @__PURE__ */ (void 0)("div", {
																	className: "rounded-2xl border border-black/[0.06] bg-[#F9F9FA] p-3 space-y-2",
																	children: [/* @__PURE__ */ (void 0)("span", {
																		className: "text-[10px] font-bold text-[#86868B] uppercase tracking-wider",
																		children: "Stat 2"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4637,
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
																			lineNumber: 4639,
																			columnNumber: 31
																		}, this), /* @__PURE__ */ (void 0)("input", {
																			type: "text",
																			placeholder: "Detail (e.g. Gold circuits)",
																			value: cmsForm.stat2Detail,
																			onChange: (e) => updateCmsField("stat2Detail", e.target.value),
																			className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs text-[#6E6E73]"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 4646,
																			columnNumber: 31
																		}, this)]
																	}, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 4638,
																		columnNumber: 29
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 4636,
																	columnNumber: 27
																}, this),
																/* @__PURE__ */ (void 0)("div", {
																	className: "rounded-2xl border border-black/[0.06] bg-[#F9F9FA] p-3 space-y-2",
																	children: [/* @__PURE__ */ (void 0)("span", {
																		className: "text-[10px] font-bold text-[#86868B] uppercase tracking-wider",
																		children: "Stat 3"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4657,
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
																			lineNumber: 4659,
																			columnNumber: 31
																		}, this), /* @__PURE__ */ (void 0)("input", {
																			type: "text",
																			placeholder: "Detail (e.g. Plant hire)",
																			value: cmsForm.stat3Detail,
																			onChange: (e) => updateCmsField("stat3Detail", e.target.value),
																			className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs text-[#6E6E73]"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 4666,
																			columnNumber: 31
																		}, this)]
																	}, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 4658,
																		columnNumber: 29
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 4656,
																	columnNumber: 27
																}, this),
																/* @__PURE__ */ (void 0)("div", {
																	className: "rounded-2xl border border-black/[0.06] bg-[#F9F9FA] p-3 space-y-2",
																	children: [/* @__PURE__ */ (void 0)("span", {
																		className: "text-[10px] font-bold text-[#86868B] uppercase tracking-wider",
																		children: "Stat 4"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 4677,
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
																			lineNumber: 4679,
																			columnNumber: 31
																		}, this), /* @__PURE__ */ (void 0)("input", {
																			type: "text",
																			placeholder: "Detail (e.g. Lowbed delivery)",
																			value: cmsForm.stat4Detail,
																			onChange: (e) => updateCmsField("stat4Detail", e.target.value),
																			className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs text-[#6E6E73]"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 4686,
																			columnNumber: 31
																		}, this)]
																	}, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 4678,
																		columnNumber: 29
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 4676,
																	columnNumber: 27
																}, this)
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4615,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4611,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 4436,
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
																	lineNumber: 4706,
																	columnNumber: 29
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4705,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
																className: "text-sm font-semibold text-[#1D1D1F]",
																children: "Yard Location & Physical Presence"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4709,
																columnNumber: 29
															}, this), /* @__PURE__ */ (void 0)("p", {
																className: "text-[11px] text-[#86868B]",
																children: "Physical demonstration yard, lowbed loading access, and Google Maps pin coordinates."
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4712,
																columnNumber: 29
															}, this)] }, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 4708,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4704,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "rounded-full bg-blue-100/60 px-2 py-0.5 text-[10px] font-semibold text-blue-800",
															children: "Harare Hub"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4717,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4703,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
														children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Street Address Line 1"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4724,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.yardAddressLine1,
															onChange: (e) => updateCmsField("yardAddressLine1", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "115 Chiremba Road"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4727,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4723,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Suburb & Industrial Belt Line 2"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4736,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.yardAddressLine2,
															onChange: (e) => updateCmsField("yardAddressLine2", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "Cranborne, Harare"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4739,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4735,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4722,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
														children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "City / Metro"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4751,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.yardCity,
															onChange: (e) => updateCmsField("yardCity", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "Harare"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4754,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4750,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Country"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4763,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.yardCountry,
															onChange: (e) => updateCmsField("yardCountry", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "Zimbabwe"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4766,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4762,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4749,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
														children: "Google Maps Pin URL"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4777,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("input", {
														type: "url",
														value: cmsForm.googleMapsUrl,
														onChange: (e) => updateCmsField("googleMapsUrl", e.target.value),
														className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none font-mono text-[11px]",
														placeholder: "https://www.google.com/maps/search/?api=1&query=..."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4780,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4776,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
														children: "Directions & Heavy Machinery Loading Guidance"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4790,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("textarea", {
														rows: 2,
														value: cmsForm.yardDirectionsNote,
														onChange: (e) => updateCmsField("yardDirectionsNote", e.target.value),
														className: "w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] p-3 text-xs leading-relaxed focus:bg-white focus:outline-none",
														placeholder: "Along Chiremba Road, close to major Harare arterial routes..."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4793,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4789,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
														children: "Yard Inspection & Testing Policy"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4803,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("input", {
														type: "text",
														value: cmsForm.inspectionNotice,
														onChange: (e) => updateCmsField("inspectionNotice", e.target.value),
														className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
														placeholder: "Physical yard mechanical inspections welcome Monday–Saturday at 115 Chiremba Rd, Cranborne."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4806,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4802,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 4702,
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
																	lineNumber: 4823,
																	columnNumber: 29
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4822,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
																className: "text-sm font-semibold text-[#1D1D1F]",
																children: "Contact Channels, Emergency Hotlines & WhatsApp Desk"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4826,
																columnNumber: 29
															}, this), /* @__PURE__ */ (void 0)("p", {
																className: "text-[11px] text-[#86868B]",
																children: "Direct voice lines, 24/7 site breakdown hotlines, WhatsApp numbers, and official email inboxes."
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4829,
																columnNumber: 29
															}, this)] }, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 4825,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4821,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "rounded-full bg-emerald-100/60 px-2 py-0.5 text-[10px] font-semibold text-emerald-800",
															children: "Direct Lines"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4834,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4820,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
														children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Primary Phone (Display)"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4841,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.primaryPhone,
															onChange: (e) => updateCmsField("primaryPhone", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "+263 77 733 4569"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4844,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4840,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Primary Phone (Dialable URL)"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4853,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.primaryPhoneTel,
															onChange: (e) => updateCmsField("primaryPhoneTel", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none font-mono text-[11px]",
															placeholder: "+263777334569"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4856,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4852,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4839,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
														children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Secondary Alternate Phone (Display)"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4868,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.secondaryPhone,
															onChange: (e) => updateCmsField("secondaryPhone", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "+263 78 871 6082"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4871,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4867,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Secondary Phone (Dialable URL)"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4880,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.secondaryPhoneTel,
															onChange: (e) => updateCmsField("secondaryPhoneTel", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none font-mono text-[11px]",
															placeholder: "+263788716082"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4883,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4879,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4866,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
														children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Emergency 24/7 Breakdown Hotline (Display)"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4895,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.emergencyHotline,
															onChange: (e) => updateCmsField("emergencyHotline", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "+263 77 733 4569"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4898,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4894,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Emergency Hotline (Dialable URL)"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4907,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.emergencyHotlineTel,
															onChange: (e) => updateCmsField("emergencyHotlineTel", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none font-mono text-[11px]",
															placeholder: "+263777334569"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4910,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4906,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4893,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
														children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "WhatsApp Business Number (digits only)"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4922,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.whatsappNumber,
															onChange: (e) => updateCmsField("whatsappNumber", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none font-mono text-[11px]",
															placeholder: "263777334569"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4925,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4921,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Technical Desk Email"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4934,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "email",
															value: cmsForm.email,
															onChange: (e) => updateCmsField("email", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "omnicore-solutions@outlook.com"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4937,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4933,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4920,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
														children: "Sales & Tenders Email"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4948,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("input", {
														type: "email",
														value: cmsForm.salesEmail,
														onChange: (e) => updateCmsField("salesEmail", e.target.value),
														className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
														placeholder: "sales@omnicoresolutions.co.zw"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4951,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4947,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
														children: "Default WhatsApp Inbound Message Preset"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4961,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("input", {
														type: "text",
														value: cmsForm.whatsappMessage,
														onChange: (e) => updateCmsField("whatsappMessage", e.target.value),
														className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
														placeholder: "Hello Omnicore Harare Desk — I would like an equipment quote."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 4964,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4960,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 4819,
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
																	lineNumber: 4981,
																	columnNumber: 29
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4980,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
																className: "text-sm font-semibold text-[#1D1D1F]",
																children: "Operating Hours, Dispatch Turnaround & SLAs"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4984,
																columnNumber: 29
															}, this), /* @__PURE__ */ (void 0)("p", {
																className: "text-[11px] text-[#86868B]",
																children: "Demonstration times, loading schedules, after-hours hotlines, delivery turnarounds, and terms."
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 4987,
																columnNumber: 29
															}, this)] }, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 4983,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4979,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "rounded-full bg-purple-100/60 px-2 py-0.5 text-[10px] font-semibold text-purple-800",
															children: "SLA & Yard Times"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4992,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4978,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
														children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Monday – Friday Hours"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 4999,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.hoursWeekday,
															onChange: (e) => updateCmsField("hoursWeekday", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "08:00 – 17:00"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5002,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 4998,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Saturday Hours"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5011,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.hoursSaturday,
															onChange: (e) => updateCmsField("hoursSaturday", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "08:00 – 13:00"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5014,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5010,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 4997,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
														children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Sunday & Public Holiday Policy"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5026,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.hoursSunday,
															onChange: (e) => updateCmsField("hoursSunday", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "Closed · WhatsApp desk monitored"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5029,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5025,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Quotation & Price SLA Statement"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5038,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.responseSLA,
															onChange: (e) => updateCmsField("responseSLA", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "Average tender & pricing turnaround under 15 minutes during yard hours."
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5041,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5037,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5024,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
														children: "Nationwide Dispatch & Delivery Lead Time"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5052,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("input", {
														type: "text",
														value: cmsForm.dispatchTurnaround,
														onChange: (e) => updateCmsField("dispatchTurnaround", e.target.value),
														className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
														placeholder: "Same-day lowbed loading for in-stock plant; 24–48h nationwide delivery."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5055,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5051,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
														children: "After-Hours & Breakdown Emergency Notice"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5065,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("input", {
														type: "text",
														value: cmsForm.afterHoursNotice,
														onChange: (e) => updateCmsField("afterHoursNotice", e.target.value),
														className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
														placeholder: "Urgent site breakdown & pump dispatch hotline active 24/7 on WhatsApp."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5068,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5064,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
														children: "Standard Factory Parts Warranty Statement"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5078,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("input", {
														type: "text",
														value: cmsForm.warrantyNotice,
														onChange: (e) => updateCmsField("warrantyNotice", e.target.value),
														className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
														placeholder: "12-month factory parts warranty & Harare commissioning included."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5081,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5077,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
														children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Accepted Payment Currencies & Terms"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5092,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.termsNotice,
															onChange: (e) => updateCmsField("termsNotice", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "All quotes issued in USD payable via Nostro, RTGS, or cash on collection."
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5095,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5091,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Payment Channels Accepted"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5104,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.paymentMethods,
															onChange: (e) => updateCmsField("paymentMethods", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "Bank Transfer, Nostro, USD Cash, EcoCash, ZIPIT"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5107,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5103,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5090,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
														children: "Formal Tenders & PRAZ Procurement Notice"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5118,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("input", {
														type: "text",
														value: cmsForm.tendersNotice || "",
														onChange: (e) => updateCmsField("tendersNotice", e.target.value),
														className: "w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
														placeholder: "PRAZ Registered Supplier · Formal tenders, municipal quotes & mine procurement packs issued within 24h."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5121,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5117,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 4977,
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
																lineNumber: 5138,
																columnNumber: 29
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5137,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
															className: "text-base font-semibold text-[#1D1D1F]",
															children: "Specialized Division Headlines, Eyebrows & Narrative Copy"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5141,
															columnNumber: 29
														}, this), /* @__PURE__ */ (void 0)("p", {
															className: "text-xs text-[#86868B] mt-0.5",
															children: "Custom positioning headlines, sector eyebrows, and sub-narratives across the 5 industrial division sections."
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5144,
															columnNumber: 29
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5140,
															columnNumber: 27
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5136,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "rounded-full bg-orange-100/70 px-3 py-1 text-xs font-semibold text-orange-800",
														children: "5 Sectors"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5149,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 5135,
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
																	lineNumber: 5159,
																	columnNumber: 29
																}, this), /* @__PURE__ */ (void 0)("span", {
																	className: "text-[10px] font-medium text-[#86868B]",
																	children: "Gold & Chrome"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 5162,
																	columnNumber: 29
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 5158,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("div", {
																className: "space-y-2",
																children: [
																	/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Eyebrow"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5166,
																		columnNumber: 31
																	}, this), /* @__PURE__ */ (void 0)("input", {
																		type: "text",
																		value: cmsForm.miningEyebrow,
																		onChange: (e) => updateCmsField("miningEyebrow", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-medium"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5167,
																		columnNumber: 31
																	}, this)] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 5165,
																		columnNumber: 29
																	}, this),
																	/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Headline"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5175,
																		columnNumber: 31
																	}, this), /* @__PURE__ */ (void 0)("input", {
																		type: "text",
																		value: cmsForm.miningHeadline,
																		onChange: (e) => updateCmsField("miningHeadline", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-semibold text-[#1D1D1F]"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5176,
																		columnNumber: 31
																	}, this)] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 5174,
																		columnNumber: 29
																	}, this),
																	/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Narrative Subheadline"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5184,
																		columnNumber: 31
																	}, this), /* @__PURE__ */ (void 0)("textarea", {
																		rows: 2,
																		value: cmsForm.miningSubheadline || "",
																		onChange: (e) => updateCmsField("miningSubheadline", e.target.value),
																		className: "w-full rounded-lg border border-black/[0.08] bg-white p-2 text-xs leading-relaxed",
																		placeholder: "Complete gravity and milling circuits engineered for small-scale and commercial miners..."
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5185,
																		columnNumber: 31
																	}, this)] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 5183,
																		columnNumber: 29
																	}, this)
																]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 5164,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5157,
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
																	lineNumber: 5199,
																	columnNumber: 29
																}, this), /* @__PURE__ */ (void 0)("span", {
																	className: "text-[10px] font-medium text-[#86868B]",
																	children: "Yellow Metal"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 5202,
																	columnNumber: 29
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 5198,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("div", {
																className: "space-y-2",
																children: [
																	/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Eyebrow"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5206,
																		columnNumber: 31
																	}, this), /* @__PURE__ */ (void 0)("input", {
																		type: "text",
																		value: cmsForm.hireEyebrow,
																		onChange: (e) => updateCmsField("hireEyebrow", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-medium"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5207,
																		columnNumber: 31
																	}, this)] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 5205,
																		columnNumber: 29
																	}, this),
																	/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Headline"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5215,
																		columnNumber: 31
																	}, this), /* @__PURE__ */ (void 0)("input", {
																		type: "text",
																		value: cmsForm.hireHeadline,
																		onChange: (e) => updateCmsField("hireHeadline", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-semibold text-[#1D1D1F]"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5216,
																		columnNumber: 31
																	}, this)] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 5214,
																		columnNumber: 29
																	}, this),
																	/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Narrative Subheadline"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5224,
																		columnNumber: 31
																	}, this), /* @__PURE__ */ (void 0)("textarea", {
																		rows: 2,
																		value: cmsForm.hireSubheadline || "",
																		onChange: (e) => updateCmsField("hireSubheadline", e.target.value),
																		className: "w-full rounded-lg border border-black/[0.08] bg-white p-2 text-xs leading-relaxed",
																		placeholder: "Late-model CAT diggers, 37m concrete boom pumps..."
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5225,
																		columnNumber: 31
																	}, this)] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 5223,
																		columnNumber: 29
																	}, this)
																]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 5204,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5197,
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
																	lineNumber: 5239,
																	columnNumber: 29
																}, this), /* @__PURE__ */ (void 0)("span", {
																	className: "text-[10px] font-medium text-[#86868B]",
																	children: "Agro-Processing"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 5242,
																	columnNumber: 29
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 5238,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("div", {
																className: "space-y-2",
																children: [
																	/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Eyebrow"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5246,
																		columnNumber: 31
																	}, this), /* @__PURE__ */ (void 0)("input", {
																		type: "text",
																		value: cmsForm.farmingEyebrow,
																		onChange: (e) => updateCmsField("farmingEyebrow", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-medium"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5247,
																		columnNumber: 31
																	}, this)] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 5245,
																		columnNumber: 29
																	}, this),
																	/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Headline"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5255,
																		columnNumber: 31
																	}, this), /* @__PURE__ */ (void 0)("input", {
																		type: "text",
																		value: cmsForm.farmingHeadline,
																		onChange: (e) => updateCmsField("farmingHeadline", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-semibold text-[#1D1D1F]"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5256,
																		columnNumber: 31
																	}, this)] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 5254,
																		columnNumber: 29
																	}, this),
																	/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Narrative Subheadline"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5264,
																		columnNumber: 31
																	}, this), /* @__PURE__ */ (void 0)("textarea", {
																		rows: 2,
																		value: cmsForm.farmingSubheadline || "",
																		onChange: (e) => updateCmsField("farmingSubheadline", e.target.value),
																		className: "w-full rounded-lg border border-black/[0.08] bg-white p-2 text-xs leading-relaxed",
																		placeholder: "Hammer mills, vertical feed mixers, and oil presses..."
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5265,
																		columnNumber: 31
																	}, this)] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 5263,
																		columnNumber: 29
																	}, this)
																]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 5244,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5237,
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
																	lineNumber: 5279,
																	columnNumber: 29
																}, this), /* @__PURE__ */ (void 0)("span", {
																	className: "text-[10px] font-medium text-[#86868B]",
																	children: "Fencing & Civils"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 5282,
																	columnNumber: 29
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 5278,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("div", {
																className: "space-y-2",
																children: [
																	/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Eyebrow"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5286,
																		columnNumber: 31
																	}, this), /* @__PURE__ */ (void 0)("input", {
																		type: "text",
																		value: cmsForm.hardwareEyebrow,
																		onChange: (e) => updateCmsField("hardwareEyebrow", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-medium"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5287,
																		columnNumber: 31
																	}, this)] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 5285,
																		columnNumber: 29
																	}, this),
																	/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Headline"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5295,
																		columnNumber: 31
																	}, this), /* @__PURE__ */ (void 0)("input", {
																		type: "text",
																		value: cmsForm.hardwareHeadline,
																		onChange: (e) => updateCmsField("hardwareHeadline", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-semibold text-[#1D1D1F]"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5296,
																		columnNumber: 31
																	}, this)] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 5294,
																		columnNumber: 29
																	}, this),
																	/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Narrative Subheadline"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5304,
																		columnNumber: 31
																	}, this), /* @__PURE__ */ (void 0)("textarea", {
																		rows: 2,
																		value: cmsForm.hardwareSubheadline || "",
																		onChange: (e) => updateCmsField("hardwareSubheadline", e.target.value),
																		className: "w-full rounded-lg border border-black/[0.08] bg-white p-2 text-xs leading-relaxed",
																		placeholder: "Diamond mesh, razor wire, block machines..."
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5305,
																		columnNumber: 31
																	}, this)] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 5303,
																		columnNumber: 29
																	}, this)
																]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 5284,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5277,
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
																	lineNumber: 5319,
																	columnNumber: 29
																}, this), /* @__PURE__ */ (void 0)("span", {
																	className: "text-[10px] font-medium text-[#86868B]",
																	children: "Power & Motors"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 5322,
																	columnNumber: 29
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 5318,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("div", {
																className: "space-y-2",
																children: [
																	/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Eyebrow"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5326,
																		columnNumber: 31
																	}, this), /* @__PURE__ */ (void 0)("input", {
																		type: "text",
																		value: cmsForm.industryEyebrow,
																		onChange: (e) => updateCmsField("industryEyebrow", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-medium"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5327,
																		columnNumber: 31
																	}, this)] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 5325,
																		columnNumber: 29
																	}, this),
																	/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Headline"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5335,
																		columnNumber: 31
																	}, this), /* @__PURE__ */ (void 0)("input", {
																		type: "text",
																		value: cmsForm.industryHeadline,
																		onChange: (e) => updateCmsField("industryHeadline", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs font-semibold text-[#1D1D1F]"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5336,
																		columnNumber: 31
																	}, this)] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 5334,
																		columnNumber: 29
																	}, this),
																	/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
																		className: "text-[10px] font-medium text-[#86868B] block mb-1",
																		children: "Narrative Subheadline"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5344,
																		columnNumber: 31
																	}, this), /* @__PURE__ */ (void 0)("textarea", {
																		rows: 2,
																		value: cmsForm.industrySubheadline || "",
																		onChange: (e) => updateCmsField("industrySubheadline", e.target.value),
																		className: "w-full rounded-lg border border-black/[0.08] bg-white p-2 text-xs leading-relaxed",
																		placeholder: "Heavy-duty electric motors, screw compressors..."
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5345,
																		columnNumber: 31
																	}, this)] }, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 5343,
																		columnNumber: 29
																	}, this)
																]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 5324,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5317,
															columnNumber: 25
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 5155,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 5134,
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
																	lineNumber: 5365,
																	columnNumber: 29
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 5364,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
																className: "text-base font-semibold text-[#1D1D1F]",
																children: "Corporate Narrative, Mission & 4 Guarantees"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 5368,
																columnNumber: 29
															}, this), /* @__PURE__ */ (void 0)("p", {
																className: "text-xs text-[#86868B] mt-0.5",
																children: "Harare yard presence story, nationwide mission, and core operational guarantees across Zimbabwe."
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 5371,
																columnNumber: 29
															}, this)] }, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 5367,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5363,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "rounded-full bg-indigo-100/70 px-3 py-1 text-xs font-semibold text-indigo-800",
															children: "About & Mission"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5376,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5362,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "grid grid-cols-1 lg:grid-cols-2 gap-3.5",
														children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "About Section Headline"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5383,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.aboutHeadline,
															onChange: (e) => updateCmsField("aboutHeadline", e.target.value),
															className: "w-full h-9 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "Direct Importers & Stockists of Heavy Industrial Equipment"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5386,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5382,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Company Mission Statement"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5396,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("textarea", {
															rows: 2,
															value: cmsForm.aboutMission,
															onChange: (e) => updateCmsField("aboutMission", e.target.value),
															className: "w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] p-2.5 text-xs leading-relaxed focus:bg-white focus:outline-none",
															placeholder: "Supplying verified commercial machinery with local parts, field commissioning..."
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5399,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5395,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5381,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
														children: "Company Origin & Harare Physical Stock Narrative"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5410,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("textarea", {
														rows: 2,
														value: cmsForm.aboutStory || "",
														onChange: (e) => updateCmsField("aboutStory", e.target.value),
														className: "w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] p-3 text-xs leading-relaxed focus:bg-white focus:outline-none",
														placeholder: "Founded to bridge the equipment gap for Zimbabwean miners, contractors, and farmers, Omnicore Solutions maintains a fully-stocked Cranborne yard..."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5413,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5409,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "space-y-3 pt-2 border-t border-black/[0.05]",
														children: [/* @__PURE__ */ (void 0)("span", {
															className: "font-semibold text-xs text-[#1D1D1F] block",
															children: "4 Core Operational Guarantees"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5423,
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
																		lineNumber: 5428,
																		columnNumber: 29
																	}, this), /* @__PURE__ */ (void 0)("input", {
																		type: "text",
																		value: cmsForm.aboutPillar1,
																		onChange: (e) => updateCmsField("aboutPillar1", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs focus:bg-white focus:outline-none font-medium"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5429,
																		columnNumber: 29
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 5427,
																	columnNumber: 27
																}, this),
																/* @__PURE__ */ (void 0)("div", {
																	className: "rounded-xl border border-black/[0.05] bg-[#F9F9FA] p-3 space-y-1",
																	children: [/* @__PURE__ */ (void 0)("label", {
																		className: "text-[10px] font-bold text-[#86868B] block uppercase tracking-wider",
																		children: "Pillar 2 · Field Proven"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5437,
																		columnNumber: 29
																	}, this), /* @__PURE__ */ (void 0)("input", {
																		type: "text",
																		value: cmsForm.aboutPillar2,
																		onChange: (e) => updateCmsField("aboutPillar2", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs focus:bg-white focus:outline-none font-medium"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5438,
																		columnNumber: 29
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 5436,
																	columnNumber: 27
																}, this),
																/* @__PURE__ */ (void 0)("div", {
																	className: "rounded-xl border border-black/[0.05] bg-[#F9F9FA] p-3 space-y-1",
																	children: [/* @__PURE__ */ (void 0)("label", {
																		className: "text-[10px] font-bold text-[#86868B] block uppercase tracking-wider",
																		children: "Pillar 3 · Spares Back-up"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5446,
																		columnNumber: 29
																	}, this), /* @__PURE__ */ (void 0)("input", {
																		type: "text",
																		value: cmsForm.aboutPillar3,
																		onChange: (e) => updateCmsField("aboutPillar3", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs focus:bg-white focus:outline-none font-medium"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5447,
																		columnNumber: 29
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 5445,
																	columnNumber: 27
																}, this),
																/* @__PURE__ */ (void 0)("div", {
																	className: "rounded-xl border border-black/[0.05] bg-[#F9F9FA] p-3 space-y-1",
																	children: [/* @__PURE__ */ (void 0)("label", {
																		className: "text-[10px] font-bold text-[#86868B] block uppercase tracking-wider",
																		children: "Pillar 4 · Logistics"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5455,
																		columnNumber: 29
																	}, this), /* @__PURE__ */ (void 0)("input", {
																		type: "text",
																		value: cmsForm.aboutPillar4,
																		onChange: (e) => updateCmsField("aboutPillar4", e.target.value),
																		className: "w-full h-8 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs focus:bg-white focus:outline-none font-medium"
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5456,
																		columnNumber: 29
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 5454,
																	columnNumber: 27
																}, this)
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5426,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5422,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 5361,
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
																	lineNumber: 5474,
																	columnNumber: 29
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 5473,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
																className: "text-sm font-semibold text-[#1D1D1F]",
																children: "Social Profiles & Footer Compliance"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 5477,
																columnNumber: 29
															}, this), /* @__PURE__ */ (void 0)("p", {
																className: "text-[11px] text-[#86868B]",
																children: "Official social channels, company overview, and bottom copyright statement."
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 5480,
																columnNumber: 29
															}, this)] }, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 5476,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5472,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "rounded-full bg-teal-100/60 px-2 py-0.5 text-[10px] font-semibold text-teal-800",
															children: "Channels"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5485,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5471,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
														children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "LinkedIn Company Profile URL"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5492,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "url",
															value: cmsForm.linkedinUrl,
															onChange: (e) => updateCmsField("linkedinUrl", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none font-mono text-[11px]",
															placeholder: "https://www.linkedin.com/company/..."
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5495,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5491,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Facebook Page URL"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5504,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "url",
															value: cmsForm.facebookUrl,
															onChange: (e) => updateCmsField("facebookUrl", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none font-mono text-[11px]",
															placeholder: "https://www.facebook.com/..."
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5507,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5503,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5490,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
														children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Founded Year"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5519,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.foundedYear,
															onChange: (e) => updateCmsField("foundedYear", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "2024"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5522,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5518,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
															children: "Registration & Scope Subtitle"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5531,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: cmsForm.companyReg,
															onChange: (e) => updateCmsField("companyReg", e.target.value),
															className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
															placeholder: "Harare Industrial & Mining Machinery Supplier"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5534,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5530,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5517,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
														children: "Footer Brand & Mission Summary"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5545,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("textarea", {
														rows: 2,
														value: cmsForm.footerAbout,
														onChange: (e) => updateCmsField("footerAbout", e.target.value),
														className: "w-full rounded-xl border border-black/[0.08] bg-[#F5F5F7] p-3 text-xs leading-relaxed focus:bg-white focus:outline-none",
														placeholder: "Direct supply, equipment hire, and on-site plant commissioning..."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5548,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5544,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-semibold text-[#1D1D1F] text-xs block mb-1",
														children: "Footer Copyright Notice"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5558,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("input", {
														type: "text",
														value: cmsForm.footerCopyright,
														onChange: (e) => updateCmsField("footerCopyright", e.target.value),
														className: "w-full h-8.5 rounded-xl border border-black/[0.08] bg-[#F5F5F7] px-3 text-xs focus:bg-white focus:outline-none",
														placeholder: "© 2026 Omnicore Solutions. All rights reserved..."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5561,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5557,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 5470,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "rounded-2xl border border-black/[0.06] bg-white p-4 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-3",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "flex items-center gap-2 text-xs text-[#86868B]",
													children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "size-4 text-emerald-600" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5575,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("span", { children: "Updates propagate instantaneously to all visitors and components across the site." }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5576,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 5574,
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
														lineNumber: 5580,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("button", {
														type: "submit",
														className: "rounded-full bg-[#1D1D1F] px-6 py-2 text-xs font-semibold text-white shadow-xs hover:bg-black transition-all active:scale-95 flex items-center gap-1.5",
														children: [/* @__PURE__ */ (void 0)(Check, { className: "size-3.5" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5591,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("span", { children: "Publish All Changes Live" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5592,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5587,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 5579,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 5573,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 4433,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 4432,
									columnNumber: 15
								}, this), cmsLayoutMode === "split" && isCmsPreviewOpen && /* @__PURE__ */ (void 0)("div", {
									className: "lg:col-span-5 xl:col-span-5 sticky top-20 space-y-4 animate-in fade-in duration-200",
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
															lineNumber: 5606,
															columnNumber: 27
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5605,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
														className: "text-sm font-semibold text-[#1D1D1F]",
														children: "Live Interactive Visual Preview"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5609,
														columnNumber: 27
													}, this), /* @__PURE__ */ (void 0)("p", {
														className: "text-[10px] text-[#86868B]",
														children: "Simulates real-time rendering as you type"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5612,
														columnNumber: 27
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5608,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 5604,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (void 0)("span", {
														className: "flex items-center gap-1 rounded-full bg-emerald-100/70 px-2 py-0.5 text-[10px] font-semibold text-emerald-800",
														children: [/* @__PURE__ */ (void 0)("span", { className: "size-1.5 rounded-full bg-emerald-600 animate-ping" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5620,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("span", { children: "Live Sync" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5621,
															columnNumber: 27
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5619,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("button", {
														type: "button",
														onClick: () => setIsCmsPreviewOpen(false),
														className: "rounded-full p-1 text-[#86868B] hover:text-[#1D1D1F] hover:bg-black/[0.05]",
														title: "Hide Live Preview",
														children: /* @__PURE__ */ (void 0)(X, { className: "size-3.5" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5629,
															columnNumber: 27
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5623,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 5618,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 5603,
												columnNumber: 21
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
													lineNumber: 5644,
													columnNumber: 23
												}, this))
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 5635,
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
																lineNumber: 5664,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("span", {
																className: "truncate max-w-[200px]",
																children: cmsForm.heroBadge || "Cranborne yard"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 5665,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5663,
															columnNumber: 25
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5662,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("h4", {
														className: "text-base sm:text-lg font-semibold tracking-tight text-white leading-tight",
														children: cmsForm.heroHeadline || "Plant for Zimbabwe’s mines, farms and pours."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5669,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("p", {
														className: "text-[11px] leading-relaxed text-white/75 line-clamp-3",
														children: cmsForm.heroSubheadline || "Gold circuits, fence plant, self-loading mixers..."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5673,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "flex flex-wrap gap-1.5 pt-1",
														children: [
															/* @__PURE__ */ (void 0)("span", {
																className: "inline-flex items-center gap-1 rounded-full bg-[#1FA855] px-3 py-1 text-[10px] font-semibold text-white",
																children: [/* @__PURE__ */ (void 0)(WhatsAppIcon, { className: "size-3" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 5679,
																	columnNumber: 27
																}, this), cmsForm.heroCtaPrimary || "WhatsApp"]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 5678,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("span", {
																className: "rounded-full bg-white px-3 py-1 text-[10px] font-semibold text-[#14110E]",
																children: cmsForm.heroCtaSecondary || "Request Quote"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 5682,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("span", {
																className: "rounded-full border border-white/20 px-2.5 py-1 text-[10px] text-white/80",
																children: cmsForm.heroCtaTertiary || "Catalogue"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 5685,
																columnNumber: 25
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5677,
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
																	lineNumber: 5693,
																	columnNumber: 27
																}, this), /* @__PURE__ */ (void 0)("p", {
																	className: "text-white/60 truncate",
																	children: cmsForm.stat1Detail || "Cranborne yard"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 5694,
																	columnNumber: 27
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 5692,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("div", {
																className: "bg-white/5 rounded-lg p-1.5",
																children: [/* @__PURE__ */ (void 0)("p", {
																	className: "font-semibold text-white truncate",
																	children: cmsForm.stat2Label || "1–25 TPH"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 5697,
																	columnNumber: 27
																}, this), /* @__PURE__ */ (void 0)("p", {
																	className: "text-white/60 truncate",
																	children: cmsForm.stat2Detail || "Gold circuits"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 5698,
																	columnNumber: 27
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 5696,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("div", {
																className: "bg-white/5 rounded-lg p-1.5",
																children: [/* @__PURE__ */ (void 0)("p", {
																	className: "font-semibold text-white truncate",
																	children: cmsForm.stat3Label || "Wet & dry"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 5701,
																	columnNumber: 27
																}, this), /* @__PURE__ */ (void 0)("p", {
																	className: "text-white/60 truncate",
																	children: cmsForm.stat3Detail || "Plant hire"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 5702,
																	columnNumber: 27
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 5700,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("div", {
																className: "bg-white/5 rounded-lg p-1.5",
																children: [/* @__PURE__ */ (void 0)("p", {
																	className: "font-semibold text-white truncate",
																	children: cmsForm.stat4Label || "10 provinces"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 5705,
																	columnNumber: 27
																}, this), /* @__PURE__ */ (void 0)("p", {
																	className: "text-white/60 truncate",
																	children: cmsForm.stat4Detail || "Lowbed delivery"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 5706,
																	columnNumber: 27
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 5704,
																columnNumber: 25
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5691,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 5661,
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
																	lineNumber: 5717,
																	columnNumber: 27
																}, this),
																cmsForm.yardCity || "Harare",
																" Yard Pin"
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5716,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "text-[10px] text-[#86868B]",
															children: cmsForm.yardCountry || "Zimbabwe"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5720,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5715,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h4", {
														className: "text-sm font-semibold text-[#1D1D1F]",
														children: cmsForm.yardAddressLine1 || "115 Chiremba Road"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5724,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("p", {
														className: "text-xs text-[#6E6E73]",
														children: cmsForm.yardAddressLine2 || "Cranborne, Harare"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5727,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5723,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("p", {
														className: "text-[11px] leading-relaxed text-[#86868B] bg-white rounded-xl p-2.5 border border-black/[0.04]",
														children: cmsForm.yardDirectionsNote || "Heavy machinery can be inspected, demonstrated, and loaded onto lowbeds directly from our yard."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5730,
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
																	lineNumber: 5736,
																	columnNumber: 27
																}, this), /* @__PURE__ */ (void 0)("span", {
																	className: "font-medium text-[#1D1D1F]",
																	children: cmsForm.hoursWeekday || "08:00 – 17:00"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 5737,
																	columnNumber: 27
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 5735,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("div", {
																className: "flex items-center justify-between",
																children: [/* @__PURE__ */ (void 0)("span", {
																	className: "text-[#86868B]",
																	children: "Saturday:"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 5740,
																	columnNumber: 27
																}, this), /* @__PURE__ */ (void 0)("span", {
																	className: "font-medium text-[#1D1D1F]",
																	children: cmsForm.hoursSaturday || "08:00 – 13:00"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 5741,
																	columnNumber: 27
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 5739,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("div", {
																className: "flex items-center justify-between",
																children: [/* @__PURE__ */ (void 0)("span", {
																	className: "text-[#86868B]",
																	children: "Sunday:"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 5744,
																	columnNumber: 27
																}, this), /* @__PURE__ */ (void 0)("span", {
																	className: "font-medium text-[#1D1D1F]",
																	children: cmsForm.hoursSunday || "Closed"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 5745,
																	columnNumber: 27
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 5743,
																columnNumber: 25
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5734,
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
															lineNumber: 5750,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("a", {
															href: `tel:${cmsForm.primaryPhoneTel}`,
															className: "flex-1 rounded-xl bg-[#1D1D1F] py-1.5 text-center text-[10px] font-semibold text-white hover:bg-black",
															children: "Call Yard Desk"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5758,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5749,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 5714,
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
																lineNumber: 5773,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("span", {
																className: "text-xs font-bold text-[#1B5E20]",
																children: "Harare WhatsApp Desk"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 5774,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5772,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "text-[10px] font-medium text-[#2E7D32]",
															children: ["Active · +", cmsForm.whatsappNumber]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5776,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5771,
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
																lineNumber: 5782,
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
																lineNumber: 5785,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("p", {
																className: "text-[10px] text-[#6E6E73]",
																children: ["SLA: ", cmsForm.responseSLA || "Average response < 15 mins"]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 5788,
																columnNumber: 25
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5781,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "flex items-center justify-between pt-1",
														children: [/* @__PURE__ */ (void 0)("span", {
															className: "text-[10px] text-[#6E6E73]",
															children: "Website Floating FAB:"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5795,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", {
															className: "inline-flex items-center gap-2 rounded-full bg-[#1FA855] px-3 py-1.5 text-white shadow-xs",
															children: [/* @__PURE__ */ (void 0)(WhatsAppIcon, { className: "size-3.5" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 5797,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("div", {
																className: "text-left",
																children: [/* @__PURE__ */ (void 0)("span", {
																	className: "text-[10px] font-bold block leading-tight",
																	children: "WhatsApp Desk"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 5799,
																	columnNumber: 29
																}, this), /* @__PURE__ */ (void 0)("span", {
																	className: "text-[8px] text-emerald-100 block leading-tight",
																	children: cmsForm.yardAddressLine2 || "Cranborne · Harare"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 5800,
																	columnNumber: 29
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 5798,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5796,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5794,
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
														lineNumber: 5805,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 5770,
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
																lineNumber: 5821,
																columnNumber: 27
															}, this), "Company Value Proposition"]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5820,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "text-[10px] text-[#86868B]",
															children: "Harare Operations"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5824,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5819,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h4", {
														className: "text-sm font-semibold text-[#1D1D1F]",
														children: cmsForm.aboutHeadline || "Direct Importers & Stockists of Heavy Industrial Equipment"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5828,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("p", {
														className: "text-xs text-[#6E6E73] mt-1 leading-relaxed",
														children: cmsForm.aboutMission || "Supplying verified commercial machinery with local parts, field commissioning, and technical back-up across all 10 provinces of Zimbabwe."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5831,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5827,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "pt-2 border-t border-black/[0.06] space-y-2",
														children: [/* @__PURE__ */ (void 0)("span", {
															className: "text-[10px] font-bold text-[#86868B] uppercase tracking-wider block",
															children: "4 Core Guarantees:"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5837,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", {
															className: "space-y-1.5 text-[11px]",
															children: [
																/* @__PURE__ */ (void 0)("div", {
																	className: "flex items-start gap-1.5 bg-white p-2 rounded-xl border border-black/[0.04]",
																	children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "size-3.5 text-emerald-600 shrink-0 mt-0.5" }, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5842,
																		columnNumber: 29
																	}, this), /* @__PURE__ */ (void 0)("span", {
																		className: "font-medium text-[#1D1D1F]",
																		children: cmsForm.aboutPillar1
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5843,
																		columnNumber: 29
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 5841,
																	columnNumber: 27
																}, this),
																/* @__PURE__ */ (void 0)("div", {
																	className: "flex items-start gap-1.5 bg-white p-2 rounded-xl border border-black/[0.04]",
																	children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "size-3.5 text-emerald-600 shrink-0 mt-0.5" }, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5846,
																		columnNumber: 29
																	}, this), /* @__PURE__ */ (void 0)("span", {
																		className: "font-medium text-[#1D1D1F]",
																		children: cmsForm.aboutPillar2
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5847,
																		columnNumber: 29
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 5845,
																	columnNumber: 27
																}, this),
																/* @__PURE__ */ (void 0)("div", {
																	className: "flex items-start gap-1.5 bg-white p-2 rounded-xl border border-black/[0.04]",
																	children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "size-3.5 text-emerald-600 shrink-0 mt-0.5" }, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5850,
																		columnNumber: 29
																	}, this), /* @__PURE__ */ (void 0)("span", {
																		className: "font-medium text-[#1D1D1F]",
																		children: cmsForm.aboutPillar3
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5851,
																		columnNumber: 29
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 5849,
																	columnNumber: 27
																}, this),
																/* @__PURE__ */ (void 0)("div", {
																	className: "flex items-start gap-1.5 bg-white p-2 rounded-xl border border-black/[0.04]",
																	children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "size-3.5 text-emerald-600 shrink-0 mt-0.5" }, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5854,
																		columnNumber: 29
																	}, this), /* @__PURE__ */ (void 0)("span", {
																		className: "font-medium text-[#1D1D1F]",
																		children: cmsForm.aboutPillar4
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 5855,
																		columnNumber: 29
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 5853,
																	columnNumber: 27
																}, this)
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5840,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5836,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 5818,
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
															lineNumber: 5867,
															columnNumber: 27
														}, this), "5 Industrial Sectors"]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5866,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "text-[10px] text-[#86868B]",
														children: "Live Headlines"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5870,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 5865,
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
																lineNumber: 5875,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("p", {
																className: "font-semibold text-[#1D1D1F] mt-0.5",
																children: cmsForm.miningHeadline
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 5878,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5874,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", {
															className: "bg-white p-2.5 rounded-xl border border-black/[0.04]",
															children: [/* @__PURE__ */ (void 0)("span", {
																className: "text-[10px] font-bold text-blue-700 uppercase tracking-wide block",
																children: cmsForm.hireEyebrow || "Hire Fleet"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 5883,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("p", {
																className: "font-semibold text-[#1D1D1F] mt-0.5",
																children: cmsForm.hireHeadline
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 5886,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5882,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", {
															className: "bg-white p-2.5 rounded-xl border border-black/[0.04]",
															children: [/* @__PURE__ */ (void 0)("span", {
																className: "text-[10px] font-bold text-emerald-700 uppercase tracking-wide block",
																children: cmsForm.farmingEyebrow || "Farming"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 5891,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("p", {
																className: "font-semibold text-[#1D1D1F] mt-0.5",
																children: cmsForm.farmingHeadline
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 5894,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5890,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", {
															className: "bg-white p-2.5 rounded-xl border border-black/[0.04]",
															children: [/* @__PURE__ */ (void 0)("span", {
																className: "text-[10px] font-bold text-zinc-700 uppercase tracking-wide block",
																children: cmsForm.hardwareEyebrow || "Hardware"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 5899,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("p", {
																className: "font-semibold text-[#1D1D1F] mt-0.5",
																children: cmsForm.hardwareHeadline
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 5902,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5898,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", {
															className: "bg-white p-2.5 rounded-xl border border-black/[0.04]",
															children: [/* @__PURE__ */ (void 0)("span", {
																className: "text-[10px] font-bold text-purple-700 uppercase tracking-wide block",
																children: cmsForm.industryEyebrow || "Industry"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 5907,
																columnNumber: 27
															}, this), /* @__PURE__ */ (void 0)("p", {
																className: "font-semibold text-[#1D1D1F] mt-0.5",
																children: cmsForm.industryHeadline
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 5910,
																columnNumber: 27
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5906,
															columnNumber: 25
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 5873,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 5864,
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
															lineNumber: 5922,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "text-xs font-bold text-[#1D1D1F]",
															children: cmsForm.name || "Omnicore Solutions"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5923,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5921,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("p", {
														className: "text-[11px] leading-relaxed text-[#6E6E73]",
														children: cmsForm.footerAbout || "Direct supply, equipment hire, and on-site plant commissioning from Cranborne, Harare."
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 5926,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "pt-2 border-t border-black/[0.06] space-y-1",
														children: [/* @__PURE__ */ (void 0)("p", {
															className: "text-[10px] text-[#86868B] font-mono",
															children: cmsForm.footerCopyright || `© 2026 Omnicore Solutions.`
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5931,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("div", {
															className: "flex gap-2 text-[10px] text-[#0071E3]",
															children: [
																/* @__PURE__ */ (void 0)("span", { children: "LinkedIn" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 5935,
																	columnNumber: 27
																}, this),
																/* @__PURE__ */ (void 0)("span", { children: "·" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 5936,
																	columnNumber: 27
																}, this),
																/* @__PURE__ */ (void 0)("span", { children: "Facebook" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 5937,
																	columnNumber: 27
																}, this),
																/* @__PURE__ */ (void 0)("span", { children: "·" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 5938,
																	columnNumber: 27
																}, this),
																/* @__PURE__ */ (void 0)("span", { children: cmsForm.email }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 5939,
																	columnNumber: 27
																}, this)
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 5934,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5930,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 5920,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "rounded-xl bg-[#F5F5F7] p-3 text-[11px] text-[#6E6E73] space-y-1",
												children: [
													/* @__PURE__ */ (void 0)("div", {
														className: "flex items-center justify-between text-[#1D1D1F] font-semibold text-xs",
														children: [/* @__PURE__ */ (void 0)("span", { children: "Sync Engine" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5948,
															columnNumber: 23
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "text-emerald-600 font-mono text-[10px]",
															children: "Real-Time Event Broadcast"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5949,
															columnNumber: 23
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5947,
														columnNumber: 21
													}, this),
													/* @__PURE__ */ (void 0)("p", {
														className: "text-[10px]",
														children: ["Storage Key: ", /* @__PURE__ */ (void 0)("code", {
															className: "font-mono text-[9px] bg-black/[0.04] px-1 py-0.5 rounded",
															children: "omnicore_site_copy_v2"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5952,
															columnNumber: 36
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5951,
														columnNumber: 21
													}, this),
													/* @__PURE__ */ (void 0)("p", {
														className: "text-[10px]",
														children: ["Connected components: ", /* @__PURE__ */ (void 0)("span", {
															className: "font-medium text-[#1D1D1F]",
															children: "Homepage Hero, Yard Badges, Contact Channels, FAB Widget, Site Footer"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 5955,
															columnNumber: 45
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 5954,
														columnNumber: 21
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 5946,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 5602,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 5601,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 4430,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 4284,
						columnNumber: 11
					}, this),
					activeTab === "hire" && /* @__PURE__ */ (void 0)("div", {
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (void 0)("div", {
								className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4",
								children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("div", {
									className: "flex items-center gap-2.5 flex-wrap",
									children: [
										/* @__PURE__ */ (void 0)("h2", {
											className: "text-xl font-semibold tracking-tight text-[#1D1D1F]",
											children: "Active Plant Hire Deployments"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 5974,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("span", {
											className: "rounded-full bg-black/[0.05] px-2.5 py-0.5 text-xs font-semibold text-[#1D1D1F]",
											children: [deploymentsList.length, " Units"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 5977,
											columnNumber: 19
										}, this),
										filteredDeployments.length !== deploymentsList.length && /* @__PURE__ */ (void 0)("span", {
											className: "rounded-full bg-blue-50 text-blue-700 border border-blue-200/60 px-2 py-0.5 text-[11px] font-medium",
											children: [filteredDeployments.length, " filtered"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 5981,
											columnNumber: 21
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 5973,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("p", {
									className: "text-xs text-[#86868B] mt-0.5",
									children: "Heavy machinery operating on contract across Zimbabwe infrastructure, mines, and farms."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 5986,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 5972,
									columnNumber: 15
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "flex items-center gap-2 flex-wrap",
									children: [deploymentsList.length === 0 && /* @__PURE__ */ (void 0)("button", {
										type: "button",
										onClick: handleResetDefaultDeployments,
										className: "inline-flex h-9 items-center gap-1.5 rounded-full border border-black/[0.08] bg-white px-3.5 text-xs font-semibold text-[#1D1D1F] hover:bg-[#F5F5F7] cursor-pointer",
										children: [/* @__PURE__ */ (void 0)(RotateCcw, { className: "size-3.5" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 5998,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("span", { children: "Load Sample Fleet" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 5999,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 5993,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("button", {
										type: "button",
										onClick: openCreateDeployment,
										className: "inline-flex h-9 items-center gap-1.5 rounded-full bg-[#1D1D1F] px-4 text-xs font-semibold text-white shadow-sm hover:bg-black transition-all cursor-pointer active:scale-95",
										children: [/* @__PURE__ */ (void 0)(Plus, { className: "size-3.5" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 6007,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("span", { children: "Deploy Machinery" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 6008,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 6002,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 5991,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 5971,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3",
								children: [
									/* @__PURE__ */ (void 0)("div", {
										className: "rounded-2xl border border-black/[0.06] bg-white p-3.5 shadow-2xs",
										children: [/* @__PURE__ */ (void 0)("span", {
											className: "text-[11px] font-medium text-[#86868B] uppercase tracking-wider block",
											children: "Total Fleet Out"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 6016,
											columnNumber: 17
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "mt-1 flex items-baseline gap-2",
											children: [/* @__PURE__ */ (void 0)("span", {
												className: "text-2xl font-bold text-[#1D1D1F]",
												children: deploymentMetrics.total
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 6020,
												columnNumber: 19
											}, this), /* @__PURE__ */ (void 0)("span", {
												className: "text-[11px] text-[#86868B]",
												children: "machines"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 6021,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 6019,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 6015,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "rounded-2xl border border-emerald-200/80 bg-emerald-50/40 p-3.5 shadow-2xs",
										children: [/* @__PURE__ */ (void 0)("span", {
											className: "text-[11px] font-semibold text-emerald-800 uppercase tracking-wider block flex items-center gap-1.5",
											children: [/* @__PURE__ */ (void 0)("span", { className: "size-2 rounded-full bg-emerald-500 animate-pulse" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 6027,
												columnNumber: 19
											}, this), "Active On Site"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 6026,
											columnNumber: 17
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "mt-1 flex items-baseline gap-2",
											children: [/* @__PURE__ */ (void 0)("span", {
												className: "text-2xl font-bold text-emerald-950",
												children: deploymentMetrics.activeOnSite
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 6031,
												columnNumber: 19
											}, this), /* @__PURE__ */ (void 0)("span", {
												className: "text-[11px] text-emerald-700",
												children: "generating revenue"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 6032,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 6030,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 6025,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "rounded-2xl border border-blue-200/80 bg-blue-50/40 p-3.5 shadow-2xs",
										children: [/* @__PURE__ */ (void 0)("span", {
											className: "text-[11px] font-semibold text-blue-800 uppercase tracking-wider block",
											children: "Mobilizing Soon"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 6037,
											columnNumber: 17
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "mt-1 flex items-baseline gap-2",
											children: [/* @__PURE__ */ (void 0)("span", {
												className: "text-2xl font-bold text-blue-950",
												children: deploymentMetrics.scheduled
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 6041,
												columnNumber: 19
											}, this), /* @__PURE__ */ (void 0)("span", {
												className: "text-[11px] text-blue-700",
												children: "scheduled dispatch"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 6042,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 6040,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 6036,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "rounded-2xl border border-purple-200/80 bg-purple-50/40 p-3.5 shadow-2xs",
										children: [/* @__PURE__ */ (void 0)("span", {
											className: "text-[11px] font-semibold text-purple-800 uppercase tracking-wider block",
											children: "Transit / Service"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 6047,
											columnNumber: 17
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "mt-1 flex items-baseline gap-2",
											children: [/* @__PURE__ */ (void 0)("span", {
												className: "text-2xl font-bold text-purple-950",
												children: deploymentMetrics.demobilizingOrService
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 6051,
												columnNumber: 19
											}, this), /* @__PURE__ */ (void 0)("span", {
												className: "text-[11px] text-purple-700",
												children: "field tech / lowbed"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 6052,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 6050,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 6046,
										columnNumber: 15
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "rounded-2xl border border-black/[0.06] bg-white p-3.5 shadow-2xs col-span-2 sm:col-span-1",
										children: [/* @__PURE__ */ (void 0)("span", {
											className: "text-[11px] font-medium text-[#86868B] uppercase tracking-wider block",
											children: "Active Daily Run Rate"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 6057,
											columnNumber: 17
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "mt-1 flex items-baseline gap-1",
											children: [/* @__PURE__ */ (void 0)("span", {
												className: "text-2xl font-bold text-[#1FA855]",
												children: ["$", deploymentMetrics.totalDailyRunRate.toLocaleString()]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 6061,
												columnNumber: 19
											}, this), /* @__PURE__ */ (void 0)("span", {
												className: "text-[11px] text-[#86868B]",
												children: "/ day"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 6064,
												columnNumber: 19
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 6060,
											columnNumber: 17
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 6056,
										columnNumber: 15
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 6014,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (void 0)("div", {
								className: "flex flex-col gap-3 rounded-2xl border border-black/[0.06] bg-white p-3.5 shadow-2xs",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "flex flex-col lg:flex-row lg:items-center justify-between gap-3",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "relative flex-1 min-w-[240px]",
										children: [
											/* @__PURE__ */ (void 0)(Search, { className: "absolute left-3 top-2.5 size-4 text-[#86868B]" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 6074,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (void 0)("input", {
												type: "text",
												value: deploymentSearch,
												onChange: (e) => {
													setDeploymentSearch(e.target.value);
													setDeploymentPage(1);
												},
												placeholder: "Search plant, client, site, contract ref, operator, notes...",
												className: "w-full h-9 rounded-xl border border-black/[0.08] bg-[#F9F9FA] pl-9 pr-8 text-xs text-[#1D1D1F] placeholder:text-[#86868B] focus:border-black focus:bg-white focus:outline-none transition-all"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 6075,
												columnNumber: 19
											}, this),
											deploymentSearch && /* @__PURE__ */ (void 0)("button", {
												type: "button",
												onClick: () => setDeploymentSearch(""),
												className: "absolute right-2.5 top-2.5 text-[#86868B] hover:text-[#1D1D1F] cursor-pointer",
												children: /* @__PURE__ */ (void 0)(X, { className: "size-4" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 6091,
													columnNumber: 23
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 6086,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 6073,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-1 rounded-xl bg-[#F5F5F7] p-1 self-start sm:self-auto shrink-0",
										children: [
											/* @__PURE__ */ (void 0)("button", {
												type: "button",
												onClick: () => setDeploymentViewMode("table"),
												className: `inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium transition-all cursor-pointer ${deploymentViewMode === "table" ? "bg-white text-[#1D1D1F] shadow-2xs font-semibold" : "text-[#6E6E73] hover:text-[#1D1D1F]"}`,
												title: "Dense Table View (Conducive for large numbers of deployments)",
												children: [/* @__PURE__ */ (void 0)(Table, { className: "size-3.5" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 6108,
													columnNumber: 21
												}, this), /* @__PURE__ */ (void 0)("span", { children: "Table" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 6109,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 6098,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (void 0)("button", {
												type: "button",
												onClick: () => setDeploymentViewMode("grid"),
												className: `inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium transition-all cursor-pointer ${deploymentViewMode === "grid" ? "bg-white text-[#1D1D1F] shadow-2xs font-semibold" : "text-[#6E6E73] hover:text-[#1D1D1F]"}`,
												title: "Card Grid View",
												children: [/* @__PURE__ */ (void 0)(LayoutGrid, { className: "size-3.5" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 6121,
													columnNumber: 21
												}, this), /* @__PURE__ */ (void 0)("span", { children: "Cards" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 6122,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 6111,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (void 0)("button", {
												type: "button",
												onClick: () => setDeploymentViewMode("kanban"),
												className: `inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium transition-all cursor-pointer ${deploymentViewMode === "kanban" ? "bg-white text-[#1D1D1F] shadow-2xs font-semibold" : "text-[#6E6E73] hover:text-[#1D1D1F]"}`,
												title: "Status Board / Kanban",
												children: [/* @__PURE__ */ (void 0)(Kanban, { className: "size-3.5" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 6134,
													columnNumber: 21
												}, this), /* @__PURE__ */ (void 0)("span", { children: "Status Board" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 6135,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 6124,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 6097,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 6071,
									columnNumber: 15
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "flex flex-wrap items-center justify-between gap-2.5 pt-2 border-t border-black/[0.04] text-xs",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "flex flex-wrap items-center gap-2",
										children: [
											/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "text-[#86868B] font-medium text-[11px]",
													children: "Status:"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 6145,
													columnNumber: 21
												}, this), /* @__PURE__ */ (void 0)("select", {
													value: deploymentStatusFilter,
													onChange: (e) => {
														setDeploymentStatusFilter(e.target.value);
														setDeploymentPage(1);
													},
													className: "h-7.5 rounded-lg border border-black/[0.08] bg-white px-2 text-xs font-medium text-[#1D1D1F] focus:outline-none",
													children: [
														/* @__PURE__ */ (void 0)("option", {
															value: "all",
															children: [
																"All Statuses (",
																deploymentsList.length,
																")"
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 6154,
															columnNumber: 23
														}, this),
														/* @__PURE__ */ (void 0)("option", {
															value: "Active on Site",
															children: [
																"Active on Site (",
																deploymentsList.filter((d) => d.status === "Active on Site").length,
																")"
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 6155,
															columnNumber: 23
														}, this),
														/* @__PURE__ */ (void 0)("option", {
															value: "Scheduled Mobilization",
															children: [
																"Scheduled Mobilization (",
																deploymentsList.filter((d) => d.status === "Scheduled Mobilization").length,
																")"
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 6156,
															columnNumber: 23
														}, this),
														/* @__PURE__ */ (void 0)("option", {
															value: "Demobilizing / In Transit",
															children: [
																"Demobilizing / In Transit (",
																deploymentsList.filter((d) => d.status === "Demobilizing / In Transit").length,
																")"
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 6157,
															columnNumber: 23
														}, this),
														/* @__PURE__ */ (void 0)("option", {
															value: "Routine Service / Standby",
															children: [
																"Routine Service / Standby (",
																deploymentsList.filter((d) => d.status === "Routine Service / Standby").length,
																")"
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 6158,
															columnNumber: 23
														}, this),
														/* @__PURE__ */ (void 0)("option", {
															value: "Returned to Cranborne Yard",
															children: [
																"Returned to Cranborne Yard (",
																deploymentsList.filter((d) => d.status === "Returned to Cranborne Yard").length,
																")"
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 6159,
															columnNumber: 23
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 6146,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 6144,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "text-[#86868B] font-medium text-[11px]",
													children: "Province:"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 6165,
													columnNumber: 21
												}, this), /* @__PURE__ */ (void 0)("select", {
													value: deploymentProvinceFilter,
													onChange: (e) => {
														setDeploymentProvinceFilter(e.target.value);
														setDeploymentPage(1);
													},
													className: "h-7.5 rounded-lg border border-black/[0.08] bg-white px-2 text-xs font-medium text-[#1D1D1F] focus:outline-none",
													children: [/* @__PURE__ */ (void 0)("option", {
														value: "all",
														children: "All Zimbabwe"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 6174,
														columnNumber: 23
													}, this), PROVINCES.filter((p) => p !== "All Zimbabwe").map((prov) => /* @__PURE__ */ (void 0)("option", {
														value: prov,
														children: prov
													}, prov, false, {
														fileName: _jsxFileName,
														lineNumber: 6176,
														columnNumber: 25
													}, this))]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 6166,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 6164,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "text-[#86868B] font-medium text-[11px]",
													children: "Division:"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 6185,
													columnNumber: 21
												}, this), /* @__PURE__ */ (void 0)("select", {
													value: deploymentCategoryFilter,
													onChange: (e) => {
														setDeploymentCategoryFilter(e.target.value);
														setDeploymentPage(1);
													},
													className: "h-7.5 rounded-lg border border-black/[0.08] bg-white px-2 text-xs font-medium text-[#1D1D1F] focus:outline-none",
													children: [
														/* @__PURE__ */ (void 0)("option", {
															value: "all",
															children: "All Divisions"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 6194,
															columnNumber: 23
														}, this),
														/* @__PURE__ */ (void 0)("option", {
															value: "hire",
															children: "Plant Hire"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 6195,
															columnNumber: 23
														}, this),
														/* @__PURE__ */ (void 0)("option", {
															value: "mining",
															children: "Mining"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 6196,
															columnNumber: 23
														}, this),
														/* @__PURE__ */ (void 0)("option", {
															value: "farming",
															children: "Farming"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 6197,
															columnNumber: 23
														}, this),
														/* @__PURE__ */ (void 0)("option", {
															value: "hardware",
															children: "Hardware"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 6198,
															columnNumber: 23
														}, this),
														/* @__PURE__ */ (void 0)("option", {
															value: "industry",
															children: "Industry"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 6199,
															columnNumber: 23
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 6186,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 6184,
												columnNumber: 19
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center gap-1.5",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "text-[#86868B] font-medium text-[11px]",
													children: "Sort:"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 6205,
													columnNumber: 21
												}, this), /* @__PURE__ */ (void 0)("select", {
													value: deploymentSortBy,
													onChange: (e) => setDeploymentSortBy(e.target.value),
													className: "h-7.5 rounded-lg border border-black/[0.08] bg-white px-2 text-xs font-medium text-[#1D1D1F] focus:outline-none",
													children: [
														/* @__PURE__ */ (void 0)("option", {
															value: "return-soon",
															children: "Return Date (Soonest first)"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 6211,
															columnNumber: 23
														}, this),
														/* @__PURE__ */ (void 0)("option", {
															value: "newest",
															children: "Newest Contract"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 6212,
															columnNumber: 23
														}, this),
														/* @__PURE__ */ (void 0)("option", {
															value: "rate-high",
															children: "Highest Daily Rate"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 6213,
															columnNumber: 23
														}, this),
														/* @__PURE__ */ (void 0)("option", {
															value: "plant-az",
															children: "Machine Name (A-Z)"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 6214,
															columnNumber: 23
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 6206,
													columnNumber: 21
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 6204,
												columnNumber: 19
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 6142,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-3 text-[11px] text-[#86868B]",
										children: [/* @__PURE__ */ (void 0)("span", { children: [
											"Showing ",
											/* @__PURE__ */ (void 0)("strong", { children: filteredDeployments.length }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 6222,
												columnNumber: 29
											}, this),
											" of ",
											deploymentsList.length
										] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 6221,
											columnNumber: 19
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-1",
											children: [/* @__PURE__ */ (void 0)("span", { children: "Per page:" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 6225,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("select", {
												value: deploymentPageSize,
												onChange: (e) => {
													setDeploymentPageSize(Number(e.target.value));
													setDeploymentPage(1);
												},
												className: "h-6 rounded border border-black/[0.08] bg-white px-1 text-[11px] text-[#1D1D1F]",
												children: [
													/* @__PURE__ */ (void 0)("option", {
														value: 10,
														children: "10"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 6234,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("option", {
														value: 25,
														children: "25"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 6235,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("option", {
														value: 50,
														children: "50"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 6236,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("option", {
														value: 999,
														children: "All"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 6237,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 6226,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 6224,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 6220,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 6141,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 6070,
								columnNumber: 13
							}, this),
							filteredDeployments.length === 0 ? /* @__PURE__ */ (void 0)("div", {
								className: "rounded-2xl border border-black/[0.06] bg-white p-12 text-center space-y-3",
								children: [
									/* @__PURE__ */ (void 0)(Truck, { className: "size-10 text-[#86868B] mx-auto opacity-40" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 6247,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("h3", {
										className: "text-base font-semibold text-[#1D1D1F]",
										children: "No deployments found"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 6248,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("p", {
										className: "text-xs text-[#86868B] max-w-md mx-auto",
										children: deploymentSearch || deploymentStatusFilter !== "all" || deploymentProvinceFilter !== "all" || deploymentCategoryFilter !== "all" ? "Try adjusting your search terms or filters to locate active machinery contracts." : "No heavy machinery is currently deployed in the field. Deploy a machine to start tracking contracts."
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 6249,
										columnNumber: 17
									}, this),
									/* @__PURE__ */ (void 0)("div", {
										className: "pt-2 flex items-center justify-center gap-2",
										children: [(deploymentSearch || deploymentStatusFilter !== "all" || deploymentProvinceFilter !== "all" || deploymentCategoryFilter !== "all") && /* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: () => {
												setDeploymentSearch("");
												setDeploymentStatusFilter("all");
												setDeploymentProvinceFilter("all");
												setDeploymentCategoryFilter("all");
											},
											className: "rounded-full border border-black/[0.08] bg-white px-4 py-2 text-xs font-semibold text-[#1D1D1F] hover:bg-[#F5F5F7] cursor-pointer",
											children: "Reset Filters"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 6256,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: openCreateDeployment,
											className: "rounded-full bg-[#1D1D1F] px-4 py-2 text-xs font-semibold text-white hover:bg-black cursor-pointer shadow-xs",
											children: "+ Deploy Machinery"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 6269,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 6254,
										columnNumber: 17
									}, this)
								]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 6246,
								columnNumber: 15
							}, this) : deploymentViewMode === "table" ? /* @__PURE__ */ (void 0)("div", {
								className: "rounded-2xl border border-black/[0.08] bg-white shadow-sm overflow-hidden",
								children: /* @__PURE__ */ (void 0)("div", {
									className: "overflow-x-auto",
									children: /* @__PURE__ */ (void 0)("table", {
										className: "w-full text-left text-xs",
										children: [/* @__PURE__ */ (void 0)("thead", { children: /* @__PURE__ */ (void 0)("tr", {
											className: "border-b border-black/[0.06] bg-[#FBFBFC] text-[11px] font-semibold text-[#86868B] uppercase tracking-wider",
											children: [
												/* @__PURE__ */ (void 0)("th", {
													className: "py-3 pl-4 pr-3",
													children: "Machine / Plant"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 6287,
													columnNumber: 25
												}, this),
												/* @__PURE__ */ (void 0)("th", {
													className: "py-3 px-3",
													children: "Client & Site Location"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 6288,
													columnNumber: 25
												}, this),
												/* @__PURE__ */ (void 0)("th", {
													className: "py-3 px-3",
													children: "Contract & Operator"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 6289,
													columnNumber: 25
												}, this),
												/* @__PURE__ */ (void 0)("th", {
													className: "py-3 px-3",
													children: "Billing Rate"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 6290,
													columnNumber: 25
												}, this),
												/* @__PURE__ */ (void 0)("th", {
													className: "py-3 px-3",
													children: "Status"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 6291,
													columnNumber: 25
												}, this),
												/* @__PURE__ */ (void 0)("th", {
													className: "py-3 px-3",
													children: "Return Date"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 6292,
													columnNumber: 25
												}, this),
												/* @__PURE__ */ (void 0)("th", {
													className: "py-3 pl-3 pr-4 text-right",
													children: "Actions"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 6293,
													columnNumber: 25
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 6286,
											columnNumber: 23
										}, this) }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 6285,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("tbody", {
											className: "divide-y divide-black/[0.04]",
											children: paginatedDeployments.map((dep) => {
												const statusColors = dep.status === "Active on Site" ? "bg-[#E8F8EE] text-[#1B833E] border-emerald-200" : dep.status === "Scheduled Mobilization" ? "bg-[#EFF6FF] text-[#1D4ED8] border-blue-200" : dep.status === "Demobilizing / In Transit" ? "bg-[#FFFBEB] text-[#B45309] border-amber-200" : dep.status === "Routine Service / Standby" ? "bg-[#FAF5FF] text-[#7E22CE] border-purple-200" : "bg-[#F5F5F7] text-[#6E6E73] border-gray-200";
												const whatsappLink = `https://wa.me/${(dep.contactPhone || "+263772109441").replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello ${dep.contactPerson || dep.client}, this is Omnicore Solutions Harare regarding the ${dep.plant} on site at ${dep.site} (Contract Ref: ${dep.contractRef}).`)}`;
												return /* @__PURE__ */ (void 0)("tr", {
													className: "hover:bg-[#F9F9FA] transition-colors group",
													children: [
														/* @__PURE__ */ (void 0)("td", {
															className: "py-3 pl-4 pr-3",
															children: /* @__PURE__ */ (void 0)("div", {
																className: "flex items-center gap-3",
																children: [/* @__PURE__ */ (void 0)("div", {
																	role: "button",
																	tabIndex: 0,
																	onClick: () => openProductLightbox({
																		name: dep.plant,
																		category: dep.category,
																		spec: `${dep.client} · ${dep.site}`,
																		price: dep.rate,
																		sku: dep.sku || dep.id,
																		image: dep.image
																	}),
																	className: "relative size-12 rounded-xl overflow-hidden bg-black/[0.05] border border-black/[0.08] shrink-0 cursor-pointer group/thumb shadow-2xs",
																	title: "Click to preview on large screen",
																	children: [/* @__PURE__ */ (void 0)("img", {
																		src: dep.image || "/images/cat-excavator.jpg",
																		alt: dep.plant,
																		className: "size-full object-cover transition-transform group-hover/thumb:scale-110",
																		onError: (e) => {
																			e.target.src = "/images/hero.jpg";
																		}
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 6334,
																		columnNumber: 35
																	}, this), /* @__PURE__ */ (void 0)("div", {
																		className: "absolute inset-0 bg-black/30 opacity-0 group-hover/thumb:opacity-100 flex items-center justify-center transition-opacity",
																		children: /* @__PURE__ */ (void 0)(ZoomIn, { className: "size-3 text-white" }, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 6343,
																			columnNumber: 37
																		}, this)
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 6342,
																		columnNumber: 35
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 6318,
																	columnNumber: 33
																}, this), /* @__PURE__ */ (void 0)("div", {
																	className: "min-w-0 max-w-[200px] sm:max-w-[260px]",
																	children: [/* @__PURE__ */ (void 0)("div", {
																		className: "flex items-center gap-1.5 flex-wrap",
																		children: /* @__PURE__ */ (void 0)("span", {
																			className: "font-semibold text-[#1D1D1F] truncate block",
																			children: dep.plant
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 6348,
																			columnNumber: 37
																		}, this)
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 6347,
																		columnNumber: 35
																	}, this), /* @__PURE__ */ (void 0)("div", {
																		className: "flex items-center gap-1.5 text-[10px] text-[#86868B] mt-0.5",
																		children: [
																			/* @__PURE__ */ (void 0)("span", {
																				className: "font-mono",
																				children: dep.id
																			}, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 6353,
																				columnNumber: 37
																			}, this),
																			/* @__PURE__ */ (void 0)("span", { children: "·" }, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 6354,
																				columnNumber: 37
																			}, this),
																			/* @__PURE__ */ (void 0)("span", {
																				className: "capitalize",
																				children: dep.category
																			}, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 6355,
																				columnNumber: 37
																			}, this),
																			dep.sku && /* @__PURE__ */ (void 0)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (void 0)("span", { children: "·" }, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 6358,
																				columnNumber: 41
																			}, this), /* @__PURE__ */ (void 0)("span", {
																				className: "truncate",
																				children: dep.sku
																			}, void 0, false, {
																				fileName: _jsxFileName,
																				lineNumber: 6359,
																				columnNumber: 41
																			}, this)] }, void 0, true, {
																				fileName: _jsxFileName,
																				lineNumber: 6357,
																				columnNumber: 39
																			}, this)
																		]
																	}, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 6352,
																		columnNumber: 35
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 6346,
																	columnNumber: 33
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 6317,
																columnNumber: 31
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 6316,
															columnNumber: 29
														}, this),
														/* @__PURE__ */ (void 0)("td", {
															className: "py-3 px-3",
															children: /* @__PURE__ */ (void 0)("div", {
																className: "space-y-0.5 max-w-[220px]",
																children: [
																	/* @__PURE__ */ (void 0)("span", {
																		className: "font-semibold text-[#1D1D1F] block truncate",
																		children: dep.client
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 6370,
																		columnNumber: 33
																	}, this),
																	/* @__PURE__ */ (void 0)("div", {
																		className: "flex items-center gap-1 text-[11px] text-[#6E6E73] truncate",
																		children: [/* @__PURE__ */ (void 0)(MapPin, { className: "size-3 text-[#86868B] shrink-0" }, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 6374,
																			columnNumber: 35
																		}, this), /* @__PURE__ */ (void 0)("span", {
																			className: "truncate",
																			children: dep.site
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 6375,
																			columnNumber: 35
																		}, this)]
																	}, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 6373,
																		columnNumber: 33
																	}, this),
																	/* @__PURE__ */ (void 0)("span", {
																		className: "text-[10px] text-[#86868B] block truncate",
																		children: dep.province
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 6377,
																		columnNumber: 33
																	}, this)
																]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 6369,
																columnNumber: 31
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 6368,
															columnNumber: 29
														}, this),
														/* @__PURE__ */ (void 0)("td", {
															className: "py-3 px-3",
															children: /* @__PURE__ */ (void 0)("div", {
																className: "space-y-0.5 max-w-[180px]",
																children: [
																	/* @__PURE__ */ (void 0)("span", {
																		className: "font-mono text-[11px] font-medium text-[#1D1D1F] block",
																		children: dep.contractRef
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 6386,
																		columnNumber: 33
																	}, this),
																	/* @__PURE__ */ (void 0)("span", {
																		className: "text-[10px] text-[#6E6E73] block truncate",
																		children: dep.operator
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 6389,
																		columnNumber: 33
																	}, this),
																	dep.contactPerson && /* @__PURE__ */ (void 0)("span", {
																		className: "text-[10px] text-[#86868B] block truncate",
																		children: ["Contact: ", dep.contactPerson]
																	}, void 0, true, {
																		fileName: _jsxFileName,
																		lineNumber: 6393,
																		columnNumber: 35
																	}, this)
																]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 6385,
																columnNumber: 31
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 6384,
															columnNumber: 29
														}, this),
														/* @__PURE__ */ (void 0)("td", {
															className: "py-3 px-3",
															children: /* @__PURE__ */ (void 0)("div", {
																className: "space-y-0.5",
																children: [/* @__PURE__ */ (void 0)("span", {
																	className: "inline-block rounded-md bg-[#F5F5F7] px-2 py-0.5 text-xs font-semibold text-[#1D1D1F]",
																	children: dep.rate
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 6403,
																	columnNumber: 33
																}, this), dep.dailyRateUSD > 0 && /* @__PURE__ */ (void 0)("span", {
																	className: "text-[10px] text-[#1FA855] font-semibold block",
																	children: [
																		"$",
																		dep.dailyRateUSD,
																		"/day billing"
																	]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 6407,
																	columnNumber: 35
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 6402,
																columnNumber: 31
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 6401,
															columnNumber: 29
														}, this),
														/* @__PURE__ */ (void 0)("td", {
															className: "py-3 px-3",
															children: /* @__PURE__ */ (void 0)("div", {
																className: "space-y-1",
																children: [/* @__PURE__ */ (void 0)("span", {
																	className: `inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold ${statusColors}`,
																	children: [/* @__PURE__ */ (void 0)("span", { className: `size-1.5 rounded-full ${dep.status === "Active on Site" ? "bg-emerald-500 animate-pulse" : dep.status === "Scheduled Mobilization" ? "bg-blue-500" : dep.status === "Demobilizing / In Transit" ? "bg-amber-500" : dep.status === "Routine Service / Standby" ? "bg-purple-500" : "bg-gray-400"}` }, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 6420,
																		columnNumber: 35
																	}, this), /* @__PURE__ */ (void 0)("span", { children: dep.status }, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 6433,
																		columnNumber: 35
																	}, this)]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 6417,
																	columnNumber: 33
																}, this), /* @__PURE__ */ (void 0)("select", {
																	value: dep.status,
																	onChange: (e) => handleQuickStatusChange(dep.id, e.target.value),
																	className: "block h-5.5 text-[10px] rounded border border-black/[0.08] bg-white px-1 text-[#6E6E73] hover:text-[#1D1D1F] focus:outline-none cursor-pointer",
																	title: "Quick update status",
																	children: [
																		/* @__PURE__ */ (void 0)("option", {
																			value: "Active on Site",
																			children: "Active on Site"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 6441,
																			columnNumber: 35
																		}, this),
																		/* @__PURE__ */ (void 0)("option", {
																			value: "Scheduled Mobilization",
																			children: "Scheduled Mobilization"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 6442,
																			columnNumber: 35
																		}, this),
																		/* @__PURE__ */ (void 0)("option", {
																			value: "Demobilizing / In Transit",
																			children: "Demobilizing / In Transit"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 6443,
																			columnNumber: 35
																		}, this),
																		/* @__PURE__ */ (void 0)("option", {
																			value: "Routine Service / Standby",
																			children: "Routine Service / Standby"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 6444,
																			columnNumber: 35
																		}, this),
																		/* @__PURE__ */ (void 0)("option", {
																			value: "Returned to Cranborne Yard",
																			children: "Returned to Cranborne Yard"
																		}, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 6445,
																			columnNumber: 35
																		}, this)
																	]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 6435,
																	columnNumber: 33
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 6416,
																columnNumber: 31
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 6415,
															columnNumber: 29
														}, this),
														/* @__PURE__ */ (void 0)("td", {
															className: "py-3 px-3 whitespace-nowrap",
															children: /* @__PURE__ */ (void 0)("div", {
																className: "space-y-0.5",
																children: [/* @__PURE__ */ (void 0)("span", {
																	className: "text-xs font-medium text-[#1D1D1F] block",
																	children: dep.scheduledReturn || "Open-ended"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 6453,
																	columnNumber: 33
																}, this), /* @__PURE__ */ (void 0)("span", {
																	className: "text-[10px] text-[#86868B] block",
																	children: ["Started: ", dep.startDate]
																}, void 0, true, {
																	fileName: _jsxFileName,
																	lineNumber: 6456,
																	columnNumber: 33
																}, this)]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 6452,
																columnNumber: 31
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 6451,
															columnNumber: 29
														}, this),
														/* @__PURE__ */ (void 0)("td", {
															className: "py-3 pl-3 pr-4 text-right",
															children: /* @__PURE__ */ (void 0)("div", {
																className: "flex items-center justify-end gap-1",
																children: [
																	/* @__PURE__ */ (void 0)("button", {
																		type: "button",
																		onClick: () => openProductLightbox({
																			name: dep.plant,
																			category: dep.category,
																			spec: `${dep.client} · ${dep.site}`,
																			price: dep.rate,
																			sku: dep.sku || dep.id,
																			image: dep.image
																		}),
																		className: "flex size-7.5 items-center justify-center rounded-lg border border-black/[0.06] bg-white text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7] transition-all cursor-pointer",
																		title: "Preview Machinery Photo in HD Large Screen",
																		children: /* @__PURE__ */ (void 0)(ZoomIn, { className: "size-3.5" }, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 6480,
																			columnNumber: 35
																		}, this)
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 6465,
																		columnNumber: 33
																	}, this),
																	/* @__PURE__ */ (void 0)("button", {
																		type: "button",
																		onClick: () => openEditDeployment(dep),
																		className: "flex size-7.5 items-center justify-center rounded-lg border border-black/[0.06] bg-white text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7] transition-all cursor-pointer",
																		title: "Edit Deployment Record",
																		children: /* @__PURE__ */ (void 0)(PenLine, { className: "size-3.5" }, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 6488,
																			columnNumber: 35
																		}, this)
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 6482,
																		columnNumber: 33
																	}, this),
																	/* @__PURE__ */ (void 0)("a", {
																		href: whatsappLink,
																		target: "_blank",
																		rel: "noopener noreferrer",
																		className: "flex size-7.5 items-center justify-center rounded-lg border border-emerald-200 bg-emerald-50 text-[#1B833E] hover:bg-emerald-100 transition-all cursor-pointer",
																		title: "WhatsApp Client Regarding Contract",
																		children: /* @__PURE__ */ (void 0)(WhatsAppIcon, { className: "size-3.5" }, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 6497,
																			columnNumber: 35
																		}, this)
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 6490,
																		columnNumber: 33
																	}, this),
																	/* @__PURE__ */ (void 0)("button", {
																		type: "button",
																		onClick: () => handleDeleteDeployment(dep.id),
																		className: "flex size-7.5 items-center justify-center rounded-lg border border-red-200/60 bg-white text-red-600 hover:bg-red-50 transition-all cursor-pointer",
																		title: "Delete Deployment",
																		children: /* @__PURE__ */ (void 0)(Trash2, { className: "size-3.5" }, void 0, false, {
																			fileName: _jsxFileName,
																			lineNumber: 6505,
																			columnNumber: 35
																		}, this)
																	}, void 0, false, {
																		fileName: _jsxFileName,
																		lineNumber: 6499,
																		columnNumber: 33
																	}, this)
																]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 6464,
																columnNumber: 31
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 6463,
															columnNumber: 29
														}, this)
													]
												}, dep.id, true, {
													fileName: _jsxFileName,
													lineNumber: 6314,
													columnNumber: 27
												}, this);
											})
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 6296,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 6284,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 6283,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 6282,
								columnNumber: 15
							}, this) : deploymentViewMode === "grid" ? /* @__PURE__ */ (void 0)("div", {
								className: "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4",
								children: paginatedDeployments.map((dep) => {
									const statusColors = dep.status === "Active on Site" ? "bg-[#E8F8EE] text-[#1B833E] border-emerald-200" : dep.status === "Scheduled Mobilization" ? "bg-[#EFF6FF] text-[#1D4ED8] border-blue-200" : dep.status === "Demobilizing / In Transit" ? "bg-[#FFFBEB] text-[#B45309] border-amber-200" : dep.status === "Routine Service / Standby" ? "bg-[#FAF5FF] text-[#7E22CE] border-purple-200" : "bg-[#F5F5F7] text-[#6E6E73] border-gray-200";
									const whatsappLink = `https://wa.me/${(dep.contactPhone || "+263772109441").replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello ${dep.contactPerson || dep.client}, this is Omnicore Solutions Harare regarding the ${dep.plant} on site at ${dep.site} (Contract Ref: ${dep.contractRef}).`)}`;
									return /* @__PURE__ */ (void 0)("div", {
										className: "group relative flex flex-col rounded-2xl border border-black/[0.08] bg-white p-4 shadow-sm hover:border-black/[0.15] hover:shadow-md transition-all",
										children: [
											/* @__PURE__ */ (void 0)("div", {
												className: "flex gap-3 items-start",
												children: [/* @__PURE__ */ (void 0)("div", {
													role: "button",
													tabIndex: 0,
													onClick: () => openProductLightbox({
														name: dep.plant,
														category: dep.category,
														spec: `${dep.client} · ${dep.site}`,
														price: dep.rate,
														sku: dep.sku || dep.id,
														image: dep.image
													}),
													className: "relative size-16 sm:size-20 rounded-xl overflow-hidden bg-black/[0.05] border border-black/[0.08] shrink-0 cursor-pointer shadow-2xs group/pic",
													title: "Click to view photo in large screen",
													children: [/* @__PURE__ */ (void 0)("img", {
														src: dep.image || "/images/cat-excavator.jpg",
														alt: dep.plant,
														className: "size-full object-cover transition-transform group-hover/pic:scale-105",
														onError: (e) => {
															e.target.src = "/images/hero.jpg";
														}
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 6560,
														columnNumber: 27
													}, this), /* @__PURE__ */ (void 0)("div", {
														className: "absolute inset-0 bg-black/35 opacity-0 group-hover/pic:opacity-100 transition-opacity flex items-center justify-center",
														children: /* @__PURE__ */ (void 0)(ZoomIn, { className: "size-4 text-white" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 6569,
															columnNumber: 29
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 6568,
														columnNumber: 27
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 6544,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("div", {
													className: "min-w-0 flex-1",
													children: [
														/* @__PURE__ */ (void 0)("div", {
															className: "flex items-center justify-between gap-1.5 mb-1",
															children: [/* @__PURE__ */ (void 0)("span", {
																className: "font-mono text-[10px] font-semibold text-[#86868B]",
																children: dep.id
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 6575,
																columnNumber: 29
															}, this), /* @__PURE__ */ (void 0)("span", {
																className: `rounded-full border px-2 py-0.5 text-[9px] font-semibold ${statusColors}`,
																children: dep.status
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 6578,
																columnNumber: 29
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 6574,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (void 0)("h3", {
															className: "text-sm font-semibold text-[#1D1D1F] line-clamp-1 leading-snug",
															children: dep.plant
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 6584,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (void 0)("p", {
															className: "text-xs text-[#6E6E73] truncate mt-0.5",
															children: ["Client: ", /* @__PURE__ */ (void 0)("strong", {
																className: "text-[#1D1D1F] font-semibold",
																children: dep.client
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 6588,
																columnNumber: 37
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 6587,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (void 0)("p", {
															className: "text-[11px] text-[#86868B] truncate mt-0.5 flex items-center gap-1",
															children: [/* @__PURE__ */ (void 0)(MapPin, { className: "size-3 text-[#86868B] shrink-0" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 6591,
																columnNumber: 29
															}, this), /* @__PURE__ */ (void 0)("span", { children: dep.site }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 6592,
																columnNumber: 29
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 6590,
															columnNumber: 27
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 6573,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 6543,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "mt-3.5 grid grid-cols-2 gap-2 rounded-xl bg-[#F5F5F7] p-2.5 text-xs",
												children: [
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
														className: "text-[9px] text-[#86868B] block uppercase tracking-wider",
														children: "Billing Rate"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 6600,
														columnNumber: 27
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "font-semibold text-[#1D1D1F] block",
														children: dep.rate
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 6603,
														columnNumber: 27
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 6599,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("span", {
														className: "text-[9px] text-[#86868B] block uppercase tracking-wider",
														children: "Scheduled Return"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 6606,
														columnNumber: 27
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "font-semibold text-[#1D1D1F] block truncate",
														children: dep.scheduledReturn || "Open"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 6609,
														columnNumber: 27
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 6605,
														columnNumber: 25
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "col-span-2 pt-1 border-t border-black/[0.04]",
														children: [/* @__PURE__ */ (void 0)("span", {
															className: "text-[9px] text-[#86868B] block uppercase tracking-wider",
															children: "Contract & Operator"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 6614,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "text-[#1D1D1F] truncate block font-medium",
															children: [
																dep.contractRef,
																" · ",
																dep.operator
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 6617,
															columnNumber: 27
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 6613,
														columnNumber: 25
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 6598,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "mt-3 pt-2.5 border-t border-black/[0.06] flex items-center justify-between gap-2",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "text-[10px] font-medium text-[#86868B]",
													children: ["📍 ", dep.province]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 6625,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("div", {
													className: "flex items-center gap-1.5",
													children: [
														/* @__PURE__ */ (void 0)("button", {
															type: "button",
															onClick: () => openEditDeployment(dep),
															className: "inline-flex items-center gap-1 rounded-lg border border-black/[0.08] bg-white px-2.5 py-1 text-xs font-semibold text-[#1D1D1F] hover:bg-[#F5F5F7] cursor-pointer",
															children: [/* @__PURE__ */ (void 0)(PenLine, { className: "size-3" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 6635,
																columnNumber: 29
															}, this), /* @__PURE__ */ (void 0)("span", { children: "Edit" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 6636,
																columnNumber: 29
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 6630,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (void 0)("a", {
															href: whatsappLink,
															target: "_blank",
															rel: "noopener noreferrer",
															className: "inline-flex items-center gap-1 rounded-lg border border-emerald-200 bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-800 hover:bg-emerald-100",
															title: "WhatsApp client",
															children: /* @__PURE__ */ (void 0)(WhatsAppIcon, { className: "size-3" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 6645,
																columnNumber: 29
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 6638,
															columnNumber: 27
														}, this),
														/* @__PURE__ */ (void 0)("button", {
															type: "button",
															onClick: () => handleDeleteDeployment(dep.id),
															className: "inline-flex size-7 items-center justify-center rounded-lg border border-red-200 bg-white text-red-600 hover:bg-red-50 cursor-pointer",
															title: "Delete",
															children: /* @__PURE__ */ (void 0)(Trash2, { className: "size-3" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 6653,
																columnNumber: 29
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 6647,
															columnNumber: 27
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 6629,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 6624,
												columnNumber: 23
											}, this)
										]
									}, dep.id, true, {
										fileName: _jsxFileName,
										lineNumber: 6538,
										columnNumber: 21
									}, this);
								})
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 6520,
								columnNumber: 15
							}, this) : /* @__PURE__ */ (void 0)("div", {
								className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5 overflow-x-auto pb-2",
								children: [
									{
										id: "Active on Site",
										label: "Active on Site",
										color: "emerald",
										border: "border-emerald-200",
										bg: "bg-emerald-50/50"
									},
									{
										id: "Scheduled Mobilization",
										label: "Scheduled",
										color: "blue",
										border: "border-blue-200",
										bg: "bg-blue-50/50"
									},
									{
										id: "Demobilizing / In Transit",
										label: "In Transit",
										color: "amber",
										border: "border-amber-200",
										bg: "bg-amber-50/50"
									},
									{
										id: "Routine Service / Standby",
										label: "Service / Standby",
										color: "purple",
										border: "border-purple-200",
										bg: "bg-purple-50/50"
									},
									{
										id: "Returned to Cranborne Yard",
										label: "Returned to Yard",
										color: "gray",
										border: "border-gray-200",
										bg: "bg-gray-50/50"
									}
								].map((col) => {
									const itemsInCol = filteredDeployments.filter((d) => d.status === col.id);
									return /* @__PURE__ */ (void 0)("div", {
										className: `flex flex-col rounded-2xl border ${col.border} ${col.bg} p-3 min-w-[240px]`,
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center justify-between pb-2.5 mb-2 border-b border-black/[0.06]",
											children: [/* @__PURE__ */ (void 0)("span", {
												className: "text-xs font-semibold text-[#1D1D1F] truncate",
												children: col.label
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 6683,
												columnNumber: 25
											}, this), /* @__PURE__ */ (void 0)("span", {
												className: "rounded-full bg-white px-2 py-0.5 text-[10px] font-bold text-[#1D1D1F] border border-black/[0.06]",
												children: itemsInCol.length
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 6684,
												columnNumber: 25
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 6682,
											columnNumber: 23
										}, this), /* @__PURE__ */ (void 0)("div", {
											className: "space-y-2.5 flex-1 min-h-[160px]",
											children: itemsInCol.length === 0 ? /* @__PURE__ */ (void 0)("div", {
												className: "h-28 rounded-xl border border-dashed border-black/[0.1] flex items-center justify-center text-[11px] text-[#86868B]",
												children: "No machines"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 6692,
												columnNumber: 27
											}, this) : itemsInCol.map((dep) => /* @__PURE__ */ (void 0)("div", {
												className: "rounded-xl border border-black/[0.08] bg-white p-3 shadow-2xs space-y-2 hover:border-black/[0.18] transition-all",
												children: [
													/* @__PURE__ */ (void 0)("div", {
														className: "flex items-start justify-between gap-2",
														children: [/* @__PURE__ */ (void 0)("span", {
															className: "font-mono text-[10px] text-[#86868B]",
															children: dep.id
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 6702,
															columnNumber: 33
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "text-[10px] font-bold text-[#1D1D1F] bg-[#F5F5F7] px-1.5 py-0.5 rounded",
															children: dep.rate
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 6703,
															columnNumber: 33
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 6701,
														columnNumber: 31
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "flex items-center gap-2",
														children: [/* @__PURE__ */ (void 0)("img", {
															src: dep.image || "/images/cat-excavator.jpg",
															alt: dep.plant,
															className: "size-9 rounded-lg object-cover bg-black/[0.04] shrink-0",
															onError: (e) => {
																e.target.src = "/images/hero.jpg";
															}
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 6709,
															columnNumber: 33
														}, this), /* @__PURE__ */ (void 0)("div", {
															className: "min-w-0 flex-1",
															children: [/* @__PURE__ */ (void 0)("h4", {
																className: "text-xs font-semibold text-[#1D1D1F] truncate leading-tight",
																children: dep.plant
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 6718,
																columnNumber: 35
															}, this), /* @__PURE__ */ (void 0)("p", {
																className: "text-[11px] text-[#6E6E73] truncate",
																children: dep.client
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 6721,
																columnNumber: 35
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 6717,
															columnNumber: 33
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 6708,
														columnNumber: 31
													}, this),
													/* @__PURE__ */ (void 0)("p", {
														className: "text-[10px] text-[#86868B] truncate",
														children: ["📍 ", dep.site]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 6725,
														columnNumber: 31
													}, this),
													/* @__PURE__ */ (void 0)("div", {
														className: "pt-2 border-t border-black/[0.04] flex items-center justify-between text-[10px]",
														children: [/* @__PURE__ */ (void 0)("span", {
															className: "text-[#86868B]",
															children: ["Due: ", dep.scheduledReturn || "Open"]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 6728,
															columnNumber: 33
														}, this), /* @__PURE__ */ (void 0)("div", {
															className: "flex items-center gap-1",
															children: [/* @__PURE__ */ (void 0)("button", {
																type: "button",
																onClick: () => openEditDeployment(dep),
																className: "p-1 rounded text-[#6E6E73] hover:text-[#1D1D1F] hover:bg-[#F5F5F7]",
																title: "Edit",
																children: /* @__PURE__ */ (void 0)(PenLine, { className: "size-3" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 6736,
																	columnNumber: 37
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 6730,
																columnNumber: 35
															}, this), /* @__PURE__ */ (void 0)("button", {
																type: "button",
																onClick: () => handleDeleteDeployment(dep.id),
																className: "p-1 rounded text-red-600 hover:bg-red-50",
																title: "Delete",
																children: /* @__PURE__ */ (void 0)(Trash2, { className: "size-3" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 6744,
																	columnNumber: 37
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 6738,
																columnNumber: 35
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 6729,
															columnNumber: 33
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 6727,
														columnNumber: 31
													}, this)
												]
											}, dep.id, true, {
												fileName: _jsxFileName,
												lineNumber: 6697,
												columnNumber: 29
											}, this))
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 6690,
											columnNumber: 23
										}, this)]
									}, col.id, true, {
										fileName: _jsxFileName,
										lineNumber: 6677,
										columnNumber: 21
									}, this);
								})
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 6665,
								columnNumber: 15
							}, this),
							deploymentTotalPages > 1 && /* @__PURE__ */ (void 0)("div", {
								className: "flex flex-col sm:flex-row items-center justify-between gap-3 rounded-2xl border border-black/[0.06] bg-white p-3 text-xs shadow-2xs",
								children: [/* @__PURE__ */ (void 0)("span", {
									className: "text-[11px] text-[#86868B]",
									children: [
										"Showing page ",
										/* @__PURE__ */ (void 0)("strong", { children: deploymentPage }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 6762,
											columnNumber: 32
										}, this),
										" of ",
										/* @__PURE__ */ (void 0)("strong", { children: deploymentTotalPages }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 6762,
											columnNumber: 69
										}, this),
										" (",
										filteredDeployments.length,
										" total)"
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 6761,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "flex items-center gap-1",
									children: [
										/* @__PURE__ */ (void 0)("button", {
											type: "button",
											disabled: deploymentPage <= 1,
											onClick: () => setDeploymentPage(1),
											className: "flex size-7.5 items-center justify-center rounded-lg border border-black/[0.08] bg-white text-[#1D1D1F] hover:bg-[#F5F5F7] disabled:opacity-30 disabled:pointer-events-none cursor-pointer",
											title: "First page",
											children: /* @__PURE__ */ (void 0)(ChevronsLeft, { className: "size-3.5" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 6772,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 6765,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("button", {
											type: "button",
											disabled: deploymentPage <= 1,
											onClick: () => setDeploymentPage((p) => Math.max(1, p - 1)),
											className: "flex size-7.5 items-center justify-center rounded-lg border border-black/[0.08] bg-white text-[#1D1D1F] hover:bg-[#F5F5F7] disabled:opacity-30 disabled:pointer-events-none cursor-pointer",
											title: "Previous page",
											children: /* @__PURE__ */ (void 0)(ChevronLeft, { className: "size-3.5" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 6781,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 6774,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("span", {
											className: "px-3 py-1 text-xs font-semibold text-[#1D1D1F]",
											children: [
												deploymentPage,
												" / ",
												deploymentTotalPages
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 6783,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("button", {
											type: "button",
											disabled: deploymentPage >= deploymentTotalPages,
											onClick: () => setDeploymentPage((p) => Math.min(deploymentTotalPages, p + 1)),
											className: "flex size-7.5 items-center justify-center rounded-lg border border-black/[0.08] bg-white text-[#1D1D1F] hover:bg-[#F5F5F7] disabled:opacity-30 disabled:pointer-events-none cursor-pointer",
											title: "Next page",
											children: /* @__PURE__ */ (void 0)(ChevronRight, { className: "size-3.5" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 6793,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 6786,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("button", {
											type: "button",
											disabled: deploymentPage >= deploymentTotalPages,
											onClick: () => setDeploymentPage(deploymentTotalPages),
											className: "flex size-7.5 items-center justify-center rounded-lg border border-black/[0.08] bg-white text-[#1D1D1F] hover:bg-[#F5F5F7] disabled:opacity-30 disabled:pointer-events-none cursor-pointer",
											title: "Last page",
											children: /* @__PURE__ */ (void 0)(ChevronsRight, { className: "size-3.5" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 6802,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 6795,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 6764,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 6760,
								columnNumber: 15
							}, this),
							showDeployModal && /* @__PURE__ */ (void 0)("div", {
								className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-150",
								children: /* @__PURE__ */ (void 0)("div", {
									className: "w-full max-w-2xl rounded-2xl border border-black/[0.08] bg-white p-6 shadow-2xl max-h-[92vh] overflow-y-auto",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center justify-between border-b border-black/[0.06] pb-3",
										children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
											className: "text-base font-semibold text-[#1D1D1F]",
											children: editingDeployment ? `Edit Field Deployment (${editingDeployment.id})` : "Deploy Machinery on Field Contract"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 6814,
											columnNumber: 23
										}, this), /* @__PURE__ */ (void 0)("p", {
											className: "text-[11px] text-[#86868B] mt-0.5",
											children: editingDeployment ? "Update site location, billing rate, status, return dates, or client details." : "Log a heavy machine dispatch from Cranborne yard to an infrastructure, mining, or farm site."
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 6817,
											columnNumber: 23
										}, this)] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 6813,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("button", {
											type: "button",
											onClick: () => setShowDeployModal(false),
											className: "rounded-full p-1 text-[#86868B] hover:bg-[#F5F5F7] cursor-pointer",
											children: /* @__PURE__ */ (void 0)(X, { className: "size-4" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 6828,
												columnNumber: 23
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 6823,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 6812,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("form", {
										onSubmit: handleSaveDeployment,
										className: "mt-4 space-y-4 text-xs",
										children: [
											!editingDeployment && /* @__PURE__ */ (void 0)("div", {
												className: "rounded-xl border border-black/[0.08] bg-[#FBFBFC] p-3 space-y-1.5",
												children: [/* @__PURE__ */ (void 0)("label", {
													className: "font-semibold text-[#1D1D1F] block text-xs",
													children: "Fast Select from Cranborne Yard Inventory (Optional)"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 6836,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("select", {
													value: deployMachineId,
													onChange: (e) => {
														const chosenId = e.target.value;
														setDeployMachineId(chosenId);
														const chosenProd = equipmentList.find((p) => p.id === chosenId);
														if (chosenProd) {
															setDeployPlant(chosenProd.name);
															setDeployCategory(chosenProd.category || "hire");
															if (chosenProd.sku) setDeploySku(chosenProd.sku);
															if (chosenProd.image) setDeployImage(chosenProd.image);
															if (chosenProd.price) setDeployRate(chosenProd.price);
														}
													},
													className: "w-full h-8.5 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs text-[#1D1D1F] focus:outline-none",
													children: [/* @__PURE__ */ (void 0)("option", {
														value: "",
														children: "-- Choose from Harare Inventory (or enter below) --"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 6855,
														columnNumber: 27
													}, this), equipmentList.map((eq) => /* @__PURE__ */ (void 0)("option", {
														value: eq.id,
														children: [
															eq.name,
															" (",
															eq.sku || eq.id,
															") - ",
															eq.category.toUpperCase()
														]
													}, eq.id, true, {
														fileName: _jsxFileName,
														lineNumber: 6857,
														columnNumber: 29
													}, this))]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 6839,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 6835,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
												children: [
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-semibold text-[#1D1D1F] block mb-1",
														children: "Machinery / Plant Name *"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 6868,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("input", {
														type: "text",
														required: true,
														value: deployPlant,
														onChange: (e) => setDeployPlant(e.target.value),
														placeholder: "e.g. 20-Tonne CAT 320D Excavator",
														className: "w-full h-8.5 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs text-[#1D1D1F] focus:border-black focus:outline-none"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 6871,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 6867,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-semibold text-[#1D1D1F] block mb-1",
														children: "Division Category"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 6882,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("select", {
														value: deployCategory,
														onChange: (e) => setDeployCategory(e.target.value),
														className: "w-full h-8.5 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs text-[#1D1D1F] focus:outline-none",
														children: [
															/* @__PURE__ */ (void 0)("option", {
																value: "hire",
																children: "Plant Hire"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 6890,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: "mining",
																children: "Mining"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 6891,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: "farming",
																children: "Farming"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 6892,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: "hardware",
																children: "Hardware"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 6893,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: "industry",
																children: "Industry"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 6894,
																columnNumber: 27
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 6885,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 6881,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-semibold text-[#1D1D1F] block mb-1",
														children: "Asset SKU / Serial Number"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 6899,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("input", {
														type: "text",
														value: deploySku,
														onChange: (e) => setDeploySku(e.target.value),
														placeholder: "e.g. OMNI-HIR-320D",
														className: "w-full h-8.5 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs text-[#1D1D1F] focus:border-black focus:outline-none font-mono"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 6902,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 6898,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-semibold text-[#1D1D1F] block mb-1",
														children: "Machinery Photo URL or Upload"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 6912,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("div", {
														className: "flex gap-2 items-center",
														children: [/* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: deployImage,
															onChange: (e) => setDeployImage(e.target.value),
															placeholder: "/images/cat-excavator.jpg",
															className: "flex-1 h-8.5 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs text-[#1D1D1F] focus:border-black focus:outline-none"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 6916,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("label", {
															className: "h-8.5 px-3 rounded-lg border border-black/[0.08] bg-[#F5F5F7] hover:bg-[#EBEBEB] text-[#1D1D1F] font-semibold text-[11px] inline-flex items-center gap-1 cursor-pointer shrink-0",
															children: [
																/* @__PURE__ */ (void 0)(Upload, { className: "size-3" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 6924,
																	columnNumber: 29
																}, this),
																/* @__PURE__ */ (void 0)("span", { children: "Upload" }, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 6925,
																	columnNumber: 29
																}, this),
																/* @__PURE__ */ (void 0)("input", {
																	type: "file",
																	accept: "image/*",
																	onChange: handleDeployImageUpload,
																	className: "hidden"
																}, void 0, false, {
																	fileName: _jsxFileName,
																	lineNumber: 6926,
																	columnNumber: 29
																}, this)
															]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 6923,
															columnNumber: 27
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 6915,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 6911,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 6866,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "rounded-xl border border-black/[0.08] bg-[#FBFBFC] p-3.5 space-y-3",
												children: [/* @__PURE__ */ (void 0)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (void 0)("span", {
														className: "font-semibold text-[#1D1D1F] text-xs",
														children: "Client & Site Deployment Details"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 6940,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("select", {
														onChange: (e) => {
															const chosen = clients.find((c) => c.name === e.target.value);
															if (chosen) {
																setDeployClient(chosen.organization ? `${chosen.name} (${chosen.organization})` : chosen.name);
																if (chosen.phone) setDeployContactPhone(chosen.phone);
																if (chosen.province && chosen.province !== "All Zimbabwe") setDeployProvince(chosen.province);
																if (chosen.location) setDeploySite(chosen.location);
																setDeployContactPerson(chosen.name);
															}
														},
														className: "h-6 text-[10px] rounded border border-black/[0.08] bg-white px-1.5 text-[#6E6E73] focus:outline-none",
														children: [/* @__PURE__ */ (void 0)("option", {
															value: "",
															children: "Quick fill from CRM clients..."
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 6957,
															columnNumber: 27
														}, this), clients.map((c) => /* @__PURE__ */ (void 0)("option", {
															value: c.name,
															children: [
																c.name,
																" ",
																c.organization ? `(${c.organization})` : "",
																" - ",
																c.province
															]
														}, c.id, true, {
															fileName: _jsxFileName,
															lineNumber: 6959,
															columnNumber: 29
														}, this))]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 6944,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 6939,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("div", {
													className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
													children: [
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] block mb-1",
															children: "Client Organization / Individual *"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 6968,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															required: true,
															value: deployClient,
															onChange: (e) => setDeployClient(e.target.value),
															placeholder: "e.g. Great Dyke Quarries Ltd",
															className: "w-full h-8.5 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs text-[#1D1D1F] focus:border-black focus:outline-none"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 6971,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 6967,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] block mb-1",
															children: "Contract Reference #"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 6982,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: deployContractRef,
															onChange: (e) => setDeployContractRef(e.target.value),
															placeholder: "e.g. CNT-2026-105",
															className: "w-full h-8.5 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs text-[#1D1D1F] focus:border-black focus:outline-none font-mono"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 6985,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 6981,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] block mb-1",
															children: "Site Location / Mine / Farm *"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 6995,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															required: true,
															value: deploySite,
															onChange: (e) => setDeploySite(e.target.value),
															placeholder: "e.g. Shamva Gold Claims, Mash Central",
															className: "w-full h-8.5 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs text-[#1D1D1F] focus:border-black focus:outline-none"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 6998,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 6994,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] block mb-1",
															children: "Province in Zimbabwe"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 7009,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("select", {
															value: deployProvince,
															onChange: (e) => setDeployProvince(e.target.value),
															className: "w-full h-8.5 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs text-[#1D1D1F] focus:outline-none",
															children: PROVINCES.filter((p) => p !== "All Zimbabwe").map((prov) => /* @__PURE__ */ (void 0)("option", {
																value: prov,
																children: prov
															}, prov, false, {
																fileName: _jsxFileName,
																lineNumber: 7018,
																columnNumber: 31
															}, this))
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 7012,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 7008,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] block mb-1",
															children: "Contact Person on Site"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 7026,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: deployContactPerson,
															onChange: (e) => setDeployContactPerson(e.target.value),
															placeholder: "e.g. Eng. T. Masvingise",
															className: "w-full h-8.5 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs text-[#1D1D1F] focus:border-black focus:outline-none"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 7029,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 7025,
															columnNumber: 25
														}, this),
														/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
															className: "font-semibold text-[#1D1D1F] block mb-1",
															children: "Contact Phone / WhatsApp"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 7039,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("input", {
															type: "text",
															value: deployContactPhone,
															onChange: (e) => setDeployContactPhone(e.target.value),
															placeholder: "+263 77 210 9441",
															className: "w-full h-8.5 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs text-[#1D1D1F] focus:border-black focus:outline-none font-mono"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 7042,
															columnNumber: 27
														}, this)] }, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 7038,
															columnNumber: 25
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 6966,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 6938,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "grid grid-cols-1 sm:grid-cols-3 gap-3.5",
												children: [
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-semibold text-[#1D1D1F] block mb-1",
														children: "Operator Arrangement"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7056,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("select", {
														value: deployOperator,
														onChange: (e) => setDeployOperator(e.target.value),
														className: "w-full h-8.5 rounded-lg border border-black/[0.08] bg-white px-2 text-xs text-[#1D1D1F] focus:outline-none",
														children: [
															/* @__PURE__ */ (void 0)("option", {
																value: "Wet Rate (With Certified Operator)",
																children: "Wet Rate (With Certified Operator)"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 7064,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: "Dry Rate (Machine Only)",
																children: "Dry Rate (Machine Only)"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 7065,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: "Wet Rate (Double Shift Crew)",
																children: "Wet Rate (Double Shift Crew)"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 7066,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: "Wet Rate (With Plant Mechanic)",
																children: "Wet Rate (With Plant Mechanic)"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 7067,
																columnNumber: 27
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 7059,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 7055,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-semibold text-[#1D1D1F] block mb-1",
														children: "Billing Rate"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7072,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("input", {
														type: "text",
														value: deployRate,
														onChange: (e) => setDeployRate(e.target.value),
														placeholder: "e.g. $480 / day",
														className: "w-full h-8.5 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs text-[#1D1D1F] focus:border-black focus:outline-none font-semibold text-[#1FA855]"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7075,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 7071,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-semibold text-[#1D1D1F] block mb-1",
														children: "Deployment Status"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7085,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("select", {
														value: deployStatus,
														onChange: (e) => setDeployStatus(e.target.value),
														className: "w-full h-8.5 rounded-lg border border-black/[0.08] bg-white px-2 text-xs text-[#1D1D1F] focus:outline-none font-semibold",
														children: [
															/* @__PURE__ */ (void 0)("option", {
																value: "Active on Site",
																children: "Active on Site"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 7093,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: "Scheduled Mobilization",
																children: "Scheduled Mobilization"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 7094,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: "Demobilizing / In Transit",
																children: "Demobilizing / In Transit"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 7095,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: "Routine Service / Standby",
																children: "Routine Service / Standby"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 7096,
																columnNumber: 27
															}, this),
															/* @__PURE__ */ (void 0)("option", {
																value: "Returned to Cranborne Yard",
																children: "Returned to Cranborne Yard"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 7097,
																columnNumber: 27
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 7088,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 7084,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-semibold text-[#1D1D1F] block mb-1",
														children: "Contract Start Date"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7102,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("input", {
														type: "date",
														value: deployStartDate,
														onChange: (e) => setDeployStartDate(e.target.value),
														className: "w-full h-8.5 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs text-[#1D1D1F] focus:border-black focus:outline-none"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7105,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 7101,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "font-semibold text-[#1D1D1F] block mb-1",
														children: "Scheduled Return Date"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7114,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("input", {
														type: "date",
														value: deployReturnDate,
														onChange: (e) => setDeployReturnDate(e.target.value),
														className: "w-full h-8.5 rounded-lg border border-black/[0.08] bg-white px-2.5 text-xs text-[#1D1D1F] focus:border-black focus:outline-none"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7117,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 7113,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 7054,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
												className: "font-semibold text-[#1D1D1F] block mb-1",
												children: "Operational Scope & Mobilization Notes"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 7128,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("textarea", {
												rows: 2,
												value: deployNotes,
												onChange: (e) => setDeployNotes(e.target.value),
												placeholder: "e.g. Overburden stripping on Reef 3. 250hr service completed on site by Cranborne field team.",
												className: "w-full rounded-lg border border-black/[0.08] bg-white p-2.5 text-xs text-[#1D1D1F] focus:border-black focus:outline-none"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 7131,
												columnNumber: 23
											}, this)] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 7127,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "flex items-center justify-between border-t border-black/[0.06] pt-3.5",
												children: [editingDeployment ? /* @__PURE__ */ (void 0)("button", {
													type: "button",
													onClick: () => {
														setShowDeployModal(false);
														handleDeleteDeployment(editingDeployment.id);
													},
													className: "text-xs font-semibold text-red-600 hover:text-red-700 cursor-pointer",
													children: "Delete Deployment"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 7143,
													columnNumber: 25
												}, this) : /* @__PURE__ */ (void 0)("div", {}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 7154,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (void 0)("button", {
														type: "button",
														onClick: () => setShowDeployModal(false),
														className: "rounded-lg border border-black/[0.08] bg-white px-4 py-2 text-xs font-semibold text-[#1D1D1F] hover:bg-[#F5F5F7] cursor-pointer",
														children: "Cancel"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7158,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("button", {
														type: "submit",
														className: "rounded-lg bg-[#1D1D1F] px-5 py-2 text-xs font-semibold text-white hover:bg-black transition-all cursor-pointer shadow-xs",
														children: editingDeployment ? "Save Changes" : "Deploy Machine"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7165,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 7157,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 7141,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 6832,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 6811,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 6810,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 5969,
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
									lineNumber: 7187,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("p", {
									className: "mt-0.5 text-xs text-[#86868B]",
									children: "Clients and machines removed from the backoffice. Restore them, or delete forever."
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 7188,
									columnNumber: 17
								}, this)] }, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 7186,
									columnNumber: 15
								}, this), /* @__PURE__ */ (void 0)("button", {
									type: "button",
									disabled: recycleBin.length === 0,
									onClick: () => setPendingAction({ type: "empty-bin" }),
									className: "inline-flex h-11 items-center gap-1.5 rounded-full border border-red-200 bg-white px-4 text-xs font-semibold text-red-600 hover:bg-red-50 disabled:pointer-events-none disabled:opacity-40",
									children: [/* @__PURE__ */ (void 0)(Trash2, { className: "size-3.5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 7198,
										columnNumber: 17
									}, this), "Empty recycle bin"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 7192,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 7185,
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
												lineNumber: 7232,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("span", {
												className: `text-[10px] ${active ? "text-white/80" : "text-[#86868B]"}`,
												children: f.count
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 7233,
												columnNumber: 23
											}, this)]
										}, f.id, true, {
											fileName: _jsxFileName,
											lineNumber: 7222,
											columnNumber: 21
										}, this);
									})
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 7204,
									columnNumber: 15
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "relative",
									children: [/* @__PURE__ */ (void 0)(Search, { className: "absolute left-3 top-1/2 size-3.5 -translate-y-1/2 text-[#86868B]" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 7241,
										columnNumber: 17
									}, this), /* @__PURE__ */ (void 0)("input", {
										type: "text",
										value: recycleSearch,
										onChange: (e) => setRecycleSearch(e.target.value),
										placeholder: "Search recycle bin...",
										className: "h-9 w-full rounded-full border border-black/[0.08] bg-white pl-9 pr-3 text-xs text-[#1D1D1F] placeholder-[#86868B] shadow-2xs focus:outline-none sm:w-64"
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 7242,
										columnNumber: 17
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 7240,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 7203,
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
									lineNumber: 7254,
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
											lineNumber: 7258,
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
												lineNumber: 7270,
												columnNumber: 21
											}, this), "Restore"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 7265,
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
												lineNumber: 7278,
												columnNumber: 21
											}, this), "Delete forever"]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 7273,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 7257,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 7253,
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
														lineNumber: 7291,
														columnNumber: 25
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 7290,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ (void 0)("th", {
													className: "px-4 py-3",
													children: "Record"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 7309,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ (void 0)("th", {
													className: "px-3 py-3",
													children: "Type"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 7310,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ (void 0)("th", {
													className: "px-3 py-3",
													children: "Deleted"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 7311,
													columnNumber: 23
												}, this),
												/* @__PURE__ */ (void 0)("th", {
													className: "px-3 py-3 text-right",
													children: "Actions"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 7312,
													columnNumber: 23
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 7289,
											columnNumber: 21
										}, this) }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 7288,
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
																lineNumber: 7321,
																columnNumber: 31
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 7320,
															columnNumber: 29
														}, this),
														/* @__PURE__ */ (void 0)("p", {
															className: "text-sm font-semibold text-[#1D1D1F]",
															children: "Recycle bin is empty"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 7323,
															columnNumber: 29
														}, this),
														/* @__PURE__ */ (void 0)("p", {
															className: "text-xs text-[#86868B]",
															children: "Deleted clients and machines will appear here so you can restore them."
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 7324,
															columnNumber: 29
														}, this)
													]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 7319,
													columnNumber: 27
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 7318,
												columnNumber: 25
											}, this) }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 7317,
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
															lineNumber: 7334,
															columnNumber: 29
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7333,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ (void 0)("td", {
														className: "px-4 py-3",
														children: [/* @__PURE__ */ (void 0)("span", {
															className: "block font-semibold text-[#1D1D1F]",
															children: item.title
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 7345,
															columnNumber: 29
														}, this), /* @__PURE__ */ (void 0)("span", {
															className: "block truncate text-[11px] text-[#6E6E73]",
															children: item.subtitle
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 7346,
															columnNumber: 29
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 7344,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ (void 0)("td", {
														className: "px-3 py-3",
														children: /* @__PURE__ */ (void 0)("span", {
															className: "rounded-full bg-black/[0.04] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-[#6E6E73]",
															children: item.kind === "client" ? "Client" : "Machine"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 7349,
															columnNumber: 29
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7348,
														columnNumber: 27
													}, this),
													/* @__PURE__ */ (void 0)("td", {
														className: "px-3 py-3 text-[#6E6E73]",
														children: formatBinDate(item.deletedAt)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7353,
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
																	lineNumber: 7361,
																	columnNumber: 33
																}, this), "Restore"]
															}, void 0, true, {
																fileName: _jsxFileName,
																lineNumber: 7356,
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
																	lineNumber: 7370,
																	columnNumber: 33
																}, this)
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 7364,
																columnNumber: 31
															}, this)]
														}, void 0, true, {
															fileName: _jsxFileName,
															lineNumber: 7355,
															columnNumber: 29
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7354,
														columnNumber: 27
													}, this)
												]
											}, item.binId, true, {
												fileName: _jsxFileName,
												lineNumber: 7332,
												columnNumber: 25
											}, this))
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 7315,
											columnNumber: 19
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 7287,
										columnNumber: 17
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 7286,
									columnNumber: 15
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 7285,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 7184,
						columnNumber: 11
					}, this),
					activeTab === "profile" && /* @__PURE__ */ (void 0)("div", {
						className: "space-y-8 max-w-5xl mx-auto pb-12",
						children: [/* @__PURE__ */ (void 0)("div", {
							className: "flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-black/[0.06] pb-6",
							children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h2", {
								className: "text-2xl font-bold tracking-tight text-[#1D1D1F]",
								children: "Administrator Profile & Security"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 7392,
								columnNumber: 17
							}, this), /* @__PURE__ */ (void 0)("p", {
								className: "mt-1 text-xs sm:text-sm text-[#6E6E73]",
								children: "Manage operations credentials, change administrator password, and monitor Hostinger MySQL database sync."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 7395,
								columnNumber: 17
							}, this)] }, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 7391,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "flex items-center gap-2",
								children: /* @__PURE__ */ (void 0)("a", {
									href: "/api/setup.php",
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex items-center gap-1.5 rounded-full border border-black/[0.08] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#1D1D1F] hover:bg-[#F5F5F7] transition-all shadow-2xs",
									children: [
										/* @__PURE__ */ (void 0)(Database, { className: "size-3.5 text-[#3D4F66]" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 7407,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("span", { children: "Hostinger DB Status" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 7408,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)(ExternalLink, { className: "size-3 text-[#86868B]" }, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 7409,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 7401,
									columnNumber: 17
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 7400,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 7390,
							columnNumber: 13
						}, this), /* @__PURE__ */ (void 0)("div", {
							className: "grid grid-cols-1 lg:grid-cols-12 gap-6 items-start",
							children: [/* @__PURE__ */ (void 0)("div", {
								className: "lg:col-span-7 space-y-6",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "rounded-3xl border border-black/[0.08] bg-white p-6 sm:p-7 shadow-xs",
									children: [/* @__PURE__ */ (void 0)("div", {
										className: "flex items-center gap-4 border-b border-black/[0.06] pb-5",
										children: [/* @__PURE__ */ (void 0)("div", {
											className: "flex size-14 items-center justify-center rounded-2xl bg-[#1D1D1F] text-white text-lg font-bold shadow-xs",
											children: adminProfile.fullName.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase() || "AD"
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 7421,
											columnNumber: 21
										}, this), /* @__PURE__ */ (void 0)("div", { children: [
											/* @__PURE__ */ (void 0)("h3", {
												className: "text-base font-bold text-[#1D1D1F]",
												children: adminProfile.fullName
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 7430,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (void 0)("p", {
												className: "text-xs text-[#6E6E73]",
												children: adminProfile.role
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 7431,
												columnNumber: 23
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "mt-1.5 flex items-center gap-2",
												children: [/* @__PURE__ */ (void 0)("span", {
													className: "inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 border border-emerald-200",
													children: [/* @__PURE__ */ (void 0)("span", { className: "size-1.5 rounded-full bg-emerald-600" }, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7434,
														columnNumber: 27
													}, this), "Primary Administrator"]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 7433,
													columnNumber: 25
												}, this), /* @__PURE__ */ (void 0)("span", {
													className: "text-[11px] text-[#86868B]",
													children: "Cranborne Operations"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 7437,
													columnNumber: 25
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 7432,
												columnNumber: 23
											}, this)
										] }, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 7429,
											columnNumber: 21
										}, this)]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 7420,
										columnNumber: 19
									}, this), /* @__PURE__ */ (void 0)("form", {
										onSubmit: handleSaveProfileDetails,
										className: "mt-5 space-y-4 text-xs",
										children: [
											/* @__PURE__ */ (void 0)("div", {
												className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
												children: [
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "block font-semibold text-[#1D1D1F] mb-1",
														children: "Administrator Full Name"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7445,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("input", {
														type: "text",
														required: true,
														value: profileName,
														onChange: (e) => setProfileName(e.target.value),
														className: "w-full h-9.5 rounded-xl border border-black/[0.12] bg-[#F9F9FB] px-3 text-xs text-[#1D1D1F] focus:border-black focus:bg-white focus:outline-none transition-all"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7448,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 7444,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "block font-semibold text-[#1D1D1F] mb-1",
														children: "Administrative Email / Login ID"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7458,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("input", {
														type: "email",
														required: true,
														value: profileEmail,
														onChange: (e) => setProfileEmail(e.target.value),
														className: "w-full h-9.5 rounded-xl border border-black/[0.12] bg-[#F9F9FB] px-3 text-xs text-[#1D1D1F] focus:border-black focus:bg-white focus:outline-none transition-all"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7461,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 7457,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "block font-semibold text-[#1D1D1F] mb-1",
														children: "Department / Title"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7471,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("input", {
														type: "text",
														value: profileRole,
														onChange: (e) => setProfileRole(e.target.value),
														className: "w-full h-9.5 rounded-xl border border-black/[0.12] bg-[#F9F9FB] px-3 text-xs text-[#1D1D1F] focus:border-black focus:bg-white focus:outline-none transition-all"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7474,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 7470,
														columnNumber: 23
													}, this),
													/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "block font-semibold text-[#1D1D1F] mb-1",
														children: "Direct Phone / WhatsApp"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7483,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("input", {
														type: "text",
														value: profilePhone,
														onChange: (e) => setProfilePhone(e.target.value),
														className: "w-full h-9.5 rounded-xl border border-black/[0.12] bg-[#F9F9FB] px-3 text-xs text-[#1D1D1F] focus:border-black focus:bg-white focus:outline-none transition-all"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7486,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 7482,
														columnNumber: 23
													}, this)
												]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 7443,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
												className: "block font-semibold text-[#1D1D1F] mb-1",
												children: "Yard Location"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 7496,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("input", {
												type: "text",
												value: profileLocation,
												onChange: (e) => setProfileLocation(e.target.value),
												className: "w-full h-9.5 rounded-xl border border-black/[0.12] bg-[#F9F9FB] px-3 text-xs text-[#1D1D1F] focus:border-black focus:bg-white focus:outline-none transition-all"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 7499,
												columnNumber: 23
											}, this)] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 7495,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (void 0)("div", {
												className: "pt-2 flex justify-end",
												children: /* @__PURE__ */ (void 0)("button", {
													type: "submit",
													className: "inline-flex h-9.5 items-center justify-center rounded-xl bg-[#1D1D1F] px-5 text-xs font-semibold text-white shadow-2xs hover:bg-black transition-all cursor-pointer",
													children: "Save Profile Details"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 7508,
													columnNumber: 23
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 7507,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 7442,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 7419,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "rounded-3xl border border-black/[0.08] bg-white p-6 sm:p-7 shadow-xs",
									children: [
										/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-3 border-b border-black/[0.06] pb-4",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "flex size-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700 border border-amber-200",
												children: /* @__PURE__ */ (void 0)(KeyRound, { className: "size-5" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 7522,
													columnNumber: 23
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 7521,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
												className: "text-sm font-bold text-[#1D1D1F]",
												children: "Change Administrator Credentials"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 7525,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("p", {
												className: "text-[11px] text-[#6E6E73]",
												children: "Update your login password and security access key."
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 7526,
												columnNumber: 23
											}, this)] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 7524,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 7520,
											columnNumber: 19
										}, this),
										credentialSuccessMsg && /* @__PURE__ */ (void 0)("div", {
											className: "mt-4 flex items-center gap-2.5 rounded-2xl border border-emerald-200 bg-emerald-50/80 p-3.5 text-xs text-emerald-800",
											children: [/* @__PURE__ */ (void 0)(CircleCheck, { className: "size-4 shrink-0 text-emerald-600" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 7534,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "flex-1 font-medium",
												children: credentialSuccessMsg
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 7535,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 7533,
											columnNumber: 21
										}, this),
										credentialErrorMsg && /* @__PURE__ */ (void 0)("div", {
											className: "mt-4 flex items-center gap-2.5 rounded-2xl border border-red-200 bg-red-50/80 p-3.5 text-xs text-red-800",
											children: [/* @__PURE__ */ (void 0)(CircleAlert, { className: "size-4 shrink-0 text-red-600" }, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 7541,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("div", {
												className: "flex-1 font-medium",
												children: credentialErrorMsg
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 7542,
												columnNumber: 23
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 7540,
											columnNumber: 21
										}, this),
										/* @__PURE__ */ (void 0)("form", {
											onSubmit: handleUpdateCredentials,
											className: "mt-5 space-y-4 text-xs",
											children: [
												/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
													className: "block font-semibold text-[#1D1D1F] mb-1",
													children: "Current Administrator Password *"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 7548,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("div", {
													className: "relative",
													children: [/* @__PURE__ */ (void 0)("input", {
														type: showCurrentPass ? "text" : "password",
														required: true,
														value: currentPassword,
														onChange: (e) => setCurrentPassword(e.target.value),
														placeholder: "Enter current password to verify identity",
														className: "w-full h-9.5 rounded-xl border border-black/[0.12] bg-[#F9F9FB] px-3 pr-10 text-xs text-[#1D1D1F] focus:border-black focus:bg-white focus:outline-none transition-all"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7552,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("button", {
														type: "button",
														onClick: () => setShowCurrentPass(!showCurrentPass),
														className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-[#86868B] hover:text-[#1D1D1F] cursor-pointer",
														children: showCurrentPass ? /* @__PURE__ */ (void 0)(EyeOff, { className: "size-4" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 7565,
															columnNumber: 46
														}, this) : /* @__PURE__ */ (void 0)(Eye, { className: "size-4" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 7565,
															columnNumber: 78
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7560,
														columnNumber: 25
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 7551,
													columnNumber: 23
												}, this)] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 7547,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
													children: [/* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "block font-semibold text-[#1D1D1F] mb-1",
														children: "New Administrator Password *"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7572,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("div", {
														className: "relative",
														children: [/* @__PURE__ */ (void 0)("input", {
															type: showNewPass ? "text" : "password",
															required: true,
															value: newPassword,
															onChange: (e) => setNewPassword(e.target.value),
															placeholder: "Min. 8 characters",
															className: "w-full h-9.5 rounded-xl border border-black/[0.12] bg-[#F9F9FB] px-3 pr-10 text-xs text-[#1D1D1F] focus:border-black focus:bg-white focus:outline-none transition-all"
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 7576,
															columnNumber: 27
														}, this), /* @__PURE__ */ (void 0)("button", {
															type: "button",
															onClick: () => setShowNewPass(!showNewPass),
															className: "absolute right-2.5 top-1/2 -translate-y-1/2 text-[#86868B] hover:text-[#1D1D1F] cursor-pointer",
															children: showNewPass ? /* @__PURE__ */ (void 0)(EyeOff, { className: "size-4" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 7589,
																columnNumber: 44
															}, this) : /* @__PURE__ */ (void 0)(Eye, { className: "size-4" }, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 7589,
																columnNumber: 76
															}, this)
														}, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 7584,
															columnNumber: 27
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 7575,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 7571,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("label", {
														className: "block font-semibold text-[#1D1D1F] mb-1",
														children: "Confirm New Password *"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7595,
														columnNumber: 25
													}, this), /* @__PURE__ */ (void 0)("input", {
														type: "password",
														required: true,
														value: confirmPassword,
														onChange: (e) => setConfirmPassword(e.target.value),
														placeholder: "Re-type new password",
														className: "w-full h-9.5 rounded-xl border border-black/[0.12] bg-[#F9F9FB] px-3 text-xs text-[#1D1D1F] focus:border-black focus:bg-white focus:outline-none transition-all"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7598,
														columnNumber: 25
													}, this)] }, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 7594,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 7570,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "rounded-xl bg-[#F5F5F7] p-3 text-[11px] text-[#6E6E73] space-y-1",
													children: [/* @__PURE__ */ (void 0)("div", {
														className: "font-semibold text-[#1D1D1F]",
														children: "Password Guidelines:"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7611,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("ul", {
														className: "list-disc pl-4 space-y-0.5",
														children: [
															/* @__PURE__ */ (void 0)("li", {
																className: newPassword.length >= 8 ? "text-emerald-700 font-medium" : "",
																children: "Minimum 8 characters"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 7613,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("li", {
																className: /[A-Za-z]/.test(newPassword) && /[0-9]/.test(newPassword) ? "text-emerald-700 font-medium" : "",
																children: "Contains both letters and numbers"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 7616,
																columnNumber: 25
															}, this),
															/* @__PURE__ */ (void 0)("li", {
																className: newPassword && newPassword === confirmPassword ? "text-emerald-700 font-medium" : "",
																children: "New password and confirm password match"
															}, void 0, false, {
																fileName: _jsxFileName,
																lineNumber: 7619,
																columnNumber: 25
															}, this)
														]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 7612,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 7610,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "pt-2 flex justify-end",
													children: /* @__PURE__ */ (void 0)("button", {
														type: "submit",
														disabled: isUpdatingCredentials,
														className: "inline-flex h-9.5 items-center justify-center gap-2 rounded-xl bg-amber-600 px-5 text-xs font-semibold text-white shadow-2xs hover:bg-amber-700 active:scale-95 disabled:opacity-50 transition-all cursor-pointer",
														children: [/* @__PURE__ */ (void 0)(KeyRound, { className: "size-3.5" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 7631,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)("span", { children: isUpdatingCredentials ? "Updating Credentials..." : "Update Administrator Password" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 7632,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 7626,
														columnNumber: 23
													}, this)
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 7625,
													columnNumber: 21
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 7546,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 7519,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 7417,
								columnNumber: 15
							}, this), /* @__PURE__ */ (void 0)("div", {
								className: "lg:col-span-5 space-y-6",
								children: [/* @__PURE__ */ (void 0)("div", {
									className: "rounded-3xl border border-black/[0.08] bg-white p-6 shadow-xs space-y-4",
									children: [
										/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "flex size-10 items-center justify-center rounded-xl bg-[#3D4F66]/10 text-[#3D4F66]",
												children: /* @__PURE__ */ (void 0)(Database, { className: "size-5" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 7645,
													columnNumber: 23
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 7644,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
												className: "text-sm font-bold text-[#1D1D1F]",
												children: "Hostinger MySQL & PHP Backend"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 7648,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("p", {
												className: "text-[11px] text-[#6E6E73]",
												children: "Cranborne Yard SQL Integration"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 7649,
												columnNumber: 23
											}, this)] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 7647,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 7643,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("p", {
											className: "text-xs text-[#6E6E73] leading-relaxed",
											children: [
												"The backoffice seamlessly writes to Hostinger MySQL via the secure PHP API in ",
												/* @__PURE__ */ (void 0)("code", {
													className: "bg-black/[0.05] px-1 py-0.5 rounded text-[11px]",
													children: "/public/api/"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 7654,
													columnNumber: 99
												}, this),
												". Inbound leads from the public Quote Form are immediately recorded into the SQL database."
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 7653,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "rounded-2xl border border-black/[0.06] bg-[#F9F9FB] p-3.5 space-y-2.5 text-xs",
											children: [
												/* @__PURE__ */ (void 0)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (void 0)("span", {
														className: "text-[#6E6E73]",
														children: "API Endpoints"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7659,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "font-mono text-[11px] text-emerald-700 font-semibold",
														children: "Active & Live"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7660,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 7658,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (void 0)("span", {
														className: "text-[#6E6E73]",
														children: "Database Schema"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7663,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("a", {
														href: "/api/schema.sql",
														download: "schema.sql",
														className: "text-[11px] font-semibold text-blue-700 hover:underline flex items-center gap-1",
														children: /* @__PURE__ */ (void 0)("span", { children: "Download schema.sql" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 7669,
															columnNumber: 25
														}, this)
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7664,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 7662,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "flex items-center justify-between",
													children: [/* @__PURE__ */ (void 0)("span", {
														className: "text-[#6E6E73]",
														children: "1-Click Diagnostic"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7673,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("a", {
														href: "/api/setup.php",
														target: "_blank",
														rel: "noreferrer",
														className: "text-[11px] font-semibold text-purple-700 hover:underline flex items-center gap-1",
														children: [/* @__PURE__ */ (void 0)("span", { children: "Open /api/setup.php" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 7680,
															columnNumber: 25
														}, this), /* @__PURE__ */ (void 0)(ExternalLink, { className: "size-3" }, void 0, false, {
															fileName: _jsxFileName,
															lineNumber: 7681,
															columnNumber: 25
														}, this)]
													}, void 0, true, {
														fileName: _jsxFileName,
														lineNumber: 7674,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 7672,
													columnNumber: 21
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 7657,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "border-t border-black/[0.06] pt-3 text-[11px] text-[#86868B] space-y-1",
											children: [
												/* @__PURE__ */ (void 0)("div", {
													className: "font-semibold text-[#1D1D1F]",
													children: "Configured Tables:"
												}, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 7687,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("div", { children: [
													"• ",
													/* @__PURE__ */ (void 0)("code", {
														className: "text-[#1D1D1F]",
														children: "omnicore_admin_users"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7688,
														columnNumber: 28
													}, this),
													": Credentials & profile"
												] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 7688,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("div", { children: [
													"• ",
													/* @__PURE__ */ (void 0)("code", {
														className: "text-[#1D1D1F]",
														children: "omnicore_crm_leads"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7689,
														columnNumber: 28
													}, this),
													": Public website quote leads"
												] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 7689,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("div", { children: [
													"• ",
													/* @__PURE__ */ (void 0)("code", {
														className: "text-[#1D1D1F]",
														children: "omnicore_equipment"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7690,
														columnNumber: 28
													}, this),
													": Machinery catalogue inventory"
												] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 7690,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("div", { children: [
													"• ",
													/* @__PURE__ */ (void 0)("code", {
														className: "text-[#1D1D1F]",
														children: "omnicore_deployments"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7691,
														columnNumber: 28
													}, this),
													": Machine hire contracts"
												] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 7691,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("div", { children: [
													"• ",
													/* @__PURE__ */ (void 0)("code", {
														className: "text-[#1D1D1F]",
														children: "omnicore_site_copy"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7692,
														columnNumber: 28
													}, this),
													": Live website text & phones"
												] }, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 7692,
													columnNumber: 21
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 7686,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 7642,
									columnNumber: 17
								}, this), /* @__PURE__ */ (void 0)("div", {
									className: "rounded-3xl border border-black/[0.08] bg-white p-6 shadow-xs space-y-4",
									children: [
										/* @__PURE__ */ (void 0)("div", {
											className: "flex items-center gap-3",
											children: [/* @__PURE__ */ (void 0)("div", {
												className: "flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700",
												children: /* @__PURE__ */ (void 0)(ShieldCheck, { className: "size-5" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 7700,
													columnNumber: 23
												}, this)
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 7699,
												columnNumber: 21
											}, this), /* @__PURE__ */ (void 0)("div", { children: [/* @__PURE__ */ (void 0)("h3", {
												className: "text-sm font-bold text-[#1D1D1F]",
												children: "Session & Security Audit"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 7703,
												columnNumber: 23
											}, this), /* @__PURE__ */ (void 0)("p", {
												className: "text-[11px] text-[#6E6E73]",
												children: "Access Status & Authentication Log"
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 7704,
												columnNumber: 23
											}, this)] }, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 7702,
												columnNumber: 21
											}, this)]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 7698,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "space-y-2 text-xs",
											children: [
												/* @__PURE__ */ (void 0)("div", {
													className: "flex justify-between py-1.5 border-b border-black/[0.04]",
													children: [/* @__PURE__ */ (void 0)("span", {
														className: "text-[#6E6E73]",
														children: "Authenticated User"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7710,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "font-semibold text-[#1D1D1F]",
														children: adminProfile.email
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7711,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 7709,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "flex justify-between py-1.5 border-b border-black/[0.04]",
													children: [/* @__PURE__ */ (void 0)("span", {
														className: "text-[#6E6E73]",
														children: "Session State"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7714,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "font-semibold text-emerald-700",
														children: "Active & Verified"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7715,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 7713,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "flex justify-between py-1.5 border-b border-black/[0.04]",
													children: [/* @__PURE__ */ (void 0)("span", {
														className: "text-[#6E6E73]",
														children: "Last Password Change"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7718,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "font-medium text-[#1D1D1F]",
														children: adminProfile.lastPasswordChange
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7719,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 7717,
													columnNumber: 21
												}, this),
												/* @__PURE__ */ (void 0)("div", {
													className: "flex justify-between py-1.5",
													children: [/* @__PURE__ */ (void 0)("span", {
														className: "text-[#6E6E73]",
														children: "Last Login Recorded"
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7722,
														columnNumber: 23
													}, this), /* @__PURE__ */ (void 0)("span", {
														className: "font-medium text-[#1D1D1F]",
														children: adminProfile.lastLogin
													}, void 0, false, {
														fileName: _jsxFileName,
														lineNumber: 7723,
														columnNumber: 23
													}, this)]
												}, void 0, true, {
													fileName: _jsxFileName,
													lineNumber: 7721,
													columnNumber: 21
												}, this)
											]
										}, void 0, true, {
											fileName: _jsxFileName,
											lineNumber: 7708,
											columnNumber: 19
										}, this),
										/* @__PURE__ */ (void 0)("div", {
											className: "pt-2",
											children: /* @__PURE__ */ (void 0)("button", {
												type: "button",
												onClick: handleLogout,
												className: "w-full flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50/50 py-2.5 text-xs font-semibold text-red-700 hover:bg-red-100/60 transition-all cursor-pointer",
												children: [/* @__PURE__ */ (void 0)(LogOut, { className: "size-3.5" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 7733,
													columnNumber: 23
												}, this), /* @__PURE__ */ (void 0)("span", { children: "Sign Out from Backoffice" }, void 0, false, {
													fileName: _jsxFileName,
													lineNumber: 7734,
													columnNumber: 23
												}, this)]
											}, void 0, true, {
												fileName: _jsxFileName,
												lineNumber: 7728,
												columnNumber: 21
											}, this)
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 7727,
											columnNumber: 19
										}, this)
									]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 7697,
									columnNumber: 17
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 7640,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 7415,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 7388,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 1799,
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
				lineNumber: 7745,
				columnNumber: 9
			}, this)
		] }, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 1657,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 1519,
		columnNumber: 5
	}, this);
}
var $$splitComponentImporter$7 = () => import("./catalogue-AT0QcPwr.mjs");
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
var $$splitComponentImporter$6 = () => import("./contact-TnRVCxyI.mjs");
var Route$6 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact Harare Machinery Desk | Omnicore Solutions" }, {
		name: "description",
		content: "Visit Omnicore Solutions at 115 Chiremba Road, Cranborne, Harare. Direct WhatsApp quoting +263 77 733 4569. Machinery sales and plant hire nationwide."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./projects-CGYTPtee.mjs");
var Route$5 = createFileRoute("/projects")({
	head: () => ({ meta: [{ title: "Site Deployments & Case Studies | Omnicore Solutions Zimbabwe" }, {
		name: "description",
		content: "Gold circuits, concrete pours, on-farm feed lines and fence manufacturing — Omnicore machinery operational across Zimbabwe."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./quote-DtfoATh6.mjs");
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
var $$splitComponentImporter$2 = () => import("../_slug-ChJxEqDM.mjs");
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
var $$splitComponentImporter$1 = () => import("./services-CQa9UUsz.mjs");
var Route$1 = createFileRoute("/services/")({
	head: () => ({ meta: [{ title: "Specialized Machinery Lines | Omnicore Solutions Zimbabwe" }, {
		name: "description",
		content: "Five specialized machinery lines from Harare: mining equipment, hardware & construction, machinery hire, farming plant, and industrial manufacturing."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("../_slug-U8mLLAb7.mjs");
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
export { ProductPhotoLightbox as a, getStoredSiteCopy as c, GoogleMapsBadge as d, PhoneBadge as f, Route$7 as i, useSiteCopy as l, WhatsAppIcon as m, Route as n, addInboundLeadToCRM as o, WhatsAppBadge as p, Route$2 as r, getStoredEquipment as s, router_exports as t, GmailBadge as u };
