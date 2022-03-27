import { Outlet, useParams } from "react-router-dom";
import { APIKEY } from "../../HomePage/HomePage";
import axios from "axios";
import { useState, useEffect } from "react";

export default function MovieCast() {
  const params = useParams();
  const movieId = params.movieId;
  console.log(movieId);
  const [movieCredits, setMovieCredits] = useState([]);
  useEffect(() => {
    async function FetchData() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${APIKEY}&language=en-US`
        );
        console.log(response.data);
        setMovieCredits(response.data.cast);
      } catch (error) {
        console.log(error);
      }
    }
    FetchData();
  }, []);

  return (
    <div>
      {movieCredits.length===0 && <p>Sorry, we have no info here!</p>}
      {movieCredits && (
        <ul>
          {movieCredits.map((e) => {
            return (
              <li key={e.id}>
                <div>
                  {!e.profile_path ? (
                    <img
                      style={{ width: "100px", height: "130px" }}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
                    />
                  ) : (
                    <img
                      style={{ width: "100px", height: "130px" }}
                      src={`https://image.tmdb.org/t/p/w500/${e.profile_path}`}
                    />
                  )}

                  {e.original_name}
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
