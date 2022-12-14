import React from "react";
// import PendingTask from "./PendingTask";

const ToDoList = (props) => {
  const { markAsPending } = props;

  return (
    <>
      <div className="todo_style">
        <button
          onClick={() => {
            markAsPending(props.id);
          }}
        >
          Pending
        </button>
        <i
          className="fa-solid fa-xmark BsXLg "
          onClick={() => {
            props.onSelect(props.id);
          }}
        ></i>
        <li> {props.text} </li>
      </div>
    </>
  );
};

export default ToDoList;
