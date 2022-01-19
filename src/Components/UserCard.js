import React from 'react'
import { Button, Card } from 'react-bootstrap'

const UserCard = ({el}) => {
    return (
       
         <Card style={{ width: '18rem' }} className=" m-3">
  <Card.Img variant="top" src={el.url} />
  <Card.Body>
    <Card.Title>{el.title}</Card.Title>
    <Card.Text>
     
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        
      
    )
}

export default UserCard
