import React from "react";
import MainHero from "../components/mainHero";
import About from "../components/about";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Suggestions from "../components/suggestions";
import SampleStats from "../components/sampleStats";

const Home = () => {


    return(
        <div className="bg-base-100">
            <Nav />
            <MainHero />
            <About />
            <Suggestions />
            <SampleStats />
            <Footer />
        </div>
    )
}

export default Home