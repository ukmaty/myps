import React from "react"
import Layout from "../components/layout";
import SEO from "../components/seo";

const Project = ({ pageContext }) => {
    const { title, image } = pageContext.project;
    const content = pageContext.project.content.childMarkdownRemark.html;

    return (
        <Layout>
            <SEO
              title={title}
              description={title}
            />
            <header>
                <div>
                    {
                        image &&
                        <img src={image.file.url} alt={image.title} />
                    }
                </div>
                <h1>{title}</h1>
            </header>

            <div dangerouslySetInnerHTML={{ __html: content }} />
        </Layout>
    )
}

export default Project;
