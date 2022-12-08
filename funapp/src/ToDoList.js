import React, { useState, useEffect } from "react";
// import {BsXLg} from "./react-icons/bs";

const ToDoList = (props) => {
  console.log(props, "props");

  //   const { handleComplete } = props;

  return (
    <>
      <div className="todo_style">
        <i
          className="fa-solid fa-xmark BsXLg "
          onClick={() => {
            props.onSelect(props.id);
          }}
        ></i>
        <li> {props.text} </li>

        {/* <button className="pending" onClick={handleComplete(props.text)}>Mark as Completed</button> */}
      </div>
    </>
  );
};

export default ToDoList;
