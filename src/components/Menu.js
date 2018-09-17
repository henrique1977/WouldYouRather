import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

const Menu = ({page, authedUser}) => {

  const selected = {color: "#feb954"};
  const name = (authedUser.isAuthedUser) ? authedUser.authedUser.name : '';

  return (
    <div className="menu">
      <div className="menu-wrapper">
        <div className="menu-left">
            <Link to="/" className="menu-item" style={page==='home' ? selected : {}}>Home</Link>
            <Link to="/addquestion" className="menu-item" style={page==='addQuestion' ? selected : {}}>Add Question</Link>
            <Link to="/leaderboard" className="menu-item" style={page==='leaderboard' ? selected : {}}>Leaderboard</Link>
        </div>
        <div className="menu-right">
          <div className="menu-item-hello">Welcome, {name}</div>
          <Link to="/logout" className="menu-item" style={menuItemStyle}>Logout</Link>
        </div>
      </div>
      <div className="menu-separator">
        <hr className="separator"/>
      </div>

    </div>

  );
}

const menuItemStyle = {
  // padding: "3px",
  // textTransform: "uppercase",
  // textDecoration: "none"
};

const mapStateToProps = state => {

  return ({
    authedUser: state.authedUser
  });
};

//export default Menu;
export default connect(mapStateToProps, null)(Menu);
