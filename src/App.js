import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";

function App() {

  let [movie, movieUpdate] = useState([]);
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const dada = await axios.get('https://yts-proxy.nomadcoders1.now.sh/list_movies.json');

      movieUpdate([...dada.data.data.movies]);

      // ...
    }
    fetchData();
  }, []);

  return (
    <div>
      <section class="container">
        <div className="movies">
          {movie.map(info => (
            <Movie key={info.id}
              id={info.id}
              year={info.year}
              title={info.title}
              summary={info.summary}
              poster={info.medium_cover_image}
              genres={info.genres} />
          ))}
        </div>
      </section>
    </div >
  );
}


export default App;
