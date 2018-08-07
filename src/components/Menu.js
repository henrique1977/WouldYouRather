import React from 'react';
import { Link } from "react-router-dom";

const Menu = props => {
  return (
    <div className="menu-wrapper">
      <Link to="/" className="menu-item">Home</Link>  |
      <Link to="/addquestion" className="menu-item">Add Questions</Link>  |
      <Link to="/leaderboard" className="menu-item">Leaderboard</Link>  |
      <Link to="/logout" className="menu-item">Logout</Link>
    </div>
  );
}

export default Menu;
