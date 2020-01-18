import React, { useState } from 'react';
import Hello from './Hello';

function App() {
  const [show, setShow] = useState(true);
  return (
    <div>
      {show ? <Hello /> : null}
      <br />
      <button onClick={() => setShow(value => !value)}>Show / Hide</button>
    </div>
  );
}

export default App;
