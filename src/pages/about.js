import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

const AboutPage = ({ data }) => {
    console.log( data );
    const pageData = data.allContentfulAbout.edges;

    return (
        <Layout>
            <h1>about</h1>
            { data && 
                pageData.map((edge) => {
                    const content = edge.node.content.childMarkdownRemark.html;
                    return (
                        <>
                            <div>
                                <img src={edge.node.image.file.url} alt="image"/>
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: content }} />
                        </>
                    )
                })
            }
        </Layout>
    )

};

export default AboutPage;

export const aboutQuery = graphql`
    query AllContentfulAbout {
        allContentfulAbout {
            edges {
                node {
                    image {
                        id
                        file {
                            url
                        }
                    }
                    content {
                        childMarkdownRemark {
                            id
                            html
                        }
                    }
                }
            }
        }
    }
`;
