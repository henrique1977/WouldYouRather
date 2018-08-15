import React from 'react';
import { Link } from "react-router-dom";

export const Question = ({question}) => (
    <div className="book" >
        <p>
          <Link to={`/question/${question.id}`} className="menu-item">
            {question.optionOne.text} OR {question.optionTwo.text} ?
          </Link>
        </p>
    </div>
);

export default Question;
