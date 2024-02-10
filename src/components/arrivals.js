

const Arrivals = () => {
    return (
        <div className="bg-secondary">
            <div className="container mx-auto p-8">
                <h2 className="text-2xl font-bold"> New Arrivals </h2>

                <div className="collapse bg-base-100">
                    <input type="radio" name="my-accordion-1 cursor-pointer" />
                    <div className="collapse-title">
                        Thanos Wins
                    </div>
                    <div className="collapse-content">
                        <p> content</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Arrivals