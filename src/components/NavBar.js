import React from 'react';
import Links from './Links';

class NavBar extends React.Component {
  render() {
    return (
      <nav data-testid="nav" id="nav">
        <Links />
      </nav>
    );
  }
}

export default NavBar;