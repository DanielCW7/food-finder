import React from "react";
import Nav from "../components/sections/nav";
import Footer from "../components/sections/footer";
import Blargh from "../components/test/blargh";

const Test = () => {


    return(
        <div className="bg-base-100">
            <Nav />
            <div className="flex">
                <Blargh />
                <Blargh />
                <Blargh />
                <Blargh />                
            </div>


            <Footer />
        </div>
    )
}

export default Test