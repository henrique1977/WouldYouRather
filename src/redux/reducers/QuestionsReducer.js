// QuestionsReducer

const initialState = {
  questions: []
}

export default (state = initialState, action) => {

  switch(action.type) {

    case 'test': {

      break;
    }
    default:
      return state;
  }

  return state;
}
