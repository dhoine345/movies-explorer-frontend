import { getAllMovies } from './MoviesApi';
import { api } from './MainApi';
import { lengthOfShortMovie } from './constants';

export const getFromMoviesApi = () => {
  getAllMovies()
    .then(res => localStorage.setItem('allMoviesArray', JSON.stringify(res)));
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

export const fiterArray = (array, itemToSearch, checBoxStatus) => {
  return new Promise((resolve, reject) => {
    const result = array.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(itemToSearch);
    }).filter((item) => {
      return (checBoxStatus ? (item.duration <= lengthOfShortMovie) : item);
    })
    if (result.length > 0) {
      resolve(result);
    } else {
      reject(new Error(result));
    }
  })
};

