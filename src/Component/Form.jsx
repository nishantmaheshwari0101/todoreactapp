import React, { useEffect, useState } from 'react'

const Form = ({saveTodo , edit , updateTodo}) => {
 const [text , setText] = useState('');
 
 
  const handelsubmit = (e) => {
    e.preventDefault();
   
    if (edit.isEdit) {
      updateTodo( edit.todo.id , text);
    }else {
      saveTodo(text);
    }
    

    


    setText('');
  };
   

  useEffect(() => {
   setText(edit.todo.text)
  },[edit]);
  
  return (

    <form  onSubmit={(e) => handelsubmit(e)}>

<input type="text" className="form-control rounded-0 my-3" onChange={(e) => setText(e.target.value)}
value={text} />
<button className="btn btn-success w-100 rounded-0">Save</button>

    </form> 
  )
}

export default Form
