import { GET_USERS_SUCCESS, SHOW_SPINNER, HIDE_SPINNER, UPDATE_ANSWER } from '../actions/Users';
import { findUserOnObjWithId, extractQuestions } from '../../library/functions';

const initialState = {
  isLoading: false,
  users: {
    sarahedo: {
        id: 'sarahedo',
        name: 'Sarah Edo',
        avatarURL: '',
        answers: {
          "8xf0y6ziyjabvozdd253nd": 'optionOne',
          "6ni6ok3ym7mf1p33lnez": 'optionOne',
          "am8ehyc8byjqgar0jgpub9": 'optionTwo',
          "loxhs1bqm25b708cmbf3g": 'optionTwo'
        },
        questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
    }
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
