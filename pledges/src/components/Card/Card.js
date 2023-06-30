import React from 'react'
import { CardBlock, CardName, CardText, CardTextInner, CardTitle } from './Card.styled'

export default function Card(props) {
  return (
    <>
       <CardBlock>
            <CardTitle>{props.title}</CardTitle>
            <CardName>{props.name}</CardName>
            <CardText><CardTextInner>I pledge to: </CardTextInner>{props.text}</CardText>
        </CardBlock>
    </>
  )
}
