import React from 'react';
import { objToArray } from '../library/functions';

export const Question = ({user}) => {

  const numOfQuestions = user.questions.length;
  const numOfAnswers = objToArray(user.answers).length;
  const total = numOfQuestions + numOfAnswers;

  return (
      <div className="table-row">
        <div className="text">{user.name}</div>
        <div className="text avatar"><img src={user.avatarURL} alt="avatar" width="50" height="50" className="question-avatar" /></div>
        <div className="num">{total}</div>
        <div className="num">{numOfQuestions}</div>
        <div className="num">{numOfAnswers}</div>
      </div>
  )
};

export default Question;
