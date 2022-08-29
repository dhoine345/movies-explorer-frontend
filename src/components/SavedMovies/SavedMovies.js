import './SavedMovies';
import { useEffect, useState } from 'react';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Header from '../Header/Header';

function SavedMovies() {
  const [savedMovies, setSavedMovies] = useState([]);
  const [isButtonClicked, setButtonClicked] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setSavedMovies(JSON.parse(localStorage.getItem('savedMovies')));
  }, [isButtonClicked]);

  const test1 = () => {
    console.log('из хранилища', savedMovies)
    console.log('найденные', )
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
        //onLoading={setLoading}
        //searchedMovies={searchedMovies}
        savedMovies={savedMovies}
      />
    <section className='movies'>
      <MoviesCardList
        savedMovies={savedMovies}
        setSavedMovies={setSavedMovies}
        setButtonClicked={setButtonClicked}
      />
    </section>
  </>
  )
}

export default SavedMovies;
