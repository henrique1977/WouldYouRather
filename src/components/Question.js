import React from 'react';
import { Link } from "react-router-dom";

export const Question = ({question}) => (
    <div className="question-link-wrapper" >
      <div className="question-link-header">
        Question from: Emily Blunt
      </div>
      <div className="question-link-content">

        <div className="question-link-content-left" >
          <img src='/images/avatar_tyler_100x100.png' alt="avatar" width="100" height="100" className="question-avatar"/>
          
        </div>
        <div className="question-link-content-middle"><hr className="question-link-separator"/></div>
        <div className="question-link-content-right">
          <div className="question-link-title">Would you rather? </div>
          <Link to={`/question/${question.id}`} className="not-menu-item">
            {question.optionOne.text} OR {question.optionTwo.text} ?
          </Link>
        </div>

      </div>
    </div>
);

const avatarStyle = {
  backgroundImage: "url('/images/avatar_tyler_100x100.png')",
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  backgroundSize: "cover"
};

export default Question;
