import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import { data } from '../../utils/constants';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer'

function Movies() {
   return (
    <>
      <Header loggedIn={true} isWhiteBack={true}/>
      <SearchForm />
      <section className='movies'>
        <MoviesCardList data={data} isSavedMovies={false}/>
      </section>
      <Footer />
    </>
  )
}

export default Movies;
