import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

    const options = {
        responsive: true,
        cutout: "80%",
        borderWidth: 0,
        borderRadius: 1000,
        borderColor: "#000",
        offset: 5
    };



// only the pie data, no image in the center
const Chart = (props: {props: Array<number>}) => {

    let data = {
        datasets: [
            {
                data: props.props,
                backgroundColor: [
                    '#ff6384', // protein
                    '#36a2eb', // fat
                    '#2cd34a', // carb
                    '#bababa' // other

                    // should have a subset of colors for micronutrients
                ],
            },
            
        ],
    };
    
    return (
        <div className="w-32">
            <Doughnut data={data} options={options} />
        </div>
    )
}

export default Chart