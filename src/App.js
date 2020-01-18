import React, { useState, useEffect } from 'react';

function App() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    console.log('render');
  });

  return (
    <div>
      <input
        type="email"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
    </div>
  );
}

export default App;
