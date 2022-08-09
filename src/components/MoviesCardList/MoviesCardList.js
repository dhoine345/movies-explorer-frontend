import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({ data }) {
  return (
    <section className='moviescardlist'>
      {
        data.map((moviescard) => {
          return (
            <MoviesCard
              moviescard={moviescard}
              key={moviescard._id}
            />
          )
        })
      }
    </section>
  )
}

export default MoviesCardList;
