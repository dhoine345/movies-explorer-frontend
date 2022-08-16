import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <div className='searchform-container'>
      <form className='searchform'>
        <div className='searchform__element'>
          <div className='searchform__logo' />
          <input className='searchform__input' type='search' placeholder='Фильм'/>
          <button className='searchform__button link-hover' />
        </div>
          <FilterCheckbox />
      </form>
    </div>
  )
}

export default SearchForm;
