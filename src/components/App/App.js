import './App.css';
import { useState, useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import ProtectedRoute from "../ProtectedRoute";
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { getFromMoviesApi, getSavedMovies, checkToken } from '../../utils/utils';
import { api } from '../../utils/MainApi';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] =useState({});
  const history = useNavigate();
  const location = useLocation().pathname;


  useEffect(() => {
    let token = localStorage.getItem('jwt');
    if(token) {
      api.getUserInfo(token)
        .then(res => {
          setLoggedIn(true);
          setCurrentUser(res.data);
          history(location);
        })
        .catch(err => console.log(err.message));
    }
  },[loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      getFromMoviesApi();
      getSavedMovies(currentUser);
    }
  }, [loggedIn, currentUser]);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          <Route
            path='/'
            element={<Main loggedIn={loggedIn} />}
          />
          <Route
            path="/signup"
            element={<Register isLoggedIn={setLoggedIn} />}
          />
          <Route
            path="/signin"
            element={<Login isLoggedIn={setLoggedIn} />}
          />
          <Route
            path='*'
            element={<PageNotFound />}
          />
          <Route
            path='/movies'
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Movies />
              </ProtectedRoute>
            }
          />
          <Route
            path='/saved-movies'
            element={
            <ProtectedRoute loggedIn={loggedIn}>
              <SavedMovies />
            </ProtectedRoute>
            }
          />
          <Route
            path='/profile'
            element={
              <ProtectedRoute loggedIn={loggedIn}>
                <Profile
                  loggedIn={loggedIn}
                  isLoggedIn={setLoggedIn}
                  updateUser={setCurrentUser}
                />
              </ProtectedRoute>
            }
          />
        </Routes>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;


