import React from "react";

const minorHero = (props) => {
    // receives hero image and title


    return (
        // bg here
        <div className="bg-base-300 mb-8 background-reset" style={{backgroundImage: `url(${props.background})`}}>
            <div className="container mx-auto h-96">
                <div className="flex flex-col h-full justify-center">
                    <div className="block m-auto prose lg:prose-lg p-8 lg:p-12">
                        <h1 className="text-center text-white drop-shadow-lg"> {props.title} </h1>
                    </div>                 
                </div>
            </div>    
        </div>
    )
}

export default minorHero