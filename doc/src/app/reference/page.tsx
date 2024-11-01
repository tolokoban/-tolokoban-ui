import React from "react"

import Styles from "./page.module.css"

export default function PageReference() {
    return <iframe className={Styles.reference} src="/api"></iframe>
}
