import * as actions from '../../../../redux/actions/Api';

const apiRequestObj = {
  type: '[api] Api request',
  payload: {
      method: '_getUsers',
      onSuccess: '[TEST] On Sucess',
      onError: '[TEST] On Error'
  }
}

describe('Testing the Api action creators', () => {
  it('creates a action for the Api Request', () => {
    expect(actions.apiRequest('_getUsers', '[TEST] On Sucess', '[TEST] On Error')).toEqual(apiRequestObj);
  });
});
