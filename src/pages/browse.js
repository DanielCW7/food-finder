import Nav from "../components/sections/nav";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import Card from "../components/sections/browse/card";

const Browse = () => {

    const [isResults, setResults] = useState([]);
    const [currentPage, setPage] = useState(1);

    const perPage = 15
    const adjusted = perPage * currentPage;

    useEffect(() => {
        try {
            fetch("http://localhost:3000/food")
            .then(res => res.json())
            .then(res => {
                const arr = Array.from(res)
                setResults(arr)
            })
            
        } catch (err) {
            console.error(err)
        }
    }, [])

    function populate(params) {
        console.log(isResults.length / perPage)

        // foods sliced out of results array based on page value
        let reduced = isResults.slice(adjusted - perPage, adjusted)
        
        const foods = reduced.map(food => <Card props={food} />)            

        return foods
    }

    return (
        <>
            <Nav />

            <section className="hero-gradient min-h-72  pt-32 p-8 flex">
                {/* hero search */}
                <div className="m-auto w-full max-w-xl">
                    {/* searchbar */}
                    <h1 className="text-4xl text-white"> Browse </h1>
                    <p className="text-white"> Pick from a curated list of hundreds of foods.</p>
                    {/* food slider? food picture switcher? */}
                    <div className="form-control join join-horizontal flex max-w-xl mt-6">
                        <input className="input join-item w-full" />
                        <button className="btn btn-primary join-item"> search </button>
                    </div>
                </div>
            </section>
            
            <section className="bg-base-100 flex flex-col" id="search_results">
                    <div className="p-4">
                        <form className="flex flex-col justify-center">
                           
                           <div className="p-4 flex flex-col sm:flex-row gap-2 sm:m-auto">
                            <div className="flex flex-col">
                                    <label> Only show: </label>
                                    <select className="select select-sm select-primary w-full">
                                        <option disabled selected> Food Type </option>
                                        <option> None </option>
                                        <option> Fruits </option>
                                        <option> Vegetables </option>
                                        <option> Meats </option>
                                        <option> Starches </option>
                                        <option> Nuts </option>
                                        <option> Legumes </option>
                                    </select>                            
                            </div>

                            <div className="flex flex-col">
                                    <label> Focus on: </label>
                                    <select className="select select-sm select-primary w-full">
                                        <option disabled selected> Nutrients </option>
                                        <option> None </option>
                                        <option> Proteins </option>
                                        <option> Fats </option>
                                        <option> Carbohydrates </option>
                                        <option> Calories </option>
                                        <option> Cholesterol </option>
                                        <option> Fiber </option>
                                        <option> Vitamin A </option>
                                        <option> Vitamin B2 </option>
                                        <option> Vitamin B6 </option>
                                        <option> Vitamin B12 </option>
                                        <option> Vitamin C </option>
                                        <option> Vitamin D </option>
                                        <option> Vitamin E </option>
                                        <option> Vitamin K </option>
                                    </select>                                
                                </div>

                                <div className="flex flex-col">
                                    <label> Arrange by: </label>
                                    <select className="select select-sm select-primary w-full">
                                        <option disabled selected> Nutrients </option>
                                        <option> None </option>
                                        <option> High to low </option>
                                        <option> Low to High </option>
                                    </select>                            
                                </div>                             
                           </div>
     


                            <button className="btn btn-sm btn-wide m-auto"> Sort </button>                          
                        </form>
                    </div> 
                {
                    isResults.length > 0 ?
                    <div className="m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 w-max p-8">
                        {populate(isResults)}                 
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




                    <div className="m-auto mb-8 flex flex-col text-center gap-2"> 
                        <span> Page {currentPage}  </span>
                        <sub> ({isResults.length} results)  </sub>
                    </div>

                    <div className="m-auto join">
                        {/* 15 results per page */}
                        <input
                            className={`join-item btn ${currentPage < 2 ? "btn-disabled" : null}`}
                            type="radio"
                            name="options"
                            aria-label="Previous"
                            onClick={() => setPage(currentPage - 1)}
                        />
                        <input 
                            className={`join-item btn ${(isResults.length / perPage) < (currentPage) && "btn-disabled"}`}
                            type="radio" 
                            name="options" 
                            aria-label={"Next"} 
                            onClick={() => setPage(currentPage + 1)} 
                        />
                    </div>
            </section>
            <Footer />
        </>
    )
}

export default Browse