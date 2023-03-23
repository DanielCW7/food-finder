import React from "react";
import Hero from "../components/hero";
import Dashboard from "../components/dashboard";
import Footer from "../components/footer";
import wishlist from  '../images/wishlist.webp';


const Collection = () => {

    const bg = {backgroundImage: `url(${wishlist})`}

    return(
        <div>
            <Hero background={bg} />
            <Dashboard />
            <Footer />
        </div>
    )
}

export default Collection