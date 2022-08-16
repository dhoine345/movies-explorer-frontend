import './Form.css'
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { useEffect, useState } from 'react';

function Form({ typeOfForm, text, path, linktext, buttontext, greeting }) {
  const [inputErrorName, setInputErrorName] = useState('');
  const [inputErrorEmail, setInputErrorEmail] = useState('');
  const [inputErrorPassword, setInputErrorPassword] = useState('');
  const [inputNameValidity, setinputNameValidity] = useState(false);
  const [inputEmailValidity, setinputEmailValidity] = useState(false);
  const [inputPasswordValidity, setinputPasswordValidity] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);

  const validity = inputNameValidity && inputEmailValidity && inputPasswordValidity;

  const hadleInputNameError = (e) => {
    if (e.target.validity.valid) {
      setInputErrorName('')
      setinputNameValidity(true)
    } else {
      setInputErrorName(e.target.validationMessage)
      setinputNameValidity(false)
    }
  }

  const hadleInputEmailError = (e) => {
    if (e.target.validity.valid) {
      setInputErrorEmail('')
      setinputEmailValidity(true)
    } else {
      setInputErrorEmail(e.target.validationMessage)
      setinputEmailValidity(false)
    }
  }

  const hadleInputPasswordError = (e) => {
    if (e.target.validity.valid) {
      setInputErrorPassword('')
      setinputPasswordValidity(true)
    } else {
      setInputErrorPassword(e.target.validationMessage)
      setinputPasswordValidity(false)
    }
  }

  const changeValidity = () => {
    validity ? setButtonActive(true) : setButtonActive(false)
  }

  useEffect(() => {
    changeValidity();
  }, )

  return (
    <>
      <Header isAuthPage={true} loggedIn={false} greeting={greeting}/>
      <form className='form'>
        {typeOfForm === `register` &&
        <>
        <label className='form__label' htmlFor='name'>Имя</label>
        <input className='form__input' id='name' required minLength='2' maxLength='30' type='text' onChange={hadleInputNameError} />
        <span className='form__input-error'>{inputErrorName}</span>
        </>
        }
        <label className='form__label' htmlFor='email'>E-mail</label>
        <input className='form__input' id='email' required type='email' onChange={hadleInputEmailError} />
        <span className='form__input-error'>{inputErrorEmail}</span>
        <label className='form__label' htmlFor='password'>Пароль</label>
        <input className='form__input' id='password' required minLength='8' maxLength='30' type='password' onChange={hadleInputPasswordError} />
        <span className='form__input-error'>{inputErrorPassword}</span>
        <button className={`${buttonActive ? 'form__button link-hover' : 'form__button form__button_disabled'}`}>{buttontext}</button>
        <p className='form__text'>{text}<Link className='form__link' to={path}>{linktext}</Link></p>
      </form>
    </>

  )
}

export default Form;
