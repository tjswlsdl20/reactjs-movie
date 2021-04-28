import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Food(pp) {
  return (
    <div>
      <h1>{pp.name}</h1>
      <img sec={pp.shasin} alt='some value' />
    </div>
  );
}






function App() {
  useEffect(async () => {
    const dada = await axios.get('https://yts-proxy.nomadcoders1.now.sh/list_movies.json');
    console.log(dada);
  });
  let [star, starupdate] = useState(0);
  return (
    <div>
      <h1><span onClick={() => { starupdate(star + 1) }}>😁</span>{star}</h1>
      {foodILike.map(dish =>

        <Food name={dish.name} shasin={dish.image} />

      )}
    </div>
  );
}


export default App;
