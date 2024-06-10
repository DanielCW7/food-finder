


const Nav = () => {
    return (
        <div className="navbar bg-base-100 sticky top-0 z-50">
            <div className="container m-auto">
                
                    <div className="drawer drawer-end flex lg:hidden">
                        <input type="checkbox" className="drawer-toggle" id="nav-drawer" />
                        <div className="drawer-content ml-auto">
                            <label htmlFor="nav-drawer" className="drawer-button"> 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </label>
                        </div>


                        <div className="drawer-side overflow-hidden">
                            {/* <div tabIndex="0" role="button" className="btn btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div> */}
                            <label htmlFor="nav-drawer" className="drawer-overlay"></label>
                            <ul className="bg-base-100 min-h-full flex flex-col justify-center w-64 p-4 gap-10">
                                <li className="flex items-center gap-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>
                                    <a className="text-lg cursor-pointer" href="/"> Home </a>
                                </li>

                                <li className="flex items-center gap-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>

                                    <a className="text-lg cursor-pointer" href="/browse"> Browse </a>
                                </li>

                                <li className="flex items-center gap-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>

                                    <a className="text-lg cursor-pointer" href="/compare"> Compare </a>
                                </li>


                                {/* <li><a> Browse </a></li>
                                <li><a> Collections </a></li>
                                <li><a> Profile </a></li> */}
                            </ul>
                            <button className="btn btn-wide rounded-none text-error bottom-0 fixed text-center py-4"> 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 my-auto">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
                                </svg>

                                log out 
                            </button>
                        </div>
                        {/* mobile */}
                    </div>
                        
                    <div className="hidden lg:flex ml-auto">
                        {/* desktop */}
                        <ul className="menu menu-horizontal px-1">
                            <li><a href="/"> Home </a></li>
                            <li><a href="/browse"> Browse </a></li>
                            {/* <li className="dropdown dropdown-start">
                                    <div tabIndex={0} role="button" className="bg-base-100">Collections</div>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                        <li><a>Meal Plans</a></li>
                                        <li><a>Recipes</a></li>
                                        <li><a>Saved Items</a></li>
                                    </ul>
                            </li> drawer */}
                            <li><a href="/compare"> Compare </a></li>
                            {/* icon with profile picture? */}

                        </ul>   
                    </div>                
            </div>


        </div>
    )
}

export default Nav