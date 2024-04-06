import JSON5 from "json5"
import React from "react"

import { Children } from "../types"
import { ViewDialog, ViewPanel, ViewSpinner } from "../view/index"
import {
    ConfirmParams,
    Modal,
    ModalManagerInterface,
    ModalParams,
} from "./types"

import Styles from "./manager.module.css"
import { GenericEvent } from "../util/event"

// eslint-disable-next-line @typescript-eslint/no-empty-function
const EMPTY_FUNCTION = () => {}

export default class ModalManager implements ModalManagerInterface {
    private readonly eventModalsChange = new GenericEvent()
    private modals: Modal[] = []
    private counter = 1

    useModals(): Modal[] {
        const [modals, setModals] = React.useState([...this.modals])
        React.useEffect(() => {
            const update = () => setModals([...this.modals])
            this.eventModalsChange.addListener(update)
            return () => this.eventModalsChange.removeListener(update)
        }, [])
        return modals
    }

    hide(modal: Modal) {
        console.log("[Modal] hide:", modal)
        if (!modal) {
            const last = this.modals.pop()
            if (!last) return

            last.status = "closing"
        } else {
            modal.status = "closing"
            this.modals = this.modals.filter((m) => m !== modal)
        }
        this.fire()
    }

    show(params: ModalParams) {
        const modal: Modal = {
            align: "",
            padding: "1em",
            transitionDuration: 300,
            autoClosable: true,
            background: "var(--theme-color-neutral-1-5)",
            onClose: EMPTY_FUNCTION,
            status: "new",
            name: `Modal#${this.counter++}`,
            ...params,
        }
        console.log("[Modal] show:", modal)
        this.modals.push(modal)
        this.fire()
        return () => {
            this.hide(modal)
        }
    }

    async wait<T>(
        content: Children,
        promise: Promise<T>,
        params?: Partial<Omit<ModalParams, "content">>
    ): Promise<T> {
        return new Promise((resolve, reject) => {
            const hide = this.show({
                ...params,
                content: (
                    <div className={Styles.wait}>
                        <ViewSpinner>{content}</ViewSpinner>
                    </div>
                ),
            })
            promise
                .then((arg: T) => {
                    hide()
                    window.setTimeout(() => resolve(arg))
                })
                .catch((ex) => {
                    hide()
                    window.setTimeout(() => reject(ex))
                })
        })
    }

    async error(
        content: unknown,
        params?: Partial<ModalParams>
    ): Promise<void> {
        return new Promise((resolve) => {
            const hide = this.show({
                ...params,
                onClose: resolve,
                content: (
                    <ViewDialog
                        buttonValidate={{
                            onClick() {
                                hide()
                                resolve()
                            },
                        }}
                    >
                        <div className={Styles.error}>
                            {renderHumanFriendlyErrorContent(content)}
                        </div>
                    </ViewDialog>
                ),
            })
        })
    }

    async confirm(params: ConfirmParams): Promise<boolean> {
        return new Promise((resolve) => {
            const hide = this.show({
                ...params,
                onClose() {
                    resolve(false)
                },
                content: (
                    <ViewPanel shadow={9} color="neutral-3">
                        <ViewDialog
                            buttonCancel={{
                                onClick() {
                                    hide()
                                    resolve(false)
                                },
                                children: params.labelCancel ?? "Cancel",
                            }}
                            buttonValidate={{
                                onClick() {
                                    hide()
                                    resolve(true)
                                },
                                color:
                                    params.accent === true
                                        ? "tertiary-5"
                                        : "secondary-5",
                                children:
                                    params.labelOK ??
                                    (typeof params.content === "string"
                                        ? params.content
                                        : "OK"),
                            }}
                            title={params.title}
                        >
                            {params.content}
                        </ViewDialog>
                    </ViewPanel>
                ),
            })
        })
    }

    info(
        content: Children,
        params?: Partial<Omit<ModalParams, "content">> | undefined
    ): Promise<void> {
        return new Promise((resolve) => {
            const hide = this.show({
                ...params,
                onClose: resolve,
                content: (
                    <ViewDialog
                        buttonValidate={{
                            variant: "text",
                            color: "primary-5",
                            onClick() {
                                hide()
                                resolve()
                            },
                        }}
                    >
                        <ViewPanel padding="L">{content}</ViewPanel>
                    </ViewDialog>
                ),
            })
        })
    }

    private fire() {
        console.log(
            "Modals:",
            this.modals.map((m) => m.name)
        )
        this.eventModalsChange.dispatch()
    }
}

export function renderHumanFriendlyErrorContent(content: unknown): Children {
    if (typeof content === "string") return <div>{content}</div>
    if (content instanceof Error)
        return (
            <div>
                <b>{content.name}</b>
                <br />
                {content.message}
            </div>
        )
    if (typeof content === "object" && React.isValidElement(content))
        return content
    return <pre>{JSON5.stringify(content, null, "  ")}</pre>
}
