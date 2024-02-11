import React from "react";
import Hero from "../components/hero";
import About from "../components/about";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Arrivals from "../components/arrivals";
import SampleStats from "../components/sampleStats";

const Home = () => {


    return(
        <div className="bg-base-100">
            <Nav />
            <Hero />
            <About />
            <Arrivals />
            <SampleStats />
            <Footer />
        </div>
    )
}

export default Home