import React from "react";
import cover from '../images/cover.png'

const MultiCard = () => {

    const bg = {backgroundImage: `url(${cover})`}

    return (
        <div className="">
        <div className="relative flex flex-col aspect-comic w-1/3 overflow-visible">
            <div style={bg} className="bg-cover rounded-2xl z-20 absolute left-0 right-0 top-0 bottom-0">outer</div>
            <div className="rounded-2xl z-10 bg-gray-500 absolute left-0 right-0 top-0 bottom-0">middle</div>
            <div className="rounded-2xl z-0 bg-gray-900 absolute left-0 right-0 top-0 bottom-0">inner</div>
        </div>
        <div>
            <h2 className=" text-2xl font-bold"> test </h2>
            <p className=" "> this is a test this is a test this is a test this is a test this is a test this is a test this is a test this is a test this is a test this is a test </p>
            <a className=" text-blue-500 underline cursor-pointer"> Open Collection </a>
        </div>

        </div>
    )
}

export default MultiCard