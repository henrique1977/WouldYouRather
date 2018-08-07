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

describe('Test suite for single functions', () => {
  it('transforms an object into an array', () => {
      const obj = { x: 1, y: 2, z: 3, f: "dsd" };
      expect(func.objToArray(obj)).toEqual([1, 2, 3, "dsd"]);
  })

  it('it works with a big object as well', () => {
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
    const expectedDropdownArray = [
      { value: 'sarahedo', label: 'Sarah Edo' },
      { value: 'tylermcginnis', label: 'Tyler McGinnis' },
      { value: 'johndoe', label: 'John Doe' }
    ];
    expect(func.arrayToDropDown(usersArray)).toEqual(expectedDropdownArray);
  });

  it('finds the user obj in array given the id', () => {
    const tylerId = 'tylermcginnis';
    expect(func.findUserWithId(tylerId, usersArray)).toEqual(userTyler);
  });



});
