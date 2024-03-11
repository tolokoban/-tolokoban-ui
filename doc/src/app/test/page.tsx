import { ViewButton, ViewInputFile } from "@tolokoban/ui"

export default function TestPage() {
    return (
        <div>
            <ViewButton>Test button</ViewButton>
            <ViewInputFile onLoad={console.log}>Import file</ViewInputFile>
        </div>
    )
}
