import { i as __toESM } from "../_runtime.mjs";
import { d as whatsappUrl } from "./site-NmzgmCl5.mjs";
import { l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { M as Images, w as Maximize2 } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { a as ProductPhotoLightbox, p as WhatsAppIcon } from "./router-Bfcfm8Zj.mjs";
import { t as MediaImage } from "./media-image-Br_gzV9I.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/equipment-card-BOY95tnU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/components/equipment-card.tsx";
function EquipmentCard({ item }) {
	const [lightboxOpen, setLightboxOpen] = (0, import_react.useState)(false);
	const message = `Hello Omnicore, I would like to inquire about the ${item.name} (${item.intent === "hire" ? "Hire" : "Purchase"}). Please provide current availability and pricing.`;
	const allPhotos = [item.image, ...item.gallery || []].filter(Boolean);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", {
		className: "group flex flex-col overflow-hidden rounded-3xl bg-white border border-black/[0.06] p-4 transition-all duration-300 hover:border-black/[0.12] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:-translate-y-0.5",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			role: "button",
			tabIndex: 0,
			onClick: () => setLightboxOpen(true),
			onKeyDown: (e) => {
				if (e.key === "Enter" || e.key === " ") {
					e.preventDefault();
					setLightboxOpen(true);
				}
			},
			className: "relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#f5f5f7] cursor-pointer",
			title: `Click to preview ${item.name} photo in large screen`,
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MediaImage, {
					src: item.image,
					alt: item.imageAlt,
					className: "h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 31,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "absolute top-3 left-3 flex items-center gap-1.5 pointer-events-none",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "rounded-full border border-black/[0.06] bg-white/80 backdrop-blur-md px-3 py-1 text-[11px] font-medium text-[#1d1d1f] shadow-2xs",
						children: item.intent === "hire" ? "Plant Hire" : "Direct Supply"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 39,
						columnNumber: 13
					}, this), item.badge ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "rounded-full border border-black/[0.06] bg-white/70 backdrop-blur-md px-2.5 py-1 text-[11px] font-medium text-[#6e6e73]",
						children: item.badge
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 43,
						columnNumber: 15
					}, this) : null]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 38,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "absolute top-3 right-3 flex items-center gap-1.5",
					children: [allPhotos.length > 1 && /* @__PURE__ */ (void 0)("span", {
						className: "flex items-center gap-1 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-md shadow-xs",
						children: [/* @__PURE__ */ (void 0)(Images, { className: "size-3" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 53,
							columnNumber: 17
						}, this), /* @__PURE__ */ (void 0)("span", { children: allPhotos.length }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 54,
							columnNumber: 17
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 52,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: (e) => {
							e.stopPropagation();
							setLightboxOpen(true);
						},
						className: "flex items-center gap-1 rounded-full bg-black/60 hover:bg-black text-white px-2.5 py-1 text-[11px] font-medium backdrop-blur-md shadow-sm transition-all sm:opacity-0 sm:group-hover:opacity-100 active:scale-95 cursor-pointer",
						title: "Open full photo in large screen",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Maximize2, { className: "size-3" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 66,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "hidden sm:inline",
							children: "Preview"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 67,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 57,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 50,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 18,
			columnNumber: 9
		}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: "flex flex-1 flex-col pt-4 px-1 pb-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex items-center justify-between text-[11px] font-medium text-[#86868b] tracking-wider uppercase",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: item.spec ?? item.category }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 75,
						columnNumber: 13
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 74,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
					className: "mt-1.5 text-[17px] font-semibold tracking-tight text-[#1d1d1f]",
					children: item.name
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 78,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-1.5 flex-1 text-xs leading-relaxed text-[#6e6e73] line-clamp-2",
					children: item.blurb
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 82,
					columnNumber: 11
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-4 pt-3 border-t border-black/[0.04] flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-[10px] font-medium text-[#86868b] uppercase tracking-wider block",
						children: item.intent === "hire" ? "Hire Rate" : "Indicative Price"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 89,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "text-xs font-semibold text-[#1d1d1f]",
						children: item.price ?? item.priceNote ?? "Inquire for quote"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 92,
						columnNumber: 15
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 88,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => setLightboxOpen(true),
							className: "inline-flex items-center gap-1 rounded-full bg-black/[0.05] hover:bg-black/[0.1] text-[#1d1d1f] px-3 py-1.5 text-xs font-semibold transition-all active:scale-95 cursor-pointer",
							title: "View machine photos",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Maximize2, { className: "size-3" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 104,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "hidden xs:inline",
								children: "Photos"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 105,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 98,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: whatsappUrl(message),
							className: "inline-flex items-center gap-1.5 rounded-full bg-[#1fa855]/12 hover:bg-[#1fa855] text-[#1b7a40] hover:text-white px-3.5 py-1.5 text-xs font-semibold transition-all active:scale-95",
							title: "Inquire on WhatsApp",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WhatsAppIcon, { className: "size-3.5 shrink-0" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 113,
								columnNumber: 17
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Inquire" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 114,
								columnNumber: 17
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 108,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 97,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 87,
					columnNumber: 11
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName,
			lineNumber: 73,
			columnNumber: 9
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 16,
		columnNumber: 7
	}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductPhotoLightbox, {
		isOpen: lightboxOpen,
		onClose: () => setLightboxOpen(false),
		title: item.name,
		category: item.category,
		spec: item.spec,
		price: item.price ?? item.priceNote,
		intent: item.intent,
		images: allPhotos
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 122,
		columnNumber: 7
	}, this)] }, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 15,
		columnNumber: 5
	}, this);
}
//#endregion
export { EquipmentCard as t };
