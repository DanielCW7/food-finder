import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, Title);



const options = {
  responsive: true,
  cutout: "80%",
};

const Pie = (props: any) => {


    console.log("props: ", props)
    console.log("stats: ", props.stats)
    console.log("image: ", props.img)  

    let data = {
        datasets: [
            {
                data: props.stats,
                backgroundColor: [
                    '#ff6384', // protein
                    '#36a2eb', // fat
                    '#2cd34a', // carb
                ],
            },
            
        ],
    };    
    return (
        <div className="w-32 md:w-full m-auto">

            <div className="p-0" style={{ position: "relative" }}>
                <Doughnut data={data} options={options} className="absolute" style={{ transform: "translateY(-5%)" }} />
                <img loading="lazy" alt="text" src={props.img} className="img-square rounded-full w-full h-full p-2" />
            </div>

       </div>

    )
}

export default Pie