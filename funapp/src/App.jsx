import React, {useState} from "react";
import ToDoList from "./ToDoList";
import "./index.css"
import PendingTask from "./PendingTask";

      



        const App = ()=>{ 



          const [inputList, setInputList] = useState(" ");   
          const [Items, setItems] = useState([]);
  
          // const [completed, setCompleted] = useState("");
          // const [pending, setPending] = useState("");
  
           const itemEvent = (event)=>{
             setInputList(event.target.value)
          };
  
          const listOfItems = ()=>{
           setItems((oldItems)=>{
             return[...oldItems, inputList ];
           });
           setInputList('');   
          };
        
          const deleteItems= (id)=>{
           setItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
              return index !== id 
            })
  
           })
         }

         const handleComplete = (text) =>{
         console.log(inputList,"text"); 
        }
         
      
      return(
      <>
           
            {<div className="main_div">
              <div className="center_div">
              <br/>
              <h1>ToDo List</h1>
              <br/>
              <input type="text"   placeholder="Add a Item"
               value={inputList}
               onChange={itemEvent} />
              <button className="button" onClick={listOfItems}> +</button>
              <ol>
                  {/* {  <button > Mark as pending </button> <li>{inputList} </li> } */}
                  {Items.map((itemVal, index) =>{
                     return <ToDoList 
                     key={index}
                     id={index}
                     text={itemVal}
                     onSelect={deleteItems}  
                     handleComplete={handleComplete}
                     />;

                  })}
                  </ol>
  
            </div>
          </div>}
          
         </>)}
    
   
  
     export default App;