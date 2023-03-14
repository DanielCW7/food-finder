import React from "react";
import { useState } from "react";
import { CSSTransition } from 'react-transition-group';
import '../App.css'

const Nav = () => {
    const [visible, setIsVisible] = useState(false);

    return (
        <div>
            <div className="fixed top-0 left-0 right-0 bg-gray-900 text-white flex flex-col p-5 md:hidden">
                <span className="font-black text-end cursor-pointer" onClick={() => {setIsVisible(!visible)}}> {visible ? 'X' : '='} </span>
                <ul className={`overflow-hidden flex flex-col gap-5 transition-all duration-1000 ${visible ? 'open' : 'closed'}`}>
                    <li className="cursor-pointer"> Home </li>
                    <li className="cursor-pointer"> Profile </li>
                    <li className="cursor-pointer"> Collections </li>
                    <li className="cursor-pointer"> Favorites </li>
                    <li className="cursor-pointer"> Wishlist </li>
                </ul>
            </div>
            <div className="top-0 left-0 bottom-0 w-[150px] md:fixed bg-gray-900 text-white flex flex-col p-5">
                <ul className={`flex flex-col gap-5`}>
                    <li className="cursor-pointer"> Home </li>
                    <li className="cursor-pointer"> Profile </li>
                    <li className="cursor-pointer"> Collections </li>
                    <li className="cursor-pointer"> Favorites </li>
                    <li className="cursor-pointer"> Wishlist </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav