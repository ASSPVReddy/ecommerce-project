export function PageNav(){
   return(
     <nav className="container w-full h- flex justify-between h-16 items-center ">
                <div className='z-10'>
                    <ul className="flex space-x-6 pl-3">
                        <li>
                            <a href="../WebApp" className="hover:text-red-300 focus:text-red-300">Home</a>
                        </li>
                        <li>
                            <a href="../Components/Shop" className="hover:text-red-300">Shop</a>
                        </li>
                        <li>
                            <a href="/shop_detail" className="hover:text-red-300">Shop Detail</a>
                        </li>
                        <li className="relative group">
                            <a href="#" className="hover:text-red-300">Pages<i className="fa-solid fa-caret-down pl-2"></i></a>
                            <ul className="absolute left-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-md w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <li>
                                    <a href="/shopping_cart" className="block px-4 py-2 hover:bg-gray-100">Shopping Cart</a>
                                </li>
                                <li>
                                    <a href="/checkout" className="block px-4 py-2 hover:bg-gray-100">Checkout</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="../Components/Contact" className="hover:text-red-300 active:text-red-300 focus:text-red-300">Contact</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="flex space-x-6 pr-3">
                        <li>
                            <a href="/login" className="hover:text-red-300">Login</a>
                        </li>
                        <li>
                            <a href="/register" className="hover:text-red-300">Register</a>
                        </li>
                    </ul>
                </div>
            </nav>
   )
}