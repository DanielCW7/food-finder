// slider for 'suggestions' component
// slider receives an array of objects - use typescript if possible to define the shape
import FoodCard from "./foodCard";
import chicken from "../images/chicken.jpg"
import apple from "../images/apples.jpg"
import oats from "../images/oats.jpg"

const slider = (array) => {
    // array populate
    const len = array.length;


    return (
        <div className="flex justify-center flex-wrap">
            <div className="carousel rounded-box gap-8 py-4">
                <div className="carousel-item">
                    <FoodCard name="Apple" img={apple} calories={90} attr_1="High Protein" attr_2="Affordable" />,
                </div> 
                <div className="carousel-item">
                    <FoodCard name="Oats" img={oats} calories={90} attr_1="High Protein" attr_2="Affordable" />,
                </div> 
                <div className="carousel-item">
                    <FoodCard name="Chicken" img={chicken} calories={90} attr_1="High Protein" attr_2="Affordable" />,
                </div> 
                <div className="carousel-item">
                    <FoodCard name="Chicken" img={chicken} calories={90} attr_1="High Protein" attr_2="Affordable" />,
                </div> 
                <div className="carousel-item">
                    <FoodCard name="Chicken" img={chicken} calories={90} attr_1="High Protein" attr_2="Affordable" />,
                </div> 
                <div className="carousel-item">
                    <FoodCard name="Chicken" img={chicken} calories={90} attr_1="High Protein" attr_2="Affordable" />,
                </div> 
            </div>            
        </div>

    )
}

export default slider