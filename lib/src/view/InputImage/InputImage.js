var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect } from "react";
import { Theme } from "../../theme";
import { styleChild } from "../../theme/styles/child";
import { ViewPanel } from "../Panel";
import { ViewTouchable } from "../Touchable";
import IconLoading from "../icons/IconLoading";
import Styles from "./InputImage.module.css";
export function ViewInputImage(props) {
    const { value, onChange, width, height, busyIcon: BusyIcon = IconLoading, } = props;
    const refCanvas = React.useRef(null);
    const refInput = React.useRef(null);
    const [busy, setBusy] = React.useState(false);
    const paintOnCanvas = useCanvasPainter(value, refCanvas);
    const style = Object.assign({}, styleChild(props));
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
    return (_jsx(ViewTouchable, { onClick: triggerFileInput, children: _jsxs("div", { className: Theme.classNames.join(props.className, Styles.InputImage), style: Object.assign(Object.assign({}, style), { maxWidth: `${width}px`, height: 0, paddingBottom: `${(100 * height) / width}%` }), children: [_jsx("canvas", { width: width, height: height, ref: refCanvas }), _jsx(ViewPanel, { className: busy ? Styles.busy : Styles.notBusy, display: "grid", placeItems: "center", color: "neutral-1-5", children: _jsx(BusyIcon, { size: "XL", animate: true }) }), _jsx("input", { ref: refInput, type: "file", style: { display: "none" }, accept: "image/*", multiple: false, onChange: handleImport })] }) }));
}
function useCanvasPainter(value, refCanvas) {
    const importImage = React.useCallback((url) => __awaiter(this, void 0, void 0, function* () {
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
    useEffect(() => {
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
//# sourceMappingURL=InputImage.js.map