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
};

export const getFromMoviesApi = () => {
  getAllMovies()
    .then(res => addToStorage(res, 'allMoviesArray'));
};

export const getSavedMovies = (currentUser) => {
  api.getFavoriteMovies()
    .then(res => {
      const savedMovies = res.data.filter(
        (movie) => movie.owner === currentUser._id
      );
      localStorage.setItem('savedMovies', JSON.stringify(savedMovies));
    });
};

export const addToStorage = (itemToAdd, nameInStorage) => {
  localStorage.setItem(nameInStorage, JSON.stringify(itemToAdd));
};

/*export const getInfoFromStorage = (nameInStorage) => {
  JSON.parse(localStorage.getItem(nameInStorage));
};*/

export const fiterArray = (array, itemToSearch, checBoxStatus) => {
  return new Promise((resolve, reject) => {
    const result = array.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(itemToSearch)
    }).filter((item) => {
      return (checBoxStatus ? (item.duration <= 40) : item)
    })
    if (result.length > 0) {
      resolve(result)
    } else {
      reject(new Error(result))
    }
  })
};

