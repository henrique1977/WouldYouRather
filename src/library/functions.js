// UTIL Functional Library
export const objToArray = obj => Object.keys(obj).map(k => obj[k]);

export const arrayToDropDown = usersArray => usersArray.map(obj => ({value: obj.id, label: obj.name}));

export const findUserWithId = (id, usersArray) => usersArray.filter(obj => obj.id === id).reduce((acc, elem) => elem); 
