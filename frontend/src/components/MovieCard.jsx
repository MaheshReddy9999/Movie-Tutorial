import "../css/MovieCard.css"

function MovieCard({movie}){

  return(
     <div className="movie-card">
            <img src={`/images/${movie.image}`} alt={movie.title}/>
            <div className="movie-img"></div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
    </div>
    </div>
  );
}

export default MovieCard;