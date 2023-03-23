import React from "react";
import Hero from "../components/hero";
import Dashboard from "../components/dashboard";
import Footer from "../components/footer";
import booksAlt from '../images/booksAlt.webp'


const News = () => {

    const bg = {backgroundImage: `url(${booksAlt})`}

    return(
        <div>
            <Hero background={bg}/>
            <Dashboard />
            <Footer />
        </div>
    )
}

export default News