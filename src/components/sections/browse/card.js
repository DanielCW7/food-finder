// individual cards for food items

const Card = ({props}) => {

    console.log(props)

    return (
        <div className="rounded-xl shadow overflow-hidden">
            <div className="m-auto flex flex-col md:flex-row gap-8">           
                <div className="text-center m-auto">

                    <div className="max-w-sm sm:max-w-64">
                        <img src={props?.food_image ?? "err"} className="img-reset w-full" />
                        {/* </svg>  */}

                        <div className="p-2">
                            {/* name, stats */}
                            <p className="text-xl alt-font"> {props?.food_name ?? "Err"} </p>
                            <sub> {props.calories} calories / 100g</sub>
                            <div className="my-4">
                                <ul className="flex justify-around">
                                    <li>
                                        <span className="alt-font-2 text-2xl text-mint"> {props?.proteins ?? "?"} </span>
                                        <p> Proteins </p>
                                    </li>
                                    <li>
                                        <span className="alt-font-2 text-2xl text-gum"> {props?.fats ?? "?"} </span>
                                        <p> Fats </p>
                                    </li>
                                    <li>
                                        <span className="alt-font-2 text-2xl text-burnt"> {props?.carbs ?? "?"} </span>
                                        <p> Carbs </p>
                                    </li>
                                </ul>
                            </div> 

                            <div className="flex justify-center gap-2 p-2">
                                <button className="btn btn-primary btn-sm btn-outline">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                    </svg>

                                     Like 
                                </button>                            
                                <button className="btn btn-secondary btn-sm btn-outline" onClick={() => document.getElementById(`food_card${props.food_name}`).showModal()}> 
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                    </svg>

                                    Info 
                                </button> 
                                {/* 
                                    dynamic ID for modals, 
                                    pass down food.ID prop so the modal will display correct info 
                                */}
                                <dialog id={`food_card${props.food_name}`} className="modal modal-bottom md:modal-middle">
                                    <div className="modal-box shadow-2xl" style={{
                                        backgroundImage: `linear-gradient(rgba(255,255,255,.7), rgba(255,255,255,.9)), url(${props.food_image})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backdropFilter: "blur(12px)",
                                        WebkitBackdropFilter: "blur(8px)",
                                    }}>
                                        <h3 className="text-2xl shadow-lg"> {props.food_name} </h3>
                                        <sub> Calories per 100g: {props.calories} </sub>
                                        <sub> Type: {props.food_type} </sub>
                                        <ul className="card-expanded-list">
                                            <li>proteins - {props.proteins} </li>
                                            <li>fats - {props.fats} </li>
                                            <li>carbs - {props.carbs} </li>
                                            <li>sat. fats - {props.saturated_fats} </li>
                                            <li>cholesterol - {props.cholesterol} </li>
                                            <li>fiber - {props.fiber}</li>
                                            <li>vitamin A - {props.vitamin_A}</li>
                                            <li>vitamin B12 - {props.vitamin_B12}</li>
                                            <li>vitamin C - {props.vitamin_C}</li>
                                            <li>vitamin D - {props.vitamin_D}</li>
                                            <li>proteins - {props.proteins} </li>
                                            <li>fats - {props.fats} </li>
                                            <li>carbs - {props.carbs} </li>
                                            <li>sat. fats - {props.saturated_fats} </li>
                                            <li>cholesterol - {props.cholesterol} </li>
                                            <li>fiber - {props.fiber}</li>
                                            <li>vitamin A - {props.vitamin_A}</li>
                                            <li>vitamin B12 - {props.vitamin_B12}</li>
                                            <li>vitamin C - {props.vitamin_C}</li>
                                            <li>vitamin D - {props.vitamin_D}</li>
                                        </ul>
                                        <div className="mt-4 flex justify-center gap-2">
                                            <button className="btn btn-outline"> 
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                            </svg>
                                            Like </button>
                                        </div>


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