import './Form.css'
import { Link } from 'react-router-dom';

function Form({ typeOfForm, text, path, linktext, buttontext }) {
  return (
    <form className='form'>
      {typeOfForm === `register` &&
      <>
      <label className='form__label' htmlFor='name'>Имя</label>
      <input className='form__input' id='name' />
      </>
      }
      <label className='form__label' htmlFor='email'>E-mail</label>
      <input className='form__input' id='email'/>
      <label className='form__label' htmlFor='password'>Пароль</label>
      <input className='form__input' id='password'/>
      <button className='form__button'>{buttontext}</button>
      <p className='form__text'>{text}<Link className='form__link' to={path}>{linktext}</Link></p>
    </form>
  )
}

export default Form;
