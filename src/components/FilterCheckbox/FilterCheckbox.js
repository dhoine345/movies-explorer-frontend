import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <div className='checkbox'>
      <label className='checkbox__label'>
        <input className='checkbox__input' type='checkbox' />
        <span className='checkbox-slider'></span>
        {/*<span className='checkbox-text'>Короткометражки</span>*/}
      </label>
    </div>
  )
}

export default FilterCheckbox;
