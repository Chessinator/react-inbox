import React from "react";

const Toolbar = ({ checkAll, messages, markAsRead, removeMessages, addLabel, delLabel }) => {
  const changeButtonForm = () => {
    var checkSome = messages.some((message) => message.selected === false);
    var checkAll = messages.every((message) => message.selected === true);
    var checkNone = messages.every((message) => message.selected === false);

    if (checkNone) {
      return "fa fa-square-o";
    } else if (checkAll) {
      return "fa fa-check-square-o";
    } else if(checkSome && !checkAll ) {
      return "fa fa-minus-square-o";
    }
  };

  const addLabelHandler = async (e) => {
    var name = e.target.value;
    await addLabel(name);
    e.target.value = "Apply label";
  };

  const deleteLabelHandler = async (e) => {
    var name = e.target.value;
    await delLabel(name);
    e.target.value = "Remove label";
  };

  const buttonEnable = () => {
    var checkNone = messages.every((message) => message.selected === false);
    if(checkNone) {
      return  true;
    }else {
      return  false;
    }
  }
  

  const countUnRead = () => messages.filter(message => message.read === false).length

  return (
    <div className="row toolbar">
      <div className="col-md-12">
        <p className="pull-right">
          <span className="badge badge">{countUnRead()}</span>
          unread messages
        </p>

        <button className="btn btn-default" onClick={() => checkAll()}>
          <i className={`${changeButtonForm()}`}></i>
        </button>

        <button className="btn btn-default" onClick={() => markAsRead(true)} disabled={buttonEnable()} >Mark As Read</button>

        <button className="btn btn-default" onClick={() => markAsRead(false)} disabled={buttonEnable()} >Mark As Unread</button>

        <select className="form-control label-select" onChange={(e) => addLabelHandler(e)}>
          <option >Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select className="form-control label-select"onChange={(e) => deleteLabelHandler(e)}>
          <option>Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <button className="btn btn-default" onClick={() => removeMessages()} disabled={buttonEnable()} >
          <i className="fa fa-trash-o"></i>
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
