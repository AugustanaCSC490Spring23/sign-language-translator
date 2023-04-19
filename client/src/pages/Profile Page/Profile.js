import requireAuth from "../../hoc/requireAuth";

import React from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import { Button } from "react-bootstrap";


function profile(){

    return(
    <div className="user_box">

    <div className="profile_box1">

        <div class="picture_card">
            <div class="img-container">
            <img src="vietNguyen" alt= "viet nguyen"/>
            </div>
            
        </div>

        <div class="user-details">
            <h3>Viet Nguyen</h3> 
            <h3>email</h3>
            <h4>city</h4>
        </div>

        <div className="edit_button">
        <Button variant="outline-dark">edit</Button>
        </div>

    </div>

    <div className="profile_box2">
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

        <div className="Started">
            <div class="card">
                    <h3>Started Lessons</h3> 
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

export default profile;
