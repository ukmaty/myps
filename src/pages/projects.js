import React from "react";
import { graphql } from "gatsby"

import Layout from "../components/layout";
import ProjectsLink from "../components/projectsLink";
import Seo from "../components/seo";
import PageTitle from "../components/pageTitle";

const ProjectsPage = ({ data }) => {
  const works = data.allContentfulWorks;

  return (
    <Layout>
      <Seo title="PROJECTS" description={`Gatsby site`} />
      <PageTitle>projects</PageTitle>
      <ProjectsLink works={works} />
    </Layout>
  )
};

export const projectsQuery = graphql`
    query allContentfulWorks {
    allContentfulWorks {
    edges {
        node {
          title
          subtitle
          image {
              title
              file {
                url
              }
              gatsbyImageData(width: 560, quality: 85, layout: FULL_WIDTH)
              fluid(maxWidth: 10, quality: 10) {
                srcSet
              }
          }
          category {
              name
          }
          tag {
            name
          }
          slug
        }
    }
    }
    }
`;

export default ProjectsPage;
