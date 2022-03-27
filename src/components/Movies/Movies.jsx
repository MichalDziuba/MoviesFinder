import { useEffect, useState } from "react";
import { Outlet, useParams, Link } from "react-router-dom";
import { APIKEY } from "../HomePage/HomePage";
import axios from "axios";
import Button from "../Button/Button_goBack";
import styles from '../HomePage/HomePage.module.css'
export default function MoviesPage() {

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
  return <p className={styles.movies_Loading}>...Loading</p>;
}
  return (
    <div>
      <Button />
      {!params.movieId && (
        <div>
          <form onSubmit={searching}
          className={styles.movies_form}>
            <input
              className={styles.movies_input}
              name="name"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search movie"
            />
            <button className={styles.movies_button} type="submit">Search</button>
          </form>
          <div>
            {!keyword && <p className={styles.movies_searchSomething}>Search something!</p>}
            {keyword && (
              <ul className={styles.list}>
                {movies.map((movie) => (
                  <li key={movie.id} className={styles.list_item}>
                    {" "}
                    <Link
                      to={`/movies/${movie.id}`}
                      key={movie.id}
                      className={styles.list_item_link}
                    >
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
