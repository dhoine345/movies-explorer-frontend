import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <h2 className='footer__title footer-text'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className='footer__container'>
        <div className='footer__copyright footer-text'>&copy; 2022</div>
        <ul className='footer__list'>
          <li className='footer__list-item'><a className='footer__link footer-text link-hover' href='//practicum.yandex.ru/profile/web/' target='_blank' rel="noreferrer">Яндекс.Практикум</a></li>
          <li className='footer__list-item'><a className='footer__link footer-text link-hover' href='//facebook.com/dhoine345' target='_blank' rel="noreferrer">Facebook</a></li>
          <li className='footer__list-item'><a className='footer__link footer-text link-hover' href='//github.com/dhoine345' target='_blank' rel="noreferrer">Github</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
