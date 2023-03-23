import React from "react";
import { useNavigate } from "react-router-dom";
import "./about.css";

function About(){

    return(
        <div className = "about">
           <div className = "title">
            <h1> About us</h1>
           </div> 
           <div className = "content">
            <h3>
                We are team Oreale 
            </h3>
            <p> Our app is going to be used to be used to translate sign language into te</p>
           </div>
           <div className = "comment">
            <p> Leave a comment</p>
                <fom className ="comment-form">
                <input type ="text" placeholder="Name"/>
                <input type ="email" placeholder="Email"/>
                <input type ="text" placeholder="Website"/>
                <textarea rows ="10" placeholder="Write your comment"></textarea>
                <button type = "submit">Submit</button>
                </fom>

           </div>

        </div>
    );
}

export default About;