import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ArlertMessage from "../../../components/ArlertMessage";
import { registerUser } from "../logics/registerUser";

function RegisterForm() {
  const [registerForm, setRegisterForm] = useState({
    username: "",
    password: "",
    passwordConfirm: "",
  });
  const [alert, setAlert] = useState(null);

  const { username, password, passwordConfirm } = registerForm;

  const onChangeRegisterForm = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

  const registerSubmit = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirm) {
      setAlert({ type: "danger", message: "Password is not match" });
      setTimeout(() => setAlert(null), 2000);
      return;
    }

    try {
      const registerData = await registerUser(registerForm);
      if (!registerData.success) {
        setAlert({ type: "danger", message: registerData.message });
        setTimeout(() => setAlert(null), 2000);
      }
    } catch (error) {}
  };

  return (
    <>
      <Form onSubmit={registerSubmit}>
        <ArlertMessage info={alert} />
        <Form.Group className="mb-4">
          <Form.Control
            type="text"
            placeholder="UserName"
            name="username"
            value={username}
            onChange={onChangeRegisterForm}
            required
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChangeRegisterForm}
            required
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={onChangeRegisterForm}
            required
          />
        </Form.Group>
        <Button className="mb-4" variant="success" type="submit">
          Register
        </Button>
      </Form>
      <p>
        You have an account ?
        <Link to="/login">
          <Button variant="info" size="sm" className="ml-2">
            Login
          </Button>
        </Link>
      </p>
    </>
  );
}

export default RegisterForm;
