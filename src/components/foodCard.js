
// will receive props for image, calories, stats
// Dismiss, remove from DOM, Save add to recipes
const foodCard = (props) => {
    return (

        // wrap in an anchor tag for more food details
        <div className="w-48 flex flex-col rounded-xl bg-base-300 border border-gray-600 relative">
            
            {
                props.heart 
                ?   <button className="btn btn-circle btn-outline absolute right-2 top-2 glass">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                        </svg>
                    </button>
                : null
            }
            
            <img src={props.img} className="img-square rounded-xl"/>
            <div className="flex flex-col px-6 py-2">

                <div className="flex flex-col">
                    <h4 className="text-xl font-bold"> {props.name} </h4>
                    <p className="text-sm font-thin"> {props.calories} calories per 100mg </p>
                                      
                </div>
            </div>
        </div>

    )
}

export default foodCard