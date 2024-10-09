// individual cards for food items

import fruits from "../../images/fruits.webp"
import { useEffect } from "react"

const Card = ({props}) => {

    const isData = [1,1,1,1,1,1,1,1,1]

    useEffect(() => {
        console.log(props)
    }, [])

    return (
        <div className="border border-blue-600 m-auto bg-base-100">
            <div className="m-auto max-w-4xl flex flex-col md:flex-row gap-8 p-8">           
                <div className="text-center m-auto">
                    <div className="svg-container">
                        <svg className="max-w-64 mx-auto my-4" width="" height="" viewBox="0 0 720 472" fill="none">
                            <defs>
                                <clipPath id="myClipPath" className="">
                                    <path d="M719.999 211C719.999 339.958 440.322 472 241.499 472C42.6765 472 -0.000976562 339.958 -0.000976562 211C-0.000976562 82.0415 239.177 0 437.999 0C636.822 0 719.999 82.0415 719.999 211Z" />
                                </clipPath>
                            </defs>

                            <image href={fruits} className="w-full h-auto" fill="none" clip-path="url(#myClipPath)" />
                        </svg>                       
                    </div>

                    <p className="textxl"> Oranges </p>
                    <sub> calories </sub>
                    <div className="my-4">
                        <ul className="flex justify-around">
                            <li>
                                <span className="alt-font text-2xl text-mint"> 23g </span>
                                <p> Proteins </p>
                            </li>
                            <li>
                                <span className="alt-font text-2xl text-gum"> 10g </span>
                                <p> Fats </p>
                            </li>
                            <li>
                                <span className="alt-font text-2xl text-burnt"> 9g </span>
                                <p> Carbs </p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        {/* extra nutrients */}
                        {/* hardcoded, to be dynamically populated */}

                        <ul className="overflow-list gap-x-8">
                            {
                                isData && isData.map(stat => {
                                    return  <li className="text-xs flex justify-center gap-2 my-1">
                                                <span> 23g </span>
                                                <p> Proteins </p>
                                            </li> 
                                })
                            }                            
                        </ul>
                    </div>
                </div>                
            </div>
         </div>
    )
}

export default Card