import React from 'react';
import { connect } from 'react-redux';
import Loading from '../components/Loading';
import ChooseUser from '../components/ChooseUser';
import { objToDropDown } from '../library/functions';
import * as actions from '../redux/actions/Users';


class Login extends React.Component {

  componentDidUpdate() {
    // if user is authed in, then redirect to home page
    if (this.props.authedUser.isAuthedUser) {
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
                usersDropdownData={objToDropDown(this.props.users.users)}
                onLoginClick={this.onLoginClick}
              />;
  }

  render() {

    return (
      <div className="pages-wrapper">
        <div>Please Login: <br /></div>
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
