import React from "react";
import books from '../images/books.jpg';
import booksAlt from '../images/booksAlt.webp'
import collection from '../images/collection.webp'
import favorites from '../images/favorite.webp';
import wishlist from  '../images/wishlist.webp';

const Hero = (props) => {

    return (
        <div className="container bg-gray-800 bg-opacity-50 prose lg:prose-lg h-96">
            <div className="border-blue-900 border-1">
                <h1 className=""> Comic Collector </h1>
                <p> What are you waiting for?</p>
                <button className="btn btn-primary"> Primary </button>                
            </div>


        </div>
    )
}

export default Hero