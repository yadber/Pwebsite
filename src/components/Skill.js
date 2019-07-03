import React, { Component } from 'react';



import '../css/skill.css';




class Skill extends Component {
  render() {
    let styles = {
        width: '80%'
    }
    let styles1 = {
        width: '60%'
    }
    let styles2 = {
        width: '50%'
    }
    let styles3 = {
        width: '45%'
    }
    let style4 = {
        width : '75%'
    }
    return (
       <div className="body">
            <div className= "center">
           <h1>skills</h1>
           <div className="skillBox">
               <p>javascript</p>
               <p>80%</p>
               <div className="skill">
                    <div className="skill_level" style = {styles}></div>
               </div>
           </div>
           <div className="skillBox">
               <p>C++</p>
               <p>60%</p>
               <div className="skill">
                    <div className="skill_level" style = {styles1}></div>
               </div>
           </div>
           <div className="skillBox">
               <p>java</p>
               <p>50%</p>
               <div className="skill">
                    <div className="skill_level" style = {styles2}></div>
               </div>
           </div>
           <div className="skillBox">
               <p>Node.js</p>
               <p>75%</p>
               <div className="skill">
                    <div className="skill_level" style = {style4}></div>
               </div>
           </div>
           <div className="skillBox">
               <p>React.js</p>
               <p>60%</p>
               <div className="skill">
                    <div className="skill_level" style = {styles1}></div>
               </div>
           </div>
           <div className="skillBox">
               <p>python</p>
               <p>50%</p>
               <div className="skill">
                    <div className="skill_level" style = {styles2}></div>
               </div>
           </div>
           <div className="skillBox">
               <p>php</p>
               <p>45%</p>
               <div className="skill">
                    <div className="skill_level" style = {styles3}></div>
               </div>
           </div>

       </div>
       </div>
      
    );
  }
}

export default Skill;
