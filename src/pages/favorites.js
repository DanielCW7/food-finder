import React from "react";
import Hero from "../components/hero";
import Dashboard from "../components/dashboard";
import Footer from "../components/footer";
import favorites from '../images/favorite.webp';
import Nav from "../components/nav";


const Favorites = () => {

    const bg = {backgroundImage: `url(${favorites})`}

    return(
        <div className="md:grid md:grid-cols-[200px_auto]">
            <Nav /> 
            <div>            
                <Hero background={bg} title="Favorites" description="The best of the best!" />
                <Dashboard />
                <Footer />
            </div>
        </div>
    )
}

export default Favorites