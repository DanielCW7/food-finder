
// break out About cards into separate components

const About = () => {
    return (
        <div className="max-w-4xl m-auto">
            <section className="p-8">
                <div className="text-center text-xl"> Quite Simple. </div>
                <div className="flex flex-col gap-2">
                    <div className="m-2 border p-4">
                        <div> icn </div>
                        <p> title </p>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever it to make a type specimen book.</p>
                    </div>
                    <div className="m-2 border p-4">
                        <div> icn </div>
                        <p> title </p>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever it to make a type specimen book.</p>
                    </div>
                    <div className="m-2 border p-4">
                        <div> icn </div>
                        <p> title </p>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever it to make a type specimen book.</p>
                    </div>                    
                </div>

            </section>

        </div>

    )
}

export default About