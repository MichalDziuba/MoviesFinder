import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import axios from "axios";
import styles from './HomePage.module.css'
const APIKEY = "7ac8d52cacafb4138b02b7a4e8b6c69d";
export default function HomePage() {
 const [trendMovies, setTrendMovies] = useState([]);

 useEffect(() => {
  async function FetchData() {
   
   try {
     const response = await axios.get(
       `https://api.themoviedb.org/3/trending/movie/day?api_key=${APIKEY}&language=en-US`
     );
     setTrendMovies(response.data.results);
     
   } catch (error) {
     console.log(error);
   }
  }
   FetchData()
 }, []);
  

    return (
      <div className={styles.homepage_wrapper}>
        <h2 className={styles.title}>Trending Today!</h2>
        <ul className={styles.list}>
          {trendMovies.map((movie) => (
            <li key={movie.id} className={styles.list_item}>
              {" "}
              <Link
                className={styles.list_item_link}
                to={`/movies/${movie.id}`}
                key={movie.id}
              >
                {movie.original_title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  
}
export {APIKEY}