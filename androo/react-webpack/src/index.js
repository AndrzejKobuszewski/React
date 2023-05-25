import React from "react";
import { createRoot } from "react-dom/client";
import VisitCardPage from "./VisitCardPage";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
//   <BrowserRouter>
//     <Switch>
//       <Route path="/">
        <VisitCardPage />
//       </Route>
//     </Switch>
//   </BrowserRouter> 
);
