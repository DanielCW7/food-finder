import React from "react";
import Hero from "../components/hero";
import Dashboard from "../components/dashboard";
import Footer from "../components/footer";
import books from '../images/books.jpg'


const Home = () => {

    const bg = {backgroundImage: `url(${books})`}

    return(
        <div>
            <Hero background={bg} />
            <Dashboard />
            <Footer />
        </div>
    )
}

export default Home