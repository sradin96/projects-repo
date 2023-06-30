import styled from 'styled-components'
import tabImg from '../../assets/images/tag.png'

export const TabsBlock = styled.div`
    display: flex;
    align-items: center;
`

export const TabsIcon = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

export const TabsImg = styled.img.attrs({
    src: `${tabImg}`
  })``

export const TabsList = styled.ul`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const TabsItem = styled.li``

export const TabsButton = styled.button`
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