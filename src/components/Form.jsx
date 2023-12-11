import React, { useEffect, useState } from 'react'

const Form = ({ addList, edit, updateList }) => {

  const [text, setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit.editMode) {
      updateList(edit.todo.id, text)
    } else {
      addList(text)
    }


    setText("")
  }

  useEffect(() => {
    setText(edit.todo.text)
  }, [edit])



  return (
    <form className='mt-3' onSubmit={(e) => handleSubmit(e)} >
      <input type="text" className="form-control rounded-0" onChange={(e) => setText(e.target.value)} value={text} />
      <button className="btn btn-primary w-100 mt-3 rounded-0" >Add Todo</button>
    </form>
  )
}

export default Form