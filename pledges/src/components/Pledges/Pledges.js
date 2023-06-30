import React, { useEffect, useRef, useState } from 'react'
import { Container, Wrap } from '../../App.styled'
import Avoid from '../Avoid/Avoid'
import Card from '../Card/Card'
import Offset from '../Offset/Offset'
import PledgesForm from '../PlegesForm/PledgesForm'
import Recycle from '../Recycle/Recycle'
import Reduce from '../Reduce/Reduce'
import Restore from '../Restore/Restore'
import Tabs from '../Tabs/Tabs'
import { PledgesBlock, PledgesHolder, PlegesTitle } from './Pledges.styled'

const cards = [
    {title: "Jemma Edwardes", name: "Reduce", text: 'Print less annual report proofs during the next reporting season.'},
    {title: "Jonny Legender", name: "Restore", text: 'Print less annual report proofs during the next reporting season.'},
    {title: "Rachel Bosstock", name: "Reduce", text: 'Print less annual report proofs during the next reporting season.'},
    {title: "Tyler Scott", name: "Avoid", text: 'Print less annual report proofs during the next reporting season.'},
    {title: "Harriet Palmer", name: "Offset", text: 'Print less annual report proofs during the next reporting season.'},
]

export default function Pledges() {
    const [activeTab, setActiveTab] = useState('All');
    const [tabActive, setTabActive] = useState('')
    const [newName, setNewName] = useState('');
    const [newTitle, setNewTitle] = useState('')
    const [newText, setNewText] = useState('')
    const [card, setCards] = useState([]);
    const [allCards, setAllCards] = useState([])

    const handleTabs = (e) => {
        e.preventDefault();
        if(e.target.classList.contains('active-form-tab')) {
            e.target.classList.remove('active-form-tab')
            setTabActive('')
        } else {
            document.querySelectorAll('.tabs-form-button').forEach((tab) => {
                tab.classList.remove('active-form-tab')
            })
            e.target.classList.add('active-form-tab')
            setTabActive(e.target.textContent)
        }
    }

    useEffect(() => {
        setCards(cards)
        setAllCards(cards)
    }, [])

    const addCardsHandler = card => {
        setAllCards((prevCards) => {
          return [card, ...prevCards];
        });
      }

    const nameRef = useRef('')
    const textRef = useRef('')

    const tabs = [
        {tab: 'Avoid'},
        {tab: 'Restore'},
        {tab: 'Reduce'},
        {tab: 'Recycle'},
        {tab: 'Offset'},
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        const nameValue = nameRef.current.value
        const textValue = textRef.current.value
        const tabValue = tabActive;
        tabs.forEach((tab) => {
            if(tab.tab === tabValue) {
                setNewName(tabValue)
                setNewTitle(nameValue);
                setNewText(textValue);
            }
        })
        const cards = {
            title: newTitle,
            text: newText,
            name: newName
        }
        addCardsHandler(cards)
      }

    const handleFilteredCards = () => {
        allCards.filter((card) => {
            // 
        })
    }

  return (
    <PledgesBlock>
        <Wrap>
            <Container>
                <PlegesTitle>Our chance to make work work better.</PlegesTitle>
                <Tabs setActiveTab={setActiveTab} activeTab={activeTab} />
            </Container>
            <PledgesHolder>
                <PledgesForm handleSubmit={handleSubmit} nameRef={nameRef} textRef={textRef} handleTabs={handleTabs} />
                {/* {getAllTabs()}
                {activeTab === 'Avoid' && createAvoid && createAvoid.map((avoid, i) => {
                    return <Avoid key={i} title={avoid.title} name={avoid.name} text={avoid.text} />
                })}
                {activeTab === 'Restore' && restore.map((avoid, i) => {
                    return <Restore key={i} title={avoid.title} name={avoid.name} text={avoid.text} />
                })}
                {activeTab === 'Reduce' && reduce.map((avoid, i) => {
                    return <Reduce key={i} title={avoid.title} name={avoid.name} text={avoid.text} />
                })}
                {activeTab === 'Recycle' && recycle.map((avoid, i) => {
                    return <Recycle key={i} title={avoid.title} name={avoid.name} text={avoid.text} />
                })}
                {activeTab === 'Offset' && offset.map((avoid, i) => {
                    return <Offset key={i} title={avoid.title} name={avoid.name} text={avoid.text} />
                })} */}
                {
                    allCards && allCards.map((card, i) => {
                        return <Card key={i} title={card.title} text={card.text} name={card.name} />
                    })
                }
            </PledgesHolder>
        </Wrap>
    </PledgesBlock>
  )
}