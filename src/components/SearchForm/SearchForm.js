import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({ inputValue, handleInputChange, renderSerchedMovies, checked, onChangeCheckBox, onLoading }) {
  function showPreloader() {
    onLoading(true);
    setTimeout(async () => {
      onLoading(false);
    }, 1000);
}

  const handleSearchRequest = (e) => {
    e.preventDefault();
    renderSerchedMovies()
    showPreloader();
  };

  return (
    <div className='searchform-container'>
      <form className='searchform' onSubmit={handleSearchRequest}>
        <div className='searchform__element'>
          <div className='searchform__logo' />
          <input className='searchform__input'  required placeholder='Фильм' value={inputValue} onChange={handleInputChange}/>
          <button className='searchform__button link-hover' type='submit'/>
        </div>
          <FilterCheckbox checked={checked} onChangeCheckBox={onChangeCheckBox} />
      </form>
    </div>
  )
}

export default SearchForm;
