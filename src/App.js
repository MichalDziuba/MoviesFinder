import "./App.css";
import { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import axios from "axios";
// import Trending from "./components/Trendings/Trendings";
function App() {
 
  return (
    <div className="App">
    
      <NavLink
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
      <Outlet />
    </div>
  );
}

export default App;
