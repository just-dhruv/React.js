import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function getMovie() {
      try {
        const result = await fetch(`http://www.omdbapi.com/?apikey=59ab3691&i=${id}`);
        const data = await result.json();
        setMovie(data);
        // console.log(data);
      } catch (error) {
        console.log("Error during fetching : ", error);
      }
    }
    getMovie();
  }, [id])

  // USING Promise() functions
  // useEffect(() => {
  //   fetch(`http://www.omdbapi.com/?apikey=59ab3691&i=${id}`)
  //   .then(result => result.json())
  //   .then(data => {
  //     setMovie(data);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   })
  // }, [id])

  if (!movie) return <p className='loading'>Loading...</p>


  return (

    <div className="movie-detail">
      <img alt={movie.Title} src={movie.Poster} />
      <h2>{movie.Title}</h2>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>Released:</strong> {movie.Released}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
    </div>
  )
}

export default MovieDetail