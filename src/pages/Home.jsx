
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import MoviesData from '../../MoviesData';
import { useState,useEffect } from 'react';
import Footer from '../Footer';


function Home() {
  const [movies, setMovies] = useState([]);
  const [movieName, setSearch] = useState("crime");

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=${movieName}&apikey=2882003e`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.Search) {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [movieName]);

  return (
    <>
      <div className="container">
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand text-center" href='https://www.linkedin.com/in/kumar-kandugula/'><img src={logo} className='w-50' alt="logo"></img></a>
            <form className="d-flex " role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => { setSearch(e.target.value) }}
              ></input>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>

      <div className='looper' >
        {movies.map((movie) => (
          <Link to={`/movies/${movie.imdbID}`} key={movie.imdbID}>
            <MoviesData movie={movie} />
          </Link>
        ))}
      </div>
      <Footer />
    
    </>
  );
}

export default Home;