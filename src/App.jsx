import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import Form from './Component/Form';
import ListGroup from './Component/ListGroup';
import Footer from './Component/Footer';

const App = () => {

  const [name , setName] = useState(' ultimate todo')
  const website = 'www.nishantmaheshwari.com'
  const [todos , setTodos] = useState([]);
  const [edit , setEdit ] = useState({
    todo : {},
    isEdit: false,
  });



  const deleteTodo = (id) => {
     
    setTodos(todos.filter((todo) =>{
      if(todo.id !== id){ 
        return true;
      }
      


    })
    );
  };

  const saveTodo = (text) => {

    const newTodo = {
      id: crypto.randomUUID(),
      text:text
    };

    setTodos([newTodo, ...todos])
  };


  const editTodo = (todo) => {

    setEdit({
    todo: todo,
    isEdit: true,
    });
  }


  const updateTodo = ( id , newText) => {
   setTodos(todos.map(item => item.id === id ? {...item , text : newText}  : item ))
  };
  //  setEdit({
  //   todo : {},
  //   isEdit: false,
  // });
  


  return (




   <>
   <Navbar  name={name}/>
   <button className="btn btn-dark rounded-0 m-3" onClick={()=>setName('i m change')}>change</button>

   <div className="container">
    <Form  saveTodo={saveTodo} edit={edit}  updateTodo={updateTodo}/>
   <ListGroup  todos={todos}  deleteTodo={deleteTodo} editTodo={editTodo}/>
   <Footer website={website} />
   
   
   </div>
   </>
  );
};

export default App
