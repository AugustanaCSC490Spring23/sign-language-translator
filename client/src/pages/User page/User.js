import React from "react";
import { useNavigate } from "react-router-dom";
import "./user.css";

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