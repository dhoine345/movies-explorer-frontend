import './MoviesCard.css';
import { api } from '../../utils/MainApi';
import { baseUrl } from '../../utils/constants';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard({ moviescard,
  savedMovies,
  id,
  setSavedMovies,
  serchedSavedMovies,
  updateArrayOfMovies,
  updateArray
}) {
  const [isSavedStatus, setSavedStatus] = useState(false);
  const [styleOfButton, setStyleOfButton] = useState('');
  const location = useLocation().pathname;

  useEffect(() => {
    if (location === '/saved-movies') {
      setStyleOfButton('moviescard__delete-icon');
    } else if (!isSavedStatus) {
      setStyleOfButton('moviescard__favorites');
    } else if (isSavedStatus) {
      setStyleOfButton('moviescard__favorites moviescard__favorites_active');
    }
  }, [location, isSavedStatus]);


  const getDurationFromMins = (duration) => {
    const hours = Math.trunc(duration/60);
    const minutes = duration % 60;
    return hours + 'ч ' + minutes + 'м';
  };

  useEffect(() => {
    setSavedStatus(savedMovies.some((movie) => {
      return movie.movieId === id
    }))
  }, [savedMovies, id, location]);

  const pushToSaved = () => {
    api.addMovie({
      country: moviescard.country || 'none',
      description: moviescard.description,
      director: moviescard.director,
      duration: moviescard.duration,
      movieId: moviescard.id,
      image: baseUrl + moviescard.image.url,
      nameEN: moviescard.nameEN || 'none',
      nameRU: moviescard.nameRU,
      trailerLink: moviescard.trailerLink,
      year: moviescard.year,
      thumbnail: baseUrl + moviescard.image.formats.thumbnail.url
    })
      .then((res) => {
        setSavedMovies([...savedMovies, res.data]);
        localStorage.setItem('savedMovies', JSON.stringify([...savedMovies, res.data]));
      })
      .then(() => setSavedStatus(true))
  };

  const handleClick = () => isSavedStatus ? removeFromSaved() : pushToSaved();

  const spliceArr = async (arr, item) => {
    if (!arr) {
      return
    }
    return arr.splice(arr.indexOf(arr.find((movie) => movie.movieId === item.data.movieId)), 1);
  }

  const removeMovie = (item) => {
    const savedArr = savedMovies;
    const searchedArr = serchedSavedMovies;
    spliceArr(savedArr, item);
    spliceArr(searchedArr, item)
    .then(() => {
      setSavedMovies(savedArr);
      localStorage.setItem('savedMovies', JSON.stringify(savedArr));
      //updateArrayOfMovies(searchedArr);
      updateArray(searchedArr);
    })
    .then(() => {
      setSavedStatus(false);
    })
  };

  const removeFromSaved = () => {
    location === '/saved-movies' ?
    api.removeMovie(moviescard._id)
      .then((deletedMovie) => removeMovie(deletedMovie))
    : Promise.resolve(savedMovies.find((movie) => movie.movieId === moviescard.id)._id)
    .then((id) => api.removeMovie(id))
    .then((deletedMovie) => removeMovie(deletedMovie))
  }

  const test = () => {
    console.log('SavedStatus', isSavedStatus);
    console.log('savedMovies', savedMovies);
    console.log('moviescard', moviescard);
    console.log('serchedSavedMovies', serchedSavedMovies);
  }

  return (
    <article className='moviescard' >
      <div className='moviescard__top-container'>
        <div className='moviescard__text-container'>
          <h2 className='moviescard__title'>{moviescard.nameRU}</h2>
          <p className='moviescard__duration'>{getDurationFromMins(moviescard.duration)}</p>
        </div>
        <button
          className={`${styleOfButton} link-hover`}
          onClick={handleClick}
          type='button'
        />
      </div>
      <a className='moviescard__link' href={moviescard.trailerLink} target="_blank" rel="noreferrer">
        <img
          className='moviescard__image'
          src={location === '/saved-movies' ? moviescard.image : baseUrl + moviescard.image.url}
          alt={moviescard.nameRu}
          onClick={test}
        />
      </a>
    </article>
  )
}

export default MoviesCard;
