import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Book from '../components/Book';
import GenreSelect from '../components/GenreSelect';
import * as books from "../../top_books.json";
import { Container } from 'react-bootstrap';
import { useState } from 'react';

const TopGenres = () => {
  const [currGenre, updateBooks] = useState("None");

  return (
    <>
      <Container className='mt-3'>
        <h1>Top {books[books.genres[0]].length} books {currGenre != "None" && "in " + currGenre.replace('_', ' ')}</h1>
        <div className="my-3"><GenreSelect genres={books.genres} updateParent={updateBooks}/></div>
        {currGenre == "None" ? <></> : <Row>
          { books[currGenre].map((book) => (
            <Col key={book.index} sm={12} md={6} lg={4} xl={3}>
              <Book book={book}></Book>
            </Col>
          )) }
        </Row>}
      </Container>
    </>
  )
}

export default TopGenres