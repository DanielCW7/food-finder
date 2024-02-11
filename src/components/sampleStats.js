

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
                        <div className="stat-title"> Comics owned </div>
                        <div className="stat-value"> 367 </div>
                        <div className="stat-desc"> +10 this month </div>
                    </div>
                    <div className="stat place-items-center">
                        <div className="stat-title"> Rare Items </div>
                        <div className="stat-value"> 13% </div>
                        <div className="stat-desc"> of your portfolio </div>
                    </div>
                    <div className="stat place-items-center">
                        <div className="stat-title"> Average Price </div>
                        <div className="stat-value"> 12.99 </div>
                        <div className="stat-desc">  </div>
                    </div>
                </div>
                <div className="prose md:prose-lg">
                    <h2 className="hidden md:block text-2xl font-bold w-48 text-center"> Track your progress </h2>
                </div>
                <div className="container mx-auto stats-vertical max-w-64">
                    <div className="stat place-items-center">
                        <div className="stat-title "> Comics Liked </div>
                        <div className="stat-value"> 3k </div>
                        <div className="stat-desc"> +10 this month </div>
                    </div>
                    <div className="stat place-items-center">
                        <div className="stat-title"> Best Return </div>
                        <div className="stat-value"> 201% </div>
                        <div className="stat-desc"> from acquisition </div>
                    </div>
                    <div className="stat place-items-center">
                        <div className="stat-title"> Collection Worth </div>
                        <div className="stat-value"> $1,500 </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SampleStats