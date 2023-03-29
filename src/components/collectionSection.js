import React from "react";
import MultiCard from "./multiCard";

const CollectionSection = () => {
    return (
        <div className="flex flex-col justify-center gap-5 p-5 border overflow-visible">
            <MultiCard />
            <MultiCard />
            <MultiCard />
        </div>
    )
}

export default CollectionSection