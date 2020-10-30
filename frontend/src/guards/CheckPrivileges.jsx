import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const CheckPrivileges = (props) => {
    return props.roles.includes(props.user?.role) ? props.children : <Redirect to='/' />
}

const mapStateToProps = state => {
    return {
        user: state.user,
        // role: state.user?.role
    }
}

export default connect(mapStateToProps)(CheckPrivileges);