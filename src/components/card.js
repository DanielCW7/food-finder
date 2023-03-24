import React from "react";
import cover from '../images/cover.png'

const Card = (props) => {

    const bg = {backgroundImage: `url(${cover})`}

    return (
        
        <div className="flex flex-row justify-center max-w-sm">
                <img className="aspect-comic w-1/3" src={cover}></img>

                <div className="flex flex-col p-5 bg-gray-100 rounded-xl">
                    <h4 className="text-lg"> The Amazing Spiderman </h4>
                    <p> #129 </p>
                    <p> series: the Amazing Spiderman </p>
                    <div> rating? owned? favorited? wishlisted? </div>                        
                </div>
        </div>
    )
}

export default Card