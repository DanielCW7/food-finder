import React from "react";
import Hero from "../components/hero";
import Dashboard from "../components/dashboard";
import Footer from "../components/footer";
import wishlist from  '../images/wishlist.webp';
import Nav from "../components/nav";

const Wishlist = () => {

    const bg = {backgroundImage: `url(${wishlist})`}

    return(
        <div className="md:grid md:grid-cols-[200px_auto]">
            <Nav /> 
            <div>          
                <Hero background={bg} title="Wishlist" description="Just use the money in your swear jar, sheesh" />
                <Dashboard />
                <Footer />
            </div> 
        </div>
    )
}

export default Wishlist