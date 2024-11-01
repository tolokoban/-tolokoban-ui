import React from "react"

export interface ErrorBoundaryProps {
    fallback: React.ReactNode
    children: React.ReactNode
    onError?(error: Error, info: React.ErrorInfo): void
}

interface ErrorBoundaryState {
    hasError: boolean
}

export class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(
        error: unknown
    ): Partial<ErrorBoundaryState> | null {
        console.error("Error catched in the ErrorBoundary:", error)
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    componentDidCatch(error: Error, info: React.ErrorInfo) {
        console.log(
            "🚀 [ErrorBoundary.componentDidCatch()] error, info = ",
            error,
            info
        ) // @FIXME: Remove this line written on 2024-06-06 at 10:31
        this.props.onError?.(error, info)
    }

    render() {
        return this.state.hasError ? this.props.fallback : this.props.children
    }
}
