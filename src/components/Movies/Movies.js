import './Movies.css';
import Header from '../Header/Header';

function Movies() {
  return (
    <>
      <Header loggedIn={true} />
      <section className='movies'>
        <form className='searchform'>
          <fieldset className='searchform__fieldset'>
            <div className='searchform__logo' />
            <input className='searchform__input' type='search' placeholder='Фильм'/>
            <button className='searchform__button' />
            <label className='searchform__checkbox-label' htmlFor='searchform-checkbox'>
              <input className='searchform__checkbox' type='chekbox' id='searchform-checkbox'/>
              <span className='searchform__checkbox-slider' />
              <span className='searchform__checkbox-text'>Короткометражки</span>
            </label>
          </fieldset>
        </form>
      </section>
    </>
  )
}

export default Movies;
