import './SavedMovies';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import { data } from '../../utils/constants';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {
  return (
    <>
    <Header loggedIn={true} isWhiteBack={true}/>
    <SearchForm />
    <section className='movies'>
      <MoviesCardList data={data} isSavedMovies={true}/>
    </section>
  </>
  )
}

export default SavedMovies;
