// import React from "react";
// import { useNavigate } from "react-router-dom";
// import styles from "./About.module.css";
// import vietNguyen from "../../assets/viet-nguyen.jpg";
// import huyNguyen from "../../assets/huy-nguyen.jpg";
// import samuelTklemariam from "../../assets/samuel-teklemariam.jpg";
// import azeeNguyen from "../../assets/azee-nguyen.jpg";


// function About() {
//   return (
//     <div className={styles.about}>
//       <div className={styles.about_box}>
//         <div className={styles.about_inner_box}>
//           <div className={styles.About_info}>
//             <p>
//               <span>Learn more</span>
//             </p>
//             <h1>About us </h1>
//             <p className={styles.About_Text}>
//               Writing effectively is an art. Start by using simple,
//               everyday words people can easily understand. Be clear
//               and direct to the point. Keep your thoughts flowing
//               logically, and aim for brevity unless you're writing in
//               the long form.
//             </p>

//             <p className={styles.About_Text2}>
//               Your ideas have a purpose so choose words that
//               accurately express them. Ensure your grammar is flawless
//               as it impacts your credibility. Use the active voice
//               whenever possible as it makes any narrative easier to
//               read.
//             </p>
//             {/* <button id="Browse_Aboutus">BROWSE MORE AboutS</button> */}
//           </div>
//         </div>
//       </div>
//       <div className={styles.empty}>
//         <h2>Our Team</h2>
//       </div>

//       <div className={styles.About_footer}>
//         <div className={styles.footer_box}>
//           <div className={styles.card}>
//             <div class={styles.imgContainer}>
//               <img src={vietNguyen} alt="viet nguyen" />
//             </div>
//             <h3>Viet Nguyen</h3>
//             <p>Major: Computer Science</p>
//             {/* <p> I aspired to be a teacher. Now I see how technology can help me reach my goals. So I need to learn to code first.</p> */}

//             <div class={styles.icons}>
//               <a href="#">
//                 <i class="fab fa-twitter"></i>
//               </a>
//               <a href="#">
//                 <i class="fa-brands fa-linkedin"></i>
//               </a>
//               <a href="#">
//                 <i class="fa-brands fa-github"></i>
//               </a>
//               <a href="#">
//                 <i class="fa-brands fa-instagram"></i>
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className={styles.footer_box2}>
//           <div className={styles.card}>
//             <div class={styles.imgContainer}>
//               <img src={huyNguyen} alt="huy nguyen" />
//             </div>
//             <h3>Huy Nguyen</h3>
//             <p>Major: Computer Science</p>
//           </div>
//         </div>

//         <div className={styles.footer_box3}>
//         <div className={styles.card}>
//             <div class={styles.imgContainer}>
//               <img src={samuelTklemariam} alt="samuel teklemariam" />
//             </div>
//             <h3>Samuel Teklemariam</h3>
//             <p>Major: Computer Science</p>
//           </div>
//         </div>

//         <div className={styles.footer_box4}>
//         <div className={styles.card}>
//             <div class={styles.imgContainer}>
//               <img src={azeeNguyen} alt="azee nguyen" />
//             </div>
//             <h3>Azee Nguyenr</h3>
//             <p>Major: Computer Science</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;




import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./About.module.css";
import vietNguyen from "../../assets/viet-nguyen.jpg";
import huyNguyen from "../../assets/huy-nguyen.jpg";
import samuelTklemariam from "../../assets/samuel-teklemariam.jpg";
import azeeNguyen from "../../assets/azee-nguyen.jpg";

const teamMembers = [
  {
    name: "Viet Nguyen",
    major: "Computer Science",
    image: vietNguyen,
  },
  {
    name: "Huy Nguyen",
    major: "Computer Science",
    image: huyNguyen,
  },
  {
    name: "Samuel Teklemariam",
    major: "Computer Science",
    image: samuelTklemariam,
  },
  {
    name: "Azee Nguyen",
    major: "Computer Science",
    image: azeeNguyen,
  },
];

<<<<<<< HEAD
function About() {
  return (
    <div className={styles.about}>
      <div className={styles.about_box}>
        <div className={styles.about_inner_box}>
          <div className={styles.about_info}>
            <p>
              <span>Learn more</span>
            </p>
            <h1>About us</h1>
            <p className={styles.about_text}>
              Writing effectively is an art. Start by using simple,
              everyday words people can easily understand. Be clear
              and direct to the point. Keep your thoughts flowing
              logically, and aim for brevity unless you're writing in
              the long form.
            </p>

            <p className={styles.about_text}>
              Your ideas have a purpose, so choose words that
              accurately express them. Ensure your grammar is flawless
              as it impacts your credibility. Use the active voice
              whenever possible as it makes any narrative easier to
              read.
            </p>
          </div>
        </div>
      </div>

      <h2>Our Team</h2>

      <div className={styles.about_footer}>
        {teamMembers.map((member, index) => (
          <div className={styles.footer_box} key={index}>
            <div className={styles.card}>
              <div className={styles.imgContainer}>
                <img src={member.image} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <p>{member.major}</p>
              <div className={styles.icons}>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
=======

function About(){

    return(
        // <div className="About-main">

        <div className={styles.about}>
         <div className={styles.about_box}>
          <div className={styles.about_inner_box}>
            <div className={styles.About_info}>
        <p>
            <span>Learn more</span>
        </p>
        <h1>About us </h1>
        <p className= {styles.About.Text}>
            Writing effectively is an art. Start by using
            simple, everyday words people can easily understand. Be clear
            and direct to the point. Keep your thoughts flowing
            logically, and aim for brevity unless you're writing in the 
            long form.
        </p>

        <p className={styles.About.Text2}>
            Your ideas have a purpose so choose words that accurately 
            express them. Ensure your grammar is flawless as it impacts 
            your credibility. Use the active voice whenever possible 
            as it makes any narrative easier to read.
        </p>
         </div> 
        </div>
    </div>
    <div className="empty">
   
    </div>

        <div className="About_footer">
        

            <div className="stylesfooter_box">
                <div class="card">
                  <div class="img-container">
                    <img src="vietNguyen" alt= "viet nguyen"/>
                    </div> 
                    <h3>Viet Nguyen</h3> 
                    <p>Major: Computer Science</p>
                    {/* <p> I aspired to be a teacher. Now I see how technology can help me reach my goals. So I need to learn to code first.</p> */}
                    
                </div>
          </div>
        </div>
        

        <div className={styles.footer_box2}>
          <div className={styles.card}>
            <div class={styles.imgContainer}>
              <img src={huyNguyen} alt="huy nguyen" />
            </div>
            <h3>Huy Nguyen</h3>
            <p>Major: Computer Science</p>
          </div>
        </div>

        <div className={styles.footer_box3}>
        <div className={styles.card}>
            <div class={styles.imgContainer}>
              <img src={samuelTklemariam} alt="samuel teklemariam" />
            </div>
            <h3>Samuel Teklemariam</h3>
            <p>Major: Computer Science</p>
          </div>
        </div>

        <div className={styles.footer_box4}>
        <div className={styles.card}>
            <div class={styles.imgContainer}>
              <img src={huyNguyen} alt="huy nguyen" />
            </div>
            <h3>Azee Nguyen</h3>
            <p>Major: Computer Science</p>
          </div>
        </div>
>>>>>>> main
      </div>
    );
}

export default About;
