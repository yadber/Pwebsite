import React, { Component } from 'react';

import src from '../aboutImage/education.jpg';
import src1 from '../aboutImage/Family.jpg';
import src2 from '../aboutImage/hobby.jpg';
import src3 from '../aboutImage/contact.jpg.webp';

import '../style.css';

class About extends Component {
  render() {
    
    return (
        
        <div className="team-section">
            <h1>ALL about me</h1>
            <span className="border"></span>
            <div className="ps">
                <a href="#about1"><img src={src} alt=''/></a>
                <a href="#about2"><img src={src1} alt=''/></a>
                <a href="#about3"><img src={src2} alt=''/></a>
                <a href="#about4"><img src={src3} alt=''/></a>
            </div>
            <div className="section" id="about1">
                <span className="name">Educational History and Background</span>
                <span className="border"></span>
                <p>
                   
                    I was born in Bore,Guji,Oromia. I learned everything I needed to know there. Everything that has to do with life that is. I started my education there. My educational background was just as normal and fun like any other kids. But I was the unique child

                </p>
            </div>
            <div className="section" id="about2">
                <span className="name">Family</span>
                <span className="border"></span>
                <p>
                My family is well diversified. Every family member plays an important role in all my family’s lives. In my family, there are 10 people: my father, my mother, my 2 brotherd and my 5 sistors My father is one who brings money home and is also responsible for organizing and planning family trips. My mother is the one who is in charge for making meals and makes sure everyone eats at the appropriate times.

                </p>
            </div>
            <div className="section" id="about3">
                <span className="name">hobby</span>
                <span className="border"></span>
                <p>
                In my spare time, I love taking pictures. I have even documented many university events as part of my artistic practice. Working hand in hand with others has surely stood out to me as a passion in my life. I enjoy collaborating with others, artistically through photography and most certainly, through mentorship. I look forward to continuing to develop these skills and passions through this opportunity. 
                
                codding is what I love doing all the time. with the help of some rap music I can code for ever
                </p>
            </div>
            <div className="section" id="about4">
                <span className="name">contact</span>
                <span className="border"></span>
                <p>
                    Email : yadber58@gmail.com<br/><br/>
                    github : <a href="https://github.com/yadber">https://github.com/yadber</a><br/><br/>
                    Pnumber : +251923378258 <br/><br/>
                    Facebook : <a href="https://facebook.com/yadber58">https://facebook.com/yadber</a><br/>
                </p>
            </div>

        </div>
        
    );
  }
}

export default About;
