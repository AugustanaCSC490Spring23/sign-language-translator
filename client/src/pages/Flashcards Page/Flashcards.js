import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./flashcard.css";
import { getFlashcardsCollectionById } from "../../services/flashcardsService";
import requireAuth from "../../hoc/requireAuth";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



const FlashcardsPage = () => {
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
    <div className="App">
        <h1>Flash cards</h1>
            
        <Carousel responsive={responsive}>

            <div>Item 1
                <div class="flash_card">
                    <div class= "card__inner">
                        <div class ="card__face card__face--front">
                            <h2> card front</h2>
                        </div>
                        <div class ="card__face card__face--back">
                            <div class="card__content">
                                <div class="card_header">
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
            </div>

            <div>Item 2
                <div class="flash_card">
                    <div class= "card__inner">
                        <div class ="card__face card__face--front">
                            <h2> card front</h2>
                        </div>
                        <div class ="card__face card__face--back">
                            <div class="card__content">
                                <div class="card_header">
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
            </div>

            <div>Item 3
                <div class="flash_card">
                    <div class= "card__inner">
                        <div class ="card__face card__face--front">
                            <h2> card front</h2>
                        </div>
                        <div class ="card__face card__face--back">
                            <div class="card__content">
                                <div class="card_header">
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
            </div>

            <div>Item 4
                <div class="flash_card">
                    <div class= "card__inner">
                        <div class ="card__face card__face--front">
                            <h2> card front</h2>
                        </div>
                        <div class ="card__face card__face--back">
                            <div class="card__content">
                                <div class="card_header">
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
            </div>
            

        </Carousel>
    
    </div>
    
    );
   
};


export default requireAuth(FlashcardsPage);
