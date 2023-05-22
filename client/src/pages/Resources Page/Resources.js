import React from "react";
import styles from "./Resources.module.css";

function Resources(){
    return(
        <div className={styles.resources}>
        <div className={styles.resources_box}>
          <div className={styles.resources_inner_box}>
            <div className={styles.resources_info}>
                <h1>Resources for learning sign language</h1>
                <p className={styles.resources_text}>
                    National Association of Deaf(NAD): The National Association of the Deaf
                    (NAD) is the nation's premier civil rights organization of, by and for 
                    deaf and hard of hearing individuals in the United States of America. The 
                    association provides reliable sources of learning and teaching sign language for 
                    both children and parents. Highly recommended!!!
                </p>
                <button id="browse_resources">More</button>
            </div> 
        </div>

        <div className={styles.Resources_box_2}>
        <div className='other'>
            <div className="other">
                <h3>Other Resources</h3>  
                    <p>
                    Americans with Disabilities Act (ADA): The ADA 
                    is a federal law that prohibits discrimination 
                    against individuals with disabilities in employment, 
                    public accommodations, and other areas. The law includes 
                    provisions related to sign language interpretation, 
                    including requirements for providing interpreters 
                    in certain situations.

                    Visit: https://www.ada.gov/
                    </p>  

                    <p>
                    Rehabilitation Act: The Rehabilitation Act is 
                    another federal law that prohibits discrimination 
                    against individuals with disabilities. Like the ADA, 
                    it includes provisions related to sign language 
                    interpretation, particularly in the context of 
                    federal agencies and programs.

                    Visit:  https://www.hhs.gov/civil-rights/for-individuals/disability/rehabilitation-act/index.html
                    </p>
                

            </div>

        </div>

        <div className='Community'>
            <div className="community">
                <h3>Community</h3> 
                <p>
                    Deaf Planet: This website provides information 
                    about Deaf culture, history, and language. 
                    It also offers resources for Deaf people and 
                    their families, as well as resources for sign 
                    language interpreters.
                    
                    Visit: https://www.deafplanet.com/
                    </p>  

                    <p>
                    Deaf Culture Centre: This organization aims 
                    to promote and preserve Deaf culture through 
                    education and art. Their website includes resources 
                    on Deaf culture, as well as information about events 
                    and exhibits at their center in Toronto, Canada. 
                    
                    Visit: https://www.deafculturecentre.ca/
                    </p>
                
            </div>
        </div>
    </div>

     </div>
     <div className="empty"></div>
    </div> 
    );  
}

export default Resources;





// import React from "react";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import styles from "./Resources.module.css";
// import { getFlashcardsCollectionById } from "../../services/flashcardsService";
// import requireAuth from "../../hoc/requireAuth";
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';



// const FlashcardsPage = () => {
//   const { slug } = useParams();
//   const [collection, setCollection] = useState();
//   useEffect(() => {
//     getFlashcardsCollectionById(slug)
//       .then((response) => {
//         setCollection(response.data.data);
//       })
//       .catch((err) => console.log(err));
//   }, [slug]);
//   if (!collection) return <div>Loading...</div>;
  
//     return (
//     <div className="App">
//         <h1>Flash cards</h1>
            
//         <Carousel responsive={responsive}>

//             <div>Item 1
//                 <div class="flash_card">
//                     <div class= "card__inner">
//                         <div class ="card__face card__face--front">
//                             <h2> card front</h2>
//                         </div>
//                         <div class ="card__face card__face--back">
//                             <div class="card__content">
//                                 <div class="card_header">
//                                     <h2>Samuel</h2>
//                                 </div>
//                                 <div class="card__body">
//                                     <h3>Translation</h3>
//                                         <p>lorem ipsum

//                                         </p>
//                                     </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div>Item 2
//                 <div class="flash_card">
//                     <div class= "card__inner">
//                         <div class ="card__face card__face--front">
//                             <h2> card front</h2>
//                         </div>
//                         <div class ="card__face card__face--back">
//                             <div class="card__content">
//                                 <div class="card_header">
//                                     <h2>Samuel</h2>
//                                 </div>
//                                 <div class="card__body">
//                                     <h3>Translation</h3>
//                                         <p>lorem ipsum

//                                         </p>
//                                     </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>   
//             </div>

//             <div>Item 3
//                 <div class="flash_card">
//                     <div class= "card__inner">
//                         <div class ="card__face card__face--front">
//                             <h2> card front</h2>
//                         </div>
//                         <div class ="card__face card__face--back">
//                             <div class="card__content">
//                                 <div class="card_header">
//                                     <h2>Samuel</h2>
//                                 </div>
//                                 <div class="card__body">
//                                     <h3>Translation</h3>
//                                         <p>lorem ipsum

//                                         </p>
//                                     </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>    
//             </div>

//             <div>Item 4
//                 <div class="flash_card">
//                     <div class= "card__inner">
//                         <div class ="card__face card__face--front">
//                             <h2> card front</h2>
//                         </div>
//                         <div class ="card__face card__face--back">
//                             <div class="card__content">
//                                 <div class="card_header">
//                                     <h2>Samuel</h2>
//                                 </div>
//                                 <div class="card__body">
//                                     <h3>Translation</h3>
//                                         <p>lorem ipsum

//                                         </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
            

//         </Carousel>
    
//     </div>
    
//     );
   
// };


// export default requireAuth(FlashcardsPage);
