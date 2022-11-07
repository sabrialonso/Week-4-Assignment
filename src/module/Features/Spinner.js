import Button from 'react-bootstrap/Button';
import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

function ButtonExample() {
  return (
    <>
      
      <Button style={{backgroundColor : "red"}} variant="primary" disabled >
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    </>
  );
}

export default ButtonExample;