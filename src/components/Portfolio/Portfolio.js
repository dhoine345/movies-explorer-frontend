import './Portfolio.css'

function Portfolio() {
  return (
    <section className='portfolio'>
      <h2 className='portfolio__title'>Портфолио</h2>
      <ul className='portfolio__list'>
        <li className='portfolio__list-item link-hover'>
          <a className='porfolio__link' href='https://github.com/dhoine345/how-to-learn' target='_blank' rel='noreferrer'>
            Статичный сайт
            <div className='portfolio__arrow'>↗</div>
          </a>
        </li>
        <li className='portfolio__list-item link-hover'>
          <a className='porfolio__link' href='https://github.com/dhoine345/russian-travel' target='_blank' rel='noreferrer'>
            Адаптивный сайт
            <div className='portfolio__arrow'>↗</div>
          </a>
        </li>
        <li className='portfolio__list-item link-hover'>
          <a className='porfolio__link' href='https://github.com/dhoine345/react-mesto-api-full' target='_blank' rel='noreferrer'>
            Одностраничное приложение
            <div className='portfolio__arrow'>↗</div>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Portfolio;
