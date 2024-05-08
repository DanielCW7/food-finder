

const SampleStats = () => {

    return (
        <div className="flex flex-col justify-center min-h-50h p-8">
            
            <div className="justify-center text-center my-8 block prose lg:prose-lg mx-auto">
                <h2 className=""> Track your progress. </h2>
                <p> Set up multiple different ways to record your food consumption with a variety of helpful trackers. </p>
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
                            <div className="radial-progress bg-base-200" style={{"--value":13}} role="progressbar">
                                
                            <svg className="w-8" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 121.7 122.88">
                                <g className="carrot-light-orange">
                                    <path className="carrot-dark-orange" d="M82.43,23.16c-1.39-0.74-2.8-1.37-4.22-1.9c-0.72-0.27-1.37-0.48-1.97-0.65c-0.62-0.18-1.25-0.32-1.9-0.44 c-9.31-1.73-14.04,3.62-19.77,10.07c-0.62,0.7-1.26,1.41-1.74,1.94C41.19,44.99,31.29,58.63,22.81,72.69 C14.34,86.75,7.3,101.25,1.41,115.75c-0.39,0.96-0.45,1.09-0.49,1.2c-0.99,2.34-1.47,3.49,0.11,5.01c1.44,1.38,2.55,0.99,4.74,0.22 c0.57-0.2,1.26-0.45,1.42-0.5c12.59-4.19,25.82-10.29,39.89-18.87c14.01-8.55,28.88-19.6,44.8-33.7c2.12-1.88-0.39,0.35,1.01-0.88 c6.11-5.38,10.14-8.92,9.46-17.7c-0.04-0.49-0.1-1.03-0.18-1.61c-0.08-0.57-0.17-1.13-0.28-1.69c-0.54-2.78-1.58-5.5-2.99-8.08 C99.06,36.28,92.45,30.49,82.43,23.16L82.43,23.16z"/>
                                    <path d="M89.13,63.95C89.77,63.38,89.37,63.73,89.13,63.95L89.13,63.95L89.13,63.95L89.13,63.95z"/><path class="st2" d="M74.5,50.64c1.04,1.04,1.04,2.74,0,3.79c-1.04,1.04-2.74,1.04-3.79,0L54.79,38.5 c-9.1,10.32-17.11,21.21-24.18,32.41l9.84,9.84c1.04,1.04,1.04,2.74,0,3.79c-1.04,1.04-2.74,1.04-3.79,0l-8.93-8.93l-0.01,0.02 c-7.85,13.03-14.45,26.44-20.03,39.89c6.34-2.21,12.87-4.95,19.6-8.26l-7.49-7.47c-1.04-1.04-1.04-2.74,0-3.79 c1.04-1.04,2.74-1.04,3.79,0l8.7,8.7c3.88-2.04,7.82-4.29,11.84-6.74c7.27-4.44,14.78-9.57,22.56-15.46L50.53,66.35 c-1.04-1.04-1.04-2.74,0-3.79c1.04-1.04,2.74-1.04,3.79,0L70.95,79.2c5.58-4.38,11.3-9.15,17.17-14.34l1.01-0.9l0,0 c-0.14,0.13-0.23,0.2,0,0c4.83-4.25,7.99-7.04,7.54-13c-0.03-0.43-0.08-0.85-0.13-1.26c-0.06-0.43-0.14-0.89-0.24-1.4 c-0.45-2.33-1.37-4.64-2.62-6.84c-1.37-2.4-3.16-4.69-5.18-6.73c-1.8-1.82-3.81-3.46-5.9-4.85c-2.08-1.38-4.24-2.49-6.36-3.29 c-0.49-0.18-1-0.35-1.53-0.5c-0.51-0.14-0.97-0.25-1.39-0.33c-6.16-1.15-9.94,3.11-14.49,8.23l-0.47,0.52L74.5,50.64L74.5,50.64 L74.5,50.64z"/>
                                    <path className="carrot-light-green" d="M121.7,36.63c-5.17-6.32-10.85-9.45-17.24-9.42c7.8-5.47,13.31-14.89,14.23-24.16 c-10.52,1.37-19.1,6.76-24.22,14.92c0.28-6.68-2.83-12.61-9.4-17.97c-4.93,6.19-7.06,15.32-2.93,23.54l17.54,16.72 C107.49,43.41,115.89,41.25,121.7,36.63L121.7,36.63L121.7,36.63z"/>
                                    <path className="carrot-dark-green" d="M121.7,36.63c-5.17-6.32-10.85-9.45-17.24-9.42c-4.04,2.89-8.92,4.11-14.62,3.67l9.83,9.38 C107.49,43.41,115.89,41.25,121.7,36.63L121.7,36.63L121.7,36.63z"/>
                                </g>
                            </svg>

                            </div>
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