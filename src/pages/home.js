import React from "react";
import MainHero from "../components/mainHero";
import About from "../components/sections/about";
import Nav from "../components/sections/nav";
import Footer from "../components/footer";
import Suggestions from "../components/sections/suggestions";
import SampleStats from "../components/sections/sampleStats";
import Compare from "../components/sections/compare";

const Home = () => {


    return(
        <div className="bg-base-100">
            <Nav />
            <MainHero />
            <About />
            <SampleStats />            
            <Compare />            
            <Suggestions />
            <Footer />
        </div>
    )
}

export default Home