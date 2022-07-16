import React from 'react'
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';

function AuthorCard(authorObj) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{authorObj.first_name} / {authorObj.last_name}</Card.Title>
        <p className="card-text bold">{authorObj.favorite}</p>
   
        <Link href={`/book/${authorObj.firebaseKey}`} passHref>
          <Button variant="primary" className="m-2">VIEW</Button>
        </Link>
      
        <Link href={`/book/edit/${authorObj.firebaseKey}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" className="m-2">
          DELETE
        </Button>
      </Card.Body>
    </Card>
  );
}

AuthorCard.propTypes = {
  authorObj: PropTypes.shape({
    
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    favorite: PropTypes.bool,
    
    firebaseKey: PropTypes.string,
  }).isRequired,
};

AuthorCard.defaultProps = {
    
    first_name: 'THIS IS A NAME',
    last_name: 'NAME PT.2 ELECTRIC BOOGALOO',
    favorite: true,
    firebaseKey: 'THIS IS THE FBKEY',
}

export default AuthorCard;
