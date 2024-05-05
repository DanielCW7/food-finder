
// will receive props for image, calories, stats
// Dismiss, remove from DOM, Save add to recipes
const foodCard = (props) => {
    return (
        
        // <div className="card w-1/1 md:w-1/2 lg:w-1/3 flex flex-col image-full">
        //     <figure><img src={props.img} className="img-reset"/></figure>
        //     <div className="card-body flex justify-end p-8">
        //         <h4 className="card-title"> {props.name} </h4>
        //         <sub> {props.calories} </sub>
        //         <div className="flex gap-2 flex-wrap mt-4">
        //             <span className="badge badge-secondary"> {props.attr_1} </span>
        //             <span className="badge badge-primary"> {props.attr_2} </span>
        //         </div>
        //         <div className="card-actions">
        //             <button className="btn btn-success btn-outline btn-sm"> Save </button>
        //         </div>
        //     </div>
        //     <span className="absolute right-2 top-2 z-20">
        //         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-8 h-8 stroke-secondary">
        //             <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        //         </svg>                
        //     </span>
        // </div>

        <div className="w-48 flex flex-col shadow-xl rounded-xl bg-base-300">
            <img src={props.img} className="img-reset rounded-xl"/>
            <div className="flex flex-col p-8">

                <div className="flex flex-col">
                    <h4 className="text-xl font-bold"> {props.name} </h4>
                    <div className="flex mt-6 gap-2">
                        <button className="btn btn-sm flex-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                            </svg>
                            Save
                        </button>
                    </div>                    
                </div>
            </div>
            {/* <span className="absolute right-2 top-2 z-20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className="w-8 h-8 stroke-secondary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>                
            </span> */}
        </div>

    )
}

export default foodCard