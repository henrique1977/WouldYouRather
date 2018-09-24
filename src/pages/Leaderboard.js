import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/Questions';
import Menu from '../components/Menu';
import { objToArray, sortByTotal } from '../library/functions';
import User from '../components/User';

class Leaderboard extends React.Component {


  render() {

    console.log(this.props);

    console.log(this.props.users.users);
    const {users} = this.props.users;

    console.log(objToArray(users));

    return (
      <div className="pages-wrapper">
        <Menu page='leaderboard' history={this.props.history}/>
        <div className="leaderboard-container">
          <div className="leaderboard-header">
            <div className="leaderboard-title">Leaderboard</div>
          </div>
          <div className="leaderboard-wrapper">

            <div className="table-row header">
              <div className="text">Name</div>
              <div className="text">Avatar</div>
              <div className="num">Total</div>
              <div className="num">Questions</div>
              <div className="num">Answers</div>
            </div>

            { sortByTotal(objToArray(users)).map( (user) => (
              <User key={user.id} user={user} />
            ))}

          </div>
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
