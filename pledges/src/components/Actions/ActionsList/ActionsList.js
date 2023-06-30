import React from 'react'
import { ActionsListBlock } from './ActionsList.styled'
import ActionsItem from '../ActionsItem/ActionsItem'

export default function ActionsList() {
    const items = [
        {number: '1', title: 'Avoid', text: 'Stop your impact  from the very start.', small: 'Focus areas:', list: ['Business travel', 'Energy efficiency', 'Green energy', 'Homeworking']},
        {number: '2', title: 'Restore', text: 'Use your time and skills to help restore damaged ecosystems. ', small: 'Focus areas:', list: ['Volunteer programme']},
        {number: '3', title: 'Reduce', text: 'Think and act creatively to reduce unavoidable impacts.', small: 'Focus areas:', list: ['Office paper', 'Print procurement', 'Design principles']},
        {number: '4', title: 'Recycle', text: 'Build recycling into working practices, and inspire others to do the same.', small: 'Focus areas:', list: ['Waste streams', 'Awareness campaigns']},
        {number: '5', title: 'Offset', text: 'Offset any significant impacts that can’t be avoided or reduced. ', small: 'Focus areas:', list: ['Climate Positive Workforce']},
    ]

  return (
    <ActionsListBlock>
        {items.map((item, i) => {
            return (
                <ActionsItem key={i}
                number={item.number}
                title={item.title}
                text={item.text}
                small={item.small}
                list={item.list} />
            )
        })}
    </ActionsListBlock>
  )
}
