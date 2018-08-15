import React from 'react';

const MyButton = ({text, onClick}) => {

  return (
    <div>
      <button onClick={onClick}>
        {text}
      </button>
    </div>
  )
}

export default MyButton;
