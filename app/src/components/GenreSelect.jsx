import { useState } from 'react';
import Form from 'react-bootstrap/Form';

const GenreSelect = ({ genres, updateParent }) => {
  const len = genres.length;
  const [genre, setGenre] = useState(len);

  const onGenreSelect = (event) => {
    const sel = event.target.value;
    const newGenre = sel==len ? "None" : genres[sel];
    setGenre(sel);
    updateParent(newGenre);
  };

  return (
    <>
      <Form.Group>
        <Form.Label className='me-4'>Select genre:</Form.Label>
        <Form.Select style={{display: "inline", width: "auto"}} value={genre} onChange={onGenreSelect} aria-label="Select genre">
        <option key={len} value={len}>None</option>
        { genres.map((genre, index) => (
          <option key = { index } value={ index }>{ genre }</option>
        )) }
      </Form.Select>
      </Form.Group>
    </>
  );
}

export default GenreSelect;