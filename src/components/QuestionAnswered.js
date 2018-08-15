import React from 'react';

const QuestionAnswered = ({question, updateAnswer, userId}) => {

  // const answerObj1 = {[question.id]: 'optionOne'};
  // const answerObj2 = {[question.id]: 'optionTwo'};

  return (
  <div className="question-container">
    <div className="title"><h3>Would you rather?</h3></div>
    <div className="question-display"><p>{question.optionOne.text} OR {question.optionTwo.text}?</p></div>
    <div className="subtitle"><h2>Result: </h2></div>
    <div className="options">
      <div className="option option1">
        <div className="option-item">You chose: </div>
        <div className="option-item">{question.optionOne.text}</div>
        <div className="option-item">3 votes - 60% of votes</div>

      </div>
      <div className="option option2">
        <div className="option-item"> </div>
        <div className="option-item">{question.optionTwo.text}</div>
        <div className="option-item">2 votes - 40% of votes</div>
      </div>
    </div>
  </div>
)};

export default QuestionAnswered;
