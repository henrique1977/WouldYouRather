import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/AuthedUser';

export default function(PageComponent, nextPage = null) {
  class Auth extends React.Component {

    componentDidMount() {
      // Check if user is Authenticated; if not, redirect to /login
      if (!this.props.isAuthedUser) {
        if (nextPage) {
            this.props.setNextPage(nextPage);
        }
        this.props.history.push('/login');
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

  return connect(mapStateToProps, actions)(Auth);
}
