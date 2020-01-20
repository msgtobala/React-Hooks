import React, { useState, useEffect } from 'react';

function App() {
  const [email, setEmail] = useState('');
  useEffect(() => {
    console.log('mount1');
  });
  useEffect(() => {
    console.log('mount2');
  });
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
