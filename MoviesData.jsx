export default function MoviesData(props) {
  
  return (
    <>
       <div className="carder mt-3">
       <img src={props.movie.Poster!=='N/A'?props.movie.Poster:"https://img.freepik.com/premium-vector/vector-image-picture-icon-flat-design_1039903-394.jpg"}
       className="card-img-top mt-2  p-2" alt="movie-poster"></img>
   </div>

   </>
  );
}

