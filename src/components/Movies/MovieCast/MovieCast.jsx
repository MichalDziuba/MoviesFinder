import { Outlet, useParams } from "react-router-dom";
import {APIKEY} from "../../HomePage/HomePage";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from './MovieCast.module.css'
export default function MovieCast() {
  const params = useParams();
  const movieId = params.movieId;
  
  const [movieCredits, setMovieCredits] = useState([]);
  useEffect(() => {
    async function FetchData() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${APIKEY}&language=en-US`
        );
      
        setMovieCredits(response.data.cast);
      } catch (error) {
        console.log(error);
      }
    }
    FetchData();
  }, [movieId]);

  return (
    <div>
      {movieCredits.length===0 && <p className={styles.movieCredits_noInfo}>Sorry, we have no info here!</p>}
      {movieCredits && (
        <ul className={styles.movieCredits_list}>
          {movieCredits.map((e) => {
            return (
              <li key={e.id}>
                <div className={styles.movieCredits_wrapper}>
                  {!e.profile_path ? (
                    <img
                      className={styles.movieCredits_image}
                      alt="no info"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
                    />
                  ) : (
                      <img
                        alt ='actor'
                      className={styles.movieCredits_image}
                      src={`https://image.tmdb.org/t/p/w500/${e.profile_path}`}
                    />
                  )}

                  {e.original_name}
                  <p>Character: {e.character}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <Outlet />
    </div>
  );
}
