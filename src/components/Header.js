import React from "react"
import { Heading, SideText, Skill } from "./Heading/HeadStyle"
import { Image } from "./shared/Image"
import { useStaticQuery, graphql } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <Heading>
      {/* <Image
        width="400px"
        height="400px"
        
        src={require("../images/My_Profile.jpeg")}
      /> */}
      <div
        style={{
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
          flexDirection: `column`,
          lineHeight: `.10rem`,
        }}
      >
        <SideText>Hey, I'm {data.site.siteMetadata.author}</SideText>
        <Skill>A Front-End Developer</Skill>
      </div>
    </Heading>
  )
}
export default Header
