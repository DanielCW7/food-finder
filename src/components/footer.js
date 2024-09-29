

const Footer = () => {
    return (
        <footer className="bg-base-100 p-8">
            {/* bottom navigation element */}
            <div className="footer container mx-auto ">
                <nav>
                    <h6 className="footer-title"> Food Finder </h6>
                    <a className="link"> Home </a>
                    <a className="link"> Browse </a>
                    <a className="link"> Collections </a>
                </nav>
                <nav> 
                    <h6 className="footer-title"> Relevant Links </h6>
                    <a className="link"> Danielwilson.io </a>
                    <a className="link"> Linkedin </a>
                    <a className="link"> Github </a>
                </nav>              
            </div>

        </footer>
    )
}

export default Footer