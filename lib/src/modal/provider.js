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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useModal = exports.ModalProvider = void 0;
const react_1 = __importStar(require("react"));
const container_1 = __importDefault(require("./container"));
const manager_1 = __importDefault(require("./manager"));
const provider_module_css_1 = __importDefault(require("./provider.module.css"));
const ModalContext = react_1.default.createContext(new manager_1.default());
function ModalProvider({ children }) {
    const [manager, setManager] = react_1.default.useState(null);
    const [modals, setModals] = react_1.default.useState([]);
    const handleRemove = (modal) => {
        modal.onClose();
        setModals(modals.filter((m) => m !== modal));
    };
    if (manager) {
        manager.modals = modals;
        manager.setModals = setModals;
    }
    react_1.default.useEffect(() => {
        setManager(new manager_1.default());
    }, []);
    return (react_1.default.createElement(ModalContext.Provider, { value: manager },
        children,
        react_1.default.createElement("div", { className: provider_module_css_1.default.screen }, modals.map((modal, index) => (react_1.default.createElement(container_1.default, { key: index, options: modal, onClose: handleRemove }))))));
}
exports.ModalProvider = ModalProvider;
function useModal() {
    var _a;
    return (_a = (0, react_1.useContext)(ModalContext)) !== null && _a !== void 0 ? _a : new manager_1.default();
}
exports.useModal = useModal;
