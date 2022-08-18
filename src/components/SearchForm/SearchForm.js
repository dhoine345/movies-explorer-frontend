import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ inputValue, handleInputChange, renderSerchedMovies, checked, onChangeCheckBox }) {
  const handleSearchRequest = (e) => {
    e.preventDefault();
    renderSerchedMovies();
  };

  return (
    <div className='searchform-container'>
      <form className='searchform' onSubmit={handleSearchRequest}>
        <div className='searchform__element'>
          <div className='searchform__logo' />
          <input className='searchform__input'  placeholder='Фильм' value={inputValue} onChange={handleInputChange}/>
          <button className='searchform__button link-hover' type='submit'/>
        </div>
          <FilterCheckbox checked={checked} onChangeCheckBox={onChangeCheckBox} />
      </form>
    </div>
  )
}

export default SearchForm;
