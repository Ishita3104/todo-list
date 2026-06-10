
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Footer from './Components/Footer';
import { Todos } from './Components/Todos';
import { useState,useEffect, useEffectEvent } from 'react';
import AddTodo from './Components/AddTodo';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ReactDom from 'react-dom/client';
function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null)
  {
   initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
   const [todos,setTodos]=useState(initTodo);
  const onDelete=(todo)=>{
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
     
  }
  useEffect(()=>{
     localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);
  const addTodo=(title,desc)=>{
    let sno
    if(todos.length==0) 
       sno=1
    else
      sno= todos[todos.length-1].sno+1;
    const myTodo={
      sno:sno,
      title:title,
      desc:desc
    }
    setTodos([...todos,myTodo]);
    console.log("Adding sno: ", myTodo.sno)
    
     
    
  }
 
  return (
    <>
  
    <Navbar/>
    <Routes>
      <Route path="/" element={<><AddTodo addTodo={addTodo}/> <Todos todos={todos} onDelete={onDelete}/></>}></Route>
      <Route path="/about" element={<About/>}></Route>
    
    
    </Routes>
    <Footer/>
  
    </>
  );
}

export default App;
