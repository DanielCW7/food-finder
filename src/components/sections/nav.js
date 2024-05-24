


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
                                    <a className="text-lg"> Home </a>
                                </li>

                                <li className="flex items-center gap-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                    </svg>

                                    <a className="text-lg"> Browse </a>
                                </li>

                                <li className="flex items-center gap-8">
                                    <div tabIndex={0} className="collapse collapse-arrow">
                                        <a className="text-lg collapse-title flex gap-8 px-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6.878V6a2.25 2.25 0 0 1 2.25-2.25h7.5A2.25 2.25 0 0 1 18 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 0 0 4.5 9v.878m13.5-3A2.25 2.25 0 0 1 19.5 9v.878m0 0a2.246 2.246 0 0 0-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0 1 21 12v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6c0-.98.626-1.813 1.5-2.122" />
                                            </svg> 
                                        Collections </a>

                                        <ul className="collapse-content ml-4">
                                            <li> Meal plans </li>
                                            <li> Recipes </li>
                                            <li> Saved Items </li>
                                        </ul>
                                    </div>


                                </li>

                                <li className="flex items-center gap-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                    </svg>

                                    <a className="text-lg"> Profile </a>
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
                            <li><a href="/collections"> Collections </a></li> {/* drawer */}
                            <li><a href="/"> Profile </a></li>
                            {/* icon with profile picture? */}

                        </ul>   
                    </div>                
            </div>


        </div>
    )
}

export default Nav