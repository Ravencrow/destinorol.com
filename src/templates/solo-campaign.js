import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import BreadCrums from '../components/breadcrumbs'
const kebabCase = require('lodash').kebabCase

const SoloCampaigns = ({ pageContext, data }) => {
  const { serie } = pageContext
  const { edges } = data.allMarkdownRemark
  const links = [
    {
      to: '/',
      label: 'Inicio'
    },
    {
      to: `/solo-campaigns/${kebabCase(serie.fieldValue)}/`,
      label: serie
    }
  ]

  return (
    <Layout>
      <SEO title='Juegos de rol en solitario' />
      <BreadCrums links={links} />
      <h2>{serie}</h2>
      <ul>
        {edges.map(({ node }) => {
           const { title, path } = node.frontmatter
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
    allMarkdownRemark(
      filter: {frontmatter: {serie: {in: [$serie]}}}
      sort: {fields: frontmatter___order, order: ASC}
      ) {
      edges {
        node {
          frontmatter {
            path
            title
            order
          }
        }
      }
    }
  }
`
