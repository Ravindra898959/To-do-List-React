import React, { useState } from "react";
import ToDoList from "./ToDoList";
import "./index.css";
import PendingTask from "./PendingTask";
import CompletedTask from "./CompletedTask";

const App = () => {
  const [inputList, setInputList] = useState(" ");
  const [Items, setItems] = useState([]);
  const [pendingValues, setPendingValues] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteItems = (id, arrElem) => {
    console.log(arrElem, "element");
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return arrElem && index !== id;
      });
    });
  };

  const markAsPending = (id, items) => {
    // console.log(id, "==============");
    // console.log(items, "items");
    let filteredData = Items.filter((index, items) => {
      return index !== id;
    });
    setItems(filteredData);
    setPendingValues(filteredData);
  };
  // ***************************** pending page

  // const [pending, setPending] = useState([]);

  return (
    <>
      <div className="all-div">
        <PendingTask pendingValues={pendingValues} />
        {
          <div className="main_div">
            <div className="center_div">
              <br />
              <h1>ToDo List</h1>
              <br />
              <input
                type="text"
                placeholder="Add a Item"
                value={inputList}
                onChange={itemEvent}
              />
              <button className="button" onClick={listOfItems}>
                +
              </button>
              <ol>
                {/* {<button> Pending </button>} */}
                {Items.map((itemVal, index) => {
                  return (
                    <>
                      <ToDoList
                        key={index}
                        id={index}
                        text={itemVal}
                        onSelect={deleteItems}
                        Items={Items}
                        markAsPending={markAsPending}
                      />
                    </>
                  );
                })}
              </ol>
            </div>
          </div>
        }
        <CompletedTask />
      </div>
    </>
  );
};

export default App;
