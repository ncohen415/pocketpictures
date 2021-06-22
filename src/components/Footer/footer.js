import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

//Images
import ArrowUp from "../../images/arrow-up.svg"

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 125px;
  background-color: white;
  .footer-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 0 2rem 0 2rem;
    .email-wrapper {
      display: flex;
      justify-content: flex-start;
      width: 100%;
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
      /* justify-content: center; */
      width: 100%;
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
      justify-content: flex-end;
      width: 100%;
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

const Footer = () => {
  return (
    <FooterContainer>
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
      </div>
    </FooterContainer>
  )
}

export default Footer
