import AuthedUserReducer from '../../../../redux/reducers/AuthedUserReducer';

const defaultEmptyState = {
  isAuthedUser: false,
  authedUser: null,
  nextPage: '/'
};

const testState = {
  isAuthedUser: true,
  authedUser: {
    id: 'patricia1234',
    name: 'Patricia Jones'
  },
  nextPage: '/'
};

describe("Test suite for the AuthedUserReducer", () => {

  it('it renders empty state if nothing is passed', () => {
    expect(AuthedUserReducer(undefined, {})).toEqual(defaultEmptyState);
  });

  it('it renders the initial state that is passed to the reducer', () => {
    expect(AuthedUserReducer(testState, {})).toEqual(testState);
  });

  it('it updated the authedUser (logs the user in)', () => {

    const sampleUser = {
      id: 'patricia1234',
      name: 'Patricia Jones',
      url: 'http://www.nothinghere.com'
    };

    const newInitialState = {...defaultEmptyState, nextPage: '/testing'};

    const authAction = {
      type: '[auth] Authenticate user',
      payload: sampleUser,
      nextPage: '/testing'
    };

    const finalAuthedState = {
      isAuthedUser: true,
      authedUser: sampleUser,
      nextPage: '/testing'
    };

    expect(AuthedUserReducer(newInitialState, authAction)).toEqual(finalAuthedState);
  });

  const nextPage = '/anyroute';
  const finalState = {...defaultEmptyState, nextPage: nextPage};
  //[auth] Set next page
  it('it sets the next page to be used after login', () => {
    expect(AuthedUserReducer(defaultEmptyState, {type: '[auth] Set next page', payload: nextPage})).toEqual(finalState);
  });

  //'[auth] Authenticate user'

});
