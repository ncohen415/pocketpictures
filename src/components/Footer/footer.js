import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

//Images
import Raymond from "../../images/raymond.jpg"

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  height: 40vh;
  background-color: black;
  .footer-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 0 2rem 0 2rem;
    .west-coast {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      div {
        display: flex;
        flex-direction: column;
        small {
          color: white;
          font-size: 1.5vh;
        }
        h3 {
          color: white;
          font-size: 4vh;
        }
      }
    }
    .east-coast {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      div {
        display: flex;
        flex-direction: column;
        small {
          color: white;
          font-size: 1.5vh;
        }
        h3 {
          color: white;
          font-size: 4vh;
        }
      }
    }
    .logo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      div {
        display: flex;
        flex-direction: column;
        img {
          width: 15vw;
        }
      }
    }
  }
`

const Footer = customFields => {
  const footerACF = customFields.customFields
  console.log(footerACF)
  return (
    <FooterContainer>
      <div className="footer-wrapper">
        <div className="west-coast">
          <div>
            <small>{footerACF.westCoast}</small>
            <h3>
              <div
                dangerouslySetInnerHTML={{ __html: footerACF.westCoastAddress }}
              />
            </h3>
          </div>
        </div>
        <div className="east-coast">
          <div>
            <small>{footerACF.eastCoast}</small>
            <h3>
              <div
                dangerouslySetInnerHTML={{ __html: footerACF.eastCoastAddress }}
              />
            </h3>
          </div>
        </div>
        <div className="logo">
          <div>
            <img src={Raymond} alt="" />
          </div>
        </div>
      </div>
    </FooterContainer>
  )
}

export default Footer
