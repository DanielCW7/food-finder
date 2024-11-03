import Nav from "../components/sections/nav";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import Results from "../components/sections/browse/results";

const Browse = () => {

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
            <Results />
            
            <Footer />
        </>
    )
}

export default Browse