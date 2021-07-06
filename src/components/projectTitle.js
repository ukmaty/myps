import React from "react";
import { css } from "@emotion/react";

const SProjectTitle = css`
padding: 3rem 2rem 1rem;
line-height: 1.1;
font-size: 2.5rem;
`;

const SProjectSubtitle  = css`
color: #6D728E;
`;

const ProjectTitle = ({ title, subtitle }) => {
  return (
    <>
      <h1 css={SProjectTitle}>{title}</h1>
      <p css={SProjectSubtitle}>{subtitle}</p>
    </>
  )
};

export default ProjectTitle;
