import React from 'react'
import Todo_item from "./Todo_item"
export default function Todo(props) {
  return (
    <div className="container" style={{minHeight:"32vh"}}>
        <h3 className="my-3">
            List
        </h3>
        <div className="row row-cols-2 row-cols-md-4 g-4 my-3">
            {props.todos.length===0?"No Todos to display":
            props.todos.map((todos)=>{
                return <Todo_item todo={todos} key={todos.sno} onDelete={props.onDelete}/>
            })}
        </div>
        
        {/* <Todo_item todo={props.todos[2]}/> */}
    </div>
  )
}

