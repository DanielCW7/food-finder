import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

    const options = {
        responsive: true,
        cutout: "80%",
        borderWidth: 2,
        borderRadius: 1000,
        borderColor: "#fff",
        offset: 5
    };

// pie chart with an image in the middle
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
        <div className="md:w-full m-auto">

            <div className="p-0" style={{ position: "relative" }}>
                <Doughnut data={data} options={options} className="absolute" style={{ transform: "translateY(-3%)" }} />
                <img loading="lazy" alt="text" src={props.img} className="img-square rounded-full w-full h-full" />
            </div>

       </div>

    )
}

export default Pie