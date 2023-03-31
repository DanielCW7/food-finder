import React from "react";
import background from '../images/booksAlt.webp'
import wishlist from '../images/wishlist.webp'

const ProfileHeader = () => {

    // variable that stores the profile pic image
    return (
        <div style={{backgroundImage: `url(${background})`}} className="min-h-40h md:min-h-50h flex flex-col justify-center bg-cover">
            <div style={{backgroundImage: `url(${wishlist})`}} className="rounded-full border border-4 h-32 w-32 bg-cover mx-auto bg-center"></div>
            <h2 className="text-center text-white font-bold text-3xl"> Connor </h2>
        </div>
    )
}

export default ProfileHeader