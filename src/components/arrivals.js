import xmen from "../images/xmen.jpg";



const Arrivals = () => {


    return (
        <div className="bg-base-300 min-h-screen flex flex-col justify-center">
            <div className="container mx-auto p-8">
                <div className="m-8 text-center">
                    <h2 className="text-2xl font-bold text-center mb-4"> New Arrivals </h2>
                    <button className="btn btn-primary"> Browse </button>                    
                </div>


        
            <div className="flex justify-center gap-8" type="radio">
                <div className="flex bg-secondary rounded-xl overflow-hidden cursor-pointer">
                    <div>
                        <img src={xmen} className="h-64"/>
                    </div>
                    <div className="p-4 flex flex-col justify-center">
                        <h5 className="text-2xl"> X-men title </h5>
                        <sub> iss #1 </sub>
                    </div>
                </div> 
                <div className="flex bg-secondary rounded-xl overflow-hidden cursor-pointer">
                    <div>
                        <img src={xmen} className="h-64"/>
                    </div>
                    <div className="p-4 flex flex-col justify-center">
                        <h5 className="text-2xl"> X-men title </h5>
                        <sub> iss #1 </sub>
                    </div>
                </div> 
                <div className="flex bg-secondary rounded-xl overflow-hidden cursor-pointer">
                    <div>
                        <img src={xmen} className="h-64"/>
                    </div>
                    <div className="p-4 flex flex-col justify-center">
                        <h5 className="text-2xl"> X-men title </h5>
                        <sub> iss #1 </sub>
                    </div>
                </div> 
                <div className="flex bg-secondary rounded-xl overflow-hidden cursor-pointer">
                    <div>
                        <img src={xmen} className="h-64"/>
                    </div>
                    <div className="p-4 flex flex-col justify-center">
                        <h5 className="text-2xl"> X-men title </h5>
                        <sub> iss #1 </sub>
                    </div>
                </div> 
                <div className="flex bg-secondary rounded-xl overflow-hidden cursor-pointer">
                    <div>
                        <img src={xmen} className="h-64"/>
                    </div>
                    <div className="p-4 flex flex-col justify-center">
                        <h5 className="text-2xl"> X-men title </h5>
                        <sub> iss #1 </sub>
                    </div>
                </div>   
            </div>

            </div>
        </div>
    )
}

export default Arrivals