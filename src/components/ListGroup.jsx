import React from 'react'
import ListItem from './ListItem'

const ListGroup = ({todos,deleteList,editList}) => {

  return (
    <ul className='list-group mt-3'>
        {
          todos.map((todo)=> <ListItem todo={todo} deleteList={deleteList} editList={editList}/>)
        }
    </ul>
  )
}

export default ListGroup