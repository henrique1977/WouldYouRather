import { GET_USERS_SUCCESS, GET_USERS_ERROR, USER_WAS_CHOSEN, LOAD_USER_DATA, PROCESS_UPDATE_ANSWER} from "../actions/Users";
import { showSpinner, hideSpinner, updateAnswerUsers } from '../actions/Users';
import { updateAnswerQuestions } from '../actions/Questions';
import {apiRequest} from "../actions/Api";
import { _getUsers } from '../../data/_DATA';
import { authenticateUser } from "../actions/AuthedUser";
import { findUserOnObjWithId } from "../../library/functions";

export const turnOffSpinner = ({dispatch}) => next => action => {
  next(action);

  if (action.type === GET_USERS_SUCCESS) {
    dispatch(hideSpinner());
  }
};

export const populateUsers = ({dispatch}) => next => action => {
  next(action);

  if (action.type === LOAD_USER_DATA) {
    dispatch(showSpinner());
    dispatch(apiRequest(_getUsers, GET_USERS_SUCCESS, GET_USERS_ERROR));
  }
};

export const transformChosenUser = ({dispatch}) => next => action => {
  next(action);

  if (action.type === USER_WAS_CHOSEN) {
    const {chosenUser, users} = action.payload;
    dispatch(authenticateUser(findUserOnObjWithId(chosenUser.value, users)));

  }
};

//split the update answer in two events, one for usersReducer and one for the questionsReducer
export const splitUpdateAnswer = ({dispatch}) => next => action => {
  next(action);

  if (action.type === PROCESS_UPDATE_ANSWER) {
    const {questionId, userId, answerObj} = action.payload;
    const voteOption = answerObj[questionId];

    dispatch(updateAnswerUsers(userId, answerObj));
    dispatch(updateAnswerQuestions(userId, questionId, voteOption));
  }
};


export const usersMdl = [turnOffSpinner, transformChosenUser, populateUsers, splitUpdateAnswer];
