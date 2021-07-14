import React from "react"
import { css } from "@emotion/react";

import Seo from "../components/seo";
import Layout from "../components/layout";
import ProjectTitle from "../components/projectTitle";
import ProjectTagList from "../components/projectTagList";
import ProjectArticle from "../components/projectArticle";

const SHeader = css`
grid-column: 1/-1;
grid-row: 1/2;
text-align: center;

@media screen and (max-width: 600px) {
margin-bottom: 1rem;
}
`;

const STagList = css`
grid-column: 2/4;
grid-row: 2/3;
@media screen and (max-width: 600px) {
grid-column: 1/-1;
}
`;

const SArticle = css`
grid-column: 4/-2;

@media screen and (max-width: 600px) {
grid-column: 1/-1;
margin-top: 1rem;
padding: 0 1rem;
}

p { margin-top: 2rem; }
img { width: 100%; }
`;

const Project = ({ pageContext }) => {
    const { title, subtitle, image, tag } = pageContext.project;
    const content = pageContext.project.content.childMarkdownRemark.html;

    return (
        <Layout>
            <Seo title={title} description={title} />
            <header css={SHeader}>
                <ProjectTitle title={title} subtitle={subtitle} />
            </header>
            <div css={STagList}>
                <ProjectTagList tag={tag} />
            </div>
            <article css={SArticle}>
                <ProjectArticle image={image} content={content} />
            </article>
        </Layout>
    )
}

export default Project;
