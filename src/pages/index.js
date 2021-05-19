import * as React from "react"

import Layout from "../components/layout";
import Cover from "../components/cover";
import SEO from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="Portfolio"
        description={`Gatsby site`}
      />
      <Cover />
      <main>
        main
      </main>
    </Layout>
  )
}

export default IndexPage

