import Nav from "../components/sections/nav";
import Footer from "../components/sections/footer";
import { useState } from "react";
import Results from "../components/sections/browse/results";

const Browse = () => {

    const [isQuery, setQuery] = useState("");

    return (
        <>
            <Nav />

            <section className="hero-gradient min-h-72 pt-32 p-8 flex">
                {/* hero search */}
                <div className="m-auto w-full max-w-xl">
                    {/* searchbar */}
                    <div>
                        <h1 className="text-4xl text-white font-black mb-4"> Browse </h1>
                        <p className="text-white"> Pick from a curated list of hundreds of foods.</p>
                        <div className="flex max-w-xl mt-6">
                            <input className="input w-full" placeholder="apples, carrots, grapes ..." onChange={(e) => setQuery(e.target.value)}/>
                        </div>                        
                    </div>

                </div>
            </section>

            {/* if search bar is activated, Results will take props */}
            <Results query={isQuery} />
            
            <Footer />
        </>
    )
}

export default Browse