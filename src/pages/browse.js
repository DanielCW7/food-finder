import Nav from "../components/sections/nav";
import Footer from "../components/footer";
import MinorHero from "../components/minorHero";
import SearchResults from "../components/searchResults";
import fruits from "../images/fruits.webp"

const Browse = () => {
    return (
        <>
            <Nav />
            <MinorHero title="Browse" background={fruits} />
            <SearchResults />
            <Footer />
        </>
    )
}

export default Browse