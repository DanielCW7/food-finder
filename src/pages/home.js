import React from "react";
import Hero from "../components/hero";
import About from "../components/about";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Arrivals from "../components/arrivals";

const Home = () => {


    return(
        <div className="bg-base-100">
            <Nav />
            <Hero />
            <About />
            <Arrivals />
            {/* log in form */}
            {/* stat UI */}
            <Footer />
        </div>
    )
}

export default Home