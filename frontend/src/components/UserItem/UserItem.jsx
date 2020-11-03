import React from 'react'

const UserItem = ({ user }) => {
    return (<div className="user" key={user._id}>
        <span>Nombre : {user.name}</span>
        <span>Email : {user.email}</span>
    </div>
    )
}

export default UserItem
