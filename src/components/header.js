import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import Logo from "../images/logo.svg";

const SHeader = css`
grid-column: 1/-1;
backdrop-filter: blur(12px);
background-color: rgba(255, 255, 255, 0.4);;
position: sticky;
top: 0;
z-index: 100;
@media screen and (min-width: 600px) {
  padding: 0 1rem;
}
`;

const SHeaderContainer = css`
display: flex;
justify-content: space-between;
align-items: center;
@media screen and (min-width: 600px) {
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
}
`;

const SUl = css`
display: flex;
justify-content: space-between;
list-style-type: none;
`;

const SLink = styled(Link)`
color: #5974fe;
padding: 1rem;
text-decoration: none;
font-weight: 800;
font-size: .875rem;
&:hover {
  cursor: pointer;
}
`;

const SLogo = css`
width: 100%;
@media screen and (max-width: 600px) {
  max-width: 48px;
}
`;

const Header = () => (
  <header css={SHeader}>
    <div css={SHeaderContainer}>
      <div><Link to="/"><img src={Logo} alt="logo" css={SLogo} /></Link></div>
      <div>
        <ul css={SUl}>
          <li><SLink to="/about">About</SLink></li>
          <li><SLink to="/projects">Projects</SLink></li>
          <li><SLink to="/contact">Contact</SLink></li>
        </ul>
      </div>
    </div>
  </header>
);

export default Header;