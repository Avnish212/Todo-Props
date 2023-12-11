import React from 'react'

const ListItem = ({todo,deleteList,editList}) => {
  return (
    <li className='list-group-item rounded-0 mt-3'>
       {todo.text}
        <button className="btn btn-sm btn-warning float-end rounded-0" onClick={()=>editList(todo)}>Edit</button>
        <button className="btn btn-sm btn-danger float-end rounded-0" onClick={()=>deleteList(todo.id)} >Delete</button>
        </li>
  )
}

export default ListItem