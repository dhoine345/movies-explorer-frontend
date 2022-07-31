import './App.css';
import React from 'react';
import { Switch, Route, useHistory } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Footer from '../Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      {/*<Switch>
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
      </Switch>*/}
      <Footer />
    </div>
  );
}

export default App;

