import { d as whatsappUrl, o as insights } from "./_ssr/site-NmzgmCl5.mjs";
import { b as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { Q as ArrowLeft } from "./_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "./_libs/react.mjs";
import { p as WhatsAppBadge, r as Route$2 } from "./_ssr/router-BlHuFhrd.mjs";
import { t as MediaImage } from "./_ssr/media-image-Br_gzV9I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-C0LThGFS.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/insights/$slug.tsx?tsr-split=component";
function InsightPage() {
	const { post } = Route$2.useLoaderData();
	const more = insights.filter((item) => item.slug !== post.slug).slice(0, 2);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
		className: "pb-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
				className: "mx-auto max-w-3xl px-4 pt-12 sm:px-6 sm:pt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
						to: "/insights",
						className: "inline-flex items-center text-xs font-medium text-[#86868b] hover:text-[#1d1d1f] mb-6 transition-colors",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowLeft, { className: "size-3.5 mr-1" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 16,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Back to field guides" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 17,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 15,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-2 text-xs font-medium text-[#86868b] uppercase tracking-wider",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: post.category }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 21,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "·" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 22,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: post.read }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 23,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "·" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 24,
								columnNumber: 11
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: post.date }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 25,
								columnNumber: 11
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 20,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "mt-3 text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl",
						children: post.title
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 28,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-4 text-base sm:text-lg leading-relaxed text-[#6e6e73]",
						children: post.kicker
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 31,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 14,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto mt-8 max-w-4xl px-4 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "overflow-hidden rounded-3xl border border-black/[0.06] bg-[#f5f5f7] shadow-xs",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MediaImage, {
						src: post.image,
						alt: post.imageAlt,
						className: "aspect-16/9 w-full object-cover"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 39,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 38,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 37,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto max-w-3xl px-4 py-12 sm:px-6",
				children: [
					post.body.map((block, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
						className: "mt-8 first:mt-0",
						children: [block.heading ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "text-xl font-semibold tracking-tight text-[#1d1d1f] sm:text-2xl",
							children: block.heading
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 46,
							columnNumber: 30
						}, this) : null, block.paragraphs.map((paragraph) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-4 text-sm sm:text-base leading-relaxed text-[#48484a]",
							children: paragraph
						}, paragraph.slice(0, 40), false, {
							fileName: _jsxFileName,
							lineNumber: 49,
							columnNumber: 48
						}, this))]
					}, index, true, {
						fileName: _jsxFileName,
						lineNumber: 45,
						columnNumber: 42
					}, this)),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-14 flex flex-col gap-4 rounded-3xl border border-black/[0.06] bg-[#f5f5f7] p-6 sm:p-8 sm:flex-row sm:items-center sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-sm font-semibold text-[#1d1d1f]",
							children: "Need this plant specified for your site?"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 57,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs text-[#86868b] mt-0.5",
							children: "Discuss tonnages, freight, and operator requirements with Cranborne engineers."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 58,
							columnNumber: 13
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 56,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: whatsappUrl(`Hello Omnicore — I read “${post.title}” and need a machinery quote.`),
							className: "inline-flex shrink-0 items-center justify-center gap-2",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WhatsAppBadge, { label: "WhatsApp Consultation" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 63,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 62,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 55,
						columnNumber: 9
					}, this),
					more.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-16 pt-10 border-t border-black/[0.06]",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
							className: "text-base font-semibold text-[#1d1d1f] mb-6",
							children: "More field guides"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 69,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: more.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/insights/$slug",
								params: { slug: item.slug },
								className: "group rounded-3xl border border-black/[0.06] bg-white p-5 shadow-2xs hover:border-black/[0.12] hover:shadow-xs transition-all",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[11px] font-semibold text-[#86868b] uppercase tracking-wider",
									children: item.category
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 74,
									columnNumber: 19
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
									className: "mt-1 text-sm font-semibold text-[#1d1d1f] group-hover:text-[#0071e3] transition-colors",
									children: item.title
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 77,
									columnNumber: 19
								}, this)]
							}, item.slug, true, {
								fileName: _jsxFileName,
								lineNumber: 71,
								columnNumber: 33
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 70,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 68,
						columnNumber: 28
					}, this) : null
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 44,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 12,
		columnNumber: 10
	}, this);
}
//#endregion
export { InsightPage as component };
