import { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import axios from "axios";
const APIKEY = "7ac8d52cacafb4138b02b7a4e8b6c69d";
export default function HomePage() {
 const [trendMovies, setTrendMovies] = useState([]);

 useEffect(() => {
  async function FetchData() {
   
   try {
     const response = await axios.get(
       `https://api.themoviedb.org/3/trending/movie/day?api_key=${APIKEY}`
     );
     setTrendMovies(response.data.results);
     
   } catch (error) {
     console.log(error);
   }
  }
   FetchData()
   console.log(trendMovies);
 }, []);
  

    return (
      <div>
        <h2>Trending Today!</h2>
        <ul>
          {trendMovies.map((movie) => (
         <li key={movie.id}>  <Link
              to={`/movies/${movie.id}`}
              key={movie.id}>
              {movie.original_title}
            </Link></li> 
            
           
          ))}
        </ul>
      </div>
  );
  
}
export {APIKEY}