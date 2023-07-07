import React from "react"
import { ViewPanel } from "@tolokoban/ui"
import { RouterProvider, createHashRouter } from "react-router-dom"

import ViewsList from "@/view/generated/ViewsList"
import ViewsRoutes from "@/routes/view"
import "./App.css"

const router = createHashRouter([
    {
        path: "/view/:name",
        element: <ViewsRoutes />,
    },
    {
        path: "/",
        element: <p>Click on something on the left navigation panel...</p>,
        errorElement: <p>This page does not exist!</p>,
    },
])

export default function App() {
    return (
        <ViewPanel
            className="App"
            position="absolute"
            width="100%"
            height="100%"
            display="flex"
            alignItems="stretch"
            justifyContent="flex-start"
        >
            <ViewPanel color="primary-1" padding="M">
                <h1>View</h1>
                <ViewsList />
            </ViewPanel>
            <ViewPanel color="neutral-5" flex="1" padding={0} overflow="auto">
                <RouterProvider router={router} />
            </ViewPanel>
        </ViewPanel>
    )
}
