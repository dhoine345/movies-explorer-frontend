import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

function MoviesCardList({
  searchedMovies,
  isLoading,
  savedMovies,
  setSavedMovies,
  arrayOfSavedMovies,
  setSerchedSavedMovies,
  serchedSavedMovies,
  updateArrayOfMovies }) {
  const [arrayToRender, setArrayToRender] = useState([]);
  const [lengthOfArray, setlengthOfArray] = useState();
  const [countToAdd, setCountToAdd] = useState();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
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
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth))
  },);

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
        isLoading ? <Preloader />
        :
        <section className='moviescardlist'>
         {
           arrayToRender.map((moviescard) => {
             return (
               <MoviesCard
                 moviescard={moviescard}
                 key={moviescard.movieId || moviescard.id}
                 setSavedMovies={setSavedMovies}
                 savedMovies={savedMovies}
                 id={moviescard.movieId || moviescard.id}
                 setSerchedSavedMovies={setSerchedSavedMovies}
                 serchedSavedMovies={location === '/movies' ? '' : serchedSavedMovies}
                 updateArrayOfMovies={updateArrayOfMovies}
                 updateArray={updateArray}
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
    </>
  )
}

export default MoviesCardList;
