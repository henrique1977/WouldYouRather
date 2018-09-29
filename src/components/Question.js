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

export default Question;
