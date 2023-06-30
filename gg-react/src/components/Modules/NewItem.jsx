import React, { useEffect, useState } from 'react'
import CountDownTimer from '../Hooks/CountDownTimer'

function NewItem() {
    const [days, setDays] = useState('')

    const counter = () => {
        const date = new Date('February 1, 2024 00:00:00').getTime()
        const currentDate = new Date()

        const gap = date - currentDate

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60
        const day = hour * 24

        const textDay = Math.floor(gap / day)
        console.log(textDay);

        setDays(textDay)
    }

    useEffect(() => {
        counter()
    }, [])

    console.log();

  return (
    <section className='new-item'>
        <div className="wrap">
            <h2 className="new-item__title">New Stuff Comming Soon!</h2>
            <CountDownTimer seconds={days} />
            <div className="new-item__holder">
                <div className="new-item__block has-cover" style={{backgroundImage: `url(https://www.leagueoflegends.com/static/open-graph-2e582ae9fae8b0b396ca46ff21fd47a8.jpg)`}}>
                    <h3 className="new-item__block-name">Name</h3>
                </div>
                <div className="new-item__block has-cover" style={{backgroundImage: `url(https://www.leagueoflegends.com/static/open-graph-2e582ae9fae8b0b396ca46ff21fd47a8.jpg)`}}>
                    <h3 className="new-item__block-name">Name</h3>
                </div>
                <div className="new-item__block has-cover" style={{backgroundImage: `url(https://www.leagueoflegends.com/static/open-graph-2e582ae9fae8b0b396ca46ff21fd47a8.jpg)`}}>
                    <h3 className="new-item__block-name">Name</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NewItem
