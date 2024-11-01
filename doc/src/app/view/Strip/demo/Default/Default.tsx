import React from "react"
import { ViewPanel, ViewStrip } from "@tolokoban/ui"

export default function Demo() {
    return (
        <ViewStrip maxHeight="600px" width="480px">
            <ViewPanel color="primary-2">This is the header</ViewPanel>
            <ViewPanel color="neutral-1">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
                <p>
                    Scelerisque eu ultrices vitae auctor eu augue ut. Quis
                    eleifend quam adipiscing vitae. Cursus metus aliquam
                    eleifend mi in nulla posuere sollicitudin. Mauris nunc
                    congue nisi vitae suscipit tellus. Massa sed elementum
                    tempus egestas sed sed risus pretium. Pulvinar neque laoreet
                    suspendisse interdum consectetur. Eget mauris pharetra et
                    ultrices neque ornare aenean euismod elementum. Malesuada
                    pellentesque elit eget gravida cum sociis natoque penatibus
                    et. Libero enim sed faucibus turpis in. Et malesuada fames
                    ac turpis egestas. Nibh mauris cursus mattis molestie a
                    iaculis at erat. Nisl purus in mollis nunc sed id semper
                    risus.
                </p>
            </ViewPanel>
        </ViewStrip>
    )
}
