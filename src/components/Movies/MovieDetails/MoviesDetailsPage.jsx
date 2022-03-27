import { Outlet, useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { APIKEY } from "../../HomePage/HomePage.jsx";
import axios from "axios";
import styles from './MovieDetailsPage.module.css'
export default function MoviesDetailsPage() {
  const [movieDetails, setMovieDetails] = useState();
  let params = useParams();
  useEffect(() => {
    async function FetchData() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${APIKEY}&language=en-US`
        );
        
        setMovieDetails(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    FetchData();
  },[]);



  if (!movieDetails) {
    return <p>...loading</p>;
  }

  return (
    <div className={styles.movieDetails_wrapper}>
      <div>
        <h2>{movieDetails.original_title}</h2>
        <img
          className={styles.movieDetails_image}
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
          alt="movie poster "
        />
        <p className={styles.movieDetails_score}>
          UserScore: {movieDetails.vote_average * 10}%
        </p>
      </div>
      <div>
        <h3 className={styles.movieDetails_h3}>Overview</h3>
        <p className={styles.movieDetails_overview}>{movieDetails.overview}</p>
      </div>
      <div>
        <h3 className={styles.movieDetails_h3}>Genres</h3>
        <ul>
          {movieDetails?.genres.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className={styles.movieDetails_h3}>Additional information</h3>
        <div className={styles.movieDetails_wrapper_links}>
          <Link
            className={styles.movieDetails_link}
            to={`/movies/${params.movieId}/cast`}
          >
            Cast
          </Link>
          <Link
            className={styles.movieDetails_link}
            to={`/movies/${params.movieId}/reviews`}
          >
            Reviews
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
