import './Login.css'
import Form from '../Form/Form';

function Login() {
  return (
    <Form
      typeOfForm={'login'}
      text={'Еще не зарегистрированы?'}
      linktext='Регистрация'
      path='/signup'
      buttontext='Войти'
    />
  )
}

export default Login;
