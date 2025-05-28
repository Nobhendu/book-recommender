import React from 'react';
import { Image, Container } from 'react-bootstrap';
import home from '../../homescreen';
import { GrGroup } from "react-icons/gr";
import { GiWhiteBook } from "react-icons/gi";
import { IoMdCheckboxOutline } from "react-icons/io";

const divStyle = {
  'marginTop': '2rem',
  'marginBottom': '2rem',
};

const HomeScreen = () => {
  return (
    <>
      <Image src="../../images/shelf.jpg" fluid />
      <Container className='my-4'>
        <h1>{home.heading}</h1>
        <div style={divStyle}>
          <h3><GiWhiteBook className='pb-1 me-2' size='1em'/>{home.further[0].subhead}</h3>
          <p>{home.further[0].para}</p>
        </div>
        <div style={divStyle}>
          <h3><IoMdCheckboxOutline className='pb-1 me-2' size='1em'/>{home.further[1].subhead}</h3>
          <p>{home.further[1].para}</p>
        </div>
        <div style={divStyle}>
          <h3><GrGroup className='pb-1 me-2' size='1em'></GrGroup>{home.further[2].subhead}</h3>
          <p>{home.further[2].para}</p>
        </div>
      </Container>
    </>
  )
}

export default HomeScreen