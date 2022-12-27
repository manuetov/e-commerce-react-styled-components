import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const PrivateRoute = ({ children }) => {
  // console.log(children)
  // console.log(rest);
  // if user doesn't exist 
  const { user } = useAuth0();
  if(!user){
    return <Navigate to='/'/>
  }
  // if user exist return children
  return children;
}

export default PrivateRoute;


{/* 
// children => <checkout /> & rest of props => values '/checkout'
const PrivateRoute = ({ children, ...rest }) => {
<Route 
{...rest} 
render={() => { 
  return user ? children : <Redirect to='/'></Redirect>
}}
></Route> */}