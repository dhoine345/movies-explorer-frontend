import './SearchForm.css';
import { useState } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { fiterArray } from '../../utils/utils';

function SearchForm({ renderSerchedMovies, onLoading, searchedMovies, allMovies }) {
  const [inputValue, setInputValue] = useState('');
  const [isChecked, setChecekd] = useState(false);

  function showPreloader() {
    onLoading(true);
    setTimeout(async () => {
      onLoading(false);
    }, 1000);
  };

  const handleInputChange = (e) => setInputValue(e.target.value);

  const handleCheckBoxChange = () => !isChecked ? setChecekd(true) : setChecekd(false);

  const handleSearchRequest = (e) => {
    e.preventDefault();
    //renderSerchedMovies()
    showPreloader();
    fiterArray(allMovies, inputValue, isChecked)
      .then(res => localStorage.setItem('serchedMovies', JSON.stringify(res)))
  };

  return (
    <div className='searchform-container'>
      <form className='searchform' onSubmit={handleSearchRequest}>
        <div className='searchform__element'>
          <div className='searchform__logo' />
          <input className='searchform__input'  required placeholder='Фильм' value={inputValue} onChange={handleInputChange}/>
          <button className='searchform__button link-hover' type='submit'/>
        </div>
          <FilterCheckbox checked={isChecked} onChangeCheckBox={handleCheckBoxChange} />
      </form>
    </div>
  )
}

export default SearchForm;
