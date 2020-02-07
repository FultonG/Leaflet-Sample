import React from 'react';
import './App.css';
import SimpleExample from './components/SimpleExample';

function App() {
  return (
    // We have to give a size for the container that will hold our map.
    // The CSS for the map is set up to take full width of it's container.
    <div style={{width: '100%', height: '100vh'}}>
      <SimpleExample />
    </div>
  );
}

export default App;
