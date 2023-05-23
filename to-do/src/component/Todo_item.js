import React from 'react'
import i from './image.png';

export default function Todo_item(props) {
  return (
    <div>
        {/* <h4>{props.todo.title}</h4>
        <h5>{props.todo.desc}</h5>
        <button className="btn btn-sm btn-success">Mark as done</button>
        <button className='btn btn-light'></button>
        <button className="btn btn-sm btn-danger">delete</button>
        {/* <br /> */}
        {/* <br /><br /> */}

        {/* <div className="row row-cols-2 row-cols-md-3 g-4 my-3"> */}
            {/* {props.todo.map((todo)=>{
                return (
                    <> */}
                    <div className="col col-md" >
                        <div className="card card-h-100rem">
                            <img src={i} className="card-img-top"/>
                            <div className="card-body">
                                <h5 className="card-title" >{props.todo.title}</h5>
                                <p className="card-text" >{props.todo.desc}</p>
                                <a href="#" className="btn  btn-success" onClick={()=>{props.onDelete(props.todo)}}>Mark as done</a>
                                <a href="#" className="btn  btn-light"></a>
                                <a href="#" className="btn  btn-danger" onClick={()=>{props.onDelete(props.todo)}}>Delete</a>
                            </div>
                        </div>
                    </div>
            
            {/* </>
                )
            })} */}
            

        {/* </div> */}

        
    </div>
  )
}

