import { useState, useEffect } from "react"

export const useFetch = (apiPath, queryTerm = "") => {

  const API_KEY = import.meta.env.VITE_API_KEY;

  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${API_KEY}&query=${queryTerm}`;

  const [data, setData] = useState([]);

  useEffect(() => {

    async function fetchMovies() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }
    fetchMovies();

  }, [url])



  return { data }
}



 


