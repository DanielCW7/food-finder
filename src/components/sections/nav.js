import { useState } from "react"

const Nav = () => {
    const [isToggled, setToggle] = useState(true)

    const toggle = (element) => {
        setToggle(!isToggled)

        const letters = document.getElementsByClassName("menu-opt");
        const nav = document.querySelector("#mobile_nav")        
        console.log(nav, isToggled)
        
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
        <nav className="">
            <div className="py-4 px-8 border flex w-full justify-between m-auto">
                <div></div>
                <ul className="flex gap-6">  
                    <li onClick={toggle}>Home</li>
                    <li> Browse </li>
                    <li> Collections </li>
                </ul>
            </div>

            {/* mobile nav */}
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
                        <li>
                            <div className="alt-font text-5xl">
                                <span className="menu-opt menu-letter-down">H</span>
                                <span className="menu-opt menu-letter-down">o</span>    
                                <span className="menu-opt menu-letter-down">m</span>    
                                <span className="menu-opt menu-letter-down">e</span>    
                            </div>
                        </li>
                        <li>
                            <div className="alt-font text-5xl">
                                <span className="menu-opt menu-letter-down">B</span>  
                                <span className="menu-opt menu-letter-down">r</span>    
                                <span className="menu-opt menu-letter-down">o</span>    
                                <span className="menu-opt menu-letter-down">w</span>    
                                <span className="menu-opt menu-letter-down">s</span>    
                                <span className="menu-opt menu-letter-down">e</span>      
                            </div>
                        </li>
                        <li>
                            <div className="list alt-font text-5xl">
                                <span className="menu-opt menu-letter-down">C</span> 
                                <span className="menu-opt menu-letter-down">o</span>    
                                <span className="menu-opt menu-letter-down">l</span>    
                                <span className="menu-opt menu-letter-down">l</span>    
                                <span className="menu-opt menu-letter-down">e</span>    
                                <span className="menu-opt menu-letter-down">c</span>    
                                <span className="menu-opt menu-letter-down">t</span>    
                                <span className="menu-opt menu-letter-down">i</span>    
                                <span className="menu-opt menu-letter-down">o</span>    
                                <span className="menu-opt menu-letter-down">n</span>    
                                <span className="menu-opt menu-letter-down">s</span>    
   
                            </div>
                            {/* <ul className="sub-list mt-4 ml-6">
                                <li className=""> Liked foods </li>
                                <li className=""> Meal Plans </li>
                            </ul> */}
                        </li>
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