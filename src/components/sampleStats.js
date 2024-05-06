

const SampleStats = () => {

    return (
        <div className="flex flex-col justify-center min-h-50h p-8">
            
            <div className="justify-center my-8 block prose lg:prose-lg mx-auto">
                <h2 className="text-center"> Track your progress </h2>
            </div>

            <div className="flex items-center gap-8">
                <div className="container mx-auto flex flex-row flex-wrap justify-center gap-2">

                <div className="stat place-items-left border rounded-xl sm:w-max">
                        <div className="stat-figure text-info">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                            </svg>
                        </div>
                        <div className="stat-title"> Calories consumed </div>
                        <div className="stat-value text-info"> 367,789 </div>
                        <div className="stat-desc"> this month </div>
                    </div>

                    <div className="stat place-items-left border rounded-xl sm:w-max">
                        <div className="stat-figure text-info">
                            <div className="radial-progress bg-base-200" style={{"--value":13}} role="progressbar">13%</div>
                        </div>
                        <div className="stat-title"> Vegetable content </div>
                        <div className="stat-value text-info"> 13% </div>
                        <div className="stat-desc"> of your meals </div>
                    </div>

                    <div className="stat place-items-left border rounded-xl sm:w-max">
                        <div className="stat-figure text-info">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                            </svg>
                        </div>
                        <div className="stat-title"> Average plan price </div>
                        <div className="stat-value text-info"> $50.99 </div>
                        <div className="stat-desc">  </div>
                    </div>

                    <div className="stat place-items-left border rounded-xl sm:w-max">
                        
                        <div className="stat-figure text-info">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-12 h-12 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                            </svg>
                        </div>
                        <div className="stat-title "> Items Saved </div>
                        <div className="stat-value text-info"> 302 </div>
                        <div className="stat-desc"> +10 this month </div>
                    </div>
{/* 
                    <div className="stat place-items-left">
                        <div className="stat-title"> Meal plans made </div>
                        <div className="stat-value"> 4 </div>
                        <div className="stat-desc">  </div>
                    </div>

                    <div className="stat place-items-left">
                        <div className="stat-title"> Fruit content </div>
                        <div className="stat-value"> 17% </div>
                    </div>

                    <div className="stat place-items-left">
                        <div className="stat-title "> Recipes bookmarked </div>
                        <div className="stat-value"> 30 </div>
                        <div className="stat-desc"> +10 this month </div>
                    </div>

                    <div className="stat place-items-left">
                        <div className="stat-title"> Protein content </div>
                        <div className="stat-value"> 34% </div>
                        <div className="stat-desc">  </div>
                    </div>

                    <div className="stat place-items-left">
                        <div className="stat-title"> Fiber content </div>
                        <div className="stat-value"> 17% </div>
                    </div> */}
                    
                </div>
            </div>
        </div>
    )
}

export default SampleStats