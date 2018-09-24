import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/Users';
import Menu from '../components/Menu';
import { questionHasBeenAnswered, findUserAnswer, findUserOnObjWithId } from '../library/functions';
import { selectLoggedInUser } from '../redux/reducers/UsersReducer';
import { selectAuthedUserId } from '../redux/reducers/AuthedUserReducer';
import QuestionUnanswered from '../components/QuestionUnanswered';
import QuestionAnswered from '../components/QuestionAnswered';

const Question = (props) => {

  if (!props.loggedInUser) {
    props.history.push('/');
    return (<div></div>);
  }

  console.log('QUESTION PAGE: ');
  console.log(props);

  const {question_id: questionId} = props.match.params;
  //const questionId = 'foo';
  const {questions} = props.questions;
  const selectedQuestion = questions[questionId]; //@TODO: make sure we find a question, handle error

  // if (!selectedQuestion) {
  //   props.history.push('/404');
  // }

  console.log(selectedQuestion);

  const answers = props.loggedInUser.answers;
  const hasBeenAnswered = questionHasBeenAnswered(answers, questionId);
  const userAnswer = findUserAnswer(answers, questionId);

  // @TODO: implement 404 redirect here

  const questionAuthor = findUserOnObjWithId(selectedQuestion.author, props.users.users);


  return (
    <div className="pages-wrapper">
      <Menu history={props.history}/>
      {(hasBeenAnswered) ?
          <QuestionAnswered question={selectedQuestion} userId={props.loggedInUser.id} userAnswer={userAnswer} author={questionAuthor} />
        : <QuestionUnanswered question={selectedQuestion} userId={props.loggedInUser.id} processUpdateAnswer={props.processUpdateAnswer} author={questionAuthor}/>
      }
    </div>
  );
}

const mapStateToProps = state => {

  const loggedInUserId = selectAuthedUserId(state.authedUser);
  const loggedInUser = selectLoggedInUser(state.users, loggedInUserId);

  return ({
    users: state.users,
    questions: state.questions,
    authedUserId: loggedInUserId,
    loggedInUser: loggedInUser,
  });
};

export default connect(mapStateToProps, actions)(Question);
