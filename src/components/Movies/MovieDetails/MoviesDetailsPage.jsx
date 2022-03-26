import { Outlet, useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { APIKEY } from "../../HomePage/HomePage.jsx";
import axios from "axios";
export default function MoviesDetailsPage() {
const [movieDetails,setMovieDetails]=useState([])
 let params = useParams();
  useEffect(() => {

async function FetchData() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${APIKEY}&language=en-US`
    );
    console.log(response.data)
    setMovieDetails(response.data);
  } catch (error) {
    console.log(error);
  }
}
    FetchData();
  
  },[])

    return (
      <div>
        
        Details
        <div>
          <h2>{movieDetails.original_title}</h2>
          <p>UserScore: { movieDetails.vote_average*10}%</p>
       </div>
      
        <div>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>
        </div>
        <div>
          <h3>Genres</h3>
          <ul>
            {/* {movieDetails?.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))} */}
            {console.log(movieDetails)}
          </ul>
          
        </div>
        <Outlet />
      </div>
    );
}