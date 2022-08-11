import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import { data } from '../../utils/constants';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
   return (
    <>
      <Header loggedIn={true} isWhiteBack={true}/>
      <SearchForm />
      <section className='movies'>
        <MoviesCardList data={data} isSavedMovies={false}/>
      </section>
    </>
  )
}

export default Movies;
