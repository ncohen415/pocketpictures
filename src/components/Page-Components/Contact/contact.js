import React from "react"
import styled from "styled-components"
import SEO from "../../seo"
import { media } from "../../mq"

const ContactPageContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 0 3rem 0 3rem;
  .email-wrapper {
    flex: 1 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      width: 100%;
      text-align: center;
      font-family: "Adobe Garamond";
      font-size: 18px;
      ${media.small`font-size: 45px;`}
      ${media.medium`font-size: 60px;`}
      /* font-size: 60px; */
      a {
        color: inherit;
        text-decoration: none;
        .strike-through {
          display: inline;
          position: relative;
          overflow: hidden;
          z-index: 1;
          &:after {
            content: "";
            position: absolute;
            left: 0;
            right: 100%;
            bottom: 27px;
            background: #e84b4c;
            height: 7px;
            z-index: -1;
            transition-duration: 0.2s;
          }
          &:hover:after {
            right: 0;
          }
          &:focus:after {
            right: 0;
          }
          &:active:after {
            right: 0;
          }
        }
      }
    }
  }
  .offices {
    flex: 1 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    ${media.small`flex-direction: row;`}
    .west-coast {
      flex: 1 1 50%;
      .west-inner-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        h3 {
          font-size: 35px;
          text-align: center;
          margin: 0;
          padding: 0;
          font-family: "Neue Haas Grotesk";
        }
        p {
          text-align: center;
          text-decoration: underline;
        }
      }
    }
    .east-coast {
      flex: 1 1 50%;
      .east-inner-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        h3 {
          font-size: 35px;
          text-align: center;
          margin: 0;
          padding: 0;
          font-family: "Neue Haas Grotesk";
        }
        p {
          text-align: center;
          text-decoration: underline;
        }
      }
    }
  }
`

const Contact = () => {
  return (
    <ContactPageContainer>
      <SEO title="Contact" />
      <div className="email-wrapper">
        <h1>
          <a href="mailto:hello@pocketpictures.video">
            <div class="strike-through">hello@pocketpictures.video</div>
          </a>
        </h1>
      </div>
      <div className="offices">
        <div className="west-coast">
          <div class="west-inner-wrapper">
            <h3>West Coast</h3>
            <p>
              498 Alabama St.,
              <br />
              San Francisco, CA, 94110
            </p>
          </div>
        </div>
        <div className="east-coast">
          <div class="east-inner-wrapper">
            <h3>East Coast</h3>
            <p>
              67 West St., Suite 201,
              <br />
              Brooklyn NY, 11222
            </p>
          </div>
        </div>
      </div>
    </ContactPageContainer>
  )
}

export default Contact
