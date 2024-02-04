import React from "react";
import Hero from "../components/hero";
import books from '../images/books.jpg'
import About from "../components/about";

const Home = () => {


    return(
        <div className="bg-gradient-to-r from-gray-800 to-gray-900">
            <div className="">
                <Hero />
                <About />                
            </div>
            {/* hero section */}
            {/* about section */}
            {/* new arrivals */}
            {/* log in form */}
        </div>
    )
}

export default Home