import './App.css';
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import Preloader from '../Preloader/Preloader'
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { api } from '../../utils/MainApi';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] =useState({});


  useEffect(() => {
    checkToken();
  },[loggedIn]);

  const checkToken = () => {
    let token = localStorage.getItem('jwt');
    if(localStorage.getItem('jwt')) {
      api.getUserInfo(token)
        .then(res => {
          setLoggedIn(true);
          setCurrentUser(res.data)
        })
        .catch(err => console.log(err.message));
    }
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route path='/' element={<Main loggedIn={loggedIn} />} />
          <Route path="/signup" element={<Register isLoggedIn={setLoggedIn} />} />
          <Route path="/signin" element={<Login isLoggedIn={setLoggedIn} />} />
          <Route path='*' element={<PageNotFound />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/saved-movies' element={<SavedMovies />} />
          <Route path='/profile' element={<Profile loggedIn={loggedIn} isLoggedIn={setLoggedIn} updateUser={setCurrentUser} />} />
          <Route path='/preloader' element={<Preloader />} />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;


