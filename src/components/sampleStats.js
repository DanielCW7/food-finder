

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
                        <div className="stat-value text-info"> +25,000 </div>
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
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="inline-block w-12 h-12 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
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
                    <div className="stat place-items-left border rounded-xl sm:w-max">
                        
                        <div className="stat-figure text-info">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="inline-block w-12 h-12 stroke-current">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                            </svg>
                        </div>
                        <div className="stat-title "> Plans made </div>
                        <div className="stat-value text-info"> 5 </div>
                        <div className="stat-desc"></div>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default SampleStats