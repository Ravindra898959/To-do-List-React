import React, { useEffect } from "react";

const PendingTask = (props) => {
  const data = props.pendingData;
  const { pendingValues } = props;
  // console.log(pendingValues, "pendingValues");

  useEffect(() => {
    let arr = [];
    pendingValues.map((items) => {
      arr.push(...pendingValues, items);
    });
    // console.log(arr, "arree");
  }, [pendingValues]);

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>Pending Task</h1>
          <li>{data}</li>
          <br />
          {/* <input type="text"   placeholder="Add a Item"/>
              <button > +</button> */}
        </div>
      </div>
    </>
  );
};

export default PendingTask;
