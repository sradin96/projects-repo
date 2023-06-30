import styled from 'styled-components';

export const FormHolder = styled.div`
    padding: 26px 20px 31px;
    max-width: 430px;
    width: 100%;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 13px;
`

export const FormBlock = styled.form`
    width: 100%;
    margin-bottom: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, .3);
    padding-bottom: 30px;
`

export const InputHolder = styled.div`
    margin-bottom: 20px;
    padding-bottom: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    &:first-child {
        border-bottom: 1px solid rgba(0, 0, 0, .3);
    }
`

export const Label = styled.label`
    font-size: 14px;
    font-weight: 400;
    color: #000;
    width: 25%;
`

export const Input = styled.input`
    width: 75%;
    border: none;
    outline: none;
    &::placeholder {
        color: #000;
        opacity: .7;
    }
`

export const Submit = styled.button`
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

export const GuestBtn = styled.button`
    display: block;
    text-align: center;
    font-size: 14px;
    letter-spacing: 2px;
    color: #000;
    text-transform: uppercase;
    background-color: transparent;
    margin: 0 auto;
`