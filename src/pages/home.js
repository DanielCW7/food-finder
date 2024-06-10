import React from "react";
import MainHero from "../components/mainHero";
import About from "../components/sections/about";
import Nav from "../components/sections/nav";
import Footer from "../components/footer";
import Suggestions from "../components/sections/suggestions";
import SampleStats from "../components/sections/sampleStats";
import SampleCompare from "../components/sections/sampleCompare";
import NewUser from "../components/sections/newUser";

const Home = () => {


    return(
        <div className="bg-base-100">
            <Nav />
            <MainHero />
            <About />
            <SampleStats />            
            <SampleCompare />            
            <Suggestions />
            {/* <NewUser /> */}
            <Footer />
        </div>
    )
}

export default Home