import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useContext } from "react";
import ModalContainer from "./container";
import ModalManager from "./manager";
import Styles from "./provider.module.css";
const ModalContext = React.createContext(new ModalManager());
export function ModalProvider({ children }) {
    const [manager, setManager] = React.useState(null);
    const [modals, setModals] = React.useState([]);
    const handleRemove = (modal) => {
        modal.onClose();
        setModals(modals.filter((m) => m !== modal));
    };
    if (manager) {
        manager.modals = modals;
        manager.setModals = setModals;
    }
    React.useEffect(() => {
        setManager(new ModalManager());
    }, []);
    return (_jsxs(ModalContext.Provider, { value: manager, children: [children, _jsx("div", { className: Styles.screen, children: modals.map((modal, index) => (_jsx(ModalContainer, { options: modal, onClose: handleRemove }, index))) })] }));
}
export function useModal() {
    var _a;
    return (_a = useContext(ModalContext)) !== null && _a !== void 0 ? _a : new ModalManager();
}
//# sourceMappingURL=provider.js.map