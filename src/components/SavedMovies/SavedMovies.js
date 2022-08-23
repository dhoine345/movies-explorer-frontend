import './SavedMovies';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

function SavedMovies() {
  return (
    <>
    <Header loggedIn={true} isWhiteBack={true}/>
    <SearchForm />
    <section className='movies'>
      <MoviesCardList isSavedMovies={true}/>
    </section>
    <Footer />
  </>
  )
}

export default SavedMovies;
