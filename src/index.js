import {React,lazy,Suspense} from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

const HomePage = lazy(() =>
  import(
    "./components/HomePage/HomePage.jsx" /* webpackChunkName: "home-page" */
  )
);
const MoviesPage = lazy(() =>
  import("./components/Movies/Movies.jsx" /* webpackChunkName: "movie-page" */)
);
const MoviesDetailsPage = lazy(() =>
  import(
    "./components/Movies/MovieDetails/MoviesDetailsPage.jsx" /* webpackChunkName: "movie-details-page" */
  )
);
const MovieCast = lazy(() =>
  import(
    "./components/Movies/MovieCast/MovieCast.jsx" /* webpackChunkName: "movie-cast" */
  )
);
const MovieReviews = lazy(() =>
  import(
    "./components/Movies/MovieReviews/MovieReviews.jsx" /* webpackChunkName: "movie-reviews" */
  )
);

ReactDOM.render(
  // <React.StrictMode>
    <HashRouter>
      <Suspense fallback='Please wait a second'>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />

            <Route path="movies" element={<MoviesPage />}>
              <Route path=":movieId" element={<MoviesDetailsPage />}>
                <Route path="cast" element={<MovieCast />} />
                <Route path="reviews" element={<MovieReviews />} />
              </Route>
            </Route>

            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  // </React.StrictMode>
  ,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
