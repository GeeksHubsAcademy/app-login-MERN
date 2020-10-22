import React from 'react'
import { Redirect } from 'react-router-dom'

const Profile = ({ user }) => {
    if(!user) return <Redirect to='/'/>
    return (
        <div className="profile">
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
        </div>
    )
}

export default Profile
