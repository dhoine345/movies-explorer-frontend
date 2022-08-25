import './Login.css'
import Form from '../Form/Form';
import { useNavigate } from 'react-router-dom';
import { api } from '../../utils/MainApi';
import { useState } from 'react';

function Login({ isLoggedIn }) {
  const history = useNavigate();
  const [isError, setError] = useState(false);

  const handleLogin = (email, password) => {
    api.login(email, password)
      .then((res) => {
        if (res.token) {
          isLoggedIn(true);
          history('/movies');
          localStorage.setItem('jwt', res.token);
        }
      })
      .catch(() => setError(true))
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
    />
  )
}

export default Login;
