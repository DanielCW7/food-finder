

const Hero = () => {
    return (
        <header className="bg-blue-100 min-h-70h flex flex-col">
            <div className=""></div>
            <div className="max-w-4xl m-auto p-8">
                <h1 className="text-4xl text-center pb-4">Food Finder!</h1> 
                <p className="text-center"> lorem ipsum text lorem ipsum text lorem ipsum text lorem ipsum text </p>   
                <div className="flex gap-2 justify-center pt-4">
                    <button className="btn btn-primary"> Sign Up </button>
                    <button className="btn"> Sign In </button>
                </div>            
            </div>
            {/* divider */}
            <svg className="" xmlns="http://www.w3.org/2000/svg" width="auto" height="auto" viewBox="0 0 3683 178" fill="none">
                <path d="M2218.76 65.7453C2603.5 261.342 3563.3 -101.738 3683 179L776.941 179L0 179C418.696 179 1834.03 -129.851 2218.76 65.7453Z" fill="white"/>
            </svg>
            
        </header>
    )
}

export default Hero