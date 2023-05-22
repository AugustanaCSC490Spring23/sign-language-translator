import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Flashcards.module.css";
import { getFlashcardsCollectionById } from "../../services/flashcardsService";
import requireAuth from "../../hoc/requireAuth";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // Number of slides to scroll at once
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // Number of slides to scroll at once
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // Number of slides to scroll at once
    }
  };




// const Flashcards = () => {
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
  
const Flashcards = () => {
    const { slug } = useParams();
    const [collection, setCollection] = useState();
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
      getFlashcardsCollectionById(slug)
        .then((response) => {
          setCollection(response?.data?.data);
        })
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }, [slug]);
    
    if (isLoading) return <div>Loading...</div>;
    
    if (!collection) {
      return <div>Unable to fetch flashcard collection.</div>;
    }
  
    // Rest of the component rendering using the fetched collection data
    return (
        <div className={styles.App}>
            <h1>Flash cards</h1>
                
            <Carousel responsive={responsive}>
                {
                     <><div>Item 1
                            <div className={styles.flash_card}>
                                <div className={styles.card_inner}>
                                    <div className={styles.card_face_front}>
                                        <h2> card front</h2>
                                    </div>
                                    <div className={styles.card_face_back}>
                                        <div className={styles.card_content}>
                                            <div className={styles.card_header}>
                                                <h2>Samuel</h2>
                                            </div>
                                            <div className={styles.card_body}>
                                                <h3>Translation</h3>
                                                <p>lorem ipsum
    
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><div>Item 2
                                <div className={styles.flash_card}>
                                    <div className={styles.card_inner}>
                                        <div className={styles.card_face_front}>
                                            <h2> card front</h2>
                                        </div>
                                        <div className={styles.card_face_back}>
                                            <div className={styles.card_content}>
                                                <div className={styles.card_header}>
                                                    <h2>Samuel</h2>
                                                </div>
                                                <div className={styles.card_body}>
                                                    <h3>Translation</h3>
                                                    <p>lorem ipsum
    
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div><div>Item 3
                                <div className={styles.flash_card}>
                                    <div className={styles.card_inner}>
                                            <div className={styles.card_face_front}>
                                                <h2> card front</h2>
                                            </div>
                                            <div className={styles.card_face_back}>
                                                <div className={styles.card_content}>
                                                    <div className={styles.card_header}>
                                                        <h2>Samuel</h2>
                                                    </div>
                                                    <div className={styles.card_body}>
                                                        <h3>Translation</h3>
                                                        <p>lorem ipsum
    
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div><div>Item 4
                                <div className={styles.flash_card}>
                                    <div className={styles.card_inner}>
                                    <div className={styles.card_face_front}>
                                            <h2> card front</h2>
                                        </div>
                                        <div className={styles.card_face_back}>
                                            <div className={styles.card_content}>
                                                <div className={styles.card_header}>
                                                    <h2>Samuel</h2>
                                                </div>
                                                <div className={styles.card_body}>
                                                    <h3>Translation</h3>
                                                    <p>lorem ipsum
    
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div></>
                }
               
                
    
            </Carousel>
        </div>
        
        );
       
  };

   
// };


export default requireAuth(Flashcards);
