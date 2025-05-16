import { useState } from "react"

const Nav = () => {
    const [isToggled, setToggle] = useState(true)

    const toggle = (element) => {
        setToggle(!isToggled)

        const letters = document.getElementsByClassName("menu-opt");
        const nav = document.querySelector("#mobile_nav")        
        
        swap(nav)
        isToggled && fancyAppear(letters)
    }

    const fancyAppear = async (chars) => {

        const wait = (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms))
        }
        
        const a = Array.from(chars)
        for(const i of a) {
            await wait(50) 

            if(isToggled) {
                i.classList.remove("menu-letter-down")
                i.classList.add("menu-letter-up")
            } else {
                i.classList.remove("menu-letter-up")
                i.classList.add("menu-letter-down")
            } 
        }

    }

    const swap = (e) => {
     if(isToggled) {
        e.classList.remove("disappear")
        e.classList.add("appear")
     } else {
        e.classList.remove("appear")
        e.classList.add("disappear")
     }
    }

    return (
        <nav>
            <div className="hidden py-2 px-8 md:flex w-full justify-between m-auto transition-all shadow-2xl bg-base-100" id="desktop_nav">
                <div className="flex justify-end max-w-4xl w-full mx-auto">
                    <ul className="flex gap-8 place-items-center">  
                        <a href="/"><li> Home </li></a>
                        <a href="/browse"><li> Browse </li></a>
                    </ul>
                </div>
            </div>

            
            {/* mobile nav */}
            {/* <div> burger icon </div> */}
            <svg onClick={toggle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="cursor-pointer shadow-lg rounded bg-base-100 md:hidden fixed top-0 size-10 m-8 right-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>

            <div id="mobile_nav" className={`disappear md:hidden fixed bg-base-100 w-full top-0 bottom-0 flex flex-col justify-between p-6`}>
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
                        <a href="/"><li className="text-left">
                            <div className="alt-font text-5xl">
                                <span className="menu-opt menu-letter-down font-black">H</span>
                                <span className="menu-opt menu-letter-down font-black">o</span>    
                                <span className="menu-opt menu-letter-down font-black">m</span>    
                                <span className="menu-opt menu-letter-down font-black">e</span>    
                            </div>
                        </li></a>
                        <a href="/browse"><li className="text-left">
                            <div className="alt-font text-5xl">
                                <span className="menu-opt menu-letter-down font-black">B</span>  
                                <span className="menu-opt menu-letter-down font-black">r</span>    
                                <span className="menu-opt menu-letter-down font-black">o</span>    
                                <span className="menu-opt menu-letter-down font-black">w</span>    
                                <span className="menu-opt menu-letter-down font-black">s</span>    
                                <span className="menu-opt menu-letter-down font-black">e</span>      
                            </div>
                        </li></a>
                    </ul>
                </div>

                <div></div>
                {/* buttons */}
                {/* <div className="flex flex-col gap-4">
                    <button className="btn btn-full btn-primary"> Log In </button>
                    <button className="btn btn-full"> Sign Up </button>
                </div> */}
            </div>

        </nav>
    )
}

export default Nav