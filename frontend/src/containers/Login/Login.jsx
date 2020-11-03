import React from 'react';
import { useHistory } from 'react-router-dom'
import './Login.scss';
import { notification } from 'antd'
import { connect } from 'react-redux';
import { login } from '../../redux/actions/users';
// const Login = (props) => {
const Login = ({ dispatch, setUser }) => {
    const history = useHistory();
    const handleSubmit = event => {
        event.preventDefault(); // para evitar refrescar la página
        const user = {
            email: event.target.email.value,
            password: event.target.password.value
        };
        login(user).then(() => {
            notification.success({ message: 'Bienvenide', description: 'Bienvenide ' + user.email })
            setTimeout(() =>   history.push('/'), 1000);
        })
            .catch(error => {
                notification.error({ message: 'Error', description: 'Hubo un problema con el login' })
            })
    }
    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <input type="email" name="email" required placeholder="Introduce tu email" />
            <input type="password" name="password" required placeholder="Introduce tu contraseña" />
            <button type="submit">Log in</button>
        </form>
    )
}

export default connect()(Login);