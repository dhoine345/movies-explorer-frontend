import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';

function Movies() {
  return (
    <>
      <Header loggedIn={true} />
      <section className='movies'>
        <SearchForm />
      </section>
    </>
  )
}

export default Movies;
