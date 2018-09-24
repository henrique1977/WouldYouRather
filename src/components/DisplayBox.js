import React from 'react';

export const DisplayBox = ({title, leftContent, rightContent}) => (
    <div className="question-link-wrapper" >
      <div className="question-link-header">
        <div className="question-link-title">{title}</div>
      </div>
      <div className="question-link-content">
        <div className="question-link-content-left" >{leftContent}</div>
        <div className="question-link-content-middle"><hr className="question-link-separator"/></div>
        <div className="question-link-content-right">{rightContent}</div>
      </div>
    </div>
);


export default DisplayBox;
