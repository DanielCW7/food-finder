import Footer from "../components/footer"
import Nav from "../components/sections/nav"
import MinorHero from "../components/minorHero"
import berries from "../images/berries.webp"
import apples from "../images/apples.jpg"

const Compare = () => {
    return (
        <>
            <Nav />
            <MinorHero title="Compare" background={berries} />
            <div className="container m-auto">
                <p>
                    Take two food options and compare their stats with each other!
                </p>

                <div className="container p-5 flex w-full justify-center">
                    <div>
                        <img src={berries} className="img-reset rounded-xl border border-gray-600 md:max-h-64"/>
                    </div>
                    <div className="divider divider-horizontal"> vs </div>
                    <div>
                        <img src={apples} className="img-reset rounded-xl border border-gray-600 md:max-h-64"/>
                    </div>
                </div>
                <ul className="steps w-full">
                    <li className="step step-primary">Food 1</li>
                    <li className="step step-primary">Food 2</li>
                    <li className="step step-primary">Compare</li>
                </ul>            
            </div>
            <Footer />
        </>
    )
}

export default Compare