import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/Questions';
import Menu from '../components/Menu';
import { objToArray, sortByTotal } from '../library/functions';
import User from '../components/User';

class Leaderboard extends React.Component {


  render() {

    console.log(this.props.users.users);
    const {users} = this.props.users;

    console.log(objToArray(users));

    return (
      <div className="pages-wrapper">
        <Menu />
        <div >Leaderboard</div>
        <div className="questions-wrapper">

          { sortByTotal(objToArray(users)).map( (user) => (
            <User key={user.id} user={user} />
          ))}

      </div>
      </div>
    );
  }

}

const mapStateToProps = state => {

  return ({
    users: state.users
  });
};

export default connect(mapStateToProps, actions)(Leaderboard);
