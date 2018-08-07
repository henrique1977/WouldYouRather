import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/Users';
import Menu from '../components/Menu';

class Home extends React.Component {


  render() {

    return (
      <div>
        <Menu />
      </div>
    );
  };

}

const mapStateToProps = state => ({
  authedUser: state.authedUser,
  users: state.users
});

export default connect(mapStateToProps, actions)(Home);
