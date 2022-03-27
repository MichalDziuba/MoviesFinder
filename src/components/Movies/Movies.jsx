import { useEffect, useState } from "react";
import { Outlet, useNavigate, useParams, Link } from "react-router-dom";
import { APIKEY } from "../HomePage/HomePage";
import axios from "axios";
export default function MoviesPage() {
    let navigate = useNavigate();
  let params = useParams();
  const [keyword, setKeyword] = useState();
  const [movies, setMovies] = useState();
  const searching = e => {
    e.preventDefault();
    const form = e.target;
    const input = document.querySelector("input").value;
    setKeyword(input)
    form.reset()  
  }
  useEffect(() => {
     async function FetchData() {
       try {
         const response = await axios.get(
           `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&language=en-US&page=1&include_adult=false&query=${keyword}`
         );
         setMovies(response.data.results);
       } catch (error) {
         console.log(error);
       }
     }
    FetchData();
    
  },[keyword])
  
if (!movies) {
  return <p>...Loading</p>;
}
  return (
    <div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go back
      </button>
      Movies!
      {!params.movieId && (
        <div>
          <form onSubmit={searching}>
            <input
              name="name"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search movie"
            />
            <button type="submit">Search</button>
          </form>
          <div>
            {!keyword  && (
              <p>Search something!</p>
            )}
            {keyword  && (
              <ul>
            {movies.map((movie) => (
              <li key={movie.id}>
                {" "}
                <Link to={`/movies/${movie.id}`} key={movie.id}>
                  {movie.original_title}
                </Link>
              </li>
            ))}
            </ul>

            )}
          
          </div>
        </div>
      )}
      {params.movieId && <Outlet />}
    </div>
  );
}
