import React, { useEffect } from 'react';

// componentDidMount
const Hello = () => {
  useEffect(() => {
    console.log('mounted');
    // componentWillUnmount
    return () => {
      console.log('unmounted');
    };
  }, []);

  return <div>Hello</div>;
};

export default Hello;
