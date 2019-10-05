import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

export default function SoloSessions({ data }) {
  const soloSessions = data.allMarkdownRemark.edges

  return (
    <Layout>
      {soloSessions.map(soloSession => (
        <div key={soloSession.node.id}>
          <Link to={soloSession.node.frontmatter.path}>
            <span>{soloSession.node.frontmatter.title}</span>
          </Link>
        </div>
      ))}
    </Layout>
  )
}

export const soloSessionQuery = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: "solo-rpg" } } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`
