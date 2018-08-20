export const LOAD_QUESTIONS_DATA = '[questions] Load questions data';
export const GET_QUESTIONS_SUCCESS = '[questions] Get questions success';
export const GET_QUESTIONS_ERROR = '[questions] Get questions error';
export const UPDATE_ANSWER_ON_QUESTION = '[questions] Update answer questions';
export const ADD_NEW_QUESTION = '[questions] Add new question';
export const SAVE_NEW_QUESTION = '[questions] Save new question';


export const loadQuestionsData = () => ({
    type: LOAD_QUESTIONS_DATA
});

export const updateAnswerQuestions = (userId, questionId, voteOption) => ({
  type: UPDATE_ANSWER_ON_QUESTION,
  payload: {userId, questionId, voteOption}
});

export const addNewQuestion = (userId, optionsObj) => ({
  type: ADD_NEW_QUESTION,
  payload: {userId, optionsObj}
});

export const saveNewQuestion = (question) => ({
  type: SAVE_NEW_QUESTION,
  payload: question
});
