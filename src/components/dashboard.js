import React from "react";
import Card from "../components/card";

const Dashboard = () => {
    return (
        <div className="p-5 md:p-10">
            <form className="flex flex-row justify-end">
                {/* form filtering options here. dropdown box */}
                <input type="text" placeholder="enter text" className="border p-2"/>
                <input type="submit" className="border p-2"/>
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
        </div>
    )
}

export default Dashboard