import Nav from "../components/sections/nav";
import Footer from "../components/footer";
import { useState } from "react";
import Card from "../components/sections/browse/card";

const Browse = () => {

    const [isResults, setResults] = useState([]);


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
            <section className="bg-base-100 flex flex-col">
                    <div className="p-4">
                        <form className="flex flex-col justify-center">
                           
                           <div className="p-4 flex flex-col sm:flex-row gap-2 sm:m-auto">
                            <div className="flex flex-col">
                                    <label> Only Show: </label>
                                    <select className="select select-sm select-primary w-full">
                                        <option disabled selected> Food Type </option>
                                        <option> None </option>
                                        <option> Vegetables </option>
                                        <option> Meats </option>
                                        <option> Starches </option>
                                        <option> Nuts </option>
                                    </select>                            
                            </div>

                            <div className="flex flex-col">
                                    <label> Focus On: </label>
                                    <select className="select select-sm select-primary w-full">
                                        <option disabled selected> Macronutrients </option>
                                        <option> None </option>
                                        <option> Proteins </option>
                                        <option> Fats </option>
                                        <option> Carbohydrates </option>
                                    </select>                                
                                </div>

                                <div className="flex flex-col">
                                    <label> Arrange from: </label>
                                    <select className="select select-sm select-primary w-full">
                                        <option disabled selected> Nutrient Quantity </option>
                                        <option> None </option>
                                        <option> High to low </option>
                                        <option> Low to High </option>
                                    </select>                            
                                </div>                             
                           </div>
     


                            <button className="btn btn-sm btn-wide m-auto"> Sort </button>                          
                        </form>

                    </div> 


                    <div className="m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-max">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                    <div className="m-auto join">
                        <input
                            className="join-item btn btn-square"
                            type="radio"
                            name="options"
                            aria-label="1"
                         />
                        <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                        <input className="join-item btn btn-square" type="radio" name="options" aria-label="..." />
                        <input className="join-item btn btn-square" type="radio" name="options" aria-label="25" />
                    </div>
            </section>
            <Footer />
        </>
    )
}

export default Browse