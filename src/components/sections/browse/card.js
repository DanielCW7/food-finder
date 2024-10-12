// individual cards for food items

import oranges from "../../images/oranges.webp"
import { useEffect } from "react"

const Card = ({props}) => {

    const isData = [1,1,1,1,1,1,1,1,1]

    useEffect(() => {
        console.log(props)
    }, [])

    return (
        <div className="rounded-xl m-auto shadow">
            <div className="m-auto flex flex-col md:flex-row gap-8 p-8">           
                <div className="text-center m-auto">


                    <div className="svg-container">
                        {/* food thumbnail */}
                        <svg className="max-w-64 mx-auto my-4" width="" height="" viewBox="-10 0 740 472" fill="none">
                            <defs>
                                <clipPath id="myClipPath" className="">
                                    <path d="M719.999 211C719.999 339.958 440.322 472 241.499 472C42.6765 472 -0.000976562 339.958 -0.000976562 211C-0.000976562 82.0415 239.177 0 437.999 0C636.822 0 719.999 82.0415 719.999 211Z" />
                                </clipPath>
                            </defs>

                            <image href={oranges} className="w-full h-auto" fill="none" clip-path="url(#myClipPath)" />
                        </svg> 

                        <div className="">
                            {/* name, stats */}
                            <p className="text-xl alt-font"> Oranges </p>
                            <sub> calories </sub>
                            <div className="my-4">
                                <ul className="flex justify-around">
                                    <li>
                                        <span className="alt-font-2 text-2xl text-mint"> 23g </span>
                                        <p> Proteins </p>
                                    </li>
                                    <li>
                                        <span className="alt-font-2 text-2xl text-gum"> 10g </span>
                                        <p> Fats </p>
                                    </li>
                                    <li>
                                        <span className="alt-font-2 text-2xl text-burnt"> 9g </span>
                                        <p> Carbs </p>
                                    </li>
                                </ul>
                            </div> 

                            <div className="flex justify-center gap-2">
                                <button className="btn btn-primary btn-sm btn-outline">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>

                                     Like 
                                </button>                            
                                <button className="btn btn-secondary btn-sm btn-outline"> 
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                    </svg>

                                    Info 
                                </button>                                 
                            </div>
                           

                        </div>
                       
                        <div>

                    </div>
                </div>
                </div>                
            </div>
         </div>
    )
}

export default Card