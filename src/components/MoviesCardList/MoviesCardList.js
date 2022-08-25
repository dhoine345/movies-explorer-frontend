import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import Footer from '../Footer/Footer';
import { getAllMovies } from '../../utils/MoviesApi';
import { api } from '../../utils/MainApi';

function MoviesCardList() {
  const [inputValue, setInputValue] = useState('');
  const [savedMovies, setSavedMovies] = useState([]);
  const [checked, setChecekd] = useState(false);
  const [moviesArray, setmoviesArray] = useState([]);
  const [arrayFromStorage, setArrayFromStorage] = useState([]);
  const [arrayToRender, setArrayToRender] = useState([]);
  const [lengthOfArray, setlengthOfArray] = useState();
  const [countToAdd, setCountToAdd] = useState();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isAddButton, setIsAddButton] = useState();
  const location = useLocation().pathname;

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleCheckBoxChange = () => !checked ? setChecekd(true) : setChecekd(false);

  const getSavedMovies = () => {
    api.getFavoriteMovies()
      .then(res => setSavedMovies(res.data))
  }

  useEffect(() => {
    Promise.all([getAllMovies(), api.getFavoriteMovies()])
      .then(([allMovies, savedMovies]) => {
        setmoviesArray(allMovies);
        setSavedMovies(savedMovies.data)
      })
  }, []);

  useEffect(() => {
    getInfoFromStorage();
  }, []);

  useEffect(() => {
    setArrayToRender((location === '/movies' ? arrayFromStorage : savedMovies).slice(0, lengthOfArray))
  }, [arrayFromStorage, lengthOfArray, savedMovies, location]);

  useEffect(() => {
    arrayToRender.length === (location === '/movies' ? arrayFromStorage : savedMovies).length ? setIsAddButton(false) : setIsAddButton(true)
  }, [arrayToRender, arrayFromStorage, savedMovies, location]);

  useEffect(() => (
    setNumberOfMovies(windowWidth)
  ), [windowWidth]);

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
  },);

  const filterArray = () => {
    localStorage.setItem('moviesArray', JSON.stringify(moviesArray.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(inputValue)
    }).filter((item) => {
      return (checked ? (item.duration <= 40) : item)
    })))
  };

  const pushToStorage = () => {
    filterArray();
    localStorage.setItem('isChecked', JSON.stringify(checked));
    localStorage.setItem('inputValue', JSON.stringify(inputValue));
  };

  const getInfoFromStorage = () => {
    setArrayFromStorage(JSON.parse(localStorage.getItem('moviesArray')));
    setChecekd(JSON.parse(localStorage.getItem('isChecked')));
    setInputValue(JSON.parse(localStorage.getItem('inputValue')));
  };

  const searchMovies = () => {
    pushToStorage();
    getInfoFromStorage();
    setInputValue('');
  };

  const setNumberOfMovies = (width) => {
    if (width > 950) {
      setlengthOfArray(12)
      setCountToAdd(3)
    } else if (width > 500 && width < 950) {
        setlengthOfArray(8)
        setCountToAdd(2)
      } else if (width < 500) {
        setlengthOfArray(5)
        setCountToAdd(1)
        }
  };

  const handleAddButton = () => setlengthOfArray(lengthOfArray + countToAdd);


  const test1 = () => {
    console.log('из хранилища', arrayFromStorage)
    console.log('первые 15', arrayToRender)
  }

  return (
    <>
      <Header loggedIn={true} isWhiteBack={true}/>
      <button style={{width: 60, height: 60}} onClick={test1}>Данные из хранилища</button>
      <SearchForm
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        renderSerchedMovies={searchMovies}
        checked={checked}
        onChangeCheckBox={handleCheckBoxChange}
      />
      <section className='moviescardlist'>
        {
          arrayToRender.map((moviescard) => {
            return (
              <MoviesCard
                moviescard={moviescard}
                key={location === '/saved-movies' ? moviescard.movieId : moviescard.id}
                renderSavedMovies={getSavedMovies}
                savedMovies={savedMovies}
                id={moviescard.movieId || moviescard.id}
              />
            )
          })
        }
        <button
          className={`moviescardlist__button link-hover ${!isAddButton && 'moviescardlist__button_disabled'}`}
          onClick={handleAddButton}
        >
          Ещё
        </button>
      </section>
      <Footer />
    </>
  )
}

export default MoviesCardList;
