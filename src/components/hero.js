import React from "react";

const Hero = (props) => {

    return (
            <div className="min-h-screen mx-auto flex items-center max-w-max">
                <div className="block prose lg:prose-lg p-8 lg:p-12">
                    <h1 className=""> The Comic Collector helps you get completely organized. </h1>
                    <p> With several different ways to maintain your collections, you can be confident that you're in complete control of your collection. </p>
                    <button className="btn btn-secondary"> Jump In </button>                        
                </div>

            </div>
    )
}

export default Hero