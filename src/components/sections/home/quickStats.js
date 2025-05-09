import { useState } from "react";
import oranges from "../../images/oranges.webp"

const QuickStats = () => {

    return (
        <section className="bg-base-200">
            {/* divider */}
            <svg className="bg-base-200" xmlns="http://www.w3.org/2000/svg" width="auto" height="auto" viewBox="0 0 3683 215" fill="none">
                <path className="fill-base-100" d="M1079.5 134.151C694.764 -107.053 119.697 346.196 -0.000976562 -0.000274658L2906.06 -0.000274658L3683 -0.000274658C3264.3 -0.000274658 1464.23 375.355 1079.5 134.151Z" fill=""/>
            </svg>

            <div className="m-auto max-w-3xl flex flex-col md:flex-row gap-8 p-8">
                <div className="text-left m-auto">
                    <h2 className="text-xl mb-4 font-black text-ocean"> Food For Thought. </h2>
                    <p> Get the nitty gritty details for some of the most common foods, nothing too fancy. All it takes is a quick look, and you have all that you need! </p>
                </div>            
                <div className="text-center m-auto">
                    <div className="svg-container">
                        <svg className="max-w-64 mx-auto my-4" width="" height="" viewBox="0 0 720 472" fill="none">
                            <defs>
                                <clipPath id="myClipPath" className="">
                                    <path d="M719.999 211C719.999 339.958 440.322 472 241.499 472C42.6765 472 -0.000976562 339.958 -0.000976562 211C-0.000976562 82.0415 239.177 0 437.999 0C636.822 0 719.999 82.0415 719.999 211Z" />
                                </clipPath>
                            </defs>

                            <image href={oranges} className="w-full h-auto" fill="none" clip-path="url(#myClipPath)" />
                        </svg>                       
                    </div>

                    <p className="textxl"> Oranges </p>
                    <sub> 100g </sub>
                    <div className="my-4">
                        <ul className="flex justify-around gap-4">
                            <li>
                                <span className="alt-font-2 text-xl text-mint"> 0.3g </span>
                                <p> Proteins </p>
                            </li>
                            <li>
                                <span className="alt-font-2 text-xl text-gum"> 0.2g </span>
                                <p> Fats </p>
                            </li>
                            <li>
                                <span className="alt-font-2 text-xl text-burnt"> 14g </span>
                                <p> Carbs </p>
                            </li>
                        </ul>
                    </div>
                </div>                
            </div>
 
        </section>
    )
}

export default QuickStats