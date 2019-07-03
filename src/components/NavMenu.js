import React, {Component} from 'react';

import About from './About';
import Gallery from './Gallery';
import Skill from './Skill';
import Footer from './Footer';
class NavMenu extends Component{

    render(){
        return(
            // bg-primary, bg-succes, bg-warning, bg-info, bg-danger
            <div>
                 <nav className = "navbar navbar-expand-md navbar-dark bg-dark sticky-top" >

                <button className = "navbar-toggler" data-toggle="collapse" data-target= "#collapse_target">
                    <span className = "navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id= "collapse_target">
                    <ul className = "navbar-nav">
                        <li className = "nav-item">
                            <a className = "nav-link"href = "#">Home</a>
                        </li>
                        <li className = "nav-item">
                            <a className = "nav-link" href = "#p1">About</a>
                        </li>
                        <li className = "nav-item">
                            <a className = "nav-link" href = "#p2">Gallery</a>
                        </li>
                        <li className = "nav-item">
                            <a className = "nav-link" href = "#p3">skill</a>
                        </li>
                    </ul>
               
                </div>
                </nav>
                <div id = "p1">
                    <About />
                </div>
                <div id = "p2">
                    <Gallery />
                </div>
                <div id = "p3">
                    <Skill />
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        )
    }

}

export default NavMenu;