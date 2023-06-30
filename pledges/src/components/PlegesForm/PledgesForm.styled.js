import styled from 'styled-components'

export const PledgesFormBlock = styled.div`
    max-width: 430px;
    width: 100%;
    padding: 40px 25px;
    background-color: #fff;
    border-radius: 13px;
    box-shadow: 0px 30px 42px -16px rgba(0, 0, 0, 0.08);
`

export const PledgesFormHolder = styled.form`

`

export const PledgesFormInputHolder = styled.div`
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, .3);
    padding-bottom: 25px;
    margin-bottom: 25px;
`

export const PledgesFormLabel = styled.label`
    width: 35%;
`

export const PledgesFormInput = styled.input`
    outline: none;
    border: none;
    color: #000;
    font-size: 14px;
    width: 65%;
    &::placeholder {
        font-family: 'Gotham', sans-serif;
        opacity: .4;
    }
`

export const PledgesFormTextarea = styled.textarea`
    outline: none;
    border: none;
    color: #000;
    font-size: 14px;
    height: 100px;
    resize: none;
    width: 100%;
    &::placeholder {
        font-family: 'Gotham', sans-serif;
        opacity: .4;
    }
`

export const PledgesFormTabs = styled.div`
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, .3);
    padding-bottom: 25px;
    margin-bottom: 25px;
`

export const PledgesFormTabsHolder = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
`

export const PledgesFormTabsButton = styled.button`
    padding: 8px 12px;
    color: #000;
    border-radius: 34px;
    border: 1px solid #000;
    background-color: transparent;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 1.5px;
    &:hover {
        background-color: #000;
        color: #fff;
    }
`

export const PledgesFormButton = styled.button`
    padding: 14px 40px;
    background-color: #efefef;
    border-radius: 29px;
    font-size: 14px;
    color: #000;
    line-height: 17px;
    text-transform: uppercase;
    margin: 0 auto;
    display: block;
    width: 142px;
    letter-spacing: 2px;
    text-align: center;
`

export const PledgesFormTextareaHolder = styled.div`
    width: 65%;
`

export const PledgesFormCount = styled.span`
    display: block;
    text-align: right;
    font-size: 12px;
    line-height: 14px;
    opacity: 1;
    color: #000;
`

export const PledgesFormCountInner = styled.span`
    opacity: .5;
`