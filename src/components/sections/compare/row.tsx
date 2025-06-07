import fruits from "../../images/fruits.webp";

type unit = 'g' | 'l' | 'mg' | 'g';
type side = 'left' | 'right';

interface rowData {
    name: String,
    serving: Number,
    units: unit,
    side: side
};

// individual food rows
const Row = () => {
    return (
        <span className="flex border p-2 w-full">
            <span className="flex flex-col">
                <span className="join">
                    <input type="number" className="join-item w-12"/>
                    <select className="join-item text-sm">
                        <option disabled selected> units </option>
                        <option > g </option>
                        <option > l </option>
                    </select>                    
                </span>

            </span>
            <div className="flex flex-col">
                <img loading="lazy" alt="text" src={fruits} className="rounded-full w-12 h-12" />                
                <p className="text-sm"> foodname </p>
            </div>

        </span>
    )
}
export default Row