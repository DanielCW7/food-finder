import React from "react";
import cover from '../images/cover.png'

const MultiCard = () => {

    const bg = {backgroundImage: `url(${cover})`}

    return (
        <div className="flex flex-row flex-auto justify-center max-w-md m-auto">
        <div className="relative flex flex-col aspect-comic w-1/3 overflow-visible">
            <div style={bg} className="bg-cover rounded-2xl z-20 absolute left-0 right-0 top-0 shadow-xl bottom-0"></div>
            <div className="rounded-2xl z-10 bg-gray-200 absolute left-0 right-0 top-0 bottom-0 shadow-xl -translate-x-3 translate-y-3 -rotate-3"></div>
            <div className="rounded-2xl z-0 bg-gray-300 absolute left-0 right-0 top-0 bottom-0 shadow-xl -translate-x-6 translate-y-6 -rotate-6"></div>
            {/* hover state / load-in animation to unfold them like cards */}
        </div>
        <div className="relative flex flex-col justify-center w-2/3 overflow-visible p-5">
            <h2 className=" text-1xl font-bold"> The Amazing Spiderman </h2>
            <p className=" "> first run of spiderman comics beginning in the 1960s </p>
            <a className=" text-blue-500 underline cursor-pointer"> Open Collection </a>
        </div>

        </div>
    )
}

export default MultiCard