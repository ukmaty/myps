import React from "react";
import {css} from "@emotion/react";

const SFooter = css`
grid-column: 1/-1;
display: flex;
justify-content: center;
padding: 3rem 0;
color: #6d728e;
font-size: .75rem;
text-align: center;
@media screen and (max-width: 600px) {
padding: 2rem 0;
}
`;

const Footer = () => {
    return (
        <footer css={SFooter}><span>© Matsui Yuki 2021</span></footer>
    )
};

export default Footer;
