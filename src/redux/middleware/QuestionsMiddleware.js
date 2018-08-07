import { LOAD_QUESTIONS_DATA, GET_QUESTIONS_SUCCESS, GET_QUESTIONS_ERROR } from "../actions/Questions";
import { _getQuestions } from '../../data/_DATA';
import {apiRequest} from "../actions/Api";

export const populateQuestions = ({dispatch}) => next => action => {
  next(action);

  if (action.type === LOAD_QUESTIONS_DATA) {
    //dispatch(showSpinner());
    dispatch(apiRequest(_getQuestions, GET_QUESTIONS_SUCCESS, GET_QUESTIONS_ERROR));
  }
};

export const questionsMdl = [populateQuestions];
