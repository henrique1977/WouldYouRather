export const AUTHENTICATE_USER = '[auth] Authenticate user';
export const LOGOUT_USER = '[auth] Logout user';
export const SET_NEXT_PAGE = '[auth] Set next page';
export const LOG_USER_OUT = '[auth] Log user out';

export const authenticateUser = user => ({
    type: AUTHENTICATE_USER,
    payload: user
})

export const logout = () => ({
    type: LOGOUT_USER
});

export const setNextPage = anyRoute => ({
    type: SET_NEXT_PAGE,
    payload: anyRoute
});

export const logUserOut = () => ({
    type: LOG_USER_OUT
});
