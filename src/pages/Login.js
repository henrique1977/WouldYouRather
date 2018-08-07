import React from 'react';
import { connect } from 'react-redux';
import Loading from '../components/Loading';
import ChooseUser from '../components/ChooseUser';
import { arrayToDropDown } from '../library/functions';
import * as actions from '../redux/actions/Users';


class Login extends React.Component {

  componentDidUpdate() {
    // if user is authed in, then redirect to home page
    if (this.props.authedUser.isAuthedUser) {
      console.log('User is authed, so redirecting');
      //this.props.history.push('/');
      this.props.history.push(this.props.authedUser.nextPage);
    }
  }

  onLoginClick = (chosenUser) => {
    this.props.userWasChosen(chosenUser, this.props.users.users);
  }

  content(isLoading) {
    return (isLoading) ?
              <Loading /> :
              <ChooseUser
                usersDropdownData={arrayToDropDown(this.props.users.users)}
                onLoginClick={this.onLoginClick}
              />;
  }

  render() {

    return (
      <div>
        <div>Please Login Here!</div>
        { this.content(this.props.users.isLoading) }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authedUser: state.authedUser,
  users: state.users
});

export default connect(mapStateToProps, actions)(Login);
//export default () => <div>Please Login</div>;
