import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import UserItem from '../../components/UserItem/UserItem';
import { getAllUsers } from '../../redux/actions';
const Users = (props) => {
    useEffect(() => {
        getAllUsers()
        .catch(error=> console.error(error))
        }, [])

    return (
        <div className="user-list">
            {props.users?.map(user => <UserItem user={user}/>)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        users:state.users
    }
}

export default connect(mapStateToProps)(Users);
