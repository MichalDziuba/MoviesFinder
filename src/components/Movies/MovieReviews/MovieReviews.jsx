import { Outlet, useParams } from "react-router-dom";
import { APIKEY } from "../../HomePage/HomePage";
import axios from "axios";
import { useState, useEffect } from "react";

export default function MovieReviews() {
  const params = useParams();
  const movieId = params.movieId;
  console.log(movieId);
  const [movieReviews, setMovieReviews] = useState([]);
  useEffect(() => {
    async function FetchData() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${APIKEY}&language=en-US&`
        );
        console.log(response.data.results);
          setMovieReviews(response.data.results);
          console.log(movieReviews.length)
      } catch (error) {
        console.log(error);
      }
    }
    FetchData();
  }, []);
  return (
    <div>
      {movieReviews.length > 0 ? (
        <ul>
          {movieReviews.map((e) => (
            <li key={e.id}>
              <div>
                <h4>Author: {e.author}</h4>
              </div>
              <div>{e.content}</div>
              <p>Last edit: {e.updated_at}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry, we have no info here!</p>
      )}

      <Outlet />
    </div>
  );
}
