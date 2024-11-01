import React from "react"
import { ViewScroll } from "@tolokoban/ui"

export default function Demo() {
    return (
        <ViewScroll>
            <ol>
                {new Array(100).map((_, index) => (
                    <li key={index}>
                        Odit vel molestiae sed ea voluptatibus aut unde
                        quisquam. Quia harum nihil aliquam. Illum beatae et
                        voluptas quaerat et fugiat. Iste eaque rem provident
                        dignissimos quasi totam tempora ratione. Nemo temporibus
                        hic pariatur atque soluta aspernatur porro ut. Facilis
                        et possimus minus quod dolor.
                    </li>
                ))}
            </ol>
        </ViewScroll>
    )
}
