import { d as whatsappUrl } from "./site-NmzgmCl5.mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { f as WhatsAppIcon } from "./router-fxs5xZaR.mjs";
import { t as MediaImage } from "./media-image-BLH74n9U.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/equipment-card-CFoLGv9i.js
var import_jsx_runtime = require_jsx_runtime();
function EquipmentCard({ item }) {
	const message = `Hello Omnicore, I would like to inquire about the ${item.name} (${item.intent === "hire" ? "Hire" : "Purchase"}). Please provide current availability and pricing.`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group flex flex-col overflow-hidden rounded-3xl bg-white border border-black/[0.06] p-4 transition-all duration-300 hover:border-black/[0.12] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:-translate-y-0.5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#f5f5f7]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaImage, {
				src: item.image,
				alt: item.imageAlt,
				className: "h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute top-3 left-3 flex items-center gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full border border-black/[0.06] bg-white/80 backdrop-blur-md px-3 py-1 text-[11px] font-medium text-[#1d1d1f] shadow-2xs",
					children: item.intent === "hire" ? "Plant Hire" : "Direct Supply"
				}), item.badge ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "rounded-full border border-black/[0.06] bg-white/70 backdrop-blur-md px-2.5 py-1 text-[11px] font-medium text-[#6e6e73]",
					children: item.badge
				}) : null]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col pt-4 px-1 pb-1",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-between text-[11px] font-medium text-[#86868b] tracking-wider uppercase",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.spec ?? item.category })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1.5 text-[17px] font-semibold tracking-tight text-[#1d1d1f]",
					children: item.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1.5 flex-1 text-xs leading-relaxed text-[#6e6e73] line-clamp-2",
					children: item.blurb
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 pt-3 border-t border-black/[0.04] flex items-center justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[10px] font-medium text-[#86868b] uppercase tracking-wider block",
						children: item.intent === "hire" ? "Hire Rate" : "Indicative Price"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs font-semibold text-[#1d1d1f]",
						children: item.price ?? item.priceNote ?? "Inquire for quote"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: whatsappUrl(message),
						className: "inline-flex items-center gap-1.5 rounded-full bg-[#1fa855]/12 hover:bg-[#1fa855] text-[#1b7a40] hover:text-white px-3.5 py-1.5 text-xs font-semibold transition-all active:scale-95",
						title: "Inquire on WhatsApp",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppIcon, { className: "size-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Inquire" })]
					})]
				})
			]
		})]
	});
}
//#endregion
export { EquipmentCard as t };
