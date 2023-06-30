import React from 'react'
import { PledgeName, PledgeText, PledgeTextInner, PledgeTitle } from '../Pledges/Pledges.styled'
import { RecycleBlock } from './Recycle.styled'

export default function Recycle(props) {
  return (
        <RecycleBlock>
            <PledgeTitle>{props.title}</PledgeTitle>
            <PledgeName>{props.name}</PledgeName>
            <PledgeText><PledgeTextInner>I pledge to: </PledgeTextInner>{props.text}</PledgeText>
        </RecycleBlock>
  )
}
