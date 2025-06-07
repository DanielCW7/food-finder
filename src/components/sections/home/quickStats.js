import { useState } from "react";
import oranges from "../../images/oranges.webp";
import Pie from "../../pie";

const QuickStats = () => {
    const data = [100,200,300]

    return (
        <section className="bg-base-200">
            {/* divider */}
            <svg className="bg-base-200" xmlns="http://www.w3.org/2000/svg" width="auto" height="auto" viewBox="0 0 3683 215" fill="none">
                <path className="fill-base-100" d="M1079.5 134.151C694.764 -107.053 119.697 346.196 -0.000976562 -0.000274658L2906.06 -0.000274658L3683 -0.000274658C3264.3 -0.000274658 1464.23 375.355 1079.5 134.151Z" fill=""/>
            </svg>

            <div className="m-auto max-w-3xl flex justify-between md:flex-row gap-8 p-8">
                <div className="text-left m-auto">
                    <h2 className="text-xl mb-4 font-black text-ocean"> Food For Thought. </h2>
                    <p> Get the nitty gritty details for some of the most common foods, nothing too fancy. All it takes is a quick look, and you have all that you need! </p>
                </div>   

                <div className="flex flex-col gap-4 text-center">           
                    <div className="flex-col flex justify-center text-center m-auto">
                            {/* <img src={oranges} className="w-full h-auto img-square rounded-full h-32 w-32 mx-auto" /> */}
                            <Pie img={oranges} stats={data} name="orange" calories={120} />
                        </div>
                        <div className="flex flex-col justify-center gap-2">
                            <h3 className="text-lg font-bold text-ocean"> Orange </h3>
                            <sub> 1000 cal. / 100g </sub>

                            <div className="flex justify-center gap-4 mt-4">
                                <span>
                                    <div className="font-black text-[#ff6384]"> 300 </div>
                                    <div className="text-sm text-[#ff6384]"> Protein </div>
                                </span>  
                                <span>
                                    <div className="font-black text-[#36a2eb]"> 200 </div>
                                    <div className="text-sm text-[#36a2eb]"> Fat </div>
                                </span>
                                <span>
                                    <div className="font-black text-[#2cd34a']"> 100 </div>
                                    <div className="text-sm text-[#2cd34a']"> Carb </div>
                                </span>                  
                            </div> 
                        </div>                      
                </div>          
              
            </div>
 
        </section>
    )
}

export default QuickStats