import React from 'react';
import App from "./pages/App";
import Details from "./pages/Details";
import {Route, Routes} from "react-router-dom";

export const MAIN_ROUTE = 'MAIN_ROUTE'
export const PEOPLE_DETAILS_ROUTE = 'PEOPLE_DETAILS_ROUTE'

const routes = [
  {
    id: MAIN_ROUTE,
    path: '/',
    Component: App
  },
  {
    id: PEOPLE_DETAILS_ROUTE,
    path: '/people/:id',
    Component: Details
  },
]

export const getRouteConfig = id => {
  const route = routes.find(route => route.id === id)

  if (route) {
    const {Component, ...rest} = route

    return rest
  }
}

const Routers = () => {
  return (
    <Routes>
      {
        routes.map(({id, path, Component}) => {
          return (
            <Route key={id} path={path} element={<Component/>}/>
          )
        })
      }
    </Routes>
  );
};

export default Routers;