import './Portfolio.css'

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__list-item'>
          <a className='porfolio__link' href='https://github.com/dhoine345/how-to-learn' target='_blank' rel='noreferrer'>Статичный сайт</a>
          <div className='portfolio__arrow' />
        </li>
        <li className='portfolio__list-item'>
          <a className='porfolio__link' href='https://github.com/dhoine345/russian-travel' target='_blank' rel='noreferrer'>Адаптивный сайт</a>
          <div className='portfolio__arrow' />
        </li>
        <li className='portfolio__list-item'>
          <a className='porfolio__link' href='https://github.com/dhoine345/react-mesto-api-full' target='_blank' rel='noreferrer'>Одностраничное приложение</a>
          <div className='portfolio__arrow' />
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;
