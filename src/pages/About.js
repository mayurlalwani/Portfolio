import React from "react"
import { Text, TextWrapper } from "../components/shared/TextWrapper"
import { SkillWrapper, Items, SkillItem } from "../components/shared/Skill"
import { useStaticQuery, graphql } from "gatsby"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          stacks
        }
      }
    }
  `)
  return (
    <>
      <TextWrapper>
        <Text />
      </TextWrapper>
      <SkillWrapper>
        <h4>Current Dev Stack</h4>
        <Items>
          {data.site.siteMetadata.stacks.map(stack => (
            <SkillItem key={stack}>{stack}</SkillItem>
          ))}
        </Items>
      </SkillWrapper>
    </>
  )
}
export default About
