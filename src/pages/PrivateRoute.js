import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

// children => <checkout /> & rest of props => values '/checkout'
const PrivateRoute = ({ children, ...rest }) => {
  // console.log(children)
  // console.log(rest);
  const { user } = useAuth0();

  return (
    <Route 
      {...rest} 
      render={() => { 
        return user ? children : <Redirect to='/'></Redirect>
      }}
    ></Route>
    )
}

export default PrivateRoute;
