import React, { useRef, useState } from 'react';
import { login } from '../../firebase';
import Form from '../Form/Form'
import './Login.styled'
import { LoginFail, LoginHolder, LoginTitle } from './Login.styled';
import { useNavigate } from "react-router-dom"

export default function Login() {
    const [fail, setFail] = useState(false);

    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();

    const loginFail = () => {
        if(fail === true) {
            return <LoginFail>Wrong Email or Password!</LoginFail>
        }
    }

    async function handleLogin() {
        try {
        await login(emailRef.current.value, passwordRef.current.value);
        navigate('/home')
        } catch {
            setFail(true);
        }
    }
  return (
    <LoginHolder>
        <LoginTitle>Sticking to new habits</LoginTitle>
        <Form onClick={handleLogin}
        email='Email:'
        password='Password:'
        emailPlaceholder='Type your email here'
        passwordPlaceholder='Type your password here'
        emailRef={emailRef}
        passwordRef={passwordRef}
        loginFail={loginFail()}
        />
    </LoginHolder>
  )
}
