// individual cards for food items
import { useState, useRef } from "react";
import conversions from "../../functions/conversions";
import Pie from "../../pie";


/*

- base macros from db are based on 100g measurements

- capture units
- capture quantities
- do math using current unit and quantities

*/
const Card = ({props}) => {

    let macros = [
        props?.protein ?? 0,
        props?.fat ?? 0,
        props?.carb ?? 0,
    ]
 
    console.log(props)
    const unitSelect = useRef();

    return (
            <div className="rounded-xl transition-all w-full p-2">
                <div className="flex flex-col gap-4 text-center">           
                    <div className="max-w-48">
                        {/* <img lazy="true" src={props?.food_image ?? "?"} className="img-reset w-48 h-48 rounded-full m-auto mb-6" /> */}
                        <Pie img={props?.food_image ?? "?"} stats={macros} name={props?.food_name ?? "?"} />
                    </div>  

                    <div className="flex flex-col justify-center gap-2">
                        <h3 className="text-lg font-bold text-ocean"> {props?.food_name ?? "?"} </h3>
                        <sub> {props?.calories ?? "0"} cal. / {props?.serving ?? "0"} {props?.units ?? ""}. </sub>

                        <div className="flex justify-center gap-4 mt-4">
                            <span>
                                <div className="font-black text-[#ff6384]"> {props?.protein ?? "?"} </div>
                                <div className="text-sm text-[#ff6384]"> Protein </div>
                            </span>  
                            <span>
                                <div className="font-black text-[#36a2eb]"> {props?.fat ?? "?"} </div>
                                <div className="text-sm text-[#36a2eb]"> Fat </div>
                            </span>
                            <span>
                                <div className="font-black text-[#2cd34a]"> {props?.carb ?? "?"} </div>
                                <div className="text-sm text-[#2cd34a]"> Carb </div>
                            </span>                  
                        </div> 
                    </div>      
             
                </div>
            </div>
    )
}

export default Card