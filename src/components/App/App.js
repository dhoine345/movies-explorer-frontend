import './App.css';
import React from 'react';
import { Switch, Route, useHistory } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch> 
        <Route exact path="/">
          <Main />
        </Route>
        <ProtectedRoute path="/movies">
          <Movies />
        </ProtectedRoute>
        <ProtectedRoute path="/saved-movies">
          <SavedMovies />
        </ProtectedRoute>
        <ProtectedRoute path="/profile">
          <Profile />
        </ProtectedRoute>
        <Route path="/signin">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Register />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

