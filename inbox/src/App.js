import React, { useState } from "react";
import MessageList from "./component/MessageList";
import Toolbar from "./component/Toolbar";
import Data from "./component/data";
import "./App.css";

function App() {
  const [messages, setMessage] = useState(() => Data);

  const checkBox = (id) => {
    // Check if theconsole.log(id);
    setMessage(
      messages.map((message) =>
        message.id === id
          ? { ...message, selected: !message.selected }
          : message
      )
    );
  };

  const checkAll = () => {
    var checkSel = messages.some((message) => message.selected === false);

    if (checkSel) {
      setMessage(
        messages.map((message) => {
          return { ...message, selected: true };
        })
      );
    } else {
      setMessage(
        messages.map((message) => {
          return { ...message, selected: false };
        })
      );
    }
  };

  const changeStar = (id) => {
    setMessage(
      messages.map((message) =>
        message.id === id ? { ...message, starred: !message.starred } : message
      )
    );
  };

  const markAsRead = (boolean) => {
    setMessage(
      messages.map((message) =>
        message.selected === true ? { ...message, read: boolean } : message
      )
    );
  };

  const removeMessages = () => {
    setMessage(messages.filter((message) => message.selected === false));
  };

  const addLabel = (name) => {
    setMessage(
      messages.map((message) =>
        message.selected === true && !message.labels.includes(name)
          ? { ...message, labels: message.labels.concat(name) }
          : message
      )
    );
  };

  const delLabel = (name) => {
    setMessage(
      messages.map((message) =>
        message.selected === true && message.labels.includes(name)
          ? { ...message, labels: message.labels.filter((e) => e !== name) }
          : message
      )
    );
  };

  return (
    <div>
      <Toolbar
        checkAll={checkAll}
        messages={messages}
        markAsRead={markAsRead}
        removeMessages={removeMessages}
        addLabel={addLabel}
        delLabel={delLabel}
      />
      <MessageList
        messages={messages}
        checkBox={checkBox}
        changeStar={changeStar}
      />
    </div>
  );
}

export default App;
