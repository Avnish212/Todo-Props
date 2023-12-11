import React, { Children, useState } from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import ListGroup from './components/ListGroup'

const App = () => {
  let name="Todo Project";

  const[todos,setTodos]= useState([ ])
 const[edit,setEdit]= useState({
  todo:{},
  editMode:false
 })
  
  const deleteList=(id)=>{
    setTodos(todos.filter((todo)=>{
      if(todo.id !== id){
        return true
      }
    }))
  }

  const addList =(text)=>{
    const newLi ={
      id:crypto.randomUUID(),
      text:text
    }

    setTodos([newLi,...todos])
  }

  const editList=(todo)=>{
    setEdit({
      todo:todo,
      editMode:true
    })
  }
 
 const updateList=(oldId,newText)=>{
  setTodos(todos.map((item)=> item.id === oldId ? {id:oldId , text:newText}:item))

  setEdit({
    todo:{},
    editMode:false
  })
 }
  
 
  return (
    <>
    <Navbar name={name} />
    <div className="container">
    <Form addList={addList} edit={edit} updateList={updateList}/>
    <ListGroup  todos={todos} deleteList={deleteList} editList={editList} />
    </div>
    </>
  )
}

export default App