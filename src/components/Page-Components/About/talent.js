import React from "react"
import styled from "styled-components"

import TalentMember from "./talent-member"

const TalentList = styled.ul`
  list-style: none;
  margin: 0;
`

const Talent = ({ aboutACF }) => {
  return (
    <TalentList>
      {aboutACF.talent.map(member => {
        return <TalentMember member={member} />
      })}
    </TalentList>
  )
}

export default Talent
