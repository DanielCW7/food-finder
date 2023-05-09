import React from "react";
import Hero from "../components/hero";
import Dashboard from "../components/dashboard";
import Footer from "../components/footer";
import collection from '../images/collection.webp'
import CollectionSection from "../components/collectionSection";
import Nav from "../components/nav";

const Collection = () => {

    const bg = {backgroundImage: `url(${collection})`}

    return(
        <div className="md:grid md:grid-cols-[200px_auto]">
            <Nav /> 
            <div>            
                <Hero background={bg} title="Collections" description="This is everything!"/>
                <CollectionSection />
                <Footer />
            </div>
            <span />
        </div>
    )
}

export default Collection