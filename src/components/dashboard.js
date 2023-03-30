import React from "react";
import Card from "../components/card";

const Dashboard = () => {
    return (
        <div className="p-5 md:p-10">
            <form className="flex flex-row justify-end">
                <select id="cars" name="cars" className="border flex flex-shrink">
                    <option value="volvo">Price Low to High</option>
                    <option value="saab">Price High to Low</option>
                    <option value="fiat">A-Z</option>
                </select> 
                <div>
                    <input type="text" placeholder="Search..." className="border p-2"/>
                    <input type="submit" className="border p-2"/>                    
                </div>               

            </form>
            <div className="flex flex-row gap-10 flex-wrap justify-center my-10">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            {/* magnifying glass svg */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 122.88 122.88"><defs><style>.cls-1{fill-rule:evenodd;}</style></defs><title>glass-zoom</title><path class="cls-1" d="M42.31,0A42.31,42.31,0,0,1,77.52,65.75l8.56,8.56.09-.09a5.38,5.38,0,0,1,7.59,0l27.55,27.55a5.39,5.39,0,0,1,0,7.59l-12,12a5.39,5.39,0,0,1-7.59,0L74.22,93.76a5.38,5.38,0,0,1,0-7.59l.09-.09-8.56-8.56A42.31,42.31,0,1,1,42.31,0Zm0,9.5A32.81,32.81,0,1,1,9.5,42.31,32.81,32.81,0,0,1,42.31,9.5Z"/></svg> */}
        </div>
        
    )
}

export default Dashboard