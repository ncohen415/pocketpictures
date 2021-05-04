import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const HomePageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 0 3rem 0 3rem;
  .reel {
    position: relative;
    display: flex;
    width: 100%;
    .reel-wrapper {
      width: 100%;
      height: 100vh;
      padding: 3rem;
      display: flex;
      justify-content: center;
    }
  }
  .email-us {
    position: relative;
    width: 100%;
    height: 25vh;
    display: flex;
    justify-content: center;
    align-items: center;
    h3 {
      font-size: 5vh;
      &:hover {
        text-decoration: underline;
      }
      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
`

const Home = data => {
  const homeACF = data.data.wpPage.HomePageACF
  return (
    <HomePageContainer>
      <section className="reel">
        <div
          dangerouslySetInnerHTML={{ __html: homeACF.reel }}
          className="reel-wrapper"
        />
      </section>
      <div className="email-us">
        <h3>
          <a href={homeACF.email}>{homeACF.contactLink}</a>
        </h3>
      </div>
    </HomePageContainer>
  )
}

export default Home
