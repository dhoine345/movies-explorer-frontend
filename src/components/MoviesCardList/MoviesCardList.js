import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { windowSize } from '../../utils/constants';
import { messages, arrayLength, numberToAdd } from '../../utils/constants'

function MoviesCardList({
  searchedMovies,
  isLoading,
  savedMovies,
  setSavedMovies,
  arrayOfSavedMovies,
  serchedSavedMovies,
  isSucces,
  isSearchValid
 }) {
  const [arrayToRender, setArrayToRender] = useState([]);
  const [lengthOfArray, setlengthOfArray] = useState();
  const [countToAdd, setCountToAdd] = useState();
  const windowWidth = window.innerWidth;
  const [isAddButton, setIsAddButton] = useState();
  const location = useLocation().pathname;

  useEffect(() => {
    setArrayToRender((location === '/movies' ? searchedMovies : arrayOfSavedMovies).slice(0, lengthOfArray))
  }, [searchedMovies, lengthOfArray, arrayOfSavedMovies, location]);

  useEffect(() => {
    arrayToRender.length === (location === '/movies' ? searchedMovies : arrayOfSavedMovies).length ? setIsAddButton(false) : setIsAddButton(true)
  }, [arrayToRender, searchedMovies, arrayOfSavedMovies, location]);

  const updateArray = (newArr) => setArrayToRender((location === '/movies' ? searchedMovies : arrayOfSavedMovies).slice(0, lengthOfArray));

  useEffect(() => (
    setNumberOfMovies(windowWidth)
  ), [windowWidth]);

  useEffect(() => {
    const setTimeOut = (e) => setTimeout(setNumberOfMovies(e), 3000);

    window.addEventListener('resize', (e) => setTimeOut(e.currentTarget.innerWidth));

    return window.removeEventListener('resize', (e) =>
      setTimeOut(e.currentTarget.innerWidth)
    );
  },);

  const setNumberOfMovies = (width) => {
    if (width > windowSize.large) {
      setlengthOfArray(arrayLength.large)
      setCountToAdd(numberToAdd.large)
    } else if (width > windowSize.small && width < windowSize.large) {
        setlengthOfArray(arrayLength.medium)
        setCountToAdd(numberToAdd.medium)
      } else if (width < windowSize.small) {
        setlengthOfArray(arrayLength.small)
        setCountToAdd(numberToAdd.small)
        }
  };

  const handleAddButton = () => setlengthOfArray(lengthOfArray + countToAdd);

  return (
    <>
      {
        isLoading ? <Preloader />
        :
        <section className='moviescardlist'>
         {isSearchValid ?
            (isSucces ?
              arrayToRender.map((moviescard) => {
                return (
                  <MoviesCard
                    moviescard={moviescard}
                    key={moviescard.movieId || moviescard.id}
                    setSavedMovies={setSavedMovies}
                    savedMovies={savedMovies}
                    id={moviescard.movieId || moviescard.id}
                    serchedSavedMovies={location === '/movies' ? '' : serchedSavedMovies}
                    updateArray={updateArray}
                  />
                )
              })
            : <p className='moviescardlist__not-found'>{messages.notFound}</p>)
          : <p className='moviescardlist__not-found'>{messages.missingWord}</p>
         }
       </section>
      }
      {isSearchValid && <button
        className={`moviescardlist__button link-hover ${!isAddButton && 'moviescardlist__button_disabled'}`}
        onClick={handleAddButton}
        type='button'
      >
        Ещё
      </button>}
    </>
  )
}

export default MoviesCardList;
