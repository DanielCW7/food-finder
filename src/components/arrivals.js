import xmen from "../images/xmen.jpg";
import venom from "../images/venom.webp";
import lantern from "../images/lantern.webp"

const Arrivals = () => {


    return (
        <div className="bg-base-300 min-h-screen flex flex-col justify-center">
            <div className="container mx-auto p-8">
                <div className="mx-auto text-center mb-16 block prose lg:prose-lg">
                    <h2 className="text-center mb-4"> New Arrivals </h2>
                    <button className="btn btn-secondary"> Browse </button>                    
                </div>

            <div className="flex justify-center flex-wrap gap-8">
                <div className="w-1/1 md:w-1/3 lg:w-1/4 flex flex-col">
                    <div className="flex justify-center">
                        <img src={xmen} className="h-64"/>
                    </div>
                    <div className="p-4 flex flex-col justify-center my-8">
                        <div className="flex gap-2">
                            <span className="badge badge-primary"> High Value </span>
                            <span className="badge badge-secondary"> Collectible </span>
                        </div>

                        <h5 className="text-2xl"> X-men: The return of Magneto </h5>
                        <p> Iss #1 </p>
                            {/* modal popup */}
                    </div>
                </div>
                <div className="w-1/1 md:w-1/3 lg:w-1/4 flex flex-col">
                    <div className="flex justify-center">
                        <img src={venom} className="h-64"/>
                    </div>
                    <div className="p-4 flex flex-col justify-center my-8">
                        <div className="flex gap-2">
                            <span className="badge badge-accent"> New </span>
                            <span className="badge badge-success"> Trending </span>
                        </div>

                        <h5 className="text-2xl"> Spider-man & Venom </h5>
                        <p> Iss #12 </p>
                            {/* modal popup */}
                    </div>
                </div>
                <div className="w-1/1 md:w-1/3 lg:w-1/4 flex flex-col">
                    <div className="flex justify-center">
                        <img src={lantern} className="h-64"/>
                    </div>
                    <div className="p-4 flex flex-col justify-center my-8">
                        <div className="flex gap-2">
                            <span className="badge badge-success"> Trending </span>
                        </div>

                        <h5 className="text-2xl"> Green Lantern: Omnibus </h5>
                        <p> Iss #1 </p>
                            {/* modal popup */}
                    </div>
                </div>        
            </div>

            </div>
        </div>
    )
}

export default Arrivals