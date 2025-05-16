import { useEffect, useState, useRef } from "react";
import Card from "./card";
import Loader from "../../loader";

const Results = (search) => {

    const [isResults, setResults] = useState([]);
    const [isSearched, setSearched] = useState([]);
    const [currentPage, setPage] = useState(1);
    const [isLoading, setLoading] = useState(false);
    const scrollRef = useRef(null);

    const perPage = 20
    const adjusted = perPage * currentPage;

    async function getAll() {

        try {
            setLoading(true)
            // dev fetch
            // fetch('http://localhost:3000/food')
            //    .then(res => res.json())
            //    .then(e => {setResults(e)})


            // prod fetch
            const response = await fetch('/api/browse')

            console.log(response)
            if(response.status != 200) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const res = await response.json()
            console.log("data received...", res.data)

            setResults(res.data)            
        } catch(err) {
            console.error(err)
        } finally {
            setLoading(false)
            console.log("done fetching")
        }

    }

    function getCertain(food) {
        const lowercase = food.toLowerCase()
        const filtered = isResults.filter(e => e.food_name.includes(lowercase))
        setPage(1)
        filtered.length > 0 ? setSearched(filtered) : setSearched([])
    }

    useEffect(() => {
        try {
            if(search.query.length > 0) {
                getCertain(search.query)  
            } else {
                getAll()  
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
        <section className="bg-base-100 flex flex-col mb-12" id="search_results">
            <div className="p-4" ref={scrollRef}></div> 
            <div className="m-auto mb-8 flex flex-row gap-2"> 
                <span> Page {currentPage}  </span>
                <sub> <div className={`badge ${(isSearched.length > 0 ? isSearched.length : isResults.length) ? 'badge-success' : 'badge-error'} badge-outline`}>{isSearched.length > 0 ? isSearched.length : isResults.length}</div> results </sub>
            </div>

        { isLoading ? <Loader /> : "" }
        {
            isResults.length > 0 ?

            
            <div className="m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 w-max p-8">
                {populate(isSearched.length > 0 ? isSearched : isResults)}                 
            </div>
            
            :


            <div className="p-8 my-8">
                <div className="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 m-auto mb-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                    </svg>


                    <h2 className="text-2xl text-center"> No Results  </h2>
                    <p className="text-sm text-center"> try broadening your search. </p>
                </div>  
            </div>                                       
        }



            <div className="m-auto mb-8 flex flex-row gap-2"> 
                <span> Page {currentPage}  </span>
                <sub> <div className={`badge ${(isSearched.length > 0 ? isSearched.length : isResults.length) ? 'badge-success' : 'badge-error'} badge-outline`}>{isSearched.length > 0 ? isSearched.length : isResults.length}</div> results </sub>
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
                    className={`join-item btn ${((isSearched.length > 0 ? isSearched.length : isResults.length) / perPage) < (currentPage) && "btn-disabled"}`}
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
