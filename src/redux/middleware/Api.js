import { API_REQUEST } from "../actions/Api";

export const api = ({dispatch}) => next => action => {

  if(action.type === API_REQUEST) {
    const { method, onSuccess, onError } = action.payload;

    method()
      .then((data) => dispatch({ type: onSuccess, payload: data }))
      .catch(error => dispatch({ type: onError, payload: error }))
  }
  return next(action);
}
