import React from "react";
import { Route, Redirect } from "react-router-dom";

//Task List:
//1. Complete PrivateRoute

/*
export default function PrivateRoute (props) {
  const {children, ...rest} = props;

  return (<Route { ...rest } render = { () => {
    if (localStorage.getItem("token")) {
      return children;
  } else {
      return <Redirect to="/login"/>;
  }
  }} />)
} 
*/


function PrivateRoute (props) {
  const {component: Component, ...rest} = props;

  // return (<Route { ...rest } render = { (props) => (localStorage.getItem("token")) ? <Component {...props}/> : <Redirect to="/login"/> } />);

  return (<Route { ...rest } render = { (props) => {
    if (localStorage.getItem("token")) {
      return <Component {...props}/>
  } else {
      return <Redirect to="/login"/>
  }
  }} />);
}

export default PrivateRoute;



