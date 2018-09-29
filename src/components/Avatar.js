import React from 'react';

const Avatar = ({url, name, width=100, height=100, divClass="avatar"}) => {

  return (
    <div className={divClass}><img src={url} alt={`${name}'s avatar`} width={width} height={height} className="question-avatar" /></div>
  )
}

export default Avatar;
