
import React from 'react';
import "./Resources.module.css";

function Resources(){
    return(
    <div className="resources">
     <div className="Resources_box">
        <div className="Resources_inner_box">
            <div className= "resources-info">
                <h1>Resources for learning sign language</h1>
                <p className="Resources_Text">
                    National Association of Deaf(NAD): The National Association of the Deaf
                    (NAD) is the nation's premier civil rights organization of, by and for 
                    deaf and hard of hearing individuals in the United States of America. The 
                    association provides reliable sources of learning and teaching sign language for 
                    both children and parents. Highly recommended!!!
                </p>
                <button id="browse_resources">More</button>
            </div> 
        </div>
     </div>
     <div className="empty"></div>
    </div> 
    );  
}

export default Resources;

