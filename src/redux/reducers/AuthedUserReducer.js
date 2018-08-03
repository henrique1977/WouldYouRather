// AuthedUserReducer

const initialState = {
  isAuthedUser: false,
  authedUser: null
}

export default (state = initialState, action) => {

  switch(action.type) {

    case 'test': {

      break;
    }


    default:
      return state;

  }
}
