// slider for 'suggestions' component
// slider receives an array of objects - use typescript if possible to define the shape
import FoodCard from "./foodCard";
import chicken from "../images/chicken.jpg"
import apple from "../images/apples.jpg"
import oats from "../images/oats.jpg"

const slider = (array) => {
    const len = array.length;


    return (
        <div className="flex justify-center flex-wrap">
            <div className="carousel rounded-box gap-8">
                <div className="carousel-item">
                    <FoodCard name="Chicken" img={chicken} calories="90 calories per lb." attr_1="High Protein" attr_2="Affordable" />,
                </div> 
                <div className="carousel-item">
                    <FoodCard name="Oats" img={oats} calories="90 calories per cup" attr_1="High Fiber" attr_2="Affordable" />
                </div> 
                <div className="carousel-item">
                    <FoodCard name="Apples" img={apple} calories="90 calories each" attr_1="High Fiber" attr_2="Vit. C" />
                </div> 
                <div className="carousel-item">
                    <FoodCard name="Apples" img={apple} calories="90 calories each" attr_1="High Fiber" attr_2="Vit. C" />            
                </div> 
                <div className="carousel-item">
                    <FoodCard name="Apples" img={oats} calories="90 calories each" attr_1="High Fiber" attr_2="Vit. C" />            
                </div> 
                <div className="carousel-item">
                    <FoodCard name="Apples" img={oats} calories="90 calories each" attr_1="High Fiber" attr_2="Vit. C" />            
                </div> 
                <div className="carousel-item">
                    <FoodCard name="Apples" img={oats} calories="90 calories each" attr_1="High Fiber" attr_2="Vit. C" />            
                </div> 
                <div className="carousel-item">
                    <FoodCard name="Apples" img={oats} calories="90 calories each" attr_1="High Fiber" attr_2="Vit. C" />            
                </div> 
                <div className="carousel-item">
                    <FoodCard name="Apples" img={oats} calories="90 calories each" attr_1="High Fiber" attr_2="Vit. C" />            
                </div> 
                <div className="carousel-item">
                    <FoodCard name="Apples" img={oats} calories="90 calories each" attr_1="High Fiber" attr_2="Vit. C" />            
                </div> 
            </div>            
        </div>

    )
}

export default slider