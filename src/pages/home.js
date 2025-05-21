import React from "react";
import Nav from "../components/sections/nav";
import Footer from "../components/sections/footer";
import Hero from "../components/sections/hero";
import About from "../components/sections/home/about";
import QuickStats from "../components/sections/home/quickStats";
import Compare from "../components/sections/home/compare";

const Home = () => {


    return(
        <div className="bg-base-100">
            <Nav />
            <Hero />
            <About />
            <QuickStats />
            <Compare />
            <Footer />
        </div>
    )
}

export default Home