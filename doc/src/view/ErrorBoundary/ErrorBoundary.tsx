import React from "react"
import Style from "./ErrorBoundary.module.css"

export interface ErrorBoundaryProps {
    label?: string
    children: React.ReactNode
}

interface ErorBoundaryState {
    error?: Error
}

export default class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = {}
    }

    static getDerivedStateFromError(error: Error) {
        // Update state so the next render will show the fallback UI.
        return { error }
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
        console.error(error)
        console.warn(info.componentStack)
    }

    render() {
        const { error } = this.state
        if (error) {
            return (
                <div className={Style.ErrorBoundary}>
                    {this.props.label && <h1>{this.props.label}</h1>}
                    <p>
                        <b>{error.name}</b>: {error.message}
                    </p>
                </div>
            )
        }

        return this.props.children
    }
}
