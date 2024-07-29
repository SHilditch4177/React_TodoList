import {useState} from "react";
import "./App.css";
import Delete from "./assets/delete.png";
import Add from "./assets/add.png";
import Complete from "./assets/tick.png";
import Todo from "./assets/todo.jpg"
import Archive from "./assets/archive.png";
import TodoBack from "./assets/main2.jpg";


function App() {
   const [input, setInput] = useState([]);
   const [complete, setComplete] = useState([]);
   const [archive,setArchive]=useState([]);
   const [value, setValue] = useState("");
   const addTodo = () => {
    setInput([...input, value]);
  };

    const deleteTodo = (index)=>{
    const newTodos = [...input];
    newTodos.splice(index,1);
    setInput(newTodos);
  };

    const completeTodo = (index)=>{
    const newTodos = [...input];
    const newCompleteTodos = [...complete];
    newCompleteTodos.push(newTodos[index]);
    newTodos.splice(index, 1);
    setInput(newTodos);
    setComplete(newCompleteTodos);
  };

  const archiveTodo = (index) => {
    const newTodos = [...input];
    const newArchive = [...archive];
    newArchive.push(newTodos[index]);
    newTodos.splice(index, 1);
    setInput(newTodos);
    setArchive(newArchive);
  };

  return (
  <div className="container">
      <div className="wrapper">
        <div className="shadow">
         <div className="Todo">
           {" "}
           <h1 className="header1">To Do List</h1>{" "}
            <div className="wrapper2">
              <div className="bar">
                <input className="inputBox" onChange={(e) => setValue(e.target.value)} type="text" placeholder="enter to-do"/>{" "}
                <img className="add" onClick={addTodo} src={Add} />{" "}
              </div> 
           </div>
          <div className="list-container">
        <div className="list1">
       <ul>{" "} {input.map((todo, index)=>(
         <li className="main" key={index}><div className="text">{todo}</div> 
           <div className="buttons">
              <img className="complete"onClick={()=>completeTodo(index)} src={Complete}/>
              <img className="delete"onClick={() => deleteTodo(index)} src={Delete}/>
              <img className="archive" onClick={() => archiveTodo(index)} src={Archive} />
           </div>
         </li>
        ))}{" "}</ul>{" "}
       </div>  
     </div>
      <div className="completed">
        <div className="list2">
          <h1 className="header2">Complete</h1>
            <ul>{" "}
              {complete.map((todo, index)=>(
             <li className="three" key={index}>{todo}</li>
            ))}{" "}
            </ul>{" "}
          </div>
       </div>
       <div className="archive-box">
         <div className="list3">
           <h1 className="header3">archive</h1>
              <ul>{""}
                 {archive.map((todo, index)=>(
                 <li className="two" key={index}>{todo}</li>
                 ))}{""}
                </ul>{""}
             </div>
           </div>
          </div>
      </div>
    </div>
 </div> 
  );
}
export default App;




