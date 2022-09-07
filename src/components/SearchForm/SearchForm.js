import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { fiterArray } from '../../utils/utils';
import { useLocation } from 'react-router-dom';

function SearchForm({
  onLoading,
  allMovies,
  savedMovies,
  setserchedSavedMovies,
  setSuccess,
  isChecked,
  setChecekd,
  inputValue,
  setInputValue,
  setSearchFormValid,
  searchedMovies
}) {
  const location = useLocation().pathname;

  function showPreloader() {
    onLoading(true);
    setTimeout(async () => {
      onLoading(false);
    }, 1000);
  };

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleCheckBoxChange = () => {
    !isChecked ? setChecekd(true) : setChecekd(false);
    showPreloader();
    location === '/movies' && changeSearchFormValid();
    fiterArray((isChecked ? allMovies : searchedMovies) || savedMovies, inputValue, !isChecked)
    .then((res) => {
      location === '/movies' ? localStorage.setItem('serchedMovies', JSON.stringify(res))
      : setserchedSavedMovies(res)
      setSuccess(true);
      isChecked ? setChecekd(false) : setChecekd(true)
      location === '/movies' && localStorage.setItem('inputValue', JSON.stringify(inputValue));
    })
    .then(() => location === '/movies' && localStorage.setItem('isChecked', JSON.stringify(!isChecked)))
    .catch(() => setSuccess(false))
  };

  const changeSearchFormValid = () => {
    inputValue !== '' ? setSearchFormValid(true) : setSearchFormValid(false);
  }

  const handleSearchRequest = (e) => {
    e.preventDefault();
    showPreloader();
    changeSearchFormValid();
    fiterArray(allMovies || savedMovies, inputValue, isChecked)
      .then(res => {
        location === '/movies' ? localStorage.setItem('serchedMovies', JSON.stringify(res))
        : setserchedSavedMovies(res)
        setSuccess(true);
        localStorage.setItem('isChecked', JSON.stringify(isChecked));
        localStorage.setItem('inputValue', JSON.stringify(inputValue));
      })
      .catch(() => {
        setSuccess(false)
        location === '/movies' ? localStorage.setItem('serchedMovies', JSON.stringify([]))
        : setserchedSavedMovies([])
      }
      )
  };

  return (
    <div className='searchform-container'>
      <form className='searchform' onSubmit={handleSearchRequest}>
        <div className='searchform__element'>
          <div className='searchform__logo' />
          <input
            className='searchform__input'
            placeholder='Фильм'
            value={inputValue}
            onChange={handleInputChange}
          />
          <button className='searchform__button link-hover' type='submit'/>
        </div>
          <FilterCheckbox
            checked={isChecked}
            onChangeCheckBox={handleCheckBoxChange}
          />
      </form>
    </div>
  )
}

export default SearchForm;
