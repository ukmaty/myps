import * as React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "gatsby";

const Header = css`
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px #ddd;
  padding: 1rem 2rem;
`;

const Ul = css`
  display: flex;
  list-style-type: none;
`;

const SLink = styled(Link)`
  text-decoration: none;
  &:hover {
      opacity: 0.7;
      cursor: pointer;
  }
`;

export default () => (
    <header css={Header}>
        <div>LOGO</div>
        <div>
            <ul css={Ul}>
                <li>
                    <SLink to="/about">
                        About
                    </SLink>
                </li>
                <li>
                    <SLink to="/projects">
                        Projects
                    </SLink>
                </li>
                <li>
                    <SLink to="/contact">
                        Contact
                    </SLink>
                </li>
            </ul>
        </div>
    </header>
);

