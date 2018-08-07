import * as actions from '../../../../redux/actions/Questions';
//import { _getUsers } from '../../../../data/_DATA';


describe('Testing the constants for users actions', () => {

  it('Creates load questions data action', () => {
    expect(actions.loadQuestionsData()).toEqual({type: '[questions] Load questions data'});
  });

  it('gets the correct constants for questions API call', () => {
    expect('[questions] Get questions success').toEqual(actions.GET_QUESTIONS_SUCCESS);
    expect('[questions] Get questions error').toEqual(actions.GET_QUESTIONS_ERROR);
  });

});
