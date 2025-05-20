import oranges from "../../images/oranges.webp"

const Compare = () => {
    return (
        // compare section on homepage
        <section>
            <div className="m-auto max-w-3xl flex flex-col md:flex-row gap-8 p-8">
                <div className="text-left m-auto">
                    <h2 className="text-xl mb-4 font-black text-ocean"> Dare to compare </h2>
                    <p>Get a high-level overview of the nutritional values of up to 4 foods at once.</p>
                </div>
                {/* food bubbles */}
                <ul className="flex gap-4 justify-center">
                    <li className="w-max p-2 flex flex-col gap-2">
                        <h3 className="text-center font-bold text-ocean"> Oranges </h3>
                        <img src={oranges} className="w-36 img-square rounded-full"/>
                        <div className="flex flex-col justify-center gap-2">
                            
                            <div className="flex flex-row justify-around gap-2">
                                <div className="w-4 h-12 bg-primary rounded-full mt-auto"></div>
                                <div className="w-4 h-12 bg-secondary rounded-full mt-auto"></div>
                                <div className="w-4 h-4 bg-warning rounded-full mt-auto"></div>
                            </div>
                            <div className="flex flex-row justify-around gap-2">
                                <span> 8g </span>
                                <span> 8g </span>
                                <span> 8g </span>                                
                            </div>                            


                        </div>
                    </li>
                    <li className="w-max p-2 flex flex-col gap-2">
                        <h3 className="text-center font-bold text-ocean"> Oranges </h3>
                        <img src={oranges} className="w-36 img-square rounded-full"/>
                        <div className="flex flex-col justify-center gap-2">
                            
                            <div className="flex flex-row justify-around gap-2">
                                <div className="w-4 h-12 bg-primary rounded-full mt-auto"></div>
                                <div className="w-4 h-12 bg-secondary rounded-full mt-auto"></div>
                                <div className="w-4 h-14 bg-warning rounded-full mt-auto"></div>
                            </div>
                            <div className="flex flex-row justify-around gap-2">
                                <span> 8g </span>
                                <span> 8g </span>
                                <span> 8g </span>                                
                            </div>                            


                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Compare