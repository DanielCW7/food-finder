
// break out About cards into separate components

const About = () => {
    return (
        <div className="bg-base-200 min-h-screen flex flex-col justify-center">
            <div className="container mx-auto flex flex-col lg:flex-row">

                <div className="mx-auto flex items-center max-w-max">
                    <div className="block prose lg:prose-lg p-8 lg:p-12">
                        <h2> How It Works </h2>
                        <p className="leading-normal text-neutral-content"> 
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book.
                        </p>
                    </div>
                </div>

                {/* cards section */}
                <div className="grid gap-8 p-8 grid-cols-1 md:grid-cols-2">

                    <div className="lg:max-w-sm transition-all p-10 rounded hover:bg-base-300 cursor-pointer">
                        <svg className="ml-auto h-12 w-12 fill-accent" x="0px" y="0px" viewBox="0 0 122.879 119.799"><g><path d="M49.988,0h0.016v0.007C63.803,0.011,76.298,5.608,85.34,14.652c9.027,9.031,14.619,21.515,14.628,35.303h0.007v0.033v0.04 h-0.007c-0.005,5.557-0.917,10.905-2.594,15.892c-0.281,0.837-0.575,1.641-0.877,2.409v0.007c-1.446,3.66-3.315,7.12-5.547,10.307 l29.082,26.139l0.018,0.016l0.157,0.146l0.011,0.011c1.642,1.563,2.536,3.656,2.649,5.78c0.11,2.1-0.543,4.248-1.979,5.971 l-0.011,0.016l-0.175,0.203l-0.035,0.035l-0.146,0.16l-0.016,0.021c-1.565,1.642-3.654,2.534-5.78,2.646 c-2.097,0.111-4.247-0.54-5.971-1.978l-0.015-0.011l-0.204-0.175l-0.029-0.024L78.761,90.865c-0.88,0.62-1.778,1.209-2.687,1.765 c-1.233,0.755-2.51,1.466-3.813,2.115c-6.699,3.342-14.269,5.222-22.272,5.222v0.007h-0.016v-0.007 c-13.799-0.004-26.296-5.601-35.338-14.645C5.605,76.291,0.016,63.805,0.007,50.021H0v-0.033v-0.016h0.007 c0.004-13.799,5.601-26.296,14.645-35.338C23.683,5.608,36.167,0.016,49.955,0.007V0H49.988L49.988,0z M50.004,11.21v0.007h-0.016 h-0.033V11.21c-10.686,0.007-20.372,4.35-27.384,11.359C15.56,29.578,11.213,39.274,11.21,49.973h0.007v0.016v0.033H11.21 c0.007,10.686,4.347,20.367,11.359,27.381c7.009,7.012,16.705,11.359,27.403,11.361v-0.007h0.016h0.033v0.007 c10.686-0.007,20.368-4.348,27.382-11.359c7.011-7.009,11.358-16.702,11.36-27.4h-0.006v-0.016v-0.033h0.006 c-0.006-10.686-4.35-20.372-11.358-27.384C70.396,15.56,60.703,11.213,50.004,11.21L50.004,11.21z"/></g></svg>
                        <h3 className="text-2xl font-bold"> Browse </h3>
                        <p className="text-sm"> See what kinds of food you can find with this handy tool. </p> 
                    </div>

                    <div className="lg:max-w-sm transition-all p-10 rounded hover:bg-base-300 cursor-pointer">
                        <svg className="ml-auto h-12 w-12 fill-accent" x="0px" y="0px" viewBox="0 0 122.88 68.04"><g><path d="M2.03,56.52c-2.66,2.58-2.72,6.83-0.13,9.49c2.58,2.66,6.83,2.72,9.49,0.13l27.65-26.98l23.12,22.31 c2.67,2.57,6.92,2.49,9.49-0.18l37.77-38.22v19.27c0,3.72,3.01,6.73,6.73,6.73s6.73-3.01,6.73-6.73V6.71h-0.02 c0-1.74-0.67-3.47-2-4.78c-1.41-1.39-3.29-2.03-5.13-1.91H82.4c-3.72,0-6.73,3.01-6.73,6.73c0,3.72,3.01,6.73,6.73,6.73h17.63 L66.7,47.2L43.67,24.97c-2.6-2.5-6.73-2.51-9.33,0.03L2.03,56.52L2.03,56.52z"/></g></svg>                    
                        <h3 className="text-2xl font-bold"> Track </h3>
                        <p className="text-sm"> Record all of your consumption stats. </p>
                    </div> 

                    <div className="lg:max-w-sm transition-all p-10 rounded hover:bg-base-300 cursor-pointer">
                    <svg className="ml-auto h-12 w-12 fill-accent" x="0px" y="0px" viewBox="0 0 111.07 122.88"><g><path class="st0" d="M97.67,20.81L97.67,20.81l0.01,0.02c3.7,0.01,7.04,1.51,9.46,3.93c2.4,2.41,3.9,5.74,3.9,9.42h0.02v0.02v75.28 v0.01h-0.02c-0.01,3.68-1.51,7.03-3.93,9.46c-2.41,2.4-5.74,3.9-9.42,3.9v0.02h-0.02H38.48h-0.01v-0.02 c-3.69-0.01-7.04-1.5-9.46-3.93c-2.4-2.41-3.9-5.74-3.91-9.42H25.1c0-25.96,0-49.34,0-75.3v-0.01h0.02 c0.01-3.69,1.52-7.04,3.94-9.46c2.41-2.4,5.73-3.9,9.42-3.91v-0.02h0.02C58.22,20.81,77.95,20.81,97.67,20.81L97.67,20.81z M0.02,75.38L0,13.39v-0.01h0.02c0.01-3.69,1.52-7.04,3.93-9.46c2.41-2.4,5.74-3.9,9.42-3.91V0h0.02h59.19 c7.69,0,8.9,9.96,0.01,10.16H13.4h-0.02v-0.02c-0.88,0-1.68,0.37-2.27,0.97c-0.59,0.58-0.96,1.4-0.96,2.27h0.02v0.01v3.17 c0,19.61,0,39.21,0,58.81C10.17,83.63,0.02,84.09,0.02,75.38L0.02,75.38z M100.91,109.49V34.2v-0.02h0.02 c0-0.87-0.37-1.68-0.97-2.27c-0.59-0.58-1.4-0.96-2.28-0.96v0.02h-0.01H38.48h-0.02v-0.02c-0.88,0-1.68,0.38-2.27,0.97 c-0.59,0.58-0.96,1.4-0.96,2.27h0.02v0.01v75.28v0.02h-0.02c0,0.88,0.38,1.68,0.97,2.27c0.59,0.59,1.4,0.96,2.27,0.96v-0.02h0.01 h59.19h0.02v0.02c0.87,0,1.68-0.38,2.27-0.97c0.59-0.58,0.96-1.4,0.96-2.27L100.91,109.49L100.91,109.49L100.91,109.49 L100.91,109.49z"/></g></svg>
                        <h3 className="text-2xl font-bold"> Compare </h3>
                        <p className="text-sm"> See how your food is valued at different retailers. </p>
                    </div> 

                    <div className="lg:max-w-sm transition-all p-10 rounded hover:bg-base-300 cursor-pointer">
                        <svg className="ml-auto h-12 w-12 fill-accent" x="0px" y="0px" viewBox="0 0 122.88 105.02"><g><path d="M97.25,40.58l23.85,10.28c1.48,0.64,2.17,2.36,1.53,3.85c-0.32,0.75-0.93,1.3-1.63,1.57l-23.19,9.39l23.29,10.04 c1.48,0.64,2.17,2.36,1.53,3.84c-0.32,0.75-0.93,1.3-1.63,1.57l-58.52,23.69c-0.73,0.3-1.52,0.27-2.2,0L1.83,81.05 c-1.5-0.61-2.22-2.31-1.61-3.81c0.33-0.82,0.99-1.4,1.76-1.67l22.97-9.96l-23.12-9.4c-1.5-0.61-2.22-2.31-1.61-3.81 c0.33-0.82,0.99-1.4,1.76-1.67l23.53-10.21L1.83,30.9c-1.5-0.61-2.22-2.31-1.61-3.81c0.33-0.82,0.99-1.4,1.76-1.67L60.02,0.24 c0.77-0.33,1.6-0.31,2.31,0l0-0.01l58.77,25.32c1.48,0.64,2.17,2.36,1.53,3.84c-0.32,0.75-0.93,1.3-1.63,1.57L97.25,40.58 L97.25,40.58z M112.36,53.47l-22.73-9.79L62.49,54.66c-0.73,0.3-1.52,0.27-2.2,0L33.08,43.6L10.47,53.4L61.39,74.1L112.36,53.47 L112.36,53.47z M90.19,68.75l-27.7,11.21c-0.73,0.3-1.52,0.27-2.2,0L32.52,68.68l-22.05,9.56l50.92,20.69l50.97-20.63L90.19,68.75 L90.19,68.75z M61.17,6.1l-50.7,21.99l50.92,20.69l50.97-20.63L61.17,6.1L61.17,6.1z"/></g></svg>                    
                        <h3 className="text-2xl font-bold"> Organize </h3>
                        <p className="text-sm"> Create and adjust your meal plans to your liking. </p>
                    </div>  
                                
                </div>
            </div>            
        </div>

    )
}

export default About