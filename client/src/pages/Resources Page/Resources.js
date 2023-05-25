// import React from "react";
// import styles from "./Resources.module.css";

// function Resources(){
//     return(
//         <div className={styles.resources}>
//         <div className={styles.resources_box}>
//           <div className={styles.resources_inner_box}>
//             <div className={styles.resources_info}>
//                 <h1>Resources for learning sign language</h1>
//                 <p className={styles.resources_text}>
//                     National Association of Deaf(NAD): The National Association of the Deaf
//                     (NAD) is the nation's premier civil rights organization of, by and for 
//                     deaf and hard of hearing individuals in the United States of America. The 
//                     association provides reliable sources of learning and teaching sign language for 
//                     both children and parents. Highly recommended!!!
//                 </p>
//                 <button id="browse_resources">More</button>
//             </div> 
//         </div>

//         <div className={styles.Resources_box_2}>
//         <div className={styles.other}>
//                 <h3>Other Resources</h3>  
//                     <p>
//                     Americans with Disabilities Act (ADA): The ADA 
//                     is a federal law that prohibits discrimination 
//                     against individuals with disabilities in employment, 
//                     public accommodations, and other areas. The law includes 
//                     provisions related to sign language interpretation, 
//                     including requirements for providing interpreters 
//                     in certain situations.

//                     Visit: https://www.ada.gov/
//                     </p>  

//                     <p>
//                     Rehabilitation Act: The Rehabilitation Act is 
//                     another federal law that prohibits discrimination 
//                     against individuals with disabilities. Like the ADA, 
//                     it includes provisions related to sign language 
//                     interpretation, particularly in the context of 
//                     federal agencies and programs.

//                     Visit:  https://www.hhs.gov/civil-rights/for-individuals/disability/rehabilitation-act/index.html
//                     </p>
                
//         </div>

//         <div className={styles.Community}>
//                 <h3>Community</h3> 
//                 <p>
//                     Deaf Planet: This website provides information 
//                     about Deaf culture, history, and language. 
//                     It also offers resources for Deaf people and 
//                     their families, as well as resources for sign 
//                     language interpreters.
                    
//                     Visit: https://www.deafplanet.com/
//                     </p>  

//                     <p>
//                     Deaf Culture Centre: This organization aims 
//                     to promote and preserve Deaf culture through 
//                     education and art. Their website includes resources 
//                     on Deaf culture, as well as information about events 
//                     and exhibits at their center in Toronto, Canada. 
                    
//                     Visit: https://www.deafculturecentre.ca/
//                     </p>
                
            
//         </div>
//     </div>

//      </div>
//      <div className={styles.empty}></div>
//     </div> 
//     );  
// }

// export default Resources;

import React from "react";
import styles from "./Resources.module.css";

const Resources = () => {
  return (
    <div className={styles.resources}>
      <div className={styles.resources_box}>
        <div className={styles.resources_inner_box}>
          <div className={styles.resources_info}>
            <h1>Resources for learning sign language</h1>
            <p className={styles.resources_text}>
            National Association of Deaf (NAD): The National Association of
              the Deaf (NAD) is the nation's premier civil rights organization
              of, by and for deaf and hard of hearing individuals in the United
              States of America. With a rich history of advocacy and support,
              the NAD has been instrumental in advancing the rights of deaf
              individuals and promoting inclusivity. The association provides
              reliable sources of learning and teaching sign language for both
              children and parents. Their comprehensive approach includes a
              wide range of educational materials, interactive online courses,
              and vibrant community resources. Whether you're a beginner
              exploring sign language or aiming to enhance your proficiency,
              the NAD resources are highly recommended for individuals
              interested in embarking on a transformative sign language
              learning journey.
            </p>
            <button id="browse_resources">More</button>
          </div>
        </div>

        <div className={styles.Resources_box_2}>
          <div className={styles.other}>
            <h3>Other Resources</h3>
            <p>
              Americans with Disabilities Act (ADA): The ADA is a federal law
              that prohibits discrimination against individuals with
              disabilities in employment, public accommodations, and other
              areas. The law includes provisions related to sign language
              interpretation, including requirements for providing interpreters
              in certain situations.
            </p>

            <p>
              Rehabilitation Act: The Rehabilitation Act is another federal law
              that prohibits discrimination against individuals with
              disabilities. Like the ADA, it includes provisions related to sign
              language interpretation, particularly in the context of federal
              agencies and programs.
            </p>
          </div>

          <div className={styles.Community}>
            <h3>Community</h3>
            <p>
              Deaf Planet: This website provides information about Deaf
              culture, history, and language. It also offers resources for Deaf
              people and their families, as well as resources for sign language
              interpreters.
            </p>

            <p>
              Deaf Culture Centre: This organization aims to promote and
              preserve Deaf culture through education and art. Their website
              includes resources on Deaf culture, as well as information about
              events and exhibits at their center in Toronto, Canada.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.empty}></div>
    </div>
  );
};

export default Resources;
