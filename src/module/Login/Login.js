import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';
import PropTypes from 'prop-types';

function BasicExample(backgroundColor) {
  return (
    <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I am not a robot" />
      </Form.Group>
      <Button variant="primary" type="submit" style={{backgroundColor : backgroundColor}}>
        Submit
      </Button>
    </Form>
  );
}

export default BasicExample;

BasicExample.PropTypes = {
  backgroundColor: PropTypes.string,
}

BasicExample.defaultProps = {
  backgroundColor: "red"

}

