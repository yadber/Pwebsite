import React, { Component } from 'react';


import i1 from '../imageGallery/IMG1.jpg';
import i2 from '../imageGallery/IMG2.jpg';
import i3 from '../imageGallery/IMG3.jpg';
import i4 from '../imageGallery/IMG4.jpg';
import i5 from '../imageGallery/IMG5.jpg';
import i6 from '../imageGallery/IMG6.jpg';
import i7 from '../imageGallery/IMG7.jpg';
import i9 from '../imageGallery/IMG9.jpg';
import i11 from '../imageGallery/IMG11.jpg';
import i12 from '../imageGallery/IMG12.jpg';


import '../css/gallery.css';
import '../js/app';



class Gallery extends Component {
  render() {
    return (
        <div className="background">
            <div className="container">
                <div className="main-img">
                    <img src={i5} id="current"/>
                </div>
                <div className="imgs">
                    <img src = {i2}/>
                    <img src = {i1}/>
                    <img src = {i2}/>
                    <img src = {i3}/>
                   <img src = {i4}/>
                    <img src = {i5}/>
                    <img src = {i6}/>
                   <img src = {i7}/>
                    <img src = {i9}/>
                    <img src = {i11}/>
                    <img src = {i12}/>
                    <img src = {i1}/>
                    <img src = {i2}/>
                    <img src = {i3}/>
                   <img src = {i4}/>
                    <img src = {i5}/>
                    <img src = {i6}/>
                </div>
        
        </div>
        </div>
        
    );
      
  }
  
}

export default Gallery;
