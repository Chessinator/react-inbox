import React, { useState } from "react";
import MessageList from "./component/MessageList";
import Toolbar from "./component/Toolbar";
import "./App.css";

function App() {
  const [messages, setMessage] = useState(() => [
    {
      id: 1,
      subject:
        "You can't input the protocol without calculating the mobile RSS protocol!",
      read: false,
      starred: true,
      selected: false,
      labels: ["dev", "personal"],
    },
    {
      id: 2,
      subject:
        "connecting the system won't do anything, we need to input the mobile AI panel!",
      read: false,
      starred: false,
      selected: true,
      labels: [],
    },
    {
      id: 3,
      subject:
        "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
      read: false,
      starred: true,
      selected: false,
      labels: ["dev"],
    },
    {
      id: 4,
      subject: "We need to program the primary TCP hard drive!",
      read: true,
      starred: false,
      selected: true,
      labels: [],
    },
    {
      id: 5,
      subject:
        "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
      read: false,
      starred: false,
      selected: false,
      labels: ["personal"],
    },
    {
      id: 6,
      subject: "We need to back up the wireless GB driver!",
      read: true,
      starred: true,
      selected: false,
      labels: [],
    },
    {
      id: 7,
      subject: "We need to index the mobile PCI bus!",
      read: true,
      starred: false,
      selected: false,
      labels: ["dev", "personal"],
    },
    {
      id: 8,
      subject:
        "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
      read: true,
      starred: true,
      selected: false,
      labels: [],
    },
  ]);

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

  const addLabel =(name) =>{
    setMessage(messages.map((message) => message.selected === true && !message.labels.includes(name) ? {...message, labels: message.labels.concat(name)} : message))
  }

  const delLabel = (name) => {
    setMessage(messages.map((message) => message.selected === true && message.labels.includes(name) ? {...message, labels: message.labels.filter((e) => e !== name)} : message))
  }

 

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
