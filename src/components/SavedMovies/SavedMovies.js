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

  useEffect(() => {
    setSavedMovies(JSON.parse(localStorage.getItem('savedMovies')));
  }, []);

  useEffect(() => {
    setArrayOfMovies(serchedSavedMovies.length > 0 ? serchedSavedMovies : savedMovies)
  }, [serchedSavedMovies, savedMovies]);

  const updateArrayOfSavedMovies = (newArr) =>{
    setSavedMovies(JSON.parse(localStorage.getItem('savedMovies')));
    setserchedSavedMovies(newArr);
  };

  const test1 = () => {
    console.log('из хранилища', savedMovies)
    console.log('найденные', serchedSavedMovies)
  }

  return (
    <>
    <Header loggedIn={true} isWhiteBack={true}/>
    <button style={{width: 60, height: 60}} onClick={test1}>Данные из хранилища</button>
    <SearchForm
        onLoading={setLoading}
        savedMovies={savedMovies}
        setserchedSavedMovies={setserchedSavedMovies}
      />
    <section className='movies'>
      <MoviesCardList
        savedMovies={savedMovies}
        arrayOfSavedMovies={arrayOfSavedMovies}
        setSavedMovies={setSavedMovies}
        isLoading={isLoading}
        setserchedSavedMovies={setserchedSavedMovies}
        serchedSavedMovies={serchedSavedMovies}
        updateArrayOfMovies={updateArrayOfSavedMovies}
      />
    </section>
    <Footer />
  </>
  )
}

export default SavedMovies;
