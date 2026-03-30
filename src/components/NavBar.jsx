const NavBar = () => {
    return (
        <div className="border-b border-gray-300">
            <div className="navbar max-w-350 mx-auto my-4">
                <div className="navbar-start">
                    <div className="flex items-center gap-1 font-extrabold text-3xl bg-linear-to-r from-blue-700 to-purple-700 text-transparent bg-clip-text">
                        DigiTools
                    </div>
                </div>
                <div className="navbar-center hidden md:flex">
                    <ul className="menu-horizontal gap-10 px-1 text-md">
                        <li className="hover:text-purple-500 cursor-pointer transition-all">
                            <a>Products</a>
                        </li>
                        <li className="hover:text-purple-500 cursor-pointer transition-all">
                            <a>Features</a>
                        </li>
                        <li className="hover:text-purple-500 cursor-pointer transition-all">
                            <a>Pricing</a>
                        </li>
                        <li className="hover:text-purple-500 cursor-pointer transition-all">
                            <a>Testimonials</a>
                        </li>
                        <li className="hover:text-purple-500 cursor-pointer transition-all">
                            <a>FAQ</a>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <a  className="hover:text-purple-500 cursor-pointer transition-all"href=""><i class="fa-solid fa-cart-shopping"></i></a>
                    <a  className="hover:text-purple-500 cursor-pointer transition-all">Login</a>
                    <a className="btn bg-linear-to-r from-blue-700 to-purple-700 rounded-full text-white">Get Started</a>
                </div>
            </div>
        </div>

    );
};

export default NavBar;