import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import NotFound from "../../components/NotFound";
import HomePage from "./pages/homePage";

function Home() {
  const match = useRouteMatch();
  console.log({ match });
  return (
    <>
      <Switch>
        {/* <Route exact path={`${match.url}/:channelId`} component={Chat} /> */}
        <Route path={`${match.url}`} component={HomePage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default Home;
