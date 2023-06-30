import React from 'react'
import { ActionsItemBlock, ActionsItemItem, ActionsItemList, ActionsItemNumber, ActionsItemSmall, ActionsItemText, ActionsItemTitle } from './ActionsItem.styled'

export default function ActionsItem(props) {
  return (
    <ActionsItemBlock>
        <ActionsItemNumber>{props.number}</ActionsItemNumber>
        <ActionsItemTitle>{props.title}</ActionsItemTitle>
        <ActionsItemText>{props.text}</ActionsItemText>
        <ActionsItemSmall>{props.small}</ActionsItemSmall>
        <ActionsItemList>
            {props.list.map((item, i) => (
                <ActionsItemItem key={i}>{item}</ActionsItemItem>
            ))}
        </ActionsItemList>
    </ActionsItemBlock>
  )
}
