import React from 'react';
import { connect } from 'react-redux';

export default function(PageComponent) {
  class Auth extends React.Component {

    componentWillMount() {
      // Check if user is Authenticated; if not, redirect to /login
      if (!this.props.isAuthedUser) {
        this.props.history.push('/login');
        console.log('User needs to login');
      }
    }

    render() {
      return (
        <PageComponent {...this.props} />
      );
    }
  }

  const mapStateToProps = (state) => ({
    isAuthedUser: state.authedUser.isAuthedUser
  });

  return connect(mapStateToProps)(Auth);
}
