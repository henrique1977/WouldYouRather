import * as func from '../../../library/functions';

const usersArray = [
      {
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
      {
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
      {
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
    ];

    const userTyler = {
      id: 'tylermcginnis',
      name: 'Tyler McGinnis',
      avatarURL: '',
      answers: {
        "vthrdm985a262al8qx3do": 'optionOne',
        "xj352vofupe1dqz9emx13r": 'optionTwo',
      },
      questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
    };

    let users = {
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
      },
      tylermcginnis: {
        id: 'tylermcginnis',
        name: 'Tyler McGinnis',
        avatarURL: '',
        answers: {
          "vthrdm985a262al8qx3do": 'optionOne',
          "xj352vofupe1dqz9emx13r": 'optionTwo',
        },
        questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
      },
      johndoe: {
        id: 'johndoe',
        name: 'John Doe',
        avatarURL: '',
        answers: {
          "xj352vofupe1dqz9emx13r": 'optionOne',
          "vthrdm985a262al8qx3do": 'optionTwo',
          "6ni6ok3ym7mf1p33lnez": 'optionOne'
        },
        questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
      }
    }

describe('Test suite for single functions', () => {



  const expectedDropdownArray = [
    { value: 'sarahedo', label: 'Sarah Edo' },
    { value: 'tylermcginnis', label: 'Tyler McGinnis' },
    { value: 'johndoe', label: 'John Doe' }
  ];

  it('transforms an object into an array', () => {
      const obj = { x: 1, y: 2, z: 3, f: "dsd" };
      expect(func.objToArray(obj)).toEqual([1, 2, 3, "dsd"]);
  });

  it('handle null obj passed', () => {
      const obj = {};
      expect(func.objToArray(obj)).toEqual([]);
  });

  it('it works with a big object as well', () => {

    const usersArray = [
      {
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
      },
      {
        id: 'tylermcginnis',
        name: 'Tyler McGinnis',
        avatarURL: '',
        answers: {
          "vthrdm985a262al8qx3do": 'optionOne',
          "xj352vofupe1dqz9emx13r": 'optionTwo',
        },
        questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
      },
      {
        id: 'johndoe',
        name: 'John Doe',
        avatarURL: '',
        answers: {
          "xj352vofupe1dqz9emx13r": 'optionOne',
          "vthrdm985a262al8qx3do": 'optionTwo',
          "6ni6ok3ym7mf1p33lnez": 'optionOne'
        },
        questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
      }
    ]


    expect(func.objToArray(users)).toEqual(usersArray);


  });

  it('transforms the users array to be used in the dropdown', () => {
    expect(func.arrayToDropDown(usersArray)).toEqual(expectedDropdownArray);
  });


  it('transforms the users obj to be used in the dropdown', () => {
    expect(func.objToDropDown(users)).toEqual(expectedDropdownArray);
  });

  it('finds the user obj in array given the id', () => {
    const tylerId = 'tylermcginnis';
    expect(func.findUserWithId(tylerId, usersArray)).toEqual(userTyler);
  });

  it('finds the user obj in users obj, given the id', () => {
    const tylerId = 'tylermcginnis';
    expect(func.findUserOnObjWithId(tylerId, users)).toEqual(userTyler);
  });

  it('can filter and return the ids of the questions the user has answered', () => {
    const sampleUser = {
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
    };

    const resultArray = [
      '8xf0y6ziyjabvozdd253nd',
      '6ni6ok3ym7mf1p33lnez',
      'am8ehyc8byjqgar0jgpub9',
      'loxhs1bqm25b708cmbf3g'
    ];

    const sampleUserNoAnswers = {
      id: 'sarahedo',
      name: 'Sarah Edo',
      avatarURL: '',
      answers: {
      },
      questions: [
        '8xf0y6ziyjabvozdd253nd',
        'am8ehyc8byjqgar0jgpub9'
      ]
    };

    expect(func.extractQuestions(sampleUser)).toEqual(resultArray);
    expect(func.extractQuestions({})).toEqual([]); // test to handle empty obj
    expect(func.extractQuestions(sampleUserNoAnswers)).toEqual([]);


  });

  it('test helper function hasProp', () => {
    //hasProp
    const obj1 = {
      test: {},
      name: 'peter',
      bla: true
    };

    expect(func.hasProp(obj1, 'test')).toEqual(true);
    expect(func.hasProp(obj1, 'phoneNumber')).toEqual(false);

  })

  it('can filter an array having an array or IDs', () => {

    const mainArray = [
      {id: 't1234', bla: 'foo'},
      {id: 'd7', bla: 'foo2'},
      {id: 'd4', bla: 'foo'},
      {id: 'd5', bla: 'foo'},
      {id: 'd6', bla: 'foo'}
    ];

    const toFilterIdsArray = [
      't1234',
      'd6',
      'd7'
    ];

    const filteredResult = [
      {id: 't1234', bla: 'foo'},
      {id: 'd6', bla: 'foo'},
      {id: 'd7', bla: 'foo2'}
    ];

    const filteredOutResult = [
      {id: 'd4', bla: 'foo'},
      {id: 'd5', bla: 'foo'}
    ];

    expect(func.filterWithArrayOfIds(mainArray, [])).toEqual([]);
    expect(func.filterWithArrayOfIds(mainArray, toFilterIdsArray)).toEqual(filteredResult);

    // now find the ones that are NOT in the array:
    expect(func.filterOutWithArrayOfIds(mainArray, toFilterIdsArray)).toEqual(filteredOutResult);

  });

});

const questions = [
      {
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
      {
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
      },
      {
        id: 'am8ehyc8byjqgar0jgpub9',
        author: 'sarahedo',
        timestamp: 1488579767190,
        optionOne: {
          votes: [],
          text: 'be telekinetic'
        },
        optionTwo: {
          votes: [
            'sarahedo'
          ],
          text: 'be telepathic'
        }
      },
      {
        id: 'loxhs1bqm25b708cmbf3g',
        author: 'tylermcginnis',
        timestamp: 1482579767190,
        optionOne: {
          votes: [],
          text: 'be a front-end developer'
        },
        optionTwo: {
          votes: [
            'sarahedo'
          ],
          text: 'be a back-end developer'
        }
      },
      {
        id: 'vthrdm985a262al8qx3do',
        author: 'tylermcginnis',
        timestamp: 1489579767190,
        optionOne: {
          votes: [
            'tylermcginnis'
          ],
          text: 'find $50 yourself'
        },
        optionTwo: {
          votes: [
            'johndoe'
          ],
          text: 'have your best friend find $500'
        }
      },
      {
        id: 'xj352vofupe1dqz9emx13r',
        author: 'johndoe',
        timestamp: 1493579767190,
        optionOne: {
          votes: [
            'johndoe'
          ],
          text: 'write JavaScript'
        },
        optionTwo: {
          votes: [
            'tylermcginnis'
          ],
          text: 'write Swift'
        }
      }
    ];

describe("Testing questions", () => {
  it('selects a question having an id', () => {

    const id = 'xj352vofupe1dqz9emx13r';
    const resultQuestion = {
      id: 'xj352vofupe1dqz9emx13r',
      author: 'johndoe',
      timestamp: 1493579767190,
      optionOne: {
        votes: [
          'johndoe'
        ],
        text: 'write JavaScript'
      },
      optionTwo: {
        votes: [
          'tylermcginnis'
        ],
        text: 'write Swift'
      }
    };

    const resultQuestion2 = {
      id: 'vthrdm985a262al8qx3do',
      author: 'tylermcginnis',
      timestamp: 1489579767190,
      optionOne: {
        votes: [
          'tylermcginnis'
        ],
        text: 'find $50 yourself'
      },
      optionTwo: {
        votes: [
          'johndoe'
        ],
        text: 'have your best friend find $500'
      }
    };

    expect(func.getQuestionWithId(questions, id)).toEqual(resultQuestion);
    expect(func.getQuestionWithId(questions, 'vthrdm985a262al8qx3do')).toEqual(resultQuestion2);
  });

  it('can filter an array by id and return the obj, generic function', () => {

    const myArray = [
      {id: 123, name: 'foo'},
      {id: 456, name: 'bar'},
      {id: 789, name: 'baz'}
    ];

    expect(func.filterByIdReturnObj(myArray, 456)).toEqual({id: 456, name: 'bar'});

  });

  it('check if a question has been answered', () => {

    const answers = {vthrdm985a262al8qx3do: "optionOne", xj352vofupe1dqz9emx13r: "optionTwo"};
    const questionId = "8xf0y6ziyjabvozdd253nd";

    expect(func.questionHasBeenAnswered(answers, questionId)).toEqual(false);
    expect(func.questionHasBeenAnswered(answers, 'xj352vofupe1dqz9emx13r')).toEqual(true);
    expect(func.questionHasBeenAnswered(answers, 'vthrdm985a262al8qx3do')).toEqual(true);
    expect(func.questionHasBeenAnswered([], 'vthrdm985a262al8qx3do')).toEqual(false);

  });

  it('returns the answer for a user', () => {

    const answers = {vthrdm985a262al8qx3do: "optionOne", xj352vofupe1dqz9emx13r: "optionTwo"};
    const questionId = "xj352vofupe1dqz9emx13r";

    expect(func.findUserAnswer(answers, questionId)).toEqual("optionTwo");
    expect(func.findUserAnswer(answers, "blablablaWrongId")).toEqual();
  });
});

describe('Testing getting answered and unanswered questions for a set of question Ids', () => {

    const questions = {
      "8xf0y6ziyjabvozdd253nd": {id: "8xf0y6ziyjabvozdd253nd", answers: [], author: "dontmatter"},
      "6ni6ok3ym7mf1p33lnez": {id: "6ni6ok3ym7mf1p33lnez", answers: [], author: "dontmatter"},
      xj352vofupe1dqz9emx13r: {id: "xj352vofupe1dqz9emx13r", answers: [], author: "dontmatter"},
      "vthrdm985a262al8qx3do": {id: "vthrdm985a262al8qx3do", answers: [], author: "dontmatter"},
      "loxhs1bqm25b708cmbf3g": {id: "loxhs1bqm25b708cmbf3g", answers: [], author: "dontmatter"}
    };

    const ids = ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"];
    const expectedContainObj = {
      "6ni6ok3ym7mf1p33lnez": {id: "6ni6ok3ym7mf1p33lnez", answers: [], author: "dontmatter"},
      "xj352vofupe1dqz9emx13r": {id: "xj352vofupe1dqz9emx13r", answers: [], author: "dontmatter"}
    };

    const expectedNotContainObj = {
      "8xf0y6ziyjabvozdd253nd": {id: "8xf0y6ziyjabvozdd253nd", answers: [], author: "dontmatter"},
      "vthrdm985a262al8qx3do": {id: "vthrdm985a262al8qx3do", answers: [], author: "dontmatter"},
      "loxhs1bqm25b708cmbf3g": {id: "loxhs1bqm25b708cmbf3g", answers: [], author: "dontmatter"}
    };

    it('returns the questions that have an id in the array, given an obj and an array of ids ', () => {
      expect(func.getObjsWithArrayOfKeys(questions, ids)).toEqual(expectedContainObj);
    });

    it('returns the questions that ARE NOT in the array of IDs, given an obj and an array of ids ', () => {
      expect(func.getObjsNotInObjWithArrayOfKeys(questions, ids)).toEqual(expectedNotContainObj);
    });

    it('return the obj as an array s ', () => {
      expect(func.getObjsNotInObjWithArrayOfKeys(questions, ids)).toEqual(expectedNotContainObj);
    });

    it('creates an ID that is 20 to 25 chars long', () => {
      expect(func.generateId()).toBeDefined();
      expect(func.generateId().length).toBeGreaterThan(20);
    });

});

describe('tests building an question obj', () => {
  it('returns a question obj', () => {

    const questionId = 'xj352vofupe1dqz9emx13r';
    const authorId = 'johndoe';
    const timestamp = 1493579767190;
    const optionOneString = 'write JavaScript';
    const optionTwoString = 'write Swift';

    const questionObj = {
      id: questionId,
      author: authorId,
      timestamp: timestamp,
      optionOne: {
        votes: [],
        text: optionOneString
      },
      optionTwo: {
        votes: [],
        text: optionTwoString
      }
    };

    expect(func.buildQuestionObj(questionId, authorId, timestamp, optionOneString, optionTwoString)).toEqual(questionObj);

  });
});

describe('tests mapping to add total', () => {
  it('returns a mapped obj containing the total questions + answers', () => {

    const unsortedUsers = [ { id: 'sarahedo',
          name: 'Sarah Edo',
          avatarURL: '',
          answers:
           { '8xf0y6ziyjabvozdd253nd': 'optionOne',
             '6ni6ok3ym7mf1p33lnez': 'optionOne',
             am8ehyc8byjqgar0jgpub9: 'optionTwo',
             loxhs1bqm25b708cmbf3g: 'optionTwo' },
          questions: [ '8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9' ] },
        { id: 'tylermcginnis',
          name: 'Tyler McGinnis',
          avatarURL: '',
          answers:
           { vthrdm985a262al8qx3do: 'optionOne',
             xj352vofupe1dqz9emx13r: 'optionTwo' },
          questions: [ 'loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do' ] },
        { id: 'johndoe',
          name: 'John Doe',
          avatarURL: '',
          answers:
           { xj352vofupe1dqz9emx13r: 'optionOne',
             vthrdm985a262al8qx3do: 'optionTwo',
             '6ni6ok3ym7mf1p33lnez': 'optionOne' },
          questions: [ '6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r' ] } ];



    const sortedUsers = [
        {
          id: 'sarahedo',
          name: 'Sarah Edo',
          avatarURL: '',
          answers:
           { '8xf0y6ziyjabvozdd253nd': 'optionOne',
             '6ni6ok3ym7mf1p33lnez': 'optionOne',
             am8ehyc8byjqgar0jgpub9: 'optionTwo',
             loxhs1bqm25b708cmbf3g: 'optionTwo' },
          questions: [ '8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9' ] },
        {
          id: 'johndoe',
          name: 'John Doe',
          avatarURL: '',
          answers:
           { xj352vofupe1dqz9emx13r: 'optionOne',
             vthrdm985a262al8qx3do: 'optionTwo',
             '6ni6ok3ym7mf1p33lnez': 'optionOne' },
          questions: [ '6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r' ] },
        {
          id: 'tylermcginnis',
          name: 'Tyler McGinnis',
          avatarURL: '',
          answers:
           { vthrdm985a262al8qx3do: 'optionOne',
             xj352vofupe1dqz9emx13r: 'optionTwo' },
          questions: [ 'loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do' ]
        }
      ];

    const userA = {
            id: 'sarahedo',
            name: 'Sarah Edo',
            avatarURL: '',
            answers:
             { '8xf0y6ziyjabvozdd253nd': 'optionOne',
               '6ni6ok3ym7mf1p33lnez': 'optionOne',
               am8ehyc8byjqgar0jgpub9: 'optionTwo',
               loxhs1bqm25b708cmbf3g: 'optionTwo' },
            questions: [ '8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9' ]
    };

    const userB = {
              id: 'johndoe',
              name: 'John',
              avatarURL: '',
              answers:
              { '8xf0y6ziyjabvozdd253nd': 'optionOne',
                loxhs1bqm25b708cmbf3g: 'optionTwo' },
              questions: [ '6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r' ]
    };

    //expect(func.sortByTotal(unsortedUsers)).toEqual(sortedUsers);

    expect(func.getTotal(userA)).toEqual(6);
    expect(func.returnMostQuestionsPlusAnswers(userB, userA)).toEqual(userA);
    expect(func.sortByTotal(unsortedUsers)).toEqual(sortedUsers);

  });
});
