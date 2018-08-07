import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../redux/actions/AuthedUser';

const mapDispatchToProps = {
 logout,
};

const Logout = (props) => {
    console.log('logout ***');
    console.log(props);
    props.logout();
    return (<div>Logout!!</div>);
}

export default connect(null, mapDispatchToProps)(Logout);;
