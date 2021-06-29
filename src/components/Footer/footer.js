import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { media } from "../mq"

//Images
import ArrowUp from "../../images/arrow-up.svg"

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 125px;
  background-color: white;
  &.active {
    display: none;
  }
  .footer-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 2rem 0 2rem;
    ${media.medium`flex-direction: row;`}
    .email-wrapper {
      display: none;
      justify-content: center;
      width: 100%;
      margin-bottom: 2rem;
      ${media.medium`justify-content: flex-start; display: flex;`}
      p {
        margin: 0;
        padding: 0;
        font-size: 15px;
        font-family: "Space Mono";
      }
    }
    .back-to-top {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      margin-bottom: 2rem;
      img {
        padding: 0;
        margin-bottom: 0.5rem;
      }
      button {
        margin: 0;
        padding: 0;
        font-size: 30px;
        font-weight: 600px;
        font-family: "Adobe Garamond";
        background: none;
        border: none;
        cursor: pointer;
        outline: none;
      }
    }
    .blurb {
      display: flex;
      justify-content: center;
      width: 100%;
      margin-bottom: 2rem;
      ${media.medium`justify-content: flex-end;`}
      p {
        text-align: center;
        margin: 0;
        padding: 0;
        font-size: 15px;
        font-family: "Space Mono";
        ${media.medium`text-align: left;`}
      }
    }
    .email-wrapper-2 {
      display: flex;
      justify-content: center;
      width: 100%;
      padding-bottom: 2rem;
      ${media.medium`justify-content: flex-start; display: none;`}
      p {
        margin: 0;
        padding: 0;
        font-size: 15px;
        font-family: "Space Mono";
      }
    }
  }
`
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

const Footer = ({ mobileNavOpen, toggleMenu }) => {
  return (
    <FooterContainer className={mobileNavOpen === true ? "active" : ""}>
      <div className="footer-wrapper">
        <div class="email-wrapper">
          <p>hello@pocketpictures.video</p>
        </div>
        <div class="back-to-top">
          <img src={ArrowUp} alt="Up Arrow" />
          <button onClick={() => scrollToTop()}>Back to Top</button>
        </div>
        <div class="blurb">
          <p>Come for the pictures. Stay for the people.</p>
        </div>
        <div class="email-wrapper-2">
          <p>hello@pocketpictures.video</p>
        </div>
      </div>
    </FooterContainer>
  )
}

export default Footer
