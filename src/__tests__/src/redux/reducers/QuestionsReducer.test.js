import QuestionsReducer from '../../../../redux/reducers/QuestionsReducer';

const initialState = {
  questions: [
      {
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
      {
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
  ]
}

const defaultEmptyState = {
  questions: []
}

describe("Test suite for the QuestionsReducer", () => {

  it('it renders empty state if nothing is passed', () => {
    expect(QuestionsReducer(undefined, {})).toEqual(defaultEmptyState);
  });

  it('it renders the initial state that is passed to the reducer', () => {
    expect(QuestionsReducer(initialState, {})).toEqual(initialState);
  });

});
