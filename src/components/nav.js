


const Nav = () => {
    return (
        <div className="navbar bg-base-100 fixed z-50">
            <div className="container m-auto">
                    <div className="navbar-start flex lg:hidden">
                        <div className="dropdown">
                            <div tabIndex="0" role="button" className="btn btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>
                            <ul tabIndex="0" className="bg-base-100 menu menu-lg dropdown-content">
                                <li><a> Home </a></li>
                                <li><a> Browse </a></li>
                                <li><a> Plans </a></li>
                                <li><a> Recipes </a></li>
                                <li><a> Profile </a></li>
                            </ul>
                        </div>
                        {/* mobile */}
                    </div>
                        
                    <div className="hidden lg:flex ml-auto">
                        {/* desktop */}
                        <ul className="menu menu-horizontal px-1">
                            <li><a href="/"> Home </a></li>
                            <li><a href="/browse"> Browse </a></li>
                            <li><a href="/plans"> Plans </a></li>
                            <li><a href="/collections"> Collections </a></li>
                            <li><a href="/"> Profile </a></li>
                            {/* icon with profile picture? */}

                        </ul>   
                    </div>                
            </div>


        </div>
    )
}

export default Nav