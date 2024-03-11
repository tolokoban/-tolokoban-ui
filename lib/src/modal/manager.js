"use strict";
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
exports.renderHumanFriendlyErrorContent = void 0;
const json5_1 = __importDefault(require("json5"));
const react_1 = __importDefault(require("react"));
const view_1 = require("../view");
const manager_module_css_1 = __importDefault(require("./manager.module.css"));
// eslint-disable-next-line @typescript-eslint/no-empty-function
const EMPTY_FUNCTION = () => { };
class ModalManager {
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
                const hide = this.show(Object.assign(Object.assign({}, params), { content: (react_1.default.createElement("div", { className: manager_module_css_1.default.wait },
                        react_1.default.createElement(view_1.ViewSpinner, null, content))) }));
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
                    }, content: (react_1.default.createElement(view_1.ViewDialog, { buttonValidate: {
                            onClick() {
                                hide();
                                resolve();
                            },
                        } },
                        react_1.default.createElement("div", { className: manager_module_css_1.default.error }, renderHumanFriendlyErrorContent(content)))) }));
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
                    }, content: (react_1.default.createElement(view_1.ViewPanel, { shadow: 9 },
                        react_1.default.createElement(view_1.ViewDialog, { buttonCancel: {
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
                            }, title: params.title }, params.content))) }));
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
                }, content: (react_1.default.createElement(view_1.ViewDialog, { buttonValidate: {
                        variant: "text",
                        onClick() {
                            hide();
                            resolve();
                        },
                    } }, content)) }));
        });
    }
}
exports.default = ModalManager;
function renderHumanFriendlyErrorContent(content) {
    if (typeof content === "string")
        return react_1.default.createElement("div", null, content);
    if (content instanceof Error)
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("b", null, content.name),
            react_1.default.createElement("br", null),
            content.message));
    if (typeof content === "object" && react_1.default.isValidElement(content))
        return content;
    return react_1.default.createElement("pre", null, json5_1.default.stringify(content, null, "  "));
}
exports.renderHumanFriendlyErrorContent = renderHumanFriendlyErrorContent;
