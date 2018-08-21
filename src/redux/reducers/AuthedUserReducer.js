import { AUTHENTICATE_USER, SET_NEXT_PAGE, LOG_USER_OUT } from '../actions/AuthedUser';

const initialState = {
  isAuthedUser: false,
  authedUser: null,
  nextPage: '/'
}

export default (state = initialState, action) => {

  switch(action.type) {

    case AUTHENTICATE_USER: {
      return {...state, isAuthedUser: true, authedUser: action.payload};
    }

    case SET_NEXT_PAGE: {
      return {...state, nextPage: action.payload};
    }

    case LOG_USER_OUT: {
      return initialState;
    }

    default:
      return state;
  }
}

export const selectAuthedUserId = authedUser => ((authedUser.isAuthedUser) ? authedUser.authedUser.id : null);
