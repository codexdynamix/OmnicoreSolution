import { i as __toESM } from "../_runtime.mjs";
import { d as whatsappUrl, l as services, n as equipment, t as cn } from "./site-NmzgmCl5.mjs";
import { l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { p as Search } from "../_libs/lucide-react.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
import { i as Route$7, s as getStoredEquipment } from "./router-BlHuFhrd.mjs";
import { t as EquipmentCard } from "./equipment-card-C2_2Hz1_.mjs";
import { t as Input } from "./input-CTJDZhh-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/catalogue-DYTx6zV5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/routes/catalogue.tsx?tsr-split=component";
function CataloguePage() {
	const search = Route$7.useSearch();
	const navigate = Route$7.useNavigate();
	const category = search.category ?? "all";
	const intent = search.intent ?? "all";
	const [query, setQuery] = (0, import_react.useState)(search.q ?? "");
	const [equipmentList, setEquipmentList] = (0, import_react.useState)(getStoredEquipment);
	(0, import_react.useEffect)(() => {
		function onUpdate() {
			setEquipmentList(getStoredEquipment());
		}
		window.addEventListener("omnicore-equipment-updated", onUpdate);
		return () => {
			window.removeEventListener("omnicore-equipment-updated", onUpdate);
		};
	}, []);
	const filtered = (0, import_react.useMemo)(() => {
		const q = (search.q ?? "").trim().toLowerCase();
		return (equipmentList.length > 0 ? equipmentList : equipment).filter((item) => {
			if (category !== "all" && item.category !== category) return false;
			if (intent !== "all" && item.intent !== intent) return false;
			if (!q) return true;
			return `${item.name} ${item.blurb} ${item.spec} ${item.category}`.toLowerCase().includes(q);
		});
	}, [
		search,
		category,
		intent,
		equipmentList
	]);
	function setFilter(next) {
		const nextCategory = next.category === void 0 ? search.category : next.category === "all" ? void 0 : next.category;
		const nextIntent = next.intent === void 0 ? search.intent : next.intent === "all" ? void 0 : next.intent;
		const nextQ = next.q !== void 0 ? next.q || void 0 : search.q;
		navigate({
			search: {
				category: nextCategory,
				intent: nextIntent,
				q: nextQ
			},
			replace: true
		});
	}
	const chips = [{
		label: "All Machinery",
		category: "all"
	}, ...services.map((service) => ({
		label: service.navLabel,
		category: service.slug
	}))];
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("main", {
		className: "mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "text-xs font-semibold tracking-wider text-[#86868b] uppercase",
						children: "Inventory & Fleet · Cranborne Yard"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", {
						className: "text-3xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl",
						children: "Machinery catalogue."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 73,
						columnNumber: 9
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-1 max-w-2xl text-sm leading-relaxed text-[#6e6e73]",
						children: "Browse plant and industrial equipment in stock. Direct rates, wet/dry options, and nationwide transport arranged from Harare."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 76,
						columnNumber: 9
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 69,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-8 flex flex-col gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "relative flex-1 max-w-md",
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Search, { className: "pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-[#86868b]" }, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 86,
							columnNumber: 13
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Input, {
							value: query,
							onChange: (event) => {
								const value = event.target.value;
								setQuery(value);
								setFilter({ q: value });
							},
							placeholder: "Search machinery, crushers, mixers…",
							className: "pl-11 h-11 text-xs rounded-full border-black/[0.08] bg-white shadow-2xs focus:border-[#0071e3]",
							"aria-label": "Search equipment"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 87,
							columnNumber: 13
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName,
						lineNumber: 85,
						columnNumber: 11
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "inline-flex rounded-full bg-black/[0.04] p-1 w-fit",
						children: [
							"all",
							"sale",
							"hire"
						].map((value) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
							type: "button",
							onClick: () => setFilter({ intent: value }),
							className: cn("rounded-full px-4 py-1.5 text-xs font-medium transition-all duration-150", intent === value ? "bg-white text-[#1d1d1f] shadow-2xs font-semibold" : "text-[#6e6e73] hover:text-[#1d1d1f]"),
							children: value === "all" ? "All" : value === "sale" ? "For Sale" : "Plant Hire"
						}, value, false, {
							fileName: _jsxFileName,
							lineNumber: 98,
							columnNumber: 62
						}, this))
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 97,
						columnNumber: 11
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 83,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					className: "flex flex-wrap items-center gap-1.5 pt-1",
					children: chips.map((chip) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", {
						type: "button",
						onClick: () => setFilter({ category: chip.category }),
						className: cn("rounded-full px-3.5 py-1 text-xs font-medium transition-all duration-150", category === chip.category ? "bg-[#1d1d1f] text-white" : "bg-black/[0.03] text-[#6e6e73] hover:text-[#1d1d1f] hover:bg-black/[0.06]"),
						children: chip.label
					}, chip.category, false, {
						fileName: _jsxFileName,
						lineNumber: 108,
						columnNumber: 30
					}, this))
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 107,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 82,
				columnNumber: 7
			}, this),
			/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-8 flex items-center justify-between text-xs text-[#86868b] border-b border-black/[0.04] pb-3",
				children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
					"Showing ",
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("strong", {
						className: "text-[#1d1d1f] font-medium",
						children: filtered.length
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 119,
						columnNumber: 19
					}, this),
					" items"
				] }, void 0, true, {
					fileName: _jsxFileName,
					lineNumber: 118,
					columnNumber: 9
				}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
					href: whatsappUrl("Hello Omnicore Harare Desk — I am looking for a machine not listed on the website."),
					className: "text-[#0071e3] hover:underline",
					children: "Special order? Ask Harare Desk"
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 121,
					columnNumber: 9
				}, this)]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 117,
				columnNumber: 7
			}, this),
			filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-12 rounded-3xl border border-black/[0.06] bg-white p-12 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", {
						className: "text-base font-semibold text-[#1d1d1f]",
						children: "No machinery found"
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 128,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
						className: "mt-1 text-xs text-[#86868b]",
						children: "We frequently have equipment arriving in Cranborne. Inquire directly on WhatsApp."
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 129,
						columnNumber: 11
					}, this),
					/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
						className: "mt-5 flex justify-center",
						children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", {
							href: whatsappUrl(`Hello Omnicore, I am searching for "${query}". Do you have this in stock?`),
							className: "inline-flex items-center gap-1.5 rounded-full bg-[#1d1d1f] px-5 py-2 text-xs font-medium text-white shadow-xs hover:bg-[#333336]",
							children: "Ask on WhatsApp"
						}, void 0, false, {
							fileName: _jsxFileName,
							lineNumber: 133,
							columnNumber: 13
						}, this)
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 132,
						columnNumber: 11
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 127,
				columnNumber: 32
			}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: filtered.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(EquipmentCard, { item }, item.id, false, {
					fileName: _jsxFileName,
					lineNumber: 138,
					columnNumber: 33
				}, this))
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 137,
				columnNumber: 18
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName,
		lineNumber: 67,
		columnNumber: 10
	}, this);
}
//#endregion
export { CataloguePage as component };
