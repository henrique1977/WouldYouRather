export const GET_USERS_SUCCESS = '[users] Get users success';
export const GET_USERS_ERROR = '[users] Get users error';
export const SHOW_SPINNER = '[UI] Show spinner';
export const HIDE_SPINNER = '[UI] Hide spinner';
export const USER_WAS_CHOSEN = '[users] User was chosen';
export const LOAD_USER_DATA = '[users] Load user data';

export const showSpinner = () => ({
  type: SHOW_SPINNER
});

export const hideSpinner = () => ({
  type: HIDE_SPINNER
});

export const userWasChosen = (chosenUser, users) => ({
    type: USER_WAS_CHOSEN,
    payload: {chosenUser, users}
});

export const loadUserData = () => ({
    type: LOAD_USER_DATA
});
