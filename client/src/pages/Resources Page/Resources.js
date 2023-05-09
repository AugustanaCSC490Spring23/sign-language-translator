
import React from 'react';
import "./Resources.css";



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
                    both children and parents.
                </p>
                <p className='Resources text2'>
                The National Association of the Deaf (NAD) is the oldest and largest 
                organization representing the deaf community in the United States. 
                Founded in 1880, the NAD advocates for the rights of deaf and hard of 
                hearing people, and provides resources and support for the community. 
                The organization works to improve education, employment, and accessibility 
                for deaf and hard of hearing individuals, and has been involved in numerous 
                legal battles to ensure their rights are protected. Through its work, the NAD 
                aims to promote full inclusion and equality for deaf and hard of hearing people 
                in all aspects of society.

                </p>
                <p className='Resources text3'>
                Deaf Linx is an online resource center that provides information and 
                resources for the deaf and hard of hearing community. The website features
                a directory of deaf-related organizations, a job board, and a news section 
                with articles and information relevant to the community. In addition, Deaf Linx
                offers a comprehensive directory of sign language interpreters, as well as 
                listings for deaf-owned businesses and products. Deaf Linx also offers a 
                forum where members of the community can connect and discuss topics related 
                to deaf culture, education, and advocacy.
                </p>


            </div> 
        </div>
        

     </div>

     <div className="feedback">
        <h3>Feedback</h3>
    <form>
        <label htmlFor="feedback">Feedback:</label>
        <textarea id="feedback" name="feedback" placeholder="Enter your feedback here"></textarea>
        <button type="submit">Submit</button>
        <label htmlFor="supportRequest">Support Request:</label>
        <textarea id="supportRequest" name="supportRequest" placeholder="Enter your support request here"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>

    <div className='Resources_box_2'>
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

     <div className="empty"></div>
    </div> 
    );  
}

export default Resources;


