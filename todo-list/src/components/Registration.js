import React, { useState } from 'react'
import TodoListContainer from '../TodoListContainer';
import Header from './Header';
import LoginForm from './LoginForm';

export default function Registration() {
    const adminUser = {
        email: "stefan@admin.com",
        password: "admin123"
    }

    const [user, setUser] = useState({name: "", email: ""});
    const [error, setError] = useState('');

    const Login = (details) => {
        if(details.email === adminUser.email && details.password === adminUser.password) {
            setUser({
                name: details.name,
                email: details.email,
            })
        } else {
            setError('Your details do not match!')
        }
    }

    const Logout = () => {
        setUser({name: "", email: ""})
    }

  return (
    <div>
        {(user.email !== '') ? (
            <>
                <Header Logout={Logout} userName={user.name}/>
                <TodoListContainer />
            </>
        ) : <LoginForm Login={Login} error={error}/>}
    </div>
  )
}
