import Footer from "../components/footer"
import Nav from "../components/sections/nav"
import MinorHero from "../components/minorHero"

const Compare = () => {
    return (
        <>
            <Nav />
            <MinorHero title="Compare" />
            <div className="container m-auto">
                <h1> Compare </h1>
                {/* steps component, 3 steps, 1st,2nd,submit */}
                <div>
                    <div>
                        {/* food 1 */}
                    </div>
                    <div>
                        {/* food 2 */}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Compare