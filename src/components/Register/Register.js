import './Register.css'
import Form from '../Form/Form';
import { api } from '../../utils/MainApi';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Register({ isLoggedIn }) {
  const history = useNavigate();
  const [isError, setError] = useState(false);

  const handleRegister = (email, password, name) => {
    api.register( email, password, name)
      .then(() => {
        api.login(email, password)
          .then(() => {
            isLoggedIn(true);
            history('/movies');
          })
      })
      .catch(() => setError(true))
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
    />
  )
}

export default Register;
