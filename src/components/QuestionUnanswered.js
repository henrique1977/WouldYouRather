import React from 'react';
import DisplayBox from './DisplayBox';
import Avatar from './Avatar';

const QuestionUnanswered = ({question, processUpdateAnswer, userId, author}) => {

  const answerObj1 = {[question.id]: 'optionOne'};
  const answerObj2 = {[question.id]: 'optionTwo'};

  const title = 'Question from: ' + author.name;

  return (

    <DisplayBox title={title}
      leftContent={
        <Avatar url={author.avatarURL} name={author.name} />
      }
      rightContent={
        <div>
          <p className="question-link-title">Would you rather <br /></p>
          <div className="question-options">
            <div className="question question-1"><button className="question-button" onClick={() => processUpdateAnswer(userId, question.id, answerObj1)}>{question.optionOne.text}</button></div>
            <div className="question questionsSeparator">OR</div>
            <div className="question question-2"><button className="question-button" onClick={() => processUpdateAnswer(userId, question.id, answerObj2)}>{question.optionTwo.text}</button></div>
          </div>
        </div>
      }
    />


)};

export default QuestionUnanswered;
