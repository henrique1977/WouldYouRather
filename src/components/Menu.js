import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { logout } from '../redux/actions/AuthedUser';

const Menu = ({page, authedUser, logout, history}) => {

  const selected = {color: "#feb954"};
  const name = (authedUser.isAuthedUser) ? authedUser.authedUser.name : '';

  const doLogout = () => {
    logout();
    history.push('/login');
  }

  return (
    <div className="menu">
      <div className="menu-wrapper">
        <div className="menu-left">
            <Link to="/" className="menu-item" style={page==='home' ? selected : {}}>Home</Link>
            <Link to="/add" className="menu-item" style={page==='addQuestion' ? selected : {}}>Add Question</Link>
            <Link to="/leaderboard" className="menu-item" style={page==='leaderboard' ? selected : {}}>Leaderboard</Link>
        </div>
        <div className="menu-right">
          <div className="menu-item-hello">Welcome, {name}</div>
            <button className="menu-item logout-button" href="" onClick={doLogout}>Logout</button>
        </div>
      </div>
      <div className="menu-separator">
        <hr className="separator"/>
      </div>

    </div>

  );
}

const mapStateToProps = state => {

  return ({
    authedUser: state.authedUser
  });
};

const mapDispatchToProps = {
 logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
