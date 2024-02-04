import React from "react";
import books from '../images/books.jpg';
import booksAlt from '../images/booksAlt.webp'
import collection from '../images/collection.webp'
import favorites from '../images/favorite.webp';
import wishlist from  '../images/wishlist.webp';

const Hero = (props) => {

    return (
        <div className="hero container mx-auto min-h-70h">
            <div className="hero-content prose lg:prose-lg ">
                <div>
                    <h1 className=""> Comic Collector </h1>
                    <p className=""> What are you waiting for?</p>
                    <button className="btn btn-primary"> Jump In </button>                     
                </div>
            </div>
        </div>
    )
}

export default Hero