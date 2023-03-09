import React from "react";
import Hero from "../components/hero";
import Sidebar from "../components/sideBar";
import Dashboard from "../components/dashboard";
import Footer from "../components/footer";


const Home = () => {
    return(
        <div className="">
            <div className="fixed">
                <Sidebar />
            </div>
            <div>
                <Hero />            
                <Dashboard />
                <Footer />
            </div>
            
        </div>
    )
}

export default Home