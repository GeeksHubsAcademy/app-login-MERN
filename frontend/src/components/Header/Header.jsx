import React from 'react';
import { Link } from 'react-router-dom'
import './Header.scss';
import { connect } from 'react-redux';
import { LOGOUT } from '../../redux/types';
// const Header = (props) => {
export const Header = (props) => {
    const logout = () => {
        localStorage.clear();
        // props.setUser(null)
        // setUser(null)
        props.dispatch({ type: LOGOUT, payload:{}});
    }
    return (
        <header className="header">
            <Link to="/">Home</Link>
            {/* {props.user ? */}
            {props.user?.email ?
                <div className="loggedIn">
                    {['admin', 'Dios'].includes(props.user.role) && <Link to="/users">users</Link>}
                    {/* {['doctores','becarios'].includes(props.user.role) &&<Link to="/pacientes">pacientes</Link> } */}
                    <Link to="/profile">{props.user.email} - {props.user.role}</Link>
                    <span className="logout" onClick={logout}>Logout</span>
                </div> :
                <div className="notLoggedIn">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Registro</Link>
                </div>}

        </header>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user.user
    }
}

export default connect(mapStateToProps)(Header);