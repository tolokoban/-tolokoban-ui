import React from "react"
import { ViewPanel } from "@tolokoban/ui"

import PageViewSpinner from "../routes/view/Spinner"
import "./App.css"
import { RouterProvider, createHashRouter } from "react-router-dom"

const router = createHashRouter([
    {
        path: "/view/Spinner",
        element: <PageViewSpinner />,
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
            <ViewPanel
                display="flex"
                alignItems="stretch"
                color="primary-5"
                padding="M"
            >
                <ul>
                    <li>View</li>
                    <ul>
                        <li>
                            <a href="#/view/Spinner">Spinner</a>
                        </li>
                    </ul>
                </ul>
            </ViewPanel>
            <ViewPanel color="neutral-7" flex="1" padding="M" overflow="auto">
                <RouterProvider router={router} />
            </ViewPanel>
        </ViewPanel>
    )
}
