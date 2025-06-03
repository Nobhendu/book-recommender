import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Book = ({ book }) => {
  return (
    <Card className='my-3 p-3' style={{ width: '16rem' }}>
      <Link style={{color: 'inherit', textDecoration: 'inherit'}} to={"https://goodreads.com/book/show/"+book.bookId} target="_blank">
      <div>
        <Card.Img variant="top" src={book.coverImg} />
        <Card.Body>
          <Card.Title as='h6'>{book.title}</Card.Title>
        </Card.Body>
      </div>
      </Link>
      <ListGroup className="list-group-flush">
        <ListGroup.Item style={{'fontSize': '0.9em'}}>Author: {book.author}</ListGroup.Item>
        <ListGroup.Item style={{'fontSize': '0.9em'}}>Rating: {book.rating}/5.0</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default Book