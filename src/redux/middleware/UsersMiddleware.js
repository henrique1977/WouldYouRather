import { GET_USERS_SUCCESS, hideSpinner } from "../actions/Users";

export const turnOffSpinner = ({dispatch}) => next => action => {
  next(action);

  if (action.type === GET_USERS_SUCCESS) {
    dispatch(hideSpinner());
  }
};

export const usersMdl = [turnOffSpinner];
