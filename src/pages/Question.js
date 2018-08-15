import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/Users';
import Menu from '../components/Menu';
import { questionHasBeenAnswered } from '../library/functions';
import { selectLoggedInUser } from '../redux/reducers/UsersReducer';
import { selectAuthedUserId } from '../redux/reducers/AuthedUserReducer';
import QuestionUnanswered from '../components/QuestionUnanswered';
import QuestionAnswered from '../components/QuestionAnswered';

const Question = (props) => {

  if (!props.loggedInUser) {
    console.log('ZICA!!');
    console.log(props);
    props.history.push('/');
    return (<div></div>);

  }

  console.log('QUESTIONS:::');
  console.log(props);
  const {question_id: questionId} = props.match.params;
  const {questions} = props.questions;

  console.log(questionId);
  console.log(questions);

  const answers = props.loggedInUser.answers;
  const selectedQuestion = questions[questionId]; //@TODO: make sure we find a question, handle error
  const hasBeenAnswered = questionHasBeenAnswered(answers, questionId);

  // console.log(questionId);
  // console.log(questions);
  console.log(selectedQuestion);
  console.log(answers);
  console.log(hasBeenAnswered);

  // @TODO: implement 404 redirect here

  return (
    <div className="pages-wrapper">
      <Menu />
      <QuestionUnanswered question={selectedQuestion} userId={props.loggedInUser.id} processUpdateAnswer={props.processUpdateAnswer}/>
      <QuestionAnswered question={selectedQuestion} userId={props.loggedInUser.id} processUpdateAnswer={props.processUpdateAnswer}/>
    </div>
  );

}

const mapStateToProps = state => {

  const loggedInUserId = selectAuthedUserId(state.authedUser);
  const loggedInUser = selectLoggedInUser(state.users, loggedInUserId);
  // const answeredQuestionIds = selectAnsweredQuestionIds(loggedInUser);
  // const answeredQuestions = selectAnsweredQuestions(state.questions, answeredQuestionIds);
  // const unansweredQuestions = selectUnansweredQuestions(state.questions, answeredQuestionIds);

  return ({
    users: state.users,
    questions: state.questions,
    authedUserId: loggedInUserId,
    loggedInUser: loggedInUser,

    // answeredQuestionIds: answeredQuestionIds,
    // answeredQuestions: answeredQuestions,
    // unansweredQuestions: unansweredQuestions
  });
};

export default connect(mapStateToProps, actions)(Question);
