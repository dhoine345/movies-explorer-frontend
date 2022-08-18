import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <fieldset className='checkbox'>
      <label className='checkbox__label'>
        <input className='checkbox__input' type='checkbox' />
        <span className='checkbox__slider'></span>
      </label>
      <span className='checkbox__text'>Короткометражки</span>
    </fieldset>
  )
}

export default FilterCheckbox;
