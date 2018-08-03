import {APP_HAS_STARTED} from "../actions/Control";
import { GET_USERS_SUCCESS, GET_USERS_ERROR, showSpinner } from '../actions/Users';
import {apiRequest} from "../actions/Api";
import { _getUsers } from '../../data/_DATA';


export const populateUsers = ({dispatch}) => next => action => {
  next(action);

  if (action.type === APP_HAS_STARTED) {
    dispatch(showSpinner());
    dispatch(apiRequest(_getUsers, GET_USERS_SUCCESS, GET_USERS_ERROR));
  }
};

export const controlMdl = [populateUsers];
