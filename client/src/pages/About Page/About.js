import React from "react";
import { useNavigate } from "react-router-dom";
import "./about.css";

function About(){
    return(
    <div className="about">
     <div className="about_box">
        <div className="about_inner_box">
        <div className= "about-info">
        <p>
            <span>Learn more</span>
        </p>
        <h1>About us </h1>
        <p className="About_Text">
            Writing effectively is an art. Start by using
            simple, everyday words people can easily understand. Be clear
            and direct to the point. Keep your thoughts flowing
            logically, and aim for brevity unless you're writing in the 
            long form.
        </p>

        <p className="About_Text2">
            Your ideas have a purpose so choose words that accurately 
            express them. Ensure your grammar is flawless as it impacts 
            your credibility. Use the active voice whenever possible 
            as it makes any narrative easier to read.
        </p>
        {/* <button id="Browse_Aboutus">BROWSE MORE AboutS</button> */}
         </div> 
        </div>
    </div>
    <div className="empty">
        
    </div>

        <div className="About_footer">

            <div className="footer_box">
                <h3>box 1</h3>
            </div>

            <div className="footer_box2">
                <h3>box 2</h3>
            </div>

            <div className="footer_box3">
                <h3>box 3</h3>        
            </div>

            <div className="footer_box4">
                <h3>box 4</h3>
            </div>

        </div>

    <div className="empty"></div>

    </div> 
    );  
}

export default About;