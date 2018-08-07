import { GET_USERS_SUCCESS, hideSpinner,  USER_WAS_CHOSEN, LOAD_USER_DATA} from "../actions/Users";
import { GET_USERS_ERROR, showSpinner } from '../actions/Users';
import {apiRequest} from "../actions/Api";
import { _getUsers } from '../../data/_DATA';
import { authenticateUser } from "../actions/AuthedUser";
import { findUserWithId } from "../../library/functions";

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
    dispatch(authenticateUser(findUserWithId(chosenUser.value, users)));

  }
};

export const usersMdl = [turnOffSpinner, transformChosenUser, populateUsers];
