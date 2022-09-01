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
  const [isChecked, setChecekd] = useState(JSON.parse(localStorage.getItem('isChecked')) || false);
  const [inputValue, setInputValue] = useState(JSON.parse(localStorage.getItem('inputValue')) || '');

  useEffect(() => {
    setAllMovies(JSON.parse(localStorage.getItem('allMoviesArray')));
    setSavedMovies(JSON.parse(localStorage.getItem('savedMovies')));
  }, []);

  const updateArrayOfMovies = () => {
    setAllMovies(JSON.parse(localStorage.getItem('allMoviesArray')));
    setSavedMovies(JSON.parse(localStorage.getItem('savedMovies')));
  };

  useEffect(() => {
    setSearchedMovies(JSON.parse(localStorage.getItem('serchedMovies')) || []);
  }, [isLoading]);

  return (
    <>
      <Header loggedIn={true} isWhiteBack={true}/>
      <SearchForm
        onLoading={setLoading}
        allMovies={allMovies}
        setSuccess={setSuccess}
        isChecked={isChecked}
        setChecekd={setChecekd}
        inputValue={inputValue}
        setInputValue={setInputValue}
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
