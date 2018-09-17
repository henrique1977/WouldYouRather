import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../redux/actions/AuthedUser';


class Logout extends React.Component {

  componentDidMount() {
    const props = this.props;

    console.log('logout will mount');
    console.log(props);

    if (props.authedUser.isAuthedUser) {
      props.logout();
    }
    else {
      props.history.push('/');
    }
  }

  render() {
    return (<div>Logout!</div>);
  }

}

const mapStateToProps = state =>({
  authedUser: state.authedUser
});

const mapDispatchToProps = {
 logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);;
