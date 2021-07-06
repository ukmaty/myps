import React from "react";
import { css } from "@emotion/react";

const STagList = css`
display: flex;
flex-direction: column;
list-style-type: none;
position: sticky;
top: 88px;

@media screen and (max-width: 600px) {
align-items: center;
flex-wrap: wrap;
flex-direction: row;
justify-content: center;
grid-gap: .5rem;
}
`;

const STagListItem = css`
font-size: .75rem;
padding: .5rem;
background-color: #d3dbff;
border-radius: 8px;
word-break: break-all;

&:not(:first-of-type) {
margin-top: .5rem;
}

@media screen and (max-width: 600px) {
&:not(:first-of-type) {
margin-top: 0;
}
}
`;

const ProjectTagList = ({ tag }) => {

    return (
        <>
            <ul css={STagList}>
                {
                    tag && tag.map((el) => {
                        return (
                            <li key={el.name} css={STagListItem}>{el.name}</li>
                        )
                    })
                }
            </ul>
        </>
    )
};

export default ProjectTagList;
