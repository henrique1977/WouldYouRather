import { GET_USERS_SUCCESS, SHOW_SPINNER, HIDE_SPINNER } from '../actions/Users';
import { objToArray } from '../../library/functions';


const initialState = {
  isLoading: false,
  users: [
    {
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
  ]
}

export default (state = initialState, action) => {

  switch(action.type) {

    case GET_USERS_SUCCESS: {
      const data = objToArray(action.payload);
      return {...state, users: data};
    }

    case SHOW_SPINNER: {
      return {...state, isLoading: true};
    }

    case HIDE_SPINNER: {
      return {...state, isLoading: false};
    }

    default:
      return state;
  }
}
