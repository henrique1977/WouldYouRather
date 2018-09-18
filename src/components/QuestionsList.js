// functional component to display a list of questions
import React from 'react';
import { withState } from 'recompose';
import { findUserOnObjWithId } from '../library/functions';
import Question from './Question';
import MyButton from './MyButton';


const QuestionsList = ({showAnswered, setShowAnswered, questions, users}) => {

  console.log('inside questionsList');
  console.log(questions);
  console.log(users);

  const { answered, unanswered } = questions;
  const questionsArray = (showAnswered) ? answered : unanswered;
  const answerButton = (showAnswered)
    ?  <MyButton onClick={() => setShowAnswered(false)} text="View Unanswered Questions"/>
    : <MyButton onClick={() => setShowAnswered(true)} text="View Answered Questions"/>;

  return (
    <div className="questions-wrapper">

      {answerButton}

      { questionsArray.map( (question) => (
        <Question key={question.id} question={question} user={findUserOnObjWithId(question.author, users.users)} />
      ))}

  </div>
  )
}


export default withState('showAnswered', 'setShowAnswered', false)(QuestionsList);;
