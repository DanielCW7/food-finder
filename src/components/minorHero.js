import React from "react";

const minorHero = (props) => {
    // receives hero image and title


    return (
        <div className="bg-base-300">
            <div className="container mx-auto h-96">
                <div className="flex flex-col h-full justify-end">
                    <div className="block prose lg:prose-lg p-8 lg:p-12">
                        <h1 className=""> {props.title} </h1>
                    </div>                 
                </div>
            </div>    
        </div>
    )
}

export default minorHero