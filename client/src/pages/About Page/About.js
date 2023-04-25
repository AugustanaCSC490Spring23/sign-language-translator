import React from "react";
import { useNavigate } from "react-router-dom";
import "./About.module.css";
import vietNguyen from "../../assets/viet-nguyen.jpg";
import huyNguyen from "../../assets/huy-ngyen.jpg";
import samuelTklemariam from "../../assets/samuel-teklemariam.jpg";

function About() {
  return (
    <div className="about">
      <div className="about_box">
        <div className="about_inner_box">
          <div className="about-info">
            <p>
              <span>Learn more</span>
            </p>
            <h1>About us </h1>
            <p className="About_Text">
              Writing effectively is an art. Start by using simple, everyday
              words people can easily understand. Be clear and direct to the
              point. Keep your thoughts flowing logically, and aim for brevity
              unless you're writing in the long form.
            </p>

            <p className="About_Text2">
              Your ideas have a purpose so choose words that accurately express
              them. Ensure your grammar is flawless as it impacts your
              credibility. Use the active voice whenever possible as it makes
              any narrative easier to read.
            </p>
            {/* <button id="Browse_Aboutus">BROWSE MORE AboutS</button> */}
          </div>
        </div>
      </div>
      <div className="empty">
        <h2>Our Team</h2>
      </div>

      <div className="About_footer">
        <div className="footer_box">
          <div class="card">
            <div class="img-container">
              <img src={vietNguyen} alt="viet nguyen" />
            </div>
            <h3>Viet Nguyen</h3>
            <p>Major: Computer Science</p>
            {/* <p> I aspired to be a teacher. Now I see how technology can help me reach my goals. So I need to learn to code first.</p> */}

            <div class="icons">
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-linkedin"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="#">
                <i class="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer_box2">
          <div class="card">
            <div class="img-container">
              <img src={huyNguyen} alt="huy nguyen" />
            </div>
            <h3>Huy Nguyen</h3>
            <p>Major: Computer Science</p>
          </div>
        </div>

        <div className="footer_box3">
          <div class="card">
            <div class="img-container">
              <img src={samuelTklemariam} alt="samuel teklemariam" />
            </div>
            <h3>Samuel Teklemariam</h3>
            <p>Major: Computer Science</p>
          </div>
        </div>

        <div className="footer_box4">
          <div class="card">
            <div class="img-container">
              <img src={huyNguyen} alt="azee nguyen" />
            </div>
            <h3>Azee Nguyen</h3>
            <p>Major: Computer Science</p>
          </div>
        </div>
      </div>

      <div className="empty"></div>
    </div>
  );
}

export default About;
