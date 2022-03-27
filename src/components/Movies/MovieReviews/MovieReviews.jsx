import { Outlet, useParams } from "react-router-dom";
import { APIKEY } from "../../HomePage/HomePage";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from './MovieReviews.module.css'
export default function MovieReviews() {
  const params = useParams();
  const movieId = params.movieId;

  const [movieReviews, setMovieReviews] = useState([]);
  useEffect(() => {
    async function FetchData() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${APIKEY}&language=en-US&`
        );
        
          setMovieReviews(response.data.results);
        
      } catch (error) {
        console.log(error);
      }
    }
    FetchData();
  }, []);
  return (
    <div>
      {movieReviews.length > 0 ? (
        <ul className={styles.movieReviews_list}>
          {movieReviews.map((e) => (
            <li key={e.id}>
              <div>
                <h4 className={styles.movieReviews_author}>Author: {e.author}</h4>
              </div>
              <div className={styles.movieReviews_content}>{e.content}</div>
            
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.movieReviews_noInfo}>Sorry, we have no info here!</p>
      )}

      <Outlet />
    </div>
  );
}
