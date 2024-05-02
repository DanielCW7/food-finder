
// break out About cards into separate components

const About = () => {
    return (
        <div className="bg-base-200 min-h-screen flex flex-col justify-center">
            <div className="container mx-auto flex flex-col">

                <div className="mx-auto flex items-center max-w-max">
                    <div className="block prose lg:prose-lg p-8 lg:p-12">
                        <h2> How It Works </h2>
                        <p className="leading-normal text-neutral-content"> 
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book.
                        </p>
                    </div>
                </div>

                {/* cards section */}
                <div className="grid gap-2 p-8 grid-cols-2 lg:grid-cols-3">

                    <div className="lg:max-w-sm transition-all p-8 sm:p-10 rounded-xl hover:bg-base-300 cursor-pointer flex flex-col sm:flex-row">
                        <div className="my-auto mr-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 sm:w-12 sm:h-12 stroke-accent">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                            </svg>
                        </div>                        
                        <div className="my-auto">
                            <h3 className="text-2xl font-bold"> Track </h3>
                            <p className="text-xs sm:text-sm"> all of your consumption stats. </p>
                        </div> 
                    </div>

                    <div className="lg:max-w-sm transition-all p-8 sm:p-10 rounded-xl hover:bg-base-300 cursor-pointer flex flex-col sm:flex-row">
                        <div className="my-auto mr-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 sm:w-12 sm:h-12 stroke-accent">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                            </svg>
                        </div>
                        <div className="my-auto">
                            <h3 className="text-2xl font-bold"> Compare </h3>
                            <p className="text-xs sm:text-sm"> nutrition values between items. </p>
                        </div> 
                    </div>

                    <div className="lg:max-w-sm transition-all p-8 sm:p-10 rounded-xl hover:bg-base-300 cursor-pointer flex flex-col sm:flex-row">
                        <div className="my-auto mr-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 sm:w-12 sm:h-12 stroke-accent">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
                            </svg>
                        </div>                        
                        <div className="my-auto">
                            <h3 className="text-2xl font-bold"> Organize </h3>
                            <p className="text-xs sm:text-sm"> your meal plans and foods. </p>
                        </div> 
                    </div>

                    <div className="lg:max-w-sm transition-all p-8 sm:p-10 rounded-xl hover:bg-base-300 cursor-pointer flex flex-col sm:flex-row">
                        <div className="my-auto mr-6">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 sm:w-12 sm:h-12 stroke-accent">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                            </svg>
                        </div>                        
                        <div className="my-auto">
                            <h3 className="text-2xl font-bold"> Browse </h3>
                            <p className="text-xs sm:text-sm"> from a curated list of foods. </p>
                        </div> 
                    </div>
           
                    <div className="lg:max-w-sm transition-all p-8 sm:p-10 rounded-xl hover:bg-base-300 cursor-pointer flex flex-col sm:flex-row">
                        <div className="my-auto mr-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 sm:w-12 sm:h-12 stroke-accent">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                            </svg>
                        </div>                        
                        <div className="my-auto">
                            <h3 className="text-2xl font-bold"> Learn </h3>
                            <p className="text-xs sm:text-sm"> more about the foods you eat. </p>
                        </div> 
                    </div>

                    <div className="lg:max-w-sm transition-all p-8 sm:p-10 rounded-xl hover:bg-base-300 cursor-pointer flex flex-col sm:flex-row">
                        <div className="my-auto mr-6">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 sm:w-12 sm:h-12 stroke-accent">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                            </svg>
                        </div>                        
                        <div className="my-auto">
                            <h3 className="text-2xl font-bold"> Build </h3>
                            <p className="text-xs sm:text-sm"> Fine-tune your meal plans to your liking. </p>
                        </div> 
                    </div>
                </div>
            </div>            
        </div>

    )
}

export default About