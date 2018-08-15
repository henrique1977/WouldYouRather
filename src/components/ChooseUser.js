import React from 'react';
import Select from 'react-select';
import { withState } from 'recompose';

/**
*
    I initially had to change this from a functional component to a Class based component,
  to keep state of the selected value of the dropdown.

    Just refactored to use recompose, a higher order component library to provide state to this
  functional component, this way I don't have to use class component. 
*
**/
const ChooseUser = ({usersDropdownData, onLoginClick, selectedOption, setSelectedOption}) => (
  <div>
    Please pick a user from dropdown <br />
    <Select
      value={selectedOption}
      onChange={(value) => setSelectedOption(value)}
      options={usersDropdownData}
    />
    <br />
    <button onClick={() => onLoginClick(selectedOption)}>
      Login
    </button>
  </div>
);

export default withState('selectedOption', 'setSelectedOption', null)(ChooseUser);
