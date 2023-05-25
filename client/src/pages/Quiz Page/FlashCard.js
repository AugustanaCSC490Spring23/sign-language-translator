import React from "react";
import { useNavigate } from "react-router-dom";
import "./FlashCard.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function FlashCard(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
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

    // <div className="App">
    //     <h1>React carusol</h1>
    //         <Carousel responsive={responsive}>
    //     <div>Item 1</div>
    //     <div>Item 2</div>
    //     <div>Item 3</div>
    //     <div>Item 4</div>
    // </Carousel>
    // </div>

    );
}

export default FlashCard;