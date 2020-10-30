import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const PrivateZone = (props) => {
    return props.user?.email ? props.children : <Redirect to='/login' />
}
const mapStateToProps = state => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(PrivateZone);
