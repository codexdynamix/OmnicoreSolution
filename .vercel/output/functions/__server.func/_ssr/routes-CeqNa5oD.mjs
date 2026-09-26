import { i as __toESM } from "../_runtime.mjs";
import { d as whatsappUrl, l as services, n as equipment, u as site } from "./site-NmzgmCl5.mjs";
import { l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Z as ArrowRight, f as ShieldCheck, i as Wrench, s as Truck, v as PhoneCall } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { c as getStoredSiteCopy, m as WhatsAppIcon, s as getStoredEquipment } from "./router-BlHuFhrd.mjs";
import { t as MediaImage } from "./media-image-Br_gzV9I.mjs";
import { t as EquipmentCard } from "./equipment-card-C2_2Hz1_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CeqNa5oD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/index.tsx?tsr-split=component";
var featuredIds = [
	"jaw-crusher",
	"excavator-hire",
	"concrete-pump",
	"electric-fence",
	"farm-hammer-mill",
	"ball-mill"
];
function Home() {
	const [copy, setCopy] = (0, import_react.useState)(getStoredSiteCopy);
	const [equipmentList, setEquipmentList] = (0, import_react.useState)(getStoredEquipment);
	(0, import_react.useEffect)(() => {
		function onUpdate() {
			setCopy(getStoredSiteCopy());
			setEquipmentList(getStoredEquipment());
		}
		window.addEventListener("omnicore-copy-updated", onUpdate);
		window.addEventListener("omnicore-equipment-updated", onUpdate);
		return () => {
			window.removeEventListener("omnicore-copy-updated", onUpdate);
			window.removeEventListener("omnicore-equipment-updated", onUpdate);
		};
	}, []);
	const featuredEquipment = featuredIds.map((id) => equipmentList.find((item) => item.id === id) || equipment.find((item) => item.id === id)).filter((item) => Boolean(item));
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
		className: "relative overflow-hidden bg-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("script", {
				type: "application/ld+json",
				dangerouslySetInnerHTML: { __html: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "LocalBusiness",
					name: copy.name || site.name,
					description: copy.heroSubheadline || site.description,
					telephone: copy.primaryPhone || site.phoneTel,
					email: copy.email || site.email,
					address: {
						"@type": "PostalAddress",
						streetAddress: copy.yardAddressLine1 || site.address.line1,
						addressLocality: "Harare",
						addressCountry: "ZW"
					},
					url: "https://omnicoresolutions.co.zw"
				}) }
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 27,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "relative min-h-[88vh] overflow-hidden bg-ink text-paper",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "absolute inset-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
							src: "/images/hero.jpg",
							alt: "Omnicore yard: jaw crusher, self-loading mixer and boom pump on Zimbabwe laterite",
							className: "size-full object-cover object-center"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 47,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-to-r from-ink/82 via-ink/55 to-ink/25" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 48,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/70 to-transparent" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 49,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 46,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "flex flex-wrap items-center gap-2",
							children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "inline-flex w-fit items-center gap-2 rounded-full border border-paper/15 bg-ink/40 px-3.5 py-1.5 text-xs font-medium text-paper/90 backdrop-blur-sm",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-2 rounded-full bg-whatsapp" }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 55,
									columnNumber: 15
								}, this), copy.heroBadge || "Cranborne yard · 115 Chiremba Road, Harare"]
							}, void 0, true, {
								fileName: _jsxFileName,
								lineNumber: 54,
								columnNumber: 13
							}, this)
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 53,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
							className: "mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-paper sm:text-6xl lg:text-7xl",
							children: copy.heroHeadline || "Plant for Zimbabwe’s mines, farms and pours."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 60,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mt-5 max-w-xl text-base leading-relaxed text-paper/80 sm:text-lg",
							children: copy.heroSubheadline || "Gold circuits, fence plant, self-loading mixers, excavators and farm mills — specified in Harare, delivered nationwide, commissioned on the ground."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 63,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-8 flex flex-wrap items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: `https://wa.me/${copy.whatsappNumber || site.whatsappNumber}?text=${encodeURIComponent(copy.whatsappMessage || "Hello Omnicore Harare Desk — I need a fast quote for machinery.")}`,
									className: "inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-whatsapp px-6 text-sm font-semibold text-paper transition-transform hover:brightness-110 active:scale-95",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WhatsAppIcon, { className: "size-5 shrink-0" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 69,
										columnNumber: 15
									}, this), copy.heroCtaPrimary || "Chat on WhatsApp"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 68,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: "/quote",
									className: "inline-flex h-12 items-center justify-center gap-2 rounded-full bg-paper px-6 text-sm font-semibold text-ink transition-transform hover:bg-card active:scale-95",
									children: [copy.heroCtaSecondary || "Request a firm quote", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "size-4" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 74,
										columnNumber: 15
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 72,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: "/catalogue",
									className: "inline-flex h-12 items-center justify-center rounded-full border border-paper/25 px-5 text-sm font-medium text-paper/90 hover:bg-paper/10",
									children: copy.heroCtaTertiary || "Open the catalogue"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 76,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 67,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4",
							children: [
								{
									label: copy.stat1Label || "Harare hub",
									detail: copy.stat1Detail || "Cranborne yard"
								},
								{
									label: copy.stat2Label || "1–25 TPH",
									detail: copy.stat2Detail || "Gold circuits"
								},
								{
									label: copy.stat3Label || "Wet & dry",
									detail: copy.stat3Detail || "Plant hire"
								},
								{
									label: copy.stat4Label || "10 provinces",
									detail: copy.stat4Detail || "Lowbed delivery"
								}
							].map((stat) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								className: "border-t border-paper/20 pt-3",
								children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-sm font-semibold text-paper",
									children: stat.label
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 95,
									columnNumber: 17
								}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "text-xs text-paper/65",
									children: stat.detail
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 96,
									columnNumber: 17
								}, this)]
							}, stat.label, true, {
								fileName: _jsxFileName,
								lineNumber: 94,
								columnNumber: 26
							}, this))
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 81,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 52,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 45,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "border-t border-border bg-paper py-16 sm:py-24",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mx-auto max-w-6xl px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
							children: "Five worlds of plant"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 106,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "mt-1 text-2xl font-semibold tracking-tight text-foreground sm:text-4xl",
							children: "Not one yellow truck. Five different jobs."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 107,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 105,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/services",
							className: "inline-flex items-center text-sm font-medium text-accent hover:underline",
							children: ["All divisions", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "ml-1 size-3.5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 113,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 111,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 104,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-10 grid gap-4 md:grid-cols-12",
						children: services.map((service, index) => {
							const span = index === 0 ? "md:col-span-7 md:row-span-2 min-h-[320px] md:min-h-[540px]" : index === 1 || index === 2 ? "md:col-span-5 min-h-[240px] md:min-h-[260px]" : "md:col-span-6 min-h-[220px] md:min-h-[260px]";
							return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
								to: "/services/$slug",
								params: { slug: service.slug },
								className: `group relative overflow-hidden rounded-3xl ${span}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "photo-frame absolute inset-0",
										children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MediaImage, {
											src: service.image,
											alt: service.imageAlt,
											framed: false
										}, void 0, false, {
											fileName: _jsxFileName,
											lineNumber: 124,
											columnNumber: 21
										}, this)
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 123,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/25 to-transparent" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 126,
										columnNumber: 19
									}, this),
									/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
										className: "absolute inset-x-0 bottom-0 p-5 sm:p-7",
										children: [
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "text-[11px] font-semibold uppercase tracking-wider text-paper/70",
												children: service.eyebrow
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 128,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
												className: "mt-1 text-xl font-semibold text-paper sm:text-2xl",
												children: service.title
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 129,
												columnNumber: 21
											}, this),
											/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
												className: "mt-2 max-w-md text-xs leading-relaxed text-paper/80 sm:text-sm",
												children: service.headline
											}, void 0, false, {
												fileName: _jsxFileName,
												lineNumber: 130,
												columnNumber: 21
											}, this)
										]
									}, void 0, true, {
										fileName: _jsxFileName,
										lineNumber: 127,
										columnNumber: 19
									}, this)
								]
							}, service.slug, true, {
								fileName: _jsxFileName,
								lineNumber: 120,
								columnNumber: 20
							}, this);
						})
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 117,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 103,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 102,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "border-t border-border bg-secondary/50 py-16 sm:py-24",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mx-auto max-w-6xl px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
							children: "From the Cranborne yard"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 142,
							columnNumber: 15
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "mt-1 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl",
							children: "A catalogue that actually looks like the machines."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 143,
							columnNumber: 15
						}, this)] }, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 141,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
							to: "/catalogue",
							className: "inline-flex items-center text-sm font-medium text-accent hover:underline",
							children: ["Full stock list", /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ArrowRight, { className: "ml-1 size-3.5" }, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 149,
								columnNumber: 15
							}, this)]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 147,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 140,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
						children: featuredEquipment.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EquipmentCard, { item }, item.id, false, {
							fileName: _jsxFileName,
							lineNumber: 154,
							columnNumber: 44
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 153,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 139,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 138,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "border-t border-border bg-paper py-16 sm:py-24",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mx-auto max-w-6xl px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mx-auto max-w-2xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground",
								children: "The Cranborne standard"
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 162,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
								className: "mt-1 text-2xl font-semibold tracking-tight text-foreground sm:text-4xl",
								children: "Engineered for Zimbabwe conditions."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 163,
								columnNumber: 13
							}, this),
							/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: "We do not drop crates at the border. Omnicore delivers tested plant configured for local ores, power grids, and haul roads."
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 166,
								columnNumber: 13
							}, this)
						]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 161,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-12 grid gap-6 sm:grid-cols-3",
						children: [
							{
								icon: ShieldCheck,
								title: "Pre-delivery testing",
								body: "Jaw crushers, mills, slurry pumps and generators are run up in Cranborne before they leave the yard."
							},
							{
								icon: Wrench,
								title: "On-site commissioning",
								body: "Staff travel with the plant for anchoring, alignment, electrics and the first-tonne run-up."
							},
							{
								icon: Truck,
								title: "Provincial logistics",
								body: "Lowbed and flatbed from Harare to Bulawayo, Kadoma, Gweru, Kwekwe, Mutare, Chinhoyi and remote claims."
							}
						].map((pillar) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "rounded-3xl border border-border bg-card p-8",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex size-11 items-center justify-center rounded-2xl bg-accent/10 text-accent",
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(pillar.icon, { className: "size-5" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 186,
										columnNumber: 19
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 185,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
									className: "mt-5 text-base font-semibold text-foreground",
									children: pillar.title
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 188,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-2 text-sm leading-relaxed text-muted-foreground",
									children: pillar.body
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 189,
									columnNumber: 17
								}, this)
							]
						}, pillar.title, true, {
							fileName: _jsxFileName,
							lineNumber: 184,
							columnNumber: 28
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 171,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 160,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 159,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "border-t border-border bg-ink py-16 text-paper sm:py-20",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mx-auto max-w-6xl px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mx-auto max-w-2xl text-center",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "text-xs font-semibold uppercase tracking-wider text-paper/55",
							children: "Nationwide footprint"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 198,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "mt-1 text-2xl font-semibold tracking-tight sm:text-3xl",
							children: "Active machinery across Zimbabwe."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 199,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 197,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
						children: [
							{
								city: "Midlands",
								focus: "Kwekwe · Gweru · Shurugwi",
								desc: "Gold milling circuits and trommel plants."
							},
							{
								city: "Mashonaland West",
								focus: "Kadoma · Chinhoyi",
								desc: "Hammer mills, jaw crushers and excavators."
							},
							{
								city: "Matabeleland",
								focus: "Bulawayo · Gwanda",
								desc: "Winches and high-tonnage ball mills."
							},
							{
								city: "Harare & surrounds",
								focus: "Cranborne · Msasa · Ruwa",
								desc: "Hire, fence machines and mixers."
							}
						].map((hub) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "rounded-2xl border border-paper/10 bg-paper/5 p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
									className: "flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h4", {
										className: "text-sm font-semibold",
										children: hub.city
									}, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 220,
										columnNumber: 19
									}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "size-2 rounded-full bg-whatsapp" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 221,
										columnNumber: 19
									}, this)]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 219,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-1 text-xs font-medium text-paper/70",
									children: hub.focus
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 223,
									columnNumber: 17
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
									className: "mt-2 text-xs leading-relaxed text-paper/55",
									children: hub.desc
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 224,
									columnNumber: 17
								}, this)
							]
						}, hub.city, true, {
							fileName: _jsxFileName,
							lineNumber: 218,
							columnNumber: 25
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 201,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 196,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 195,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", {
				className: "border-t border-border bg-paper py-20",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "mx-auto max-w-4xl px-4 text-center sm:px-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", {
							className: "inline-block rounded-full bg-whatsapp/12 px-4 py-1 text-xs font-semibold text-whatsapp",
							children: "Fast turnaround · Direct Harare support"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 232,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", {
							className: "mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl",
							children: "Need specs, hire dates, or a firm quote?"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 235,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
							className: "mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base",
							children: "The Cranborne desk answers on WhatsApp with stock photos of the actual machine, pro-forma invoices, and freight."
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 238,
							columnNumber: 11
						}, this),
						/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
							className: "mt-8 flex flex-wrap items-center justify-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: whatsappUrl("Hello Omnicore Harare Desk — I need a fast quote."),
									className: "inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-whatsapp px-7 text-sm font-semibold text-paper hover:brightness-110",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(WhatsAppIcon, { className: "size-5 shrink-0" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 243,
										columnNumber: 15
									}, this), "WhatsApp Harare Desk"]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 242,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
									to: "/quote",
									className: "inline-flex h-12 items-center justify-center rounded-full bg-ink px-7 text-sm font-semibold text-paper hover:bg-foreground",
									children: "Request tender / pro-forma"
								}, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 246,
									columnNumber: 13
								}, this),
								/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
									href: `tel:${site.phoneTel}`,
									className: "inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-card px-6 text-sm font-medium text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PhoneCall, { className: "size-4 text-accent" }, void 0, false, {
										fileName: _jsxFileName,
										lineNumber: 250,
										columnNumber: 15
									}, this), site.phoneDisplay]
								}, void 0, true, {
									fileName: _jsxFileName,
									lineNumber: 249,
									columnNumber: 13
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName,
							lineNumber: 241,
							columnNumber: 11
						}, this)
					]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 231,
					columnNumber: 9
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 230,
				columnNumber: 7
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 26,
		columnNumber: 10
	}, this);
}
//#endregion
export { Home as component };
