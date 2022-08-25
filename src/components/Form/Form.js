import './Form.css'
import { Link, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import { useEffect, useState } from 'react';

function Form({ typeOfForm, text, path, linktext, buttontext, greeting, onRegister, onLogin, isError }) {
  const [inputErrorName, setInputErrorName] = useState('');
  const [inputErrorEmail, setInputErrorEmail] = useState('');
  const [inputErrorPassword, setInputErrorPassword] = useState('');
  const [inputNameValidity, setinputNameValidity] = useState(false);
  const [inputEmailValidity, setinputEmailValidity] = useState(false);
  const [inputPasswordValidity, setinputPasswordValidity] = useState(false);
  const [buttonActive, setButtonActive] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const location = useLocation();

  const validity = location === 'signup' ? inputNameValidity && inputEmailValidity && inputPasswordValidity : inputEmailValidity && inputPasswordValidity;

  useEffect(() => {
    validity ? setButtonActive(true) : setButtonActive(false);
  }, [validity]);

  const hadleInputNameChange = (e) => {
    setName(e.target.value)
    if (e.target.validity.valid) {
      setInputErrorName('')
      setinputNameValidity(true)
    } else {
      setInputErrorName(e.target.validationMessage)
      setinputNameValidity(false)
    }
  };

  const hadleInputEmailChange = (e) => {
    setEmail(e.target.value)
    if (e.target.validity.valid) {
      setInputErrorEmail('')
      setinputEmailValidity(true)
    } else {
      setInputErrorEmail(e.target.validationMessage)
      setinputEmailValidity(false)
    }
  };

  const hadleInputPasswordChange = (e) => {
    setPassword(e.target.value)
    if (e.target.validity.valid) {
      setInputErrorPassword('')
      setinputPasswordValidity(true)
    } else {
      setInputErrorPassword(e.target.validationMessage)
      setinputPasswordValidity(false)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (location === 'signup') {
      onRegister(email, password, name)
    }
    onLogin(email, password)
  };

  return (
    <>
      <Header isAuthPage={true} loggedIn={false} greeting={greeting}/>
      <form className='form' onSubmit={handleSubmit}>
        {typeOfForm === `register` &&
        <>
        <label className='form__label' htmlFor='name'>Имя</label>
        <input className='form__input' id='name' required minLength='2' maxLength='30' type='text' onChange={hadleInputNameChange} />
        <span className='form__input-error'>{inputErrorName}</span>
        </>
        }
        <label className='form__label' htmlFor='email'>E-mail</label>
        <input className='form__input' id='email' required type='email' onChange={hadleInputEmailChange} />
        <span className='form__input-error'>{inputErrorEmail}</span>
        <label className='form__label' htmlFor='password'>Пароль</label>
        <input className='form__input' id='password' required minLength='8' maxLength='30' type='password' onChange={hadleInputPasswordChange} />
        <span className='form__input-error'>{inputErrorPassword}</span>
        <p className={`form__error ${isError && 'form__error_active'}`}>Что-то пошло не так</p>
        <button type='submit' disabled={!validity} className={`${buttonActive ? 'form__button link-hover' : 'form__button form__button_disabled'}`}>{buttontext}</button>
        <p className='form__text'>{text}<Link className='form__link' to={path}>{linktext}</Link></p>
      </form>
    </>

  )
}

export default Form;
