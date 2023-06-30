import React, { useEffect, useState } from 'react'
import { TabsBlock, TabsButton, TabsIcon, TabsImg, TabsItem, TabsList } from './Tabs.styled'

export default function Tabs({ setActiveTab, activeTab }) {

    const tabs = [
        {tab: 'Avoid'},
        {tab: 'Restore'},
        {tab: 'Reduce'},
        {tab: 'Recycle'},
        {tab: 'Offset'},
    ]

    const toggleActive = (e) => {
        if(e.target.classList.contains('active-tab')) {
            e.target.classList.remove('active-tab')
            setActiveTab('All')
        } else {
            document.querySelectorAll('.tabs-button').forEach((tab) => {
                tab.classList.remove('active-tab')
            })
            e.target.classList.add('active-tab')
            setActiveTab(e.target.textContent)
        }
    }

  return (
    <>
        <TabsBlock>
            <TabsIcon>
                <TabsImg></TabsImg>
            </TabsIcon>
            <TabsList>
                {tabs.map((tab, i) => {
                    return (
                    <TabsItem key={i}>
                        <TabsButton className='tabs-button' onClick={toggleActive}>{tab.tab}</TabsButton>
                    </TabsItem>
                    )
                })}
            </TabsList>
        </TabsBlock>
    </>
  )
}
