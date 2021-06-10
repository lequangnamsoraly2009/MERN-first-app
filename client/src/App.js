import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "./features/Auth/pages/Auth";
import Home from "./features/Home";
import NotFound from "./components/NotFound";
import Landing from "./components/Layout/Landing"
import ProtectedRoute from "./components/routing/ProtectedRoute";
import About from "./features/Home/pages/aboutPage";
// import ProtectedRoute from "./components/routing/ProtectedRoute";
// import HomePage from "./features/Home/pages/homePage";
// import { useSelector } from "react-redux";
// import Spinner from "react-spinkit";
// import styled from "styled-components";

function App() {
  // const { isAuthenticated } = useSelector((state) => state.auth);
  // console.log(isAuthenticated);
  // if (authLoading===true) {
  //   return (
  //     <AppLoading>
  //       <AppLoadingContents>
  //         <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
  //       </AppLoadingContents>
  //     </AppLoading>
  //   );
  // }
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />

        <Route
          exact
          path="/login"
          render={(props) => <Auth {...props} authRoute="login" />}
        />
        <Route
          exact
          path="/register"
          render={(props) => <Auth {...props} authRoute="register" />}
        />

        <Route exact path="/home" component={Home} />
        <ProtectedRoute exact path="/about" component={About}/>

        <Route exact component={NotFound} />
      </Switch>
    </Router>
  );
}

// const AppLoading = styled.div`
//   display: grid;
//   place-items: center;
//   height: 100vh;
//   width: 100%;
// `;

// const AppLoadingContents = styled.div`
//   text-align: center;
//   padding-bottom: 100px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

export default App;
