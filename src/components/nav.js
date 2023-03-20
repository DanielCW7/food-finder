import React from "react";
import { useState } from "react";
// import { CSSTransition } from 'react-transition-group';
import '../App.css'

const Nav = () => {
    const [visible, setIsVisible] = useState(false);

    return (
        <div>
            <div className="fixed top-0 left-0 right-0 bg-gray-900 text-white flex flex-col p-5 md:hidden">
                <span className="font-black text-end cursor-pointer" onClick={() => {setIsVisible(!visible)}}> {visible ? 'X' : '='} </span>
                <ul className={`overflow-hidden flex flex-col gap-5 transition-all ${visible ? 'open' : 'closed'}`}>
                    <li className="cursor-pointer"> Home </li>
                    <li className="cursor-pointer"> Profile </li>
                    <li className="cursor-pointer"> Collections </li>
                    <li className="cursor-pointer"> Favorites </li>
                    <li className="cursor-pointer"> Wishlist </li>
                </ul>
            </div>
            <div className="hidden top-0 left-0 bottom-0 w-[200px] md:flex flex-col md:fixed bg-gray-900 text-white p-2">
                <ul className="flex flex-col py-2">
                <li className="border-l-4 border-l-gray-900 flex transition-all cursor-pointer px-0 py-2 hover:bg-gradient-to-r hover:from-green-700 hover:border-l-green-400"> 
                        <svg className="cursor-pointer h-[15px] my-auto mx-2" fill="#fff" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 122.88 113.97"><path class="cls-1" d="M18.69,73.37,59.18,32.86c2.14-2.14,2.41-2.23,4.63,0l40.38,40.51V114h-30V86.55a3.38,3.38,0,0,0-3.37-3.37H52.08a3.38,3.38,0,0,0-3.37,3.37V114h-30V73.37ZM60.17.88,0,57.38l14.84,7.79,42.5-42.86c3.64-3.66,3.68-3.74,7.29-.16l43.41,43,14.84-7.79L62.62.79c-1.08-1-1.24-1.13-2.45.09Z"/></svg>
                        Home 
                    </li>
                    <li className="border-l-4 border-l-gray-900 flex transition-all cursor-pointer px-0 py-2 hover:bg-gradient-to-r hover:from-green-700 hover:border-l-green-400"> 
                        <svg className="cursor-pointer h-[15px] my-auto mx-2" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 110.44"><path d="M46.07,68.62a19.25,19.25,0,0,1-1.63-2c-1.2-1.65-2.33-3.37-3.42-5.1L35.6,52.89c-2.06-3-3.14-5.74-3.14-7.91s1.23-5,3.68-5.63a149.33,149.33,0,0,1-.21-15.61,19.7,19.7,0,0,1,.65-3.58,20.63,20.63,0,0,1,9.21-11.7,23.65,23.65,0,0,1,5-2.39c3.15-1.19,1.63-6,5.1-6.07C64-.21,77.33,6.73,82.53,12.36a20.56,20.56,0,0,1,5.31,13.33l-.33,14.2a4,4,0,0,1,2.93,2.92c.43,1.74,0,4.12-1.52,7.48h0c0,.11-.11.11-.11.22L82.63,60.7c-1.4,2.3-2.85,4.65-4.48,6.81-1.93,2.58-3.52,2.12-1.87,4.59,11.83,16.26,46.6,6,46.6,38.34H0C0,78.08,34.78,88.36,46.6,72.1c1.36-2,1-1.85-.53-3.48Z"/></svg>
                        Profile 
                    </li>
                    <li className="border-l-4 border-l-gray-900 flex transition-all cursor-pointer px-0 py-2 hover:bg-gradient-to-r hover:from-green-700 hover:border-l-green-400"> 
                        <svg className="cursor-pointer h-[15px] my-auto mx-2" fill="#fff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 122.88 99.094"><path d="M28.828,0h94.052v67.744h-9.37V9.369H28.828V0L28.828,0z M14.055,15.135h94.049 v67.744h-8.358V24.864H14.055V15.135L14.055,15.135z M0,31.349h94.052v67.745H0V31.349L0,31.349z"/></svg>
                       Collections 
                    </li>
                    <li className="border-l-4 border-l-gray-900 flex transition-all cursor-pointer px-0 py-2 hover:bg-gradient-to-r hover:from-green-700 hover:border-l-green-400"> 
                        <svg className="cursor-pointer h-[15px] my-auto mx-2" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 117.19"><path d="M64.39,2,80.11,38.76,120,42.33a3.2,3.2,0,0,1,1.83,5.59h0L91.64,74.25l8.92,39a3.2,3.2,0,0,1-4.87,3.4L61.44,96.19,27.09,116.73a3.2,3.2,0,0,1-4.76-3.46h0l8.92-39L1.09,47.92A3.2,3.2,0,0,1,3,42.32l39.74-3.56L58.49,2a3.2,3.2,0,0,1,5.9,0Z"/></svg>
                        Favorites 
                    </li>
                    <li className="border-l-4 border-l-gray-900 flex transition-all cursor-pointer px-0 py-2 hover:bg-gradient-to-r hover:from-green-700 hover:border-l-green-400"> 
                        <svg className="cursor-pointer h-[15px] my-auto mx-2" fill="#fff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.57 122.88"><style type="text/css"></style><g><polygon class="st0" points="0,0 122.57,0 122.57,122.88 61.13,69.95 0,122.88 0,0"/></g></svg>
                        Wishlist
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Nav