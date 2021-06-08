import React from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

function Auth({ authRoute }) {
  let body = (
    <>
      {authRoute === "login" && <LoginForm />}
      {authRoute === "register" && <RegisterForm />}
    </>
  );
  return <div className="landing">
      <div className="dark-overlay">
          <div className="landing-inner">
              <h1>WELCOME</h1>
              <h4>Don't forget yourself !</h4>
              {body}
          </div>
      </div>
  </div>;
}

export default Auth;
