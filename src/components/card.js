import React from "react";

const Card = () => {
    return (
        <div className="flex flex-col w-[150px] h-[250px]">
                <div className="flex flex-row">
                    <p> The Amazing Spiderman</p>
                    <p>#123</p>
                </div>

            <div className="bg-gray-200 flex-grow rounded"> {/* replace with comic book-sized image */}</div> 
        </div>
    )
}

export default Card