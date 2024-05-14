
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

        <div className="w-48 flex flex-col rounded-xl bg-base-300 border border-gray-600 relative">
            <button className="btn btn-circle btn-outline w-8 h-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
            </button>            
            <img src={props.img} className="img-square rounded-xl"/>
            <div className="flex flex-col px-6 py-2">

                <div className="flex flex-col">
                    <h4 className="text-xl font-bold"> {props.name} </h4>
                    <p className="text-sm font-thin"> 150 cal. </p>
                                      
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