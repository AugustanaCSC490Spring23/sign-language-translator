import React from "react";
import { useNavigate } from "react-router-dom";
import "./FlashCard.css";

function FlashCard(){
    return(
    <div class="flash_card">
        <div class= "card__inner">
            <div class ="card__face card__face--front">
                <h2> card front</h2>
            </div>
            <div class ="card__face card__face--back">
                <div class="card__content">
                    <div class="card_header">
                        <img src="pp.jpg" alt="" class= "pp"/>
                        <h2>Samuel</h2>
                    </div>
                    <div class="card__body">
                           <h3>Translation</h3>
                            <p>lorem ipsum

                            </p>
                        </div>
                </div>
            </div>


        </div>

    </div>

    );
}

export default FlashCard;