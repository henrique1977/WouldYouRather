import React from 'react';
import DisplayBox from './DisplayBox';

const QuestionUnanswered = ({question, processUpdateAnswer, userId, author}) => {

  const answerObj1 = {[question.id]: 'optionOne'};
  const answerObj2 = {[question.id]: 'optionTwo'};

  const title = 'Question from: ' + author.name;

  return (

    <DisplayBox title={title}
      leftContent={
        <div className="avatar"><img src={author.avatarURL} alt="avatar" width="100" height="100" className="question-avatar" /></div>
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
