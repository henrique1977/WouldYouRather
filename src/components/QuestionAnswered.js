import React from 'react';

const QuestionAnswered = ({question, userId, userAnswer}) => {

  const {optionOne, optionTwo} = question;
  console.log(question);

  const numVotesOne = optionOne.votes.length;
  const numVotesTwo = optionTwo.votes.length;
  const totalVotes = numVotesOne + numVotesTwo;

  const calcPercentage = (numVotes, totalVotes) => (numVotes===0) ? 0 : ((numVotes/totalVotes)*100).toFixed(2);

  console.log(numVotesOne);
  console.log(numVotesTwo);

  return (
  <div className="question-container">
    <div className="question-link-header">
      <div className="results-header">
        <div className="results-title"><h3>Would you rather </h3></div>
        <div className="results-question"><p>{question.optionOne.text} OR {question.optionTwo.text}?</p></div>
      </div>
    </div>

    <div className="subtitle"><h2>Result: </h2></div>
    <div className="options">
      <div className="option option1">
        <div className="option-item">{question.optionOne.text}</div>
        <div className="option-item">{`votes: ${numVotesOne.toString()} (${calcPercentage(numVotesOne, totalVotes)}%)`}</div>
        <div className="option-item">{(userAnswer === "optionOne") ? "Option you've chosen" : ""}</div>
      </div>
      <div className="option option2">
        <div className="option-item">{question.optionTwo.text}</div>
        <div className="option-item">{`votes: ${numVotesTwo.toString()} (${calcPercentage(numVotesTwo, totalVotes)}%)`}</div>
        <div className="option-item"><b>{(userAnswer === "optionTwo") ? "Option you've chosen" : ""}</b></div>
      </div>
    </div>
  </div>
)};

export default QuestionAnswered;
