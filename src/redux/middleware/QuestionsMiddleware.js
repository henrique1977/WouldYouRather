import { LOAD_QUESTIONS_DATA, GET_QUESTIONS_SUCCESS, GET_QUESTIONS_ERROR, ADD_NEW_QUESTION } from "../actions/Questions";
import { saveNewQuestion } from "../actions/Questions";
import { saveQuestionToUsers } from "../actions/Users";
import { _getQuestions } from '../../data/_DATA';
import {apiRequest} from "../actions/Api";
import { generateId, buildQuestionObj } from '../../library/functions';

export const populateQuestions = ({dispatch}) => next => action => {
  next(action);

  if (action.type === LOAD_QUESTIONS_DATA) {
    dispatch(apiRequest(_getQuestions, GET_QUESTIONS_SUCCESS, GET_QUESTIONS_ERROR));
  }
};

export const addNewQuestion = ({dispatch}) => next => action => {
  next(action);

  if (action.type === ADD_NEW_QUESTION) {
    const date = new Date();
    const timestamp = date.getTime();

    const {userId, optionsObj} = action.payload;
    const questionId = generateId();
    const questionObj = buildQuestionObj(questionId, userId, timestamp, optionsObj.optionOne, optionsObj.optionTwo);

    dispatch(saveQuestionToUsers(userId, questionId));
    dispatch(saveNewQuestion(questionObj));
  }
};

export const questionsMdl = [populateQuestions, addNewQuestion];
