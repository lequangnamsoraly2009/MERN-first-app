import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <>
      <Form>
        <Form.Group className="mb-4">
          <Form.Control
            type="text"
            placeholder="UserName"
            name="username"
            required
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
          />
        </Form.Group>
        <Button className="mb-4" variant="success" type="submit">
          Login
        </Button>
      </Form>
      <div className="d-flex flex-row">
        <p className="mr-4">Don't have an account ?</p>
        <Link to="/register">
          <Button variant="info" size="sm" className="ml-2">
            Register
          </Button>
        </Link>
      </div>
    </>
  );
}

export default LoginForm;
