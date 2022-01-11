import React from 'react';
import Counter from './compoments/Counter';
import DecreaseCounter from './compoments/DecreaseCounter';
import IncreaseByTwoCounter from './compoments/IncreaseByTwoCounter';
import IncreaseCounter from './compoments/IncreaseCounter';

function App() {
  return (
    <div>
      <Counter/>
      <IncreaseCounter></IncreaseCounter>
      <IncreaseByTwoCounter/>
      <DecreaseCounter/>
    </div>
  );
}

export default App;
