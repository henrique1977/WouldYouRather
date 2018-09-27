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
    // grab correct URL (path) and set on redux/state
    props.setNextPage(props.location.pathname);
    props.history.push('/login');
    return (null);
  }

  const {question_id: questionId} = props.match.params;
  const {questions} = props.questions;
  const selectedQuestion = questions[questionId];

  // 404 redirect here - If ID doesn't match any question, redirect to 404 page:
  if (!selectedQuestion) {
    props.history.push('/Page404');
    return (null);
  }

  const answers = props.loggedInUser.answers;
  const hasBeenAnswered = questionHasBeenAnswered(answers, questionId);
  const userAnswer = findUserAnswer(answers, questionId);
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
