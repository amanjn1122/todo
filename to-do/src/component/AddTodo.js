import React, { useState } from 'react';


export const AddTodo = (props) => {
    const [title, settitle] = useState("");
    const [desc, setdesc] = useState("");

    const submit= (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Title or description cannot be empty")
        }
        else{
            props.addTodo(title,desc);
            settitle("");
            setdesc("");
        }
        
    }

  return (
    <div className='container'>
        <h3>Add a Todo</h3>
        <form  onSubmit={submit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">
                    Todo Title
                </label>
                <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} className="form-control" id="title"/>
                {/* <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                </div> */}
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Description</label>
                <input type="text" value={desc} onChange={(e)=>{setdesc(e.target.value)}} className="form-control" id="desc"/>
            </div>
            {/* <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div> */}
            <button type="submit" className="btn btn-primary">Add todo</button>
        </form>
    </div>
  )
}
