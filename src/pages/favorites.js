import React from "react";
import Hero from "../components/hero";
import Dashboard from "../components/dashboard";
import Footer from "../components/footer";
import favorites from '../images/favorite.webp';


const Favorites = () => {

    const bg = {backgroundImage: `url(${favorites})`}

    return(
        <div>
            <Hero background={bg} />
            <Dashboard />
            <Footer />
        </div>
    )
}

export default Favorites