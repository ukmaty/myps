import React from "react";
import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { css } from "@emotion/react";

const SCover = css`
display: flex;
justify-content: center;
align-items: center;
background: linear-gradient(135deg, #fbf4f1 0%, #5974ff 100%);
color: #fff;
height: 100vh;
animation: gradient 10s ease infinite;
background-size: 150% 150%;
`;

const SContainer = css`
padding: 1.5rem;

@media screen and (min-width: 600px) {
padding: 5rem;
}
`;

const SH1 = css`
color: #222a52;
font-size: 2.5rem;

@media screen and (min-width: 600px) {
font-size: 4rem;
}
`;

const SButtonContainer = css`
margin-top: 1rem;
display: flex;
grid-gap: 1rem;
`;

const SAvatar = css`
width: 56px;
height: 56px;
border-radius: 50%;
z-index: 1;
`;

const SButton = css`
padding: 1rem;
background-color: #ffffff;
border-radius: 4px;
position: relative;
color: #222a52;

::before {
content: '';
width: 1rem;
height: 1rem;
background-color: #ffffff;
position: absolute;
left: -.5rem;
transform: rotate(45deg);
}
`;

const Cover = () => {
    const onClickTo = () => {
        navigate("/about");
    };

    return (
        <div css={SCover}>
            <div css={SContainer}>
                <h1 css={SH1}>Hello, I'm Matsui Yuki, graphic designer, front-end coder. <br />Thank you for finding me.</h1>
                <div css={SButtonContainer}>
                    <StaticImage src="../images/avatar.png" alt="MY avator" css={SAvatar} />
                    <button css={SButton} onClick={onClickTo}>ENTER</button>
                </div>
            </div>
        </div>
    )
};

export default Cover;
