import React from "react";
import MultiCard from "./multiCard";

const CollectionSection = () => {
    return (
        <div className="flex flex-wrap gap-10 md:gap-20 p-10 border overflow-visible">
            <MultiCard />
            <MultiCard />
            <MultiCard />
            <MultiCard />
            <MultiCard />
            <MultiCard />
            <MultiCard />
        </div>
    )
}

export default CollectionSection