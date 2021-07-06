import * as React from "react"

import Seo from "../components/seo";
import Layout from "../components/layout";
import ContentGrid from "../components/contentGrid";

const NotFoundPage = () => {
  return (
    <Layout>
      <Seo
        title="Not Found"
        description={`Gatsby site`}
      />
      <ContentGrid>
        <title>Not found</title>
        <h1>Page not found</h1>
        <p>お探しのコンテンツは見つかりませんでした。</p>
      </ContentGrid>
    </Layout>
  )
}

export default NotFoundPage
