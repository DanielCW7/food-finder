import React from "react";

const mainHero = () => {

    return (
            <header className="container mx-auto">
                <div className="flex justify-center items-center min-h-screen">
                    <div className="block prose lg:prose-lg p-8 lg:p-12">
                        <h1 className=""> 
                            <span className="text-primary-content">The Food Finder</span> helps you plan out every meal. 
                        </h1>
                        <p className="text-neutral-content"> 
                            With several different ways to organize your plans, you can be confident that you're in complete control. 
                        </p>
                        <form className="join flex">
                            <label className="flex-1 join-item input input-bordered flex items-center rounded-xl pr-0">
                                <input type="text" className="grow bg-base-100" placeholder="Search for food" />
                                <button className="join-item btn btn-primary rounded-xl ml-2" type="submit"> 
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                                </button>                              
                            </label>
                           
                            {/* replace text with magnifying glass icon */}
                        </form>
 
                        {/* goes to food browser */}
                    </div>                 
                </div>
            </header>
    )
}

export default mainHero