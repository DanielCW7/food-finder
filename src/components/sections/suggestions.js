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
            </div>
        </div>
    )
}

export default Suggestions