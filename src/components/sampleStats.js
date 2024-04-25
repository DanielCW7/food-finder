

const SampleStats = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center min-h-50h">
            
            <div className="md:hidden justify-center my-8 block prose lg:prose-lg">
                <h2 className="text-center"> Track your progress </h2>
            </div>

            <div className="flex items-center gap-8">
                {/* <h2 className="flex md:hidden text-2xl font-bold"> Track your progress </h2> */}

                <div className="container mx-auto stats-vertical max-w-64">
                    <div className="stat place-items-center">
                        <div className="stat-title"> Calories consumed </div>
                        <div className="stat-value"> 367,789 </div>
                        <div className="stat-desc"> -102 this month </div>
                    </div>
                    <div className="stat place-items-center">
                        <div className="stat-title"> Vegetable content </div>
                        <div className="stat-value"> 13% </div>
                        <div className="stat-desc"> of your meals </div>
                    </div>
                    <div className="stat place-items-center">
                        <div className="stat-title"> Average plan price </div>
                        <div className="stat-value"> $50.99 </div>
                        <div className="stat-desc">  </div>
                    </div>
                </div>
                <div className="prose md:prose-lg">
                    <h2 className="hidden md:block text-2xl font-bold w-48 text-center"> Track your progress </h2>
                </div>
                <div className="container mx-auto stats-vertical max-w-64">
                    <div className="stat place-items-center">
                        <div className="stat-title "> Items Saved </div>
                        <div className="stat-value"> 302 </div>
                        <div className="stat-desc"> +10 this month </div>
                    </div>
                    <div className="stat place-items-center">
                        <div className="stat-title"> Plans made </div>
                        <div className="stat-value"> 4 </div>
                        <div className="stat-desc">  </div>
                    </div>
                    <div className="stat place-items-center">
                        <div className="stat-title"> Fruit content </div>
                        <div className="stat-value"> 17% </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SampleStats