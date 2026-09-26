import { t as cn } from "./site-NmzgmCl5.mjs";
import { t as require_jsx_dev_runtime } from "../_libs/react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/media-image-Br_gzV9I.js
var import_jsx_dev_runtime = require_jsx_dev_runtime();
var _jsxFileName = "/app/applet/src/components/media-image.tsx";
function MediaImage({ className, framed = true, alt, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {
		alt: alt ?? "",
		referrerPolicy: "no-referrer",
		className: cn("h-full w-full object-cover", framed && "outline outline-1 -outline-offset-1 outline-foreground/10", className),
		...props
	}, void 0, false, {
		fileName: _jsxFileName,
		lineNumber: 9,
		columnNumber: 5
	}, this);
}
//#endregion
export { MediaImage as t };
