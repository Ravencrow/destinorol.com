import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import BreadCrums from '../components/breadcrumbs'
const kebabCase = require('lodash').kebabCase

export default function Template ({ data }) {
  const soloSession = data.markdownRemark
  const { serie, title, path } = data.markdownRemark.frontmatter
  const links = [
    {
      to: '/',
      label: 'Inicio'
    },
    {
      to: `/solo-campaigns/${kebabCase(serie)}/`,
      label: serie
    },
    {
      to: path,
      label: title
    }
  ]

  return (
    <Layout>
      <SEO title='Juegos de rol en solitario' />
      <BreadCrums links={links} />
      <div>
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
        serie
        title
      }
    }
  }
  
`
