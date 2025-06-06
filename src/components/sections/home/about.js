
// break out About cards into separate components

const About = () => {
    return (
        <div className="max-w-4xl m-auto">
            <section className="p-8">
                <h2 className="text-center text-xl alt-font mb-6"> Why Use This App? </h2>
                <div className="flex flex-col md:flex-row justify-center gap-2">
                    <div className="sm:mx-auto m-2 p-4 sm:w-2/3 md:w-1/3">
                        <div className="flex gap-2 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                <path className="stroke-protein" strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
                            </svg>

                            <p className="alt-font-2 text-ocean my-auto font-bold"> Efficient </p>
                        </div>
                        <p> Prioritizing only delivering the most relevant data for making food easier to understand. </p>
                    </div>
                    <div className="sm:mx-auto m-2 p-4 sm:w-2/3 md:w-1/3">
                        <div className="flex gap-2 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                <path className="stroke-protein" strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                            </svg>

                            <p className="alt-font-2 text-ocean my-auto font-bold"> Practical </p>
                        </div>
                        <p> Assembling lists, building meal plans, and counting calories are only the tip of the iceberg. </p>
                        <div className="badge badge-secondary badge-outline"> Coming soon! </div>

                    </div>
                    <div className="sm:mx-auto m-2 p-4 sm:w-2/3 md:w-1/3">
                        <div className="flex gap-2 mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                <path className="stroke-protein" strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z" />
                            </svg>

                            <p className="alt-font-2 text-ocean my-auto font-bold"> Accessible </p>                            
                        </div>

                        <p> Easily create a free account and start planning your meals today. </p>
                        <div className="badge badge-secondary badge-outline"> Coming soon! </div>

                    </div>                    
                </div>

            </section>

        </div>

    )
}

export default About