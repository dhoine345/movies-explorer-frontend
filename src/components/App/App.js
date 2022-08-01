import './App.css';
import { useState, useEffect } from "react";
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
  const [loggedIn, setLoggedIn] = useState(false);

  /*useEffect(() => {
    checkToken();
  },[]);

  const checkToken = () => {
    let token = localStorage.getItem('jwt');
    if(localStorage.getItem('jwt')) {
      getContent(token)
        .then(res => {
          setEmail(res.data.email);
          setLoggedIn(true);
          history.push('/');
        })
        .catch(err => console.log(err.message));
    }
  }*/

  return (
    <div className="page">
      <Header loggedIn={loggedIn} />
      <Main />
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

