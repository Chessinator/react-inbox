import React from "react";
import Message from "./Message.js";

const MessageList = ({messages, checkBox, changeStar}) => {
 
console.log(messages);
  

  return (
    <div>
      {messages.map((message) => (
        <Message message={message} checkBox={checkBox} changeStar={changeStar} />
      ))}
    </div>
  );
};

export default MessageList;
