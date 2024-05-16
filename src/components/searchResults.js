// For the browse page
import { useState } from "react"
import chicken from "../images/chicken.jpg";
import apple from "../images/apples.jpg";
import oats from "../images/oats.jpg";
import FoodCard from "./foodCard";

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
            <div className="grid gap-2">
                <div className="flex flex-row border-b border-gray-600 p-8">
                    <FoodCard name="apple" img={apple} calories="90 calories each" />
                    
                    <div className="flex flex-col flex-1">
                        <div className="flex flex-row flex-1 p-2">
                            <ul className="w-auto mr-2">
                                <li>Carbs</li>
                                <li>Protein</li>
                                <li>Fat</li>
                            </ul>
                            <ul className="flex-1">
                                <li><progress className="progress progress-accent" value={50} max="100"></progress></li>
                                <li><progress className="progress progress-secondary" value={10} max="100"></progress></li>
                                <li><progress className="progress progress-primary" value={40} max="100"></progress></li>
                            </ul>
                            

                            {/* stats : nutrition, macros, related foods, calories per 100mg */}
                            {/* links to related foods by group, recipes available, actions */}
                            
                        </div> 
                        <div className="p-2">
                            <p> Good for: </p>
                            <ul>
                                <li className="flex flex-row"> 
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-success">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    Vitamin C. 
                                </li>
                                <li className="flex flex-row"> 
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-success">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    Energy
                                </li>                                
                                <li className="flex flex-row "> 
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-success">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    Fiber 
                                </li>
                            </ul>
                            <a className="link"> More Info </a>
                        </div>                       
                    </div>

                </div>
            </div>

            {/* {isData ? gridView : null} */}
            {/* no data UI */}
                        
        </div>

    )
}

export default SearchResults