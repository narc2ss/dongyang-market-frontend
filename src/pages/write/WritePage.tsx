import React from "react";
import { Route, Switch } from "react-router-dom";
import WriteContainer from "containers/write/WriteContainer";
import EditContainer from "containers/write/EditContainer";

const WritePage = () => {
  return (
    <>
      <Switch>
        <Route exact path="/write" component={WriteContainer} />
        <Route exact path="/write/:id" component={EditContainer} />
      </Switch>
    </>
  );
};

export default WritePage;
