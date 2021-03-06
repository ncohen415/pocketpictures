import React from "react"
import styled from "styled-components"
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
        font-family: "Neue Haas Grotesk";
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
        padding: 0 0 0.5rem 0;
        font-size: 30px;
        font-weight: 600px;
        font-family: "Neue Haas Grotesk";
        background: none;
        border: none;
        cursor: pointer;
        outline: none;
      }
    }
    .slogan {
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
        font-family: "Neue Haas Grotesk";
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
        font-family: "Neue Haas Grotesk";
      }
    }
  }
`
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

const Footer = ({ mobileNavOpen }) => {
  return (
    <FooterContainer className={mobileNavOpen === true ? "active" : ""}>
      <div className="footer-wrapper">
        <div className="email-wrapper">
          <p>info@pocketpictures.video</p>
        </div>
        <div className="back-to-top">
          <img src={ArrowUp} alt="Up Arrow" />
          <button onClick={() => scrollToTop()}>Back to Top</button>
        </div>
        <div className="slogan">
          <p>Come for the pictures. Stay for the people.</p>
        </div>
        <div className="email-wrapper-2">
          <p>info@pocketpictures.video</p>
        </div>
      </div>
    </FooterContainer>
  )
}

export default Footer
