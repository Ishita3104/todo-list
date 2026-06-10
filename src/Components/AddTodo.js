import React from 'react'
import { useState } from 'react'
const AddTodo = (props) => {
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
  const submit=(e)=>{
   e.preventDefault();
   if(!title || !desc)
   {
    alert("Title or Description cannot be blank!")
   }
   else{
    props.addTodo(title,desc);
    setDesc("");
    setTitle("");
   }
  }
  return (
    <div className="container">
      <form onSubmit={submit}>
  <div className="mb-3">
    <h3 className='text-center my-3'>Add a Todo</h3>
    <label htmlFor="title" className="forNamem-label">Enter Title</label><br>
    </br>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}className="form-control" id="title" aria-describedby="emailHelp"/>
    </div>
    <div className="mb-3">
    <label htmlFor="desc" className="forNamem-label">Description</label><br></br>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" aria-describedby="emailHelp"/>
    </div>
 
  <button type="submit" className="btn  btn-sm btn-success">Submit</button>
</form>
    </div>
  )
}

export default AddTodo
