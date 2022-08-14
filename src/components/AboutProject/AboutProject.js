import './AboutProject.css'

function AboutProject() {
  return (
    <section className='project'>
      <h2 className='section-title section-title_margin'>О проекте</h2>
      <ul className='project__description'>
        <li className='project__article'>
          <h3 className='project__article-title'>Дипломный проект включал 5 этапов</h3>
          <p className='project__article-text'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className='project__article'>
          <h3 className='project__article-title'>На выполнение диплома ушло 5 недель</h3>
          <p className='project__article-text'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <ul className='project__table'>
        <li className='project__table-cell project__table-cell_top-left'>1 неделя</li>
        <li className='project__table-cell project__table-cell_top-right'>4 недели</li>
        <li className='project__table-cell project__table-cell_bottom'>Back-end</li>
        <li className='project__table-cell project__table-cell_bottom'>Front-end</li>
      </ul>
    </section>
  )
}

export default AboutProject;
