import { Outlet, useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { APIKEY } from "../../HomePage/HomePage.jsx";
import axios from "axios";

export default function MoviesDetailsPage() {
  const [movieDetails, setMovieDetails] = useState();
  let params = useParams();
  useEffect(() => {
    async function FetchData() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${APIKEY}&language=en-US`
        );
        console.log(response.data);
        setMovieDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    FetchData();
  }, []);

  console.log(movieDetails);

  if (!movieDetails) {
    return <p>...loading</p>;
  }

  return (
    <div>
      Details
      <div>
        <h2>{movieDetails.original_title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
          alt="movie poster image"
        />
        <p>UserScore: {movieDetails.vote_average * 10}%</p>
      </div>
      <div>
        <h3>Overview</h3>
        <p>{movieDetails.overview}</p>
      </div>
      <div>
        <h3>Genres</h3>
        <ul>
          {movieDetails?.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Additional information</h3>
        <div>
          <Link to={`/movies/${params.movieId}/cast`}>Cast</Link>
          <Link to={`/movies/${params.movieId}/reviews`}>Reviews</Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
