import './AboutMe.css'
import avatar from '../../images/avatar.jpg'

function AboutMe() {
  return (
    <section className='about-me'>
      <h2 className='section-title section-title_margin'>Студент</h2>
      <div className='about-me__container'>
        <article className='about-me__description'>
          <h3 className='about-me__description-title'>Иван</h3>
          <h4 className='about-me__description-subtitle'>Фронтенд-разработчик, 39 лет</h4>
          <p className='about-me__description-text'>Я родился и живу в Волгограде, закончил факультет государственного и муниципального управления ВАГС.
          У меня есть жена и двое детей: сын и дочь. Я хочу развиваться как Веб-разработчик. Год назад это стало моей мечтой и я воплощаю свою мечту в жизнь.
          Вижу жизнь как совокупность принятых решений и их последствий. Именно поэтому люблю программирование - все имеет причину и следствие, а в программировании
          это наиболее ярко проявляется. Получаю позитивные эмоции решая новые задачи. Сейчас учу TypeScript на ru.code-basics.com. Люблю готовить
          (не просто по рецептам, а что-то придумывать), видеоигры(правда времени на них немного), смотреть кино и сериалы с женой.</p>
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

