import './Movies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import { data } from '../../utils/constants';
import MoviesCard from '../MoviesCard/MoviesCard';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
  console.log(data.item1)
   return (
    <>
      <Header loggedIn={true} isWhiteBack={true}/>
      <SearchForm />
      <section className='movies'>
        <MoviesCardList data={data} />
      </section>
    </>
  )
}

export default Movies;
