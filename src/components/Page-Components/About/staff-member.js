import React from "react"
import styled from "styled-components"

const SingleStaffMember = styled.li`
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

const StaffMember = ({ member }) => {
  return (
    <SingleStaffMember>
      <small className="role">{member.staffRole}</small>
      <h5 className="name">
        <a
          target="_blank"
          href={member?.portfolioLink === null ? "" : member.portfolioLink.url}
        >
          {member.staffName}
        </a>
      </h5>
    </SingleStaffMember>
  )
}

export default StaffMember
