import React, { Component } from 'react';

import src from './imageGallery/IMG1.jpg';

import './style.css';
class App extends Component {
  render() {
    
    return (
    
    <div className="row" id="box-search">
      <div className="thumbnail text-center">
        <img src= {src}  className="img-fluid img-responsive"/>
        <div className="caption">
          <h3><p><em>Hey, I'm</em></p></h3>
          <h1><p><strong>YADESA BERCHU</strong></p></h1>
        </div>
    </div>
    </div>

    );
  }
}

export default App;
