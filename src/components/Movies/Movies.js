import './Movies.css';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import { getInfoFromStorage } from '../../utils/utils';

function Movies() {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    setAllMovies(JSON.parse(localStorage.getItem('allMoviesArray')));
    setSavedMovies(JSON.parse(localStorage.getItem('savedMovies')));
  }, []);

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
        /*inputValue={inputValue}
        setInputValue={setInputValue}
        renderSerchedMovies={searchMovies}
        checked={isChecked}
        setChecekd={setChecekd}*/
        onLoading={setLoading}
        searchedMovies={searchedMovies}
        allMovies={allMovies}
      />
      <section className='movies'>
        <MoviesCardList
          searchedMovies={searchedMovies}
          isLoading={isLoading}
          savedMovies={savedMovies}
          setSavedMovies={setSavedMovies}
        />
      </section>
    </>
  )
}

export default Movies;
