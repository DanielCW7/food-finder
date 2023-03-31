import React from "react";
import cover from '../images/cover.png';
import Badges from './badges';
const Card = (props) => {

    const bg = {backgroundImage: `url(${cover})`}

    return (
        
        <div className="flex flex-row justify-center max-w-sm relative">
                <img className="aspect-comic w-1/3 rounded-2xl shadow-xl" src={cover}></img>

                <div className="flex flex-col justify-start px-5 w-2/3">
                    <h4 className="text-lg"> The Amazing Spiderman </h4>
                    <span className="font-black border w-max px-2 py-1 rounded-full"> #129 </span>
                    <p> Mar. 1969 </p>
                    <p> MARVEL Comics </p>
                    <p> Read Synopsis </p>
                    <Badges />
                </div>
        </div>
    )
}

export default Card