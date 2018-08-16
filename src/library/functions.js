// UTIL Functional Library
export const objToArray = obj => Object.keys(obj).map(k => obj[k]);

export const arrayToDropDown = usersArray => usersArray.map(obj => ({value: obj.id, label: obj.name}));
export const objToDropDown = usersObj => arrayToDropDown(objToArray(usersObj));

export const extractQuestions = obj => ((!hasProp(obj, 'answers')) ? [] : Object.keys(obj.answers));

export const hasProp = (obj, propName) => ((typeof obj[propName] === "undefined") ? false : true);

export const filterWithArrayOfIds = (arr, ids) => (ids.reduce((acc, id) => (acc.concat(arr.filter(obj => obj.id === id))), []));

export const filterOutWithArrayOfIds = (arr, ids) => (ids.reduce((acc, id) => (acc.filter(obj => obj.id !== id)), arr));

// this generic function will work for different cases
export const filterByIdReturnObj = (arr, id) => arr.filter(obj => obj.id === id).reduce((acc, elem) => elem);
export const getQuestionWithId = (questions, id) => filterByIdReturnObj(questions, id);
export const findUserWithId = (id, usersArray) => filterByIdReturnObj(usersArray, id);

export const questionHasBeenAnswered = (answers, questionId) => !(Object.keys(answers).filter(key => key === questionId).length === 0);
export const findUserAnswer = (answers, questionId) => answers[questionId];


export const findUserOnObjWithId = (id, users) => users[id];

export const getObjsWithArrayOfKeys = (questions, ids) => {
  return filterWithArrayOfIds(objToArray(questions), ids)
                  .map((obj) => ({[obj.id]: obj}))
                  .reduce((acc, obj) => ({...acc, ...obj}), {});
};

export const getObjsNotInObjWithArrayOfKeys = (questions, ids) => {
  return filterOutWithArrayOfIds(objToArray(questions), ids)
                  .map((obj) => ({[obj.id]: obj}))
                  .reduce((acc, obj) => ({...acc, ...obj}), {});
};
