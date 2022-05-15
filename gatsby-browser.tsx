import React from "react";
import { GatsbyBrowser } from "gatsby";

/* Components + Types */

import { Grommet, ThemeType } from "grommet";
import { GrommetHeader } from "./src/components/Grommet/React.Grommet.Header";
import { GrommetContainer } from "./src/components/Grommet/React.Grommet.Container";
import { GrommetFooter } from "./src/components/Grommet/React.Grommet.Footer";

/* Theme */

import * as theme from "./theme.json";

/* Commons.css */

import "normalize.css";
import "./src/global/css/fonts.scss"
import "./src/global/css/brand-colors.scss"

/* Commons.js */

/* Page Wrapper */

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
    element,
}) => {
    return (
        <Grommet theme={theme as ThemeType}>
            <GrommetHeader />
            <GrommetContainer>
                {element}
            </GrommetContainer>
            <GrommetFooter />
        </Grommet>
    )
}

export default wrapPageElement;