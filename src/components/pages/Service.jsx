import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Service = (props) => {
    //=============================== Object Destructuring : 
    const {title,detail, price, img, time, Days, master} = props.service;
    return (
        <div className='col-3'>
            {/*================================================== Using Card from react bootstrap  */}
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>Instruments : {title}</Card.Title>
    <Card.Text className="my-3">
     {detail}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Time : {time}</ListGroupItem>
    <ListGroupItem>Days of week : {Days}</ListGroupItem>
    <ListGroupItem>Master Name: {master}</ListGroupItem>
    <ListGroupItem>Price :$ {price} <b><sub>/month</sub></b>
    </ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="/cart">Add To Cart</Card.Link>
    <Card.Link href="/serviceProduct">Other Services</Card.Link>
  </Card.Body>
</Card> 
            
        </div>
    );
};

export default Service;