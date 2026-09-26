import { c as projects, d as whatsappUrl } from "./site-NmzgmCl5.mjs";
import { S as MapPin } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { d as WhatsAppBadge } from "./router-ElrjEM6V.mjs";
import { t as MediaImage } from "./media-image-Br_gzV9I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-BPzdRSDF.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/projects.tsx?tsr-split=component";
function ProjectsPage() {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
		className: "mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-col gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "text-xs font-semibold tracking-wider text-[#86868b] uppercase",
					children: "Field Deployments · Zimbabwe"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 9,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
					className: "text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl",
					children: "Machinery on the job."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 12,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-1 max-w-2xl text-sm leading-relaxed text-[#6e6e73]",
					children: "Active sites, mining claims, and commercial facilities equipped and supported by Omnicore Solutions from Cranborne, Harare."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 15,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 8,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "mt-12 grid gap-6 md:grid-cols-2",
			children: projects.map((project) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
				className: "group flex flex-col overflow-hidden rounded-3xl border border-black/[0.06] bg-white shadow-xs transition-all duration-300 hover:border-black/[0.12] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)]",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative aspect-16/10 overflow-hidden bg-[#f5f5f7]",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MediaImage, {
						src: project.image,
						alt: project.imageAlt,
						className: "h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 24,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "absolute top-4 left-4",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "inline-flex items-center gap-1 rounded-full bg-white/85 backdrop-blur-md px-3 py-1 text-xs font-medium text-[#1d1d1f] border border-black/[0.06]",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "size-3 text-[#0071e3]" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 27,
								columnNumber: 19
							}, this), project.location]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 26,
							columnNumber: 17
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 25,
						columnNumber: 15
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 23,
					columnNumber: 13
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-1 flex-col p-6 sm:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "text-[11px] font-semibold uppercase tracking-wider text-[#86868b]",
							children: project.sector
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 34,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "mt-1.5 text-xl font-semibold tracking-tight text-[#1d1d1f]",
							children: project.title
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 37,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-2 flex-1 text-xs sm:text-sm leading-relaxed text-[#6e6e73]",
							children: project.body
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 40,
							columnNumber: 15
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-6 pt-4 border-t border-black/[0.04] flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "text-xs text-[#86868b]",
								children: "Zimbabwe Commissioned"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 45,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: whatsappUrl(`Hello Omnicore, I saw the project "${project.title}" and would like a similar machinery setup.`),
								className: "inline-flex items-center gap-1.5",
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WhatsAppBadge, {
									compact: true,
									label: "Inquire Similar Setup"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 47,
									columnNumber: 19
								}, this)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 46,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 44,
							columnNumber: 15
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 33,
					columnNumber: 13
				}, this)]
			}, project.id, true, {
				fileName: _jsxFileName,
				lineNumber: 22,
				columnNumber: 34
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName,
			lineNumber: 21,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 6,
		columnNumber: 10
	}, this);
}
//#endregion
export { ProjectsPage as component };
