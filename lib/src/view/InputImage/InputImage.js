"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewInputImage = void 0;
const react_1 = __importStar(require("react"));
const theme_1 = require("../../theme");
const child_1 = require("../../theme/styles/child");
const Panel_1 = require("../Panel");
const Touchable_1 = require("../Touchable");
const IconLoading_1 = __importDefault(require("../icons/IconLoading"));
const InputImage_module_css_1 = __importDefault(require("./InputImage.module.css"));
function ViewInputImage(props) {
    const { value, onChange, width, height, busyIcon: BusyIcon = IconLoading_1.default, } = props;
    const refCanvas = react_1.default.useRef(null);
    const refInput = react_1.default.useRef(null);
    const [busy, setBusy] = react_1.default.useState(false);
    const paintOnCanvas = useCanvasPainter(value, refCanvas);
    const style = Object.assign({}, (0, child_1.styleChild)(props));
    const handleImport = (evt) => {
        var _a;
        const input = evt.target;
        if (!input)
            return;
        const file = (_a = input.files) === null || _a === void 0 ? void 0 : _a[0];
        if (!file)
            return;
        try {
            setBusy(true);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                const url = reader.result;
                if (typeof url !== "string") {
                    console.error("URL should be a string and not a:", url);
                    return;
                }
                paintOnCanvas(url)
                    .then((dataUrl) => {
                    if (dataUrl)
                        onChange(dataUrl);
                })
                    .catch(console.error);
            });
            reader.addEventListener("error", (ex) => {
                console.error(`Unable to load file "${file.name}":`, ex);
            });
            reader.readAsDataURL(file);
        }
        catch (ex) {
            console.error("Error in handleFileChange(): ");
            console.error(ex);
        }
        finally {
            setBusy(false);
        }
    };
    const triggerFileInput = () => {
        const input = refInput.current;
        if (!input)
            return;
        input.click();
    };
    return (react_1.default.createElement(Touchable_1.ViewTouchable, { onClick: triggerFileInput },
        react_1.default.createElement("div", { className: theme_1.Theme.classNames.join(props.className, InputImage_module_css_1.default.InputImage), style: Object.assign(Object.assign({}, style), { maxWidth: `${width}px`, height: 0, paddingBottom: `${(100 * height) / width}%` }) },
            react_1.default.createElement("canvas", { width: width, height: height, ref: refCanvas }),
            react_1.default.createElement(Panel_1.ViewPanel, { className: busy ? InputImage_module_css_1.default.busy : InputImage_module_css_1.default.notBusy, display: "grid", placeItems: "center", color: "neutral-1-5" },
                react_1.default.createElement(BusyIcon, { size: "XL", animate: true })),
            react_1.default.createElement("input", { ref: refInput, type: "file", style: { display: "none" }, accept: "image/*", multiple: false, onChange: handleImport }))));
}
exports.ViewInputImage = ViewInputImage;
function useCanvasPainter(value, refCanvas) {
    const importImage = react_1.default.useCallback((url) => __awaiter(this, void 0, void 0, function* () {
        const img = yield loadImage(url);
        if (!img)
            return null;
        const canvas = refCanvas.current;
        if (canvas) {
            const ctx = canvas.getContext("2d");
            if (!ctx)
                throw Error("unable to get a 2D context!");
            const w = canvas.width;
            const h = canvas.height;
            ctx.clearRect(0, 0, w, h);
            const scaleX = w / img.width;
            const scaleY = h / img.height;
            const scale = Math.max(scaleX, scaleY);
            const dw = img.width * scale;
            const dh = img.height * scale;
            const x = 0.5 * (w - dw);
            const y = 0.5 * (h - dh);
            ctx.drawImage(img, x, y, dw, dh);
            const dataUrl = canvas.toDataURL("image/webp", 0.7);
            return dataUrl === value ? null : dataUrl;
        }
        return null;
    }), [refCanvas, value]);
    (0, react_1.useEffect)(() => {
        void importImage(value);
    }, [importImage, value]);
    return importImage;
}
function loadImage(url) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            const img = new Image();
            img.crossOrigin = "Anonymous";
            img.onload = () => {
                resolve(img);
            };
            img.onerror = () => {
                console.error("Unable to load image:", url);
                resolve(null);
            };
            img.src = url;
        });
    });
}
