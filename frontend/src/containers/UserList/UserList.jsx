import React, { useEffect } from 'react'
import {  useSelector } from 'react-redux';
import UserItem from '../../components/UserItem/UserItem';
import { getAllUsers } from '../../redux/actions/users';
const Users = (props) => {
    const users = useSelector(({ users }) => users)
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
//         users:state.users
//     }
// }
// const mapStateToProps = ({users}) => ({users});

// export default connect(mapStateToProps)(Users);

export default Users;