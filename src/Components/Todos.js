import React from 'react'
import TodoItem from './TodoItem'
export const Todos = ({todos,onDelete}) => {
 
  return (
    <div className='container min-vh-100'>
      <h3 className=' my-3'>Todos List</h3><hr></hr>
      { todos.length===0?"No Todos to display":
      todos.map((todo)=>{
        return <><TodoItem todo={todo} key={todo.sno} onDelete={onDelete}/>
        <hr></hr>
        </>
      })
      }
      
    </div>
  )
}


