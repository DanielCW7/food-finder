import React from "react";
import Hero from "../components/hero";
import books from '../images/books.jpg'
import About from "../components/about";
import Nav from "../components/nav";

const Home = () => {


    return(
        <div className="bg-base-100">
            <Nav />
            <Hero />
            <About />
            {/* hero section */}
            {/* about section */}
            {/* new arrivals */}
            {/* log in form */}
        </div>
    )
}

export default Home