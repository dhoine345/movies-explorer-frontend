import { Link } from 'react-router-dom';
import './PageNotFound.css'

function PageNotFound() {
  return (
    <section className='page-not-found'>
      <h2 className='page-not-found__title'>404</h2>
      <h3 className='page-not-found__subtitle'>Страница не найдена</h3>
      <Link className='page-not-found__link' to='/'>Назад</Link>
    </section>
  )
}

export default PageNotFound;
