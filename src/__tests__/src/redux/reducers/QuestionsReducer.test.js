import QuestionsReducer from '../../../../redux/reducers/QuestionsReducer';

const initialState = {
  questions: {
    "8xf0y6ziyjabvozdd253nd": {
      id: '8xf0y6ziyjabvozdd253nd',
      author: 'sarahedo',
      timestamp: 1467166872634,
      optionOne: {
        votes: ['sarahedo'],
        text: 'have horrible short term memory',
      },
      optionTwo: {
        votes: [],
        text: 'have horrible long term memory'
      }
    }
  }
}

const testState = {
  questions: {
    "8xf0y6ziyjabvozdd253nd": {
      id: '8xf0y6ziyjabvozdd253nd',
      author: 'sarahedo',
      timestamp: 1467166872634,
      optionOne: {
        votes: ['sarahedo'],
        text: 'have horrible short term memory',
      },
      optionTwo: {
        votes: [],
        text: 'have horrible long term memory'
      }
    },
    "6ni6ok3ym7mf1p33lnez": {
      id: '6ni6ok3ym7mf1p33lnez',
      author: 'johndoe',
      timestamp: 1468479767190,
      optionOne: {
        votes: [],
        text: 'become a superhero',
      },
      optionTwo: {
        votes: ['johndoe', 'sarahedo'],
        text: 'become a supervillian'
      }
    },
    "am8ehyc8byjqgar0jgpub9": {
      id: 'am8ehyc8byjqgar0jgpub9',
      author: 'sarahedo',
      timestamp: 1488579767190,
      optionOne: {
        votes: [],
        text: 'be telekinetic',
      },
      optionTwo: {
        votes: ['sarahedo'],
        text: 'be telepathic'
      }
    },
    "loxhs1bqm25b708cmbf3g": {
      id: 'loxhs1bqm25b708cmbf3g',
      author: 'tylermcginnis',
      timestamp: 1482579767190,
      optionOne: {
        votes: [],
        text: 'be a front-end developer',
      },
      optionTwo: {
        votes: ['sarahedo'],
        text: 'be a back-end developer'
      }
    },
    "vthrdm985a262al8qx3do": {
      id: 'vthrdm985a262al8qx3do',
      author: 'tylermcginnis',
      timestamp: 1489579767190,
      optionOne: {
        votes: ['tylermcginnis'],
        text: 'find $50 yourself',
      },
      optionTwo: {
        votes: ['johndoe'],
        text: 'have your best friend find $500'
      }
    },
    "xj352vofupe1dqz9emx13r": {
      id: 'xj352vofupe1dqz9emx13r',
      author: 'johndoe',
      timestamp: 1493579767190,
      optionOne: {
        votes: ['johndoe'],
        text: 'write JavaScript',
      },
      optionTwo: {
        votes: ['tylermcginnis'],
        text: 'write Swift'
      }
    },
  }
}

const testStateWithVote = {
  questions: {
    "8xf0y6ziyjabvozdd253nd": {
      id: '8xf0y6ziyjabvozdd253nd',
      author: 'sarahedo',
      timestamp: 1467166872634,
      optionOne: {
        votes: ['sarahedo'],
        text: 'have horrible short term memory',
      },
      optionTwo: {
        votes: [],
        text: 'have horrible long term memory'
      }
    },
    "6ni6ok3ym7mf1p33lnez": {
      id: '6ni6ok3ym7mf1p33lnez',
      author: 'johndoe',
      timestamp: 1468479767190,
      optionOne: {
        votes: [],
        text: 'become a superhero',
      },
      optionTwo: {
        votes: ['johndoe', 'sarahedo'],
        text: 'become a supervillian'
      }
    },
    "am8ehyc8byjqgar0jgpub9": {
      id: 'am8ehyc8byjqgar0jgpub9',
      author: 'sarahedo',
      timestamp: 1488579767190,
      optionOne: {
        votes: [],
        text: 'be telekinetic',
      },
      optionTwo: {
        votes: ['sarahedo', 'johndoe'],
        text: 'be telepathic'
      }
    },
    "loxhs1bqm25b708cmbf3g": {
      id: 'loxhs1bqm25b708cmbf3g',
      author: 'tylermcginnis',
      timestamp: 1482579767190,
      optionOne: {
        votes: [],
        text: 'be a front-end developer',
      },
      optionTwo: {
        votes: ['sarahedo'],
        text: 'be a back-end developer'
      }
    },
    "vthrdm985a262al8qx3do": {
      id: 'vthrdm985a262al8qx3do',
      author: 'tylermcginnis',
      timestamp: 1489579767190,
      optionOne: {
        votes: ['tylermcginnis'],
        text: 'find $50 yourself',
      },
      optionTwo: {
        votes: ['johndoe'],
        text: 'have your best friend find $500'
      }
    },
    "xj352vofupe1dqz9emx13r": {
      id: 'xj352vofupe1dqz9emx13r',
      author: 'johndoe',
      timestamp: 1493579767190,
      optionOne: {
        votes: ['johndoe'],
        text: 'write JavaScript',
      },
      optionTwo: {
        votes: ['tylermcginnis'],
        text: 'write Swift'
      }
    },
  }
}

