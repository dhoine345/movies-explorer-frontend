import './Movies.css';
import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { getAllMovies } from '../../utils/MoviesApi';

function Movies() {
  const [inputValue, setInputValue] = useState('');
  const [moviesArray, setmoviesArray] = useState([]);
  const [checked, setChecekd] = useState(false);
  const [lengthOfArray, setlengthOfArray] = useState();
  const [countToAdd, setCountToAdd] = useState();
  const [arrayFromStorage, setArrayFromStorage] = useState([]);
  const [arrayToRender, setArrayToRender] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isAddButton, setIsAddButton] = useState();

  useEffect(() => {
    getAllMovies()
      .then(res => setmoviesArray(res))
  }, []);

  useEffect(() => {
    getInfoFromStorage();
  }, []);

  useEffect(() => (
    setNumberOfMovies(windowWidth)
  ), [windowWidth]);

  useEffect(() => {
    setArrayToRender(arrayFromStorage.slice(0, lengthOfArray))
  }, [arrayFromStorage, lengthOfArray]);

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
  },);

  useEffect(() => {
    arrayToRender.length === arrayFromStorage.length ? setIsAddButton(false) : setIsAddButton(true)
  }, [arrayToRender, arrayFromStorage])

  const handleInputChange = (e) => setInputValue(e.target.value);
  const handleCheckBoxChange = () => !checked ? setChecekd(true) : setChecekd(false);

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
      <section className='movies'>
        <MoviesCardList
          data={arrayToRender}
          handlerAddButton={handleAddButton}
          isAddButton={isAddButton}
        />
      </section>
      <Footer />
    </>
  )
}

export default Movies;
