import React, { useRef } from 'react'
import { signup } from '../../firebase'
import Form from '../Form/Form';
import { useNavigate } from "react-router-dom"
import { SignupHolder, SignupTitle } from './Signup.styled';

export default function Signup() {
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSignup = async () => {
        try {
        await signup(emailRef.current.value, passwordRef.current.value)
        navigate('/home')
        } catch {
        console.log('signup');
        }
    }
  return (
    <>
    <SignupHolder>
        <SignupTitle>Sticking to new habits</SignupTitle>
        <Form onClick={handleSignup}
        email='Email:'
        password='Password:'
        emailPlaceholder='Type your email here'
        passwordPlaceholder='Type your password here'
        emailRef={emailRef}
        passwordRef={passwordRef}
        />
    </SignupHolder>
    </>
  )
}
