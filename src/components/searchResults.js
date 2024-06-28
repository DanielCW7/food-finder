// For the browse page
import { useState } from "react"
import chicken from "../images/chicken.jpg";
import apple from "../images/apples.jpg";
import oats from "../images/oats.jpg";
import berries from "../images/berries.webp"
import FoodCard from "./foodCard";
import ExtFoodCard from "./extFoodCard";

const SearchResults = () => {

    // manage current state of the table here - both tables will revceive the same array of data
    const [isData, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [isAllChecked, setChecked] = useState(false)


    const sampleArray = [
        {"food":"apple", "calories": 90, "category": "fruit", "image": chicken},
        {"food":"chicken", "calories": 93450, "category": "poultry", "image": apple},
        {"food":"orange", "calories": 90, "category": "fruit", "image": oats},
        {"food":"rice", "calories": 9052, "category": "fruit", "image": chicken},
        {"food":"pickle", "calories": 950, "category": "vegetable", "image": apple},

    ]

    let gridView = 
        <table className="table table-zebra">
            <thead>
                <tr>
                    <th>
                        <label>
                            {/* if checked, un-check/check all boxes */}
                            <input type="checkbox" className="checkbox checkbox-sm" checked={isAllChecked} onChange={() => setChecked(!isAllChecked)}/>
                        </label>
                    </th>
                    <th></th>
                    <th> Food </th>
                    <th> Calories </th>
                    <th> Category </th>
                    
                </tr>
            </thead>

            <tbody>
                {
                    sampleArray.map(item => {
                        return (
                            <tr>
                                {/* make a drawer, easier to set up links for individual foods */}
                                <td><input type="checkbox" className="checkbox checkbox-sm" /></td>
                                <td><img src={item?.image ?? apple} className="img-square w-12 md:w-28 h-12 md:h-28 rounded-xl"/></td>
                                <td><p>{item.food} </p></td> 
                                <td><p>{item.calories} </p></td> 
                                <td><p>{item.category} </p></td> 
                            </tr>  
                        )
                    })
                
                }            
            </tbody>

        </table>

    return (
        
        <div className="container mx-auto p-8">

            <div className="flex gap-2 sticky top-16 bg-base-100 z-20 py-4 join">


                {/* filter options */}
                <div className="join flex w-full">
                    {/* use JOIN to group filter options / search / form submits */}
                    <label className="flex-1 input input-bordered input-md flex items-center rounded-xl focus:border-warning join-item">
                        <input type="text" className="grow bg-base-100" placeholder="Search by name" />                             
                    </label> 
                    <div className="flex gap-8 join-item">

                        <label for="filter-options" className="input input-bordered input-md flex items-center rounded-xl focus:border-warning join-item">
                            <select className="grow bg-base-100" name="filter-options" id="filter-options">
                                <option> Fruit & Vegetable </option>
                                <option> Starch </option>
                                <option> Protein </option>
                                <option> Dairy </option>
                                <option> Fat </option>
                            </select>                  
                        </label>                   
                    </div>
                    <button className="join-item btn btn-secondary rounded-xl"> 
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </button>                    
                </div>
            </div>


            {/* pagination */}
            <div className="flex flex-wrap justify-starts">
                <ExtFoodCard heart={true} name="Apple" img={apple} calories={90} attr_1="Vitamin C" attr_2="Energy" attr_3="Fiber" fat={30} protein={0} carbs={70} />
                <ExtFoodCard heart={true} name="Chicken" img={chicken} calories={150} attr_1="Protein" attr_2="" attr_3="" fat={10} protein={80} carbs={10} />
                <ExtFoodCard heart={true} name="Oats" img={oats} calories={120} attr_1="Fiber" attr_2="Heart healthy" attr_3="Lower cholesterol" fat={20} protein={0} carbs={80} />
                <ExtFoodCard heart={true} name="Mixed berries" img={berries} calories={120} attr_1="Fiber" attr_2="Heart healthy" attr_3="" fat={20} protein={0} carbs={80} />
            </div>

            {/* {isData ? gridView : null} */}
            {/* no data UI */}
                        
        </div>

    )
}

export default SearchResults