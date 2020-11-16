import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      logoImage: file(relativePath: { eq: "logo-halloween.png" }) {
        childImageSharp {
          fixed(width: 50) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
      youtubeImage: file(relativePath: { eq: "youtube-logo.png" }) {
        childImageSharp {
          fixed(height: 25) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
      meweImage: file(relativePath: { eq: "mewe-logo.png" }) {
        childImageSharp {
          fixed(height: 20) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
      twitterImage: file(relativePath: { eq: "twitter-logo.png" }) {
        childImageSharp {
          fixed(height: 25) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
      discordImage: file(relativePath: { eq: "discord-logo.png" }) {
        childImageSharp {
          fixed(height: 35) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
      twitchImage: file(relativePath: { eq: "twitch-logo.png" }) {
        childImageSharp {
          fixed(height: 25) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header
      style={{
        display: "flex",
        flexDirection: "row",
        maxWidth: 960,
        margin: "0 auto 1.45rem",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 2,
          padding: "1.45rem 1.0875rem",
        }}
      >
        <div style={{ width: 70 }}>
          <Img fixed={data.logoImage.childImageSharp.fixed} />
        </div>
        <h1
          style={{
            flex: "auto",
            margin: 0,
            fontSize: "1.9rem",
            alignItems: "center",
            display: "flex",
            flexWrap: "nowrap",
            whiteSpace: "nowrap",
          }}
        >
          {data.site.siteMetadata.title}
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "flex-end",
          alignItems: "center",
          flexDirection: "row",
          marginRight: "20px",
        }}
      >
        <a href="https://www.twitch.tv/destinorol" target="_blank">
          <Img
            style={{ marginLeft: 10 }}
            fixed={data.twitchImage.childImageSharp.fixed}
          />
        </a>
        <a
          href="https://www.youtube.com/user/destinorol/featured"
          target="_blank"
        >
          <Img
            style={{ marginLeft: 10 }}
            fixed={data.youtubeImage.childImageSharp.fixed}
          />
        </a>
        <a
          href="https://mewe.com/profile/5bbfaa18a40f300b57426c24"
          target="_blank"
        >
          <Img
            style={{ marginLeft: 10 }}
            fixed={data.meweImage.childImageSharp.fixed}
          />
        </a>
        <a href="https://twitter.com/destinorol" target="_blank">
          <Img
            style={{ marginLeft: 10 }}
            fixed={data.twitterImage.childImageSharp.fixed}
          />
        </a>
        <a href="https://discord.gg/J9epcs" target="_blank">
          <Img
            style={{ marginLeft: 10 }}
            fixed={data.discordImage.childImageSharp.fixed}
          />
        </a>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
