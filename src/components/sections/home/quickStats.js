import { useState } from "react";
import berries from "../../../images/berries.webp"

const QuickStats = () => {

    const sampleSize = [1,1,1,1,1,1,1,1,1,1,1,1]
    const [isData, setData] = useState(sampleSize);


    return (
        <section className="bg-gray-100">
            {/* divider */}
            <svg className="bg-gray-100" xmlns="http://www.w3.org/2000/svg" width="auto" height="auto" viewBox="0 0 3683 215" fill="none">
                <path d="M1079.5 134.151C694.764 -107.053 119.697 346.196 -0.000976562 -0.000274658L2906.06 -0.000274658L3683 -0.000274658C3264.3 -0.000274658 1464.23 375.355 1079.5 134.151Z" fill="white"/>
            </svg>

            <div className="max-w-4xl flex flex-col gap-8 p-8">
                <div className="text-center">
                    <h2 className="text-xl"> Stay In The Know. </h2>
                    <p> Get the nitty gritty details for any food, including both macro and micronutrients. </p>
                </div>            
                <div className="text-center">
                    <div className="svg-container">
                        <svg className="max-w-64 mx-auto my-4" width="auto" height="auto" viewBox="0 0 720 472" fill="none">
                            <defs>
                                <clipPath id="myClipPath" className="">
                                    <path d="M719.999 211C719.999 339.958 440.322 472 241.499 472C42.6765 472 -0.000976562 339.958 -0.000976562 211C-0.000976562 82.0415 239.177 0 437.999 0C636.822 0 719.999 82.0415 719.999 211Z" />
                                </clipPath>
                            </defs>

                            <image href={berries} className="w-full h-auto" fill="none" clip-path="url(#myClipPath)" />
                        </svg>                       
                    </div>

                    <p className="textxl"> Oranges </p>
                    <sub> calories </sub>
                    <div className="my-4">
                        <ul className="flex justify-around">
                            <li>
                                <span> 23g </span>
                                <p> Proteins </p>
                            </li>
                            <li>
                                <span> 23g </span>
                                <p> Fats </p>
                            </li>
                            <li>
                                <span> 23g </span>
                                <p> Carbs </p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        {/* extra nutrients */}
                        {/* hardcoded, to be dynamically populated */}

                        <ul className="overflow-list">
                            {
                                isData && isData.map(stat => {
                                    return  <li className="text-sm flex justify-center gap-2 my-1">
                                                <span> 23g </span>
                                                <p> Proteins </p>
                                            </li> 
                                })
                            }                            
                        </ul>
                    </div>
                </div>                
            </div>
 
        </section>
    )
}

export default QuickStats