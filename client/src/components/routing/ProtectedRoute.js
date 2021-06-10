import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Spinner from "react-spinkit";
import { Redirect, Route } from "react-router";

function ProtectedRoute({ component: Component, ...rest }) {
  const { authLoading, isAuthenticated } = useSelector((state) => state.auth);
//   console.log(authLoading, isAuthenticated);
  if (authLoading === true) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
        </AppLoadingContents>
      </AppLoading>
    );
  }
  //Check route have isAuthenticated ?
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated===true  ? (
          <>
            <Component {...rest} {...props} />
          </>
        )
        :
        (<Redirect to='/login' />) 
      }
    />
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
`;

export default ProtectedRoute;
