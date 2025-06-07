import Oranges from "../../images/oranges.webp";
import fruits from "../../images/fruits.webp";
import Chart from "../../chart";
import Row from "./row";

const Versus = () => {

    let sample = [122,226,321,42]
    let sample_2 = [315,220,30,110]

    return (
        <section className="bg-base-100 m-2" id="search_results">
            <div className="m-auto max-w-4xl flex flex-col gap-8 py-8">
                {/* top ((sticky)) div */}
<div className="">       
                <div className="flex w-full max-w-4xl justify-center">
                    <ul className="flex gap-4">
                        <li className="text-sm flex justify-center gap-2"><span className="badge badge-success badge-xs"></span> Protein </li>
                        <li className="text-sm flex justify-center gap-2"><div className="badge badge-info badge-xs"></div> Fat </li>
                        <li className="text-sm flex justify-center gap-2"><div className="badge badge-error badge-xs"></div> Carb </li>
                        <li className="text-sm flex justify-center gap-2"><div className="badge badge-primary badge-xs"></div> Other </li>
                    </ul>
                </div>

                <div className="flex w-full max-w-4xl justify-center">
                    <div className="flex flex-col justify-center">
                        <div className="flex justify-center">
                            <div className="my-auto">
                                <ul className="flex flex-col gap-1">
                                    <li className="text-sm badge badge-success badge-xs"> {sample[0]} g </li>
                                    <li className="text-sm badge badge-info badge-xs"> {sample[1]} g </li>
                                    <li className="text-sm badge badge-error badge-xs"> {sample[2]} g </li>
                                    <li className="text-sm badge badge-primary badge-xs"> {sample[3]} g </li>
                                </ul>
                            </div>
                            <Chart props={sample} />                             
                        </div>
                        <div className="w-full text-center p-2"> calories total 1</div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="flex justify-center">
                            <Chart props={sample_2} />  
                            <div className="my-auto">
                                <ul className="flex flex-col gap-1">
                                    <li className="text-sm badge badge-success badge-xs"> {sample_2[0]} g </li>
                                    <li className="text-sm badge badge-info badge-xs"> {sample_2[1]} g </li>
                                    <li className="text-sm badge badge-error badge-xs"> {sample_2[2]} g </li>
                                    <li className="text-sm badge badge-primary badge-xs"> {sample_2[3]} g </li>
                                </ul>
                            </div>                        
                        </div>
                        <div className="w-full text-center p-2"> calories total 2 </div>
                    </div>

                </div>
</div>
                {/* bottom scrollable div */}
                <div className="flex w-full max-w-full">
                    <div className="flex flex-col justify-start w-full">
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />
                        <Row />

                    </div>
                    <div className="divider m-auto"></div>
                    <div className="flex flex-col justify-start w-full">
                        <div>
                            <Row />
                            <Row /> 
                            <Row />
                            <Row />
                            <Row />
                            <Row />
                            <Row />
                           
                        </div>
                        {/* add row btn */}
                        <button> add </button>
                    </div>


                </div>
           </div>
        </section>
    )
}

export default Versus