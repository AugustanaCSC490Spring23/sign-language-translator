
// import React from 'react';
// import "./Resources.css";

// function Resources(){
//     return(
//     <div className="resources">
//      <div className="Resources_box">
//         <div className="Resources_inner_box">
//             <div className= "resources-info">
//                 <h1>Resources for learning sign language</h1>
//                 <p className="Resources_Text">
//                     National Association of Deaf(NAD): The National Association of the Deaf
//                     (NAD) is the nation's premier civil rights organization of, by and for 
//                     deaf and hard of hearing individuals in the United States of America. The 
//                     association provides reliable sources of learning and teaching sign language for 
//                     both children and parents. Highly recommended!!!
//                 </p>
//                 <button id="browse_resources">More</button>
//             </div> 
//         </div>
//      </div>
//      <div className="empty"></div>
//     </div> 
//     );  
// }

// export default Resources;

import React from "react";
import { useNavigate } from "react-router-dom";
import "./User.css";

function User(){

    return(
    <div className="user_box">

        <div className="profile_box">

        <div class="card">
            <div class="img-container">
            <img src="vietNguyen" alt= "viet nguyen"/>
            </div>
            <div class="user-details">
            <h3>Viet Nguyen</h3> 
            <h4>email</h4>
            <h5>city</h5>
            </div>
        </div>
        </div>

    <div className="right_box">
        <div className="level">
            <div class="card">
                    <h3>Level</h3> 
            </div>
        </div>

        <div className="Completed cources">
            <div class="card">
                    <h3>Completed cources</h3> 
            </div>
        </div>

        <div className="In progress">
            <div class="card">
                    <h3>In progress</h3> 
            </div>
        </div>

        <div className="Cources">
            <div class="card">
                    <h3>Cources</h3> 
            </div>
        </div>


    </div>

    </div>
    
   
    );
    

}

export default User;