import React from "react";
import { Switch, Route } from "react-router-dom";
import { CatalogPage } from "./Components/Pages/Catalog";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/catalog">
        <CatalogPage message={"This is my message"} />
      </Route>
    </Switch>
  );
};
