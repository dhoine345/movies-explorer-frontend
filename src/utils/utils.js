import { getAllMovies } from './MoviesApi';
import { api } from './MainApi';

export const checkToken = (setLoggedIn, setCurrentUser) => {
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

export const getFromMoviesApi = () => {
  getAllMovies()
    .then(res => addToStorage(res, 'allMoviesArray'));
};

export const getSavedMovies = () => {
  api.getFavoriteMovies()
    .then(res => addToStorage(res.data, 'savedMovies'));
};

export const addToStorage = (itemToAdd, nameInStorage) => {
  localStorage.setItem(nameInStorage, JSON.stringify(itemToAdd));
};

/*export const getInfoFromStorage = (nameInStorage) => {
  JSON.parse(localStorage.getItem(nameInStorage));
};*/

export const fiterArray = async (array, itemToSearch, checBoxStatus) => {
  return array.filter((movie) => {
    return movie.nameRU.toLowerCase().includes(itemToSearch)
  }).filter((item) => {
    return (checBoxStatus ? (item.duration <= 40) : item)
  })
};

