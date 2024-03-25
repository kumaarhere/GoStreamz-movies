import React, {useState,useEffect } from 'react';
import { useParams ,Link} from 'react-router-dom';
import logo from './assets/logo.png';
import './App.css'
import Footer from './Footer';

const Moviesingle = () => {
    const [mve,setMve]= useState([]);
    const {imdbID} = useParams();
    const handleBack = () => {
      window.history.back(); 
    };

    useEffect(()=>{
      fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=2882003e`)
      .then((res)=>res.json())
      .then((data)=>setMve(data))
    },[imdbID])

   return(
    <>
    <div className='d-flex justify-content-between'>
      <div>
    <a className="navbar-brand text-center" href='https://www.linkedin.com/in/kumar-kandugula/'><img src={logo} className='w-50' alt="logo"></img></a>
    </div>
    <div>
    <Link to='/'><i className="fa-solid fa-bars text-dark  mt-5 mx-4"></i></Link>
    </div>
    </div>
    <button onClick={handleBack} className='btn bg-secondary pb-1 mt-1 mx-2'>
    <i className="fa-solid fa-left-long"></i>
    </button>
    <div className="card mb-3 p-1">
  <img src={mve.Poster} className="card-img-top mt-3 w-100 px-5 mx-2 poster" alt="..."></img>
  <div className="card-body">
    <h2 className="card-title text-center fw-bold">{mve.Title}<span className='ms-4 bg-success p- rounded text-white fw-600 ' >⭐{mve.imdbRating}</span></h2>
    <p className='text-center fw-600 '>{mve.Plot}</p>
    <div className='row'>
      <div className="col-4  mt-2 ">
        <p className='bg-secondary rounded p-2 text-white fw-bold text-center bg-light-lg text-dark-lg'>{mve.Year}</p>
      </div>
      <div className="col-8 text-center">
        <p className='fw-bold mt-2'>{mve.Genre}</p>
      </div>
    </div>
  </div>
  <div className='row'>
    <div className="col-6 play">
      <button className='btn btn-info p-2 ms-4 fw-bold play ms-lg-5 p-lg-3 '><i className="fa-solid fa-play  me-1"></i> Watch Now</button>
    </div>
    <div className="col-6 mt-lg-2">
    <button className='btn btn-dark  fw-bold text-center  later'>➕ Watch Later</button>
    </div>
  </div>
</div>
<Footer/>
    </>
   )
}

export default Moviesingle;
