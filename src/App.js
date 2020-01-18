import React, { useState } from 'react';

function expensiveInitialState() {
  return 100;
}

const App = () => {
  const [count, setCount] = useState(10);
  const [anotherCount, setAnotherCount] = useState(() =>
    expensiveInitialState()
  );
  const [{ objCount1, objCount2 }, setObjCounts] = useState({
    objCount1: 10,
    objCount2: 20
  });
  return (
    <div>
      {count}, {anotherCount}
      <br />
      <button onClick={() => setCount(count + 1)}>ADD</button>
      <button onClick={() => setAnotherCount(currentCount => currentCount - 1)}>
        SUBTRACT
      </button>
      <br />
      <p>Obj Count1: {objCount1} </p>
      <p>Obj Count2: {objCount2}</p>
      <button
        onClick={() =>
          setObjCounts(currentState => ({
            ...currentState,
            objCount1: currentState.objCount1 + 1
          }))
        }
      >
        + obj Count1
      </button>
      <button
        onClick={() =>
          setObjCounts(currentState => ({
            ...currentState,
            objCount2: currentState.objCount2 + 1
          }))
        }
      >
        + obj Count2
      </button>
      <button
        onClick={() => {
          setCount(c => c + 1);
          setAnotherCount(c => c + 1);
        }}
      >
        Change All
      </button>
    </div>
  );
};

export default App;