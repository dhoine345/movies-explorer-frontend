import './MoviesCard.css';
import { api } from '../../utils/MainApi';
import { baseUrl } from '../../utils/constants';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function MoviesCard({ moviescard, renderSavedMovies, favoriteMovies, id }) {
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
    setSavedStatus(favoriteMovies.some((movie) => {
      return movie.movieId === id
    }))
  }, [favoriteMovies, id])

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
      .then(() => renderSavedMovies())
  }

  const handleClick = () => {
    isSavedStatus ? removeFromFavorites() : putToFavorites();
  }

  const findMovieId = async () => {
    return favoriteMovies.find((movie) => {
      return movie.movieId === moviescard.id
    })
  }

  const removeFromFavorites = () => {
    location === '/saved-movies' ?
    api.removeMovie(moviescard._id)
      .then(() => renderSavedMovies())
    : findMovieId()
    .then((moviescard) => api.removeMovie(moviescard._id))
      .then(() => renderSavedMovies())
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
      />
    </article>
  )
}

export default MoviesCard;
