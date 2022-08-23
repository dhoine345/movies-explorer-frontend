import './App.css';
import { useState } from "react";
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
      <Routes>
        <Route path='/' element={<Main loggedIn={loggedIn} />} />
        <Route path="/signup" element={<Register isLoggedIn={setLoggedIn} />} />
        <Route path="/signin" element={<Login />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/saved-movies' element={<SavedMovies />} />
        <Route path='/profile' element={<Profile loggedIn={loggedIn} />} />
        <Route path='/preloader' element={<Preloader />} />
      </Routes>
    </div>
  );
}

export default App;


