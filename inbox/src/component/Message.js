import React from "react";
import MessageLabel from "./MessageLabel.js";

const Message = ({ message, checkBox, changeStar}) => {
  const checkread = () => {
    if (message.read) {
      return "row message read";
    }
    return "row message unread";
  };

  const starred = () => {
    if (message.starred) {
      return "star fa fa-star";
    }
    return "star fa fa-star-o";
  };

  const checkSelectedColor = () => {
    if (message.selected) {
      return "selected";
    } else {
      return "";
    }
  };

  const checkSelectedBox = () => {
    if (message.selected) {
      return true;
    } else {
      return false;
    }
  };

  const labelCheck = () => {
    if (message.labels.length > 0) {
      return message.labels.map((label) => <MessageLabel label={label} key={message.labels.indexOf(label)} />);
    }
  };

  return (
    //<div class="row message unread">
    <div className={`${checkread()} ${checkSelectedColor()}`}>
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2">
            <input
              type="checkbox"
              checked={checkSelectedBox()}
              onChange={() => checkBox(message.id)}
            />
          </div>
          <div className="col-xs-2">
            <i className={starred()} onClick={() =>changeStar(message.id)}></i>
          </div>
        </div>
      </div>
      <div className="col-xs-11">
        {labelCheck()}

        <a href="#">
          {message.subject}
        </a>
      </div>
    </div>
  );
};

export default Message;
