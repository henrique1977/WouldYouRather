import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../redux/actions/AuthedUser';


const Logout = (props) => {
    console.log('logout ***');
    console.log(props.authedUser);

    if (props.authedUser.isAuthedUser) {
      props.logout();
    }
    else {
      props.history.push('/');
    }

    return (<div>Logout!</div>);
}

const mapStateToProps = state =>({
  authedUser: state.authedUser
});

const mapDispatchToProps = {
 logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);;
