import './MoviesCard.css';

function MoviesCard({ moviescard, isSavedMovies }) {
  function getDurationFromMins(duration) {
    const hours = Math.trunc(duration/60);
    const minutes = duration % 60;
    return hours + 'ч ' + minutes + 'м';
  };

  function addToFavorites(e) {
    console.log(e.target)
    e.target.classList.toggle('moviescard__favorites_active')
  }

  return (
    <article className='moviescard' >
      <div className='moviescard__top-container'>
        <div className='moviescard__text-container'>
          <h2 className='moviescard__title'>{moviescard.nameRu}</h2>
          <p className='moviescard__duration'>{getDurationFromMins(moviescard.duration)}</p>
        </div>
        <button className={`${isSavedMovies ? 'moviescard__delete-icon' : 'moviescard__favorites'} link-hover`} onClick={addToFavorites}/>
      </div>
      <img className='moviescard__image' src={moviescard.trailerLink} alt={moviescard.nameRu}/>
    </article>
  )
}

export default MoviesCard;
