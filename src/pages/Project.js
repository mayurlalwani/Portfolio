import React from "react"
import styled from "styled-components"
import Card from "../components/shared/Card"
import { breakpoints } from "../components/shared/Media"
import { TitleComponent, StyledText } from "../components/shared/TextWrapper"

const StyledRoot = styled.div`
  padding: 50px 12px;
`
const StyledContainer = styled.div`
  max-width: 70%;
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px 20px;
  cursor: pointer;
  @media (max-width: ${breakpoints.mobileMax}) {
    max-width: 90%;
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
`
const Project = () => {
  return (
    <StyledRoot>
      <TitleComponent>Projects</TitleComponent>
      <StyledText>Some of my work</StyledText>
      <StyledContainer>
        <Card
          // photo={require("../images/programming.svg")}
          title="Number Guessing Game"
          description="Number guessing game using React."
          demoLink="https://numberguessingapp.netlify.app/"
        />
        <Card
          // photo={require("../images/thinking.png")}
          title="Speed Typing Test"
          description="Test your typing speed with this cool React web application."
          demoLink="https://typingspeedtest.netlify.app/"
        />
        <Card
          // photo={require("../images/thinking.png")}
          title="To-Do CRUD App"
          description="To-DO Application developed with React Hooks and Styled Components."
          demoLink="https://todocrudreact.netlify.app/"
        />
      </StyledContainer>
    </StyledRoot>
  )
}
export default Project
