import * as React from "react"
import { Link } from "gatsby"

// markup
const NotFoundPage = () => {
  return (
    <main>
      <title>Not found</title>
      <h1>Page not found</h1>
        <Link to="/">Go home</Link>.
        {process.env.NODE_ENV === "development" ? (
          <>
          お探しのコンテンツは見つかりませんでした。
          </>
        ) : null}
    </main>
  )
}

export default NotFoundPage
