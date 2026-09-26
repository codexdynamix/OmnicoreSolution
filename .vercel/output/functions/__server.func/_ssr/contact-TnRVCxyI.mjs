import { u as site } from "./site-NmzgmCl5.mjs";
import { B as Clock, T as MapPin, V as CircleCheck, X as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { d as GoogleMapsBadge, f as PhoneBadge, l as useSiteCopy, m as WhatsAppIcon, p as WhatsAppBadge, u as GmailBadge } from "./router-yhOZ7KUE.mjs";
import { t as QuoteForm } from "./quote-form-B46N_mYp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-TnRVCxyI.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/contact.tsx?tsr-split=component";
function ContactPage() {
	const copy = useSiteCopy();
	const phoneDisplay = copy.primaryPhone || site.phoneDisplay;
	const phoneTel = copy.primaryPhoneTel || site.phoneTel;
	const phoneAltDisplay = copy.secondaryPhone || site.phoneAltDisplay;
	const phoneAltTel = copy.secondaryPhoneTel || site.phoneAltTel;
	const email = copy.email || site.email;
	const whatsappNum = copy.whatsappNumber || site.whatsappNumber;
	const whatsappMsg = copy.whatsappMessage || "Hello Omnicore Harare Desk — I would like an equipment quote.";
	const mapsUrl = copy.googleMapsUrl || site.address.maps;
	const addressLine1 = copy.yardAddressLine1 || site.address.line1;
	const addressLine2 = copy.yardAddressLine2 || site.address.line2;
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
		className: "mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs font-semibold tracking-wider text-[#86868b] uppercase",
						children: ["Harare Desk & Yard · ", addressLine2]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 21,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl",
						children: "Contact our engineers."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 24,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-1 max-w-2xl text-sm leading-relaxed text-[#6e6e73]",
						children: [
							addressLine1,
							", ",
							addressLine2,
							". Direct WhatsApp, voice calling, and email lines. We provide firm price and hire availability for sites across Zimbabwe."
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 27,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 20,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: `https://wa.me/${whatsappNum}?text=${encodeURIComponent(whatsappMsg)}`,
						className: "group flex flex-col justify-between rounded-3xl bg-white p-6 border border-black/[0.06] shadow-xs transition-all duration-300 hover:border-black/[0.12] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:-translate-y-0.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WhatsAppBadge, { label: "WhatsApp" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 38,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, { className: "size-4 text-[#86868b] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#1d1d1f]" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 39,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 37,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-4 text-sm font-semibold text-[#1d1d1f]",
								children: phoneDisplay
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 41,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-1 text-xs text-[#86868b] leading-relaxed",
								children: ["Instant quotes, plant photos & voice notes. ", copy.responseSLA || "Average reply: <15 mins."]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 44,
								columnNumber: 13
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 36,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-4 pt-3 border-t border-black/[0.04] text-[11px] font-medium text-[#1d1d1f]",
							children: "Open WhatsApp Chat →"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 48,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 35,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: `tel:${phoneAltTel}`,
						className: "group flex flex-col justify-between rounded-3xl bg-white p-6 border border-black/[0.06] shadow-xs transition-all duration-300 hover:border-black/[0.12] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:-translate-y-0.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PhoneBadge, { label: "Voice Calling" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 57,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, { className: "size-4 text-[#86868b] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#1d1d1f]" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 58,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 56,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-4 text-sm font-semibold text-[#1d1d1f]",
								children: phoneAltDisplay
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 60,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-1 text-xs text-[#86868b] leading-relaxed",
								children: "Urgent yard dispatch line, operator bookings & driver coordination."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 63,
								columnNumber: 13
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 55,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-4 pt-3 border-t border-black/[0.04] text-[11px] font-medium text-[#1d1d1f]",
							children: "Call Cranborne Desk →"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 67,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 54,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: `mailto:${email}`,
						className: "group flex flex-col justify-between rounded-3xl bg-white p-6 border border-black/[0.06] shadow-xs transition-all duration-300 hover:border-black/[0.12] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:-translate-y-0.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GmailBadge, { label: "Official Email" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 76,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, { className: "size-4 text-[#86868b] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#1d1d1f]" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 77,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 75,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-4 text-sm font-semibold text-[#1d1d1f] truncate",
								children: email
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 79,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-1 text-xs text-[#86868b] leading-relaxed",
								children: "Company pro-forma invoices, tender documents and equipment specifications."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 82,
								columnNumber: 13
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 74,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-4 pt-3 border-t border-black/[0.04] text-[11px] font-medium text-[#1d1d1f]",
							children: "Send Official Email →"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 86,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 73,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: mapsUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "group flex flex-col justify-between rounded-3xl bg-white p-6 border border-black/[0.06] shadow-xs transition-all duration-300 hover:border-black/[0.12] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:-translate-y-0.5",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(GoogleMapsBadge, { label: "Google Maps" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 95,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, { className: "size-4 text-[#86868b] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#1d1d1f]" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 96,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 94,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-4 text-sm font-semibold text-[#1d1d1f]",
								children: addressLine1
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 98,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-1 text-xs text-[#86868b] leading-relaxed",
								children: [addressLine2, ". Easy lowbed and flatbed truck loading access."]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 101,
								columnNumber: 13
							}, this)
						] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 93,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-4 pt-3 border-t border-black/[0.04] text-[11px] font-medium text-[#1d1d1f]",
							children: "Open Map Pin →"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 105,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 92,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 33,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-6 rounded-3xl bg-[#f5f5f7] p-6 border border-black/[0.06]",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex size-9 items-center justify-center rounded-full bg-white text-[#1d1d1f] shadow-2xs",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Clock, { className: "size-4" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 116,
								columnNumber: 15
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 115,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs font-semibold text-[#1d1d1f]",
							children: "Yard & Demonstration Hours"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 119,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs text-[#86868b]",
							children: "Open for physical machine inspection & loading"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 122,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 118,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 114,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-wrap gap-2 text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "rounded-full bg-white px-3.5 py-1 text-xs text-[#1d1d1f] border border-black/[0.06]",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[#86868b] mr-1.5",
									children: "Mon – Fri:"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 129,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "font-medium",
									children: copy.hoursWeekday || "08:00 – 17:00"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 130,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 128,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "rounded-full bg-white px-3.5 py-1 text-xs text-[#1d1d1f] border border-black/[0.06]",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[#86868b] mr-1.5",
									children: "Saturday:"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 133,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "font-medium",
									children: copy.hoursSaturday || "08:00 – 13:00"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 134,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 132,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "rounded-full bg-white px-3.5 py-1 text-xs text-[#1d1d1f] border border-black/[0.06]",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "text-[#86868b] mr-1.5",
									children: "Sunday:"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 137,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "font-medium",
									children: copy.hoursSunday || "Closed · WhatsApp monitored"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 138,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 136,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 127,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 113,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 112,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-10 grid gap-8 lg:grid-cols-2 lg:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QuoteForm, {}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 146,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "rounded-3xl bg-white p-6 sm:p-8 border border-black/[0.06] shadow-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
								className: "inline-flex items-center gap-1.5 rounded-full bg-black/[0.04] px-3 py-1 text-xs font-medium text-[#1d1d1f]",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MapPin, { className: "size-3.5 text-[#0071e3]" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 152,
									columnNumber: 15
								}, this), "Harare Physical Yard"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 151,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
								href: mapsUrl,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center gap-1 text-xs font-medium text-[#0071e3] hover:underline",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Google Maps Pin" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 156,
									columnNumber: 15
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, { className: "size-3.5" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 157,
									columnNumber: 15
								}, this)]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 155,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 150,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "mt-4 text-xl font-semibold tracking-tight text-[#1d1d1f]",
							children: "Visiting the Cranborne Yard."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 161,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-2 text-xs sm:text-sm leading-relaxed text-[#6e6e73]",
							children: copy.yardDirectionsNote || "Along Chiremba Road, close to major Harare arterial routes. Heavy machinery can be inspected, demonstrated, and loaded onto lowbeds directly from our yard."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 164,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-6 space-y-2.5 rounded-2xl bg-[#f5f5f7] p-4 text-xs text-[#1d1d1f]",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "size-4 shrink-0 text-emerald-600 mt-0.5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 170,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Crane & Overhead Loading:" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 171,
										columnNumber: 21
									}, this), " Industrial rigging available on-site for secure truck loading."] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 171,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 169,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "size-4 shrink-0 text-emerald-600 mt-0.5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 174,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Live Machinery Run-Up:" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 175,
										columnNumber: 21
									}, this), " Testing of diesel engines, jaw crushers, and pumps before release."] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 175,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 173,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-start gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "size-4 shrink-0 text-emerald-600 mt-0.5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 178,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", { children: "Nationwide Waybills:" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 179,
										columnNumber: 21
									}, this), " Cross-country delivery arranged to Bulawayo, Gweru, Mutare, Kadoma, and mining claims."] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 179,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 177,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 168,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-6 flex flex-wrap gap-2.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: mapsUrl,
									target: "_blank",
									rel: "noopener noreferrer",
									className: "inline-flex h-10 items-center justify-center gap-1.5 rounded-full bg-[#1d1d1f] px-5 text-xs font-medium text-white shadow-xs hover:bg-[#333336] transition-colors",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Get Directions" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 185,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowUpRight, { className: "size-3" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 186,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 184,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: `tel:${phoneTel}`,
									className: "inline-flex h-10 items-center justify-center gap-1.5 rounded-full border border-black/[0.1] bg-white px-4 text-xs font-medium text-[#1d1d1f] shadow-2xs hover:bg-[#f5f5f7] transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: ["Call: ", phoneDisplay] }, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 189,
										columnNumber: 15
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 188,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: `https://wa.me/${whatsappNum}?text=${encodeURIComponent("Hello! I am planning to visit the Cranborne yard today.")}`,
									className: "inline-flex h-10 items-center justify-center gap-2 rounded-full bg-[#1fa855] px-5 text-xs font-semibold text-white shadow-[0_4px_14px_rgba(31,168,85,0.25)] hover:bg-[#1b934b] transition-all active:scale-95",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WhatsAppIcon, { className: "size-4 shrink-0" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 192,
										columnNumber: 15
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Notify Yard on WhatsApp" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 193,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 191,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 183,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 149,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 145,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 18,
		columnNumber: 10
	}, this);
}
//#endregion
export { ContactPage as component };
