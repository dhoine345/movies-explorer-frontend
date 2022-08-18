import { useEffect, useRef } from 'react';
import './FilterCheckbox.css';

function FilterCheckbox({ checked, onChangeCheckBox }) {
  const checkBoxRef = useRef();

  useEffect(() => {
    console.log('ref', checkBoxRef.current.checked)
  }, [checked])


  return (
    <fieldset className='checkbox'>
      <label className='checkbox__label'>
        <input className='checkbox__input' type='checkbox' ref={checkBoxRef} checked={checked} onChange={onChangeCheckBox} />
        <span className='checkbox__slider'></span>
      </label>
      <span className='checkbox__text'>Короткометражки</span>
    </fieldset>
  )
}

export default FilterCheckbox;
