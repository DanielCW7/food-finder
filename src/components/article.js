import React from "react";
import favorite from '../images/favorite.webp';

const Article = () => {
    return (
        <div className="flex flex-col h-[400px] max-w-lg bg-cover shadow m-auto">
            <div style={{backgroundImage: `url(${favorite})`}} className="h-1/2 bg-cover"></div>
            <div className="flex flex-col p-5">
                <h3 className="font-black"> New SHAZAM movie bombs at the box office... </h3>
                <hr className="m-2"/>
                <p className="mb-5"> having had a dismal marketing performance and making less than their actual budget, SHAZAM reviews say...</p>
                <a> Read More </a>                
            </div>

        </div>
    )
}

export default Article