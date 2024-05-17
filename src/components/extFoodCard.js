
import FoodCard from "./foodCard";
import chicken from "../images/chicken.jpg";
import apple from "../images/apples.jpg";
import oats from "../images/oats.jpg";

const ExtFoodCard = (props) => {
 
    // need some math operations here to convert to calories per X mg
    return (
        <div className="flex flex-row border-b border-gray-600 p-8 w-2xl w-full lg:w-1/2 xl:w-1/3">
            <FoodCard heart={props.heart} name={props.name ?? "Undefined"} img={props.img ?? null} calories={props.calories ?? "unknown"} />
            <div className="flex flex-col flex-1">
                <div className="flex flex-row flex-1 p-2">
                    <ul className="w-auto mr-2">
                        <li>Carbs</li>
                        <li>Protein</li>
                        <li>Fat</li>
                    </ul>
                    <ul className="flex-1">
                        <li><progress className="progress progress-accent" value={props.carbs} max="100"></progress></li>
                        <li><progress className="progress progress-secondary" value={props.protein} max="100"></progress></li>
                        <li><progress className="progress progress-primary" value={props.fat} max="100"></progress></li>
                    </ul>
                    

                    {/* stats : nutrition, macros, related foods, calories per 100mg */}
                    {/* links to related foods by group, recipes available, actions */}
                    
                </div> 
                <div className="p-2">
                    <p> Good for: </p>
                    <ul>
                        {
                            props.attr_1 
                            ? <li className="flex flex-row"> 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-success">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                {props.attr_1} 
                                </li> 
                            : null
                        }
                        {   props.attr_2 
                            ? <li className="flex flex-row"> 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-success">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                {props.attr_2} 
                                </li> 
                            : null
                        }                                
                        {
                            props.attr_3 
                            ? <li className="flex flex-row"> 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-success">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                                {props.attr_3} 
                                </li> 
                            : null
                        }
                    </ul>
                    <a className="link"> More Info </a>
                </div>                       
            </div>
        </div>        
    )
}

export default ExtFoodCard