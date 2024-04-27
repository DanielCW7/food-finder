import Nav from "../components/nav";
import Footer from "../components/footer";


const Recipes = () => {
    return (
        <div>
            <Nav />

            <div className="bg-base-300">
                <div className="container mx-auto h-96">
                    <div className="flex flex-col h-full justify-end">
                        <div className="block prose lg:prose-lg p-8 lg:p-12">
                            <h1 className=""> Recipes </h1>
                        </div>                 
                    </div>
                </div>    
            </div>

        {/* toggle table format  */}
            <table>

            </table>
            <Footer />
        </div>
    )
}

export default Recipes