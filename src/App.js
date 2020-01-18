import React, { useState, useEffect } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // componentDidMount
  useEffect(() => {
    console.log('render');
  }, []);

  return (
    <div>
      <input
        type="email"
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
    </div>
  );
}

export default App;
