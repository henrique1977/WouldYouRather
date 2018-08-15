import React from 'react';

const QuestionUnanswered = ({question, processUpdateAnswer, userId}) => {

  const answerObj1 = {[question.id]: 'optionOne'};
  const answerObj2 = {[question.id]: 'optionTwo'};

  return (
  <div className="question-container">
    <div className="title"><h3>Would you rather?</h3></div>
    <div className="avatar"><p>Avatar here</p></div>
    <div className="question-options">
      <div className="question question-1"><button onClick={() => processUpdateAnswer(userId, question.id, answerObj1)}>{question.optionOne.text}</button></div>
      <div className="question questionsSeparator">OR</div>
      <div className="question question-2"><button onClick={() => processUpdateAnswer(userId, question.id, answerObj2)}>{question.optionTwo.text}</button></div>
    </div>
  </div>
)};

export default QuestionUnanswered;
