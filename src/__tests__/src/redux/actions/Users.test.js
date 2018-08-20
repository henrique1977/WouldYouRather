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

const users = [
  {id: 'user1', name: 'user one'},
  {id: 'user2', name: 'user two'},
  {id: 'user3', name: 'user 3'}
];

const chosenUser = {value: "tylermcginnis", label: "Tyler McGinnis"};
const chosenUserObj = {
  type: '[users] User was chosen',
  payload: {chosenUser, users}
};

describe('Testing users action creators', () => {
  it('Correct constants for getUsers', () => {
    expect('[users] Get users success').toEqual(actions.GET_USERS_SUCCESS);
    expect('[users] Get users error').toEqual(actions.GET_USERS_ERROR);
  });

  it('create actions to show and hide spinner', () => {
    expect(actions.showSpinner()).toEqual({type: '[UI] Show spinner'});
    expect(actions.hideSpinner()).toEqual({type: '[UI] Hide spinner'});
  });

  it('Creates an action for user was chosen', () => {
    expect(actions.userWasChosen(chosenUser, users)).toEqual(chosenUserObj);
  });

  it('Creates load user action', () => {
    expect(actions.loadUserData()).toEqual({type: '[users] Load user data'});
  });

  it('create action for adding answer to users answer', () => {
    const answerObj = {"8xf0y6ziyjabvozdd253nd": 'optionOne'};
    const userId = "myTestUserId111";
    const payload = {userId, answerObj};
    expect(actions.updateAnswerUsers(userId, answerObj)).toEqual({type: '[users] Update answer users', payload});
  });

  it('create Update add answer to users answer', () => {
    const answerObj = {"8xf0y6ziyjabvozdd253nd": 'optionOne'};
    const userId = "myTestUserId111";
    const questionId = "8xf0y6ziyjabvozdd253nd";
    const payload = {userId, questionId, answerObj};
    expect(actions.processUpdateAnswer(userId, questionId, answerObj)).toEqual({type: '[users] Process update answer', payload});
  });

  it('create action save a new question', () => {
    const questionId = 'G4L0k6zi9lkCv54ddLh9Rf';
    const userId = "myTestUserId111";
    const payload = {userId, questionId};
    expect(actions.saveQuestionToUsers(userId, questionId)).toEqual({type: '[users] Save new question', payload});
  });

});
