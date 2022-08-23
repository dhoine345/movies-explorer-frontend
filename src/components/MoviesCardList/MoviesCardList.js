import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ data, isSavedMovies, handlerAddButton, isAddButton }) {
  return (
    <section className='moviescardlist'>
      {!isSavedMovies ?
        data.map((moviescard) => {
          return (
            <MoviesCard
              moviescard={moviescard}
              key={moviescard.id}
            />
          )
        })
      :
        data.filter((moviescard) => {
          return (
            moviescard.favorite === true
          )
        }).map((moviescard) => {
          return (
            <MoviesCard
              moviescard={moviescard}
              key={moviescard.id}
              isSavedMovies={isSavedMovies}
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
