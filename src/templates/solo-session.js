import React from "react"
import { graphql } from "gatsby"

export default function Template({ data }) {
  const soloSession = data.markdownRemark

  return (
    <div>
      <h1>{soloSession.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: soloSession.html }} />
    </div>
  )
}

export const soloSessionQuery = graphql`
  query soloSessionByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        path
        title
      }
    }
  }
  
`
