import Footer from "../components/sections/footer"
import Nav from "../components/sections/nav"
import Versus from "../components/sections/compare/versus";


const Compare = () => {

    const example: Array<any> = [
        {
            name: "oranges",
            calories: 123
        },
        {
            name: "fruits",
            calories: 1232
        }
    ]

    return (
        <>
            <Nav />
            <section className="hero-gradient min-h-72 pt-32 p-8 flex">
                {/* hero search */}
                <div className="m-auto w-full max-w-xl">
                    {/* searchbar */}
                    <div>
                        <h1 className="text-4xl text-white font-black mb-4"> Compare </h1>
                        <p className="text-white"> Select multiple foods to see how they match up. </p>
                        {/* search fields to add or subtract foods */}
                    </div>
                </div>
            </section>
            {/* default to apples v. oranges */}
            <Versus />
            <Footer />        
        </>

    )
}

export default Compare