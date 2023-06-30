import React from 'react'
import { PledgeName, PledgeText, PledgeTextInner, PledgeTitle } from '../Pledges/Pledges.styled'
import { OffsetBlock } from './Offset.styled'

export default function Offset(props) {
  return (
    <OffsetBlock>
        <PledgeTitle>{props.title}</PledgeTitle>
        <PledgeName>{props.name}</PledgeName>
        <PledgeText><PledgeTextInner>I pledge to: </PledgeTextInner>{props.text}</PledgeText>
    </OffsetBlock>
  )
}
