import { GET_QUESTIONS_SUCCESS, UPDATE_ANSWER_ON_QUESTION, SAVE_NEW_QUESTION } from '../actions/Questions';
import { getObjsWithArrayOfKeys, getObjsNotInObjWithArrayOfKeys } from '../../library/functions';

const initialState = {
  questions: {}
};

export default (state = initialState, action) => {

  switch(action.type) {

    case GET_QUESTIONS_SUCCESS: {
      return {...state, questions: action.payload};
    }

    case UPDATE_ANSWER_ON_QUESTION: {
      const {userId, questionId, voteOption} = action.payload;
      const question = state.questions[questionId];
      const updatedOption = question[voteOption] = {...question[voteOption], votes: [...question[voteOption].votes, userId]};
      const updatedQuestion = {[questionId]: {...question, [voteOption]: updatedOption}};

      return {...state, questions: {...state.questions, ...updatedQuestion}};
    }

    case SAVE_NEW_QUESTION: {
      const question = action.payload;
      return {...state, questions: {...state.questions, [question.id]: question}};      
    }

    default:
      return state;
  }
}

export const selectAnsweredQuestions = (questions, ids) => ((!ids || !questions) ? {} : getObjsWithArrayOfKeys(questions, ids));
export const selectUnansweredQuestions = (questions, ids) => ((!ids || !questions) ? {} : getObjsNotInObjWithArrayOfKeys(questions, ids));
