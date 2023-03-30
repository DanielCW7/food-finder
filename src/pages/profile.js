import React from "react";
import Hero from "../components/hero";
import Dashboard from "../components/dashboard";
import Footer from "../components/footer";
import booksAlt from '../images/booksAlt.webp'
import Stats from "../components/stats";
import Nav from "../components/nav";

const Profile = () => {

    const bg = {backgroundImage: `url(${booksAlt})`}

    return(
        <div className="md:grid md:grid-cols-[200px_auto]">
            <Nav />
            <div>
                <Hero background={bg}  title="Profile" />
                <Stats />
                <Footer />
            </div>
        </div>
    )
}

export default Profile