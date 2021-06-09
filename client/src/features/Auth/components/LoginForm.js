import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useHistory } from "react-router-dom";
import { loginUser } from "../logics/loginUser";
import setAuthToken from "../../../utils/setAuthToken";
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from "../../../common/apiConstant";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuth } from "../authSlice";

function LoginForm() {
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  // const {authLoading,isAuthenticated,user } = useSelector(state => state.user);

  const dispatch = useDispatch();

  const history = useHistory();

  const { username, password } = loginForm;

  const onChangeLoginForm = (e) => {
    // e.target.name get name from form input
    // setLoginForm get all loginForm and then overwrite new value
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const authenticateUser = async () => {
    if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
      // console.log(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
      setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
    }
    // If token is cheat -> users change token -> check it
    try {
      const response = await axios.get(`${apiUrl}/auth`);
      if (response.data.success === true) {
        // console.log('Doo toi day roi ne`')
        dispatch(setAuth({ isAuthenticated: true, user: response.data.user }));
      }
    } catch (error) {
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
      setAuthToken(null);
      dispatch(setAuth({ isAuthenticated: false, user: null }));
    }
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginData = await loginUser(loginForm);
      console.log(loginData);
      if (loginData.success) {
        history.push("/home");
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
