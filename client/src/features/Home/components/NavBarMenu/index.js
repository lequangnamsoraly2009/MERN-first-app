import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LOCAL_STORAGE_TOKEN_NAME } from "../../../../common/apiConstant";
import setAuthToken from "../../../../utils/setAuthToken";
import { setAuth } from "../../../Auth/authSlice";

function NavBarMenu() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const logoutUser = () => {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
    setAuthToken(null);
    dispatch(setAuth({ isAuthenticated: false, user: null }));
  };
  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      className="shawdow justify-content-between"
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav fill variant="tabs" className="mr-auto">
          <Nav.Link
            className="font-weight-bolder text-white"
            to="/home"
            as={Link}
          >
            Home
          </Nav.Link>
          <Nav.Link
            className="font-weight-bolder text-white"
            to="/about"
            as={Link}
          >
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <Nav>
        <Nav.Link className="font-weight-bolder text-white" disabled>
          Hi {user.username}
        </Nav.Link>
        <Button
          variant="outline-primary"
          className="font-weight-bolder text-white"
          onClick={logoutUser}
        >
          Logout
        </Button>
      </Nav>
    </Navbar>
  );
}

export default NavBarMenu;
