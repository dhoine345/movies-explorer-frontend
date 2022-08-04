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
    />
  )
}

export default Register;
