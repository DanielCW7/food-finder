import { useEffect, useState, useRef } from "react";
import Card from "./card";


const Results = (search) => {

    const [isResults, setResults] = useState([]);
    const [isSearched, setSearched] = useState([]);
    const [currentPage, setPage] = useState(1);
    const scrollRef = useRef(null);

    const perPage = 16
    const adjusted = perPage * currentPage;

    function getAll() {
        fetch("http://localhost:3000/food")
        .then(res => res.json())
        .then(res => {
            const arr = Array.from(res)
            setResults(arr)
        })    
    }

    function getCertain(food) {
        const lowercase = food.toLowerCase()

        setSearched(isResults.filter(e => e.food_name.includes(food)))
        console.log(isSearched)
    }

    useEffect(() => {
        try {
            if(search.query.length < 1) {
                getAll()
            } else {
                getCertain(search.query)  
            }
        } catch (err) {
            console.error(err)
        }
    }, [search])


    // scroll upward when a new page is requested
    const scrollTop = () => scrollRef.current && scrollRef.current.scrollIntoView({behavior: 'smooth', block: 'start'});

    // creating cards from results
    function populate(params) {
        let reduced = params.slice(adjusted - perPage, adjusted)
        const foods = reduced.map(food => <Card props={food} key={food.food_name}/>)            
        return foods
    }

    return (
        <section className="bg-base-100 flex flex-col" id="search_results">
            <div className="p-4" ref={scrollRef}></div> 
            <div className="m-auto mb-8 flex flex-row gap-2"> 
                <span> Page {currentPage}  </span>
                <sub> <div className={`badge ${(isSearched.length > 0) ? 'badge-success' : 'badge-error'} badge-outline`}>{isSearched.length}</div> results </sub>
            </div>
        {
            isSearched.length > 0 ?
            <div className="m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 w-max p-8">
                {populate(isSearched)}                 
            </div> :
            <div className="p-8 my-8">
                <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 m-auto">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
                    </svg>

                    <h2 className="text-2xl text-center"> No Results...  </h2>
                    <p className="text-sm text-center"> try broadening your search. </p>
                </div>  
            </div>                                       
        }

            <div className="m-auto mb-8 flex flex-row gap-2"> 
                <span> Page {currentPage}  </span>
                <sub> <div className={`badge ${(isSearched.length > 0) ? 'badge-success' : 'badge-error'} badge-outline`}>{isSearched.length}</div> results </sub>
            </div>

            <div className="m-auto join">
                {/* 15 results per page */}
                <input
                    className={`join-item btn ${currentPage < 2 ? "btn-disabled" : null}`}
                    type="radio"
                    name="options"
                    aria-label="Previous"
                    onClick={() => {
                        setPage(currentPage - 1);
                        scrollTop()
                    }}
                />
                <input 
                    className={`join-item btn ${(isSearched.length / perPage) < (currentPage) && "btn-disabled"}`}
                    type="radio" 
                    name="options" 
                    aria-label={"Next"} 
                    onClick={() => {
                        setPage(currentPage + 1)
                        scrollTop()
                    }} 
                />
            </div>
        </section>
    )
}

export default Results