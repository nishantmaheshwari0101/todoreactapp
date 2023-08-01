   import React from 'react'
   
   const ListItem = ({todo , deleteTodo , editTodo}) => {
     return (
        <li className="list-group-item rounded-0 ">
        {todo.text }
    
        <button className="btn btn-danger rounded-0 float-end" value={todo.id} onClick={() =>deleteTodo(todo.id)}>Delete</button>
        <button className="btn btn-warning rounded-0 float-end"  onClick={() => editTodo(todo)} >Edit</button>
    </li>
     )
   }
   
   export default ListItem
   