import React from 'react';

class Home extends React.Component {
  render() {
    const { name = 'Liza', city = 'New York', color } = this.props;
    const style = color ? { color } : {};
    
    return (
      <div id="home" data-testid="home">
        <h1 style={style}>{name} is a Web Developer from {city}</h1>
      </div>
    );
  }
}

export default Home;