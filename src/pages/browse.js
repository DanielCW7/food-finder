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
            <section className="bg-base-100 flex flex-col sm:flex-row justify-center">
                    <div className="p-4">
                        <form className="border p-4 flex flex-col gap-4">
                            <ul className="filter-list">
                                <li>
                                    <input className="radio" type="radio" for="fruits" />
                                    <label name="fruits"> Fruits </label>
                                </li>
                                <li>
                                    <input className="radio" type="radio"  for="meats" />
                                    <label name="fruits"> Starches </label>
                                </li>
                                <li>
                                    <input className="radio" type="radio"  for="meats" />
                                    <label name="fruits"> Meats </label>
                                </li>
                                <li>
                                    <input className="radio" type="radio"  for="meats" />
                                    <label name="fruits"> Vegetables </label>
                                </li>
                                <li>
                                    <input className="radio" type="radio"  for="meats" />
                                    <label name="fruits"> Nuts </label>
                                </li>
                            </ul>  
                            <hr/>
                            <ul className="filter-list">
                                <li>
                                    <input className="radio" type="radio" for="fruits" />
                                    <label name="fruits"> High to low </label>
                                </li>
                                <li>
                                    <input className="radio" type="radio"  for="meats" />
                                    <label name="fruits"> Low to high </label>
                                </li>

                            </ul>
                            <button className="btn"> Filter </button>                          
                        </form>

                    </div> 


                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 w-max">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>


                    <div> {/* for positioning */} </div>

            </section>
            <Footer />
        </>
    )
}

export default Browse