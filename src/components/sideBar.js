import React from "react";
import { useState } from "react";
import pic from '../images/lens.JPG';

const Sidebar = () => {

    const [toggle, setToggle] = useState(false);


    return (

        <div>
            
        </div>

        // <div>         
        //     <div className="md:hidden">   
    
        //     {toggle ? <button className="left-0 top-0 w-full fixed p-3 text-right text-white lg:hidden" onClick={() => setToggle(!toggle)}> toggle off </button> : <button className="bg-blue-900 left-0 top-0 w-full fixed p-3 text-right text-white lg:hidden" onClick={() => setToggle(!toggle)}> toggle on </button>}         

        //         {toggle && (
        //             <div className="fixed bg-gray-900 w-screen h-screen py-20 flex flex-col" id="nav">
        //             <button className="left-0 top-0 w-full fixed p-3 text-right text-white" onClick={() => setToggle(!toggle)}> toggle off </button>
        //                 <div style={{backgroundImage: `url(${pic})`}} className="border bg-cover rounded-full w-[100px] h-[100px] rounded-100 mx-auto"></div>
        //                 <ul className="flex flex-col text-white gap-5 py-10 font-light text-2xl">
        //                     <li className="cursor-pointer hover:text-green-400 text-center"> Profile </li>
        //                     <li className="cursor-pointer hover:text-green-400 text-center"> Search </li>
        //                     <li className="cursor-pointer hover:text-green-400 text-center"> Collections </li>
        //                     <li className="cursor-pointer hover:text-green-400 text-center"> Wishlist </li>
        //                 </ul> 
        //             </div>
        //         )}
        //     </div>
        // </div>
    ) 
}

export default Sidebar