import React from "react";
import { css } from "@emotion/react";

import Header from "./header";
import MainGrid from "./mainGrid";
import Footer from "./footer";

const GridContainer = css`
display: grid;
grid-template-rows: 56px 1fr auto;
// align-content: flex-start;
// grid-template-columns: repeat(12, minmax(12px, 64px));
// grid-column-gap: 1.5rem;
// grid-template-rows: auto;
// justify-content: center;

@media screen and (max-width: 600px) {
grid-gap: 0;
grid-template-columns: repeat(6, 1fr);
grid-template-rows: 48px 1fr auto;
min-height: 100vh;
padding: 0;
}
`;

const Layout = ({ children }) => (
        <div css={GridContainer}>
            <Header />
            <MainGrid>
                {children}
            </MainGrid>
            <Footer />
        </div>
);

export default Layout;
