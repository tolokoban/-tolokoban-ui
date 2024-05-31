import React, { useEffect } from "react"

import { Theme } from "../../theme/index.js"
import { ChildStyleProps, styleChild } from "../../theme/styles/child.js"
import { ViewWithValue } from "../../types.js"
import { ViewPanel } from "../Panel/index.js"
import { ViewTouchable } from "../Touchable/index.js"
import IconLoading from "../icons/IconLoading.js"
import { GenericIconProps } from "../icons/generic/index.js"

import BackURL from "./back.jpg"

import Styles from "./InputImage.module.css"
import { ViewLabel } from "../Label"

export interface InputImageProps
    extends ViewWithValue<string | undefined>,
        ChildStyleProps {
    className?: string
    label?: React.ReactNode
    /** Image width */
    width: number
    /** Image height */
    height: number
    busyIcon?: React.FC<GenericIconProps>
}

export function ViewInputImage(props: InputImageProps) {
    const {
        value,
        onChange,
        width,
        height,
        busyIcon: BusyIcon = IconLoading,
    } = props
    const refCanvas = React.useRef<HTMLCanvasElement | null>(null)
    const refInput = React.useRef<HTMLInputElement | null>(null)
    const [busy, setBusy] = React.useState(false)
    const paintOnCanvas = useCanvasPainter(value, refCanvas)
    const style: React.CSSProperties = {
        ...styleChild(props),
    }
    const handleImport = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const input = evt.target
        if (!input) return

        const file = input.files?.[0]
        if (!file) return

        try {
            setBusy(true)
            const reader = new FileReader()
            reader.addEventListener("load", () => {
                const url = reader.result
                if (typeof url !== "string") {
                    console.error("URL should be a string and not a:", url)
                    return
                }
                paintOnCanvas(url)
                    .then((dataUrl) => {
                        if (dataUrl) onChange?.(dataUrl)
                    })
                    .catch(console.error)
            })
            reader.addEventListener("error", (ex) => {
                console.error(`Unable to load file "${file.name}":`, ex)
            })
            reader.readAsDataURL(file)
        } catch (ex) {
            console.error("Error in handleFileChange(): ")
            console.error(ex)
        } finally {
            setBusy(false)
        }
    }
    const triggerFileInput = () => {
        const input = refInput.current
        if (!input) return

        input.click()
    }
    return (
        <ViewLabel value={props.label}>
            <ViewTouchable onClick={triggerFileInput}>
                <div
                    className={Theme.classNames.join(
                        props.className,
                        Styles.InputImage
                    )}
                    style={{
                        ...style,
                        maxWidth: `${width}px`,
                        height: 0,
                        paddingBottom: `${(100 * height) / width}%`,
                        backgroundImage: `url(${BackURL})`,
                    }}
                >
                    <canvas
                        width={width}
                        height={height}
                        ref={refCanvas}
                    ></canvas>
                    <ViewPanel
                        className={busy ? Styles.busy : Styles.notBusy}
                        display="grid"
                        placeItems="center"
                        color="neutral-1-5"
                    >
                        <BusyIcon size="XL" animate />
                    </ViewPanel>
                    <input
                        ref={refInput}
                        type="file"
                        style={{ display: "none" }}
                        accept="image/*"
                        multiple={false}
                        onChange={handleImport}
                    />
                </div>
            </ViewTouchable>
        </ViewLabel>
    )
}

function useCanvasPainter(
    value: string | undefined,
    refCanvas: React.MutableRefObject<HTMLCanvasElement | null>
) {
    const importImage = React.useCallback(
        async (url: string): Promise<string | null> => {
            const img = await loadImage(url)
            if (!img) return null

            const canvas = refCanvas.current
            if (canvas) {
                const ctx = canvas.getContext("2d")
                if (!ctx) throw Error("unable to get a 2D context!")

                const w = canvas.width
                const h = canvas.height
                ctx.clearRect(0, 0, w, h)
                const scaleX = w / img.width
                const scaleY = h / img.height
                const scale = Math.max(scaleX, scaleY)
                const dw = img.width * scale
                const dh = img.height * scale
                const x = 0.5 * (w - dw)
                const y = 0.5 * (h - dh)
                ctx.drawImage(img, x, y, dw, dh)
                const dataUrl = canvas.toDataURL("image/webp", 0.7)
                return dataUrl === value ? null : dataUrl
            }
            return null
        },
        [refCanvas, value]
    )
    useEffect(() => {
        if (value) void importImage(value)
    }, [importImage, value])
    return importImage
}

async function loadImage(url: string): Promise<HTMLImageElement | null> {
    return new Promise((resolve) => {
        const img = new Image()
        img.crossOrigin = "Anonymous"
        img.onload = () => {
            resolve(img)
        }
        img.onerror = () => {
            console.error("Unable to load image:", url)
            resolve(null)
        }
        img.src = url
    })
}
