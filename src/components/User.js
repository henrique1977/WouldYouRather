import React from 'react';
import { objToArray } from '../library/functions';
import Avatar from './Avatar';

export const Question = ({user}) => {

  const numOfQuestions = user.questions.length;
  const numOfAnswers = objToArray(user.answers).length;
  const total = numOfQuestions + numOfAnswers;

  return (
      <div className="table-row">
        <div className="text">{user.name}</div>
        <Avatar url={user.avatarURL} name={user.name} divClass="text avatar" width="50" height="50" />        
        <div className="num">{total}</div>
        <div className="num">{numOfQuestions}</div>
        <div className="num">{numOfAnswers}</div>
      </div>
  )
};

export default Question;

//<div className="text avatar"><img src={user.avatarURL} alt={`${user.name}'s avatar`} width="50" height="50" className="question-avatar" /></div>
