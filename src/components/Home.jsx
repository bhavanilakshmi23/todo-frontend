import React, { useEffect, useState } from 'react'

import TodolistCard from './TodolistCard'



import axios from "axios"


const Home = () => {
   const [todoListName, setTodoListName] = useState("")
  const [todoLists, setTodoLists] = useState([])
  
     

    const getData = async() => {
    try {
            const res =await axios.get("https://todo-backend-abze.onrender.com/todolists/all")
        if (res.status === 200) {
            setTodoLists(res.data)
            console.log(res.data)
        }
        } catch (error) {
            alert(error)
        }
    }
    

  const handleSubmit = async () => {
    const newtodoLists = {
      TodoListName: todoListName,
      }
    try {
         const res=await axios.post("https://todo-backend-abze.onrender.com/todolists/addtodo", newtodoLists)
      console.log('Form submitted successfully:', res.data);  
      setTodoLists(res.data)
      } 
       
    catch(error) {
      console.error('Error submitting form:', error.message);
      }
  }
  
   
  
    const handleDelete = async (id) => {
        try {
          const res = await axios.delete(`https://todo-backend-abze.onrender.com/todolists/_id`,) 
        if (res.status === 200) {
             getData()
        } 
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() =>{
        getData()
    }, [])
  
   

    return <div className='container' >
         
        <div className='todoListlist'>
        <h2>To-Do Lists</h2>
                    <input
                             name="Name"
                              placeholder="Enter List"
                              type="Name"
                              value={todoListName}
                              onChange={(e)=>setTodoListName(e.target.value)}
        />
        <button onClick={handleSubmit} className='button3'>
    Add
      </button>
        <div className='display'>
     
      { todoLists.map((item) => {
              return <TodolistCard key={item.id} value={item} handleDelete={ handleDelete} />
              })
     }
            </div>
            </div>
  </div>
}

export default Home

