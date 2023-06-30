import styled from 'styled-components';

export const ActionsItemBlock = styled.div`
    width: 20%;
    padding: 20px 33px 5px 33px;
    border-right: 1px solid rgba(34, 34, 34, .24);
    &:first-child {
        padding-left: 0;
    }
    &:last-child {
        padding-right: 0;
        border-right: none;
    }
`

export const ActionsItemNumber = styled.h3`
    font-size: 140px;
    line-height: 174px;
    color: #000;
    font-family: Buttergone;
    text-align: center;
    margin-bottom: 14px;
`

export const ActionsItemTitle = styled.h4`
    color: #222222;
    font-size: 26px;
    line-height: 31px;
    margin-bottom: 8px;
`

export const ActionsItemText = styled.p`
    color: #222222;
    font-size: 14px;
    line-height: 17px;
    margin-bottom: 16px;
`

export const ActionsItemSmall = styled.span`
    font-size: 14px;
    color: #222222;
    line-height: 17px;
    margin-bottom: 8px;
    display: block;
`

export const ActionsItemList = styled.ul``

export const ActionsItemItem = styled.li`
font-size: 14px;
    line-height: 17px;
    color: #222;
    padding-left: 18px;
    position: relative;
    margin-bottom: 3px;
    &::before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 7px;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: #222;
    }
`