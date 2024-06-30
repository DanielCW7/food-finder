import Footer from "../components/footer"
import Nav from "../components/sections/nav"
import MinorHero from "../components/minorHero"
import berries from "../images/berries.webp"
import apples from "../images/apples.jpg"

const Compare = () => {
    return (
        <>
            <Nav />
            <MinorHero title="Compare" background={berries} />
            <div className="container m-auto">
                <p>
                    Take two food options and compare their stats with each other!
                </p>

                <div className="flex gap-2 sticky top-16 bg-base-100 z-20 py-4 join">


                {/* filter options */}
                <div className="join flex w-full">
                    {/* use JOIN to group filter options / search / form submits */}
                    <label className="flex-1 pr-0 input input-bordered input-md flex items-center rounded-xl focus:border-warning join-item">
                        <input type="text" className="grow bg-base-100" placeholder="Search by name" />   
                        <button className="join-item btn btn-secondary rounded-xl"> 
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        </button>                                                   
                    </label> 
                    
                    {/* takes 3 form submissions before running a comparison */}
                   
                </div>
                </div>
                <div className="container p-5 flex w-full justify-center">
                    <div>
                        <img src={berries} className="img-reset rounded-xl border border-gray-600 md:max-h-64"/>
                    </div>
                    <div className="divider divider-horizontal"> vs </div>
                    <div>
                        <img src={apples} className="img-reset rounded-xl border border-gray-600 md:max-h-64"/>
                    </div>
                </div>
                <ul className="steps w-full">
                    <li className="step step-primary">Food 1</li>
                    <li className="step step-primary">Food 2</li>
                    <li className="step step-primary">Compare</li>
                </ul>            
            </div>
            <Footer />
        </>
    )
}

export default Compare