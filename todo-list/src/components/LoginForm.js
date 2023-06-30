import React, { useState } from 'react'
import '../styles/form.css'

export default function LoginForm({ Login, error }) {
    const [details, setDetails] = useState({ name: "", email: "", password: ""})

    const submitHandler = e => {
        e.preventDefault();
        Login(details)
    }

  return (
    <div className='form'>
        <div className='form__wrap wrap'>
            <form className='form__holder' onSubmit={submitHandler}>
                <h1 className='form__title'>Login</h1>
                {(error !== '') ? (
                    <div className='form__error-block'>
                        <h2 className='form__error'>{error}</h2>
                    </div>
                ) : ''}
                <div className='form__block'>
                    <label className='form__label' htmlFor="name">Name</label>
                    <input type='text' className='form__input' id="name" onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
                </div>
                <div className='form__block'>
                    <label className='form__label' htmlFor="email">Email</label>
                    <input type='email' className='form__input' id="email" onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                <div className='form__block'>
                    <label className='form__label' htmlFor="password">Password</label>
                    <input type='password' className='form__input' id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                <button type='submit' className='form__btn'>Submit</button>
            </form>
        </div>
    </div>
  )
}
