import UsersReducer from '../../../../redux/reducers/UsersReducer';

const initialState = {
  isLoading: false,
  users: {
    sarahedo: {
      id: 'sarahedo',
      name: 'Sarah Edo',
      avatarURL: '',
      answers: {
        "8xf0y6ziyjabvozdd253nd": 'optionOne',
        "6ni6ok3ym7mf1p33lnez": 'optionOne',
        "am8ehyc8byjqgar0jgpub9": 'optionTwo',
        "loxhs1bqm25b708cmbf3g": 'optionTwo'
      },
      questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
    }
  }
}

const initialStateTest = {
  isLoading: false,
  users: {
    sarahedo: {
        id: 'sarahedo',
        name: 'Peter Panno',
        avatarURL: 'hrshsys',
        answers: {
          "8xf0y6ziyjabvozdd253nd": 'optionOne',
          "6ni6ok3ym7mf1p33lnez": 'optionOne',
          "am8ehyc8byjqgar0jgpub9": 'optionTwo',
          "loxhs1bqm25b708cmbf3g": 'optionTwo'
        },
        questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
    }
  }
}

describe("Test suite for the UsersReducer initial state", () => {

  it('it renders default state', () => {
    expect(UsersReducer(undefined, {})).toEqual(initialState);
    expect(UsersReducer(initialState, {})).toEqual(initialState);
  });

  it('it renders the initial state that is passed to the reducer', () => {
    expect(UsersReducer(initialStateTest, {})).toEqual(initialStateTest);
  });

});


const payload = {
      sarahedo: {
        id: 'sarahedo',
        name: 'Sarah Edo',
        avatarURL: '',
        answers: {
          '8xf0y6ziyjabvozdd253nd': 'optionOne',
          '6ni6ok3ym7mf1p33lnez': 'optionOne',
          am8ehyc8byjqgar0jgpub9: 'optionTwo',
          loxhs1bqm25b708cmbf3g: 'optionTwo'
        },
        questions: [
          '8xf0y6ziyjabvozdd253nd',
          'am8ehyc8byjqgar0jgpub9'
        ]
      },
      tylermcginnis: {
        id: 'tylermcginnis',
        name: 'Tyler McGinnis',
        avatarURL: '',
        answers: {
          vthrdm985a262al8qx3do: 'optionOne',
          xj352vofupe1dqz9emx13r: 'optionTwo'
        },
        questions: [
          'loxhs1bqm25b708cmbf3g',
          'vthrdm985a262al8qx3do'
        ]
      },
      johndoe: {
        id: 'johndoe',
        name: 'John Doe',
        avatarURL: '',
        answers: {
          xj352vofupe1dqz9emx13r: 'optionOne',
          vthrdm985a262al8qx3do: 'optionTwo',
          '6ni6ok3ym7mf1p33lnez': 'optionOne'
        },
        questions: [
          '6ni6ok3ym7mf1p33lnez',
          'xj352vofupe1dqz9emx13r'
        ]
      }
}

const finalState = {
  isLoading: false,
  users: {
    sarahedo: {
      id: 'sarahedo',
      name: 'Sarah Edo',
      avatarURL: '',
      answers: {
        '8xf0y6ziyjabvozdd253nd': 'optionOne',
        '6ni6ok3ym7mf1p33lnez': 'optionOne',
        am8ehyc8byjqgar0jgpub9: 'optionTwo',
        loxhs1bqm25b708cmbf3g: 'optionTwo'
      },
      questions: [
        '8xf0y6ziyjabvozdd253nd',
        'am8ehyc8byjqgar0jgpub9'
      ]
    },
    tylermcginnis: {
      id: 'tylermcginnis',
      name: 'Tyler McGinnis',
      avatarURL: '',
      answers: {
        vthrdm985a262al8qx3do: 'optionOne',
        xj352vofupe1dqz9emx13r: 'optionTwo'
      },
      questions: [
        'loxhs1bqm25b708cmbf3g',
        'vthrdm985a262al8qx3do'
      ]
    },
    johndoe: {
      id: 'johndoe',
      name: 'John Doe',
      avatarURL: '',
      answers: {
        xj352vofupe1dqz9emx13r: 'optionOne',
        vthrdm985a262al8qx3do: 'optionTwo',
        '6ni6ok3ym7mf1p33lnez': 'optionOne'
      },
      questions: [
        '6ni6ok3ym7mf1p33lnez',
        'xj352vofupe1dqz9emx13r'
      ]
    }
  }
}

