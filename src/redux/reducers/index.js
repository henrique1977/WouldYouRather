import { combineReducers } from 'redux';
import UsersReducer from './UsersReducer.js';
import QuestionsReducer from './QuestionsReducer.js';
import AuthedUserReducer from './AuthedUserReducer.js';

export default combineReducers({
  users: UsersReducer,
  questions: QuestionsReducer,
  authedUser: AuthedUserReducer
});
