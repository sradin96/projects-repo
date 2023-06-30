import React, { useEffect, useRef, useState } from 'react'
import Actions from '../Actions/Actions'
import Avoid from '../Avoid/Avoid'
import Banner from '../Banner/Banner'
import Footer from '../Footer/Footer'
import Offset from '../Offset/Offset'
import Pledges from '../Pledges/Pledges'
import Recycle from '../Recycle/Recycle'
import Reduce from '../Reduce/Reduce'
import Restore from '../Restore/Restore'
import Tabs from '../Tabs/Tabs'

export default function Home() {
    const myRef = useRef(null)
    const handleArrowScroll = () => {
        myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start'})
    }

    return (
        <>
            <Banner onClick={handleArrowScroll} />
            <Actions myRef={myRef} />
            <Pledges />
            <Footer />
        </>
    )
}
