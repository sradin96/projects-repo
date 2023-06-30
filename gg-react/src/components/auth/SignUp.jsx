import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, signInWithPopup } from 'firebase/auth'
import { useState } from 'react'
import { auth } from '../../firebase'
import { NavLink, useNavigate } from "react-router-dom";


export default function SignIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // userCredential.user.sendEmailVerification();
            sendEmailVerification(userCredential.user)
            navigate('/home')
        }).catch((error) => {
            console.log(error)
        })
    }

    const handleGoogleSignUp = () => {
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
        <h1 className='page-title'>Sign Up</h1>
        <form className='sign-form__form' onSubmit={handleSignUp}>
            <div className="sign-form__holder">
                <label htmlFor="email" className="sign-form__label">Email:</label>
                <input className='sign-form__input' type="email" id='email' placeholder='example@example.com' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="sign-form__holder">
                <label htmlFor="password" className="sign-form__label">Password:</label>
                <input className='sign-form__input' type="password" placeholder='*******' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <span className="sign-form__text">Already have an account?</span>
            <NavLink to='/signin' className="sign-form__link">Sing In!</NavLink>
            <button className='sign-form__submit btn' type='submit'>Submit</button>
            <button className="sign-form__google" onClick={handleGoogleSignUp}>Sign up with Google!</button>
        </form>
    </div>
</main>
  )
}