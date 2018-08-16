import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/Users';
import Menu from '../components/Menu';
import { questionHasBeenAnswered, findUserAnswer } from '../library/functions';
import { selectLoggedInUser } from '../redux/reducers/UsersReducer';
import { selectAuthedUserId } from '../redux/reducers/AuthedUserReducer';
import QuestionUnanswered from '../components/QuestionUnanswered';
import QuestionAnswered from '../components/QuestionAnswered';

const Question = (props) => {

  if (!props.loggedInUser) {
    props.history.push('/');
    return (<div></div>);
  }

  const {question_id: questionId} = props.match.params;
  const {questions} = props.questions;
  const answers = props.loggedInUser.answers;
  const selectedQuestion = questions[questionId]; //@TODO: make sure we find a question, handle error
  const hasBeenAnswered = questionHasBeenAnswered(answers, questionId);
  const userAnswer = findUserAnswer(answers, questionId);

  // @TODO: implement 404 redirect here

  return (
    <div className="pages-wrapper">
      <Menu />
      {(hasBeenAnswered) ?
          <QuestionAnswered question={selectedQuestion} userId={props.loggedInUser.id} userAnswer={userAnswer} />
        : <QuestionUnanswered question={selectedQuestion} userId={props.loggedInUser.id} processUpdateAnswer={props.processUpdateAnswer}/>
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
