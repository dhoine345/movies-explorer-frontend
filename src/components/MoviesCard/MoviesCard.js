import './MoviesCard.css';

function MoviesCard({ moviescard }) {
  function getDurationFromMins(duration) {
    const hours = Math.trunc(duration/60);
    const minutes = duration % 60;
    return hours + ':' + minutes;
};
  return (
    <article className='moviescard'>
      <h2 className='moviescard__title'>{moviescard.nameRu}</h2>
      <p className='moviescard__duration'>{getDurationFromMins(moviescard.duration)}</p>
      <div className='moviescard__favorites' />
      <img className='moviescard__image' src={moviescard.trailerLink} alt={moviescard.nameRu}/>
    </article>
  )
}

export default MoviesCard;
