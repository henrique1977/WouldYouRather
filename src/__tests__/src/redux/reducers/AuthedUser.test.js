import AuthedUserReducer from '../../../../redux/reducers/AuthedUserReducer';


const defaultEmptyState = {
  isAuthedUser: false,
  authedUser: null
}

const testState = {
  isAuthedUser: true,
  authedUser: {
    id: 'patricia1234',
    name: 'Patricia Jones',
  }
}

describe("Test suite for the QuestionsReducer", () => {

  it('it renders empty state if nothing is passed', () => {
    expect(AuthedUserReducer(undefined, {})).toEqual(defaultEmptyState);
  });

  it('it renders the initial state that is passed to the reducer', () => {
    expect(AuthedUserReducer(testState, {})).toEqual(testState);
  });

});
