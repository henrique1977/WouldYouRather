import React from 'react';
import { Link } from "react-router-dom";
import DisplayBox from './DisplayBox';


const Question = ({question, user}) => {

  const title = 'Question from: ' + user.name;

  return (

    <DisplayBox title={title}
      leftContent={
        <div className="avatar"><img src={user.avatarURL} alt="avatar" width="100" height="100" className="question-avatar" /></div>
      }
      rightContent={
        <div>
          <p className="question-link-title">Would you rather <br />
          <Link to={`/question/${question.id}`} className="not-menu-item">
            {question.optionOne.text} OR {question.optionTwo.text}?
          </Link>
          </p>
        </div>
      }
    />
  );
}




export const Question2 = ({question, user}) => (
    <div className="question-link-wrapper" >
      <div className="question-link-header">
        Question from: {user.name}
      </div>
      <div className="question-link-content">

        <div className="question-link-content-left" >
          <img src={user.avatarURL} alt="avatar" width="100" height="100" className="question-avatar"/>

        </div>
        <div className="question-link-content-middle"><hr className="question-link-separator"/></div>
        <div className="question-link-content-right">
          <p className="question-link-title">Would you rather <br />
          <Link to={`/question/${question.id}`} className="not-menu-item">
            {question.optionOne.text} OR {question.optionTwo.text}?
          </Link>
          </p>
        </div>

      </div>
    </div>
);


export default Question;
