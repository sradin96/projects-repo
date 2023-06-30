import React, { useState } from 'react'
import { PledgesFormBlock, PledgesFormButton, PledgesFormCount, PledgesFormCountInner, PledgesFormHolder, PledgesFormInput, PledgesFormInputHolder, PledgesFormLabel, PledgesFormTabs, PledgesFormTabsButton, PledgesFormTabsHolder, PledgesFormTextarea, PledgesFormTextareaHolder } from './PledgesForm.styled'

export default function PledgesForm({ handleSubmit, nameRef, textRef, handleTabs }) {
  const [count, setCount] = useState(0);

  return (
    <PledgesFormBlock>
        <PledgesFormHolder onSubmit={handleSubmit}>
            <PledgesFormInputHolder>
                <PledgesFormLabel>Name:</PledgesFormLabel>
                <PledgesFormInput ref={nameRef} placeholder='Type your name here'></PledgesFormInput>
            </PledgesFormInputHolder>
            <PledgesFormTabs>
                <PledgesFormLabel>Action</PledgesFormLabel>
                <PledgesFormTabsHolder>
                    <PledgesFormTabsButton className='tabs-form-button' onClick={handleTabs}>Avoid</PledgesFormTabsButton>
                    <PledgesFormTabsButton className='tabs-form-button' onClick={handleTabs}>Restore</PledgesFormTabsButton>
                    <PledgesFormTabsButton className='tabs-form-button' onClick={handleTabs}>Reduce</PledgesFormTabsButton>
                    <PledgesFormTabsButton className='tabs-form-button' onClick={handleTabs}>Recycle</PledgesFormTabsButton>
                    <PledgesFormTabsButton className='tabs-form-button' onClick={handleTabs}>Offset</PledgesFormTabsButton>
                </PledgesFormTabsHolder>
            </PledgesFormTabs>
            <PledgesFormInputHolder>
                <PledgesFormLabel>I pledge to...</PledgesFormLabel>
                <PledgesFormTextareaHolder>
                    <PledgesFormTextarea ref={textRef} maxLength='160' placeholder='Write your pledge here' onChange={e => setCount(e.target.value.length)}></PledgesFormTextarea>
                    <PledgesFormCount>{count}<PledgesFormCountInner>/160</PledgesFormCountInner></PledgesFormCount>
                </PledgesFormTextareaHolder>
            </PledgesFormInputHolder>
            <PledgesFormButton>Submit</PledgesFormButton>
        </PledgesFormHolder>
    </PledgesFormBlock>
  )
}

