import React, { useContext } from "react"

import { Children } from "../types.js"
import ModalContainer from "./container.js"
import ModalManager from "./manager.js"
import { Modal, ModalManagerInterface } from "./types.js"

import Styles from "./provider.module.css"

const manager = new ModalManager()
const ModalContext = React.createContext<ModalManager | null>(manager)

export interface ModalProviderProps {
    children: Children
}

export function ModalProvider({ children }: ModalProviderProps) {
    const modals = manager.useModals()
    const handleRemove = (modal: Modal) => {
        manager.hide(modal)
    }
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
