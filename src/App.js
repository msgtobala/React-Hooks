import React, { useState } from 'react';

import { useFetch } from './useFetch';

function App() {
  const [url, setUrl] = useState(1);
  const { data, loading } = useFetch(`http://numbersapi.com/${url}/trivia`);
  const getData = e => {
    if (e.target.value) {
      setUrl(e.target.value);
    }
  };
  return (
    <div>
      <input
        type="email"
        value={url}
        onChange={e => getData(e)}
        style={{ display: 'block' }}
      />
      {loading ? <div>Data is Loading</div> : data}
    </div>
  );
}

export default App;
