import Nav from "../components/sections/nav";
import Footer from "../components/footer";
import { useState } from "react";
import Results from "../components/sections/browse/results";

const Browse = () => {

    const [isQuery, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let search = e.target.elements[0].value;

        setQuery(search);
    }

    return (
        <>
            <Nav />

            <section className="hero-gradient min-h-72 pt-32 p-8 flex">
                {/* hero search */}
                <div className="m-auto w-full max-w-xl">
                    {/* searchbar */}
                    <form onSubmit={handleSubmit}>
                        <h1 className="text-4xl text-white"> Browse </h1>
                        <p className="text-white"> Pick from a curated list of hundreds of foods.</p>
                        {/* food slider? food picture switcher? */}
                        <div className="form-control join join-horizontal flex max-w-xl mt-6">
                            <input className="input join-item w-full" />
                            <button type="submit" className="btn btn-primary join-item"> search </button>
                        </div>                        
                    </form>

                </div>
            </section>

            {/* if search bar is activated, Results will take props */}
            <Results query={isQuery} />
            
            <Footer />
        </>
    )
}

export default Browse