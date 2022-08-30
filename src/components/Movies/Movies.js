import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Movies() {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);
  const [isSucces, setSuccess] = useState(true);

  useEffect(() => {
    setAllMovies(JSON.parse(localStorage.getItem('allMoviesArray')));
    setSavedMovies(JSON.parse(localStorage.getItem('savedMovies')));
  }, []);

  const updateArrayOfMovies = () => {
    setAllMovies(JSON.parse(localStorage.getItem('allMoviesArray')));
    setSavedMovies(JSON.parse(localStorage.getItem('savedMovies')));
  };

  useEffect(() => {
    setSearchedMovies(JSON.parse(localStorage.getItem('serchedMovies')));
  }, [isLoading]);

  const test1 = () => {
    console.log('из хранилища', allMovies)
    console.log('найденные', searchedMovies)
    console.log('сохраненные', savedMovies)
  }

  return (
    <>
      <Header loggedIn={true} isWhiteBack={true}/>
      <button style={{width: 60, height: 60}} onClick={test1}>Данные из хранилища</button>
      <SearchForm
        onLoading={setLoading}
        allMovies={allMovies}
        setSuccess={setSuccess}
      />
      <section className='movies'>
        <MoviesCardList
          searchedMovies={searchedMovies}
          isLoading={isLoading}
          savedMovies={savedMovies}
          setSavedMovies={setSavedMovies}
          updateArrayOfMovies={updateArrayOfMovies}
          isSucces={isSucces}
        />
      </section>
      <Footer />
    </>
  )
}

export default Movies;
