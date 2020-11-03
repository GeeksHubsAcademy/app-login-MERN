import React from 'react'
import { useSelector } from 'react-redux'
// import { Redirect } from 'react-router-dom'

const Profile = () => {
    const user = useSelector(state => state.user.user)
    return (
        <div className="profile">
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
        </div>
    )
}

export default Profile
