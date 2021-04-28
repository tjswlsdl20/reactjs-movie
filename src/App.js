import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './Movie';

function App() {
  let [star, starupdate] = useState(0);
  let [movie, movieUpdate] = useState([]);
  useEffect(() => {
    async function fetchData() {
      // You can await here
      const dada = await axios.get('https://yts-proxy.nomadcoders1.now.sh/list_movies.json');

      movieUpdate(dada.data.data.movies);

      // ...
    }
    fetchData();
  }, []);


  return (
    <div>
      <h1><span onClick={() => { starupdate(star + 1) }}>😁</span>{star}</h1>
      {movie.map(info => (
        <Movie key={info.id}
          id={info.id}
          year={info.year}
          title={info.title}
          summary={info.summary}
          poster={info.medium_cover_image} />
      ))}

    </div>
  );
}


export default App;
