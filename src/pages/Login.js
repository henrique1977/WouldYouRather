import React from 'react';
import { connect } from 'react-redux';
import Loading from '../components/Loading';
import ChooseUser from '../components/ChooseUser';

class Login extends React.Component {

  componentDidMount() {
    console.log('Login page: ComponentDidMount');
    console.log(this.props.users);
  }

  content(isLoading) {
    return (isLoading) ? <Loading /> : <ChooseUser users={this.props.users.users}/>;
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

const actions = null;

const mapStateToProps = state => ({
  //pending       : state.ui.pending,
  //orderInProcess: state.ui.orderInProcess,
  users: state.users
});

export default connect(mapStateToProps, actions)(Login);
//export default () => <div>Please Login</div>;
