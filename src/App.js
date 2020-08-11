import React from 'react';
import Nav from './components/Nav'
import Main from './components/Main'

function App() {
  return (
    <div className="outerWrap">
      <div className="App">
        <Nav />
        <Main />
      </div>
      <div className="musicPlayer">reproductor</div>
    </div>
  );
}

export default App;
