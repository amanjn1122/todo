import logo from './logo.svg';
// import licon from './image.png';
import Header from "./component/Header.js";
import Todo from "./component/Todo.js";
import {Footer} from "./component/Footer";
import { AddTodo } from './component/AddTodo';
import { About } from './component/About';
// import l from './list_icon.webp';
import './App.css';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  // let myVar = 123;
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo= JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete=(todo)=>{
    console.log("I am ondelete", todo);

    // can not delete like this(angular) in react 
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo=(title,desc)=>{
    console.log("I am add todo",title,desc)
    let sno
    if(todos.length==0){
      sno=0;
    }
    else{
      sno=todos[todos.length-1].sno+1;
    }

    const mytodo= {
      sno: sno,
      title: title,
      desc: desc
    }
    console.log(mytodo);
    setTodos([...todos,mytodo]);

  }

  // let todos= [
    const [todos, setTodos] = useState(initTodo);
    useEffect(() => {
      localStorage.setItem("todos",JSON.stringify(todos));
    }, [todos])
    // {
    //   sno: 1,
    //   title: "go to the market",
    //   desc: "need to go to the market"
    // },
    // {
    //   sno: 2,
    //   title: "go to the mall",
    //   desc: "need to go to the market"
    // },{
    //   sno: 3,
    //   title: "go to the ghat",
    //   desc: "need to go to the market"
    // },
    // 
  // ]);

  return (
    <>
    <Router>
      <Header title="List To-Do" searchbar={false} dropdown={false}/>

      <Routes>
        <Route exact path="/" element= {
            <>
              <AddTodo addTodo={addTodo}/>
              <Todo todos={todos} onDelete={onDelete}/>
            </>
        }>
          </Route>
        <Route exact path="/about" element={<About/>}/>
      </Routes>

      <Footer/>
    </Router>
    </>
    // <><p>my app</p>
    // <p>it work</p></>
    
    // <div classNameName="App">
    //   <div>{12+3}</div>
    //   <header classNameName="App-header">
    //     <div>{myVar}</div>
    //     <img src={logo} classNameName="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       classNameName="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
