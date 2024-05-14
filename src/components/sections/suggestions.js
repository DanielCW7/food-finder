import chicken from "../../images/chicken.jpg"
import apple from "../../images/apples.jpg"
import oats from "../../images/oats.jpg"
import FoodCard from "../foodCard"
import Slider from "../../components/slider"

const Suggestions = () => {
// will receive an array of healthy food items
    
    return (
        <div className="bg-base-200 min-h-half flex flex-col justify-center">
            <div className="container mx-auto p-8">
                <div className="mx-auto text-center mb-16 block prose lg:prose-lg">
                    <h2 className="text-center mb-4"> Level up your eating. </h2>
                </div>

                <Slider />
                {/* populated via array */}
                {/* <FoodCard name="Chicken" img={chicken} calories="90 calories per lb." attr_1="High Protein" attr_2="Affordable" />,
                <FoodCard name="Oats" img={oats} calories="90 calories per cup" attr_1="High Fiber" attr_2="Affordable" />
                <FoodCard name="Apples" img={apple} calories="90 calories each" attr_1="High Fiber" attr_2="Vit. C" />
                <FoodCard name="Apples" img={apple} calories="90 calories each" attr_1="High Fiber" attr_2="Vit. C" /> */}


            </div>
        </div>
    )
}

export default Suggestions