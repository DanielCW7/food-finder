import React from "react";
import Hero from "../components/hero";
import Dashboard from "../components/dashboard";
import Footer from "../components/footer";
import books from '../images/books.jpg'
import Nav from "../components/nav";

const Home = () => {

    const bg = {backgroundImage: `url(${books})`}

    return(
        <div className="md:grid md:grid-cols-[200px_auto]">
            <Nav /> 
            <div>             
                <Hero background={bg} title="Comic Book Finder" description="The best tool for managing your comics" />
                <Dashboard />
                <Footer />
            </div>
        </div>
    )
}

export default Home