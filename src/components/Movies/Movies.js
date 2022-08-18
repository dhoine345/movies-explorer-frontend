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
  const [filteredMoviesArray, setFilteredMoviesArray] = useState([]);
  const [checked, setChecekd] = useState(false);

  const handleCheckBoxChange = () => {
    !checked ? setChecekd(true) : setChecekd(false);
  }

  useEffect(() => {
    getAllMovies()
      .then(res => setmoviesArray(res))
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  };

  const filterArray = () => {
    setFilteredMoviesArray(moviesArray.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(inputValue)
    }).filter((item) => {
      return (checked ? (item.duration <= 40) : item)
    }))
  }

  const searchMovies = () => {
    if (!filteredMoviesArray.length) {
      filterArray();
    } else {
      filteredMoviesArray.length = 0;
      filterArray();
    }
    setInputValue('');
  };

  /*useEffect(() => {
    searcheMovies()
  },)*/

  console.log('moviesArray', moviesArray)
  console.log('filteredMoviesArray', filteredMoviesArray)

  return (
    <>
      <Header loggedIn={true} isWhiteBack={true}/>
      <SearchForm
        inputValue={inputValue}
        handleInputChange={handleInputChange}
        renderSerchedMovies={searchMovies}
        checked={checked}
        onChangeCheckBox={handleCheckBoxChange}
      />
      <section className='movies'>
        <MoviesCardList data={filteredMoviesArray} isSavedMovies={false}/>
      </section>
      <Footer />
    </>
  )
}

export default Movies;
