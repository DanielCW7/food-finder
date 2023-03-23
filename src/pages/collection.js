import React from "react";
import Hero from "../components/hero";
import Dashboard from "../components/dashboard";
import Footer from "../components/footer";
import collection from '../images/collection.webp'


const Collection = () => {

    const bg = {backgroundImage: `url(${collection})`}

    return(
        <div>
            <Hero background={bg} />
            <Dashboard />
            <Footer />
        </div>
    )
}

export default Collection