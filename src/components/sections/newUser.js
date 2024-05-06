// for bottom of the homepage to encourage users to sign up


const NewUser = () => {
    return (
        <div className="bg-base-200 min-h-half flex flex-col justify-center">
            <div className="flex container mx-auto p-8">


                <div className="flex flex-col justify-center flex-grow">
                    <div className="mx-auto text-left mb-16 block prose lg:prose-lg">
                        <h2 className="mb-4"> Ready to get started? </h2>
                        <p> Sign up and start tracking today! </p> 
                    </div>                   
                    <form className="flex flex-col gap-2">
                        <input type="textarea" className="input" placeholder="First name" />
                        <input type="textarea" className="input" placeholder="Last name" />
                        <input type="email" className="input" placeholder="Email" />
                        <button className="btn btn-primary btn-disabled"> Sign up </button>
                        <sub className="m-auto"> *this feature is currently unavailable* </sub>
                    </form>
                </div>

                

            </div>
        </div>
    )
}

export default NewUser