import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// handles authentication
import requireAuth from '../components/RequireAuth';

// pages or views
import Home from '../pages/Home';
import AddQuestion from '../pages/AddQuestion';
import Leaderboard from '../pages/Leaderboard';
import Question from '../pages/Question';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import Page404 from '../pages/Page404';


const Routes = () => (
  <Router>
    <Switch>
        <Route exact path="/" component={requireAuth(Home, '/')}/>
        <Route path="/login" component={Login}/>
        <Route path="/add" component={requireAuth(AddQuestion, '/add')}/>
        <Route path="/leaderboard" component={requireAuth(Leaderboard, '/leaderboard')}/>
        <Route path="/logout" component={Logout}/>
        <Route path="/question/:question_id" component={requireAuth(Question, "/question/:question_id")}/>
        <Route component={Page404} />
    </Switch>
  </Router>
)
export default Routes;
