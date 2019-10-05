import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'

const kebabCase = require('lodash').kebabCase

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title='Juegos de rol en solitario' />
      <h2>Juegos de rol en solitario</h2>
      <p>
        Estas son las partidas de rol en solitario que he documentado hasta la fecha en
        {" "}
        <a rel='noopener noreferrer' target='_blank' href='https://www.youtube.com/user/destinorol/videos'>Destino ROL</a>
      </p>
      <ul>
        {data.allMarkdownRemark.group.map(serie => (
           <li key={serie.fieldValue}>
             <Link to={`/solo-campaigns/${kebabCase(serie.fieldValue)}/`}>
             {serie.fieldValue}
             </Link>
           </li>
         ))}
      </ul>
      <Link to='/partida-solo/'> Go to page 2
      </Link>
    </Layout>
  )
}
export const query = graphql`
  query {
    allMarkdownRemark {
      group(field: frontmatter___serie) {
        fieldValue
        edges {
          node {
            id
            frontmatter {
              serie
            }
          }
        }
      }
    }
  }
`

export default IndexPage
