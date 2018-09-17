import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/Questions';
import Menu from '../components/Menu';

import { selectAuthedUserId } from '../redux/reducers/AuthedUserReducer';

class AddQuestion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {hasError: false};
  }

  handleSubmit = (event) => {

        event.preventDefault();
        const data = new FormData(event.target);
        const optionOne = data.get('optionOne');
        const optionTwo = data.get('optionTwo');

        // validation
        if (optionOne === '' || optionTwo === '') {
          this.setState({hasError: true});
        }
        else {
          this.setState({hasError: false});
          console.log('READY to save questions, NO ERRORS! ***');

          // dispatch event to add/save a new question
          this.props.addNewQuestion(this.props.loggedInUserId, {optionOne: optionOne, optionTwo: optionTwo});

          // redirect to home page
          this.props.history.push('/');
        }
  }

  render() {

    const errorMessage = 'Please fill out both options.';

    return (
    <div className="pages-wrapper">
      <Menu page='addQuestion' history={this.props.history}/>
      <div >Add a Question</div>
      <div className="add-question-form">
        <div className='error-message'>{(this.state.hasError) ? errorMessage : null}</div>
        <form onSubmit={this.handleSubmit} >
          <input id="optionOne" type="text" name="optionOne" placeholder="Option one"  />
          <input id="optionTwo" type="text" name="optionTwo" placeholder="Option one"  />
          <button>Save Question</button>
        </form>
      </div>
    </div>
  )
  }
}

const mapStateToProps = state => {

  const loggedInUserId = selectAuthedUserId(state.authedUser);

  return ({
    authedUser: state.authedUser,
    users: state.users,
    questions: state.questions,
    loggedInUserId: loggedInUserId
  });
};

export default connect(mapStateToProps, actions)(AddQuestion);
