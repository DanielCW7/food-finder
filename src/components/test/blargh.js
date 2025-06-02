import Pie from "../pie";
import Orange from "../images/oranges.webp";

const Blargh = (props) => {
    return (
            <div className="rounded-xl overflow-hidden transition-all p-2">
                <div className="m-auto flex flex-col md:flex-row gap-8">           
                    <div className="text-center m-auto">

                        <div className="border border-red-500">
                            {/* <img lazy="true" src={props?.food_image ?? "?"} className="img-reset w-48 h-48 rounded-full m-auto mb-6" /> */}
                            <Pie img={Orange} stats={props?.macros ?? "21"} />

                            <div className="flex flex-col gap-2">
                                <p className="text-xl alt-font font-black text-ocean"> {props?.food_name ?? "?"} </p>
                                <sub className="zero-reset"> {props?.calories ?? "?"} cal. / {props.serving} {props.units} </sub>
                                <div className="my-4">
                                    <ul className="flex justify-around">
                                        <li>
                                            <span className={`font-black alt-font-2 text-xl text-[#ff6384]`}> {props?.protein ?? "?"} </span>
                                            <p> Protein </p>
                                        </li>
                                        <li>
                                            <span className={`font-black alt-font-2 text-xl text-[#36a2eb]`}> {props?.fat ?? "?"} </span>
                                            <p> Fat </p>
                                        </li>
                                        <li>
                                            <span className={`font-black alt-font-2 text-xl text-[#ffcd56]`}> {props?.carb ?? "?"} </span>
                                            <p> Carbs </p>
                                        </li>
                                    </ul>
                                </div> 

                                <div className="flex justify-center gap-2 p-2">
{/*                           
                                    <button className="btn btn-secondary btn-sm btn-outline" onClick={() => document.getElementById(`food_card${props.food_name}`).showModal()}> 
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                                        </svg>

                                        Info 
                                    </button>  */}

                                    {/* expanded card info */}
                                    {/* <dialog id={`food_card${props.food_name}`} className="modal modal-bottom md:modal-middle">
                                        <div className="modal-box shadow-2xl" style={{
                                            backgroundImage: `linear-gradient(rgba(255,255,255,.7), rgba(255,255,255,.7)), url(${props.food_image})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            backdropFilter: "blur(12px)",
                                            WebkitBackdropFilter: "blur(8px)",
                                        }}>
                                            <h3 className="text-2xl mb-6"> {props.food_name}'s serving size is: {props.serving} </h3>

                                            <div className="join" onChange={check}>
                                                <input className="join-item input" type="number" onChange={calculate}/>
                                                <select ref={unitSelect} className="join-item" onChange={convert}>
                                                    { isList && isList }
                                                </select>                                                
                                            </div>

                                            <div> Calories: {props.calories * isEntry}</div>
                                            <sub> Type: {props?.food_type} </sub>
                                            <div> Macros </div>
                                            <ul className="flex justify-around gap-1">
                                                <li className="bg-white flex-1 my-2 p-2 rounded-xl">
                                                    <span className="alt-font-2 text-2xl text-mint"> {isCalc ? isCalc : props.proteins} </span>
                                                    <p> Protein </p>
                                                </li>
                                                <li className="bg-white flex-1 my-2 p-2 rounded-xl">
                                                    <span className="alt-font-2 text-2xl text-gum"> {props.fats} </span>
                                                    <p> Fat </p>
                                                </li>
                                                <li className="bg-white flex-1 my-2 p-2 rounded-xl">
                                                    <span className="alt-font-2 text-2xl text-burnt"> {(props.serving ? isEntry : isEntry).toFixed(2)} </span>
                                                    <p> Carbs </p>
                                                </li>
                                            </ul>

                                          

                                        </div>
                                        <form method="dialog" className="modal-backdrop">
                                            <button>close</button>
                                        </form>
                                    </dialog>                                 */}
                                </div>
                            

                            </div>
                        
                            <div>

                        </div>
                    </div>
                    </div>                
                </div>
            </div>    )
}

export default Blargh