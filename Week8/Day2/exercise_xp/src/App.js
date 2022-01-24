import React from 'react';
import Car from './components/Car';
import Events from './components/Events'
const carinfo = {name: "Ford", model: "Mustang"};

function App() {
  return (
      <>
    <div>
      <Car carinfo={carinfo}/>
      <Events/>
      
    </div>
    </>
  );
}

export default App;
