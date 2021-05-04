import React from "react"
import styled from "styled-components"

import StaffMember from "./staff-member"

const StaffList = styled.ul`
  list-style: none;
  margin: 0;
`

const Staff = ({ aboutACF }) => {
  return (
    <StaffList>
      {aboutACF.staff.map(member => {
        return <StaffMember member={member} />
      })}
    </StaffList>
  )
}

export default Staff
