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
import JSON5 from "json5";
import React from "react";
import { ViewDialog, ViewPanel, ViewSpinner } from "../view";
import Styles from "./manager.module.css";
// eslint-disable-next-line @typescript-eslint/no-empty-function
const EMPTY_FUNCTION = () => { };
export default class ModalManager {
    constructor() {
        this.modals = [];
        this.setModals = EMPTY_FUNCTION;
    }
    show(params) {
        const modal = Object.assign({ align: "", padding: "1em", transitionDuration: 300, autoClosable: true, background: "var(--theme-color-neutral-2-4)", onClose: EMPTY_FUNCTION, status: "new" }, params);
        this.setModals([...this.modals, modal]);
        return () => {
            modal.status = "closing";
            this.setModals(this.modals.filter((m) => m !== modal));
        };
    }
    wait(content, promise, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                const hide = this.show(Object.assign(Object.assign({}, params), { content: (_jsx("div", { className: Styles.wait, children: _jsx(ViewSpinner, { children: content }) })) }));
                promise
                    .then((arg) => {
                    hide();
                    window.setTimeout(() => resolve(arg));
                })
                    .catch((ex) => {
                    hide();
                    window.setTimeout(() => reject(ex));
                });
            });
        });
    }
    error(content, params) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                const hide = this.show(Object.assign(Object.assign({}, params), { onClose() {
                        if (params === null || params === void 0 ? void 0 : params.onClose)
                            params.onClose();
                        hide();
                        resolve();
                    }, content: (_jsx(ViewDialog, { buttonValidate: {
                            onClick() {
                                hide();
                                resolve();
                            },
                        }, children: _jsx("div", { className: Styles.error, children: renderHumanFriendlyErrorContent(content) }) })) }));
            });
        });
    }
    confirm(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                var _a;
                const hide = this.show(Object.assign(Object.assign({}, params), { onClose() {
                        if (params.onClose)
                            params.onClose();
                        resolve(false);
                    }, content: (_jsx(ViewPanel, { shadow: 9, children: _jsx(ViewDialog, { buttonCancel: {
                                onClick() {
                                    hide();
                                    resolve(false);
                                },
                                children: params.labelCancel,
                            }, buttonValidate: {
                                onClick() {
                                    hide();
                                    resolve(true);
                                },
                                color: params.accent === true
                                    ? "tertiary-5"
                                    : "secondary-5",
                                children: (_a = params.labelOK) !== null && _a !== void 0 ? _a : (typeof params.content === "string"
                                    ? params.content
                                    : "OK"),
                            }, title: params.title, children: params.content }) })) }));
            });
        });
    }
    info(content, params) {
        return new Promise((resolve) => {
            const hide = this.show(Object.assign(Object.assign({}, params), { onClose() {
                    if (params === null || params === void 0 ? void 0 : params.onClose)
                        params.onClose();
                    hide();
                    resolve();
                }, content: (_jsx(ViewDialog, { buttonValidate: {
                        variant: "text",
                        onClick() {
                            hide();
                            resolve();
                        },
                    }, children: content })) }));
        });
    }
}
export function renderHumanFriendlyErrorContent(content) {
    if (typeof content === "string")
        return _jsx("div", { children: content });
    if (content instanceof Error)
        return (_jsxs("div", { children: [_jsx("b", { children: content.name }), _jsx("br", {}), content.message] }));
    if (typeof content === "object" && React.isValidElement(content))
        return content;
    return _jsx("pre", { children: JSON5.stringify(content, null, "  ") });
}
//# sourceMappingURL=manager.js.map