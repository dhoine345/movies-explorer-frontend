import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ data, isSavedMovies }) {
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
            />
          )
        })
    }
    </section>
  )
}

export default MoviesCardList;
