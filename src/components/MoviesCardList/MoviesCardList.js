import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { getFromMoviesApi, getSavedMovies } from '../../utils/utils';

function MoviesCardList({ searchedMovies, isLoading, savedMovies, setSavedMovies, setButtonClicked }) {
  const [inputValue, setInputValue] = useState('');
  //const [savedMovies, setSavedMovies] = useState([]);
  const [isChecked, setChecekd] = useState(false);
  const [allMoviesArray, setAllMoviesArray] = useState([]);
  const [arrayFromStorage, setArrayFromStorage] = useState([]);
  const [arrayToRender, setArrayToRender] = useState([]);
  const [lengthOfArray, setlengthOfArray] = useState();
  const [countToAdd, setCountToAdd] = useState();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isAddButton, setIsAddButton] = useState();
  //const [isLoading, setLoading] = useState(false);
  const location = useLocation().pathname;

  /*const getSavedMovies = () => {
    api.getFavoriteMovies()
      .then(res => setSavedMovies(res.data))
  };*/

  /*useEffect(() => {
    Promise.all([getFromMoviesApi(), getSavedMovies()])
      .then(([allMovies, savedMovies]) => {
        setAllMoviesArray(allMovies);
        setSavedMovies(savedMovies.data)
      })
  }, []);*/

  /*useEffect(() => {
    getFromMoviesApi(setAllMoviesArray);
    getSavedMovies(setSavedMovies);
  }, [])*/

  useEffect(() => {
    getInfoFromStorage();
  }, []);

  /*useEffect(() => {
    setArrayToRender((location === '/movies' ? arrayFromStorage : savedMovies).slice(0, lengthOfArray))
  }, [arrayFromStorage, lengthOfArray, savedMovies, location]);

  useEffect(() => {
    arrayToRender.length === (location === '/movies' ? arrayFromStorage : savedMovies).length ? setIsAddButton(false) : setIsAddButton(true)
  }, [arrayToRender, arrayFromStorage, savedMovies, location]);*/

  useEffect(() => (
    setNumberOfMovies(windowWidth)
  ), [windowWidth]);

  useEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
  },);

  const filterArray = () => {
    localStorage.setItem('moviesArray', JSON.stringify(allMoviesArray.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(inputValue)
    }).filter((item) => {
      return (isChecked ? (item.duration <= 40) : item)
    })))
  };

  const pushToStorage = () => {
    filterArray();
    localStorage.setItem('isChecked', JSON.stringify(isChecked));
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

  return (
    <>
      {
        location === '/movies' ? isLoading ? <Preloader />
        :
        <section className='moviescardlist'>
         {searchedMovies &&
           searchedMovies.map((moviescard) => {
             return (
               <MoviesCard
                 moviescard={moviescard}
                 key={location === '/saved-movies' ? moviescard.movieId : moviescard.id}
                 setSavedMovies={setSavedMovies}
                 savedMovies={savedMovies}
                 id={moviescard.id}
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
       : <section className='moviescardlist'>
       {savedMovies &&
         savedMovies.map((moviescard) => {
           return (
             <MoviesCard
               moviescard={moviescard}
               key={location === '/saved-movies' ? moviescard.movieId : moviescard.id}
               setSavedMovies={setSavedMovies}
               id={moviescard.movieId}
               savedMovies={savedMovies}
               setButtonClicked={setButtonClicked}
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
      }

      <Footer />
    </>
  )
}

export default MoviesCardList;
