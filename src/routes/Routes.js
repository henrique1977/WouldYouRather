import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// handles authentication
import requireAuth from '../components/RequireAuth';

// pages or views
import Home from '../pages/Home';
import AddQuestion from '../pages/AddQuestion';
import Leaderboard from '../pages/Leaderboard';
import Login from '../pages/Login';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
      <Route path="/addquestion" component={requireAuth(AddQuestion)}/>
      <Route path="/leaderboard" component={requireAuth(Leaderboard)}/>
    </div>
  </Router>
)
export default Routes;
