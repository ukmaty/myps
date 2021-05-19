import * as React from "react";
import { graphql } from "gatsby"

import Layout from "../components/layout";
import ProjectsLink from "../components/projects-link";

const ProjectsPage = ({ data }) => (
    <Layout>
        <h1>projects</h1>
        <div>
            {data.allContentfulWorks.edges.map(edge =>
                <ProjectsLink key={edge.node.slug} work={edge.node} />
            )}
        </div>
    </Layout>
);

export default ProjectsPage;

export const projectsQuery = graphql`
    query allContentfulWorks {
    allContentfulWorks {
    edges {
        node {
        title
        image {
            title
            file {
            url
            }
        }
        slug
        }
    }
    }
    }
`;
