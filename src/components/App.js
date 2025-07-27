import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import About from './About';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Home />
        <About />
      </div>
    );
  }
}

export default App;