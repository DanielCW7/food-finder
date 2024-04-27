import React from "react";

const Hero = (props) => {

    return (
            <div className="container mx-auto">
                <div className="flex justify-center items-center min-h-screen">
                    <div className="block prose lg:prose-lg p-8 lg:p-12">
                        <h1 className=""> 
                            <span className="text-primary-content">The Food Finder</span> helps you plan out every meal. 
                        </h1>
                        <p className="text-neutral-content"> 
                            With several different ways to organize your plans, you can be confident that you're in complete control. 
                        </p>
                        <button className="btn btn-primary"> Let's Eat </button> 
                        {/* goes to food browser */}
                    </div>                 
                </div>
            </div>
    )
}

export default Hero