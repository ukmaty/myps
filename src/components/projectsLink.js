import React from "react";
import { Link } from "gatsby";
import { css } from "@emotion/react";
import { GatsbyImage } from 'gatsby-plugin-image';

const SProjectListContainer = css`
grid-column: 1/-1;
grid-row: 2/3;
align-self: self-start;
`;

const SProjectList = css`
display: grid;
grid-template-columns: repeat(12, minmax(12px, 64px));
grid-gap: 1.5rem;
list-style-type: none;

@media screen and (max-width: 600px) {
grid-column-gap: 0;
grid-template-columns: repeat(6, 1fr);
grid-gap: 2.5rem;
}
`;

const SProjectListItem = css`
grid-column: span 6;
`;

const SLink = css`
display: block;
text-decoration: none;
`;

const SImgContainer = css`
max-width: 504px;
max-height: 240px;
border-radius: 8px;
overflow: hidden;
filter: brightness(50%);

@media screen and (max-width: 600px) {
max-height: 180px;
}

&:hover {
filter: brightness(100%) drop-shadow(0 3px 4px silver);
img {
transform: scale(1.05);
transition: .4s;
}
}
`;

const SProjectTitle = css`
margin: .5rem 0 .25rem;
font-size: 1.2rem;
`;

const SProjcetCategory = css`
display: inline-block;
padding: .2rem .5rem;
background-color: #D3DBFF;
color: #222a52;
border-radius: 8px;
font-size: .7rem;
text-transform: uppercase;
`;

const ProjectsLink = ({ works }) => {
    return (
        <div css={SProjectListContainer}>
            <ul css={SProjectList}>
                {works.edges.map(edge => {
                    return (
                        <li key={edge.node.id} css={SProjectListItem}>
                            <Link to={`/projects/${edge.node.slug}`} css={SLink}>
                                {
                                    edge.node.image &&
                                    <div css={SImgContainer}>
                                        <GatsbyImage image={edge.node.image.gatsbyImageData} alt={edge.node.image.title} />
                                    </div>
                                }
                                <h2 css={SProjectTitle}>{edge.node.title}</h2>
                                <div>
                                    <span css={SProjcetCategory}>{edge.node.category.name}</span>
                                </div>
                            </Link>
                        </li>)
                }
                )}
            </ul>
        </div>
    )
};

export default ProjectsLink;
