import React from "react"
import styled from "styled-components"

const SingleTalentMember = styled.li`
  margin-bottom: 2.5vh;
  .role {
    font-size: 1.5vh;
    opacity: 0.7;
  }
  .name {
    font-size: 2.4vh;
    a {
      color: inherit;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`

const TalentMember = ({ member }) => {
  return (
    <SingleTalentMember>
      <small className="role">{member.talentRole}</small>
      <h5 className="name">
        <a
          target="_blank"
          href={member?.portfolioLink === null ? "" : member.portfolioLink.url}
        >
          {member.talentName}
        </a>
      </h5>
    </SingleTalentMember>
  )
}

export default TalentMember
