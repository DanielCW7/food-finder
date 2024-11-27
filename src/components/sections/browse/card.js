// individual cards for food items
import { useEffect } from "react";

const Card = ({props}) => {

    return (
            <div className="rounded-xl shadow overflow-hidden transition-all">
                <div className="m-auto flex flex-col md:flex-row gap-8">           
                    <div className="text-center m-auto">

                        <div className="max-w-sm sm:max-w-64">
                            <img lazy="true" src={props?.food_image ?? "?"} className="img-reset w-full" />

                            <div className="p-2">
                                {/* name, stats */}
                                <p className="text-xl alt-font"> {props?.food_name ?? "?"} </p>
                                <sub className="zero-reset"> {props?.calories ?? "?"} cal. / 100g </sub>
                                <div className="my-4">
                                    <ul className="flex justify-around">
                                        <li>
                                            <span className="alt-font-2 text-2xl text-mint"> {props?.proteins ?? "?"} </span>
                                            <p> Protein </p>
                                        </li>
                                        <li>
                                            <span className="alt-font-2 text-2xl text-gum"> {props?.fats ?? "?"} </span>
                                            <p> Fat </p>
                                        </li>
                                        <li>
                                            <span className="alt-font-2 text-2xl text-burnt"> {props?.carbs ?? "?"} </span>
                                            <p> Carbs </p>
                                        </li>
                                    </ul>
                                </div> 

                                <div className="flex justify-center gap-2 p-2">
                          
                                    <button className="btn btn-secondary btn-sm btn-outline" onClick={() => document.getElementById(`food_card${props.food_name}`).showModal()}> 
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                        </svg>

                                        Info 
                                    </button> 

                                    <dialog id={`food_card${props.food_name}`} className="modal modal-bottom md:modal-middle">
                                        <div className="modal-box shadow-2xl" style={{
                                            backgroundImage: `linear-gradient(rgba(255,255,255,.7), rgba(255,255,255,.7)), url(${props.food_image})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            backdropFilter: "blur(12px)",
                                            WebkitBackdropFilter: "blur(8px)",
                                        }}>
                                            <h3 className="text-2xl"> {props.food_name} </h3>
                                            <sub> Calories per 100g: {props?.calories} </sub>
                                            <sub> Type: {props?.food_type} </sub>
                                            <div> Macros </div>
                                            <ul className="flex justify-around gap-1">
                                                <li className="bg-white flex-1 my-2 p-2 rounded-xl border-2 border-mint">
                                                    <span className="alt-font-2 text-2xl text-mint"> {props?.proteins ?? "?"} </span>
                                                    <p> Protein </p>
                                                </li>
                                                <li className="bg-white flex-1 my-2 p-2 rounded-xl border-2 border-gum">
                                                    <span className="alt-font-2 text-2xl text-gum"> {props?.fats ?? "?"} </span>
                                                    <p> Fat </p>
                                                </li>
                                                <li className="bg-white flex-1 my-2 p-2 rounded-xl border-2 border-burnt">
                                                    <span className="alt-font-2 text-2xl text-burnt"> {props?.carbs ?? "?"} </span>
                                                    <p> Carbs </p>
                                                </li>
                                            </ul>
                                            <div> Micros </div>
                                            <ul className="card-expanded-list">
                                                <li>sat. fats: <b>{props?.saturated_fats ?? "?"}</b> </li>
                                                <li>cholesterol: <b>{props?.cholesterol ?? "?"}</b> </li>
                                                <li>fiber: <b>{props?.fiber ?? "?"}</b></li>
                                                <li>vitamin A: <b>{props?.vitamin_A ?? "?"}</b></li>
                                                <li>vitamin B12: <b>{props?.vitamin_B12 ?? "?"}</b></li>
                                                <li>vitamin C: <b>{props?.vitamin_C ?? "?"}</b></li>
                                                <li>vitamin D: <b>{props?.vitamin_D ?? "?"}</b></li>
                                            </ul>
                                        </div>
                                        <form method="dialog" className="modal-backdrop">
                                            <button>close</button>
                                        </form>
                                    </dialog>                                
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