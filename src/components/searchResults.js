// For the browse page
import { useState } from "react"


const SearchResults = () => {

    // manage current state of the table here - both tables will revceive the same array of data
    const [isToggled, setToggle] = useState(false);

    const sampleArray = [
        {"food":"apple", "calories": 90, "category": "fruit"},
        {"food":"chicken", "calories": 93450, "category": "poultry"},
        {"food":"orange", "calories": 90, "category": "fruit"},
        {"food":"rice", "calories": 9052, "category": "fruit"},
        {"food":"pickle", "calories": 950, "category": "poultry"},
        {"food":"bread", "calories": 90, "category": "fruit"},
        {"food":"lentils", "calories": 9250, "category": "fruit"},
        {"food":"bananas", "calories": 920, "category": "poultry"},
        {"food":"grapes", "calories": 90, "category": "fruit"},
    ]

    let gridView = 
        <table className="table">
            <th>
                <tr>
                    <th>
                        <label>
                            <input type="checkbox" />
                        </label>
                    </th>
                    <th> Food </th>
                    <th> Calories </th>
                    <th> Nutrition Category </th>
                </tr>
            </th>
            <tbody>
                {
                    sampleArray.map(item => {
                        return (
                            <tr>
                                <th>
                                    <input type="checkbox" />
                                </th>
                            <td><div>{item.food} </div></td> 
                            <td><div>{item.calories} </div></td> 
                            <td><div>{item.category} </div></td> 
                            </tr>  
                        )
                    })
                
                }            
            </tbody>

        </table>
    return (
        
        <div className="container mx-auto">
            <label className="swap">
                <input type="checkbox" onClick={() => setToggle(!isToggled)}/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="swap-on w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="swap-off w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125Z" /></svg>
            </label>

            <h2> {isToggled ? "GRID" : "COLUMN"} </h2>
            {isToggled ? gridView : "COLUMN"}
                        
        </div>

    )
}

export default SearchResults