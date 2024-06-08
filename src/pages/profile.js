import Nav from "../components/sections/nav";
import Footer from "../components/footer";

const Profile = () => {
    return (
        <>
            <Nav />
            <div className="bg-base-300 mb-8">
                <div className="container mx-auto h-half">
                    <div className="flex flex-col h-full justify-end m-auto">
                        <div className="block prose lg:prose-lg p-8 lg:p-12 m-auto">
                        <div className="m-auto w-48 mask mask-hexagon">
                            <img className="img-square rounded-full" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                            <h1 className="text-center"> Welcome! </h1>
                        </div>                 
                    </div>
                </div>    
            </div>

            {/* profile stats */}
            {/* sections for liked foods, saved recipes, time logs, and plans */}
            
            <Footer />
        </>
    )
}

export default Profile
