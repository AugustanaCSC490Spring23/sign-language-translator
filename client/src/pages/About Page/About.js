// import React from "react";
// import { useNavigate } from "react-router-dom";
// import styles from "./About.module.css";
// import vietNguyen from "../../assets/viet-nguyen.jpg";
// import huyNguyen from "../../assets/huy-ngyen.jpg";
// import samuelTklemariam from "../../assets/samuel-teklemariam.jpg";

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
//               <img src={huyNguyen} alt="huy nguyen" />
//             </div>
//             <h3>Another Team Member</h3>
//             <p>Major: Computer Science</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;



import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./About.module.css";
import { getFlashcardsCollectionById } from "../../services/flashcardsService";
import requireAuth from "../../hoc/requireAuth";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // Number of slides to scroll at once
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // Number of slides to scroll at once
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // Number of slides to scroll at once
    }
  };




const About = () => {
  const { slug } = useParams();
  const [collection, setCollection] = useState();
  useEffect(() => {
    getFlashcardsCollectionById(slug)
      .then((response) => {
        setCollection(response.data.data);
      })
      .catch((err) => console.log(err));
  }, [slug]);
  if (!collection) return <div>Loading...</div>;
  

    return (
    <div className={styles.App}>
        <h1>Flash cards</h1>
            
        <Carousel responsive={responsive}>
            {
                 <><div>Item 1
                        <div className={styles.flash_card}>
                            <div className={styles.card_inner}>
                                <div className={styles.card_face_front}>
                                    <h2> card front</h2>
                                </div>
                                <div className={styles.card_face_back}>
                                    <div className={styles.card_content}>
                                        <div className={styles.card_header}>
                                            <h2>Samuel</h2>
                                        </div>
                                        <div className={styles.card_body}>
                                            <h3>Translation</h3>
                                            <p>lorem ipsum

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><div>Item 2
                            <div className={styles.flash_card}>
                                <div className={styles.card_inner}>
                                    <div className={styles.card_face_front}>
                                        <h2> card front</h2>
                                    </div>
                                    <div className={styles.card_face_back}>
                                        <div className={styles.card_content}>
                                            <div className={styles.card_header}>
                                                <h2>Samuel</h2>
                                            </div>
                                            <div className={styles.card_body}>
                                                <h3>Translation</h3>
                                                <p>lorem ipsum

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><div>Item 3
                            <div className={styles.flash_card}>
                                <div className={styles.card_inner}>
                                        <div className={styles.card_face_front}>
                                            <h2> card front</h2>
                                        </div>
                                        <div className={styles.card_face_back}>
                                            <div className={styles.card_content}>
                                                <div className={styles.card_header}>
                                                    <h2>Samuel</h2>
                                                </div>
                                                <div className={styles.card_body}>
                                                    <h3>Translation</h3>
                                                    <p>lorem ipsum

                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div><div>Item 4
                            <div className={styles.flash_card}>
                                <div className={styles.card_inner}>
                                <div className={styles.card_face_front}>
                                        <h2> card front</h2>
                                    </div>
                                    <div className={styles.card_face_back}>
                                        <div className={styles.card_content}>
                                            <div className={styles.card_header}>
                                                <h2>Samuel</h2>
                                            </div>
                                            <div className={styles.card_body}>
                                                <h3>Translation</h3>
                                                <p>lorem ipsum

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div></>
            }
           
            

        </Carousel>
    </div>
    
    );
   
};


export default requireAuth(About);

