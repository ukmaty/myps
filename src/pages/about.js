import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from 'gatsby-plugin-image';
import { css } from "@emotion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Seo from "../components/seo";
import Layout from "../components/layout";
import ContentGrid from "../components/contentGrid";
import PageTitle from "../components/pageTitle";
import FaIcon from "../components/faIcon";

const SIntroduction = css`
grid-column: 1/-1;
display: grid;
grid-template-columns: repeat(12, minmax(12px, 64px));
grid-template-rows: auto;
grid-column-gap: 1.5rem;
list-style-type: none;

@media screen and (max-width: 600px) {
grid-column-gap: 0;
grid-template-columns: repeat(6, 1fr);
}
`;

const SIntroImageContainer = css`
grid-area: 1/1/3/8;

@media screen and (max-width: 600px) {
grid-column: 1/-1;
grid-row: 1/2;
}

img {
width: 100%;
}
`;

const SIntroArt = css`
margin-top: -4rem;
padding: 3rem;
grid-area: 1/6/2/13;
background-color: #ffffff;
filter: drop-shadow(0 4px 4px silver);
word-break: break-all;
opacity: .96;
z-index: 1;

@media screen and (max-width: 600px) {
grid-column: 1/-1;
grid-row: 2/3;
margin-top: -2rem;
padding: 2rem;
}

h2 { margin-bottom: 2rem; }

@media screen and (max-width: 600px) {
p { margin-top: .5rem; }
}

p { margin-top: 1rem; }

span {
display: inline-block;
margin-left: auto;
font-size: .865rem;
}
`;

const SInfoContainer = css`
grid-column: span 6;
margin-top: 2rem;
media screen and (max-width: 600px) {
grid-column: 1/-1;
}
`;

const SIconList = css`
display: flex;
flex-wrap: wrap;
margin-top: 1rem;
padding: 0;
list-style-type: none;

@media screen and (max-width: 600px) {
margin-top: .5rem;
}
`;

const SIconListItem = css`
width: 24px;
&:not(last-of-type) {
margin-right: 1rem;
}

.icon {
width: 24px;
height: 24px;
color: #555555;
}
`;

const AboutPage = ({ data }) => {
    const pageData = data.allContentfulAbout.edges;

    console.log("data: ", pageData[0]);

    return (
        <Layout>
            <Seo title="ABOUT" description={`Gatsby site`} />
            {data &&
                pageData.map((edge) => {
                    const content = edge.node.content.childMarkdownRemark.html;
                    return (
                        <>
                            <PageTitle>{edge.node.title}</PageTitle>
                            <div css={SIntroduction}>
                                <div css={SIntroImageContainer}>
                                    <GatsbyImage image={edge.node.image.gatsbyImageData} alt={edge.node.image.title} />
                                </div>

                                <article css={SIntroArt} dangerouslySetInnerHTML={{ __html: content }} />

                                <div css={SInfoContainer}>
                                    <h3>experience</h3>
                                    <ul css={SIconList}>
                                        <li css={SIconListItem}><FontAwesomeIcon icon={FaIcon.html} title="HTML" className="icon" /></li>
                                        <li css={SIconListItem}><FontAwesomeIcon icon={FaIcon.css} title="CSS" className="icon" /></li>
                                        <li css={SIconListItem}><FontAwesomeIcon icon={FaIcon.js} title="JavaScript" className="icon" /></li>
                                        <li css={SIconListItem}><FontAwesomeIcon icon={FaIcon.sass} title="Sass" className="icon" /></li>
                                        <li css={SIconListItem}><FontAwesomeIcon icon={FaIcon.gulp} title="gulp" className="icon" /></li>
                                        <li css={SIconListItem}><FontAwesomeIcon icon={FaIcon.wp} title="WordPress" className="icon" /></li>
                                        <li css={SIconListItem}><FontAwesomeIcon icon={FaIcon.react} title="React" className="icon" /></li>
                                        <li css={SIconListItem}><FontAwesomeIcon icon={FaIcon.python} title="python" className="icon" /></li>
                                        <li css={SIconListItem}><FontAwesomeIcon icon={FaIcon.figma} title="figma" className="icon" /></li>
                                    </ul>
                                </div>

                                <div css={SInfoContainer}>
                                    <h3>information</h3>
                                    <div>
                                        <ul css={SIconList}>
                                            <li css={SIconListItem}><Link to="https://twitter.com/ukmaty" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={FaIcon.twitter} title="twitter" className="icon" /></Link></li>
                                            <li css={SIconListItem}><Link to="https://github.com/ukmaty/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={FaIcon.gh} title="github" className="icon" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })
            }
        </Layout>
    )

};

export const aboutQuery = graphql`
    query AllContentfulAbout {
        allContentfulAbout {
            edges {
                node {
                    title
                    image {
                        file {
                            url
                        }
                        gatsbyImageData(width: 560, quality: 85,  placeholder: BLURRED, layout: FULL_WIDTH)
                    }
                    icons {
                        file {
                          url
                        }
                        id
                        title
                    }
                    content {
                        childMarkdownRemark {
                            html
                        }
                    }
                }
            }
        }
    }
`;

export default AboutPage;