const defaultEmptyState = {
  questions: {}
}

const rawQuestions = {
    '8xf0y6ziyjabvozdd253nd': {
      id: '8xf0y6ziyjabvozdd253nd',
      author: 'sarahedo',
      timestamp: 1467166872634,
      optionOne: {
        votes: [
          'sarahedo'
        ],
        text: 'have horrible short term memory'
      },
      optionTwo: {
        votes: [],
        text: 'have horrible long term memory'
      }
    },
    '6ni6ok3ym7mf1p33lnez': {
      id: '6ni6ok3ym7mf1p33lnez',
      author: 'johndoe',
      timestamp: 1468479767190,
      optionOne: {
        votes: [],
        text: 'become a superhero'
      },
      optionTwo: {
        votes: [
          'johndoe',
          'sarahedo'
        ],
        text: 'become a supervillian'
      }
    }
  };

describe("Test suite for the QuestionsReducer", () => {

  it('it renders empty state if nothing is passed', () => {
    expect(QuestionsReducer(undefined, {})).toEqual(defaultEmptyState);
  });

  it('it renders the initial state that is passed to the reducer', () => {
    expect(QuestionsReducer(initialState, {})).toEqual(initialState);
  });

  it('takes the questions from _DATA and add to state', () => {
    const questionActionObj = {
      type: '[questions] Get questions success',
      payload: rawQuestions
    };
    const expectedState = {
      questions: rawQuestions
    };
    expect(QuestionsReducer(defaultEmptyState, questionActionObj)).toEqual(expectedState);
  });

  it('updates the votes on a question, after user votes', () => {

    const voteOption = 'optionTwo';
    const userId = 'johndoe';
    const questionId = 'am8ehyc8byjqgar0jgpub9';

    const answerActionObj = {
      type: '[questions] Update answer questions',
      payload: {userId, questionId, voteOption}
    };

    expect(QuestionsReducer(testState, answerActionObj)).toEqual(testStateWithVote);
  });

  it('adds a new question', () => {

    const question = {
      id: 'G4L0k6zi9lkCv54ddLh9Rf',
      author: 'sarahedo',
      timestamp: 1467166872634,
      optionOne: {
        votes: [],
        text: 'my option one text',
      },
      optionTwo: {
        votes: [],
        text: 'option two goes here'
      }
    };

    const questionActionObj = {
      type: '[questions] Save new question',
      payload: question
    };

    const state1 = {
      questions: {
        "8xf0y6ziyjabvozdd253nd": {
          id: '8xf0y6ziyjabvozdd253nd',
          author: 'sarahedo',
          timestamp: 1467166872634,
          optionOne: {
            votes: ['sarahedo'],
            text: 'have horrible short term memory',
          },
          optionTwo: {
            votes: [],
            text: 'have horrible long term memory'
          }
        },
        "6ni6ok3ym7mf1p33lnez": {
          id: '6ni6ok3ym7mf1p33lnez',
          author: 'johndoe',
          timestamp: 1468479767190,
          optionOne: {
            votes: [],
            text: 'become a superhero',
          },
          optionTwo: {
            votes: ['johndoe', 'sarahedo'],
            text: 'become a supervillian'
          }
        }
      }
    };

    const state2 = {
      questions: {
        "8xf0y6ziyjabvozdd253nd": {
          id: '8xf0y6ziyjabvozdd253nd',
          author: 'sarahedo',
          timestamp: 1467166872634,
          optionOne: {
            votes: ['sarahedo'],
            text: 'have horrible short term memory',
          },
          optionTwo: {
            votes: [],
            text: 'have horrible long term memory'
          }
        },
        "6ni6ok3ym7mf1p33lnez": {
          id: '6ni6ok3ym7mf1p33lnez',
          author: 'johndoe',
          timestamp: 1468479767190,
          optionOne: {
            votes: [],
            text: 'become a superhero',
          },
          optionTwo: {
            votes: ['johndoe', 'sarahedo'],
            text: 'become a supervillian'
          }
        },
        "G4L0k6zi9lkCv54ddLh9Rf": {
          id: 'G4L0k6zi9lkCv54ddLh9Rf',
          author: 'sarahedo',
          timestamp: 1467166872634,
          optionOne: {
            votes: [],
            text: 'my option one text',
          },
          optionTwo: {
            votes: [],
            text: 'option two goes here'
          }
        },
      }
    };


    expect(QuestionsReducer(state1, questionActionObj)).toEqual(state2);
  });



});
