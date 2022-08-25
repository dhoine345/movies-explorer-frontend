import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { api } from '../../utils/MainApi';

function MoviesCardList({ data, handlerAddButton, isAddButton }) {
  const [savedMovies, setSavedMovies] = useState([]);
  const location = useLocation().pathname;

  const getSavedMovies = () => {
    api.getFavoriteMovies()
      .then(res => setSavedMovies(res.data))
  }

  useEffect(() => {
    getSavedMovies();
  }, []);

  return (
    <section className='moviescardlist'>
      {
        (data || savedMovies).map((moviescard) => {
          return (
            <MoviesCard
              moviescard={moviescard}
              key={location === '/saved-movies' ? moviescard.movieId : moviescard.id}
              renderSavedMovies={getSavedMovies}
              savedMovies={savedMovies}
              id={moviescard.movieId || moviescard.id}
            />
          )
        })
      }
      <button
        className={`moviescardlist__button link-hover ${!isAddButton && 'moviescardlist__button_disabled'}`}
        onClick={handlerAddButton}
      >
        Ещё
      </button>
    </section>
  )
}

export default MoviesCardList;
