import React from "react"
import { BrowserRouter } from "react-router-dom"
import { createRoot } from "react-dom/client"
import App from "./App"

const root = createRoot(document.querySelector("#root"))

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)