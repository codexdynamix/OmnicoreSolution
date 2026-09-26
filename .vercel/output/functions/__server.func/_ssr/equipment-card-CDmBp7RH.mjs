import { d as whatsappUrl } from "./site-NmzgmCl5.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { f as WhatsAppIcon } from "./router-ElrjEM6V.mjs";
import { t as MediaImage } from "./media-image-Br_gzV9I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/equipment-card-CDmBp7RH.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/components/equipment-card.tsx";
function EquipmentCard({ item }) {
	const message = `Hello Omnicore, I would like to inquire about the ${item.name} (${item.intent === "hire" ? "Hire" : "Purchase"}). Please provide current availability and pricing.`;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
		className: "group flex flex-col overflow-hidden rounded-3xl bg-white border border-black/[0.06] p-4 transition-all duration-300 hover:border-black/[0.12] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:-translate-y-0.5",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#f5f5f7]",
			children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MediaImage, {
				src: item.image,
				alt: item.imageAlt,
				className: "h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 12,
				columnNumber: 9
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "absolute top-3 left-3 flex items-center gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "rounded-full border border-black/[0.06] bg-white/80 backdrop-blur-md px-3 py-1 text-[11px] font-medium text-[#1d1d1f] shadow-2xs",
					children: item.intent === "hire" ? "Plant Hire" : "Direct Supply"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 20,
					columnNumber: 11
				}, this), item.badge ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
					className: "rounded-full border border-black/[0.06] bg-white/70 backdrop-blur-md px-2.5 py-1 text-[11px] font-medium text-[#6e6e73]",
					children: item.badge
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 24,
					columnNumber: 13
				}, this) : null]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 19,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 11,
			columnNumber: 7
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-1 flex-col pt-4 px-1 pb-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center justify-between text-[11px] font-medium text-[#86868b] tracking-wider uppercase",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: item.spec ?? item.category }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 34,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 33,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
					className: "mt-1.5 text-[17px] font-semibold tracking-tight text-[#1d1d1f]",
					children: item.name
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 37,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-1.5 flex-1 text-xs leading-relaxed text-[#6e6e73] line-clamp-2",
					children: item.blurb
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 41,
					columnNumber: 9
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-4 pt-3 border-t border-black/[0.04] flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-[10px] font-medium text-[#86868b] uppercase tracking-wider block",
						children: item.intent === "hire" ? "Hire Rate" : "Indicative Price"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 48,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-xs font-semibold text-[#1d1d1f]",
						children: item.price ?? item.priceNote ?? "Inquire for quote"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 51,
						columnNumber: 13
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 47,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: whatsappUrl(message),
						className: "inline-flex items-center gap-1.5 rounded-full bg-[#1fa855]/12 hover:bg-[#1fa855] text-[#1b7a40] hover:text-white px-3.5 py-1.5 text-xs font-semibold transition-all active:scale-95",
						title: "Inquire on WhatsApp",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WhatsAppIcon, { className: "size-3.5 shrink-0" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 61,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Inquire" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 62,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 56,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 46,
					columnNumber: 9
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 32,
			columnNumber: 7
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 9,
		columnNumber: 5
	}, this);
}
//#endregion
export { EquipmentCard as t };
