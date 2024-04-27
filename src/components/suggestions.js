import chicken from "../images/chicken.jpg"
import apple from "../images/apples.jpg"
import oats from "../images/oats.jpg"

const Suggestions = () => {


    return (
        <div className="bg-base-100 min-h-screen flex flex-col justify-center">
            <div className="container mx-auto p-8">
                <div className="mx-auto text-center mb-16 block prose lg:prose-lg">
                    <h2 className="text-center mb-4"> Spice up your meals with some... </h2>
                </div>

            <div className="flex justify-center flex-wrap gap-8">

                <div className="card w-1/1 lg:w-1/3 flex flex-col shadow-xl image-full">
                    <figure><img src={apple} className="img-reset"/></figure>
                    <div className="card-body">
                        <h5 className="card-title"> Apples </h5>
                        <p> ~90 cal. </p>
                        <div className="flex gap-2 flex-wrap">
                            <span className="badge badge-secondary"> affordable </span>
                            <span className="badge badge-primary"> High fiber </span>
                        </div>
                        <div className="card-actions">
                            <button className="btn"> Save </button>
                            <button className="btn"> Dismiss </button>
                        </div>
                    </div>
                </div>

                <div className="card w-1/1 lg:w-1/3 flex flex-col shadow-xl image-full">
                    <figure><img src={oats} className="img-reset"/></figure>
                    <div className="card-body">
                        <h5 className="card-title"> Oats </h5>
                        <p> ~90 cal. </p>
                        <div className="flex gap-2 flex-wrap">
                            <span className="badge badge-secondary"> affordable </span>
                            <span className="badge badge-primary"> High fiber </span>
                        </div>
                        <div className="card-actions">
                            <button className="btn"> Save </button>
                            <button className="btn"> Dismiss </button>
                        </div>
                    </div>
                </div>

                <div className="card w-1/1 lg:w-1/3 flex flex-col shadow-xl image-full">
                    <figure><img src={chicken} className="img-reset"/></figure>
                    <div className="card-body">
                        <h5 className="card-title"> Chicken </h5>
                        <p> ~90 cal. </p>
                        <div className="flex gap-2 flex-wrap">
                            <span className="badge badge-secondary"> affordable </span>
                            <span className="badge badge-primary"> High fiber </span>
                        </div>
                        <div className="card-actions">
                            <button className="btn"> Save </button>
                            <button className="btn"> Dismiss </button>
                        </div>
                    </div>
                </div> 
 

            </div>

            </div>
        </div>
    )
}

export default Suggestions