import { i as __toESM } from "../_runtime.mjs";
import { d as whatsappUrl, l as services, t as cn } from "./site-NmzgmCl5.mjs";
import { l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { J as Check } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { m as WhatsAppIcon, o as addInboundLeadToCRM, p as WhatsAppBadge } from "./router-BlHuFhrd.mjs";
import { t as Input } from "./input-CTJDZhh-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quote-form-C2Qsd-5M.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$2 = "/app/applet/src/components/ui/label.tsx";
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("label", {
		className: cn("text-sm font-medium text-foreground", className),
		...props
	}, void 0, false, {
		fileName: _jsxFileName$2,
		lineNumber: 5,
		columnNumber: 5
	}, this);
}
var _jsxFileName$1 = "/app/applet/src/components/ui/textarea.tsx";
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("textarea", {
		className: cn("flex min-h-32 w-full rounded-xl bg-card px-3.5 py-3 text-sm text-foreground shadow-[0_0_0_1px_rgba(0,0,0,0.08)] transition-[box-shadow] duration-150 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_var(--color-background),0_0_0_4px_var(--color-ring)] disabled:cursor-not-allowed disabled:opacity-50", className),
		...props
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 5,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/components/quote-form.tsx";
var intents = [
	"Buy",
	"Hire",
	"Both",
	"General"
];
function QuoteForm({ defaultService = "" }) {
	const [sent, setSent] = (0, import_react.useState)(false);
	const [waUrl, setWaUrl] = (0, import_react.useState)("");
	const [selectedIntent, setSelectedIntent] = (0, import_react.useState)("Buy");
	const [selectedService, setSelectedService] = (0, import_react.useState)(defaultService);
	function onSubmit(event) {
		event.preventDefault();
		const form = new FormData(event.currentTarget);
		const payload = {
			name: String(form.get("name") ?? "").trim(),
			phone: String(form.get("phone") ?? "").trim(),
			email: String(form.get("email") ?? "").trim(),
			service: selectedService || String(form.get("service") ?? "").trim(),
			intent: selectedIntent,
			message: String(form.get("message") ?? "").trim(),
			location: String(form.get("location") ?? "").trim(),
			at: (/* @__PURE__ */ new Date()).toISOString()
		};
		try {
			localStorage.setItem("omnicore-last-quote", JSON.stringify(payload));
			addInboundLeadToCRM({
				name: payload.name,
				phone: payload.phone,
				email: payload.email,
				service: payload.service,
				intent: payload.intent,
				message: payload.message,
				location: payload.location
			});
		} catch {}
		const text = [
			`Hello Omnicore Harare Desk, I need a machinery quote.`,
			`Name: ${payload.name || "Client"}.`,
			`Requirement: ${payload.intent}.`,
			payload.service ? `Category: ${payload.service}.` : "",
			payload.location ? `Site/Location: ${payload.location}.` : "",
			payload.message ? `Details: ${payload.message}.` : "",
			payload.phone ? `Phone: ${payload.phone}` : "",
			payload.email ? `Email: ${payload.email}` : ""
		].filter(Boolean).join("\n");
		const url = whatsappUrl(text);
		setWaUrl(url);
		setSent(true);
	}
	if (sent) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
		className: "rounded-3xl bg-white p-8 sm:p-10 border border-black/[0.06] shadow-xs text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mx-auto flex size-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Check, { className: "size-5" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 74,
					columnNumber: 11
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 73,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
				className: "mt-4 text-xl font-semibold tracking-tight text-[#1d1d1f]",
				children: "Ready to send on WhatsApp"
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 76,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-2 text-xs sm:text-sm leading-relaxed text-[#6e6e73]",
				children: "Your machinery requirement is compiled. Launch WhatsApp to chat directly with our Cranborne engineering staff."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 79,
				columnNumber: 9
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-6 flex flex-col gap-2.5 max-w-xs mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
					href: waUrl,
					className: "flex items-center justify-center gap-2 rounded-full bg-[#1fa855] py-3 text-xs sm:text-sm font-semibold text-white shadow-[0_4px_14px_rgba(31,168,85,0.25)] hover:bg-[#1b934b] transition-all active:scale-95",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WhatsAppIcon, { className: "size-5 shrink-0" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 88,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Launch WhatsApp Desk" }, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 89,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 84,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
					type: "button",
					onClick: () => setSent(false),
					className: "text-xs text-[#86868b] hover:text-[#1d1d1f] transition-colors py-1",
					children: "← Edit details"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 92,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 83,
				columnNumber: 9
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 72,
		columnNumber: 7
	}, this);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", {
		onSubmit,
		className: "flex flex-col rounded-3xl bg-white p-6 sm:p-10 border border-black/[0.06] shadow-xs",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "text-xl font-semibold tracking-tight text-[#1d1d1f]",
					children: "Request equipment pricing"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 111,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
					className: "mt-0.5 text-xs text-[#86868b]",
					children: "Direct quote from Harare desk with stock status & rates."
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 114,
					columnNumber: 11
				}, this)] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 110,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WhatsAppBadge, {
					compact: true,
					label: "Live Desk"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 118,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 109,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-6 space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid gap-3 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
								htmlFor: "quote-name",
								className: "text-xs font-medium text-[#1d1d1f]",
								children: "Name / Company *"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 125,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
								id: "quote-name",
								name: "name",
								required: true,
								placeholder: "e.g. Tendai Moyo",
								className: "h-10 rounded-xl text-xs bg-[#fbfbfd] border-black/[0.08] focus:border-[#0071e3]"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 128,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 124,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
								htmlFor: "quote-phone",
								className: "text-xs font-medium text-[#1d1d1f]",
								children: "WhatsApp Phone *"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 137,
								columnNumber: 13
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
								id: "quote-phone",
								name: "phone",
								type: "tel",
								required: true,
								placeholder: "+263 7...",
								className: "h-10 rounded-xl text-xs bg-[#fbfbfd] border-black/[0.08] focus:border-[#0071e3]"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 140,
								columnNumber: 13
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 136,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 123,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
							className: "text-xs font-medium text-[#1d1d1f]",
							children: "Inquiry Type"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 153,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "grid grid-cols-4 gap-1 p-1 rounded-full bg-black/[0.04]",
							children: intents.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
								type: "button",
								onClick: () => setSelectedIntent(item),
								className: `h-8 rounded-full text-xs font-medium transition-all ${selectedIntent === item ? "bg-white text-[#1d1d1f] shadow-2xs font-semibold" : "text-[#6e6e73] hover:text-[#1d1d1f]"}`,
								children: item
							}, item, false, {
								fileName: _jsxFileName,
								lineNumber: 156,
								columnNumber: 15
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 154,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 152,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
							htmlFor: "quote-service",
							className: "text-xs font-medium text-[#1d1d1f]",
							children: "Machinery Category"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 174,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("select", {
							id: "quote-service",
							name: "service",
							value: selectedService,
							onChange: (e) => setSelectedService(e.target.value),
							className: "flex h-10 w-full rounded-xl border border-black/[0.08] bg-[#fbfbfd] px-3 text-xs text-[#1d1d1f] focus:border-[#0071e3] focus:outline-hidden",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
								value: "",
								children: "Select machinery category..."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 184,
								columnNumber: 13
							}, this), services.map((service) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("option", {
								value: service.title,
								children: service.title
							}, service.slug, false, {
								fileName: _jsxFileName,
								lineNumber: 186,
								columnNumber: 15
							}, this))]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 177,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 173,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
							htmlFor: "quote-location",
							className: "text-xs font-medium text-[#1d1d1f]",
							children: "Site / Delivery Location in Zimbabwe"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 195,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							id: "quote-location",
							name: "location",
							placeholder: "e.g. Kadoma Claim, Norton Farm, Harare Site",
							className: "h-10 rounded-xl text-xs bg-[#fbfbfd] border-black/[0.08] focus:border-[#0071e3]"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 198,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 194,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Label, {
							htmlFor: "quote-message",
							className: "text-xs font-medium text-[#1d1d1f]",
							children: "Machine Specifications / Output Requirements"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 208,
							columnNumber: 11
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Textarea, {
							id: "quote-message",
							name: "message",
							rows: 3,
							placeholder: "Specify tonnage per hour, duration of hire, diesel or electric...",
							className: "rounded-xl text-xs bg-[#fbfbfd] border-black/[0.08] focus:border-[#0071e3] resize-none"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 211,
							columnNumber: 11
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 207,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 121,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
				type: "submit",
				className: "mt-6 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#1d1d1f] text-xs font-medium text-white shadow-xs hover:bg-[#333336] transition-colors",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Format Quote on WhatsApp" }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 225,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 221,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				className: "mt-2.5 text-center text-[11px] text-[#86868b]",
				children: "Direct response from Harare technical desk during working hours."
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 228,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 105,
		columnNumber: 5
	}, this);
}
//#endregion
export { QuoteForm as t };
