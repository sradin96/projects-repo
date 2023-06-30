import React from 'react'
import { PledgeName, PledgeText, PledgeTextInner, PledgeTitle } from '../Pledges/Pledges.styled'
import { RestoreBlock } from './Restore.styled'

export default function Restore(props) {
  return (
        <RestoreBlock>
            <PledgeTitle>{props.title}</PledgeTitle>
            <PledgeName>{props.name}</PledgeName>
            <PledgeText><PledgeTextInner>I pledge to: </PledgeTextInner>{props.text}</PledgeText>
        </RestoreBlock>
  )
}
