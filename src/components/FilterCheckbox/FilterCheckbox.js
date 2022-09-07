import './FilterCheckbox.css';

function FilterCheckbox({ checked, onChangeCheckBox }) {
  return (
    <fieldset className='checkbox'>
      <label className='checkbox__label'>
        <input className='checkbox__input' type='checkbox' checked={checked} onChange={onChangeCheckBox} />
        <span className='checkbox__slider'></span>
      </label>
      <span className='checkbox__text'>Короткометражки</span>
    </fieldset>
  )
}

export default FilterCheckbox;
