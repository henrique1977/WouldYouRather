import { GET_USERS_SUCCESS, SHOW_SPINNER, HIDE_SPINNER, UPDATE_ANSWER, SAVE_NEW_QUESTION_TO_USERS } from '../actions/Users';
import { findUserOnObjWithId, extractQuestions } from '../../library/functions';

const initialState = {
  isLoading: false,
  users: {    
  }
}

export default (state = initialState, action) => {

  switch(action.type) {

    case GET_USERS_SUCCESS: {
      //const data = objToArray(action.payload);
      return {...state, users: action.payload};
    }

    case SHOW_SPINNER: {
      return {...state, isLoading: true};
    }

    case HIDE_SPINNER: {
      return {...state, isLoading: false};
    }

    case UPDATE_ANSWER: {
      const {userId, answerObj} = action.payload;
      const user = state.users[userId];
      return {...state, users: {...state.users, [userId]: {...user, answers: {...user.answers, ...answerObj}}}};
    }

    case SAVE_NEW_QUESTION_TO_USERS: {
      const {userId, questionId} = action.payload;
      const user = state.users[userId];
      const newUserObj = {...user, questions: [...user.questions, questionId]};
      return {...state, users: {...state.users, [userId]: newUserObj}};
    }

    default:
      return state;
  }
}

export const selectLoggedInUser = (users, id) => {
  if (!id || !users) {
    return null;
  }

  return findUserOnObjWithId(id, users.users);
};

export const selectAnsweredQuestionIds = user => ((!user) ? [] : extractQuestions(user));
