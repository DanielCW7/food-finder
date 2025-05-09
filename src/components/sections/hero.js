
const Hero = () => {
    return (
        <header className="hero-gradient bg-cover min-h-50h flex flex-col">

            <div className="max-w-4xl m-auto p-8">
                <h1 className="text-4xl text-center pb-4 text-base-100 font-black">Food Finder!</h1> 
                <p className="text-center text-base-200"> get a simple breakdown of your favorite food macronutrients using this nifty tool. </p>   
                <a href="/browse" className="flex gap-2 justify-center pt-4">
                    <button className="btn btn-primary"> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    Browse </button>
                </a>            
            </div>

            {/* divider */}
            <svg className="" xmlns="http://www.w3.org/2000/svg" width="auto" height="auto" viewBox="0 0 3683 176" fill="none">
                <path className="fill-base-100" d="M2218.76 65.7453C2603.5 261.342 3563.3 -101.738 3683 179L776.941 179L0 179C418.696 179 1834.03 -129.851 2218.76 65.7453Z" fill="" />
            </svg>
            
        </header>
    )
}

export default Hero