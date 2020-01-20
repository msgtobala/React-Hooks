import React, { useState, useEffect } from 'react';

function App() {
  const [email, setEmail] = useState('');
  useEffect(() => {
    console.log('mounted / render');
    return () => {
      console.log('cleaned-up')
    }
  }, [email]);
  return (
    <div>
      <input
        value={email}
        type="email"
        onChange={e => setEmail(e.target.value)}
      />
    </div>
  );
}

export default App;
