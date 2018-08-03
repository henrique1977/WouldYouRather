import * as actions from '../../../../redux/actions/Control';

const appHasStartedObj = {
  type: '[app] App has started'
}

describe('Testing Control action creators', () => {
  it('creates a action for: APP_HAS_STARTED event', () => {
    expect(actions.appHasStarted()).toEqual(appHasStartedObj);
  });
});
