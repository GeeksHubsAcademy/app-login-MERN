import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { GET_ALL_USERS } from '../../redux/types';
const Users = (props) => {
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        axios.get(process.env.REACT_APP_BASE_URL + '/users', {
            headers: {
                Authorization: token
            }
        }).then(res => props.dispatch({ type: GET_ALL_USERS, payload: res.data }));
    }, [])

    return (
        <div className="user-list">
            {props.users?.map(user => <div className="user" key={user._id}>
                <span>Nombre : {user.name}</span>
                <span>Email : {user.email}</span>
            </div>)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users:state.users
    }
}

export default connect(mapStateToProps)(Users);
