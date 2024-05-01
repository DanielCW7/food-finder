import Nav from "../components/nav";
import Footer from "../components/footer";
import MinorHero from "../components/minorHero";
import SearchResults from "../components/searchResults";

const Browse = () => {
    return (
        <>
            {/* breadcrumbs */}
            <Nav />

            <MinorHero title="Browse" />

            {/* toggle table format with switchboard */}
            <SearchResults />
            <Footer />
        </>
    )
}

export default Browse