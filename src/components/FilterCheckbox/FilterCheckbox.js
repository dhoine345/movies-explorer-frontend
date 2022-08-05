import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <fieldset className='checkbox'>
      <input className='checkbox__input' />
      <span className='checkbox-slider' />
      <span className='checkbox-text'>Короткометражки</span>
    </fieldset>
  )
}

export default FilterCheckbox;
