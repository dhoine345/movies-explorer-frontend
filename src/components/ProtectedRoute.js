import React from "react";
import { Route, Navigate } from "react-router-dom";


function ProtectedRoute({ loggedIn, children, ...props }) {
  return (
    <Route {...props}>
      {loggedIn ? children : <Navigate to="/" />}
    </Route>
  )
}

export default ProtectedRoute;
