import React from 'react'
import { PledgeName, PledgeText, PledgeTextInner, PledgeTitle } from '../Pledges/Pledges.styled'
import { ReduceBlock } from './Reduce.styled'

export default function Reduce(props) {
  return (
    <ReduceBlock>
        <PledgeTitle>{props.title}</PledgeTitle>
        <PledgeName>{props.name}</PledgeName>
        <PledgeText><PledgeTextInner>I pledge to: </PledgeTextInner>{props.text}</PledgeText>
    </ReduceBlock>
  )
}
