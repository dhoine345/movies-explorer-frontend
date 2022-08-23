import './Login.css'
import Form from '../Form/Form';
import { useNavigate } from 'react-router-dom';
import { api } from '../../utils/MainApi';

function Login({ isLoggedIn }) {
  const history = useNavigate();

  const handleLogin = (email, password) => {
    api.login(email, password)
      .then((res) => {
        if (res.token) {
          isLoggedIn(true);
          history('/movies');
          localStorage.setItem('jwt', res.token);
        }
      })
  }

  return (
    <Form
      typeOfForm={'login'}
      text={'Еще не зарегистрированы?'}
      linktext='Регистрация'
      path='/signup'
      buttontext='Войти'
      greeting='Рады видеть!'
      onLogin={handleLogin}
    />
  )
}

export default Login;
