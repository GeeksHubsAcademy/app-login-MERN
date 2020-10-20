import React from 'react';
import axios from 'axios'
import './Login.scss';
const Login = () => {
    const handleSubmit = event =>{
        event.preventDefault();
        const user ={
            email:event.target.email.value,
            password:event.target.password.value
        };
        console.log(user);
        // axios.post('http://localhost:3001/users/login',)
    }
    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <input type="email" name="email" required placeholder="Introduce tu email" />
            <input type="password" name="password" required placeholder="Introduce tu contraseña"/>
            <button type="submit">Log in</button>
        </form>
    )
}

export default Login
