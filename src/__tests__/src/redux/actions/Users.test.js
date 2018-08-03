import * as actions from '../../../../redux/actions/Users';
import { _getUsers } from '../../../../data/_DATA';

const apiRequestObj = {
  type: '[api] Api request',
  payload: {
      method: _getUsers,
      onSuccess: '',
      onError: ''
  }
}

describe('Testing the constants for users actions', () => {
  it('Correct constants for getUsers', () => {
    expect('[users] Get users success').toEqual(actions.GET_USERS_SUCCESS);
    expect('[users] Get users error').toEqual(actions.GET_USERS_ERROR);
  });

  it('Correct constants for getUsers', () => {
    expect(actions.showSpinner()).toEqual({type: '[UI] Show spinner'});
    expect(actions.hideSpinner()).toEqual({type: '[UI] Hide spinner'});
  });

});


// describe('Testing the Api action creators', () => {
//   it('creates a action for the Api Request', () => {
//     expect(actions.apiRequest('_getUsers')).toEqual(apiRequestObj);
//   });
// });


// export const GET_USERS_SUCCESS = '[books] Fetch success';
// export const FETCH_BOOKS_ERROR   = '[books] Fetch Error';
