import React from "react"
import { graphql } from "gatsby"

import Layout from '../components/layout'
import SEO from '../components/seo'

export default function Template({ data }) {
  const soloSession = data.markdownRemark

  return (
    <Layout>
      <SEO title='Juegos de rol en solitario' />
      <div>
        <h1>{soloSession.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: soloSession.html }} />
      </div>
    </Layout>
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
