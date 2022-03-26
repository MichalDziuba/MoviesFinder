import React from "react";
const axios = require("axios");

export default async function FetchData() {
const APIKEY = "7ac8d52cacafb4138b02b7a4e8b6c69d";
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${APIKEY}`)
        console.log(response.data.results)
        return response.data.results
    }
    catch (error) {
        console.log(error)
    } 
    
 }
