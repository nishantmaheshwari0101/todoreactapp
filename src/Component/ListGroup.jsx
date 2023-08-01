import React from 'react'
import ListItem from './ListItem'

const ListGroup = ({todos , deleteTodo , editTodo}) => {
  

  if(!todos || todos.length === 0){
    return (
      <h1 className='display-5 text-center my-2' > No Todos Here...</h1>
    )
  }
  
  
  
  
  
  return (
    <ul className="list-group my-3 w-100" >


    
       { todos.map((todo) =>  (
         <ListItem  key={todo.id} todo={todo} deleteTodo={deleteTodo} editTodo={editTodo}/>
       ))} 
    
 

    </ul>
  );
};

export default ListGroup
