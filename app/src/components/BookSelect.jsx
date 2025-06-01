import React, { useState, useEffect } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { Form } from 'react-bootstrap';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import '../assets/styles/BookSelect.css';

const BookSelect = ({ books, updateParent }) => {
  const [selection, setSelection] = useState([]);

  useEffect(() => {
    if (selection.length > 0) {
      updateParent(selection[0]);
      setSelection([]);
    }
  }, [selection, updateParent]);

  return (
    <>
      <Form.Group className="book-select-group my-3">
        <Form.Label className="book-label me-4">Choose a book:</Form.Label>
        <div style={{ flex: 1 }}>
          <Typeahead 
            id="basic-typeahead-single"
            labelKey="name"
            onChange={setSelection}
            options={books}
            placeholder="Type, or select a book..."
            selected={selection}
            className="custom-typeahead"
          />
        </div>
      </Form.Group>
    </>
  )
}

export default BookSelect