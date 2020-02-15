import React from "react";
import { Route, Switch } from "react-router-dom";

//Pages
import ListaMedicos from "./Medicos";

const routes = [
  {
    path: "/filhos",
    component: () => <h1>Filhos</h1>
  },
  {
    path: "/medicos",
    component: ListaMedicos
  },
  {
    path: "/perfil",
    component: () => <h1>Perfil</h1>
  }
];

export default function RouteApp() {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
