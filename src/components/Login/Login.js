import './Login.css'
import Form from '../Form/Form';
import { useNavigate } from 'react-router-dom';
import { api } from '../../utils/MainApi';
import { useState } from 'react';

function Login({ isLoggedIn }) {
  const history = useNavigate();
  const [isError, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [buttonActive, setButtonActive] = useState(false);

  const handleLogin = (email, password) => {
    setButtonActive(false);
    api.login(email, password)
      .then((res) => {
        if (res.token) {
          isLoggedIn(true);
          history('/movies');
          localStorage.setItem('jwt', res.token);
          localStorage.setItem('savedMovies', JSON.stringify([]));
        }
      })
      .catch((err) => {
        if (err.includes('401')) {
          setErrorMessage('Неверные имя пользователя или пароль')
          setError(true);
        } else if (err) {
          setErrorMessage('Что-то пошло не так');
          setError(true);
        }
      })
      .catch(() => {
        setErrorMessage('Что-то пошло не так');
        setError(true);
      })
      .finally(() => setButtonActive(true))
  };

  return (
    <Form
      typeOfForm={'login'}
      text={'Еще не зарегистрированы?'}
      linktext='Регистрация'
      path='/signup'
      buttontext='Войти'
      greeting='Рады видеть!'
      onLogin={handleLogin}
      isError={isError}
      errorMessage={errorMessage}
      buttonActive={buttonActive}
      setButtonActive={setButtonActive}
    />
  )
}

export default Login;
