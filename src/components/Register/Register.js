import './Register.css'
import Form from '../Form/Form';
import { api } from '../../utils/MainApi';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Register({ isLoggedIn }) {
  const history = useNavigate();
  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = (email, password, name) => {
    api.register( email, password, name)
      .then(() => {
        api.login(email, password)
          .then((res) => {
            isLoggedIn(true);
            localStorage.setItem('jwt', res.token);
            history('/movies');
          })
      })
      .catch((err) => {
        if (err.includes('409')) {
          setErrorMessage('Указанный email уже занят')
        } else {
          setErrorMessage('Неверный формат E-mail')
        }
        setError(true)
      }
 )
  };

  return (
    <Form
      typeOfForm={'register'}
      text={'Уже зарегистрированы?'}
      linktext='Войти'
      path='/signin'
      buttontext='Зарегистрироваться'
      greeting='Добро пожаловать!'
      onRegister={handleRegister}
      isError={isError}
      errorMessage={errorMessage}
    />
  )
}

export default Register;
