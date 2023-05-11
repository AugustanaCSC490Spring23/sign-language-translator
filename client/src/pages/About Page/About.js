import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./About.module.css";
import vietNguyen from "../../assets/viet-nguyen.jpg";
import huyNguyen from "../../assets/huy-ngyen.jpg";
import samuelTklemariam from "../../assets/samuel-teklemariam.jpg";


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
            <h3>Another Team Member</h3>
            <p>Major: Computer Science</p>
          </div>
        </div>
      </div>
    );
}

export default About;

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./About.css";
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';

// function About(){
//     const responsive = {
//         superLargeDesktop: {
//           // the naming can be any, depends on you.
//           breakpoint: { max: 4000, min: 3000 },
//           items: 5
//         },
//         desktop: {
//           breakpoint: { max: 3000, min: 1024 },
//           items: 3
//         },
//         tablet: {
//           breakpoint: { max: 1024, min: 464 },
//           items: 2
//         },
//         mobile: {
//           breakpoint: { max: 464, min: 0 },
//           items: 1
//         }
//       };
      
    // return(
    // <div class="flash_card">
    //     <div class= "card__inner">
    //         <div class ="card__face card__face--front">
    //             <h2> card front</h2>
    //         </div>
    //         <div class ="card__face card__face--back">
    //             <div class="card__content">
    //                 <div class="card_header">
    //                     <img src="pp.jpg" alt="" class= "pp"/>
    //                     <h2>Samuel</h2>
    //                 </div>
    //                 <div class="card__body">
    //                        <h3>Translation</h3>
    //                         <p>lorem ipsum

    //                         </p>
    //                     </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>




//     return (
//       <div className="App">
//         <h1>Flash cards</h1>
//             <Carousel responsive={responsive}>

//         <div>Item 1
//         <div class="flash_card">
//         <div class= "card__inner">
//             <div class ="card__face card__face--front">
//                 <h2> card front</h2>
//             </div>
//             <div class ="card__face card__face--back">
//                 <div class="card__content">
//                     <div class="card_header">
//                         <h2>Samuel</h2>
//                     </div>
//                     <div class="card__body">
//                            <h3>Translation</h3>
//                             <p>lorem ipsum

//                             </p>
//                         </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//         </div>

//         <div>Item 2
//         <div class="flash_card">
//         <div class= "card__inner">
//             <div class ="card__face card__face--front">
//                 <h2> card front</h2>
//             </div>
//             <div class ="card__face card__face--back">
//                 <div class="card__content">
//                     <div class="card_header">
//                         <h2>Samuel</h2>
//                     </div>
//                     <div class="card__body">
//                            <h3>Translation</h3>
//                             <p>lorem ipsum

//                             </p>
//                         </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//         </div>
//         <div>Item 3
//         <div class="flash_card">
//         <div class= "card__inner">
//             <div class ="card__face card__face--front">
//                 <h2> card front</h2>
//             </div>
//             <div class ="card__face card__face--back">
//                 <div class="card__content">
//                     <div class="card_header">
//                         <h2>Samuel</h2>
//                     </div>
//                     <div class="card__body">
//                            <h3>Translation</h3>
//                             <p>lorem ipsum

//                             </p>
//                         </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//         </div>
//         <div>Item 4
//         <div class="flash_card">
//         <div class= "card__inner">
//             <div class ="card__face card__face--front">
//                 <h2> card front</h2>
//             </div>
//             <div class ="card__face card__face--back">
//                 <div class="card__content">
//                     <div class="card_header">
//                         <h2>Samuel</h2>
//                     </div>
//                     <div class="card__body">
//                            <h3>Translation</h3>
//                             <p>lorem ipsum

//                             </p>
//                         </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//         </div>

//     </Carousel>
//     </div>
//     );

    

    
// }

// export default About;