describe("Test suite for the UsersReducer", () => {

  it('it update state with data from API', () => {
    const actionObj = {
      type: '[users] Get users success',
      payload: payload
    }
    //expect(MenuItemsReducer(initState, {type: 'HANDLE_HALF_AND_HALF_SEGMENT_CHANGE', payload:0 })).toEqual(finalState);
    expect(UsersReducer(initialState, actionObj)).toEqual(finalState);

    // make sure it preserves the isLoading state
    expect(UsersReducer({...initialState, isLoading:true}, actionObj)).toEqual({...finalState, isLoading:true});

  });

  it('updates the isLoading property so that UI can show/hide the spinner', () => {
    const spStateInitial = {isLoading: false, users: []};
    const spStateShow = {isLoading: true, users: []};
    const spStateHide = {isLoading: false, users: []};

    const actionObjToShow = { type: '[UI] Show spinner' };
    const actionObjToHide = { type: '[UI] Hide spinner' };

    expect(UsersReducer(spStateInitial, actionObjToShow)).toEqual(spStateShow);
    expect(UsersReducer(spStateShow, actionObjToHide)).toEqual(spStateHide);

    // make sure it doesn't toggle if you call twice:
    expect(UsersReducer(spStateShow, actionObjToShow)).toEqual(spStateShow);
    expect(UsersReducer(spStateHide, actionObjToHide)).toEqual(spStateHide);
  });


  //finalState
  it('it updates the answers', () => {

    const expectedFinalState = {
      isLoading: false,
      users: {
        sarahedo: {
          id: 'sarahedo',
          name: 'Sarah Edo',
          avatarURL: '',
          answers: {
            '8xf0y6ziyjabvozdd253nd': 'optionOne',
            '6ni6ok3ym7mf1p33lnez': 'optionOne',
            am8ehyc8byjqgar0jgpub9: 'optionTwo',
            loxhs1bqm25b708cmbf3g: 'optionTwo'
          },
          questions: [
            '8xf0y6ziyjabvozdd253nd',
            'am8ehyc8byjqgar0jgpub9'
          ]
        },
        tylermcginnis: {
          id: 'tylermcginnis',
          name: 'Tyler McGinnis',
          avatarURL: '',
          answers: {
            vthrdm985a262al8qx3do: 'optionOne',
            xj352vofupe1dqz9emx13r: 'optionTwo',
            "8xf0y6ziyjabvozdd253nd": 'optionOne'
          },
          questions: [
            'loxhs1bqm25b708cmbf3g',
            'vthrdm985a262al8qx3do'
          ]
        },
        johndoe: {
          id: 'johndoe',
          name: 'John Doe',
          avatarURL: '',
          answers: {
            xj352vofupe1dqz9emx13r: 'optionOne',
            vthrdm985a262al8qx3do: 'optionTwo',
            '6ni6ok3ym7mf1p33lnez': 'optionOne'
          },
          questions: [
            '6ni6ok3ym7mf1p33lnez',
            'xj352vofupe1dqz9emx13r'
          ]
        }
      }
    }

    const answerObj = {"8xf0y6ziyjabvozdd253nd": 'optionOne'};
    const userId = "tylermcginnis";
    const payload = {userId, answerObj};
    const actionObj = {
      type: '[users] Update answer users',
      payload: payload
    }

    expect(UsersReducer(finalState, actionObj)).toEqual(expectedFinalState);
  });


  it('adds a question', () => {

    const questionId = 'H78rdDaD44J83al8qxT67F0';
    const userId = 'sarahedo';

    const actionObj = {
      type: '[users] Save new question',
      payload: {userId, questionId}
    };

    const addedQuestionState = {
      isLoading: false,
      users: {
        sarahedo: {
          id: 'sarahedo',
          name: 'Sarah Edo',
          avatarURL: '',
          answers: {
            "8xf0y6ziyjabvozdd253nd": 'optionOne',
            "6ni6ok3ym7mf1p33lnez": 'optionOne',
            "am8ehyc8byjqgar0jgpub9": 'optionTwo',
            "loxhs1bqm25b708cmbf3g": 'optionTwo'
          },
          questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9', questionId]
        }
      }
    }

    expect(UsersReducer(initialState, actionObj)).toEqual(addedQuestionState);

  });


});
