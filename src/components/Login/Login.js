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
      greeting='Рады видеть!'
    />
  )
}

export default Login;
