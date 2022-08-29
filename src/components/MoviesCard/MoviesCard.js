import './MoviesCard.css';
import { api } from '../../utils/MainApi';
import { baseUrl } from '../../utils/constants';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard({ moviescard, savedMovies, id, setSavedMovies, setButtonClicked }) {
  const [isSavedStatus, setSavedStatus] = useState(false);
  const [styleOfButton, setStyleOfButton] = useState('');
  const location = useLocation().pathname;

  useEffect(() => {
    if (location === '/saved-movies') {
      setStyleOfButton('moviescard__delete-icon')
    } else if (!isSavedStatus) {
      setStyleOfButton('moviescard__favorites')
    } else if (isSavedStatus) {
    setStyleOfButton('moviescard__favorites moviescard__favorites_active')
    }
  }, [location, isSavedStatus])


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

  const putToFavorites = () => {
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
        setSavedMovies([...savedMovies, res.data])
        localStorage.setItem('savedMovies', JSON.stringify([...savedMovies, res.data]));
      })
      .then(() => setSavedStatus(true))
  }

  const handleClick = () => {
    isSavedStatus ? removeFromSaved() : putToFavorites();
  }

  const findMovieInStorage = async () => {
    return savedMovies.find((movie) => {
      return movie.movieId === moviescard.id
    })
  }

  const test = () => {
    console.log('SavedStatus', isSavedStatus);
    console.log('savedMovies', savedMovies);
    console.log('moviescard', moviescard.id);
  }

  const removeFromSaved = () => {
    const arr = savedMovies;
    //location === '/saved-movies' ?
    api.removeMovie(moviescard._id)
      .then((deletedMovie) => arr.splice(arr.indexOf(arr.find((movie) => movie.movieId === deletedMovie.data.movieId)), 1))
      .then(() => {
        setSavedMovies(arr);
        localStorage.setItem('savedMovies', JSON.stringify(arr));
      })
      .then(() => {
        setSavedStatus(false);
        setButtonClicked(moviescard);
      })
    /*: findMovieInStorage()
    .then((moviescard) => api.removeMovie(moviescard._id))
      .then(() => setSavedStatus(false))*/
  }

  return (
    <article className='moviescard' >
      <div className='moviescard__top-container'>
        <div className='moviescard__text-container'>
          <h2 className='moviescard__title'>{moviescard.nameRU}</h2>
          <p className='moviescard__duration'>{getDurationFromMins(moviescard.duration)}</p>
        </div>
        <button
          className={`${styleOfButton}
          link-hover`}
          onClick={handleClick}
        />
      </div>
      <img
        className='moviescard__image'
        src={location === '/saved-movies' ? moviescard.image : baseUrl + moviescard.image.url}
        alt={moviescard.nameRu}
        onClick={test}
      />
    </article>
  )
}

export default MoviesCard;
