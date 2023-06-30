import React from 'react'
import { useNavigate } from "react-router-dom"
import { FormBlock, FormHolder, GuestBtn, Input, InputHolder, Label, Submit } from './Form.styled';
import './Form.styled'

export default function Form(props) {
    const navigate = useNavigate();

    const email = props.email;
    const emailPlaceholder = props.emailPlaceholder;
    const password = props.password;
    const passwordPlaceholder = props.passwordPlaceholder

    const emailRef = props.emailRef;
    const passwordRef = props.passwordRef;

    const handleGuest = () => {
        navigate('/home')
    }

  return (
    <FormHolder>
        <FormBlock>
            <InputHolder>
                <Label>{email}</Label>
                <Input ref={emailRef} placeholder={emailPlaceholder}></Input>
            </InputHolder>
            <InputHolder>
                <Label>{password}</Label>
                <Input ref={passwordRef} type='password' placeholder={passwordPlaceholder}></Input>
            </InputHolder>
            <Submit type='button' onClick={props.onClick}>Submit</Submit>
            {props.loginFail}
        </FormBlock>
        <GuestBtn onClick={handleGuest}>Continue as guest</GuestBtn>
    </FormHolder>
  )
}
