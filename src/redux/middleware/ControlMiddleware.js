import {APP_HAS_STARTED} from "../actions/Control";
import { loadUserData } from '../actions/Users';
import { loadQuestionsData } from '../actions/Questions';

export const handleAppHasStarted = ({dispatch}) => next => action => {
  next(action);

  if (action.type === APP_HAS_STARTED) {
    dispatch(loadUserData());
    dispatch(loadQuestionsData());
  }
};

export const controlMdl = [handleAppHasStarted];
