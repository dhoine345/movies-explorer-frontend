import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <form className='searchform'>
      <div className='searchform__logo' />
      <input className='searchform__input' type='search' placeholder='Фильм'/>
      <button className='searchform__button' />
      <FilterCheckbox />
    </form>
  )
}

export default SearchForm;
