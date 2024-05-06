import chicken from "../images/chicken.jpg"
import apple from "../images/apples.jpg"

const Compare = () => {

    return (
        <div className="flex flex-col justify-center min-h-50h bg-base-300 p-8">
            
            <div className="justify-center my-8 block prose lg:prose-lg mx-auto">
                <h2 className="text-center"> How do they compare? </h2>
            </div>

            {/* divider "VS" */}
            {/* stat bars comparing % values */}

            <div className="flex justify-center container mx-auto">
                <img src={chicken} className="h-20 md:h-32 md:max-w-md rounded-box place-items-center img-reset flex-1"/>
                <div className="divider divider-horizontal h-20 md:h-32">VS</div>
                <img src={apple} className="h-20 md:h-32 md:max-w-md rounded-box place-items-center img-reset flex-1"/>
            </div>

            <div className="flex my-8">
                <div className="flex flex-row justify-center gap-12 container mx-auto">
                    
                    <div className="flex flex-grow gap-2 md:max-w-md">
                        <ul className="flex flex-col gap-2 leading-3 border-r border-base-100 p-2">
                            <li> Calories </li>
                            <li> Fat </li>
                            <li> Protein </li>
                            <li> Carb </li>
                            <li> Sugar </li>
                            <li> Fiber </li>
                        </ul>
                        <div className="flex flex-col justify-center gap-3 flex-1 leading-3">
                            <p> 250 </p>
                            <progress className="progress progress-primary" value={10} max="100"></progress>
                            <progress className="progress progress-secondary" value={80} max="100"></progress>
                            <progress className="progress progress-accent" value={5} max="100"></progress>
                            <progress className="progress progress-warning" value={0} max="100"></progress>
                            <progress className="progress progress-info" value={5} max="100"></progress>
                        </div>                    
                    </div>

                    <div className="flex flex-grow gap-2 md:max-w-md">
                        <ul className="flex flex-col gap-2 leading-3 border-r border-base-100 p-2">
                            <li> Calories </li>
                            <li> Fat </li>
                            <li> Protein </li>
                            <li> Carb </li>
                            <li> Sugar </li>
                            <li> Fiber </li>
                        </ul>
                        <div className="flex flex-col justify-center gap-3 flex-1 leading-3">
                            <p> 90 </p>
                            <progress className="progress progress-primary" value={40} max="100"></progress>
                            <progress className="progress progress-secondary" value={0} max="100"></progress>
                            <progress className="progress progress-accent" value={60} max="100"></progress>
                            <progress className="progress progress-warning" value={10} max="100"></progress>
                            <progress className="progress progress-info" value={70} max="100"></progress>
                        </div>                    
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Compare