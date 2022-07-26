import './AboutMe.css'
import avatar from '../../images/avatar.jpg'

function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='section-title section-title_margin'>Студент</h2>
      <div className='about-me__container'>
        <article className='about-me__description'>
          <h3 className='about-me__description-title'>Виталий</h3>
          <h4 className='about-me__description-subtitle'>Фронтенд-разработчик, 39 лет</h4>
          <p className='about-me__description-text'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку,
          а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься
          фриланс-заказами и ушёл с постоянной работы.</p>
          <ul className='about-me__description-links'>
            <li><a className='about-me__description-link' href='https://facebook.com/dhoine345' target='_blank' rel="noreferrer">Facebook</a></li>
            <li><a className='about-me__description-link' href='https://github.com/dhoine345' target='_blank' rel="noreferrer">Github</a></li>
          </ul>
        </article>
      <img className='about-me__foto' src={avatar} alt='Фото студента.'/>
      </div>

    </section>
  )
}

export default AboutMe;

/*Я родился и живу в Волгограде, закончил факультет государственного и муниципального управления ВАГС.
          У меня есть жена, сын дочь. Я люблю смотреть кино и сериалы, а ещё увлекаюсь кулинарией. Недавно начал кодить. С недавнего времени работаю в компании
          ГКУ СО "Советский центр социального обслуживания населения". После того, как пройду курс по веб-разработке, хочу устроиться найти работу в веб-разработке*/
