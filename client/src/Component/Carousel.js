import { Carousel } from 'react-bootstrap';
import MyCard from "./Card";

const CardCarousel = ({ cards }) => {
    return (
        <Carousel>
            <Carousel.Item>
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CardCarousel;

// <MyCard 
//                     imgUrl="../../Resources/Images/quizBg2.png"
//                     title="New Quizzes"
//                     description="Take new quizzes and learn"
//                     url="/"
//                 />