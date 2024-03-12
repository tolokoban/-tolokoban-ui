import React, { useContext } from "react"

import { Children } from "../types.js"
import ModalContainer from "./container.js"
import ModalManager from "./manager.js"
import { Modal, ModalManagerInterface } from "./types.js"

import Styles from "./provider.module.css"

const ModalContext = React.createContext<ModalManager | null>(
    new ModalManager()
)

export interface ModalProviderProps {
    children: Children
}

export function ModalProvider({ children }: ModalProviderProps) {
    const [manager, setManager] = React.useState<ModalManager | null>(null)
    const [modals, setModals] = React.useState<Modal[]>([])
    const handleRemove = (modal: Modal) => {
        modal.onClose()
        setModals(modals.filter((m) => m !== modal))
    }
    if (manager) {
        manager.modals = modals
        manager.setModals = setModals
    }
    React.useEffect(() => {
        setManager(new ModalManager())
    }, [])
    return (
        <ModalContext.Provider value={manager}>
            {children}
            <div className={Styles.screen}>
                {modals.map((modal, index) => (
                    <ModalContainer
                        key={index}
                        options={modal}
                        onClose={handleRemove}
                    />
                ))}
            </div>
        </ModalContext.Provider>
    )
}

export function useModal(): ModalManagerInterface {
    return useContext(ModalContext) ?? new ModalManager()
}
