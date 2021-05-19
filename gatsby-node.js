const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    const projectTemplate = path.resolve('./src/templates/project.js');

    const projectResult = await graphql(
        `
        {
            allContentfulWorks {
                edges {
                  node {
                    title
                    slug
                    image {
                      file {
                        url
                      }
                      title
                    }
                    content {
                      content
                      childMarkdownRemark {
                        html
                      }
                    }
                    tag {
                      name
                    }
                  }
                }
              }
        }
        `
    );

    if (projectResult.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    // project details
    const projects = projectResult.data.allContentfulWorks.edges;

    projects.forEach(project => {
        createPage({
            path: `/projects/${project.node.slug}/`,
            component: projectTemplate,
            context: { project: project.node }
        })
    });

}
