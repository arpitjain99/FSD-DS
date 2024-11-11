import React from 'react'
import './App.css'
const App = ({n1,n2,n3}) => {
  return (
    <div id="disp">
      <h1>Name: {n1}</h1>
      <h2>Email: {n2}</h2>
      <h2>College Name: {n3}</h2>
    </div>
  );
};

export default App