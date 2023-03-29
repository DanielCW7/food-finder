import React from "react";
import cover from '../images/cover.png'

const Card = (props) => {

    const bg = {backgroundImage: `url(${cover})`}

    return (
        
        <div className="flex flex-row justify-center max-w-sm">
                <img className="aspect-comic w-1/3" src={cover}></img>

                <div className="flex flex-col justify-start p-5 bg-gray-100">
                    <h4 className="text-lg"> The Amazing Spiderman </h4>
                    <p className="font-black"> #129 </p>
                    <p> Mar 1969 </p>
                    <ul className="border flex justify-between"> 
                        <li> favorite? add! </li>
                        <li> wishlist </li>
                        <li> owned </li>
                    </ul>                        
                </div>
        </div>
    )
}

export default Card