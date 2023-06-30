import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { useState } from 'react'
import { auth } from '../../firebase'
import PageTitle from '../Hooks/PageTitle'
import { NavLink, useNavigate } from "react-router-dom";
import { FirebaseError } from 'firebase/app';

export default function SignIn() {
    PageTitle('SingIn')
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            navigate('/home')
        }).catch((error) => {
            console.log(error)
        })
    }

    const handleGoogleSignIn = () => {
        const googleProvider = new GoogleAuthProvider()
        signInWithPopup(auth, googleProvider).then((response) => {
            navigate('/home')
        }).catch((error) => {
            console.log(error);
        })
    }

  return (
    <main>
        <div className="sign-form">
            <h1 className='page-title'>Sign In</h1>
            <form className='sign-form__form' onSubmit={handleSignIn}>
                <div className="sign-form__holder">
                    <label htmlFor="email" className="sign-form__label">Email:</label>
                    <input className='sign-form__input' type="email" id='email' placeholder='example@example.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="sign-form__holder">
                    <label htmlFor="password" className="sign-form__label">Password:</label>
                    <input className='sign-form__input' type="password" placeholder='*******' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <span className="sign-form__text">Don't have an account?</span>
                <NavLink to='/signup' className="sign-form__link">Sing Up!</NavLink>
                <button className='sign-form__submit btn' type='submit'>Submit</button>
                <button className="sign-form__google" onClick={handleGoogleSignIn}>Sign in with Google!</button>
            </form>
        </div>
    </main>
  )
}