import React from "react";
import Message from "./Message.js";

const MessageList = ({messages, checkBox, changeStar}) => {
 
  

  return (
    <div>
      {messages.map((message) => (
        <Message message={message} checkBox={checkBox} changeStar={changeStar} key={message.id} />
      ))}
    </div>
  );
};

export default MessageList;
