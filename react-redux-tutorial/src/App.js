import React from 'react';
import TodosContainer from './containers/TodosContainer';
import CounterContainer from './containers/CounterContainer';

const App = () => {
  return (
    <div>
      {/* <Counter number={0} /> */}
      <CounterContainer />
      <hr />
      <TodosContainer />
    </div>
  );
};

export default App;
