import React from "react";
import Article from "./article";

const NewsArticles = () => {
    return (
        <div id="newsContainer" className="grid gap-5 p-10 md:grid-cols-2 lg:grid-cols-3 mb-5 xl:grid-cols-4">
            <Article />
            <Article />
            <Article />
            <Article />            
            <Article />
            <Article />
            <Article />
            <Article />
        </div>
    )
}

export default NewsArticles