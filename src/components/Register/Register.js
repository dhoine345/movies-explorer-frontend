import './Register.css'
import Form from '../Form/Form';
import { api } from '../../utils/MainApi';
import { useNavigate } from 'react-router-dom';

function Register({ isLoggedIn }) {
  const history = useNavigate();
  const handleRegister = (email, password, name) => {
    api.register( email, password, name)
      .then(() => {
        api.login(email, password)
          .then(() => {
            isLoggedIn(true);
            history('/movies');
          })
      })
  }

  return (
    <Form
      typeOfForm={'register'}
      text={'Уже зарегистрированы?'}
      linktext='Войти'
      path='/signin'
      buttontext='Зарегистрироваться'
      greeting='Добро пожаловать!'
      onRegister={handleRegister}
    />
  )
}

export default Register;
