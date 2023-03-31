import React from "react";
import Footer from "../components/footer";
import booksAlt from '../images/booksAlt.webp'
import Stats from "../components/stats";
import Nav from "../components/nav";
import ProfileHeader from "../components/profileHeader";

const Profile = () => {

    const bg = {backgroundImage: `url(${booksAlt})`}

    return(
        <div className="md:grid md:grid-cols-[200px_auto]">
            <Nav />
            <div>
                <ProfileHeader />
                <Stats />
                <Footer />
            </div>
        </div>
    )
}

export default Profile