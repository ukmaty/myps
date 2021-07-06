import React from "react";
import { css } from "@emotion/react";

const SMainGrid = css`
grid-column: 1 / -1;

display: grid;
align-content: flex-start;
grid-template-columns: repeat(12, minmax(12px, 64px));
grid-gap: 1.5rem;
grid-template-rows: auto;
justify-content: center;

padding-top: 2rem;
padding-bottom: 2rem;
background-color: #fbf4f1;

animation: fadeIn 2s ease 0s 1 normal;

@media screen and (max-width: 600px) {
grid-column-gap: 0;
grid-row-gap: 1rem;
grid-template-columns: repeat(6, 1fr);
padding-top: 1rem;
padding-bottom: 1rem;
// padding: 0;
}

@media screen and (max-width: 1031px) {
padding-right: 1rem; 
padding-left: 1rem; 
}
`;

const MainGrid = ({children}) => {
    return (
        <main css={SMainGrid}>
            {children}
        </main>
    )
};

export default MainGrid;
