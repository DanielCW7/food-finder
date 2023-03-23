import React from "react";
import books from '../images/books.jpg';
import booksAlt from '../images/booksAlt.webp'
import collection from '../images/collection.webp'
import favorites from '../images/favorite.webp';
import wishlist from  '../images/wishlist.webp';

const Hero = (props) => {

    console.log(props.background)

    return (
        <div style={props.background} className="bg-cover bg-bottom">
            <div className="min-h-30h md:min-h-40h flex flex-col justify-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white text-center"> Comic Finder </h1>
                <p className="font-bold text-white text-center"> the best tool for managing your comic books </p>
            </div>
        </div>
    )
}

export default Hero