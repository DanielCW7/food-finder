import React from "react";
import { useState } from "react";
import pic from '../images/lens.JPG';
const Nav = () => {
    const [toggle, setToggle] = useState(false);


    return (



        <div className="">
        {toggle ? <button className="left-0 top-0 w-full fixed p-3 text-right text-white lg:hidden" onClick={() => setToggle(!toggle)}> toggle off </button> : <button className="bg-blue-900 left-0 top-0 w-full fixed p-3 text-right text-white lg:hidden" onClick={() => setToggle(!toggle)}> toggle on </button>}         

        <div className="sticky top-0 left-0 right-0 bg-blue-600 text-white font-black p-2 flex justify-between">
            <p> Comic Finder </p>
            <span onClick={() => setToggle(!toggle)}> = </span>
        </div>

            {toggle && (
            <div className="fixed bg-gray-900 w-screen h-screen flex flex-col" id="nav">
                <span className="sticky top-0 left-0 right-0 bg-blue-600 text-white font-black p-2" onClick={() => setToggle(!toggle)}> X </span>

                <div style={{backgroundImage: `url(${pic})`}} className="border bg-cover rounded-full w-[100px] h-[100px] rounded-100 mx-auto"></div>
                    <ul className="flex flex-col text-white gap-5 py-10 font-light text-2xl">
                    <li className="cursor-pointer hover:text-green-400 text-center"> Profile </li>
                        <li className="cursor-pointer hover:text-green-400 text-center"> Search </li>
                        <li className="cursor-pointer hover:text-green-400 text-center"> Collections </li>
                        <li className="cursor-pointer hover:text-green-400 text-center"> Wishlist </li>
                    </ul> 
                </div>
            )}
        </div>
    )
}

export default Nav