import Nav from "../components/sections/nav";
import Footer from "../components/footer";
import MinorHero from "../components/minorHero";
import SearchResults from "../components/searchResults";

const Browse = () => {
    return (
        <>
            <Nav />
            <MinorHero title="Browse" />
            <SearchResults />
            <Footer />
        </>
    )
}

export default Browse