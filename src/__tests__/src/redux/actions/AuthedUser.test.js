import * as actions from '../../../../redux/actions/AuthedUser';

const sampleUser = {
  id: 'tylermcginnis',
  name: 'Tyler McGinnis',
  avatarURL: '',
  answers: {
    "8xf0y6ziyjabvozdd253nd": 'optionOne',
    "6ni6ok3ym7mf1p33lnez": 'optionOne',
    "am8ehyc8byjqgar0jgpub9": 'optionTwo',
    "loxhs1bqm25b708cmbf3g": 'optionTwo'
  },
  questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
};

const chosenUser = {value: "tylermcginnis", label: "Tyler McGinnis"};

const authenticateUserObj = {
  type: '[auth] Authenticate user',
  payload: chosenUser
};

describe('Testing AuthedUser action creators', () => {
  it('creates a action to authenticate a user', () => {
    expect(actions.authenticateUser(chosenUser)).toEqual(authenticateUserObj);
  });

  it('creates an action to logout a user', () => {
    const logoutActionObj = {
      type: '[auth] Logout user'
    };
    expect(actions.logout()).toEqual(logoutActionObj);
  });

  it('creates an action to set the next page', () => {
    const anyRoute = '/anyroute';
    const nextPageActionObj = {
      type: '[auth] Set next page',
      payload: anyRoute
    };
    expect(actions.setNextPage(anyRoute)).toEqual(nextPageActionObj);
  });

});
