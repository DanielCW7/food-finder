
const Arrivals = () => {


    return (
        <div className="bg-base-300 min-h-screen flex flex-col justify-center">
            <div className="container mx-auto p-8">
                <div className="mx-auto text-center mb-16 block prose lg:prose-lg">
                    <h2 className="text-center mb-4"> Consider adding... </h2>
                </div>

            <div className="flex justify-center flex-wrap gap-8">
                <div className="w-1/1 md:w-1/3 lg:w-1/4 flex flex-col">
                    <div className="flex justify-center">
                        <img /*food image*/ className="h-64"/>
                    </div>
                    <div className="p-4 flex flex-col justify-center my-8">
                        <div className="flex gap-2">
                            <span className="badge badge-secondary"> affordable </span>
                        </div>

                        <h5 className="text-2xl"> Apples </h5>
                        <p> ~90 cal. </p>
                    </div>
                </div>
                <div className="w-1/1 md:w-1/3 lg:w-1/4 flex flex-col">
                    <div className="flex justify-center">
                        <img /*food image*/ className="h-64"/>
                    </div>
                    <div className="p-4 flex flex-col justify-center my-8">
                        <div className="flex gap-2">
                            <span className="badge badge-accent"> High fiber </span>
                        </div>

                        <h5 className="text-2xl"> Oats </h5>
                        <p> ~250 cal. / 1 cup </p>
                            {/* modal popup */}
                    </div>
                </div>
                <div className="w-1/1 md:w-1/3 lg:w-1/4 flex flex-col">
                    <div className="flex justify-center">
                        <img /*food image*/ className="h-64"/>
                    </div>
                    <div className="p-4 flex flex-col justify-center my-8">
                        <div className="flex gap-2">
                            <span className="badge badge-success"> High protein </span>
                        </div>

                        <h5 className="text-2xl"> Chicken </h5>
                        <p> ~250 cal. / 1 lb. </p>
                            {/* modal popup */}
                    </div>
                </div>        
            </div>

            </div>
        </div>
    )
}

export default Arrivals