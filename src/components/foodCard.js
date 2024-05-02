
// will receive props for image, calories, stats
// Dismiss, remove from DOM, Save add to recipes
const foodCard = (props) => {
    return (
        
        <div className="card w-1/1 md:w-1/2 lg:w-1/3 flex flex-col shadow-xl image-full">
            <figure><img src={props.img} className="img-reset"/></figure>
            <div className="card-body">
                <h5 className="card-title"> {props.name} </h5>
                <p> {props.calories} </p>
                <div className="flex gap-2 flex-wrap">
                    <span className="badge badge-secondary"> {props.attr_1} </span>
                    <span className="badge badge-primary"> {props.attr_2} </span>
                </div>
                <div className="card-actions">
                    <button className="btn btn-success btn-outline btn-sm"> Save </button>
                    <button className="btn btn-error btn-outline btn-sm"> Dismiss </button>
                </div>
            </div>
        </div>

    )
}

export default foodCard