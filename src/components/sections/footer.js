import React from "react"
import styled from "styled-components"

import { Container } from "../global"

const Footer = () => (
  <FooterWrapper id="footer">
    <FooterColumnContainer>
      <FooterColumn>
        <span>Contact</span>
        <ul>
          <li>
            <a href="mailto:contact@iedereenhelpt.nl">
              contact@iedereenhelpt.nl
            </a>
          </li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>Help ons!</span>
        <p>
          Iedereen Helpt is opgezet door een groep vrijwilligers. Kun jij ons
          helpen op het gebied van hosting, advertentieruimte, technische
          skills, of heb je een ander goed idee? Neem contact op! Samen maken
          wij hulp bereikbaar voor iedereen.
        </p>
      </FooterColumn>
    </FooterColumnContainer>
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  background-color: white;
  margin: 80px 0 0;
  padding: 0 0 80px;
`

const FooterColumnContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-column-gap: 32px;
  justify-content: start;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    grid-gap: 32px;
  }
`
const FooterColumn = styled.div`
  span {
    font-size: 16px;
    font-family: ${props => props.theme.font.bold};
    color: ${props => props.theme.color.primary};
  }
  ul {
    list-style: none;
    margin: 16px 0;
    padding: 0;
    color: ${props => props.theme.color.black.regular};
    li {
      margin-bottom: 12px;
      font-family: ${props => props.theme.font.normal};
      font-size: 15px;
    }
  }
`

export default Footer
