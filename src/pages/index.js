import * as React from "react"

import Cover from "../components/cover";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <>
      <Seo
        title="Portfolio"
        description={`Gatsby site`}
      />
      <Cover />
    </>
  )
}

export default IndexPage
