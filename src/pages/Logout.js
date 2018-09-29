import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../redux/actions/AuthedUser';


class Logout extends React.Component {

  componentDidMount() {
    const props = this.props;

    if (props.authedUser.isAuthedUser) {
      props.logout();
    }
    else {
      props.history.push('/');
    }
  }

  render() {
    return (<div>User has Logged out</div>);
  }

}

const mapStateToProps = state =>({
  authedUser: state.authedUser
});

const mapDispatchToProps = {
 logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);;
