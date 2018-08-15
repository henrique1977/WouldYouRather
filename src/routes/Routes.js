import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// handles authentication
import requireAuth from '../components/RequireAuth';

// pages or views
import Home from '../pages/Home';
import AddQuestion from '../pages/AddQuestion';
import Leaderboard from '../pages/Leaderboard';
import Question from '../pages/Question';
import Login from '../pages/Login';
import Logout from '../pages/Logout';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={requireAuth(Home, '/')}/>
      <Route path="/login" component={Login}/>
      <Route path="/addquestion" component={requireAuth(AddQuestion, '/addquestion')}/>
      <Route path="/leaderboard" component={requireAuth(Leaderboard, '/leaderboard')}/>
      <Route path="/logout" component={Logout}/>
      <Route path="/question/:question_id" component={requireAuth(Question, '/')}/>
    </div>
  </Router>
)
export default Routes;
