import React from "react";
import Hero from "../components/hero";
import Sidebar from "../components/sideBar";
import Dashboard from "../components/dashboard";
import Footer from "../components/footer";


const Home = () => {
    return(
        <div className="grid md:grid-cols-5">
                <div className="col-span-1 border border-red-500">
                    <Sidebar />
                </div>
                <div className="col-span-4">
                    <Hero />
                    <Dashboard />
                    <Footer />
                </div>
        </div>
    )
}

export default Home