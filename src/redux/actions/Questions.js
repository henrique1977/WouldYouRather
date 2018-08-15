export const LOAD_QUESTIONS_DATA = '[questions] Load questions data';
export const GET_QUESTIONS_SUCCESS = '[questions] Get questions success';
export const GET_QUESTIONS_ERROR = '[questions] Get questions error';
export const UPDATE_ANSWER_ON_QUESTION = '[questions] Update answer questions';

export const loadQuestionsData = () => ({
    type: LOAD_QUESTIONS_DATA
});

export const updateAnswerQuestions = (userId, questionId, voteOption) => ({
  type: UPDATE_ANSWER_ON_QUESTION,
  payload: {userId, questionId, voteOption}
});
