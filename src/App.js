import React, { useState } from 'react';

function expensiveInitialState() {
  return 100;
}

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <input
        type="text"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
    </div>
  );
};

export default App;
