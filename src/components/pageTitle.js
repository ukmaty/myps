import React from "react";
import { css } from "@emotion/react";

const SPageTitle = css`
grid-column: 1/-1;
padding: 2.5rem 0;
text-transform: uppercase;

@media screen and (min-width: 600px) {
padding: 3rem 0;
}
`;

const PageTitle = ({ children }) => {
  return (
    <h1 css={SPageTitle}>{children}</h1>
  )
};

export default PageTitle;
