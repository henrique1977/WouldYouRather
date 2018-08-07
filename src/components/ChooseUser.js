import React from 'react';
import Select from 'react-select';

class ChooseUser extends React.Component {

  state = {
    selectedOption: null,
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  }

  doLogin = () => this.props.onLoginClick(this.state.selectedOption);

  render() {

    const { selectedOption } = this.state;

    return (
      <div>
        Please pick a user from dropdown <br />
        <Select
          value={selectedOption}
          onChange={this.handleChange}
          options={this.props.usersDropdownData}
        />
        <br />
        <button onClick={this.doLogin}>
          Login
        </button>
      </div>
    );
  }
}

export default ChooseUser;
