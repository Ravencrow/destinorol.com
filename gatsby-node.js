const path = require('path')
const kebabCase = require('lodash').kebabCase

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const soloSessionTemplate = path.resolve('src/templates/solo-session.js')
  const soloCampaignsTemplate = path.resolve('src/templates/solo-campaign.js')

  return graphql(`{
    soloSessions: allMarkdownRemark {
      edges {
        node {
          html
          id
          frontmatter {
            path
            title
          }
        }
      }
    }
    soloCampaigns: allMarkdownRemark {
      group(field: frontmatter___serie) {
        fieldValue
      }
    }
  }`).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    const soloSessions = res.data.soloSessions.edges
    const soloCampaigns = res.data.soloCampaigns.group

    soloSessions.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: soloSessionTemplate
      })
    })

    soloCampaigns.forEach(({ fieldValue }) => {
      createPage({
        path: `/solo-campaigns/${kebabCase(fieldValue)}/`,
        component: soloCampaignsTemplate,
        context: { serie: fieldValue }
      })
    })
  })
}
