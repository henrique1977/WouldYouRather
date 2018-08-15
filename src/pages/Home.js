import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/Users';
import { selectLoggedInUser, selectAnsweredQuestionIds } from '../redux/reducers/UsersReducer';
import { selectAnsweredQuestions, selectUnansweredQuestions } from '../redux/reducers/QuestionsReducer';
import { selectAuthedUserId } from '../redux/reducers/AuthedUserReducer';
import { objToArray } from '../library/functions';
import Menu from '../components/Menu';
import QuestionsList from '../components/QuestionsList';


class Home extends React.Component {

  render() {

    // destructuring and renaming
    const { answeredQuestions: answered, unansweredQuestions: unanswered } = this.props;

    return (
      <div className="pages-wrapper">
        <Menu />
        <QuestionsList questions={{answered: objToArray(answered), unanswered: objToArray(unanswered)}} />
      </div>
    );
  };
}

const mapStateToProps = state => {

  const loggedInUserId = selectAuthedUserId(state.authedUser);
  const loggedInUser = selectLoggedInUser(state.users, loggedInUserId);
  const answeredQuestionIds = selectAnsweredQuestionIds(loggedInUser);
  const answeredQuestions = selectAnsweredQuestions(state.questions.questions, answeredQuestionIds);
  const unansweredQuestions = selectUnansweredQuestions(state.questions.questions, answeredQuestionIds);

  return ({
    authedUser: state.authedUser,
    users: state.users,
    questions: state.questions,
    authedUserId: loggedInUserId,
    loggedInUser: loggedInUser,
    answeredQuestionIds: answeredQuestionIds,
    answeredQuestions: answeredQuestions,
    unansweredQuestions: unansweredQuestions
  });
};

export default connect(mapStateToProps, actions)(Home);
