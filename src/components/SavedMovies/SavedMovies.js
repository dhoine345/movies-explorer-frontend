import './SavedMovies';
import { useEffect, useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function SavedMovies() {
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [serchedSavedMovies, setserchedSavedMovies] = useState([]);
  const [arrayOfSavedMovies, setArrayOfMovies] = useState([]);
  const [isSucces, setSuccess] = useState(true);
  const [isChecked, setChecekd] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isSearchValid, setSearchFormValid] = useState(true);

  useEffect(() => {
    setSavedMovies(JSON.parse(localStorage.getItem('savedMovies')));
  }, []);

  useEffect(() => {
    setArrayOfMovies(serchedSavedMovies.length > 0 ? serchedSavedMovies : savedMovies);
  }, [serchedSavedMovies, savedMovies]);

  return (
    <>
    <Header loggedIn={true} isWhiteBack={true}/>
    <SearchForm
        onLoading={setLoading}
        savedMovies={savedMovies}
        setserchedSavedMovies={setserchedSavedMovies}
        setSuccess={setSuccess}
        isChecked={isChecked}
        setChecekd={setChecekd}
        inputValue={inputValue}
        setInputValue={setInputValue}
        setSearchFormValid={setSearchFormValid}
      />
    <section className='movies'>
      <MoviesCardList
        savedMovies={savedMovies}
        arrayOfSavedMovies={arrayOfSavedMovies}
        setSavedMovies={setSavedMovies}
        isLoading={isLoading}
        serchedSavedMovies={serchedSavedMovies}
        isSucces={isSucces}
        isSearchValid={isSearchValid}
      />
    </section>
    <Footer />
  </>
  )
}

export default SavedMovies;
