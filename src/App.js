import "./App.css";
import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import axios from "axios";
// import Trending from "./components/Trendings/Trendings";
function App() {
 
  return (
    <div className="App">
      <div className="Navigation">
        <NavLink
          className="Navigation_Link"
          style={({ isActive }) => {
            return {
              display: "block",
              morgin: "1rem 0",
              color: isActive ? "red" : "",
            };
          }}
          to={`/`}
        >
          Home
        </NavLink>
        <NavLink
          className="Navigation_Link"
          style={({ isActive }) => {
            return {
              display: "block",
              morgin: "1rem 0",
              color: isActive ? "red" : "",
            };
          }}
          to={`/movies`}
        >
          Movies
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
