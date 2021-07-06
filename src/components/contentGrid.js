import React from "react";
import { css } from "@emotion/react";

const SContentGrid = css`
grid-column: 1/-1;
`;

const ContentGrid = ({children}) => {
    return (
        <div css={SContentGrid}>
            {children}
        </div>
    )
};

export default ContentGrid;
