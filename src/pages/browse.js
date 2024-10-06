import Nav from "../components/sections/nav";
import Footer from "../components/footer";
import { useState } from "react";
import Card from "../components/sections/browse/card";

const Browse = () => {

    const [isResults, setResults] = useState([]);


    return (
        <>
            <Nav />

            <section className="bg-base-300 min-h-72 p-8 flex">
                {/* hero search */}
                <div className="m-auto w-full max-w-xl">
                    {/* searchbar */}
                    <h1 className="text-4xl"> Browse </h1>
                    <p> Pick from a curated list of hundreds of foods.</p>
                    {/* food slider? food picture switcher? */}
                    <div className="form-control join join-horizontal flex max-w-xl mt-6">
                        <input className="input join-item w-full" />
                        <button className="btn join-item"> search </button>
                    </div>
                </div>
            </section>
            <section className="bg-red-200">
                {/* collection of items, populated via search results */}
                <div className="grid md:grid-template-3">
                    <Card />
                    <Card />
                    <Card />
                    <Card />                    
                </div>

            </section>
            <Footer />
        </>
    )
}

export default Browse