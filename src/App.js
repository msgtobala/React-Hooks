import React, { useState } from 'react';
import { useForms } from './useForms';

const App = () => {
  const [values, handleChange] = useForms({ email: '', password: '' });
  return (
    <div>
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
    </div>
  );
};

export default App;
