import React from 'react'
import { Card, CardTitle, Button} from "reactstrap"
import { RiDeleteBin6Line } from "react-icons/ri";




const TodolistCard = ({ value, handleDelete }) => {

  return (
    <div className='card-style'>
       <Card
    style={{
                  width: '36rem',
                  margin: "20px auto",
                
                  }}
>
  
    <CardTitle className="cardtitle">
                      {value.TodoListName}
                      <Button className='btn-danger' onClick={()=>handleDelete(value.id)}>
                      <RiDeleteBin6Line /></Button>
          </CardTitle>
     

</Card>
       
    
    </div>
  )
}

export default TodolistCard

