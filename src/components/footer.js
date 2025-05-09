

const Footer = () => {
    return (
        <footer className="bg-ocean p-8 z-0 w-full">
            {/* bottom navigation element */}
            <div className="max-w-4xl mx-auto flex justify-start px-6 border-l text-white">
                <ul className="flex flex-col gap-4">
                    <a href="/"><li> Home </li></a>
                    <a href="/browse"><li> Browse </li></a>
                    <a href="/"><li> Github </li></a>
                </ul>

            </div>

        </footer>
    )
}

export default Footer