import React from "react";

const Hero = (props) => {

    return (
            <div className="container mx-auto">
                <div className="flex justify-center items-center min-h-screen">
                    <div className="block prose lg:prose-lg p-8 lg:p-12">
                        <h1 className=""> <span className="text-accent-content">The Comic Collector</span> helps you get completely organized. </h1>
                        <p className="text-secondary-content"> With several different ways to maintain your collections, you can be confident that you're in complete control. </p>
                        <button className="btn btn-primary"> Jump In </button>                        
                    </div>                 
                </div>
            </div>
    )
}

export default Hero