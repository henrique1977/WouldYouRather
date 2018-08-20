import React from 'react';
import { objToArray } from '../library/functions';

export const Question = ({user}) => (
    <div className="user" >
        <p>
          {user.name} - questions: {user.questions.length} - answers: {objToArray(user.answers).length}          
        </p>
    </div>
);

export default Question;
