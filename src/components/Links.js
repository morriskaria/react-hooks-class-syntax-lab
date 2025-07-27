import React from 'react';

class Links extends React.Component {
  render() {
    const { github, linkedin } = this.props;
    return (
      <div id="links">
        <h3>Links</h3>
        <a href={github}>{github}</a>
        <a href={linkedin}>{linkedin}</a>
      </div>
    );
  }
}

export default Links;