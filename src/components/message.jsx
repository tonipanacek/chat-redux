import React, { Component } from 'react';

const Message = ({message}) => {
  return(
    <div className="message">
      <h4>{message.author} - <span>{message.created_at}</span></h4>
      <p>{message.content}</p>
    </div>
  )
}

export default Message;
