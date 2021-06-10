import React from "react";
import { useSelector } from "react-redux";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import styled from "styled-components";
import Spinner from "react-spinkit";
import { Redirect } from "react-router";

function Auth({ authRoute }) {
  const { authLoading, isAuthenticated } = useSelector((state) => state.auth);
  let body;
  if (authLoading===true) {
    body = (
      <AppLoading>
        <AppLoadingContents>
          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
        </AppLoadingContents>
      </AppLoading>
    );
  } else if (isAuthenticated===true) {
    return <Redirect to="/home" />;
  } else {
    body = (
      <>
        {authRoute === "login" && <LoginForm />}
        {authRoute === "register" && <RegisterForm />}
      </>
    );
  }

  return (
    <div className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1>WELCOME</h1>
          <h4>Don't forget yourself !</h4>
          {body}
        </div>
      </div>
    </div>
  );
}

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;

export default Auth;
