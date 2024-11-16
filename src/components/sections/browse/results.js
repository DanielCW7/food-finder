import { useEffect, useState, useRef } from "react";
import Card from "./card";


const Results = (search) => {

    // if query is present, request from db
    console.log(search.query)

    const [isResults, setResults] = useState([]);
    const [isFiltered, setFilter] = useState([]);
    const [currentPage, setPage] = useState(1);
    const scrollRef = useRef(null);

    const perPage = 16
    const adjusted = perPage * currentPage;

    function getAll() {
        fetch("http://localhost:3000/food")
        .then(res => res.json())
        .then(res => {
            const arr = Array.from(res)
            setResults(arr)
            setFilter(arr)
        })    
    }

    function getCertain(food) {
        fetch(`http://localhost:3000/food/${food}`)
        .then(res => res.json())
        .then(res => {
            const arr = Array.from(res)
            setFilter(arr)
        })    
    }

    useEffect(() => {
        console.log(search)
        try {
            if(search === "") {
                getAll()
            } else {
                getAll()  
            }
        } catch (err) {
            console.error(err)
        }
    }, [search])

    // scroll upward when a new page is requested
    const scrollTop = () => scrollRef.current && scrollRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});

    // creating cards from results
    function populate(params) {
        let reduced = params.slice(adjusted - perPage, adjusted)
        const foods = reduced.map(food => <Card props={food} key={food.food_name}/>)            
        return foods
    }

    // filter search results based on params
    function filter(p) {
        p.preventDefault()
        
        // prep results fo filter by referencing original search results
        setResults(isFiltered)
        let food = p.target[0].value
        let nutrient = p.target[1].value
        let sort = p.target[2].value

        const mod = []
        isResults.map(e => {
            // test the food item within the given params
            // console.log(e)
        })
    }

    return (
        <section className="bg-base-100 flex flex-col" id="search_results">
            <div className="p-4" ref={scrollRef}>
                <form className="flex flex-col justify-center" onSubmit={filter}>
                
                    <div className="p-4 flex flex-row gap-2 m-auto">
                        <div className="flex flex-col">
                            <label> Only show: </label>
                            <select className="select select-sm select-primary w-full">
                                <option disabled defaultValue> Food Type </option>
                                <option value={null}> All foods </option>
                                <option value="Fruits"> Fruits </option>
                                <option value="Vegetables"> Vegetables </option>
                                <option value="Meats"> Meats </option>
                                <option value="Starches"> Starches </option>
                                <option value="Nuts"> Nuts </option>
                                <option value="Legumes"> Legumes </option>
                            </select>                            
                        </div>

                        <div className="flex flex-col">
                            <label> Focusing on: </label>
                            <select className="select select-sm select-primary w-full">
                                <option disabled defaultValue> Nutrients </option>
                                <option value={null}> All nutrients </option>
                                <option value="Protein"> Protein </option>
                                <option value="Fat"> Fat </option>
                                <option value="Carbohydrate"> Carbohydrate </option>
                                <option value="Calories"> Calories </option>
                                <option value="Cholesterol"> Cholesterol </option>
                                <option value="Fiber"> Fiber </option>
                                <option value="A"> Vitamin A </option>
                                <option value="B2"> Vitamin B2 </option>
                                <option value="B6"> Vitamin B6 </option>
                                <option value="B12"> Vitamin B12 </option>
                                <option value="C"> Vitamin C </option>
                                <option value="D"> Vitamin D </option>
                                <option value="E"> Vitamin E </option>
                                <option value="K"> Vitamin K </option>
                            </select>                                
                        </div>

                        <div className="flex flex-col">
                            <label> Sort by: </label>
                            <select className="select select-sm select-primary w-full">
                                <option disabled defaultValue> Nutrients </option>
                                <option value={null}> None </option>
                                <option value="H2L"> High to low </option>
                                <option value="L2H"> Low to High </option>
                            </select>                            
                        </div> 
                                                    
                    </div>

                    <button className="btn btn-sm btn-wide m-auto"> Sort </button>                          
                </form>
            </div> 
            <div className="m-auto mb-8 flex flex-row gap-2"> 
                <span> Page {currentPage}  </span>
                <sub> <div className={`badge ${(isResults.length > 0) ? 'badge-success' : 'badge-error'} badge-outline`}>{isResults.length}</div> results </sub>
            </div>
        {
            isResults.length > 0 ?
            <div className="m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 w-max p-8">
                {populate(isFiltered)}                 
            </div> :
            <div className="p-8 my-8">
                <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 m-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                    </svg>

                    <h2 className="text-2xl text-center"> No Results...  </h2>
                    <p className="text-sm text-center"> try broadening your search. </p>
                </div>  
            </div>                                       
        }

            <div className="m-auto mb-8 flex flex-row gap-2"> 
                <span> Page {currentPage}  </span>
                <sub> <div className={`badge ${(isResults.length > 0) ? 'badge-success' : 'badge-error'} badge-outline`}>{isResults.length}</div> results </sub>
            </div>

            <div className="m-auto join">
                {/* 15 results per page */}
                <input
                    className={`join-item btn ${currentPage < 2 ? "btn-disabled" : null}`}
                    type="radio"
                    name="options"
                    aria-label="Previous"
                    onClick={() => {
                        setPage(currentPage - 1);
                        scrollTop()
                    }}
                />
                <input 
                    className={`join-item btn ${(isResults.length / perPage) < (currentPage) && "btn-disabled"}`}
                    type="radio" 
                    name="options" 
                    aria-label={"Next"} 
                    onClick={() => {
                        setPage(currentPage + 1)
                        scrollTop()
                    }} 
                />
            </div>
        </section>
    )
}

export default Results