import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SoloCampaigns = ({pageContext, data}) => {
  const {serie} = pageContext
  const {edges} = data.allMarkdownRemark

  return (
    <Layout>
      <SEO title='Juegos de rol en solitario' />
      <h2>{serie}</h2>
      <ul>
        {edges.map(({node}) => {
           const {title, path} = node.frontmatter
           return (
             <li key={path}>
               <Link to={path}>
               {title}
               </Link>
             </li>
           )
         })}
      </ul>
    </Layout>
  )
}

export default SoloCampaigns

export const data = graphql`
  query($serie: String) {
    allMarkdownRemark(filter: {frontmatter: {serie: {in: [$serie]}}}) {
      edges {
        node {
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`
