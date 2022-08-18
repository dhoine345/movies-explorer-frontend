import './Register.css'
import Form from '../Form/Form';

function Register() {
  return (
    <Form
      typeOfForm={'register'}
      text={'Уже зарегистрированы?'}
      linktext='Войти'
      path='/signin'
      buttontext='Зарегистрироваться'
      greeting='Добро пожаловать!'
    />
  )
}

export default Register;
