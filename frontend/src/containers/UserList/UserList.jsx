import React, { useEffect } from 'react'
import {  useSelector } from 'react-redux';
import UserItem from '../../components/UserItem/UserItem';
import { getAllUsers } from '../../redux/actions/users';
const Users = (props) => {
    const users = useSelector(({ user }) => user.users)
    useEffect(() => {
        getAllUsers()
            .catch(error => console.error(error))
    }, [])

    return (
        <div className="user-list">
            {users?.map(user => <UserItem user={user} />)}
        </div>
    )
}
// const mapStateToProps = state => {
//     return {
//         users:state.user.users
//     }
// }
// const mapStateToProps = ({user}) => ({users:user.users});

// export default connect(mapStateToProps)(Users);

export default Users;