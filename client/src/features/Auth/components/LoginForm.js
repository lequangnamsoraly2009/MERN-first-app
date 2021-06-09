import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from "../../../common/apiConstant";

function LoginForm() {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const { username, password } = loginForm;

  const loginUser = async (userForm) => {
    try {
      const response = await axios.post(`${apiUrl}/auth/login`,userForm);
      if (response.data.success) {
        localStorage.setItem(
          LOCAL_STORAGE_TOKEN_NAME,
          response.data.accessToken
        );
      }
      return response.data;
    } catch (error) {
      if (error.response.data) {
        return error.response.data;
      } else {
        return { success: false, message: error.message };
      }
    }
  };

  const onChangeLoginForm = (e) => {
    // e.target.name get name from form input
    // setLoginForm get all loginForm and then overwrite new value
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginData = await loginUser(loginForm);
      if(loginData.success){
        
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form onSubmit={loginSubmit}>
        <Form.Group className="mb-4">
          <Form.Control
            type="text"
            placeholder="UserName"
            name="username"
            value={username}
            onChange={onChangeLoginForm}
            required
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChangeLoginForm}
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
