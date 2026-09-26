import { a as hireRates, d as whatsappUrl, n as equipment, t as cn } from "./_ssr/site-NmzgmCl5.mjs";
import { a as Trigger2, i as Root2, n as Header, r as Item, t as Content2 } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { N as CircleCheck, U as ArrowRight, z as ChevronDown } from "./_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "./_libs/react.mjs";
import { f as WhatsAppIcon, n as Route } from "./_ssr/router-ElrjEM6V.mjs";
import { t as MediaImage } from "./_ssr/media-image-Br_gzV9I.mjs";
import { t as EquipmentCard } from "./_ssr/equipment-card-CDmBp7RH.mjs";
import { t as QuoteForm } from "./_ssr/quote-form-BWJeINYo.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-BzOulOld.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName$1 = "/app/applet/src/components/ui/accordion.tsx";
function Accordion({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Root2, {
		className: cn("w-full", className),
		...props
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 9,
		columnNumber: 10
	}, this);
}
function AccordionItem({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Item, {
		className: cn("border-b border-border", className),
		...props
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 17,
		columnNumber: 5
	}, this);
}
function AccordionTrigger({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {
		className: "flex",
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Trigger2, {
			className: cn("flex flex-1 items-center justify-between gap-4 py-5 text-left text-base font-medium transition-colors hover:text-muted-foreground [&[data-state=open]>svg]:rotate-180", className),
			...props,
			children: [children, /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ChevronDown, { className: "size-4 shrink-0 text-muted-foreground transition-transform duration-200" }, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 39,
				columnNumber: 9
			}, this)]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 31,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 30,
		columnNumber: 5
	}, this);
}
function AccordionContent({ className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Content2, {
		className: "overflow-hidden text-sm text-muted-foreground data-[state=closed]:animate-none",
		...props,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
			className: cn("pb-5 leading-relaxed", className),
			children
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 55,
			columnNumber: 7
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 51,
		columnNumber: 5
	}, this);
}
var _jsxFileName = "/app/applet/src/routes/services/$slug.tsx?tsr-split=component";
function ServicePage() {
	const { service } = Route.useLoaderData();
	const related = equipment.filter((item) => item.category === service.slug);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
		className: "pb-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
						className: "inline-block rounded-full bg-black/[0.04] px-3.5 py-1 text-xs font-medium text-[#1d1d1f]",
						children: [service.eyebrow, " · Cranborne Desk"]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 19,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "mt-4 text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl",
						children: service.headline
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 23,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-4 text-base leading-relaxed text-[#6e6e73]",
						children: service.summary
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 27,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/quote",
							className: "inline-flex h-11 items-center justify-center rounded-full bg-[#1d1d1f] px-6 text-xs font-medium text-white shadow-xs hover:bg-[#333336] transition-all",
							children: "Get Firm Quote"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 32,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: whatsappUrl(`Hello Omnicore Harare Desk, I need a direct quote for ${service.title}.`),
							className: "inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#1fa855] px-5 text-xs font-semibold text-white shadow-[0_4px_14px_rgba(31,168,85,0.25)] transition-all hover:bg-[#1b934b] active:scale-95",
							children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WhatsAppIcon, { className: "size-4 shrink-0" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 36,
								columnNumber: 15
							}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Chat on WhatsApp" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 37,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 35,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 31,
						columnNumber: 11
					}, this)
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 18,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "overflow-hidden rounded-3xl border border-black/[0.06] bg-[#f5f5f7] shadow-xs",
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MediaImage, {
						src: service.image,
						alt: service.imageAlt,
						className: "aspect-16/10 w-full object-cover"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 43,
						columnNumber: 11
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 42,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 17,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "mx-auto max-w-6xl px-4 py-8 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
					className: "text-xs font-semibold tracking-wider text-[#86868b] uppercase mb-4",
					children: "Field Capabilities & Zimbabwe Standards"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 49,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "grid gap-3 sm:grid-cols-2",
					children: service.bullets.map((bullet) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex items-start gap-3 rounded-2xl border border-black/[0.06] bg-white p-5 transition-all",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CircleCheck, { className: "size-4 shrink-0 text-emerald-600 mt-0.5" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 54,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs sm:text-sm text-[#1d1d1f] leading-relaxed",
							children: bullet
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 55,
							columnNumber: 15
						}, this)]
					}, bullet, true, {
						fileName: _jsxFileName,
						lineNumber: 53,
						columnNumber: 42
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 52,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 48,
				columnNumber: 7
			}, this),
			service.slug === "hire" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs font-semibold tracking-wider text-[#86868b] uppercase",
						children: "Plant Hire Rate Card"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 66,
						columnNumber: 15
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
						className: "text-2xl font-semibold tracking-tight text-[#1d1d1f] sm:text-3xl",
						children: "Wet and dry hire, firm transparency."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 69,
						columnNumber: 15
					}, this)] }, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 65,
						columnNumber: 13
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
						href: whatsappUrl("Hello Omnicore, I want to book equipment hire."),
						className: "inline-flex items-center gap-1.5 text-xs font-medium text-[#0071e3] hover:underline",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Book dates on WhatsApp" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 74,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "size-3" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 75,
							columnNumber: 15
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 73,
						columnNumber: 13
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 64,
					columnNumber: 11
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-6 overflow-hidden rounded-3xl border border-black/[0.06] bg-white shadow-xs",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "hidden grid-cols-4 gap-4 border-b border-black/[0.06] bg-[#f5f5f7] px-6 py-3.5 text-xs font-semibold text-[#1d1d1f] uppercase tracking-wider md:grid",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Machinery Model" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 81,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Capacity / Output" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 82,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Wet Hire Rate" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 83,
								columnNumber: 15
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: "Dry Hire Rate" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 84,
								columnNumber: 15
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 80,
						columnNumber: 13
					}, this), hireRates.map((row) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "grid gap-1 border-b border-black/[0.04] px-6 py-4 transition-colors hover:bg-black/[0.02] last:border-0 md:grid-cols-4 md:gap-4 md:items-center text-xs",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "font-semibold text-[#1d1d1f]",
								children: row.machine
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 87,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-[#6e6e73]",
								children: row.output
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 88,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "font-medium text-[#1d1d1f]",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "md:hidden text-[#86868b] mr-1",
									children: "Wet:"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 90,
									columnNumber: 19
								}, this), row.wet]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 89,
								columnNumber: 17
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "text-[#6e6e73]",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
									className: "md:hidden text-[#86868b] mr-1",
									children: "Dry:"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 94,
									columnNumber: 19
								}, this), row.dry]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 93,
								columnNumber: 17
							}, this)
						]
					}, row.machine, true, {
						fileName: _jsxFileName,
						lineNumber: 86,
						columnNumber: 35
					}, this))]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 79,
					columnNumber: 11
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 63,
				columnNumber: 34
			}, this) : null,
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "mx-auto max-w-6xl px-4 py-12 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "text-2xl font-semibold tracking-tight text-[#1d1d1f] sm:text-3xl",
					children: "Machinery in this division"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 103,
					columnNumber: 9
				}, this), related.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: related.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EquipmentCard, { item }, item.id, false, {
						fileName: _jsxFileName,
						lineNumber: 107,
						columnNumber: 34
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 106,
					columnNumber: 31
				}, this) : null]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 102,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "mx-auto max-w-6xl px-4 py-8 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
					className: "text-2xl font-semibold tracking-tight text-[#1d1d1f] sm:text-3xl",
					children: "Frequently asked questions"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 113,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Accordion, {
					type: "single",
					collapsible: true,
					className: "mt-4 rounded-3xl border border-black/[0.06] bg-white p-4 shadow-xs",
					children: service.faqs.map((faq) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionItem, {
						value: faq.q,
						className: "border-b border-black/[0.04] last:border-0",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionTrigger, {
							className: "text-sm font-semibold text-[#1d1d1f] hover:text-[#0071e3] py-4",
							children: faq.q
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 118,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(AccordionContent, {
							className: "text-xs sm:text-sm text-[#6e6e73] leading-relaxed pb-4",
							children: faq.a
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 121,
							columnNumber: 15
						}, this)]
					}, faq.q, true, {
						fileName: _jsxFileName,
						lineNumber: 117,
						columnNumber: 36
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 116,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 112,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "mx-auto max-w-3xl px-4 py-12 sm:px-6",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(QuoteForm, { defaultService: service.title }, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 130,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 129,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 15,
		columnNumber: 10
	}, this);
}
//#endregion
export { ServicePage as component };
