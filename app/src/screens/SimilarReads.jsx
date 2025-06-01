import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Book from '../components/Book';
import BookSelect from '../components/BookSelect';
import books from "../../content_books.json";
import { Container } from 'react-bootstrap';
import { useState } from 'react';

const SimilarReads = () => {
  const [currBook, updateBook] = useState("");

  return (
    <>
      <Container className='mt-3'>
        <h1>Top 10 recommendations similar to{currBook ? ":" : " your favourite book."}</h1>
        {currBook && <h2>{currBook}</h2>}
        <BookSelect books={books.books} updateParent={updateBook}/>
        {currBook && <Row>
          { books[currBook].map((book) => (
            <Col key={book.index} sm={12} md={6} lg={4} xl={3}>
              <Book book={book}></Book>
            </Col>
          ))}
        </Row>}
      </Container>
    </>
  )
}

export default SimilarReads