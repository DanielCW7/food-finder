import { useState } from "react"

const Nav = () => {
    const [isToggled, setToggle] = useState(false)

    const toggle = () => {
        setToggle(!isToggled)
        console.log(isToggled)
    }

    return (
        <nav className="">
            <div className="max-w-4xl py-4 px-8 border flex w-full justify-between m-auto">
                <div></div>
                <ul>  
                    <li onClick={toggle}>Home</li>
                </ul>
            </div>

            {/* mobile nav */}
            <div className={`${isToggled ? 'block' : 'hidden'} fixed bg-base-100 w-full top-0 bottom-0 flex flex-col justify-between p-6`}>
                <div onClick={toggle} className="cursor-pointer absolute right-6 top-6"> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>

                {/* invisible divider for formatting */}
                <div></div>

                {/* menu options */}
                <div>
                    <ul className="flex flex-col gap-4">
                        <li><div className="alt-font text-5xl">Home</div></li>
                        <li><div className="alt-font text-5xl">Browse</div></li>
                        <li><div className="alt-font text-5xl">Collections</div></li>
                    </ul>
                </div>

                {/* buttons */}
                <div className="flex flex-col gap-4">
                    <button className="btn btn-full btn-primary"> Log In </button>
                    <button className="btn btn-full"> Sign Up </button>
                </div>                
            </div>

        </nav>
    )
}

export default Nav