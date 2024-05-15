// For the browse page
import { useState } from "react"
import chicken from "../images/chicken.jpg";
import apples from "../images/apples.jpg";
import oats from "../images/oats.jpg";


const SearchResults = () => {

    // manage current state of the table here - both tables will revceive the same array of data
    const [isData, setData] = useState([]);
    const [isLoading, setLoading] = useState(true)

    const sampleArray = [
        {"food":"apple", "calories": 90, "category": "fruit", "image": chicken},
        {"food":"chicken", "calories": 93450, "category": "poultry", "image": apples},
        {"food":"orange", "calories": 90, "category": "fruit", "image": oats},
        {"food":"rice", "calories": 9052, "category": "fruit", "image": chicken},
        {"food":"pickle", "calories": 950, "category": "poultry", "image": apples},

    ]

    let gridView = 
        <table className="table table-zebra">
            <thead>
                <tr>
                    <th>
                        <label>
                            {/* if checked, un-check/check all boxes */}
                            <input type="checkbox" className="checkbox"/>
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
                                <td><input type="checkbox" className="checkbox" /></td>
                                <td><img src={item?.image ?? apples} className="img-square w-12 md:w-28 h-12 md:h-28 rounded-xl"/></td>
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

            <div className="flex gap-2 sticky top-16 bg-base-100 z-20 py-4">


                {/* filter options */}
                <div>
                    {/* use JOIN to group filter options / search / form submits */}
                    <label className="input input-bordered input-md flex items-center rounded-xl focus:border-warning">
                        <input type="text" className="grow bg-base-100" placeholder="Search by name" />                             
                    </label>                    
                </div>


                <div className="flex gap-8">
                    
                    <div className="flex gap-2"><input type="radio" name="name-1" className="radio radio-xs my-auto"/>
                    <label className="my-auto"> Fruit & Vegetable </label></div>
                    <div className="flex gap-2"><input type="radio" name="name-1" className="radio radio-xs my-auto"/>
                    <label className="my-auto"> Starch </label></div>
                    <div className="flex gap-2"><input type="radio" name="name-1" className="radio radio-xs my-auto"/>
                    <label className="my-auto"> Protein </label></div>
                    <div className="flex gap-2"><input type="radio" name="name-1" className="radio radio-xs my-auto"/>
                    <label className="my-auto"> Dairy </label></div>
                    <div className="flex gap-2"><input type="radio" name="name-1" className="radio radio-xs my-auto"/>
                    <label className="my-auto"> Fat </label></div>                    
                </div>

            </div>


            {/* pagination */}

            {isData ? gridView : null}
                        
        </div>

    )
}

export default SearchResults