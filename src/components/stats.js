import React from "react";

const Stats = () => {
    return (
        <div className="p-5 md:p-10 flex flex-col justify-content">
            <div className="flex flex-row justify-evenly gap-20 border">
                <div className="flex flex-col text-center">
                    <h2 className="text-xl"> Owned </h2>
                    <span className="text-5xl lg:text-7xl font-black text-green-500"> 250 </span>
                </div>   
                <div className="flex flex-col text-center">
                    <h2 className="text-xl"> Favorites </h2>
                    <span className="text-5xl lg:text-7xl font-black text-green-500"> 70 </span>
                </div>  
                <div className="flex flex-col text-center">
                    <h2 className="text-xl"> Wishlist </h2>
                    <span className="text-5xl lg:text-7xl font-black text-green-500"> 50 </span>
                </div>           
            </div>

        </div>
    )
}

export default Stats